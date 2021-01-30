<!--
    实时监测洗车机运营数据分析
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-07 17:22:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div>
    <el-tabs v-model="activeName" class="tabsStyle" type="card">
      <el-tab-pane label="今日" name="first">
        <monitor-Car-Wash-Today v-if="activeName === 'first'" />
      </el-tab-pane>
      <el-tab-pane label="昨日" name="second">
        <monitor-Car-Wash-Yesterday v-if="activeName === 'second'" />
      </el-tab-pane>
      <el-tab-pane label="本周" name="third">
        <monitor-Car-Wash-Currentweek v-if="activeName === 'third'" />
      </el-tab-pane>
      <el-tab-pane label="本月" name="forth">
        <monitor-Car-Wash-CurrentMonth v-if="activeName === 'forth'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Xchart from "../../components/charts/charts.vue";
import Xchart3d from "../../components/charts/charts3d.vue";
import HighCharts from "highcharts";
import HighCharts3d from "highcharts-3d";
//实时监测洗车机今日
import monitorCarWashToday from "./monitorCarWash/monitorCarWashToday";
//实时监测洗车机昨日
import monitorCarWashYesterday from "./monitorCarWash/monitorCarWashYesterday";
//实时监测洗车机本周
import monitorCarWashCurrentweek from "./monitorCarWash/monitorCarWashCurrentweek";
//实时监测洗车机本月
import monitorCarWashCurrentMonth from "./monitorCarWash/monitorCarWashCurrentMonth";

export default {
  components: {
    Xchart,
    Xchart3d,
    monitorCarWashToday,
    monitorCarWashYesterday,
    monitorCarWashCurrentweek,
    monitorCarWashCurrentMonth
  },

  data() {
    return {
      activeName: "first"
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.tabsStyle {
  background-color: white;
  margin-top: 0.5%;
  margin-left: 1%;
  width: 98%;
  height: 870px;
  background-color: white;
}

/deep/ .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 !important;
}
</style>
