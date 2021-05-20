# Redux的理解

redux是一个经典的函数式编程的实现，store就相当于函数式编程中范畴论里的container【容器】，相当于一个小的范畴，范畴包含两块东西：值与变形关系，而store中的currenState就是其中的值，value;容器中有一种特殊的容器：函子，函子有个map方法可以接受变形关系将值映射到另一个值，reducer就是redux中map，接受action变形关系，生成下一个状态，而redux的实现运用了高阶函数、柯里化、组合这些技巧来实现



框架

1、store：仓库，存放数据状态

2、state ：状态  value 容器中的值

3、action：动作指令  f  变形关系

4、reducer：转换器，根据action转换状态  map

5、dispatch：触发器，提交action，触发state修改



![img](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)



6、midledware   IO函子（异步操作）

技巧：函数式编程里的柯里化，组合的思想，高阶函数

```js
//源码
export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
          'Other middleware would not be applied to this dispatch.'
      )
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}

```



经过中间件改造后的dispatch

```
function(action){
	mid1(mid2(mid3(dispatch)));
}
```



单个中间件：

```
function(store){
	return function(dispatch){
		
		return function(action){
			//最里层的方法才是改造后的dispatch方法
			//那是否我在这不调用dispatch，就不会调用dispatch
		}
	}
}
```





不借助middleware的异步操作

```javascript
//异步方法
getData(param){
	return fetch(url,param)
}

store.dispatch({type:"fetch start"})
getData(param).then(rs=>{
	store.dispatch({
		type:"fetch success",
		payload:rs
	})
})
```



异步请求一般有三个状态，开始，成功，失败，



###### **面试——Redux相关**

**1|介绍 Redux 数据流的流程；**

> 提示：此题需要明白整个 redux 内部流程，清楚 reducer、action、state 的作用

用户发起action，通过store的dispatch方法，将action传入store，store自动调用reducer，传入action与当前的state，将reducer返回的值设为为新state，然后store触发监听函数，更新view

**2|Redux 如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理**

> 提示：这道题需要明白数据流走向和 react-redux 到 react 组件的链接

**4|介绍 redux，主要解决什么问题**

> 提示：想想为什么要用它

统称状态管理器，用于简化复杂页面view之前事件传递，数据通信的，将代码解耦分割成组件，视图与数据分离；适用于多交互，多数据源场景

**5|redux 请求中间件如何处理并发**

>  提示：首先要明白自己用的异步中间件的内部处理过程，再思考同时多个异步又如何



redux-thunk

```js
// react 中直接获取异步数据的例子
componentDidMount() {
  axios.get('/list.json').then((res) => {
    const data = res.data
    const action = initListAction(data)
    store.dispatch(action)
  })
}
```

乍一看代码没啥问题，但是随着业务的扩展，异步请求可能变多，数据处理过程也变得复杂，组件的生命周期也变得越来越臃肿，组件也变得越来越大；

而redux-thunk它可以将这些异步请求或者是复杂的逻辑放到 action 去处理

经过改造后则如下：

```js
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
    })
  }
}
```



```js
componentDidMount() {
  const action = getTodoList()
  store.dispatch(action) // 调用 store.dispatch()这个函数时，action这个函数就会被执行
}
```

除此之外，在做自动化测试的时候，测试 actionCreactor 这个方法，也会比测组件的生命周期函数要简单的多



**6|Redux 中异步的请求怎么处理**



> 提示：和上题一样

**7|Redux 中间件是什么东西，接受几个参数**

> 提示：需要明白中间件是什么，为什么需要它，它的作用是什么

redux的中间件在这个流程里边，指的是 action 和 store 中间，通过对 store 的 dispatch 方法做一个升级，让在action到reducer之间可以做更多的事，比如记录日志【redux-logger】，redux-persist【持久化state】，处理异步请求【redux-thunk、redux-promise、redux-saga】



**8|redux 的设计思想**

单向数据流、状态不可变性、

**9| 接入 redux 的过程**

> 提示：需要明白 redux 是一个单独的状态管理的东西，它不属于某个 UI 框架的部分

**11|Redux 中哪些功能用到了哪些设计模式**

>  提示：这个需要熟悉 redux 源码了

**12|Redux 状态管理器和变量挂载到 window 中有什么区别**

> 提示：需要明白整个 redux 数据流程和 window 上的数据管理的过程

状态更改可回溯——Time travel，数据多了的时候可以很清晰的知道改动在哪里发生。

**13|介绍下 redux 整个流程原理**

> 略

**14|redux 状态树的管理**

> 略

**15|Redux 数据回溯设计思路**

> 提示：数据回溯需要记录每一次数据的状态

**16|聊聊 Redux 相关的异步中间件的区别，比如：redux-saga、**





##### redux mobx差异点

1. Redux的编程范式是函数式的而Mobx是面向对象的；

2. 因此数据上来说Redux理想的是immutable的，每次都返回一个新的数据，而Mobx从始至终都是一份引用。因此Redux是支持数据回溯的；

3. 然而和Redux相比，使用Mobx的组件可以做到精确更新，这一点得益于Mobx的observable；对应的，Redux是用dispath进行广播，通过Provider和connect来比对前后差别控制更新粒度，有时需要自己写SCU；Mobx更加精细一点。







