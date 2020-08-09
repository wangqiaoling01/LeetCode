/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-08 20:26:11
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-08 20:38:43
 */
/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  if (!s) return s
  let i = 0,
    j = s.length - 1,
    result = new Array(s.length)
  while (i <= j) {
    let front = s[i],
      end = s[j]
    if (!arr.includes(front)) {
      result[i] = front
      i++
    } else if (!arr.includes(end)) {
      result[j] = end
      j--
    } else {
      result[i] = end
      result[j] = front
      i++
      j--
    }
  }
  return result.join('')
}
// console.log(reverseVowels('hello'))
// @lc code=end
