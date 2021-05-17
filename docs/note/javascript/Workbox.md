## PWA之Workbox缓存策略分析

> 此文章摘录于：[PWA之Workbox缓存策略分析_weixin_33877092的博客-CSDN博客](https://blog.csdn.net/weixin_33877092/article/details/87960332)

> 本文主要分析通过workbox(基于1.x和2.x版本，未来3.x版本会有新的结构)生成Service-Worker的缓存策略，workbox是GoogleChrome团队对原来sw-precache和sw-toolbox的封装，并且提供了Webpack和Gulp插件方便开发者快速生成sw.js文件。

### precache（预缓存）

首先看一下 workbox 提供的 Webpack 插件 workboxPlugin 的三个最主要参数：

- globDirectory
- staticFileGlobs
- swDest

其中 `globDirectory` 和 `staticFileGlobs` 会决定需要缓存的静态文件，这两个参数也存在默认值，插件会从compilation参数中获取开发者在 Webpack 配置的 `output.path` 作为 globDirectory 的默认值，`staticFileGlobs` 的默认配置是 html，js，css 文件，如果需要缓存一些界面必须的图片，这个地方需要自己配置。

之后 Webpack 插件会将配置作为参数传递给 workbox-build 模块，workbox-build 模块中会根据 globDirectory 和 staticFileGlobs 读取文件生成一份配置信息，交给 precache 处理。需要注意的是，precache里不要存太多的文件，workbox-build 对文件会有一个过滤， 该模块会读取利用 node 的 fs 模块读取文件，如果文件大于2M则不会加入配置中（可以通过配置 maximumFileSize 修改），同时会根据文件的 buffer 生成一个 hash 值，也就是说就算开发者不改变文件名，只要文件内容修改了，也会生成一个新的配置内容，让浏览器更新缓存。

那么说了那么多，precache 到底干了什么，看一下生成的sw文件：

```js
const fileManifest = [
  {
    'url': 'main.js',
    'revision': '0e438282dc400829497725a6931f66e3'
  },
  {
    'url': 'main.css',
    'revision': '02ba19bb320adb687e08dded3e71408d'
  }
];
const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
```

那还是需要看一下 precache 的代码:

```js
precache(revisionedFiles) {
  this._revisionedCacheManager.addToCacheList({
    revisionedFiles,
  })
}
```

是的，workbox会提供一个对象 `revisionedCacheManager` 来管理所有的缓存，先不管里面具体怎么处理的，往下看有个 `registerInstallActivateEvents`。

```js
_registerInstallActivateEvents(skipWating, clientsClaim) {

  self.addEventListener('install', (event) => {
    const cachedUrls = this._revisionedCacheManager.getCachedUrls();
    event.waitUntil(
      this._revisionedCacheManager.install().then(() => {
        if (skipWaiting) {
          return self.skipWaiting();
        }
      })
    )
}
```

这里可以看出，所有的 precache 都会在 service worker 的 install 事件中完成。`event.waitUntil` 会根据内部promise的结果来确定安装是否完成。如果安装失败，则会舍弃这个ServiceWorker。

现在看一下 `_revisionedCacheManager.install` 里干了什么，首先 `revisionedFiles` 会被放在一个 Map 中，当然这个 `revisionedFiles` 是已经被处理过了， 在经过 `addToCacheList` ->`_addEntries` -> `_parseEntry` 的过程后，会返回：

```js
{
  entryID,
  revision,
  request: new Request(url),
  cacheBust
}
```

entryID 不主动传入可以视为用户传入的url，将用来作为IndexDB中的key存储revision，而request则用来提供给之后的fetch请求，cacheBust默认为true，功能等会再分析。

Map 的set 过程在 `_addEntries` 的 `_addEntryToInstallList` 函数中，这里只需注意因为 fileManifest 中不能存放具有相同 url （或者说entryID）的值，不然会被警告。

现在回来看install，install是一个async函数，返回一个包含一系列Promise请求的Promise.all，符合waitUntil的要求。每一个需要缓存的文件会到 cacheEntry 函数中处理：

```js
async _cacheEntry(precacheEntry) {

  const isCached = await this._isAlreadyCached(precacheEntry);
  const precacheDetails = {
    url: precacheEntry.request.url,
    revision: precacheEntry.revision,
    wasUpdated: !isCached,
  };
  if (isCached) {
    return precacheDetails;
  }
  try {
    await this._requestWrapper.fetchAndCache({
      request: precacheEntry.getNetworkRequest(),
      waitOnCache: true,
      cacheKey: precacheEntry.request,
      cleanRedirects: true,
    });
    await this._onEntryCached(precacheEntry);
    return precacheDetails;
  } catch (err) {
    throw new WorkboxError('request-not-cached', {
      url: precacheEntry.request.url,
      error: err,
    });
  }
}
```

对于每一个请求会去通过 `_isAlreadyCached` 方法访问indexDB 得知是否被缓存过。这里可能有读者会疑惑，我们不是不能在 fileManifest 中不允许存储同样的url，为什么还要查是否缓存过，这是因为当你sw文件更新后，原来的缓存还是存在的，它们或许持有相同的url，如果它们的revision也相同，就不用获取了。

在 _cacheEntry 内部，还有两个异步操作，一个是通过包装后的 `requestWrapper` 的 `fetchAndCache` 请求并缓存数据，一个是通过 `_onEntryCached` 方法更新indexDB，可以看到虽然catch了错误，但依旧会throw出来，意味着任何一个precache的文件请求失败，都会终止此次install。

这里另一个需要注意的地方是 `_requestWrapper.fetchAndCache`，所有请求最后都会在 `requestWrapper`中处理，这里调用的实例方法是 `fetchAndCache` ，说明这次请求会涉及到网络请求和缓存处理两部分。在发出请求后，首先会判断请求结果是否需要加入缓存中：

```js
const effectiveCacheableResponsePlugin =
  this._userSpecifiedCachableResponsePlugin ||
  cacheResponsePlugin ||this.getDefaultCacheableResponsePlugin();
```

如果没有插件配置，会使用 `getDefaultCacheableResponsePlugin()`来取得默认配置，即缓存返回状态为200的请求。

在上面的代码中可以看到在 precache 环境下，会有两个参数为 true, 一个是 waitOnCache，另一个是cleanRedirects。waitOnCache保证在需要缓存的情况下返回网络结果时必须完成缓存的处理，cleanRedirects则会重新包装一下请求重定向的结果。

最后用_onEntryCached把缓存的路径凭证信息存在indexDB中。

在activate阶段，会对precache在cache里的内容进行clean，因为前面只做了更新，如果是新的precache没有的资源地址，在这里会删除。

所以 precache 就是在 service-worker 的 install 事件下完成一次对配置资源的网络请求，并在请求结果返回时完成对结果的缓存。

### runtimecache（运行时缓存）

在了解 runtimecache 前，先看下 workbox-sw 的实例化过程中比较重要的部分：

```js
this._runtimeCacheName = getDefaultCacheName({cacheId});

this._revisionedCacheManager = new RevisionedCacheManager({
  cacheId,
  plugins,
});

this._strategies = new Strategies({
  cacheId
});

this._router = new Router(
  this._revisionedCacheManager.getCacheName(),
  handleFetch
);

this._registerInstallActivateEvents(skipWaiting, clientsClaim);

this._registerDefaultRoutes(ignoreUrlParametersMatching, directoryIndex);

```

所以看出 workbox-sw 实例化的过程主要有生成缓存对应空间名，缓存空间，挂载缓存策略，挂载路由方法（用于处理对应路径的缓存策略），注册安装激活方法，注册默认路由。

precache 对应的就是 runtimecache，runtimecache 顾名思义就是处理所有运行时的缓存，runtimecache 往往应对着各种类型的资源，对于不同类型的资源往往也有不同的缓存策略，所以在 workbox 中使用 runtimecache 需要调用方法，`workbox.router.registerRoute` 也是说明 runtimecache 需要路由层面的细致划分。

看到最后一步的 `_registerDefaultRoutes`，看一下其中的代码，可以发现 workbox 有一个最基本的cache，这个 cache 其实处理的就是前面的 precache，这个 cache 遵从着 cacheFirst 原则：

```js
const cacheFirstHandler = this.strategies.cacheFirst({

  cacheName: this._revisionedCacheManager.getCacheName(),
  plugins,
  excludeCacheId: true,

});

const capture = ({ url }) => {

  url.hash = '';

  const cachedUrls = this._revisionedCacheManager.getCachedUrls();

  if (cachedUrls.indexOf(url.href) !== -1) {
    return true;
  }

  let strippedUrl = this._removeIgnoreUrlParams(url.href, ignoreUrlParametersMatching);
  if (cachedUrls.indexOf(strippedUrl.href) !== -1) {
    return true;
  }

  if (directoryIndex && strippedUrl.pathname.endsWith('/')) {

    strippedUrl.pathname += directoryIndex;

    return cachedUrls.indexOf(strippedUrl.href) !== -1;

  }
  return false;
};

this._precacheRouter.registerRoute(capture, cacheFirstHandler);
```

简单的说，如果你一个路径能直接在 precache 中可以找到，或者在去除了部分查询参数后符合，或者去处部分查询参数添加后缀后符合，就会直接返回缓存，至于请求过来怎么处理的，稍后再看。

我们可以这么认为 precache 就是添加了 cache，至于真实请求时如何处理还是和 runtimecache 在一个地方处理，现在看来，在 workbox 初始化的时候就有了第一个 `router.registerRoute()`，之后的就需要手动注册了。

在写自己注册的策略之前，考虑下，注册了 route 后，又怎么处理呢？在实例化 Router 的时候，我们就会添加一个 `self.addEventListener('fetch', (event) => {...})`，除非你手动传入一个handleFetch参数为false。

在注册路由的时候，`registerRoute(capture, handler, method)`在类中接受一个捕获条件和一个句柄函数，这个捕获条件可以是字符串，正则表达式或者是直接的Route对象，当然最终都会变成 Route 对象（分别通过 ExpressRoute 和 RegExpRoute），Route对象包含匹配，处理方法，和方法（默认为 GET）。然后在注册时会使用一个 Map，以每个使用到的方法为 Key，值为包含所有Route对象的数组，在遍历时也只会遍历相应方法的值。所以你也可以给不同的方法定义同样的捕获路径。

这里使用了 unshift 操作，所以每个新的配置会被压入堆栈的顶部，在遍历时则会被优先遍历到。因为 workbox 实例化是在 registerRoute 之前，所以默认配置优先级最低，配置后面的注册会优先于前面的。

所以最终在页面上，你的每次请求都会被监听，到相应的请求方法数组里找有没有匹配的，如果没有匹配的话，也可以使用 `setDefaultHandler`，`setDefaultHandler`不是前面的 `_registerDefaultRoutes`，它需要开发者自己定义，并决定策略，如果定义了，所有没被匹配的请求就会被这个策略处理。请求还支持设置在，在请求被匹配却没有正确被方法处理情况下的错误处理，最终 event 会用处理方法（策略）处理这个请求，否则就正常请求。这些请求就是 workbox下的 runtimecache。

### 缓存策略

现在来看看 Workbox 提供的缓存策略，主要有这几种：`cache-first`,`cache-only`,`network-first`,`network-only`,`stale-while-revalidate`。

在前面看到，实例化的时候会给 workbox 挂载一个 Strategies 的实例。提供上面一系列的缓存策略，但在实际调用中，使用的是 `_getCachingMechanism`，然后把整个策略类放到一参中，二参则提供了配置项，在每个策略类中都有 handle 方法的实现，最终也会调用 handle方法。那既然如此还搞个 `_getCachingMechanism`干嘛，直接返回策略类就得了，这个等下看。

先看下各个策略，这里就简单说下，可以参考[离线指南](https://link.juejin.im/?target=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Finstant-and-offline%2Foffline-cookbook%2F)，虽然会有一点不一样。

第一个 Cache-First, 它的 handle 方法：

```js
const cachedResponse = await this.requestWrapper.match({
    
  request: event.request,

});
return cachedResponse || await this.requestWrapper.fetchAndCache({

  request: event.request,

  waitOnCache: this.waitOnCache,
});
```

Cache-First策略会在有缓存的时候返回缓存，没有缓存才会去请求并且把请求结果缓存，这也是我们对于precache的策略。

然后是 Cache-only，它只会去缓存里拿数据，没有就失败了。

network-first 是一个比较复杂的策略，它接受 networkTimeoutSeconds 参数，如果没有传这个参数，请求将会发出，成功的话就返回结果添加到缓存中，如果失败则返回立即缓存。这种网络回退到缓存的方式虽然利于那些频繁更新的资源，但是在网络情况比较差的情况（无网会直接返回缓存）下，等待会比较久，这时候 networkTimeoutSeconds 就提供了作用，如果设置了，会生成一个setTimeout后被resolve的缓存调用，再把它和请求放倒一个 Promise.race 中，那么请求超时后就会返回缓存。

network-only，也比较简单，只请求，不读写缓存。

最后提供的策略是 StaleWhileRevalidate，这种策略比较接近 cache-first，代码如下：

```js
const fetchAndCacheResponse = this.requestWrapper.fetchAndCache({

  request: event.request,

  waitOnCache: this.waitOnCache,

  cacheResponsePlugin: this._cacheablePlugin,

}).catch(() => Response.error());

const cachedResponse = await this.requestWrapper.match({

  request: event.request,

});

return cachedResponse || await fetchAndCacheResponse;
```

他们的区别在于就算有缓存，它仍然会发出请求，请求的结果会用来更新缓存，也就是说你的下一次访问的如果时间足够请求返回的话，你就能拿到最新的数据了。

可以看到离线指南中还提供了缓存然后访问网络再更新页面的方法，但这种需要配合主进程代码的修改，WorkBox 没有提供这种模式。

### 自定义缓存配置

回到在缓存策略里提到的，讲讲 `_getCachingMechanism`和缓存策略的参数。默认支持5个参数：'cacheExpiration', 'broadcastCacheUpdate', 'cacheableResponse', 'cacheName', 'plugins'，(当然你会发现还有几个参数不在这里处理，比如你可以传一个自定义的 requestWrapper, 前面提到的 waitOnCache 和 NetworkFirst 支持的 networkTimeoutSeconds)，先看一个完整的示例：

```js
const workboxSW = new WorkboxSW();

const cacheFirstStrategy = workboxSW.strategies.cacheFirst({
  cacheName: 'example-cache',
  cacheExpiration: {
    maxEntries: 10,
    maxAgeSeconds: 7 * 24 * 60 * 60
  },
  broadcastCacheUpdate: {
    channelName: 'example-channel-name'
  },
  cacheableResponse: {
    stses: [0, 200, 404],
    headers: {
      'Example-Header-1': 'Header-Value-1',
      'Example-Header-2': 'Header-Value-2'
    }
  }

  plugins: [
    // Additional Plugins
  ]
});
```

大致可以认定的是 cacheExpiration 会用来处理缓存失效，cacheName 决定了 cache 的索引名，cacheableResponse 则决定了什么请求返回可以被缓存。

那么插件到底是怎么被处理，现在可以看`_getCachingMechanism`函数了，`_getCachingMechanism`函数处理了什么，它其实就是把 `cacheExpiration`，`broadcastCacheUpdate`,`cacheabelResponse`里的参数找到对应方法，传入参数实例化，然后挂在在封装后的wrapperOptions的plugins参数里，但是只是实例化了有什么用呢？这里有关键的一步：

```js
options.requestWrapper = new RequestWrapper(wrapperOptions);
```

所以最终这些插件还是会在 RequestWrapper 里处理，这里的一些操作是我们之前没有提到的，来看下 RequestWrapper 里怎么处理的。

看下 RequestWrapper 的构造函数，取其中涉及到 plugins 的部分：

```js
constructor({cacheName, cacheId, plugins, fetchOptions, matchOptions} = {}) {

  this.plugins = new Map();
  
  if (plugins) {
  
    isArrayOfType({plugins}, 'object');
    
    plugins.forEach((plugin) => {
      for (let callbackName of pluginCallbacks) {
        if (typeof plugin[callbackName] === 'function') {
          if (!this.plugins.has(callbackName)) {
            this.plugins.set(callbackName, []);
          } else if (callbackName === 'cacheWillUpdate') {
            throw ErrorFactory.createError(
              'multiple-cache-will-update-plugins');
          } else if (callbackName === 'cachedResponseWillBeUsed') {
            throw ErrorFactory.createError(
              'multiple-cached-response-will-be-used-plugins');
          }
          this.plugins.get(callbackName).push(plugin);
          }
        }
    });
  }

}
```

plugins是一个Map，默认支持以下几种Key：`cacheDidUpdate`, `cacheWillUpdate`, `fetchDidFail`, `requestWillFetch`, `cachedResponseWillBeUsed`。可以理解为 requestWrapper 提供了一些hooks或者生命周期，而插件就是在 hook 上进行一些处理。

这里举个缓存失效的例子看看怎么处理：

首先我们需要实例化CacheExpirationPlugin，CacheExpirationPlugin没有构造函数，实例化的是CacheExpiration，然后在this上添加maxEntries，maxAgeSeconds。所有的 hook 方法实现都放在了 CacheExpirationPlugin，提供了两个 hook: cachedResponseWillBeUsed 和 cacheDidUpdate，cachedResponseWillBeUsed 会在 RequestWrapper的match中执行，cacheDidUpdate 在 fetchAndCache中 执行。

这里可以看出，每个plugin其实就是对hook或者生命周期调用的具体实现，在把response扔到cache里之后，调用了插件的cacheDidUpdate方法，看下CacheExpirationPlugin中的cacheDidUpdate：

```
async cacheDidUpdate({cacheName, newResponse, url, now} = {}) {
  isType({cacheName}, 'string');

  isInstance({newResponse}, Response);

  if (typeof now === 'undefined') {
    now = Date.now();
  }
  await this.updateTimestamp({cacheName, url, now});
  await this.expireEntries({cacheName, now});
}
```

那么关键就是更新时间戳和失效条数，如果设置了更新时间戳会怎么样呢，在请求的时候，runtimecache也会添加到IndexedDB，值存入的是一个对象，包含了一个url和时间戳。

这个时间戳怎么生效，CacheExpirationPlugin提供了另外一个方法，cachedResponseWillBeUsed:

```
cachedResponseWillBeUsed({cachedResponse, cachedResponse, now} = {}) {
  if (this.isResponseFresh({cachedResponse, now})) {
    return cachedResponse;
  }
  return null;
}
```

RequestWrapper中的match方法会默认从cache里取，取到的是当时的完整 response, 在cache的 response 里的 headers 里取到 date，然后把当时的date加上 maxAgeSecond 和 现在的时间比， 如果小于了就返回 false，那么自然会去发起请求了。

CacheableResponsePlugin用来控制 fetchAndCache 里的 cacheable，它设置了一个 cacheWillUpdate，可以设置哪些 http status 或者 headers 的 response 要缓存，做到更精细的缓存操作。

### 如何配置我的缓存

离线指南已经提供了一些缓存方式，在 workbox 中，可以大致认为，有一些资源会直接影响整个应用的框架能否显示的（开发应用的 JS，CSS 和部分图片）可以做 precache，这些资源一般不存在“异步”的加载，它们如果不显示整个页面无法正常加载。

那他们的更新策略也很简单，一般这些资源的更新需要发版，而在这里用更新sw文件更新。

对于大部分无状态（注意无状态）数据请求，推荐StaleWhileRevalidate方式或者缓存回退，在某些后端数据变化比较快的情况下，添加失效时间也是可以的，对于其它（业务图片）需求，cache-first比较适用。

最后需要讨论的是页面和有状态的请求，页面是一个比较复杂的情况，页面如果是纯静态的，那么可以放入precache。但要注意，如果我们的页面不是打包工具生成的，页面文件很可能不在dist目录下，那么怎么追踪变化呢，这里推荐一种方式，我们的页面往往有一个模版，和一个json串配置hash变量，那么你可以添加这种模式：

```
templatedUrls: {
  path: [
    '.../xxx.html',
    '.../xxx.json'
  ]
}
```

如果没有json，就需要关联所有可能影响生成页面的数据了，那么这些文件的变化都会改变最后生成的sw文件。

如果你在页面上有一些动态信息（比如用户信息等等），那就比较麻烦了，推荐使用 network-first 配合一个合适的失败时间，毕竟大家都不希望用户登录了另一个账号，显示的还是上一个账号，这同样适用于那些使用cookie（有状态）的请求，这些请求也推荐你添加失效策略，和失败状态。

永远记住你的目标，让用户能够更快的看到页面，但不要给用户一个错误的页面。

### 总结

在目前的网络环境下，service worker 的推送服务并不能得到很好的利用，所以使用 service worker 很大程度就是利用其强大的缓存能力给用户在弱网和无网环境的优化，甚至可以通过判断网络环境进行一些预下载，丰富页面的交互。但是一个错误的缓存策略可能会使用户得不到最新的内容，每一个致力于使用 service worker 或者 PWA 的开发者都需要了解其缓存的处理。Google 提供了一系列的工具能够快速生成优质的sw文件，但是配套文档过分简单和无本地化让这些配置如同一个黑盒，使开发者很难确定正确的配置方案。希望能够阅读本文，解决读者这方面的困惑。