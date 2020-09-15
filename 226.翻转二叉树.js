/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-22 09:28:38
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-22 09:31:03
 */

/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree1 = function (root) {
  if (!root) return root

  // 方式 1
  // ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]

  // 方式 2
  const temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)

  return root
}
/**
 * 非递归
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root
  const ret = [root]
  while (ret.length) {
    const curr_node = ret.pop()
    if (curr_node) {
      ;[curr_node.left, curr_node.right] = [curr_node.right, curr_node.left]
      ret.push(curr_node.left, curr_node.right)
    }
  }
  return root
}
// @lc code=end
