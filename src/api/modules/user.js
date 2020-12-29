import http from '../../utils/request'

const baseUrl = 'api/system'
export default {
  // 获取当前注册用户数量
  getUserNum(params) {
    return http.post(`${baseUrl}/getUserNumber`, params)
  },
  // 新注册用户
  addNewUser(params) {
    return http.post(`${baseUrl}/addNewUser`, params)
  },
  // 用户登录
  login(params) {
    return http.post(`${baseUrl}/login`, params)
  },
  // 查询代码表
  code(params) {
    return http.post(`${baseUrl}/code`, params)
  },
  // 新增代码表
  addCode(params) {
    return http.post(`${baseUrl}/addCode`, params)
  },
  // 删除代码表
  deleteCode(params) {
    return http.post(`${baseUrl}/deleteCode`, params)
  }
}
