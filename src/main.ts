import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入了normalize.css来做浏览器初始化
import 'normalize.css'
// 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
