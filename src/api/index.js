import http from '@/utils/request.js'

const files = require.context('./modules', false, /\.js$/)
let modules = []

files.keys().forEach(key => {
  modules.push(files(key).default)
})

const api = Object.assign({}, http, ...modules)

export default api
