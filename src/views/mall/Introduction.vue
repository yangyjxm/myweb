<template>
  <div class="introduction">
    <div class="block"
         ref="block">
      <el-row type="flex"
              justify="space-around"
              style="margin: 20px 0">
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
    <div class="selectRole">
      <el-radio-group v-model="selectRole">
        <el-radio-button label="我是买家"
                         class="el-radio-button-top"></el-radio-button>
        <el-radio-button label="我是老板"
                         class="el-radio-button-bottom"></el-radio-button>
      </el-radio-group>
    </div>
    <el-dialog title="输入正确答案进入订单管理页面"
               :visible.sync="centerDialogVisible"
               width="30%"
               center>
      <el-date-picker v-model="birthday"
                      type="date"
                      placeholder="选择今年小明的生日">
      </el-date-picker>
    </el-dialog>
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
        profile: ['肤质好，面容姣好，颜值高。', '味甜汁多', '靠颜值，更凭实力！']
      }, {
        name: '丑橙',
        profile: ['丑到极处，也便美到极致。', '我很丑，可是我很温柔', '败絮其外，金玉其中。']
      }, {
        name: '小橙',
        profile: ['小个子，每个约2两重。', '味极甜', '有能耐，身高无碍。']
      }],
      selectRole: '我是买家',
      centerDialogVisible: false,
      birthday: ''
    }
  },
  watch: {
    selectRole () {
      this.centerDialogVisible = (this.selectRole === '我是老板')
    },
    birthday () {
      let day = this.$moment(this.birthday).format('YYYY-MM-DD')
      if (day === '2019-09-01') {
        this.$router.push({ name: 'management' }).catch(err => err)
      }
    }
  },
  methods: {
    router () {
      this.$router.push({ path: '/mall/purchase' }).catch(err => err)
    },
    getDetails () {
      this.$refs.block.style.transform = 'rotateY(180deg)'
      // this.$refs.blockBack.style.transform = 'rotateY(180deg)'
      this.$notify.info({
        title: '消息',
        message: '商品详情对接中……',
        offset: 200
      })
      // setTimeout(() => {
      // this.$refs.block.style.transform = 'rotateY(180deg)'
      // }, 2000)
    }
  }
}
</script>
<style lang='scss'>
.introduction {
  .block {
    width: 70%;
    min-height: 460px;
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
      text-align: center;
    }
  }

  .selectRole {
    position: fixed;
    top: 25%;
    left: 5%;
    .el-radio-button {
      display: block;
      &:first-child .el-radio-button__inner {
        border-radius: 18px 18px 0 0;
        padding-top: 10px;
      }
      &:last-child .el-radio-button__inner {
        border-radius: 0 0 18px 18px;
        padding-bottom: 10px;
      }
      &__inner {
        border: none;
        font-size: 16px;
        width: 16px;
        line-height: 20px;
        padding: 5px 26px 5px 10px;
        white-space: unset;
      }
    }
  }
  .el-dialog {
    margin-top: 30vh !important;
  }
  .el-dialog__body {
    text-align: center;
  }
}
</style>
