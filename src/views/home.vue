<template>
  <div class="home">
    <div class="loading">
      <el-carousel :interval="4000"
                   type="card"
                   height="400px">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3>{{ item*1111111 }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div class="loading-point"
           v-for="(item,index) in 5"
           :key="item.id"
           :style="{'animation-delay': index/2.5 + 's'}"></div>
      <h1>👷当前页施工中</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style lang='scss'>
.home {
  .loading {
    text-align: center;
    padding-top: 2%;
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
    &-point {
      width: 20px;
      height: 20px;
      margin: 20px 8px;
      display: inline-block;
      border-radius: 50%;
      background-color: #2c3e50;
      animation: twinkle 2s infinite;
    }
  }
}
@keyframes twinkle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
