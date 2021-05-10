# 实现maxDeep()

maxDeep([1,2,3,4,5]) // 1

maxDeep([1,[2,3],4,[5,6],[7]]) // 2

maxDeep([1,[2,[3],4],[5,6],[7]]) // 3



```js
function  maxDeep(arr,dep=1) {
  if(! (arr instanceof Array)){
    return 0
  }
  let ans = dep
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let max = dep
    if(el instanceof Array) {
      max = maxDeep(el,dep+1)
    }
    ans = Math.max(ans, max)
  }
  return ans
}
```

