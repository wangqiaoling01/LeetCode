/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0)
  dummy.next = head
  let p1 = dummy,
    p2 = dummy
  for (let i = 0; i < n; i++) {
    p1 = p1.next
  }
  while (p1.next !== null) {
    p1 = p1.next
    p2 = p2.next
  }

  p2.next = p2.next.next
  return dummy.next
}
var removeNthFromEnd1 = function (head, n) {
  const temp = new ListNode(0)
  temp.next = head
  let p1 = (p2 = temp)
  // p1 走 n 步
  for (let i = 0; i < n && p1 != null; i++) {
    p1 = p1.next
  }
  // p1、p2 走 l - n 步， p2 所在的位子即为 倒数第 n 个节点
  while (p1.next !== null) {
    p1 = p1.next
    p2 = p2.next
  }
  p2.next = p2.next.next
  return temp.next
}
// @lc code=end
