/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-02 20:47:56
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-02 22:33:57
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let node = new ListNode('null')
  let temp = node,
    sum,
    n = 0
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    sum = n1 + n2 + n
    temp.next = new ListNode(sum % 10)
    temp = temp.next
    n = parseInt(sum / 10)
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (n > 0) temp.next = new ListNode(n)
  return node.next
}

// @lc code=end
