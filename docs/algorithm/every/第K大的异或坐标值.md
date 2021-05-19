# 第 K 大的异或坐标值

#### [1738. 找出第 K 大的异或坐标值](https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value/)

难度中等31收藏分享切换为英文接收动态反馈

给你一个二维矩阵 `matrix` 和一个整数 `k` ，矩阵大小为 `m x n` 由非负整数组成。

矩阵中坐标 `(a, b)` 的 **值** 可由对所有满足 `0 <= i <= a < m` 且 `0 <= j <= b < n` 的元素 `matrix[i][j]`（**下标从 0 开始计数**）执行异或运算得到。

请你找出 `matrix` 的所有坐标中第 `k` 大的值（**`k` 的值从 1 开始计数**）。

示例 1：

```
输入：matrix = [[5,2],[1,6]], k = 1
输出：7
解释：坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。
```

示例 2：

```
输入：matrix = [[5,2],[1,6]], k = 2
输出：5
解释：坐标 (0,0) 的值是 5 = 5 ，为第 2 大的值。
```

示例 3：

```
输入：matrix = [[5,2],[1,6]], k = 3
输出：4
解释：坐标 (1,0) 的值是 5 XOR 1 = 4 ，为第 3 大的值。
```

示例 4：

```
输入：matrix = [[5,2],[1,6]], k = 4
输出：0
解释：坐标 (1,1) 的值是 5 XOR 2 XOR 1 XOR 6 = 0 ，为第 4 大的值。
```


提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
0 <= matrix[i][j] <= 106
1 <= k <= m * n

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。





题解：二维前缀和 + 快速选择算法

利用前缀和的思想，计算出每个坐标（x,y）的异或结果值，再利用快速选择（快排）的思想将结果进行快速查找出第K大的数据

```js
var kthLargestValue = function(matrix, k) {
    let presum = []
    let results = []
    for (let i = 0; i < matrix.length; i++) {
        presum[i] = []
        for (let j = 0; j < matrix[i].length; j++) {
            if (i == 0)
                presum[i][j] =
                    matrix[i][j] ^ (j == 0 ? 0 : presum[i][j - 1])
            else if(j==0)
                presum[i][j] =
                    matrix[i][j] ^ presum[i-1][j]
            else
                presum[i][j] =
                    presum[i][j - 1]^presum[i-1][j]^presum[i-1][j - 1]^ matrix[i][j]

            results.push(presum[i][j])
        }
    }
    nthElement(results, 0, k - 1, results.length - 1);
    return results[k - 1];
}

const nthElement = (results, left, kth, right) => {
    if (left === right) {
        return;
    }
    // // 随机在区间选择一个位置
    // const pivot = Math.floor(Math.random() * (right - left) + left)
    // // 与右边进行交换
    // swap(results, pivot, right);
    // 三路划分（three-way partition）
    let sepl = left - 1, sepr = left - 1;
    for (let i = left; i <= right; i++) {
      // 与右边基准值进行比较，大的值往前放
        if (results[i] > results[right]) {
            //将大的值放左边 
            swap(results, ++sepr, i);
            // 将小的值与等于的值交换
            swap(results, ++sepl, sepr);
        } else if (results[i] === results[right]) {
            //与基准值相等的放左边 
            swap(results, ++sepr, i);
        }
    }
    // 此时排完的数据与基准值的关系
    // 【小,...小，等于...等于，大于...大于】
    if (sepl < left + kth && left + kth <= sepr) {
      // 所求的第K大小的数据就是基准值
        return;
    } else if (left + kth <= sepl) {
      // 如果所求数据在后，则继续快排前面的数据
        nthElement(results, left, kth, sepl);
    } else {
      // 如果所求数据在后驱，则继续快排后面的数据
        nthElement(results, sepr + 1, kth - (sepr - left + 1), right);
    }
}

const swap = (results, index1, index2) => {
    const temp = results[index1];
    results[index1] = results[index2];
    results[index2] = temp;
}
```

