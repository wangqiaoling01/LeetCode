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
  console.log(ret)
  const b1 = Math.pow(-2, -31)
  if (x < 0) {
    ret = -ret
    if (ret <= b1) {
      return 0
    } else {
      return ret
    }
    // return (ret =  ? 0 : -ret)
  } else {
    return (ret = x >= Math.pow(2, 31) ? 0 : ret)
  }
}
console.log(reverse(-123))
// @lc code=end
