<template>
  <div class="downloadPicture">
    <img id="scream"
         src="../asset/image/img/bg.jpg"
         alt="The Scream"
         width="1">
    <canvas id="annualReport"
            width="900"
            height="3519"></canvas>
    <el-button @click="downloadPicture()"
               type="primary"
               size="mini">下载</el-button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: 'downloadPicture',
  data () {
    return {
      currentDate: new Date(),
      imgUrl: '',
      userName: '张晓玲'
    }
  },
  methods: {
    downloadPicture () {
      // html2canvas(this.$refs.imageDom).then(canvas => {
      let oc = document.getElementById('annualReport')
      this.imgUrl = oc.toDataURL('image/png')
      console.log('imgUrl:' + this.imgUrl)
      // 创建隐藏的可下载链接
      let eleLink = document.createElement('a')
      eleLink.href = this.imgUrl // 转换后的图片地址
      eleLink.download = '我的年度回顾'
      // 触发点击
      document.body.appendChild(eleLink)
      eleLink.click()
      // 然后移除
      document.body.removeChild(eleLink)
      // })
    }
  },
  mounted () {
    let oc = document.getElementById('annualReport')
    let ctx = oc.getContext('2d')
    let img = document.getElementById('scream')
    let that = this
    img.onload = function () {
      ctx.drawImage(img, 10, 10, 900, 3519)
      ctx.font = '20px Arial'
      ctx.fillText('亲爱的', 380, 500)
      ctx.fillText('这是您第', 280, 550)
      ctx.fillText('次登录省“互联网+监管”系统', 430, 550)
      //
      ctx.fillText('您第一次访问的时间是', 140, 800)
      ctx.fillText('您待了', 140, 900)
      ctx.fillText('分钟', 250, 900)
      ctx.fillText('您的日均在线时间是', 140, 950)
      ctx.fillText('分钟', 385, 950)
      //
      ctx.fillText('您操作的第一个菜单是', 500, 1280)
      ctx.fillText('今年您使用最多的菜单是', 500, 1380)
      //
      ctx.fillText('您查的监管对象中次数最多的是', 120, 1700)
      ctx.fillText('共计', 120, 1800)
      ctx.fillText('分钟', 220, 1800)
      //
      ctx.fillText('今年您处理的审核任务共有', 500, 2100)
      ctx.fillText('平均流转时间是', 500, 2200)
      ctx.fillText('小时', 700, 2200)
      ctx.fillText('包括', 500, 2250)
      ctx.fillText('个风险预警', 620, 2250)
      ctx.fillText('和', 500, 2300)
      ctx.fillText('个信息保送', 580, 2300)
      //
      ctx.fillText('本年度您发布的公告数量有', 120, 2500)
      ctx.fillText('上报了', 120, 2600)
      ctx.fillText('个信息', 260, 2600)
      //
      ctx.fillText('本年度您的执法任务有', 500, 2900)
      // 橘色小字
      ctx.font = '28px Arial'
      ctx.textAlign = 'center'
      ctx.fillStyle = '#f3653b'
      ctx.fillText(that.userName, 500, 500)
      ctx.fillText('328', 395, 550)
      //
      ctx.fillText('25', 225, 900)
      ctx.fillText('25', 355, 950)
      //
      ctx.textAlign = 'left'
      ctx.fillText('待办任务', 500, 1430)
      //
      ctx.textAlign = 'center'
      ctx.fillText('20', 190, 1800)
      //
      ctx.fillText('19', 670, 2200)
      ctx.fillText('32', 580, 2250)
      ctx.fillText('14', 548, 2300)
      //
      ctx.fillText('153', 215, 2600)
      //
      ctx.textAlign = 'left'
      ctx.fillText('您辛苦了！', 500, 3000)
      // 橘色粗体
      ctx.font = 'bold 28px Arial'
      ctx.fillText('2019-12-14', 140, 850)
      ctx.fillText('待办任务', 500, 1330)
      ctx.fillText('国税', 120, 1750)
      ctx.fillText('218', 500, 2150)
      ctx.fillText('98', 120, 2550)
      ctx.fillText('106', 500, 2950)
    }
  }
}
</script>
<style lang='scss'>
.downloadPicture {
  .imageDom {
    width: 60%;
    padding: 40px 20px;
    margin: 20px auto;
    border-radius: 10px;
    text-align: left;
    text-indent: 2em;
    background-color: #eee;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
}
</style>
