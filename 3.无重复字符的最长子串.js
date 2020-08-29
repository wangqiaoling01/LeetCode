/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map(),
    ret = 0,
    left = 0
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left)
    }

    ret = Math.max(ret, right - left + 1)
    map.set(s[right], right)
  }
  return ret
}
// lengthOfLongestSubstring('abcabcbb')
// @lc code=end
