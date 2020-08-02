/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 12:59:07
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 13:05:55
 */

/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
      }
    }
  }
  return nums
}
var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  const mid_index = Math.floor(nums.length / 2)
  const mid_value = nums.splice(mid_index, 1)[0]
  let left_nums = [],
    right_nums = []
  for (let i = 0; i < nums.length; i++) {
    nums[i] > mid_value ? right_nums.push(nums[i]) : left_nums.push(nums[i])
  }
  return sortArray(left_nums).concat(mid_value, sortArray(right_nums))
}
// @lc code=end
