<template>
  <div class="home">
    <div class="loading">
      <el-carousel :interval="4000"
                   type="card"
                   height="320px">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3>第{{ item }}页</h3>
        </el-carousel-item>
      </el-carousel>
      <!-- <h1>👷当前页施工中</h1> -->
      <!-- <h1>🐷🐑在一起已经 {{gap}} ～</h1> -->
      <input type="file"
             accept="image/*"
             capture="camera">
      <input type="file"
             accept="image/*">
      <div class="loading-point"
           v-for="(item,index) in 5"
           :key="item.id"
           :style="{'animation-delay': index/2.5 + 's'}"></div>
      <!-- <h1 @click="go()"
          class="heiwu">🌞黄总专用测试入口</h1> -->
      <!-- <iframe src="/note/noteList" -->
      <!-- <iframe src="http://www.qq.com"
              frameborder="1"
              id="iframeYn"
              width="1000"
              height="300"
              @load="loadFrame"
              v-if="show"></iframe>
      <h1 @click="consolelog()">🌞模拟切换iframe地址</h1> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      show: false,
      ifr: null,
      url: null,
      num: 1111111,
      gap: null
    }
  },
  computed: {
    // gap () {
    //   return this.$moment(this.now - this.startDate).format('YYYY-MM-DD-HH:mm:ss')
    // }
  },
  methods: {
    consolelog () {
      this.show = true
      this.ifr = document.getElementById('iframeYn').contentWindow
      console.log('当前的url:' + this.ifr.location.href)
      setTimeout(() => {
        this.ifr.location.href = `http://www.qq.com?accessLink=${this.num}`
        this.num *= 2
      }, 2000)
    },
    loadFrame () {
      let parm = new URLSearchParams(this.ifr.location.href.split('?')[1])
      let accessLink = parm.get('accessLink')
      if (accessLink) {
        console.log('accessLink:' + accessLink)
      }
    }
  },
  mounted () {
    let timeCount = setInterval(() => {
      let m2 = this.$moment() // 当下时间
      let m1 = this.$moment('2020-06-04 23:49:00') // 起始时间
      let du = this.$moment.duration(m2 - m1, 'ms') // 做差
      this.gap = du.get('days') + '天' + du.get('hours') + '时' + du.get('minutes') + '分钟' + du.get('seconds') + '秒'
    }, 1000)
    // console.log(this.startDate)
    // console.log(this.now)
    // let ifr = document.createElement.iframe
    // let href = 'http://19.1241.5151.11:0909/work/?code=90000&authCode=sdfjlj11j2lj1k#/login'
    // let start = href.indexOf('?code')
    // let end = href.indexOf('#')
    // console.log('切割后地址:' + href.substring(0, start) + href.substring(end))
    // let m2 = this.$moment() // 当下时间
    // // let m2=moment('2019-12-18 10:10:00');
    // let m1 = this.$moment('2020-06-04 23:48:00')
    // let du = this.$moment.duration(m2 - m1, 'ms') // 做差
    // let days = du.get('days')
    // let hours = du.get('hours')
    // let mins = du.get('minutes')
    // let ss = du.get('seconds')
    // console.log(days, hours, mins, ss)
  },
  destroyed () {
    clearInterval()
  }
}
</script>
<style lang='scss'>
.home {
  .loading {
    text-align: center;
    padding-top: 2%;
    // font-size: 24px;
    color: #333;
    font-weight: bold;
    .el-carousel__item h3 {
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-image: url("../asset/image/loginBackground.jpg");
      background-size: 100% 100%;
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-image: url("../asset/image/loginBackground.jpg");
      background-size: 100% 100%;
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
  .heiwu {
    color: olivedrab;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
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
