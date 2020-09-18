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
var maxSubArray1 = function (nums) {
  let pre = 0,
    maxSum = nums[0]
  nums.forEach((item) => {
    pre = Math.max(pre + item, item)
    maxSum = Math.max(pre, maxSum)
  })
  return maxSum
}
// 空间复杂度 O(n)
var maxSubArray2 = function (nums) {
  const dp = new Array(nums.length)
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] < 0 || dp[i - 1] === 0) {
      dp[i] = nums[i]
    } else {
      dp[i] = dp[i - 1] + nums[i]
    }
  }
  return Math.max(...dp)
}
// 空间复杂度 O(1)
var maxSubArray = function (nums) {
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
    max = Math.max(max, nums[i])
  }
  return max
}
// @lc code=end
