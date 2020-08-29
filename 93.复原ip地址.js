/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
// var restoreIpAddresses = function (s) {
//   let res = []
//   if (s.length < 4 || s.length > 12) return res //判断边界
//   dfs(res, s, '', 0)
//   return res

//   function dfs(res, s, sub, index) {
//     if (index == 4 && s.length == 0) res.push(sub.substring(1))

//     if (index == 4 || s.length == 0) return

//     dfs(res, s.substring(1), sub + '.' + s.substring(0, 1), index + 1) //一位数

//     if (s.charAt(0) != '0' && s.length > 1) {
//       //两位数
//       dfs(res, s.substring(2), sub + '.' + s.substring(0, 2), index + 1)

//       if (s.length > 2 && parseInt(s.substring(0, 3)) <= 255) {
//         //三位数
//         dfs(res, s.substring(3), sub + '.' + s.substring(0, 3), index + 1)
//       }
//     }
//   }
// }
var restoreIpAddresses = function (s) {
  const SEG_COUNT = 4
  const segments = new Array(SEG_COUNT)
  const ans = []

  const dfs = (s, segId, segStart) => {
    // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
    if (segId === SEG_COUNT) {
      if (segStart === s.length) {
        ans.push(segments.join('.'))
      }
      return
    }

    // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
    if (segStart === s.length) {
      return
    }

    // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
    if (s.charAt(segStart) === '0') {
      segments[segId] = 0
      dfs(s, segId + 1, segStart + 1)
    }

    // 一般情况，枚举每一种可能性并递归
    let addr = 0
    for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
      addr = addr * 10 + (s.charAt(segEnd) - '0')
      if (addr > 0 && addr <= 0xff) {
        segments[segId] = addr
        dfs(s, segId + 1, segEnd + 1)
      } else {
        break
      }
    }
  }

  dfs(s, 0, 0)
  return ans
}
var restoreIpAddresses = function (str) {
  // 保存所有符合条件的IP地址
  let res = []
  // 递归函数
  let search = (cur, sub) => {
    // 如果剩下的位数超过12位，就说明是非法的
    if (sub.length > 12) return
    // 边界条件，已经分完一种情况了，就将它push到res中
    if (cur.length === 4 && cur.join('') === str) {
      res.push(cur.join('.'))
    } else {
      // 还没分完。正常处理情况
      // 如果剩下的数字不到3个了，就按照剩下的循环；否则按照三位循环
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        // 取出从0开始，i+1长度的子串，也就是1~len的子串
        tmp = sub.substr(0, i + 1)
        // 对取出的子串验证是否合法
        if (tmp - 256 < 0) {
          // 小于255合法
          // 将这个合法的数字格式化（去掉前面的0），递归调用，进行下一次
          search(cur.concat([tmp * 1]), sub.substr(i + 1))
        }
      }
    }
  }
  // 第一次调用
  search([], str)
  return res
}
// restoreIpAddresses('25525511135')
// @lc code=end
