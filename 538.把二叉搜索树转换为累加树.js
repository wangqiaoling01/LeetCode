/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * 二叉搜索树的中序遍历是有序的，所以当前节点的值为其自身加上后续所有的值的和
 * 但是这种方式比较麻烦，所有采用逆序中序遍历，即：右 -> 中 -> 左
 * 只需要将上一个节点保存起来，当前节点的值，等于其自身加上上一个节点的值
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  if (!root) return null
  const stack = []
  let curr_node = root,
    prev_node = null
  while (curr_node || stack.length) {
    while (curr_node) {
      stack.push(curr_node)
      curr_node = curr_node.right
    }
    curr_node = stack.pop()
    if (prev_node) {
      curr_node.val += prev_node.val
    }
    prev_node = curr_node
    curr_node = curr_node.left
  }
  return root
}
// @lc code=end
