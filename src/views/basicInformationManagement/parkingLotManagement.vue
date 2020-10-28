<!--
    停车场管理
 * @Author: 王思远
 * @Date: 2020-10-22 09:26:58
 * @LastEditTime: 2020-10-22 09:29:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\carWashingMachineManagement.vue
-->
<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="停车场管理" name="first">
        <parking-lot-management/>
      </el-tab-pane>
      <el-tab-pane label="车位管理" name="second">
        <parking-space-management/>
      </el-tab-pane>
      <el-tab-pane label="出入口管理" name="third">
        <entry-and-exit-management/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import EntryAndExitManagement from './components/parkingLotManagement/entryAndExitManagement'
import ParkingLotManagement from './components/parkingLotManagement/parkingLotManagement'
import ParkingSpaceManagement from './components/parkingLotManagement/parkingSpaceManagement'

export default {
  components: {
    EntryAndExitManagement,
    ParkingLotManagement,
    ParkingSpaceManagement
  },
  data(){
    return{
      activeName: 'first'
    }
  }
}
</script>
<style scoped>
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 上半部分查询部分 */
.up {
  width: 100%;
  height: 15%;
  float: left;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 80%;
  margin-top: 3%;
  padding-left: 2%;
}

/* 下班部分列表部分 */
.down {
  width: 100%;
  height: 85%;
  float: left;
}

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #7de6f8 !important;
}

/deep/ .el-table .successSecond {
  background: #8ed3e7 !important;
}

/* 表格表头样式 */
.el-table__header-wrapper {
  width: 100%;
  height: 0px;
}

/* 设置弹出框样式 */
/deep/ .el-dialog {
  width: 50%;
}

/* 弹出框内表单样式控制 */
.el-form-item-dialog {
  width: 32%;
}

#add {
  height: auto;

}
</style>
