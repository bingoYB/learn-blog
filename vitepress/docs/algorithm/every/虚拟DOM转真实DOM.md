写一个函数实现把虚拟dom转化为真实dom，（虚拟dom：{tag:'', attr:[],children:[]}）

```js
// 写一个函数实现把虚拟dom转化为真实dom，（虚拟dom：{ tag: '', attr: [], children: [] } ）

function  render(vdom) {
  let {tag, attr, children} = vdom
  const ele = document.createElement(tag)
  for (const attrName in attr) {
    if (Object.hasOwnProperty.call(attr, attrName)) {
      ele.setAttribute(attrName, attr[attrName])
    }
  }
  
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    let childEle
    if (typeof child == 'string')  childEle = document.createTextNode(child)
    else childEle = render(child)
    ele.appendChild(childEle)
  }
  
  return ele
}

render({ tag: 'div', attr: {id:'testid',name:'testname'}, children: [
  { tag: 'input', attr: { id: '1', name: '1' }, children: [] },
  { tag: 'p', attr: { id: '2', name: '2' }, children: [] },
  'content'
] })
```

