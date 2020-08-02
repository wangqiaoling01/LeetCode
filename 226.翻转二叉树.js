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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) {
    return root
  }
  ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}
// @lc code=end
