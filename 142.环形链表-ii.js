/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-06-25 15:03:09
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-06-25 15:11:39
 */

/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head
  let slow = head
  let start = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      while (slow && slow.next) {
        if (slow === start) {
          return slow
        }
        slow = slow.next
        start = start.next
      }
    }
  }
  return null
}
// @lc code=end
