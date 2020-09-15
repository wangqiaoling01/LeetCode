/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree1 = function (preorder, inorder) {
  /**
   * 变量 pre 保存当前要构造的树的 root
   * 变量 in 保存 inorder 数组中可以成为 root 的数字们的开头那个
   */
  pre = i = 0
  build = function (stop) {
    /**
     * 对于当前要构造的树，有一个停止点 stop ，
     * inorder 数组中第 in 项到第 stop 项是要构造的树的节点值们
     */
    if (inorder[i] != stop) {
      var root = new TreeNode(preorder[pre++])
      /**
       * 每次递归调用，都会确定出一个停止点，它告诉了子调用在哪里停止，
       * 把自己的根节点值作为左子树调用的停止点，
       * 自己的（父调用给下来的）停止点作为右子树的停止点
       */
      root.left = build(root.val)
      i++
      root.right = build(stop)
      return root
    }
    return null
  }
  return build()
}
const buildTree = (preorder, inorder) => {
  const map = new Map()
  // 提前把 inorder 数组元素和索引存到哈希表中。查询哈希表比较快。
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  /**
   * 构建下一个节点
   * @param {*} p_start
   * @param {*} p_end
   * @param {*} i_start
   * @param {*} i_end
   */
  const helper = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null
    let rootVal = preorder[p_start] // 根节点的值
    let root = new TreeNode(rootVal) // 根节点
    let index = map.get(rootVal) // 根节点在inorder的位置
    let leftNum = index - i_start // 左子树的节点数
    root.left = helper(p_start + 1, p_start + leftNum, i_start, index - 1)
    root.right = helper(p_start + leftNum + 1, p_end, index + 1, i_end)
    return root
  }
  return helper(0, preorder.length - 1, 0, inorder.length - 1)
}

// @lc code=end
