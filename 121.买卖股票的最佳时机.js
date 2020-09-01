/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max_profit = 0,
    min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max_profit = Math.max(max_profit, prices[i] - min)
  }
  return max_profit
}
// @lc code=end
