/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-22 09:52:25
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-22 09:57:20
 */

/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal1 = function (root, arr = []) {
  if (root) {
    inorderTraversal(root.left, arr)
    arr.push(root.val)
    inorderTraversal(root.right, arr)
  }
  return arr
}
/**
 * 非递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = []
  const stk = []
  while (root || stk.length) {
    // 当前节点不空，入栈，一直往左
    while (root) {
      stk.push(root)
      root = root.left
    }
    // 此时节点是叶子节点，加入到 res 中，向右走
    root = stk.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}
// @lc code=end
