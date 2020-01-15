<template>
  <div class="welcome">
    <jump-font :text="'yangyjxm'"></jump-font>
    <!-- <div class="countdown">
      {{countdown}}</div> -->
  </div>
</template>

<script>
import jumpFont from '../components/font/JumpFont'
export default {
  name: 'loading',
  components: {
    'jump-font': jumpFont
  },
  data () {
    return {
      countdown: 6
    }
  },
  mounted () {
    setInterval(() => {
      this.countdown -= 1
      if (this.countdown === 0) {
        this.$router.push({ name: 'home' }).catch(err => err)
      }
    }, 1000)
  }
}
</script>
<style lang='scss'>
.welcome {
  background: #2980b9;
  height: 100%;
  width: 100%;
  .countdown {
    color: #fff;
    position: fixed;
    bottom: 3%;
    left: 50%;
  }
}
</style>
