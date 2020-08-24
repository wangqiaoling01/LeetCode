/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0,
    right = nums.length - 1,
    cur = 0
  while (cur <= right) {
    if (nums[cur] === 0) {
      ;[nums[cur], nums[left]] = [nums[left], nums[cur]]
      left++
      cur++
      continue
    } else if (nums[cur] === 2) {
      ;[nums[cur], nums[right]] = [nums[right], nums[cur]]
      right--
      continue
    } else {
      cur++
      continue
    }
  }
  return nums
}
var sortColors1 = function (nums) {
  function quick_sort(nums) {
    if (nums.length <= 1) {
      return nums
    }
    const mid_index = Math.floor(nums.length / 2)
    const mid_value = nums.splice(mid_index, 1)[0]
    let left_nums = [],
      right_nums = []
    for (let i = 0; i < nums.length; i++) {
      nums[i] > mid_value ? right_nums.push(nums[i]) : left_nums.push(nums[i])
    }
    return quick_sort(left_nums).concat(mid_value, quick_sort(right_nums))
  }
  let ret = quick_sort(nums)
  //   console.log(ret)
  return ret
}
// @lc code=end
