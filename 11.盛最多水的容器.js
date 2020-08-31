/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length === 1 || !height) return 0
  let left = 0,
    right = height.length - 1,
    max_area = 0
  while (left < right) {
    const area = Math.abs(right - left) * Math.min(height[left], height[right])
    max_area = area > max_area ? area : max_area
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max_area
}

// @lc code=end
