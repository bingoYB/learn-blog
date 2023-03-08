// 剑指 Offer 43. 1～n 整数中 1 出现的次数
// https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/description/?envType=study-plan&id=lcof&plan=lcof&plan_progress=baqe98c
impl Solution {
    // n/10**k+1 * 10**k + min(max(n%10**k-10**k+1,0),10**k)
    pub fn count_digit_one(n: i32) -> i32 {
        let (mut k, mut n) = (1, n as i64);
        let mut res = 0;

        while n >= k {
            res += n / (10 * k) * k + k.min(0.max(n % (10 * k) - k + 1));
            k *= 10;
        }

        res as i32
    }
}
