<template>
  <div class="payment">
    <div class="block">
      <footer>
        <el-button type="primary"
                   @click="submitForm()">购买</el-button>
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
      price: 0
    }
  },
  mounted () {
    if (this.$route.params.price) {
      this.price = this.$route.params.price
      console.log(this.price)
    } else {
      this.$router.go(-1).catch(err => err)
    }
  },
  methods: {
    router () {
      this.$router.go(-1).catch(err => err)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
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
    padding: 30px 0;
    box-shadow: 0 2px 6px 0 rgba($color: #000000, $alpha: 0.4);
    border: 1px solid rgb(187, 187, 187);
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
      text-align: center;
    }
  }
}
</style>
