# Web Workers

Web Worker为Web内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。此外，他们可以使用`XMLHttpRequest`执行 I/O  (尽管`responseXML`和`channel`属性总是为空)。一旦创建， 一个worker 可以将消息发送到创建它的JavaScript代码, 通过将消息发布到该代码指定的事件处理程序（反之亦然）。本文提供了有关使用Web Worker的详细介绍。

## Web Workers API

一个worker是使用一个构造函数创建的一个对象(e.g. [`Worker()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/Worker)) 运行一个命名的JavaScript文件 - 这个文件包含将在工作线程中运行的代码; workers 运行在另一个全局上下文中,不同于当前的[`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window). 因此，在 [`Worker`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker) 内通过 [`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)获取全局作用域 (而不是[`self`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/self)) 将返回错误。

在专用workers的情况下，[`DedicatedWorkerGlobalScope`](https://developer.mozilla.org/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope) 对象代表了worker的上下文（专用workers是指标准worker仅在单一脚本中被使用；共享worker的上下文是[`SharedWorkerGlobalScope` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope)对象）。一个专用worker仅仅能被首次生成它的脚本使用，而共享worker可以同时被多个脚本使用。