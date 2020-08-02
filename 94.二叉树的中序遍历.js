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
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal1 = function (root, arr = []) {
//   if (root) {
//     inorderTraversal(root.left, arr)
//     arr.push(root.val)
//     inorderTraversal(root.right, arr)
//   }
//   return arr
// }
var inorderTraversal = function (root) {
  let stack = []
  let result = []
  let cur = root
  while (true) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    let pop_item = stack.pop()
    result.push(pop_item)
    cur = cur.right
    if (!cur && stack.length === 0) {
      break
    }
  }
  return result
}
// @lc code=end
