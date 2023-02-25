/**
 * 剑指 Offer 60. n个骰子的点数
 * https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof/description/
 * @param {number} n
 * @return {number[]}
 * dp[i] 表示第i个骰子的点数
 */
var dicesProbability = function (n: number): number[] {
    let dp = new Array(6).fill(1/6);

    for (let i = 2; i <= n; i++) {
        let next = new Array(5 * i + 1).fill(0);
        for (let j = 0; j < dp.length; j++) {
            for (let k = 0; k < 6; k++) {
                next[j + k] += dp[j] / 6;
            }
        }
        dp = next;
    }
    return dp;
}; 

// test case
import assert from 'assert';
assert.deepEqual(dicesProbability(1), [0.16667, 0.16667, 0.16667, 0.16667, 0.16667, 0.16667]);
assert.deepEqual(dicesProbability(2), [0.02778, 0.05556, 0.08333, 0.11111, 0.13889, 0.16667, 0.13889, 0.11111, 0.08333, 0.05556, 0.02778]);