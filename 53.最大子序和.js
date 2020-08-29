/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0,
    maxSum = nums[0]
  nums.forEach((item) => {
    pre = Math.max(pre + item, item)
    maxSum = Math.max(pre, maxSum)
  })
  return maxSum
}
// @lc code=end
