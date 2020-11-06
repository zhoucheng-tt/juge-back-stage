<!--
    停车场运营收入分析
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="about">
    <!-- 上半部分查询-->
    <div class="up">
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <el-form-item label="统计日期:">
          <el-date-picker v-model="query.dataTimeIn" type="date" placeholder="选择日期" value-format="yyyyMMddhhmm">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="停车场：">
          <el-select v-model="query.TingNum" placeholder="请选择停车场">
            <el-option v-for="(item, index) in parkList" :label="item.name" :value="item.code"
                       :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryButton">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 图表部分 -->
    <!-- 中间图标部分内容 -->
    <div class="center">
      <!-- 收入对比分析 numberOfParking-->
      <div style="width: 37%;height: 35%;background-color: bisque;float: left;margin-top: 1%;margin-left: 1%;"
           id="earnCompare">
        <x-chart id="earnCompare" :option="earnCompareChart"></x-chart>
      </div>
      <!-- 平均停车时长 averageParkingTime -->
      <div style="width: 60%;height: 35%;background-color: bisque; float: left; margin-top: 1%;margin-left: 1%;"></div>
      <div style="width: 37%;height: 35%;background-color: bisque;float: left;margin-top: 1%;margin-left: 1%;"></div>
      <!-- 平均停车时长 averageParkingTime -->
      <div style="width: 60%;height: 35%;background-color: bisque;float: left;margin-top: 1%;margin-left: 1%;"></div>
      <!-- 平均充电时间 averageChargingTime-->
      <div style="width: 48.5%;height: 27%;background-color: bisque;float: left;margin-top: 1%;margin-left: 1%;"></div>
      <!-- 平均洗车时长 averageWashingTime-->
      <div
          style="width: 48.5%;height: 27%;background-color: bisque; float: left; margin-top: 1%;margin-left: 1%;"></div>
    </div>
  </div>
</template>
<script>
import Xchart from "@/components/charts/charts";
import Xchart3d from "@/components/charts/charts3d";
import HighCharts from "highcharts";

export default {
  components: {
    Xchart,
    Xchart3d,
    HighCharts
  },
  data() {
    return {
      // 顶部查询数据暂存处
      query: {},
      // 停车场下拉框数据暂存处
      parkList: [
        {
          name: "公共停车场",
          code: 1
        },
        {
          name: "公共停车场",
          code: 1
        },
        {
          name: "公共停车场",
          code: 1
        },
        {
          name: "公共停车场",
          code: 1
        },
        {
          name: "公共停车场",
          code: 1
        }
      ],
      //收入对比分析表
      earnCompareChart: {
        chart: {
          zoomType: 'xy',
          renderTo: "earnCompare"
        },
        title: {
          text: '收入对比分析'
        },
        credits: {
          enabled: false
        },
        xAxis: [{
          categories: ["上月同期", "上期", "本期"],
          crosshair: true
        }],
        yAxis: [
          { // Secondary yAxis
            title: {
              text: '',
            },
            labels: {
              format: '{value}%',
            },
            min: 0,
            max: 4,
            opposite: true
          },
          { // Primary yAxis
            labels: {
              format: '{value}元',
            },
            title: {
              text: '',
            }, min: 60000,
            max: 68000,
          }],
        tooltip: {
          shared: true
        },
        series: [{
          name: '总收入',
          type: 'column',
          yAxis: 1,
          data: [66666, 67888, 64222],
        }, {
          name: '同比增幅',
          type: 'spline',
          data: [2.6, 3.6, 1.6],
        }]
      },
      //收入及欠费金额趋势分析
      earnAndOweChart: {},
      //收入构成分析
      earnComponentChart: {},
      //停车场收入及欠费分析
      parkEarnAndOweChart: {},
      //自助充电设备收入按时段分析
      chargeEarnChart: {},
      //自助洗车设备收入按时段分析
      washEarnChart: {}
    }
  },
  mounted() {
    this.drawChart()
  },
  methods: {
    // 查询
    queryButton() {
      console.log("打印出来点击查询后所产生的值", this.query);
    },
    //
    drawChart() {
      new HighCharts.Chart(this.earnCompareChart);
    }
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
  height: 7%;
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
  height: 90%;
  float: left;
}

/* 中间每个图表部分样式 */
.echartStyle {
  width: 48.5%;
  height: 33%;
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
