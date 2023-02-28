// 剑指 Offer 14- II. 剪绳子 II
// https://leetcode.cn/problems/jian-sheng-zi-ii-lcof/description/?envType=study-plan&id=lcof&plan=lcof&plan_progress=baqe98c
impl Solution {
    pub fn cutting_rope(n: i32) -> i32 {
        if n <= 3 {
            return n - 1;
        }

        let b = n % 3;
        let p = 1000000007;
        // 快速幂的过程中不可避免的会溢出，没想到好的解决方案
        // 暂时使用 i128 来作为快速幂计算的方案
        let mut re:i128 = 1;
        let mut x_2:i128 = 3 as i128;
        let mut a_2:i128 = (n / 3 - 1) as i128;

        while a_2 > 0{
            if a_2 % 2 !=0{
                re = (re * x_2) % p as i128;
            }
            x_2 = (x_2 * x_2) % p as i128;
            a_2 = a_2/2;
        }
        
        if b == 0 {
            return ((re * 3) % p) as i32;
        } else if b == 1 {
            return ((re * 4) % p) as i32;
        } else {
            return ((re * 6) % p) as i32;
        }
    }
}