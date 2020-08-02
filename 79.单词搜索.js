/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-22 11:11:11
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 12:47:06
 */

/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0) return false
  if (word.length === 0) return true
  const [row, col] = [board.length, board[0].length]
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const res = find(i, j, 0)
      if (res) {
        return true
      }
    }
  }
  return false
  /**
   *
   * @param {*} i board的第i行
   * @param {*} j board的第j列
   * @param {*} cur 单词的第cur个
   */
  function find(i, j, cur) {
    // 终止条件
    // 越界
    if (i >= row || i < 0) return false
    if (j >= col || j < 0) return false
    const letter = board[i][j]
    // 字母不匹配
    if (letter !== word[cur]) return false
    // 找到最后一个而且相等
    if (cur === word.length - 1) return true
    // 终止条件

    // 当前路径标记为null
    board[i][j] = null
    const res =
      find(i + 1, j, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i, j - 1, cur + 1)
    board[i][j] = letter
    return res
  }
}
// @lc code=end
