<template>
  <div class="heiwu-suggsetion">
    <div class="block">
      <el-form :model="searchForm"
               ref="searchForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="姓名："
                          prop="name">
              <el-input v-model="searchForm.name"
                        placeholder="请输入检索姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话："
                          prop="phone">
              <el-input v-model.number="searchForm.phone"
                        placeholder="请输入检索电话"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <footer>
        <el-button type="primary"
                   @click="submitForm()">查询</el-button>
        <el-button @click="resetForm('searchForm')">重置</el-button>
      </footer>
    </div>
    <div class="block">
      <el-table :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
        <el-table-column prop="name"
                         label="姓名"
                         width="100">
        </el-table-column>
        <el-table-column prop="phone"
                         label="联系方式"
                         width="120">
        </el-table-column>
        <el-table-column prop="id"
                         label="购买订单号">
        </el-table-column>
        <el-table-column prop="product"
                         label="购买产品"
                         width="180">
        </el-table-column>
        <el-table-column prop="date"
                         label="购买日期">
        </el-table-column>
        <el-table-column prop="way"
                         label="购买渠道">
        </el-table-column>
        <el-table-column prop="suggestion"
                         label="建议"
                         min-width="200"
                         align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'heiwu-suggsetion',
  data () {
    return {
      searchForm: {
        name: '',
        phone: '',
        date: [],
        status: ''
      },
      tableData: []
    }
  },
  created () {
    this.submitForm()
    // this.convertThree('LEETCODEISHIRING')
    this.replace()
  },
  methods: {
    replace () {
      let string = '<table></table>'
      string = string.replace(/<table/g, '<div><table')
      string = string.replace('table>', 'table></div>')
      console.log(string)
    },
    // 查询
    submitForm () {
      this.$api.querySuggestionList({
        name: this.searchForm.name,
        phone: this.searchForm.phone,
        createTime: this.searchForm.createTime,
        status: this.searchForm.status
      }).then(res => {
        this.tableData = res.data.resultData
      })
    },
    // 充值搜索条件
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    convertThree (string) {
      let tmpArray = string.split('')
      for (let i = 0; i < tmpArray.length; i++) {
        if (i % 4 === 3) {
          tmpArray[i] = ' ' + tmpArray[i] + ' '
        }
      }
      string = tmpArray.join('')
      let array = [[]]
      let j = 0
      let index = 0
      for (let k = 0; k < tmpArray.length / 3; k++) {
        for (j = 0; j < 3; j++) {
          array[k][j] = tmpArray[index++]
        }
      }
      console.log('string:' + string)
    },
    convert (string, numRows) {

    }
  }
}
</script>
<style lang='scss'>
.heiwu-suggsetion {
  .block {
    width: 70%;
    font-size: 60px;
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
  footer {
    text-align: center;
  }
  .welcome {
    font-weight: bold;
    position: absolute;
    top: 30%;
    left: 50%;
    color: #333;
    display: none;
    transform: translate(-50%, -50%);
    // transition: 2s;
    animation: disappear 5s 1s 1;
    @keyframes disappear {
      from {
        display: block;
        color: #333;
        font-size: 60px;
      }
      to {
        font-size: 2000px;
        color: #fff;
      }
    }
  }
}
</style>
