/**
 * 剑指 Offer 51. 数组中的逆序对
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
 * https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
 */
impl Solution {
    pub fn reverse_pairs(nums: Vec<i32>) -> i32 {
        if nums.len() == 0 {
            return  0;
        }
        let mut count = 0;

        fn next(nums: &mut Vec<i32>, i:usize, j:usize, count: &mut usize)-> Vec<i32>{
            if i < j {
                let mid = (i + j) / 2;
                let larr = next(nums, i, mid, count);
                let rarr = next(nums, mid + 1, j, count);
                
                let mut i = 0;
                let mut j = 0;
                let mut marr = vec![];
                while i < larr.len() && j < rarr.len() {
                    if larr[i] <= rarr[j] {
                        marr.push(larr[i]);
                        i += 1;
                    } else {
                        marr.push(rarr[j]);
                        j += 1;
                        *count += larr.len() - i;
                    }
                }
                if i < larr.len() {
                    marr.extend_from_slice(&larr[i..]);
                }
                if j < rarr.len() {
                    marr.extend_from_slice(&rarr[j..]);
                }

                marr
            }else{
                vec![nums[i]]
            }
        }

        let i = 0;
        let j = nums.len() - 1;
        let mut arr = nums.clone();
        next(&mut arr, i, j, &mut count);
        count as i32
    }
}

// test cases
#[test]
struct Solution;
fn test() {
    assert_eq!(Solution::reverse_pairs(vec![7,5,6,4]), 5);
    assert_eq!(Solution::reverse_pairs(vec![1,3,2,3,1]), 4);
    assert_eq!(Solution::reverse_pairs(vec![1,2,3,4,5,6,7,0]), 7);
}