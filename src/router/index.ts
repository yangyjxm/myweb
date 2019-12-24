import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutHeader from '@/layout/layout-header.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loading',
    component: () => import('../views/Loading.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: LayoutHeader,
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: '首页'
      }
    }, {
      path: '/note',
      name: 'note',
      component: () => import('../views/notes/NoteList.vue'),
      meta: {
        title: '笔记列表页'
      }
    }, {
      path: '/noteDetails',
      name: 'noteDetails',
      component: () => import('../views/notes/NoteDetails.vue'),
      meta: {
        title: '笔记详情页'
      }
    }, {
      path: '/mall',
      name: 'mall',
      component: () => import('../views/mall/Introduction.vue'),
      meta: {
        title: '橙子商城'
      }
    }, {
      path: '/purchase',
      name: 'purchase',
      component: () => import('../views/mall/Purchase.vue'),
      meta: {
        title: '填写个人信息页'
      }
    }, {
      path: '/suggestion',
      name: 'suggestion',
      component: () => import('../views/suggestion/Suggestion.vue'),
      meta: {
        title: '我要提建议'
      }
    }]
  },
  {
    path: '/downloadPicture',
    name: 'downloadPicture',
    component: () => import('../views/DownloadPicture.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router