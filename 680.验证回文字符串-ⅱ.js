/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-08 21:36:02
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-08 21:42:40
 */
/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] != s[j]) {
      return isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j)
    }
  }
  return true
  function isPalindrome(s, i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false
      }
      i++
      j--
    }
    return true
  }
}
// @lc code=end
