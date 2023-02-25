/**
 * 剑指 Offer 19. 正则表达式匹配
 * https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * dp[i][j] 表示 s 的前 i 个是否能被 p 的前 j 个匹配
 * dp[i][j] = dp[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.')
 * dp[i][j] = dp[i][j - 2] || dp[i - 1][j] && (s[i - 1] == p[j - 2] || p[j - 2] == '.')
 *  1. p[j - 1] == '*'，分为两种情况
 *   1.1. s[i - 1] != p[j - 2]，则 p[j - 2] * 可以被忽略，即 dp[i][j] = dp[i][j - 2]
 *   1.2. s[i - 1] == p[j - 2]，则 p[j - 2] * 可以被忽略，即 dp[i][j] = dp[i][j - 2]
 *      或者 p[j - 2] * 可以重复一次，即 dp[i][j] = dp[i - 1][j]
 *     或者 p[j - 2] * 可以重复多次，即 dp[i][j] = dp[i][j]
 * 2. p[j - 1] != '*'，则 dp[i][j] = dp[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.')
 */
var isMatch = function(s: string, p: string): boolean {
  const n = s.length + 1;
  const m = p.length + 1;
  const dp: boolean[][] = [];

  for (let i = 0; i < n; i++) dp.push(new Array(m).fill(false));

  // s='' 与 p='' 可匹配
  dp[0][0] = true;

  // s='' 与 p='.*.*a*b*c*' 等正则可匹配
  for (let j = 2; j < m; j += 2) {
    dp[0][j] = dp[0][j - 2] && p[j - 1] == "*";
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      // 当前正则符号是【*】
      if (p[j - 1] == "*") {
        //
        dp[i][j] =
          dp[i][j - 2] ||
          (dp[i - 1][j] && (s[i - 1] == p[j - 2] || p[j - 2] == "."));
      }
      // 当前正则符号不是【*】
      else {
        dp[i][j] =
          dp[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == ".");
      }
    }
  }

  return dp[n - 1][m - 1];
};


import assert from "assert";
assert.equal(isMatch("aa", "a"), false);
assert.equal(isMatch("aa", "a*"), true);
assert.equal(isMatch("ab", ".*"), true);
assert.equal(isMatch("aab", "c*a*b"), true);
assert.equal(isMatch("mississippi", "mis*is*p*."), false);
assert.equal(isMatch("ab", ".*c"), false);