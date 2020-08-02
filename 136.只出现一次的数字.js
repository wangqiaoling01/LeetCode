/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 16:05:53
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 16:12:50
 */

/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
}
// @lc code=end
