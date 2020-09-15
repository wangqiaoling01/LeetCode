/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth1 = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
/**
 * 非递归
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  const ret = [root]
  let depth = 1
  while (ret.length) {
    // 当前层，节点的个数
    const size = ret.length
    // 让每个节点依次出列
    for (let i = 0; i < size; i++) {
      // 当前节点
      const curr_node = ret.shift()
      // 左右孩子节点入队
      if (curr_node.left) ret.push(curr_node.left)
      if (curr_node.right) ret.push(curr_node.right)
    }

    // 如果队列不空，则说明有下一层，深度加 1
    if (ret.length) depth++
  }
  return depth
}
// @lc code=end
