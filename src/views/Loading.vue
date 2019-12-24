<template>
  <div class="welcome">
    <jump-font :text="'yangyjxm'"></jump-font>
  </div>
</template>

<script>
import jumpFont from '../components/font/JumpFont'
export default {
  name: 'loading',
  components: {
    'jump-font': jumpFont
  }
}
</script>
<style lang='scss'>
.welcome {
  background: #2980b9;
  height: 100%;
  width: 100%;
}
</style>
