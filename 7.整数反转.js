/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = Number(Math.abs(x)) // 去符号
  let ret = 0
  while (num !== 0) {
    ret = ret * 10 + (num % 10)
    num = parseInt(num / 10)
  }
  if (x < 0) {
    ret = -ret <= Math.pow(-2, 31) ? 0 : -ret
  } else {
    ret = ret >= Math.pow(2, 31) - 1 ? 0 : ret
  }
  return ret
}
// console.log(reverse(-123))
// @lc code=end
