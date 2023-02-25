/**
 * 剑指 Offer 49. 丑数
 * https://leetcode-cn.com/problems/chou-shu-lcof/
 * @param {number} n
 * @return {number}
 * dp[i] 表示第i个丑数
 * dp[i] = min(dp[a] * 2, dp[b] * 3, dp[c] * 5)
 * a, b, c 表示当前乘以2, 3, 5的位置
 * 如果dp[a] * 2 === dp[i]，则a++
 * 同理，b, c
 */
var nthUglyNumber = function(n: number): number {
  let dp = new Array(n);
  dp[0] = 1;

  let a: number, b: number, c: number;
  a = b = c = 0;

  for (let i = 1; i < n; i++) {
    let x2 = dp[a] * 2;
    let x3 = dp[b] * 3;
    let x5 = dp[c] * 5;
    dp[i] = Math.min(x2, x3, x5);

    if (x2 === dp[i]) {
      a++;
    }
    if (x3 === dp[i]) {
      b++;
    }
    if (x5 === dp[i]) {
      c++;
    }
  }

  return dp[n - 1];
};

// test case
import assert from 'assert';
assert.equal(nthUglyNumber(10), 12);
assert.equal(nthUglyNumber(1), 1);
