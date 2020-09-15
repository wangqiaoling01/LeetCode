/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 按照 BST 的定义，如果整数 1 到 n 中的整数 k 作为根节点值，
 * 则 1 ~ k-1 会去构建左子树，k+1 ~ n 会去构建右子树。
 * 以 k 为根节点的 BST 种类数 = 左子树 BST 种类数 * 右子树 BST 种类数
 * 问题变成：计算不同的 k 之下，等式右边的种类数，的累加结果
 */
const numTrees = (n) => {
  const memo = new Array(n + 1).fill(0)
  memo[0] = memo[1] = 1

  const recur = (n) => {
    if (memo[n]) {
      return memo[n]
    }
    let num = 0
    for (let i = 0; i <= n - 1; i++) {
      num += recur(i) * recur(n - 1 - i)
    }
    memo[n] = num
    return num
  }

  return recur(n)
}

// @lc code=end
