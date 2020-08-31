/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  /**
   *
   * @param {string} s 待判断的字符串
   * @param {number} left 开始索引
   * @param {number} right 结束索引
   */
  const isPalindrome = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) return false
      left++
      right--
    }
    return true
  }

  const len = s.length
  if (len < 2) return s
  let max_len = 1,
    begin = 0
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (j - i + 1 > max_len && isPalindrome(s, i, j)) {
        max_len = j - i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + max_len)
}
// @lc code=end
