import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
// 引入了normalize.css来做浏览器初始化
import 'normalize.css'
// 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// 引入时间格式化工具moment
import Moment from 'moment'

Vue.use(ElementUI)
Vue.prototype.$moment = Moment
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
