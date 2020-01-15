<template>
  <div class="payment">
    <div class="block">
      <el-tabs v-model="activeName"
               type="card"
               @tab-click="handleClick()">
        <!-- <el-tab-pane label="支付宝支付"
                     name="first">
          <img src="@/asset/image/aliPay.jpeg"
               alt="阿里支付二维码"
               height="400px"></el-tab-pane>
        <el-tab-pane label="微信支付"
                     name="second">
          <img src="@/asset/image/wechatPay.jpeg"
               alt="微信支付二维码"
               height="400px"></el-tab-pane> -->
        <el-tab-pane label="更多支付方式对接中"
                     name="third"
                     disabled="">角色管理</el-tab-pane>
      </el-tabs>
      <footer>
        <el-button type="primary"
                   @click="submitForm()">完成支付</el-button>
        <el-button @click="router()">返回</el-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payment',
  data () {
    return {
      activeName: 'first',
      price: 0
    }
  },
  mounted () {
    if (this.$route.params.price) {
      this.price = this.$route.params.price
    } else {
      this.$router.go(-1).catch(err => err)
    }
  },
  methods: {
    handleClick () {
      console.log('切换TAB')
    },
    router () {
      this.$router.go(-1).catch(err => err)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('谢谢!')
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang='scss'>
.payment {
  .block {
    width: 70%;
    min-height: 460px;
    margin: 0 auto;
    padding: 0 0 30px 0;
    box-shadow: 0 2px 6px 0 rgba($color: #000000, $alpha: 0.4);
    border: 1px solid rgb(187, 187, 187);
    .el-tabs {
      text-align: center;
    }
    .demo-ruleForm {
      width: 80%;
      margin: 0 auto;
      .price {
        font-weight: bold;
        font-size: 24px;
        color: #409eff;
      }
    }
    footer {
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>
