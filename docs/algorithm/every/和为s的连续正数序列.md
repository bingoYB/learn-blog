# 和为s的连续正数序列

输入一个正整数 `target` ，输出所有和为 `target` 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

**示例 1：**

```
输入：target = 9
输出：[[2,3,4],[4,5]]
```

**示例 2：**

```
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```

 

1、前缀和

定义 pre[i] 为  1+2+3+...+i 的值

假设 [m,n]区间满足和为target，即 n+n+1+n+2+...+m = target

则必定满足 pre[m] - pre[n-1] = target

例如：

```
输入：target = 9
输出：[[2,3,4],[4,5]]

第一个答案[2,3,4]的区间是[2,4]
pre[4] = 4+3+2+1 
pre[2-1] = 1
pre[4]-pre[2-1] = 4+3+2 = 9
```

转变一下等式就是

pre[m] - target = pre[n-1]



```javascript
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let sum = 0
  let map = {0:0}  //存放前缀和对应的位置   key值为前i个元素的和，value为 i
  let length = Math.round(target / 2) //遍历的最大次数
  let numarr = new Array(length+1)//递增数组，用来取结果用
  let rs = []
  for(let i=1;i<=length;i++){
    numarr[i] = i
    sum+=i   //计算前n个的和
    let diff = sum - target   //根据等式求出pre[n-1]的值 即diff
    if(map[diff]!=undefined){  //当有符合的值时，记录结果
      rs.push(numarr.slice(map[diff]+1,i+1))
    }
    map[sum] = i     //已前缀和为键值，位置i作为值存储，方便查找
  }
  return rs
};
```



2、数学公式

一个以 a1为首项，以 1 为公差，以 n为项数的等差数列的和为 target
$$
target = na_1+\frac{n(n-1)}{2}
$$
转换下就是
$$
a_1 = \frac{target}{n}-\frac{n-1}{2}
$$
问题就变成了求n,a1的解的数量

求解过程中n从2递增，a1符合正整数，则为解，a1<=0结束求解



```js
// 数学公式
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let a = 1
  let n = 2
  let rs = []
  while (a > 0) {
    a = target / n - (n - 1) / 2
    if (a > 0 && a.toString().indexOf('.') === -1) {
      let arr = new Array(n).fill(0)
      rs.unshift(arr.map((el, index) => { return a + index }))
    }
    n++
  }
  return rs
};
```

