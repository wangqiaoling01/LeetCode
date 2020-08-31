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
   * @return {boolean} 是回文串返回 true
   */
  const isPalindrome = (s) => {
    let left = 0,
      right = s.length - 1
    while (left <= right) {
      if (s[left] !== s[right]) return false
    }
    return true
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = 1 + 1; j < s.length; j++) {
      if (isPalindrome(s.slice(i, j))) {
        return s.slice(i, j)
      }
    }
  }
}
// @lc code=end
