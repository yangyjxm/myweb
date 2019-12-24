<template>
  <div class="introduction">
    <div class="block"
         ref="block">
      <el-row type="flex"
              justify="space-around"
              style="margin-top: 80px">
        <el-col :span="6"
                v-for="(item,idx) in commodityList"
                :key="item.id">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://element.eleme.cn/2.0/static/hamburger.50e4091.png"
                 class="image"
                 height="260">
            <div style="padding: 14px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <div class="time"
                     v-for="(i,index) in item.profile"
                     :key="i.id">
                  {{(index+1) + '.' + i}}
                </div>
                <el-button type="text"
                           class="button"
                           @click="getDetails(idx)">查看详情>></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <footer>
        <el-button type="primary"
                   @click="router()">填写收货信息</el-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduction',
  data () {
    return {
      currentDate: new Date(),
      commodityList: [{
        name: '美橙',
        profile: ['肤质好，面容姣好，颜值高', '味甜汁多', '靠颜值，更凭实力！']
      }, {
        name: '丑橙',
        profile: ['丑到极处，也便美到极致', '我很丑，可是我很温柔', '败絮其外，金玉其中。']
      }, {
        name: '小橙',
        profile: ['小个子，每个约2两重。', '味极甜', '有能耐，身高无碍']
      }]
    }
  },
  methods: {
    router () {
      this.$router.push({ path: 'purchase' })
    },
    getDetails () {
      this.$refs.block.style.transform = 'rotateY(360deg)'
    }
  }
}
</script>
<style lang='scss'>
.introduction {
  .block {
    width: 70%;
    min-height: 600px;
    margin: 0 auto;
    padding: 30px 0;
    box-shadow: 0 2px 6px 0 rgba($color: #000000, $alpha: 0.4);
    border: 1px solid rgb(187, 187, 187);
    transition: all 1s;
    backface-visibility: hidden;
    .time {
      text-align: left;
      line-height: 20px;
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin: 13px 0;
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

    footer {
      width: 70%;
      text-align: center;
      position: absolute;
      top: 650px;
    }
  }
}
</style>
