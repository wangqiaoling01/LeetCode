/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * 递归解法
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees1 = function (t1, t2) {
  if (!t1 && t2) return (t1 = t2) // t1 为空、t2 不空，将 t2 赋值给 t1，并返回 t1
  if (!t1 && !t2) return null // t1、t2 都为空，返回 null

  if (t1 && t2) t1.val += t2.val // 两值相加，将 t1 替换
  t1.left = mergeTrees(t1.left, t2 && t2.left) // 遍历两者的左子树
  t1.right = mergeTrees(t1.right, t2 && t2.right) // 遍历两者的右子树

  return t1
}
/**
 * 非递归解法
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (!t1 || !t2) return t1 || t2
  t1.val += t2.val
  const ret = [[t1, t2]]
  while (ret.length) {
    const [node1, node2] = ret.shift()
    if (node1.left && node2.left) {
      node1.left.val += node2.left.val
      ret.push([node1.left, node2.left])
    } else if (!node1.left) {
      node1.left = node2.left
    } else if (!node2.left) {
      node2.left = node1.left
    }

    if (node1.right && node2.right) {
      node1.right.val += node2.right.val
      ret.push([node1.right, node2.right])
    } else if (!node1.right) {
      node1.right = node2.right
    } else if (!node2.right) {
      node2.right = node1.right
    }
  }
  return t1
}
// @lc code=end
