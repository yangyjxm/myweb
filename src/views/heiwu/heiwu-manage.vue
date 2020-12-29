<template>
  <div class="heiwu-manage">
    <!-- <h1>👷当前页施工中</h1> -->
    <div class="block">
      <h3>👨性别：</h3>
      <el-tag :key="tag"
              v-for="tag in sex"
              closable
              :disable-transitions="false"
              @close="handleCloseSex(tag)">
        {{tag}}
      </el-tag>
      <el-input class="input-new-tag"
                v-if="inputVisibleSex"
                v-model="inputValueSex"
                ref="saveTagInputSex"
                size="small"
                @keyup.enter.native="handleInputConfirmSex"
                @blur="handleInputConfirmSex">
      </el-input>
      <el-button v-else
                 class="button-new-tag"
                 size="small"
                 @click="showInputSex">+ New Tag</el-button>
      <h3>🥀年龄：</h3>
      <el-tag :key="tag"
              v-for="tag in age"
              closable
              :disable-transitions="false"
              @close="handleCloseAge(tag)">
        {{tag}}
      </el-tag>
      <el-input class="input-new-tag"
                v-if="inputVisibleAge"
                v-model="inputValueAge"
                ref="saveTagInputAge"
                size="small"
                @keyup.enter.native="handleInputConfirmAge"
                @blur="handleInputConfirmAge">
      </el-input>
      <el-button v-else
                 class="button-new-tag"
                 size="small"
                 @click="showInputAge">+ New Tag</el-button>
      <h3>👧产品：</h3>
      <el-tag :key="tag"
              v-for="tag in product"
              closable
              :disable-transitions="false"
              @close="handleCloseProduct(tag)">
        {{tag}}
      </el-tag>
      <el-input class="input-new-tag"
                v-if="inputVisibleProduct"
                v-model="inputValueProduct"
                ref="saveTagInputProduct"
                size="small"
                @keyup.enter.native="handleInputConfirmProduct"
                @blur="handleInputConfirmProduct">
      </el-input>
      <el-button v-else
                 class="button-new-tag"
                 size="small"
                 @click="showInputProduct">+ New Tag</el-button>
      <h3>🦌渠道：</h3>
      <el-tag :key="tag"
              v-for="tag in way"
              closable
              :disable-transitions="false"
              @close="handleCloseWay(tag)">
        {{tag}}
      </el-tag>
      <el-input class="input-new-tag"
                v-if="inputVisibleWay"
                v-model="inputValueWay"
                ref="saveTagInputWay"
                size="small"
                @keyup.enter.native="handleInputConfirmWay"
                @blur="handleInputConfirmWay">
      </el-input>
      <el-button v-else
                 class="button-new-tag"
                 size="small"
                 @click="showInputWay">+ New Tag</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'heiwu-manage',
  data () {
    return {
      tableData: [],
      sex: [],
      inputVisibleSex: false,
      inputValueSex: '',
      age: [],
      inputVisibleAge: false,
      inputValueAge: '',
      product: [],
      inputVisibleProduct: false,
      inputValueProduct: '',
      way: [],
      inputVisibleWay: false,
      inputValueWay: ''
    }
  },
  created () {
    this.$api.code({ type: '' }).then(res => {
      this.tableData = res.data.resultData
      this.sex = this.tableData.filter(ob => ob.type === 'SEX').map(obj => obj.value)
      this.age = this.tableData.filter(ob => ob.type === 'AGE').map(obj => obj.value)
      this.product = this.tableData.filter(ob => ob.type === 'PRODUCT').map(obj => obj.value)
      this.way = this.tableData.filter(ob => ob.type === 'WAY').map(obj => obj.value)
    })
  },
  methods: {
    handleCloseSex (tag) {
      this.$api.deleteCode({ type: 'SEX', value: tag }).then(res => {
        this.sex.splice(this.sex.indexOf(tag), 1)
      })
    },
    handleCloseAge (tag) {
      this.$api.deleteCode({ type: 'AGE', value: tag }).then(res => {
        this.age.splice(this.age.indexOf(tag), 1)
      })
    },
    handleCloseProduct (tag) {
      this.$api.deleteCode({ type: 'PRODUCT', value: tag }).then(res => {
        this.product.splice(this.product.indexOf(tag), 1)
      })
    },
    handleCloseWay (tag) {
      this.$api.deleteCode({ type: 'WAY', value: tag }).then(res => {
        this.way.splice(this.way.indexOf(tag), 1)
      })
    },
    showInputSex () {
      this.inputVisibleSex = true
      this.$nextTick(_ => {
        this.$refs.saveTagInputSex.$refs.input.focus()
      })
    },
    showInputAge () {
      this.inputVisibleAge = true
      this.$nextTick(_ => {
        this.$refs.saveTagInputAge.$refs.input.focus()
      })
    },
    showInputProduct () {
      this.inputVisibleProduct = true
      this.$nextTick(_ => {
        this.$refs.saveTagInputProduct.$refs.input.focus()
      })
    },
    showInputWay () {
      this.inputVisibleWay = true
      this.$nextTick(_ => {
        this.$refs.saveTagInputWay.$refs.input.focus()
      })
    },
    handleInputConfirmSex () {
      let inputValueSex = this.inputValueSex
      if (inputValueSex) {
        this.$api.addCode({ type: 'SEX', value: inputValueSex }).then(res => {
          this.sex.push(inputValueSex)
        })
      }
      this.inputVisibleSex = false
      this.inputValueSex = ''
    },
    handleInputConfirmAge () {
      let inputValueAge = this.inputValueAge
      if (inputValueAge) {
        this.$api.addCode({ type: 'AGE', value: inputValueAge }).then(res => {
          this.age.push(inputValueAge)
        })
      }
      this.inputVisibleAge = false
      this.inputValueAge = ''
    },
    handleInputConfirmProduct () {
      let inputValueProduct = this.inputValueProduct
      if (inputValueProduct) {
        this.$api.addCode({ type: 'PRODUCT', value: inputValueProduct }).then(res => {
          this.product.push(inputValueProduct)
        })
      }
      this.inputVisibleProduct = false
      this.inputValueProduct = ''
    },
    handleInputConfirmWay () {
      let inputValueWay = this.inputValueWay
      if (inputValueWay) {
        this.$api.addCode({ type: 'WAY', value: inputValueWay }).then(res => {
          this.way.push(inputValueWay)
        })
      }
      this.inputVisibleWay = false
      this.inputValueWay = ''
    }
  }
}
</script>
<style lang='scss'>
.heiwu-manage {
  .el-tag {
    margin-bottom: 10px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .block {
    width: 70%;
    margin: 0 auto 40px;
    // min-height: 460px;
    padding: 30px;
    box-shadow: 0 2px 6px 0 rgba($color: #000000, $alpha: 0.4);
    border: 1px solid rgb(187, 187, 187);
    .el-date-editor,
    .el-select {
      width: 100%;
    }
  }
}
</style>
