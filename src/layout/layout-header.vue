<template>
  <div class="layout-hearder">
    <el-container>
      <el-header>
        <img src="../../public/logo.png"
             alt="logo"
             height="60">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">工具</template>
            <el-menu-item index="2-1">计算器</el-menu-item>
            <el-menu-item index="2-2">图书馆</el-menu-item>
          </el-submenu>
          <el-menu-item index="5">笔记</el-menu-item>
          <el-menu-item index="3">橙子商城</el-menu-item>
          <el-menu-item index="4">提建议</el-menu-item>
        </el-menu>
        <!-- <el-button type="primary"
                   size="mini">登录</el-button> -->
      </el-header>
      <el-container>
        <!-- <el-aside width="200px">Aside</el-aside> -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'layout-hearder',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key)
      switch (key) {
        case '1':
          this.$router.push({ path: 'home' })
          break
        case '3':
          this.$router.push({ path: 'mall' })
          break
        case '4':
          this.$router.push({ path: 'suggestion' })
          break
        case '5':
          this.$router.push({ path: 'note' })
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
  .el-header {
    padding: 0 100px;
    // position: fixed;
    // background-color: #fff;
    .el-menu.el-menu--horizontal {
      border: none;
      float: right;
    }
    img {
      height: 100px;
      top: -20px;
      position: relative;
    }
  }
}
</style>
