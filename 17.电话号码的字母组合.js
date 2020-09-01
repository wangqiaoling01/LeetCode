/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  const init_map = () => {
    const map = new Map()
    map.set('2', 'abc')
    map.set('3', 'def')
    map.set('4', 'ghi')
    map.set('5', 'jkl')
    map.set('6', 'mno')
    map.set('7', 'pqrs')
    map.set('8', 'tuv')
    map.set('9', 'wxyz')
    return map
  }
  const backtrack = (res, map, digits, index, str) => {
    if (index === digits.length) {
      res.push(str)
    } else {
      const item = digits[index],
        string = map.get(item)
      for (let i = 0; i < string.length; i++) {
        let tmp = str
        str += string[i]
        backtrack(res, map, digits, index + 1, str)
        str = tmp
      }
    }
  }

  const res = []
  const map = init_map()
  backtrack(res, map, digits, 0, '')
  return res
}
// @lc code=end
