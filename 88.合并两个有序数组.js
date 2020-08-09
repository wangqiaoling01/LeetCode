/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-08 22:04:05
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-08 22:11:38
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    merge_index = m + n - 1
  while (i >= 0 || j >= 0) {
    if (i < 0) {
      nums1[merge_index--] = nums2[j--]
    } else if (j < 0) {
      nums1[merge_index--] = nums1[i--]
    } else if (nums1[i] > nums2[j]) {
      nums1[merge_index--] = nums1[i--]
    } else {
      nums1[merge_index--] = nums2[j--]
    }
  }
  return nums1
}
// @lc code=end
