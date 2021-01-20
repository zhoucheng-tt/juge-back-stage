<template>
  <div class="about">
    <div class="backgroundLine"></div>
    <!-- 上半部分查询-->
    <div class="up">
      <el-button type="primary" size="small" @click="handleExport">
        导出
      </el-button>
    </div>
    <div class="backgroundLine"></div>
    <!-- 中间图标部分内容 -->
    <div class="center">
      <div class="center-content">
        <!--洗车收入统计分析-->
        <div id="revenueCarWashingAnalysis" class="echartStyle">
          <Xchart
            id="revenueCarWashingAnalysis"
            :option="revenueCarWashingAnalysisOption"
          ></Xchart>
        </div>
        <div class="backgroundShu"></div>
        <!-- 洗车类型收入统计分析 -->
        <div id="earnComponent" class="echartStyle">
          <Xchart id="earnComponent" :option="earnComponentChart"></Xchart>
        </div>
      </div>
      <div class="backgroundLine"></div>
      <div class="center-content">
        <!--洗车次数统计分析-->
        <div id="paymentStyle" class="echartStyle">
          <Xchart id="paymentStyle" :option="paymentStyleChart"></Xchart>
        </div>
        <div class="backgroundShu"></div>
        <!--洗车类型次数统计分析-->
        <div id="earnCompare" class="echartStyle">
          <Xchart id="earnCompare" :option="earnCompareChart"></Xchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HighCharts from "highcharts";

export default {
  data() {
    return {
      //洗车收入统计分析
      revenueCarWashingAnalysisOption: {},
      revenueCarWashingAnalysisName: "洗车收入统计分析",
      parkIncomeAnalysisXz: [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09"
      ],
      parkIncomeAnalysisY: [1, 3, 5, 4, 5, 2, 7, 5, 3, 8],

      //缴费类型统计分析
      paymentStyleChart: {},
      paymentStyleAnalysisName: "缴费类型统计分析",
      paymentStyleAnalysisXz: [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09"
      ],
      paymentStyleAnalysisZFB: [1, 2, 4, 6, 2, 5, 1, 3, 4, 6],
      paymentStyleAnalysisWX: [2, 1, 5, 3, 4, 1, 6, 2, 1, 5],
      paymentStyleAnalysisCrash: [3, 1, 5, 2, 4, 1, 5, 2, 6, 3],
      paymentStyleAnalysisOther: [2, 1, 2, 5, 1, 2, 4, 6, 5, 1]
    };
  },
  mounted() {
    //停车收费统计分析
    this.parkIncomeAnalysis();
  },
  methods: {
    //导出接口
    handleExport() {},

    //停车收费统计分析
    parkIncomeAnalysis() {
      this.parkIncomeChart = {
        chart: {
          type: "line",
          backgroundColor: "rgba(0,0,0,0)",
          renderTo: "parkIncome"
        },
        title: {
          text: this.parkIncomeAnalysisName,
          align: "left",
          x: 20,
          style: {
            fontFamily: "PingFangSC-Medium",
            fontSize: "16px",
            color: "#333333",
            letterSpacing: "0.17px"
          }
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: this.parkIncomeAnalysisXz
        },
        colors: ["#03D7E9"],
        yAxis: {
          title: {
            text: ""
          },
          labels: {
            format: "{value}"
          }
        },
        legend: {
          enabled: true,
          align: "center",
          verticalAlign: "left",
          x: 300,
          y: 10,
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
        tooltip: {
          pointFormat: "{series.name}: <b>{point.y}</b>"
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
            name: "停车收费金额",
            data: this.parkIncomeAnalysisY
          }
        ]
      };
      new HighCharts.chart(this.parkIncomeChart);
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
  width: 98%;
  height: 40px;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

/* 中间部分图表内容 */
.center {
  width: 100%;
  height: 90%;
  float: left;
}
.center-content {
  width: 100%;
  height: 31%;
  display: flex;
  margin-top: 1%;
}

.backgroundLine {
  background-color: #eaf0f6;
  width: 100%;
  height: 15px;
}
.backgroundShu {
  background-color: #eaf0f6;
  width: 1%;
  height: 363px;
  margin-top: -17px;
}
/* 中间每个图表部分样式 */
.echartStyle {
  width: 48.5%;
  height: 330px;
  background-color: #ffffff;
  float: left;
  margin-top: 1%;
  margin-left: 1%;
}
</style>
