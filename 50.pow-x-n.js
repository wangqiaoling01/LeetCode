/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 10:23:17
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 11:43:14
 */

/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow1 = function (x, n) {
  if (!n) return 1
  if (n < 0) return 1 / myPow1(x, -n)
  if (n % 2) {
    return x * myPow1(x, n - 1)
  }
  return myPow1(x * x, n / 2)
}
var myPow = function (x, n) {
  if (n < 0) {
    n = -n
    x = 1 / x
  }
  let res = 1
  while (n > 0) {
    if (n % 2 === 1) {
      res *= x
      --n
    }
    x *= x
    n /= 2
  }
  return res
}
// @lc code=end
