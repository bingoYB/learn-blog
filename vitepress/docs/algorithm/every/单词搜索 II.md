# 单词搜索 II

[212. 单词搜索 II - 力扣（LeetCode） (leetcode-cn.com)](https://leetcode-cn.com/problems/word-search-ii/)

给定一个 `m x n` 二维字符网格 `board` 和一个单词（字符串）列表 `words`，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过 **相邻的单元格** 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

 

**示例 1：**

![img](search1.jpg)

```
输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
输出：["eat","oath"]
```

**示例 2：**

![img](search2.jpg)

```
输入：board = [["a","b"],["c","d"]], words = ["abcb"]
输出：[]
```

 

**提示：**

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 12`
- `board[i][j]` 是一个小写英文字母
- `1 <= words.length <= 3 * 104`
- `1 <= words[i].length <= 10`
- `words[i]` 由小写英文字母组成
- `words` 中的所有字符串互不相同



### 思路

字典树  回溯

### 解题

```js
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const Tries = {}
    const res = []
    // 构建字典树
    for(let i=0;i<words.length;i++){
        let word = words[i]
        let tri = Tries
        for(let j=0;j<word.length;j++){
            let c = word[j]
            if(tri[c]) tri = tri[c]
            else tri = tri[c] = {}
        }
        // 单词标志
        tri.word = word
    }

    // 遍历board，从每个单元开始进行回溯
    for(let row=0;row<board.length;row++){
        for(let col =0;col<board[row].length;col++){
            backtrack(col,row,Tries)
        }
    }

    // 回溯方法  传参当前单元位置，当前匹配的字典树的位置
    function backtrack(col,row,tries){
        // 超出边界返回
        if(row<0||row>=board.length) return
        if(col<0||col>=board[row].length) return

        let c = board[row][col]
        // 已匹配的返回
        if(c ==='#') return
        // 与字典树匹配
        if(tries[c]){
            // 当前匹配节点是否有单词,有就记录进结果中
            if(tries[c].word&&!res.includes(tries[c].word)){
                 res.push(tries[c].word)
                //  剪枝操作 优化后续无效遍历
                if(Object.keys(tries[c]).length===1){
                    tries[c] = undefined
                    return
                }
            }
            // 标记当前格子状态表示已匹配过
            board[row][col] = '#'
            // 往四个方向进行下一个格子的字母匹配
            backtrack(col+1,row,tries[c])
            backtrack(col-1,row,tries[c])
            backtrack(col,row+1,tries[c])
            backtrack(col,row-1,tries[c])
            // 恢复匹配状态
            board[row][col] = c
        }

    }

    return res
};
```

