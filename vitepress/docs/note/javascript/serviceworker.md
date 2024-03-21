# Service Worker

Service workers 本质上充当 Web 应用程序、浏览器与网络（可用时）之间的代理服务器。这个 API 旨在创建有效的离线体验，它会拦截网络请求并根据网络是否可用采取来适当的动作、更新来自服务器的的资源。它还提供入口以推送通知和访问后台同步 API。

## 概念

Service worker是一个注册在指定源和路径下的事件驱动[worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker)。它采用JavaScript控制关联的页面或者网站，拦截并修改访问和资源请求，细粒度地缓存资源。你可以完全控制应用在特定情形（最常见的情形是网络不可用）下的表现。

Service worker运行在worker上下文，因此它不能访问DOM。相对于驱动应用的主JavaScript线程，它运行在其他线程中，所以不会造成阻塞。它设计为完全异步，同步API（如[XHR](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)和[localStorage](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/API/Web_Storage_API)）不能在service worker中使用。



基于 Service Worker API 的特性，结合 Fetch API、Cache API、Push API、postMessage API 和 Notification API，可以在基于浏览器的 web 应用中实现如离线缓存、消息推送、静默更新等 native 应用常见的功能，以给 web 应用提供更好更丰富的使用体验。

### 特点

- 网站必须使用 HTTPS。除了使用本地开发环境调试时(如域名使用 `localhost`)
- 运行于浏览器后台，可以控制打开的作用域范围下所有的页面请求
- 单独的作用域范围，单独的运行环境和执行线程
- 不能操作页面 DOM。但可以通过事件机制来处理

### PWA

谷歌给以 Service Worker API 为核心实现的 web 应用取了个高大上的名字：`Progressive Web Apps`（PWA，渐进式增强 WEB 应用），并且在其主要产品上进行了深入的实践。那么，符合 PWA 的应用特点是什么？以下为来自谷歌工程师的解答。

Progressive Web Apps 是:

- **渐进增强** – 能够让每一位用户使用，无论用户使用什么浏览器，因为它是始终以渐进增强为原则。
- **响应式用户界面** – 适应任何环境：桌面电脑，智能手机，笔记本电脑，或者其他设备。
- **不依赖网络连接** – 通过 Service Workers 可以在离线或者网速极差的环境下工作。
- **类原生应用** – 有像原生应用般的交互和导航给用户原生应用般的体验，因为它是建立在 app shell model 上的。
- **持续更新** – 受益于 Service Worker 的更新进程，应用能够始终保持更新。
- **安全** – 通过 HTTPS 来提供服务来防止网络窥探，保证内容不被篡改。
- **可发现** – 得益于 W3C manifests 元数据和 Service Worker 的登记，让搜索引擎能够找到 web 应用。
- **再次访问** – 通过消息推送等特性让用户再次访问变得容易。
- **可安装** – 允许用户保留对他们有用的应用在主屏幕上，不需要通过应用商店。
- **可连接性** – 通过 URL 可以轻松分享应用，不用复杂的安装即可运行。



### 生命周期

```
install -> installed -> actvating -> Active -> Activated -> Redundant
```

## 使用之前

1、使用 `HTTPS` 访问，并且 SSL 证书要正确。关于 https 和 SSL 证书的内容

2、基础API了解

- Fetch API: https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API

  Fetch API 用于 HTTP 请求处理，可以替代 `XMLHttpRequest` 实现异步请求(ajax)，但功能上更为完善。

- Cache API: https://developer.mozilla.org/zh-CN/docs/Web/API/Cache

  Cache API 用于对 HTTP 请求进行缓存管理，是在 ServiceWorker 的规范中定义的，一般也跟 ServiceWorker 一起使用，是实现离线应用的关键。但是 Cache API 又不依赖于 Service Worker，可以单独使用。

## 使用

### 注册

在网站页面上注册实现 Service Worker 功能逻辑的脚本。例如注册 `/sw/sw.js` 文件，参考代码：

```js
if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw/sw.js', {scope: '/'})
    .then(registration => console.log('ServiceWorker 注册成功！作用域为: ', registration.scope))
    .catch(err => console.log('ServiceWorker 注册失败: ', err));
}
```

chrome 浏览器下，注册成功后，可以打开 `chrome://serviceworker-internals/` 查看浏览器的 Service Worker 信息。

**注意：**

Service Worker 的注册路径决定了其 `scope` 默认作用范围。示例中 `sw.js` 是在 `/sw/` 路径下，这使得该 Service Worker 默认只会收到 `/sw/` 路径下的 fetch 事件。如果存放在网站的根路径下，则将会收到该网站的所有 fetch 事件。
如果希望改变它的作用域，可在第二个参数设置 scope 范围。示例中将其改为了根目录，即对整个站点生效。

另外应意识到这一点：Service Worker 没有页面作用域的概念，作用域范围内的所有页面请求都会被当前激活的 Service Worker 所监控。

### 安装

前一步在页面中仅注册了 `sw.js` 脚本，具体的逻辑行为则在 `sw.js` 内实现。那么这里面要做什么呢？参考示例：

```js
// 用于标注创建的缓存，也可以根据它来建立版本规范
const CACHE_NAME = "lzwme_cache_v1.0.0";
// 列举要默认缓存的静态资源，一般用于离线使用
const urlsToCache = [
  '/offline.html',
  '/offline.png'
];

// self 为当前 scope 内的上下文
self.addEventListener('install', event => {
  // event.waitUtil 用于在安装成功之前执行一些预装逻辑
  // 但是建议只做一些轻量级和非常重要资源的缓存，减少安装失败的概率
  // 安装成功后 ServiceWorker 状态会从 installing 变为 installed
  event.waitUntil(
    // 使用 cache API 打开指定的 cache 文件
    caches.open(CACHE_NAME).then(cache => {
      console.log(cache);
      // 添加要缓存的资源列表
      return cache.addAll(urlsToCache);
    })
  );
});
```

需要注意的是，只有 `urlsToCache` 中的文件全部安装成功，Service Worker 才会认为安装完成。否则会认为安装失败，安装失败则进入 `redundant` (废弃)状态。所以这里应当尽量少地缓存资源(一般为离线时需要但联网时不会访问到的内容)，以提升成功率。

安装成功后，即进入等待(waiting)或激活(active)状态。在激活状态可通过监听各种事件，实现更为复杂的逻辑需求。具体参见后文`事件处理`部分。

### Service Worker 的更新

如果 `sw.js` 文件的内容有改动，当访问网站页面时浏览器获取了新的文件，它会认为有更新，于是会安装新的文件并触发 `install` 事件。但是此时已经处于激活状态的旧的 Service Worker 还在运行，新的 Service Worker 完成安装后会进入 waiting 状态。直到所有已打开的页面都关闭，旧的 Service Worker 自动停止，新的 Service Worker 才会在接下来打开的页面里生效。

如果希望在有了新版本时，所有的页面都得到及时更新怎么办呢？

可以在 `install` 事件中执行 `skipWaiting` 方法跳过 waiting 状态，然后会直接进入 `activate` 阶段。接着在 `activate` 事件发生时，通过执行 `clients.claim` 方法，更新所有客户端上的 Service Worker。示例

```js
// 安装阶段跳过等待，直接进入 active
self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => event.waitUntil(
  Promise.all([
    // 更新客户端
    clients.claim(),
    // 清理旧版本
    caches.keys().then(cacheList => Promise.all(
      cacheList.map(cacheName => {
        if (cacheName !== CACHE_NAME) {
          caches.delete(cacheName);
        }
      })
    ))
  ])
));
```

**手动更新**

其实在页面中，也可以手动来管理更新。参考如下示例：

```js
const version = '1.0.1';

navigator.serviceWorker.register('/sw.js').then(reg => {
  if (localStorage.getItem('sw_version') !== version) {
    reg.update().then(() => localStorage.setItem('sw_version', version));
  }
});
```

### Service Worker 事件处理

在安装过程中我们实现了资源缓存，安装完成后则进入了空闲阶段，此时可以通过监听各种事件实现各种逻辑。下面对常见的相关事件作简要介绍。

#### install 事件

当前脚本被安装时，会触发 `install` 事件，具体参考前文的 `安装` 部分的示例。

#### fetch 事件

当浏览器发起请求时，会触发 `fetch` 事件。

Service Worker 安装成功并进入激活状态后即运行于浏览器后台，可以通过 `fetch` 事件可以拦截到当前作用域范围内的 http/https 请求，并且给出自己的响应。结合 `Fetch API` ，可以简单方便地处理请求响应，实现对网络请求的控制。

这个功能是十分强大的。

参考下面的示例，这里实现了一个`缓存优先、降级处理`的策略逻辑：监控所有 http 请求，当请求资源已经在缓存里了，直接返回缓存里的内容；否则使用 `fetch API` 继续请求，如果是 图片或 css、js 资源，请求成功后将他们加入缓存中；如果是离线状态或请求出错，则降级返回预缓存的离线内容。

```js
// 联网状态下执行
function onlineRequest(fetchRequest) {
  // 使用 fecth API 获取资源，以实现对资源请求控制
  return fetch(fetchRequest).then(response => {
    // 在资源请求成功后，将 image、js、css 资源加入缓存列表
    if (
      !response
      || response.status !== 200
      || !response.headers.get('Content-type').match(/image|javascript|test\/css/i)
    ) {
      return response;
    }

    const responseToCache = response.clone();
    caches.open(CACHE_NAME)
      .then(function (cache) {
        cache.put(event.request, responseToCache);
      });

    return response;
  }).catch(() => {
    // 获取失败，离线资源降级替换
    offlineRequest(fetchRequest);
  });
}
// 离线状态下执行，降级替换
function offlineRequest(request) {
  // 使用离线图片
  if (request.url.match(/\.(png|gif|jpg)/i)) {
    return caches.match('/images/offline.png');
  }

  // 使用离线页面
  if (request.url.match(/\.html$/)) {
    return caches.match('/test/offline.html');
  }
}

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(hit => {
        // 返回缓存中命中的文件
        if (hit) {
          return hit;
        }

        const fetchRequest = event.request.clone();

        if (navigator.online) {
          // 如果为联网状态
          return onlineRequest(fetchRequest);
        } else {
          // 如果为离线状态
          return offlineRequest(fetchRequest);
        }
      })
  );
});
```

#### activate 事件

当安装完成后并进入激活状态，会触发 `activate` 事件。通过监听 `activate` 事件你可以做一些预处理，如对于旧版本的更新、对于无用缓存的清理等。

在下面的示例中，我们实现对旧版本的缓存资源清理：

传给 `waitUntil()` 的 Promise 会阻塞其他的事件，直到它完成。这可以确保清理操作会在第一次 fetch 事件之前完成。
在激活时也可执行 `clients.claim` 方法，更新所有客户端上的 Service Worker。

#### push 事件

push 事件是为推送准备的。不过首先你需要了解一下 `Notification API` 和 `PUSH API`(相关链接见后文)。

通过 PUSH API，当订阅了推送服务后，可以使用推送方式唤醒 ServiceWorker 以响应来自系统消息传递服务的消息，即使用户已经关闭了页面。

推送的实现有两步：

不同浏览器需要用不同的推送消息服务器。以 Chrome 上使用 Google Cloud Messaging<GCM> 作为推送服务为例，第一步是注册 applicationServerKey(通过 GCM 注册获取)，并在页面上进行订阅或发起订阅。每一个会话会有一个独立的端点（endpoint），订阅对象的属性(PushSubscription.endpoint) 即为端点值。将端点发送给服务器后，服务器用这一值来发送消息给会话的激活的 Service Worker （通过 GCM 与浏览器客户端沟通）。

在页面上，使用 `PushManager.subscribe()` 来订阅推送服务。示例：

```js
// 向用户申请通知权限，用户可以选择允许或禁止
// Notification.requestPermission 只有在页面上才可执行，Service Worker 内部不可申请权限
Notification.requestPermission().then(grant => {
  console.log(grant); // 如果获得权限，会得到 granted
  if (Notification.permission === 'denied') {
    // 用户拒绝了通知权限
    console.log('Permission for Notifications was denied');
  }
});

let reg;
const applicationServerKey = 'xxx'; // 应用服务器的公钥（base64 网址安全编码）
navigator.serviceWorker.ready.then(_reg => {
  reg = _reg;
  // 获取当前订阅的推送
  return reg.pushManager.getSubscription();
})
  .then(subscription => {
    // 获取的结果没有任何订阅，发起一个订阅
    if (!subscription) {
      return reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      });
    } else {
      // 每一个会话会有一个独立的端点(endpoint)，用于推送时后端识别
      return console.log("已订阅 endpoint:", subscription.endpoint);
    }
  })
  .then(subscription => {
    if (!subscription) {
      return;
    }

    // 订阅成功
    console.log('订阅成功！', subscription.endpoint);

    // 做更多的事情，如将订阅信息发送给后端，用于后端推送识别
    // const key = subscription.getKey('p256dh');
    // updateStatus(subscription.endpoint, key, 'subscribe');
  })
  .catch(function (e) {
    // 订阅失败
    console.log('Unable to subscribe to push.', e);
  });
```

第二步比较简单，是在 Service Worker 中通过监听 `push` 事件对推送的消息作处理。示例：

```js
self.addEventListener('push', function (event) {
  // 读取 event.data 获取传递过来的数据，根据该数据做进一步的逻辑处理
  const obj = event.data.json();

  // 逻辑处理示例
  if (Notification.permission === 'granted' && obj.action === 'subscribe') {
    self.registration.showNotification("Hi：", {
      body: '订阅成功 ~',
      icon: '//lzw.me/images/avatar/lzwme-80x80.png',
      tag: 'push'
    });
  }
});
```

这里有一个关于推送(PUSH API)的完整示例可作参考：

https://github.com/chrisdavidmills/push-api-demo

#### sync 事件

sync 事件由 `background sync` (后台同步)发出。background sync 是 Google 配合 SW 推出的 API，用于为 SW 提供一个可以实现注册和监听同步处理的方法。但它还不在 W3C WEB API 标准中。在 Chrome 中这也只是一个实验性功能，需要访问 `chrome://flags/#enable-experimental-web-platform-features` ，开启该功能，然后重启生效。

后台同步功能允许你一次性或按间隔请求后台数据同步，即使用户没有打开网站，仅唤醒了 ServiceWorker，也会如此。

当你从页面请求执行此操作的权限，用户将收到提示。后台同步适合于： 非紧急更新，特别是那些需要定期进行的更新，每次更新都发送一个推送通知会显得太频繁，如在某个时间推送一篇特色文章或一条消息通知，这在 native 应用中非常常见。

参考下面的示例。

A. 在页面注册 sync：

```js
navigator.serviceWorker.ready.then(function (swRegistration) {
  return swRegistration.sync.register('myFirstSync');
});
```

B. 在 SW 中监听 `sync` 事件：

```js
self.addEventListener('sync', function (event) {
  if (event.tag === 'myFirstSync') {
    event.waitUntil(doSomething());
  }
});
```

#### message 事件

ServiceWorker 运行于独立的沙盒中，无法直接访问当前页面的 DOM 等信息，但是通过 `postMessage` API，可以实现他们之间的消息传递。

跨文档的 postMessage 消息传输，需要获取接收方的文档句柄。那么当需要将消息从页面传输给 ServiceWorker 或从 ServiceWorker 传输给页面时，如何获取对应的文档句柄？我们参考下面的示例来了解。

A. 页面发消息给 serviceWorker

在页面上通过 `navigator.serviceWorker.controller` 获得 ServiceWorker 的句柄。但只有 ServiceWorker 注册成功后该句柄才会存在。

```js
function sendMsg(msg) {
  const controller = navigator.serviceWorker.controller;

  if (!controller) {
    return;
  }

  controller.postMessage(msg, []);
}

// 在 serviceWorker 注册成功后，页面上即可通过 navigator.serviceWorker.controller 发送消息给它
navigator.serviceWorker
  .register('/test/sw.js', { scope: '/test/' })
  .then(registration => console.log('ServiceWorker 注册成功！作用域为: ', registration.scope))
  .then(() => sendMsg('hello sw!'))
  .catch(err => console.log('ServiceWorker 注册失败: ', err));
```

在 ServiceWorker 内部，可以通过监听 message 事件即可获得消息：

```js
self.addEventListener('message', function (ev) {
  console.log(ev.data);
});
```

B：ServiceWorker 发消息给页面

```js
self.clients.matchAll().then(clientList => {
    clientList.forEach(client => {
        client.postMessage('Hi, I am send from Service worker！');
    })
});
```

#### online/offline 事件

当网络状态发生变化时，会触发 `online` 或 `offline` 事件。结合这两个事件，可以与 `Service Worker` 结合实现更好的离线使用体验，例如当网络发生改变时，替换/隐藏需要在线状态才能使用的链接导航等。

下面是一个监听 `offline` 的示例：

```js
self.addEventListener('offline', function () {
  Notification.requestPermission().then(grant => {
    if (grant !== 'granted') {
      return;
    }

    const notification = new Notification("Hi，网络不给力哟", {
      body: '您的网络貌似离线了，不过在志文工作室里访问过的页面还可以继续打开~',
      icon: '//lzw.me/images/avatar/lzwme-80x80.png'
    });

    notification.onclick = function () {
      notification.close();
    };
  });
});
```

#### error 和 unhandledrejection 事件

当 JS 执行发生错误，会触发 error 事件；当 Promise 类型的回调发生 reject 却没有 catch 处理，会触发 unhandledrejection 事件。

对于这类事件，前端应当作埋点上报，以便于统计监控和及时发现处理。一般情况下上报的信息应从 error 中读取，主要包括错误堆栈相关信息以便定位。参考如下示例：

```js
self.onerror = function(errorMessage, scriptURI, lineNumber, columnNumber, error) {
    if (error) {
        reportError(error);
    } else {
        reportError({
            message: errorMessage,
            script: scriptURI,
            line: lineNumber，
            column: columnNumber
        });
    }
}
```

监听 `unhandledrejection` 事件：

```js
self.addEventListener('unhandledrejection', function (event) {
  reportError({
    message: event.reason
  })
});
```

#### beforeinstallprompt 事件

当发生 `Add to Homescreen` (A2HS, 添加到主屏幕)行为的请求时，会触发该事件。它发生于页面中，与 Service Worker 并没有直接关系。

如果你的站点符合 A2HS 的条件(具体参见后文介绍)，浏览器(chrome) 会根据默认的行为算法，来决定何时主动的向用户展示添加到首屏提示。另外，用户也可以通过 chrome 菜单中的 `添加到主屏幕` 选项主动添加。

可以在页面中通过监听 `beforeinstallprompt` 事件，决定是否屏蔽/延迟该行为，或者统计用户选择了允许还是拒绝。示例：

```js
let deferredPrompt; // 用于缓存 beforeinstallprompt 的事件对象

window.addEventListener('beforeinstallprompt', function (event) {
  // 阻止该行为，只需要返回 false
  // event.preventDefault();
  // deferredPrompt = event;
  // return false;

  // 统计用户的选择
  event.userChoice.then(function (choiceResult) {
    console.log(choiceResult.outcome); // 为 dismissed 或 accepted
    if (choiceResult.outcome === 'dismissed') {
      console.log('User cancelled home screen install');
    } else {
      console.log('User added to home screen');
    }
  });
});

// 在 beforeinstallprompt 事件中屏蔽了浏览器的默认行为，在页面中通过按钮让用户主动选择
document.getElementById('addToHomeScreen').addEventListener('click', function () {
  if (deferredPrompt) {
    deferredPrompt.prompt();
  }
})
```



## 其他相关参考

- [网站渐进式增强体验(PWA)改造：Service Worker 应用详解 - 志文工作室 (lzw.me)](https://lzw.me/a/pwa-service-worker.html#1 什么是 Service Worker)

- https://w3c.github.io/ServiceWorker/
- https://www.w3.org/TR/service-workers/
- https://github.com/w3c/ServiceWorker
- Using Service Workers https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers
- Service_Worker_API https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API
- Progressive Web Apps https://developers.google.com/web/progressive-web-apps/
- https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
- https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/?hl=zh-cn
- SW 离线指南 https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
- Service Workers’ API 信息图 https://github.com/delapuente/service-workers-101
- Service Workers 与离线缓存 https://segmentfault.com/a/1190000008491458
- 【Service Worker】生命周期那些事儿 https://segmentfault.com/a/1190000007487049
- Service Worker 生命周期 https://segmentfault.com/a/1190000006061528
- https://www.pangjian.me/2017/02/08/service-worker-offlinemode/
- https://www.slideshare.net/patrickmeenan/service-workers-for-performance
- PWA 在饿了么的实践经验 https://zhuanlan.zhihu.com/p/25800461