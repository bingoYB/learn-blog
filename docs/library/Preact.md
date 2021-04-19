# [Preact](https://www.preactjs.com.cn/)

React 的轻量级替代方案，体积仅有 3kB，并且拥有与 React 相同的 API

``` jsx
function Counter() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </>
  )
}
```

### 与众不同的软件库

离 DOM 更近

Preact 在 DOM 上实现了一个最薄的虚拟 DOM 抽象层。 Preact 构建再稳定的平台特性之上，注册真正的事件处理程序，并于其它库配合良好。

Preact 可以直接再浏览器中使用，无需任何转换步骤。can be used directly in the browser without any transpilation steps.

体积小

大多数 UI 框架的体积是相当大的，占用了 JavaScript 应用程序的大部分体积。 Preact 不同：它足够小，你的代码 才是你的应用程序的主要构成部分。

这意味着下载更少的 JavaScript 代码，解析和执行也会更快 - 为你的代码节省更多时间，因此你可以按照你的定义实现用户体现，而无须受框架的控制。

性能高

Preact 运行速度快并不仅仅是因为它的体积小。Preact 拥有一个简单和可预测的 diff 实现，使它成为最快的虚拟 DOM 库之一。

我们通过批量更新把 Preact 的性能调整到极致。我们与浏览器工程师密切合作，以便尽可能让 Preact 达到最高性能。
