<template>
  <div class="management">
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
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="下单日期："
                          prop="createTime">
              <el-date-picker v-model="searchForm.date"
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="订单状态："
                          prop="status">
              <el-select v-model="searchForm.status"
                         placeholder="请选择订单状态">
                <el-option v-for="item in statusOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
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
        <el-table-column prop="createTime"
                         label="下单日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
        </el-table-column>
        <el-table-column prop="status"
                         label="订单状态">
        </el-table-column>
      </el-table>
    </div>
    <!-- <div class="welcome">欢 迎 老 板</div> -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'management',
  data () {
    return {
      searchForm: {
        name: '',
        phone: '',
        date: [],
        status: ''
      },
      statusOptions: [{
        value: '10',
        label: '未付款'
      }, {
        value: '20',
        label: '待发货'
      }, {
        value: '30',
        label: '运输中'
      }, {
        value: '40',
        label: '已签收'
      }],
      tableData: []
    }
  },
  created () {
    this.submitForm()
  },
  methods: {
    // 查询
    submitForm () {
      this.$api.queryOrderList({
        name: this.searchForm.name,
        phone: this.searchForm.phone,
        createTime: this.searchForm.createTime,
        status: this.searchForm.status
      }).then(res => {
        res.data.forEach(item => {
          item.createTime = this.$moment(item.createTime).format('YYYY-MM-DD HH:mm')
        })
        this.tableData = res.data
      }).catch(error => {
        console.log(error)
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
    }
  }
}
</script>
<style lang='scss'>
.management {
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
