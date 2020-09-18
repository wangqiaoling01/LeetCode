/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length == 0) return true
  let i = 0,
    j = 0
  while (j < t.length) {
    // 如果指向的字符相同，两个指针都移动考察下一个字符
    if (s[i] === t[j]) {
      i++
      // 如果短串走完了，说明短串的字符在长串中都找到匹配
      if (i > s.length - 1) {
        // console.log(i, s.length - 1)
        return true
      }
    }
    // 如果不相同，短串的指针不动，长串的指针移动考察下一个字符
    j++
  }
  // 如果短串没有走完，长串走完了，说明考察了整个长串也没能找齐短串的所有字符
  return false
}
// isSubsequence('abc', 'ahbgdc')
// @lc code=end
