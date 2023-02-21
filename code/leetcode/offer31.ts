/**
 * https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=baqe98c
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (
  pushed: number[],
  popped: number[]
): boolean {
  let stack: number[] = [];

  for (let i: number = 0; i < pushed.length; i++) {
    // 按顺序入栈
    stack.push(pushed[i]);
    // 如果栈顶与当前有相同的则做出栈
    while (stack[stack.length - 1] === popped[0] && stack.length) {
      stack.pop();
      popped.shift();
    }
  }

  // 剩下的做出栈
  while (stack.length) {
    if (stack.pop() !== popped.shift()) return false;
  }

  return true;
};


// test cases
import assert from 'assert';
assert(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]), "case1 failed");
assert(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]) === false, "case2 failed");
assert(validateStackSequences([1,2,0], [1,0,2]), "case3 failed");
