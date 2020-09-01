/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [],
    len = nums.length
  if (len < 3 || nums == null) return result
  nums.sort((a, b) => a - b) // 从小到大排序
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break // 如果当前值比 0 大，那说明没有后续结果了，因为后面的都比当前值大
    if (i > 0 && nums[i] === nums[i - 1]) continue // 说明会重复
    let left = i + 1,
      right = len - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) left-- // 重复跳过
        while (nums[right] === nums[right - 1]) right-- // 重复跳过
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return result
}
// @lc code=end
