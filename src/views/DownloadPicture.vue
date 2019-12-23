<template>
  <div class="downloadPicture">
    <div class="imageDom"
         ref="imageDom">
      `亲爱的xxx
      这是您第xx次登录省"互联网+监管"系统

      您的第一次访问时间是2019-11-23 10：03 您呆了xxx分钟
      您的日均在线时间是xx分钟

      您的第一个操作是xx菜单【除首页外的最细粒度的菜单】
      今年您使用最多的是xxx菜单, xx菜单, xx菜单【取前三名】
      您查的最多次数的监管对象是xxx，总共有xx次

      本年度您处理了xx个审核任务，平均流转时间是xx

      包括xxx个风险预警、Xx个信息报送

      本年度您发布了xxx个公告
      上报了xxx个信息

      本年度您有xxx个执法任务，您辛苦了！

      ---没有意见的
      哎呀，我们发现您还没给我们提过意见，是找不到地方还是对我们很满意呢？

      不要吝啬，您的每个细小的意见和建议对我们都很重要，当然要表扬也是可以的哦！请戳xxx给我们意见吧

      ---有意见的
      本年度您给我们提了xx次建议和意见，感谢您的支持，我们会持续改进更好服务大家！`
      <!-- <el-card :body-style="{ padding: '0px' }">
        <img src="https://element.eleme.cn/2.0/static/hamburger.50e4091.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card> -->
    </div>
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
      imgUrl: ''
    }
  },
  methods: {
    downloadPicture () {
      html2canvas(this.$refs.imageDom).then(canvas => {
        this.imgUrl = canvas.toDataURL('image/png')
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
      })
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
