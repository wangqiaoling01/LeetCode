/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-09 17:35:22
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-09 22:07:24
 */
/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  nums.map((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  })
  if (map.size < k) {
    return [...map.keys()]
  }
  return bucketSort(map, k)
  function bucketSort(map, k) {
    let arr = [],
      res = []
    map.forEach((value, key) => {
      if (arr[value]) {
        arr[value].push(key)
      } else {
        arr[value] = [key]
      }
    })

    for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
      if (arr[i]) {
        res.push(...arr[i])
      }
    }
    return res
  }
}
// topKFrequent([1], 1)
// @lc code=end
