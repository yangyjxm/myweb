<template>
  <div class="layout-hearder">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">工具</template>
            <el-menu-item index="2-1">计算器</el-menu-item>
            <el-menu-item index="2-2">图书馆</el-menu-item>
            <!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
          </el-submenu>
          <el-menu-item index="3">商城</el-menu-item>
        </el-menu>
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
    // ul {
    //   float: right;
    // }
    .el-menu.el-menu--horizontal {
      border: none;
      float: right;
    }
  }
}
</style>
