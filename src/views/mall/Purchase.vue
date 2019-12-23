<template>
  <div class="purchase">
    <div class="block">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
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
              <el-input v-model="ruleForm.name"
                        placeholder="请输入您的电话"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="收货地址："
                      prop="address">
          <el-input v-model="ruleForm.name"
                    placeholder="请输入您的收货地址"></el-input>
        </el-form-item>
      </el-form>
      <footer>
        <el-button type="primary">购买</el-button>
        <el-button>返回</el-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'purchase',
  data () {
    return {
      ruleForm: {
        name: '',
        phone: '',
        address: ''
      },
      rules: {
        name: { required: true, message: '请输入您的姓名', trigger: 'blur' },
        phone: { required: true, message: '请输入您的电话号码', trigger: 'blur' },
        address: { required: true, message: '请输入您的收货地址', trigger: 'blur' }
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
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
.purchase {
  .block {
    width: 70%;
    min-height: 600px;
    margin: 0 auto;
    padding: 30px 0;
    box-shadow: 0 2px 6px 0 rgba($color: #000000, $alpha: 0.4);
    border: 1px solid rgb(187, 187, 187);
    .demo-ruleForm {
      width: 80%;
      margin: 0 auto;
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
