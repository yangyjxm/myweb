<template>
  <div class="purchase">
    <div class="block">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="种类："
                      prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美橙"></el-checkbox>
            <el-checkbox label="丑橙"></el-checkbox>
            <el-checkbox label="小橙"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="美橙数量："
                      prop="a_orange"
                      v-if="ruleForm.type.includes('美橙')">
          <el-input-number v-model="ruleForm.a_orange"
                           :min="0"
                           :max="99"
                           label="请输入要购买的美橙数量"
                           size="small"></el-input-number>
        </el-form-item>
        <el-form-item label="丑橙数量："
                      prop="b_orange"
                      v-if="ruleForm.type.includes('丑橙')">
          <el-input-number v-model="ruleForm.b_orange"
                           :min="0"
                           :max="99"
                           label="请输入要购买的丑橙数量"
                           size="small"></el-input-number>
        </el-form-item>
        <el-form-item label="小橙数量："
                      prop="c_orange"
                      v-if="ruleForm.type.includes('小橙')">
          <el-input-number v-model="ruleForm.c_orange"
                           :min="0"
                           :max="99"
                           label="请输入要购买的小橙数量"
                           size="small"></el-input-number>
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
              <el-input v-model="ruleForm.phone"
                        placeholder="请输入您的电话"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="收货地址："
                      prop="address">
          <el-input v-model="ruleForm.address"
                    placeholder="请输入您的收货地址"></el-input>
        </el-form-item>
        <el-form-item label="价格："
                      prop="price">
          <span class="price">{{price}}</span>
        </el-form-item>
      </el-form>
      <footer>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">购买</el-button>
        <el-button @click="router()">返回</el-button>
      </footer>
    </div>
  </div>
</template>

<script>
import { isValidMobile } from '@/utils/isValid.js'
var mobileValidate = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入手机号码'))
  } else if (!isValidMobile(value)) {
    callback(new Error('请输入正确的手机号码'))
  } else {
    callback()
  }
}

export default {
  name: 'purchase',
  data () {
    return {
      ruleForm: {
        type: [],
        a_orange: 0,
        b_orange: 0,
        c_orange: 0,
        name: '',
        phone: '',
        address: ''
      },
      rules: {
        type: { required: true, message: '请输入您要选购的品种', trigger: 'blur' },
        name: { required: true, message: '请输入您的姓名', trigger: 'blur' },
        phone: { required: true, message: '请输入您的电话号码', trigger: 'blur', validate: mobileValidate },
        address: { required: true, message: '请输入您的收货地址', trigger: 'blur' }
      }
    }
  },
  computed: {
    price () {
      return this.ruleForm.a_orange * 70 + this.ruleForm.b_orange * 60 + this.ruleForm.c_orange * 60
    }
  },
  methods: {
    router () {
      this.$router.go(-1).catch(err => err)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.addNewOrder({
            // orderNo: 'PC' + this.$moment(new Date()).format('YYYYMMDD'),
            orderNo: parseInt(this.$moment(new Date()).format('MMDDHHmmss')),
            payment: this.price,
            status: 10,
            name: this.ruleForm.name,
            phone: this.ruleForm.phone,
            address: this.ruleForm.address,
            createTime: this.$moment(new Date(), this.$moment.defaultFormat)
          }).then(res => {
            this.$router.push({ name: 'payment', params: { price: this.price } }).catch(err => err)
          })
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
.purchase {
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
