<template>
  <div class="home">
    <div class="loading">
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
    padding-top: 10%;
    &-point {
      width: 20px;
      height: 20px;
      margin: 0 8px;
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
