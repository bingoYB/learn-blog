/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/description/
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s: string, pre = ""): string[] {
    // 回溯法
    if (s.length <= 1) return [pre + s];
    let hash:{[key: string]: boolean} = {}
    let res: string[] = [];

    // 遍历字符串，每次取一个字符当前位置，然后递归剩下的字符
    for (let i = 0; i < s.length; i++) {
        // 去重
        if (hash[s[i]]) continue;
        // 记录已经使用过的字符
        hash[s[i]] = true;
        // 递归剩下的字符
        let temp = permutation(s.substring(0, i) + s.substring(i + 1, s.length), pre+s[i]);
        // 合并结果
        res = [...res, ...temp];
    }

    return res;
};

// 下一个排列
// 当我们已知了当前的一个排列，我们能不能快速得到字典序中下一个更大的排列呢？
// 我们可以在 O(n)的时间内计算出字典序下一个中更大的排列
var permutation2 = function (s: string): string[] {
    // 初始化排序的数组  '321' -> ['1','2','3']
    // 从最小的排列开始，每次找到下一个排列
    let arrs = Array.from(s).sort()
    const result: string[] = [arrs.join('')]
    if(arrs.length===1) return result
    while (true) {
        // 从后往前找非降序的数  比如 1354 正常下一个是 1435
        for (let i = arrs.length-2; i >= 0; i--) {
            let next = false
            // 找到第一个非降序的数  1354 3<5
            if (arrs[i] < arrs[i + 1]) {
                // 从后往前找比它大的数 1354 4>3
                for (let j = arrs.length - 1; j > i; j--) {
                    if (arrs[j] > arrs[i]) {
                        // 交换 1354  1453
                        swap(arrs, i, j)
                        // 交换后，i后面的数是降序的，需要反转 1453 -> 1435
                        reverse(arrs, i + 1, arrs.length - 1)
                        
                        result.push(arrs.join(''))
                        next = true
                        break
                    }
                }
            } else {
                if (i === 0) {
                    return result
                }
            }
            if(next) break
        }
    }

    function reverse(arr: string[], i: number, j: number) {
        while (i < j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    function swap(arr: string[], i: number, j: number) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
    }
};

// test case
import assert from "assert";
assert.deepEqual(permutation("abc"), ["abc", "acb", "bac", "bca", "cab", "cba"]);
assert.deepEqual(permutation2("abc"), ["abc", "acb", "bac", "bca", "cab", "cba"]);
console.log("passed");