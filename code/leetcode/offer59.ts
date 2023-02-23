/**
 * 滑动窗口的最大值 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums: number[], k: number): number[] {
  if (nums.length === 0) {
    return [];
  }
  let stack: number[] = [];
  for (let i = 0; i < k; i++) {
    while (stack.length && nums[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(nums[i]);
  }
  let res = [stack[0]];
  for (let i = k; i < nums.length; i++) {
    if (nums[i - k] === stack[0]) {
      stack.shift();
    }
    while (stack.length && nums[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(nums[i]);
    res.push(stack[0]);
  }

  return res;
};


// test cases
import assert from 'assert';
assert.deepEqual(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3), [3,3,5,5,6,7], "case1 failed");
