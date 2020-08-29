/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Map()
  nums1.forEach((item) => {
    map.set(item, true)
  })
  const res = []
  nums2.forEach((item) => {
    if (map.get(item)) {
      res.push(item)
      map.delete(item)
    }
  })
  return res
}
// @lc code=end
