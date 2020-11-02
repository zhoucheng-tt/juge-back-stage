<!--
  停车场运营指标分袖
 * @Author: 邵青阳
 * @Date: 2020-10-20 10:05:17
 * @LastEditTime: 2020-11-02 20:35:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\reportAnalysis\analysisOnOperationIndexOfParking.vue
-->

<template>
  <div class="about">
    <!-- 上部分查询内容 -->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="统计日期:">
          <el-date-picker v-model="upQueryList.dataTimeIn" type="date" placeholder="选择日期" value-format="yyyyMMddhhmm">
          </el-date-picker>
      </el-form-item>
        <el-form-item label="停车场：">
          <el-select v-model="upQueryList.TingNum" placeholder="请选择停车场">
            <el-option v-for="(item, index) in parkingLotList" :label="item.parkingName" :value="item.parkingName"
              :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="SelectQueryList">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 中间图标部分内容 -->
    <div class="center">
      <!-- 停车数量 numberOfParking-->
      <div class="echartStyle"></div>
      <!-- 平均停车时长 averageParkingTime -->
      <div class="echartStyle"></div>
      <!-- 车位利用率  parkingSpaceUtilization -->
      <div class="echartStyle"></div>
      <!-- 车位周转率  parkingSpaceTurnoverRate-->
      <div class="echartStyle"></div>
      <!-- 平均充电时间 averageChargingTime-->
      <div class="echartStyle"></div>
      <!-- 平均洗车时长 averageWashingTime-->
      <div class="echartStyle"></div>
    </div>
    <!-- 底部表格部分 -->
    <div class="down">

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 顶部查询数据暂存处
        upQueryList: {
          TingNum: '',
          // 进场时间
          dataTimeIn: '',
        },
        // 停车场下拉框数据暂存处
        parkingLotList: [
          {
            parkingName: '停车场1',
            id: 1
          },
          {
            parkingName: '停车场2',
            id: 2
          }
        ],
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>
<style scoped>
  /* 总体的页面样式 */
  .about {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /* 顶部查询部分 */
  .up {
    width: 100%;
    height: 5%;
    float: left;
  }

  /* 查询条件部分样式 */
  .demo-form-inline {
    width: 100%;
    height: 80%;
    margin-top: 0.5%;
    padding-left: 2%;
  }

  /* 中间部分图表内容 */
  .center {
    width: 100%;
    height: 65%;
    float: left;
  }

  /* 中间每个图表部分样式 */
  .echartStyle {
    width: 48.5%;
    height: 30%;
    background-color: bisque;
    float: left;
    margin-top: 1%;
    margin-left: 1%;
  }

  /* 底部表格部分 */
  .down {
    width: 100%;
    height: 30%;
    background-color: chartreuse;
    float: left;
  }
</style>