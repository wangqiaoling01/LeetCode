/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 1
  const depth = (root) => {
    if (!root) return 0
    const L = depth(root.left),
      R = depth(root.right)
    ans = Math.max(ans, L + R + 1)
    return Math.max(L, R) + 1
  }
  depth(root)
  return ans - 1
}
// @lc code=end
