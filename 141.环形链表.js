/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-06-25 14:50:37
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-22 09:03:28
 */

/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function (head) {
  let cache = new Set()
  while (head) {
    if (cache.has(head)) {
      return true
    } else {
      cache.add(head)
    }
    head = head.next
  }
  return false
}
// @lc code=end
