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
        :data="chargeModeManagement"
        ref="selectChargeModeManagement"
        @selection-change="handleSelectionChange"
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
          prop="chargeModeNumber"
          label="计费规则编号"
        ></el-table-column>
        <el-table-column
          prop="chargeModeName"
          :show-overflow-tooltip="true"
          label="计费规则名称"
        >
        </el-table-column>
        <el-table-column
          prop="chargeModeType"
          :show-overflow-tooltip="true"
          label="计费规则类型"
        >
        </el-table-column>
        <el-table-column
          prop="description"
          :show-overflow-tooltip="true"
          label="描述"
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
    </div>
    <!-- 信息修改点击弹出框 -->
    <el-dialog title="修改计费规则" :visible.sync="editListDialogueandoff">
      <el-form :inline="true" :model="editListDialogueandoffList">
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="计费规则编号:" label-width="150px">
              <el-input
                v-model="editListDialogueandoffList.chargeModeNumber"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计费规则名称:" label-width="150px">
              <el-input
                v-model="editListDialogueandoffList.chargeModeName"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计费规则类型:" label-width="150px">
              <el-input
                v-model="editListDialogueandoffList.chargeModeType"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="描述:" label-width="150px">
              <el-input
                v-model="editListDialogueandoffList.description"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!--        <el-button @click="editListDialogueandoff = false">取 消</el-button>-->
        <el-button type="primary" @click="InfoInsert">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editListDialogueandoff: false,
      editListDialogueandoffList: {},
      chargeModeManagement: [
        {
          chargeModeNumber: "J001",
          chargeModeName: "洗车机按次计费规则1",
          chargeModeType: "按次",
          description: "无"
        }
      ]
    };
  },
  mounted() {
    this.queryParkList();
  },
  methods: {
    handleClickAlter() {},
    InfoInsert() {}
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
