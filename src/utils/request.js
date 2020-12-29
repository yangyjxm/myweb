import axios from 'axios'

const instance = axios.create({
  baseURL: '/',
  timeout: 5000
})
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
export default {
  /**
   * get请求
   * @param {String} url 请求地址
   * @param {Object} params 请求参数
   */
  get(url, params) {
    return instance.get(url, {
      params
    })
  },
  /**
   * post方法，对应post请求
   */
  post(url, params) {
    return instance({
      method: 'POST',
      url,
      data: JSON.stringify(params)
    })
  }
}
