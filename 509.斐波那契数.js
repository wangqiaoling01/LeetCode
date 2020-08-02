/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-06-02 07:53:26
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-06-02 07:59:28
 */

/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @description 递归实现
 * @param {number} N
 * @return {number}
 */
// var fib = function (N) {
//   if (N == 1 || N == 0) {
//     return N
//   }
//   return fib(N - 1) + fib(N - 2)
// }
/**
 * @description 递推实现
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let cache = []
  for (let i = 0; i <= N; i++) {
    if (i == 1 || i == 0) {
      cache[i] = i
    } else {
      cache[i] = cache[i - 1] + cache[i - 2]
    }
  }
  return cache[N]
}
// @lc code=end
