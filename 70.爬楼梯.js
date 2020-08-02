/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-02 20:34:17
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-02 20:45:55
 */
/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let cache = []
  for (let i = 0; i <= n - 1; i++) {
    if (i === 0 || i === 1 || i === 2) {
      cache[i] = i + 1
    } else {
      cache[i] = cache[i - 1] + cache[i - 2]
    }
  }
  return cache.pop()
}
// @lc code=end
