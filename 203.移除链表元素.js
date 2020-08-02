/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-06-24 22:35:20
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-06-24 22:40:18
 */

/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let ele = {
    next: head,
  }
  let cur_node = ele
  while (cur_node.next) {
    if (cur_node.next.val === val) {
      cur_node.next = cur_node.next.next
    } else {
      cur_node = cur_node.next
    }
  }
  return ele.next
}
// @lc code=end
