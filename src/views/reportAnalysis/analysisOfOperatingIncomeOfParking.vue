<!--
   运营收入分析
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-12 19:38:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div>
    <el-tabs v-model="activeName" class="tabsStyle" type="card">
      <el-tab-pane label="今日" name="first">
        <operating-income-analysis-today v-if="activeName === 'first'" />
      </el-tab-pane>
      <el-tab-pane label="昨日" name="second">
        <operating-income-analysis-yesterday v-if="activeName === 'second'" />
      </el-tab-pane>
      <el-tab-pane label="本周" name="third">
        <operating-income-analysis-currentweek v-if="activeName === 'third'" />
      </el-tab-pane>
      <el-tab-pane label="本月" name="forth">
        <operating-income-analysis-currentmonth v-if="activeName === 'forth'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Xchart from "@/components/charts/charts";
import Xchart3d from "@/components/charts/charts3d";
import HighCharts from "highcharts";
//实时监测洗车机今日
import operatingIncomeAnalysisToday from "./operatingIncomeAnalysis/operatingIncomeAnalysisToday";
//实时监测洗车机昨日
import operatingIncomeAnalysisYesterday from "./operatingIncomeAnalysis/operatingIncomeAnalysisYesterday";
//实时监测洗车机本周
import operatingIncomeAnalysisCurrentweek from "./operatingIncomeAnalysis/operatingIncomeAnalysisCurrentweek";
//实时监测洗车机本月
import operatingIncomeAnalysisCurrentmonth from "./operatingIncomeAnalysis/operatingIncomeAnalysisCurrentmonth";
export default {
  components: {
    Xchart,
    Xchart3d,
    HighCharts,
    operatingIncomeAnalysisToday,
    operatingIncomeAnalysisYesterday,
    operatingIncomeAnalysisCurrentweek,
    operatingIncomeAnalysisCurrentmonth
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
  height: 860px;
  background-color: white;
}

/deep/ .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 !important;
}
</style>
