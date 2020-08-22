/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-15 12:05:57
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-15 12:08:49
 */
/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let len = triangle.length - 1
  let result = triangle[len]
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      result[j] = triangle[i][j] + Math.min(result[j], result[j + 1])
    }
  }
  return result[0]
}
// @lc code=end
