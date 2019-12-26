// 本js专门用于存放各种校验规则
// 手机号
export function isValidMobile (str) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}
