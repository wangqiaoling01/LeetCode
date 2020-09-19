/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let n = cost.length,
    n1 = cost[0],
    n2 = cost[1]
  for (let i = 2; i < n; i++) {
    ;[n1, n2] = [n2, Math.min(n1, n2) + cost[i]]
  }
  return Math.min(n1, n2)
}
// @lc code=end
