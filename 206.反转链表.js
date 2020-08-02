/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-06-24 22:42:13
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-22 08:56:43
 */

/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  let cur_node = head
  let pre_node = null
  while (cur_node !== null) {
    // let next_node = cur_node.next
    // cur_node.next = pre_node
    // pre_node = cur_node
    // cur_node = next_node
    ;[cur_node.next, pre_node, cur_node] = [pre_node, cur_node, cur_node.next]
  }
  return pre_node
}
// @lc code=end
