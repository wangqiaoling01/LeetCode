/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-07 23:07:24
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-07 23:20:48
 */
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    let sum = numbers[i] + numbers[j]
    if (sum === target) {
      return [i + 1, j + 1]
    } else if (sum < target) {
      i++
    } else {
      j--
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))
// @lc code=end
