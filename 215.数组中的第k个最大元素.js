/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * 数组中的第K个最大元素
 * @param {Array} nums
 * @param {Number} k
 * @author wangqiaoling
 */
// var findKthLargest = function (nums, k) {
//   nums.sort((a, b) => b - a)
//   return nums[k - 1]
// }
var findKthLargest = function (nums, k) {
  var min_heap = new MinHeap(k)

  for (var i = 0; i < k; i++) {
    min_heap.insert(nums[i])
  }

  for (var i = k; i < nums.length; i++) {
    var item = nums[i]
    if (item > min_heap.get_min()) {
      min_heap.remove_min()
      min_heap.insert(item)
    }
  }
  console.log(min_heap)
  return min_heap.get_min()
}

class MinHeap {
  constructor(max_size) {
    this.heap = new Array(max_size)
    this.curr_size = 0
    this.max_size = max_size
  }

  shifDown(start, max_length) {
    let parent_index = start // 当前局部树的父节点
    let min_child_index = parent_index * 2 + 1 // 一定有做孩子
    while (min_child_index <= max_length) {
      if (
        min_child_index < max_length &&
        this.heap[min_child_index] > this.heap[min_child_index + 1]
      ) {
        min_child_index = min_child_index + 1 // 使得 min_child_index 永远指向值最小的那个孩子
      }
      // 当父节点的值小于等于两个孩子的最小值，结束
      if (this.heap[parent_index] <= this.heap[min_child_index]) {
        break
      } else {
        // 父子节点互换位子
        ;[this.heap[min_child_index], this.heap[parent_index]] = [
          this.heap[parent_index],
          this.heap[min_child_index],
        ]
        // 继续向下比较
        parent_index = min_child_index
        min_child_index = min_child_index * 2 + 1
      }
    }
  }
  // 插入一个新的元素
  insert(item) {
    // 堆满了 不能再放元素了
    if (this.curr_size === this.max_size) {
      return false
    }
    this.heap[this.curr_size] = item
    this.shiftUp(this.curr_size)
    this.curr_size++
    return true
  }
  shiftUp(start) {
    // 当前节点是叶节点
    let child_index = start
    // 父节点
    let parent_index = Math.floor((child_index - 1) / 2)
    while (child_index > 0) {
      // 如果父节点更小，就不用调整了
      if (this.heap[parent_index] <= this.heap[child_index]) {
        break
      } else {
        ;[this.heap[child_index], this.heap[parent_index]] = [
          this.heap[parent_index],
          this.heap[child_index],
        ]
        child_index = parent_index
        parent_index = Math.floor((child_index - 1) / 2)
      }
    }
  }
  // 删除最小值（堆顶）
  remove_min() {
    if (this.curr_size <= 0) {
      return
    }
    const min_value = this.heap[0]
    this.heap[0] = this.heap[this.curr_size - 1]
    this.curr_size--
    this.shifDown(0, this.curr_size - 1)
    // 返回删除的元素值
    return min_value
  }
  get_min() {
    return this.curr_size > 0 ? this.heap[0] : null
  }
  print() {
    console.log(this.heap)
  }
}
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
// console.log(findKthLargest([-1, 2, 0], 1))

// @lc code=end
