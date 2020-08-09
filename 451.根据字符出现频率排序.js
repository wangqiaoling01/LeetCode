/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-09 22:34:43
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-09 23:05:03
 */
/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function (s) {
//   let map = new Map()
//   let arr = [],
//     res = []
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       map.set(s[i], map.get(s[i]) + 1)
//     } else {
//       map.set(s[i], 1)
//       arr.push(s[i])
//     }
//   }
//   console.log(arr)
//   arr.sort((a, b) => {
//     return map.get(b) - map.get(a)
//   })
//   console.log(arr)
//   arr.forEach((item) => {
//     for (let i = 0; i < map.get(item); i++) {
//       res.push(item)
//     }
//   })
//   return res.join('')
// }
// frequencySort('tree')

var frequencySort = function (s) {
  const len = s.length
  if (!len) {
    return s
  }
  const map = new Map()
  const temp = []
  let str = ''
  for (let i = 0; i < len; i++) {
    map.has(s[i])
      ? map.set(s[i], map.get(s[i]) + 1)
      : (map.set(s[i], 1), temp.push(s[i]))
  }

  temp.sort((a, b) => map.get(b) - map.get(a))
  temp.forEach((item) => {
    for (let i = 0; i < map.get(item); i++) {
      str += item
    }
  })
  return str
}
// @lc code=end
