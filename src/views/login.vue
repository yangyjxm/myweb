<template>
  <div class="login">
    <div class="block">
      <el-radio-group v-model="radio"
                      class="radio">
        <el-radio-button label="登录"
                         value="login"></el-radio-button>
        <el-radio-button label="注册"
                         value="register"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    case: {
      type: String,
      default: 'login'
    }
  },
  data () {
    return {
      radio: this.case
    }
  },
  methods: {

  }
}
</script>
<style lang='scss'>
.login {
  background: #2980b9;
  height: 100%;
  width: 100%;
  .block {
    width: 40%;
    min-height: 460px;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    // margin: 0 auto;
    padding: 30px 0;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba($color: #000000, $alpha: 0.4);
    border: 1px solid rgb(187, 187, 187);
    .radio {
      display: block;
      text-align: center;
    }
  }
}
</style>
