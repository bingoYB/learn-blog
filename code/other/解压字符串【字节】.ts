// 给定一个压缩过后的字符串，请恢复其原始状态。
// uncompress('3(ab)') // 'ababab'
// uncompress('3(ab2(c))') // 'abccabccabcc'
// 数字 k之后如果有一对括号，意味着括号内的子字符串在原来的状态中重复了k次。k是正整数。
// 测试用例的输入均为有效字符串，原始字符串中不存在数字
// https://bigfrontend.dev/zh/problem/uncompress-string

import { assert } from "console";

function uncompress(txt: string) {
  const stack: [number, string][] = [];
  let num = 0;
  let str = "";

  for (let i = 0; i < txt.length; i++) {
    const char = txt[i];

    if (char === "(") {
      stack.push([num, str]);
      num = 0;
      str = "";
    } else if (char === ")") {
      const out = stack.pop();
      if (out) {
        const [n, preStr] = out;
        str = preStr + str.repeat(n);
      }
    } else if (/\d/.test(char)) {
      num = num * 10 + +char;
    } else {
      str += char;
    }
  }

  return str;
}
// test case
assert(uncompress("3(ab)") === "ababab");
assert(uncompress("3(ab2(c))") === "abccabccabcc");
