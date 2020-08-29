/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @description 双重遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (mums[i] + nums[j] == target && i != j) {
//         return [i, j]
//       }
//     }
//   }
// }
/**
 * @description 使用额外的变量记录当前值所需要的值，就不用遍历两边
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  const result = {} // 记录每个数需要的值
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    if (element in result) {
      return [result[element], i]
    } else {
      result[target - element] = i
    }
  }
}
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(nums[i], i)
  }
}
// @lc code=end
