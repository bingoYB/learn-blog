# 和可被K整除的子数组

给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。

示例：

```
输入：A = [4,5,0,-2,-3,1], K = 5
输出：7
解释：
有 7 个子数组满足其元素之和可被 K = 5 整除：
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
```



此题满足求数组中连续的满足某条件的值，所以直接想到用前缀和的思想来解决

首先：用一个数组presum[i] 表示[0,i]的数据之和

```
presum[i] = presum[i-1]+ nums[i]
```

再来看题目，求符合什么条件的值：和能被K整除的区间

假设[m,n]区间符合条件，那么必满足

```
(presum[n]-presum[n-1])%7 == 0
```







```js
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    let pre = {0:1}
    let sum = 0
    let rs = 0
    for(let i=0;i<A.length;i++){
        sum += A[i]
        let yu = sum%K
        let fu = yu>0?yu-K:yu+K
        if(pre[yu]){
            rs += pre[yu]
            pre[yu]++
        }else{
            pre[yu] = 1
        }
        if(fu){
            if(pre[fu]){
                rs += pre[fu]
            }
        }
    }
    return rs
};

```

