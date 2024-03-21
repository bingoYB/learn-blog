# KMP字符串匹配

普通的暴力匹配就是逐个比较，如果匹配失败，则从下一个位置重新匹配；而KMP算法则是先对匹配字符串做处理，记录其前缀信息，下次匹配从重复前缀位置开始匹配，将时间复杂度降低到了O(m+n)

Knuth-Morris-Pratt 算法的核心为前缀函数，记作 π(i)，其定义如下：

对于长度为 m 的字符串 s，其前缀函数 π(i)(0≤i<m) 表示 s 的子串 s[0:i] 的最长的相等的真前缀与真后缀的长度。特别地，如果不存在符合条件的前后缀，那么 π(i)=0。其中真前缀与真后缀的定义为不等于自身的的前缀与后缀。



根据前缀函数的定义我们可以发现，相邻的前缀函数值至多增加 1 ，故可以得到字符串 ![s](https://math.jianshu.com/math?formula=s) 的前缀函数的计算公式：

1. `π(0) = 0`

2. 如果` s[i] == s[π(i-1)]`则   `π(i) = π(i-1) +1`

3. 如果 `s[i] ! == s[π(i-1)]`  ，令` j = π(i-1)` ;若`s[i]!== s[j]`,则令` j = π(j-1)`,直到`j===0` 或者 `s[i]===s[j]`为止,则  
   $$
   \pi(i)=
   \begin{cases}
   0 & if \ s[i] \neq s[j] \\
   j+1 & if \ s[i]=s[j]
   \end{cases}
   $$
   

前缀函数不仅仅应用于KMP算法中，还可以用于字符串压缩，求字符串周期 、统计每个前缀出现次数等其他问题中



#### [ 实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const n = haystack.length, m = needle.length;
    if (m === 0) {
        return 0;
    }
    const pi = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            // 寻找下一个匹配位置
            j = pi[j - 1];
        }
        if (needle[i] == needle[j]) {
            j++;
        }
        pi[i] = j;
    }
    for (let i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = pi[j - 1];
        }
        if (haystack[i] == needle[j]) {
            j++;
        }
        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
};
```

