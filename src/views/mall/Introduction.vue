<template>
  <div class="introduction">
    <div class="block">
      <el-row type="flex"
              justify="space-around">
        <el-col :span="6"
                v-for="item in commodityList"
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
                <!-- <time class="time">{{ item.profile }}</time> -->
                <el-button type="text"
                           class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-row>

      </el-row> -->
      <footer>
        <el-button type="primary"
                   @click="router()">填写收货信息</el-button>
        <!-- <el-button>返回</el-button> -->
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
    .time {
      text-align: left;
      line-height: 20px;
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

    footer {
      width: 70%;
      text-align: center;
      position: absolute;
      top: 650px;
    }
  }
}
</style>
