/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-22 10:01:26
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-22 10:02:16
 */

/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root, arr = []) {
  if (root) {
    postorderTraversal(root.left)
    postorderTraversal(root.right)
    arr.push(root.val)
  }
  return arr
}
// @lc code=end
