<!--
    设备管理
 * @Author: 邵青阳
 * @Date: 2020-10-22 09:26:58
 * @LastEditTime: 2020-11-02 17:23:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\carWashingMachineManagement.vue
-->
<template>
  <div>
    <el-tabs v-model="activeName" class="tabsStyle" type="card">
      <el-tab-pane label="地磁车位检测器" name="first">
        <geomagnetic-Parking-Detector v-if="activeName === 'first'" />
      </el-tab-pane>
      <el-tab-pane label="地锁" name="second">
        <floor-Lock v-if="activeName === 'second'" />
      </el-tab-pane>

      <el-tab-pane label="道闸机管理" name="forth">
        <gate-Machine-Management v-if="activeName === 'forth'" />
      </el-tab-pane>
      <el-tab-pane label="洗车机管理" name="five">
        <car-Washing-Machine-Management v-if="activeName === 'five'" />
      </el-tab-pane>
      <el-tab-pane label="ETC管理" name="six">
        <basic-Information-Management-ETC v-if="activeName === 'six'" />
      </el-tab-pane>
<!--      <el-tab-pane label="进出口摄像头管理" name="third">-->
<!--        <import-Export-Camera-Management v-if="activeName === 'third'" />-->
<!--      </el-tab-pane>-->
      <!--      <el-tab-pane label="视频车位检测器" name="first">-->
      <!--        <video-Parking-Detector v-if="activeName === 'first'" />-->
      <!--      </el-tab-pane>-->
      <!--            <el-tab-pane label="充电桩管理" name="eight">-->
      <!--                <charge-Point-Management v-if="activeName === 'eight'" />-->
      <!--            </el-tab-pane>-->
    </el-tabs>
  </div>
</template>
<script>
//地磁车
import geomagneticParkingDetector from "./components/deviceManagement/geomagneticParkingDetector";
// 地锁
import floorLock from "./components/deviceManagement/floorLock";
// 进出口摄像头管理
// import importExportCameraManagement from "./components/deviceManagement/importExportCameraManagement";
// 道闸机管理  gateMachineManagement
import gateMachineManagement from "./components/deviceManagement/gateMachineManagement";
// 洗车机管理  carWashingMachineManagement
import carWashingMachineManagement from "./components/deviceManagement/carWashingMachineManagement";
//ETC basicInformationManagementETC
import basicInformationManagementETC from "./components/deviceManagement/basicInformationManagementETC";
//视频车位监测器
// import videoParkingDetector from "./components/deviceManagement/videoParkingDetector";
// 充电桩管理  chargePointManagement
// import chargePointManagement from "./components/deviceManagement/chargePointManagement";

export default {
  components: {
    geomagneticParkingDetector,
    floorLock,
    gateMachineManagement,
    carWashingMachineManagement,
    basicInformationManagementETC,
      // importExportCameraManagement,
      // videoParkingDetector,
    // chargePointManagement,
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
  height: 907px;
  background-color: white;
}

/deep/ .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 !important;
}
</style>
