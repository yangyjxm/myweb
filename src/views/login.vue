<template>
  <div class="login">
    <jump-font :text="'yangyjxm'"></jump-font>
    <div class="block">
      <el-radio-group v-model="radio"
                      class="radio">
        <el-radio-button label="登录"></el-radio-button>
        <el-radio-button label="注册"></el-radio-button>
      </el-radio-group>
      <div class="signin"
           v-if="radio === '登录'">
        <el-form ref="loginForm"
                 :model="loginForm"
                 label-width="0px"
                 class="form">
          <el-form-item label="">
            <el-input v-model="loginForm.account"
                      placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="loginForm.password"
                      placeholder="请输入密码"
                      type="password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary"
                   round
                   @click="login()">立刻登录</el-button>
      </div>
      <div class="register"
           v-if="radio !== '登录'">
        <el-form ref="registerForm"
                 :model="registerForm"
                 label-width="0px"
                 class="form">
          <el-form-item label="">
            <el-input v-model="registerForm.account"
                      placeholder="请输入注册账号"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="registerForm.password"
                      placeholder="请输入注册密码"
                      type="password"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="registerForm.passwordCheck"
                      placeholder="确认注册密码"
                      type="password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary"
                   round
                   @click="register() ">马上注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import jumpFont from '../components/font/JumpFont'
// @Component({
//   components: {
//     'jump-font': jumpFont
//   }
// })
// export default class login extends Vue {

// }
export default {
  name: 'login',
  components: {
    'jump-font': jumpFont
  },
  data () {
    return {
      radio: this.$route.params.case,
      loginForm: {
        account: '',
        password: ''
      },
      registerForm: {
        account: '',
        password: '',
        passwordCheck: ''
      }
    }
  },
  methods: {
    // 用户登录
    login () {
      this.$api.login({
        user_name: this.loginForm.account,
        password: this.loginForm.password
      }).then(res => {
        if (res.data.resultData.isPass) {
          this.$message.success('欢迎登录')
          setTimeout(() => {
            this.$router.push({ name: 'home' })
          }, 3000)
        } else {
          this.$message.error('用户名与密码有误')
        }
      })
    },
    // 注册用户
    register () {
      let that = this
      if (this.registerForm.password === this.registerForm.passwordCheck) {
        this.$api.addNewUser({
          user_name: this.registerForm.account,
          password: this.registerForm.password
        }).then(res => {
          that.$api.getUserNum().then(res => {
            that.$message.success('欢迎您成为本站第' + res.data + '位注册用户')
          })
          setTimeout(() => {
            this.$router.push({ name: 'home' })
          }, 5000)
        })
      } else {
        this.$message.error('两次输入密码不一致')
      }
    }
  }
}
</script>
<style lang='scss'>
.login {
  background-image: url("../asset/image/loginBackground.jpeg");
  height: 100%;
  width: 100%;
  .block {
    width: 500px;
    // min-height: 360px;
    position: relative;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
    // margin: 30% auto 0;
    padding: 30px 0;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba($color: #000000, $alpha: 0.4);
    // border: 1px solid rgb(187, 187, 187);
    border-radius: 15px;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -30px;
      left: -30px;
      width: 50px;
      height: 50px;
      background: #fff;
      border-radius: 50%;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: -30px;
      left: 480px;
      width: 50px;
      height: 50px;
      background: #fff;
      border-radius: 50%;
    }
    .form {
      margin: 5% auto;
      width: 65%;
    }
    .is-round {
      padding: 12px 136px;
      display: block;
      margin: 0 auto;
    }
    .radio {
      display: block;
      text-align: center;
      .el-radio-button__inner {
        width: 150px;
      }
    }
  }
}
</style>
