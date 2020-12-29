import http from '../../utils/request'

const baseUrl = 'api/heiwu'
export default {
  // 查询小黑意见箱
  querySuggestionList(params) {
    return http.post(`${baseUrl}/querySuggestionList`, params)
  },
  // 查询小黑意见箱
  queryFunDreamMachineList(params) {
    return http.post(`${baseUrl}/queryFunDreamMachineList`, params)
  }
}
