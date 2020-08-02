/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-17 08:09:40
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 14:19:28
 */

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
  if (nums.length < 3) {
    return []
  }
  let result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (right === i) {
        right-- // 越过当前的
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        // 找到了
        result.push([nums[left], nums[right], nums[i]])
        while (nums[left] === nums[left + 1]) {
          left++ // 忽略重复的
        }
        left++
        while (nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return result
}

// @lc code=end
