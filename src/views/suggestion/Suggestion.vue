<template>
  <div class="suggestion">
    <div class="block">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="标题："
                      prop="title">
          <el-input v-model="ruleForm.title"
                    placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="建议内容："
                      prop="desc">
          <el-input type="textarea"
                    v-model="ruleForm.desc"
                    :autosize="{ minRows: 8, maxRows: 16}"
                    placeholder="请输入建议内容"></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="姓名："
                          prop="name">
              <el-input v-model="ruleForm.name"
                        placeholder="请输入您的姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话："
                          prop="phone">
              <el-input v-model.number="ruleForm.phone"
                        placeholder="请输入您的电话"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="9">
            <el-form-item label="验证码："
                          prop="verificationCode">
              <el-input v-model="ruleForm.verificationCode"
                        placeholder="请输入验证码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <canvas width="92"
                    height="40"
                    id="captcha"></canvas>
          </el-col>
        </el-row>
      </el-form>
      <footer>
        <el-button type="primary"
                   @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </footer>
    </div>
  </div>
</template>

<script>
// 引入captcha-mini生成验证码
import CaptchaMini from 'captcha-mini'
export default {
  name: 'suggestion',
  data () {
    return {
      ruleForm: {
        title: '',
        desc: '',
        name: '',
        phone: '',
        verificationCode: ''
      },
      checkVerificationCode: '',
      rules: {
        title: { required: true, message: '请输入标题', trigger: 'blur' },
        desc: { required: true, message: '请输入建议内容', trigger: 'blur' },
        // name: { required: true, message: '请输入您的姓名', trigger: 'blur' },
        // phone: { required: true, message: '请输入您的电话号码', trigger: 'blur' },
        verificationCode: { required: true, message: '请输入验证码', trigger: 'blur' }
      }
    }
  },
  mounted () {
    // 生成验证码
    let captcha1 = new CaptchaMini()
    captcha1.draw(document.querySelector('#captcha'), r => {
      this.checkVerificationCode = r
    })
  },
  methods: {
    // 提交建议
    submitForm () {
      if (this.ruleForm.verificationCode === this.checkVerificationCode) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            return false
          }
        })
      } else {
        this.$message.error('验证码错误')
      }
    },
    // 重置表单
    resetForm () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>
<style lang='scss'>
.suggestion {
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
    }
    footer {
      text-align: center;
    }
  }
}
</style>
