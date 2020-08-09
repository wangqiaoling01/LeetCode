/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-09 16:43:27
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-09 17:26:44
 */
/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * 时间复杂度：O(nlogn)   空间复杂度：O(logn)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest1 = function (nums, k) {
//   nums.sort((a, b) => b - a).slice(0, k)
//   return nums[k - 1]
// }
var findKthLargest2 = function (nums, k) {
  // 从 nums 中取出前 k 个数，构建一个小顶堆
  let heap = [],
    i = 0
  while (i < k) {
    heap.push(nums[i++])
  }
  buildHeap(heap, k)

  // 从 k 位开始遍历数组
  for (let i = k; i < nums.length; i++) {
    if (heap[1] < nums[i]) {
      // 替换并堆化
      heap[1] = nums[i]
      heapify(heap, k, 1)
    }
  }

  // 返回堆顶元素
  return heap[1]
}
// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (arr, k) => {
  if (k === 1) return
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(arr, k, i)
  }
}
// 堆化
let heapify = (arr, k, i) => {
  // 自上而下式堆化
  while (true) {
    let minIndex = i
    if (2 * i <= k && arr[2 * i] < arr[i]) {
      minIndex = 2 * i
    }
    if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
      minIndex = 2 * i + 1
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex)
      i = minIndex
    } else {
      break
    }
  }
}
// 交换
let swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

var findKthLargest = function (nums, k) {
  let result = []
  for (let i = 0; i < k; i++) {
    result.push(nums[i])
  }
  result = sort(result)
  for (let i = k; i < nums.length; i++) {
    const min = result[0]
    if (nums[i] > min) {
      result.push(nums[i])
      result = sort(result)
      result.shift()
    }
  }
  return result[0]
  function sort(arr) {
    return arr.sort((a, b) => {
      if (a > b) return 1
      if (a < b) return -1
      return 0
    })
  }
}
// @lc code=end
