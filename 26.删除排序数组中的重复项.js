/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 13:08:44
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 13:44:30
 */

/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length
  let i = 0
  for (let j = 1; j < len; j++) {
    if (nums[j] != nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}
// @lc code=end
