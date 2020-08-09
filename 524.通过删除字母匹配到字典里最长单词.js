/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-08 22:27:52
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-09 16:25:52
 */
/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  if (!d) {
    return ''
  }
  d = d.sort()
  let longeswords = ''
  for (let i = 0; i < d.length; i++) {
    let s_len = longeswords.length,
      t_len = d[i].length

    if (isSubStr(s, d[i])) {
      if (t_len > s_len || (t_len === s_len && longeswords > d[i]))
        longeswords = d[i]
    }
  }
  return longeswords

  function isSubStr(s, target) {
    let i = 0,
      j = 0
    while (i < s.length && j < target.length) {
      if (s[i] === target[j]) {
        j++
      }
      i++
    }
    return j === target.length
  }
}
// @lc code=end
