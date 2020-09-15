/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true

  const check = (leftNode, rightNode) => {
    if (leftNode == null && rightNode == null) return true
    if (leftNode && rightNode) {
      return (
        leftNode.val === rightNode.val &&
        check(leftNode.left, rightNode.right) &&
        check(leftNode.right, rightNode.left)
      )
    }
    return false
  }

  return check(root.left, root.right)
}
// @lc code=end
