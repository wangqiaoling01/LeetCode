/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-02 20:47:56
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-02 21:15:15
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
  const arr1 = getLinkList(l1)
  let num1 = 0
  arr1.map((item, index) => {
    num1 += item * Math.pow(10, arr1.length - index - 1)
  })
  const arr2 = getLinkList(l2)
  let num2 = 0
  arr2.map((item, index) => {
    num2 += item * Math.pow(10, arr2.length - index - 1)
  })
  let resNum = num1 + num2
  let resArr = []
  for (let i = 0; i < String(resNum).length; i++) {
    resArr.unshift(String(resNum)[i])
  }
  let resNodeList = []
  for (let i = 0; i < resArr.length; i++) {
    let resLink = new ListNode(Number(resArr[i]))
    resLink.next = new ListNode(resArr[i + 1])
    resNodeList.push(resLink)
  }
  return resNodeList[0]
}
function getLinkList(head) {
  list = []
  let cur = head
  while (cur) {
    list.push(cur.val)
    cur = cur.next
  }
  return list.reverse()
}
// @lc code=end
