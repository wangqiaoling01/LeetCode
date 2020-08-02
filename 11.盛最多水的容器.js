/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-22 11:05:30
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 14:11:38
 */

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
  if (!height || height.length <= 1) return 0
  let left = 0
  let right = height.length - 1
  let maxArea = 0
  while (left < right) {
    let area = Math.abs(right - left) * Math.min(height[left], height[right])
    if (area > maxArea) {
      maxArea = area
    }
    height[left] < height[right] ? left++ : right--
  }
  return maxArea
}

// @lc code=end
