/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-06 20:01:58
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-06 20:17:54
 */
/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length
  let m = text2.length
  let dp = Array.from(new Array(n + 1), () => new Array(m + 1))
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0) {
        dp[i][j] = 0
        continue
      }
      if (j === 0) {
        dp[i][j] = 0
        continue
      }
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[n][m]
}
// @lc code=end
