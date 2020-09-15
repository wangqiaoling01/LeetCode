/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * 二叉搜索树一个明显的特点就是中序遍历以后是一个有序数组，所以可以通过这个对比判断是否二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const quene = []
  function dfs(root) {
    if (!root) {
      return
    }
    root.left && dfs(root.left)
    quene.push(root.val)
    root.right && dfs(root.right)
  }

  dfs(root)

  for (let i = 0; i < quene.length; i++) {
    if (quene[i] >= quene[i + 1]) {
      return false
    }
  }

  return true
}
// @lc code=end
