import http from '../../utils/request'

const baseUrl = 'api/order'
export default {
  // 新增订单
  addNewOrder(params) {
    return http.post(`${baseUrl}/addNewOrder`, params)
  },
  // 查询订单
  queryOrderList(params) {
    return http.post(`${baseUrl}/queryList`, params)
  }
}
