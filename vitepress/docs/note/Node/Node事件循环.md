# Node事件循环

### Node.js 对异步 IO 的实现我们来看一下 Node.js 异步 IO 实现图：

![异步IO](./node_async.png)

- 应用程序先将 JS 代码经 V8 转换为机器码。
- 通过 Node.js Bindings 层，向操作系统 Libuv 的事件队列中添加一个任务。
- Libuv 将事件推送到线程池中执行。
- 线程池执行完事件，返回数据给 Libuv。
- Libuv 将返回结果通过 Node.js Bindings 返回给 V8。
- V8 再将结果返回给应用程序。

Libuv 实现了 Node.js 中的 Eventloop ，主要有以下几个阶段：

   

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

上图中每一个阶段都有一个先进先出的回调队列，只有当队列内的事件执行完成之后，才会进入下一个阶段。

- timers：执行 `setTimeout` 和 `setInterval` 中到期的 callback。

- pending callbacks：上一轮循环中有少数的 I/O callback 会被延迟到这一轮的这一阶段执行。

  - 执行一些系统操作的回调，例如 tcp 连接发生错误。

- idle, prepare：仅内部使用。

- poll：最为重要的阶段，执行 I/O callback(node 异步 api 的回调，事件订阅回调等)，在适当的条件下会阻塞在这个阶段。

  - 如果 poll 队列不为空，直接执行队列内的事件，直到队列清空。

  - 如果 poll 队列为空。

    - 如果有设置 setImmediate，则直接进入 check 阶段。
    - 如果没有设置 setImmediate，则会检查是否有 timers 事件到期。
      - 如果有 timers 事件到期，则执行 timers 阶段。
      - 如果没有 timers 事件到期，则会阻塞在当前阶段，等待事件加入。

    > 执行计时器的顺序将根据调用它们的上下文而异。如果二者都从主模块内调用，则计时器将受进程性能的约束（这可能会受到计算机上其他正在运行应用程序的影响）。
    >
    > 如果你把这两个函数放入一个 I/O 循环内调用，setImmediate 总是被优先调用：
    >
    > ```js
    > // timeout_vs_immediate.js
    > const fs = require('fs');
    > 
    > fs.readFile(__filename, () => {
    >   setTimeout(() => {
    >     console.log('timeout');
    >   }, 0);
    >   setImmediate(() => {
    >     console.log('immediate');
    >   });
    > });
    > ```
    >
    > ```shell
    > $ node timeout_vs_immediate.js
    > immediate
    > timeout
    > ```

- check：执行 `setImmediate` 的 callback。

- close callbacks：执行 close 事件的 callback，例如 socket.on("close",func)。

**除此之外，Node.js 提供了 process.nextTick(微任务，promise 也一样) 方法，在以上的任意阶段开始执行的时候都会触发。**





参考文章：[Node.js 事件循环，定时器和 process.nextTick() | Node.js (nodejs.org)](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/#:~:text=事件循环是 Node.js 处理非阻塞 I%2FO 操作的机制——尽管 JavaScript,是单线程处理的——当有可能的时候，它们会把操作转移到系统内核中去。 既然目前大多数内核都是多线程的，它们可在后台处理多种操作。 当其中的一个操作完成的时候，内核通知 Node.js 将适合的回调函数添加到 轮询 队列中等待时机执行。)