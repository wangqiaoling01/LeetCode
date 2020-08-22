/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-14 12:54:49
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-14 15:23:51
 */
/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @description: veriosn1先出来的返回-1，version2后出来返回1，两个版本相同返回0
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const arr1 = version1.split('.').map((val) => parseInt(val))
  const arr2 = version2.split('.').map((val) => parseInt(val))

  let i = 0,
    j = 0,
    len1 = arr1.length,
    len2 = arr2.length

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      return -1
    } else if (arr1[i] === arr2[j]) {
      i++
      j++
    } else {
      return 1
    }
  }
  if (i === len1 && j === len2) return 0
  // version1 结束
  if (i === len1) {
    const arr2_left = arr2.slice(j)
    return arr2_left.some((val) => val !== 0) ? -1 : 0
  }
  if (j === len2) {
    const arr1_left = arr1.slice(i)
    return arr1_left.some((val) => val !== 0) ? 1 : 0
  }
}
// @lc code=end
