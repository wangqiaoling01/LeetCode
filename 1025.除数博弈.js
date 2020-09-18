/*
 * @lc app=leetcode.cn id=1025 lang=javascript
 *
 * [1025] 除数博弈
 */

// @lc code=start
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  const cache = []
  for (let i = 1; i <= N; i++) {
    if (i === 1) cache[i] = false
    else if (i === 2) cache[i] = true
    else {
      cache[i] = !cache[i - 1]
    }
  }
  return cache[N]
}
// @lc code=end
