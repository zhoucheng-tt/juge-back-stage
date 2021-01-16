<!--
    停车场管理
 * @Author: 王思远
 * @Date: 2020-10-22 09:26:58
 * @LastEditTime: 2020-10-30 13:58:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\carWashingMachineManagement.vue
-->
<template>
  <div>
    <el-tabs v-model="activeName" class="tabsStyle" type="card">
      <el-tab-pane label="停车场管理" name="first">
        <parking-lot-management />
      </el-tab-pane>
      <el-tab-pane label="车位管理" name="second">
        <parking-space-management />
      </el-tab-pane>
      <el-tab-pane label="出入口管理" name="third">
        <entry-and-exit-management />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import EntryAndExitManagement from "./components/parkingLotManagement/entryAndExitManagement";
import ParkingLotManagement from "./components/parkingLotManagement/parkingLotManagement";
import ParkingSpaceManagement from "./components/parkingLotManagement/parkingSpaceManagement";

export default {
  components: {
    EntryAndExitManagement,
    ParkingLotManagement,
    ParkingSpaceManagement
  },
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>
<style scoped>
.tabsStyle {
  background-color: white;
  margin-top: 0.5%;
  margin-left: 1%;
  width: 98%;
  height: 845px;
  background-color: white;
}

/deep/ .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 !important;
}
</style>
