/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.sum = 0
  this.array = []
  for (let i = 0; i < w.length; i++) {
    this.sum += w[i]
    this.array.push(this.sum)
  }
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let random = Math.floor(Math.random() * this.sum)
  let left = 0,
    right = this.array.length - 1

  while (left != right) {
    let mid = Math.floor((left + right) / 2)
    if (random >= this.array[mid]) left = mid + 1
    else right = mid
  }
  return left
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end
