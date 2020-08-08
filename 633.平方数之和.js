/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-07 23:27:23
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-07 23:35:20
 */
/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  if (c < 0) return false
  let i = 0,
    j = Math.ceil(Math.sqrt(c))
  while (i <= j) {
    const squareSum = i * i + j * j
    if (squareSum === c) {
      return true
    } else if (squareSum < c) {
      i++
    } else {
      j--
    }
  }
  return false
}
// @lc code=end
