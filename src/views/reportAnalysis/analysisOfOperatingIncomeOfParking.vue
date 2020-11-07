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
          <el-date-picker
            v-model="query.date"
            type="date"
            placeholder="选择日期"
            value-format="yyyyMMddhhmm"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="停车场：">
          <el-select v-model="query.parkId" placeholder="请选择停车场">
            <el-option
              v-for="(item, index) in parkList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
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
      <div
        style="width: 40%;height: 35%;float: left;margin-top: 1%;margin-left: 1%;"
        id="earnCompare"
      >
        <Xchart id="earnCompare" :option="earnCompareChart"></Xchart>
      </div>
      <!-- 收入与欠费金额趋势分析 -->
      <div
        style="width: 57%;height: 35%; float: left; margin-top: 1%;margin-left: 1%;"
        id="earnAndOwe"
      >
        <Xchart id="earnAndOwe" :option="earnAndOweChart"></Xchart>
      </div>
      <!--收入构成分析-->
      <div
        style="width: 40%;height: 35%;float: left;margin-top: 1%;margin-left: 1%;"
        id="earnComponent"
      >
        <Xchart id="earnComponent" :option="earnAndOweChart"></Xchart>
      </div>
      <!--停车场收入及欠费分析-->
      <div
        style="width: 57%;height: 35%;float: left;margin-top: 1%;margin-left: 1%;"
        id="parkEarnAndOwe"
      >
        <Xchart id="parkEarnAndOwe" :option="parkEarnAndOweChart"></Xchart>
      </div>
      <!-- 平均充电时间 averageChargingTime-->
      <div
        style="width: 48.5%;height: 27%;float: left;margin-top: 1%;margin-left: 1%;"
        id="chargeEarn"
      >
        <Xchart id="chargeEarn" :option="chargeEarnChart"></Xchart>
      </div>
      <!-- 平均洗车时长 averageWashingTime-->
      <div
        style="width: 48.5%;height: 27%;float: left; margin-top: 1%;margin-left: 1%;"
        id="washEarn"
      >
        <Xchart id="washEarn" :option="washEarnChart"></Xchart>
      </div>
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
    // eslint-disable-next-line vue/no-unused-components
    Xchart3d,
    // eslint-disable-next-line vue/no-unused-components
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
          zoomType: "xy",
          renderTo: "earnCompare"
        },
        title: {
          text: "收入对比分析"
        },
        credits: {
          enabled: false
        },
        xAxis: [
          {
            categories: ["上月同期", "上期", "本期"],
            crosshair: true
          }
        ],
        yAxis: [
          {
            // Secondary yAxis
            title: {
              text: ""
            },
            labels: {
              format: "{value}%"
            },
            min: 0,
            max: 4,
            opposite: true
          },
          {
            // Primary yAxis
            labels: {
              format: "{value}元"
            },
            title: {
              text: ""
            },
            min: 60000,
            max: 68000
          }
        ],
        tooltip: {
          shared: true
        },
        legend: {
          align: "center",
          verticalAlign: "top",
          x: 0,
          y: -20
        },
        series: [
          {
            name: "总收入",
            type: "column",
            yAxis: 1,
            data: [66666, 67888, 64222]
          },
          {
            name: "同比增幅",
            type: "spline",
            data: [2.6, 3.6, 1.6]
          }
        ]
      },
      //收入及欠费金额趋势分析
      earnAndOweChart: {
        chart: {
          type: "line",
          renderTo: "earnAndOwe"
        },
        title: {
          text: "收入及欠费金额趋势分析"
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: [
            "2017-6-20",
            "2017-6-21",
            "2017-6-22",
            "2017-6-23",
            "2017-6-24",
            "2017-6-25",
            "2017-6-26",
            "2017-6-27",
            "2017-6-28",
            "2017-6-29",
            "2017-6-30",
            "2017-7-1",
            "2017-7-2"
          ]
        },
        yAxis: {
          title: {
            text: ""
          },
          max: 3000,
          min: 0
        },
        legend: {
          align: "center",
          verticalAlign: "top",
          x: 0,
          y: -20
        },
        tooltip: {
          pointFormat: "洗车： <b>{point.y:,.0f}</b>辆"
        },
        plotOptions: {
          area: {
            marker: {
              enabled: false,
              symbol: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [
          {
            name: "总收入金额",
            data: [
              2700,
              2000,
              3000,
              2600,
              2800,
              3000,
              1900,
              2000,
              2500,
              2800,
              3000,
              2800,
              2900
            ]
          },
          {
            name: "欠费金额",
            data: [
              800,
              700,
              600,
              900,
              600,
              800,
              850,
              780,
              660,
              950,
              800,
              700,
              800
            ]
          }
        ]
      },
      //收入构成分析
      earnComponentChart: {
        chart: {
          type: "pie",
          renderTo: "earnComponent",
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          }
        },
        title: {
          text: "收入构成分析"
        },
        credits: {
          enabled: false
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            innerSize: 100,
            depth: 45,
            dataLabels: {
              enabled: true,
              format: "{point.name}"
            }
          }
        },
        series: [
          {
            type: "pie",
            name: "支付占比",
            data: [
              ["支付宝支付", 50.0],
              ["微信支付", 30.0],
              ["ETC支付", 20.0]
            ]
          }
        ]
      },
      //停车场收入及欠费分析
      parkEarnAndOweChart: {
        chart: {
          type: "column",
          renderTo: "parkEarnAndOwe"
        },
        credits: {
          enabled: false
        },
        title: {
          text: "停车场收入及欠费分析"
        },
        xAxis: {
          categories: ["收入金额", "欠费金额"]
        },
        yAxis: {
          min: 0,
          max: 6000,
          title: {
            text: ""
          }
        },
        tooltip: {
          pointFormat:
            '<span style="color:{series.color}"></span>: {point.y}' + "元",
          shared: true
        },
        legend: {
          enabled: false,
          align: "center",
          verticalAlign: "top",
          x: 0,
          y: -20,
          itemStyle: {
            color: "#cccccc",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            fill: "#cccccc"
          },
          itemHoverStyle: {
            color: "#666666"
          },
          itemHiddenStyle: {
            color: "#333333"
          }
        },
        series: [
          {
            data: [5600, 2400]
          }
        ]
      },
      //自助充电设备收入按时段分析
      chargeEarnChart: {
        chart: {
          type: "column",
          renderTo: "chargeEarn",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        title: {
          text: "自助充电设备收入按时段分析"
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          series: {
            depth: 25,
            colorByPoint: true
          }
        },
        series: [
          {
            data: [
              29.9,
              71.5,
              106.4,
              129.2,
              144.0,
              176.0,
              135.6,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4
            ],
            name: "Cylinders",
            showInLegend: false
          }
        ]
      },
      //自助洗车设备收入按时段分析
      washEarnChart: {
        chart: {
          type: "column",
          renderTo: "washEarn",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        title: {
          text: "自助洗车设备收入按时段分析"
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          series: {
            depth: 25,
            colorByPoint: true
          }
        },
        series: [
          {
            data: [
              29.9,
              71.5,
              106.4,
              129.2,
              144.0,
              176.0,
              135.6,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4
            ],
            name: "Cylinders",
            showInLegend: false
          }
        ]
      }
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    // 查询
    queryButton() {
      console.log("打印出来点击查询后所产生的值", this.query);
    },
    //
    drawChart() {
      new HighCharts.Chart(this.earnCompareChart);
      new HighCharts.chart(this.earnAndOweChart);
      new HighCharts.chart(this.earnComponentChart);
      new HighCharts.chart(this.parkEarnAndOweChart);
      new HighCharts.chart(this.chargeEarnChart);
      new HighCharts.chart(this.washEarnChart);
    }
  }
};
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

/* 底部表格部分 */
</style>
