<template>
  <div class="layout-hearder">
    <el-header>
      <img src="../../public/logo.png"
           alt="logo"
           height="60"
           @click="backToHome()">
      <el-menu :default-active="activeIndex"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">工具</template>
          <el-menu-item index="2-1">AA计算器</el-menu-item>
          <el-menu-item index="2-2">政务图书馆</el-menu-item>
        </el-submenu>
        <el-menu-item index="5">笔记</el-menu-item>
        <el-menu-item index="3">商城</el-menu-item>
        <el-menu-item index="4">提建议</el-menu-item>
        <el-button round
                   size="mini"
                   @click="router('register')">register</el-button>
        <el-button type="primary"
                   round
                   size="mini"
                   @click="router('sign in')">sign in</el-button>
      </el-menu>
    </el-header>
    <vue-scroll :ops="ops">
      <el-main>
        <router-view />
      </el-main>
    </vue-scroll>
  </div>
</template>

<script>
import vueScroll from 'vuescroll'
// import "vuescroll/dist/vuescroll.css"

export default {
  name: 'layout-hearder',
  components: {
    vueScroll
  },
  data () {
    return {
      activeIndex: '1',
      ops: {// 在这里设置配置
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {}
      }
    }
  },
  methods: {
    // 回到首页
    backToHome () {
      this.$router.push({ path: '/home' }).catch(err => err)
    },
    // 跳转登录、注册
    router (type) {
      switch (type) {
        case 'register':
          this.$router.push({ path: '/login', params: { case: type } })
          break
        case 'sign in':
          this.$router.push({ path: '/login', params: { case: type } })
          break
      }
    },
    // 切换tab页
    handleSelect (key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push({ path: '/home' }).catch(err => err)
          break
        case '3':
          this.$router.push({ path: '/mall' }).catch(err => err)
          break
        case '4':
          this.$router.push({ path: '/suggestion' }).catch(err => err)
          break
        case '5':
          this.$router.push({ path: '/note' }).catch(err => err)
          break
      }
    }
  }
}
</script>
<style lang='scss'>
.layout-hearder {
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  .el-header {
    padding: 0 100px;
    position: fixed;
    position: relative;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    z-index: 2019;
    .el-menu.el-menu--horizontal {
      border: none;
      float: right;
      background-color: #fff;
    }
    .el-button {
      margin-top: 13px;
    }
    img {
      height: 100px;
      top: -25px;
      position: relative;
    }
  }
  .el-main {
    padding: 20px 0;
  }
}
</style>
