/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-15 15:46:14
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-15 15:49:29
 */
/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (n === 0) return 0
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    dp[i] = i // 最坏的情况就是每次+1
    for (let j = 0; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
}
// @lc code=end
