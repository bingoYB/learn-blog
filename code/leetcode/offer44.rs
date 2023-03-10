/**
 * 数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。
   请写一个函数，求任意第n位对应的数字。
 * 输入：n = 3 输出：3
 * 输入：n = 11 输出：0
 * 0 <= n < 2^31
 */
// 1. 1-9 9*1
// 2. 10-99 90*2
// 3. 100-999 900*3
impl Solution {
    pub fn find_nth_digit(n: i32) -> i32 {
        let mut n = n as i64;
        let mut d = 1;
        let mut count = 9;
        // 找到n所在的数字位数
        while n > d*count {
            n -= d*count;
            d += 1;
            count *= 10;
        }
        // 索引从0开始，
        // 比如n=10，d=2 index= 0
        // 比如n=11，d=2 index= 1
        let index = n-1;
        // 找到n所在的数字
        // 比如n=10，d=2 index= 0 num= 10^(2-1) + 0/2 = 10
        let num = 10_i64.pow((d-1) as u32) + index/d;
        // 找到n所在的数字的第几位
        let digIndex = index % d;
        // 通过计算得到值
        let res = num/10_i64.pow((d-1-digIndex) as u32) % 10_i64;
        res as i32
    }
}