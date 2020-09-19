/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 11:59:36
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 12:13:01
 */

/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  let res = []
  perm(nums, 0, nums.length - 1, res)
  return res
}

// p 全排列的开始位置 q 全排列的结束位置
function perm(arr, p, q, res) {
  if (p === q) {
    res.push([...arr])
  } else {
    for (let i = p; i <= q; i++) {
      ;[arr[p], arr[i]] = [arr[i], arr[p]]
      perm(arr, p + 1, q, res)
      // 这里再次交换是为了保证 arr 的相对一致
      ;[arr[p], arr[i]] = [arr[i], arr[p]]
    }
  }
}

console.log(permute([1, 2, 3]))
// @lc code=end
