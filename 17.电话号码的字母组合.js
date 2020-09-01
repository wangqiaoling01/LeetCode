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
var letterCombinations1 = function (digits) {
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
var letterCombinations = function (digits) {
  if (!digits) return []
  const res = []
  const map = new Map()
  map.set('2', ['a', 'b', 'c'])
  map.set('3', ['d', 'e', 'f'])
  map.set('4', ['g', 'h', 'i'])
  map.set('5', ['j', 'k', 'l'])
  map.set('6', ['m', 'n', 'o'])
  map.set('7', ['p', 'q', 'r', 's'])
  map.set('8', ['t', 'u', 'v'])
  map.set('9', ['w', 'x', 'y', 'z'])
  const dfs = (subStr, i) => {
    if (i === digits.length) {
      res.push(subStr)
      return
    }
    const arr = map.get(digits[i])
    for (let j = 0; j < arr.length; j++) {
      dfs(subStr + arr[j], i + 1)
    }
  }
  dfs('', 0)
  console.log(res)
  return res
}
letterCombinations('23')
// @lc code=end
