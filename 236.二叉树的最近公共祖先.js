/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * 关于p、q有两种可能：
 * 1. p、q 分居左右子树，则 LCA 为左右子树的父节点。
 * 2. p、q 在同一个子树，则转为一个局部的子问题。
 * lowestCommonAncestor 函数就是返回当前 root 节点的 LCA
 * 当前遍历的节点，如果是 p 或 q，比如说是 p，则不管它的下方有没有 q 节点，
 * LCA 要么是当前的 p 节点，要么是 p 之上的节点，不可能是 p 之下的节点，所以不用继续往下遍历，直接返回当前的 p。
 * 如果遇到 null 节点，没有子节点了，不存在 LCA，就返回 null。
 * 如果当前遍历的节点，不是 p 或 q 或 null，则我们要递归搜寻左右子树：
 * 1. 如果左右子树递归调用都有结果，说明p和q分居左右子树，返回它们的父节点。
 * 2. 如果只是其中一个子树递归调用有结果，说明p和q都在这个子树，则返回该子树递归调用的结果。
 * 3. 如果两个子树递归调用的结果都为null，说明p和q都不在这俩子树中，返回null。
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  // 遇到null返回null，遇到p返回p，遇到q返回q
  if (root == null || root == p || root == q) {
    return root
  }
  // 左子树的LCA
  let left = lowestCommonAncestor(root.left, p, q)
  // 右子树的LCA
  let right = lowestCommonAncestor(root.right, p, q)
  // p、q分居左右子树，返回父节点root
  if (left && right) {
    return root
    // 左子树有LCA，返回它
  } else if (left) {
    return left
    // 否则返回右子树的结果，可能有也可以是null
  } else {
    return right
  }
}

// @lc code=end
