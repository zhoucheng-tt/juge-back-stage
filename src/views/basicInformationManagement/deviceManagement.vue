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
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="视频车位检测器" name="first">
        <video-Parking-Detector v-if="activeName === 'first'" />
      </el-tab-pane>
      <el-tab-pane label="地磁车位检测器" name="second">
        <geomagnetic-Parking-Detector v-if="activeName === 'second'" />
      </el-tab-pane>
      <el-tab-pane label="地锁" name="third">
        <floor-Lock v-if="activeName === 'third'" />
      </el-tab-pane>
      <el-tab-pane label="进出口摄像头管理" name="forth">
        <import-Export-Camera-Management v-if="activeName === 'forth'" />
      </el-tab-pane>
      <el-tab-pane label="道闸机管理" name="five">
        <gate-Machine-Management v-if="activeName === 'five'" />
      </el-tab-pane>
      <el-tab-pane label="洗车机管理" name="six">
        <car-Washing-Machine-Management v-if="activeName === 'six'" />
      </el-tab-pane>
      <el-tab-pane label="ETC管理" name="seven">
        <basic-Information-Management-ETC v-if="activeName === 'seven'" />
      </el-tab-pane>
      <!--            <el-tab-pane label="充电桩管理" name="eight">-->
      <!--                <charge-Point-Management v-if="activeName === 'eight'" />-->
      <!--            </el-tab-pane>-->
    </el-tabs>
  </div>
</template>
<script>
//视频车位
import videoParkingDetector from "./components/deviceManagement/videoParkingDetector";
//地磁车
import geomagneticParkingDetector from "./components/deviceManagement/geomagneticParkingDetector";
// 地锁
import floorLock from "./components/deviceManagement/floorLock";
// 进出口摄像头管理
import importExportCameraManagement from "./components/deviceManagement/importExportCameraManagement";
// 道闸机管理  gateMachineManagement
import gateMachineManagement from "./components/deviceManagement/gateMachineManagement";
// 洗车机管理  carWashingMachineManagement
import carWashingMachineManagement from "./components/deviceManagement/carWashingMachineManagement";
//ETC basicInformationManagementETC
import basicInformationManagementETC from "./components/deviceManagement/basicInformationManagementETC";
// 充电桩管理  chargePointManagement
// import chargePointManagement from "./components/deviceManagement/chargePointManagement";

export default {
  components: {
    videoParkingDetector,
    geomagneticParkingDetector,
    floorLock,
    importExportCameraManagement,
    gateMachineManagement,
    carWashingMachineManagement,
    basicInformationManagementETC
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
