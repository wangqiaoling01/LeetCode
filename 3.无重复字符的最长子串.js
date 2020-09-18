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
  // 使用 map 来存储当前已经遍历过的字符，key 为字符，value 为下标
  let map = new Map(),
    ret = 0,
    left = 0 // left 标记无重复子串开始下标
  // right 为当前遍历字符下标
  for (let right = 0; right < s.length; right++) {
    /**
     * 存在则更新无重复子串开始下标 left 为相同字符的下一位置
     * 此时从 left 到 right 为最新的无重复子串
     */
    if (map.has(s[right])) {
      // 在 left 的当前位置 和 map.get(s[right]) 的后一个位置 取最大的一个
      left = Math.max(map.get(s[right]) + 1, left)
    }

    ret = Math.max(ret, right - left + 1)
    // 将当前字符与下标放入 map 中
    map.set(s[right], right)
  }
  return ret
}
// lengthOfLongestSubstring('abcabcbb')
// @lc code=end
