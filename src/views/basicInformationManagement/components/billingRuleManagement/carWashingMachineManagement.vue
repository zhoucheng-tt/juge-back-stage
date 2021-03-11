<!--
    洗车机计费规则管理
 * @Author: your name
 * @Date: 2020-10-22 09:26:58
 * @LastEditTime: 2020-10-29 10:20:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\carWashingMachineManagement.vue
-->
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="washCarTableList"
        stripe
        :header-cell-style="{
          fontfamily: 'PingFangSC-Medium',
          background: '#FFFFFF',
          color: '#333333',
          border: 'none',
          padding: 'none',
          fontSize: '14px',
          letterSpacing: '0.56px',
          'text-align': 'center'
        }"
        :cell-style="{
          fontfamily: 'PingFangSC-Regular',
          letterSpacing: '0.56px',
          fontSize: '14px',
          color: '#333333',
          'text-align': 'center'
        }"
        style="width: 98%;margin-left: 1%"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          prop="fineFee"
          :show-overflow-tooltip="true"
          label="精洗价格(元)"
        >
        </el-table-column>
        <el-table-column
          prop="generalFee"
          :show-overflow-tooltip="true"
          label="普洗价格(元)"
        >
        </el-table-column>
        <el-table-column
          prop="fastFee"
          :show-overflow-tooltip="true"
          label="快洗价格(元)"
        ></el-table-column>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="handleClickAlter(scope.row)"
              type="text"
              size="small"
              >修改
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="修改"
        :visible.sync="alterDialogShow"
        width="50%"
        @close="queryWashCar"
      >
        <!-- 基础信息表单-->
        <div class="">
          <el-form
            :inline="true"
            v-model="alterList"
            label-position="right"
            label-width="100px"
          >
            <el-row style="padding-top: 20px">
              <el-form-item label="精洗价格(元):" label-width="150px">
                <el-input v-model="alterList.fineFee" />
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="普洗价格(元):" label-width="150px">
                <el-input v-model="alterList.generalFee" />
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="快洗价格(元):" label-width="150px">
                <el-input v-model="alterList.fastFee"></el-input>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
        <span slot="footer">
          <el-button @click="handleClickConfirm">确认</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      washCarTableList: [],
      alterList: {},
      alterDialogShow: false
    };
  },
  mounted() {
    this.queryWashCar();
  },
  methods: {
    // 列表查询
    queryWashCar() {
      this.$basicInformationManagement
        .queryCarWasherBillingRuleList({})
        .then(res => {
          const fee = [];
          res.resultEntity.fastFee = Number(res.resultEntity.fastFee) / 100;
          res.resultEntity.generalFee =
            Number(res.resultEntity.generalFee) / 100;
          res.resultEntity.fineFee = Number(res.resultEntity.fineFee) / 100;
          fee.push(res.resultEntity);
          this.washCarTableList = fee;
        });
    },
    handleClickAlter(row) {
      this.alterDialogShow = true;
      this.alterList = row;
    },
    handleClickConfirm() {
      this.alterDialogShow = false;
      const param = {
        fastFee: Number(this.alterList.fastFee) * 100,
        fineFee: Number(this.alterList.fineFee) * 100,
        generalFee: Number(this.alterList.generalFee) * 100
      };
      console.log(param);
      this.$basicInformationManagement
        .updateCawWasherBillingRule(param)
        .then(res => {
          this.queryWashCar();
        });
    }
  }
};
</script>
<style scoped>
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/*查询*/
.up {
  width: 98%;
  height: 11%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 84%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 40px;
  padding-left: 1%;
  padding-top: 0.5%;
}

.line-2 {
  width: 98%;
  height: 40px;
  margin-left: 1%;
  margin-top: 0.5%;
}
.backgroundLine {
  background-color: #eaf0f6;
  width: 100%;
  height: 15px;
}
/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #f8f9fa !important;
}

/deep/ .el-table .successSecond {
  background: white !important;
}
</style>
