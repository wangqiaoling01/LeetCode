/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-22 10:37:21
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-22 10:42:37
 */

/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let low = 1
  let high = n
  while (low < high) {
    let mid = (high + low) / 2
    let result = guess(mid)
    if (result === 1) {
      low = mid + 1
    } else if (result === -1) {
      hight = mid - 1
    } else {
      return mid
    }
  }
}
// @lc code=end
