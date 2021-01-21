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
        <div id="revenueCarWashingAnalysisID" class="echartStyle">
          <Xchart
            id="revenueCarWashingAnalysisID"
            :option="revenueCarWashingAnalysisOption"
          ></Xchart>
        </div>
        <div class="backgroundShu"></div>
        <!-- 洗车类型收入统计分析 -->
        <div id="carWashTypeIncomeAnalysisID" class="echartStyle">
          <Xchart
            id="carWashTypeIncomeAnalysisID"
            :option="carWashTypeIncomeAnalysisOption"
          ></Xchart>
        </div>
      </div>
      <div class="backgroundLine"></div>
      <div class="center-content">
        <!--洗车次数统计分析-->
        <div id="carWashTimesAnalysisID" class="echartStyle">
          <Xchart
            id="carWashTimesAnalysisID"
            :option="carWashTimesAnalysisOption"
          ></Xchart>
        </div>
        <div class="backgroundShu"></div>
        <!--洗车类型次数统计分析-->
        <div id="carWashTypeTimesAnalysisID" class="echartStyle">
          <Xchart
            id="carWashTypeTimesAnalysisID"
            :option="carWashTypeTimesAnalysisOption"
          ></Xchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HighCharts from "highcharts";
import Xchart from "../../../components/charts/charts";
import Xchart3d from "../../../components/charts/charts3d";

export default {
  components: {
    Xchart,
    Xchart3d
  },
  data() {
    return {
      //洗车收入统计分析
      revenueCarWashingAnalysisOption: {},
      revenueCarWashingAnalysisName: "洗车收入统计分析",
      revenueCarWashingAnalysisXz: [
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
      revenueCarWashingAnalysisY: [1, 3, 5, 4, 5, 2, 7, 5, 3, 8],

      //洗车类型收入统计分析
      carWashTypeIncomeAnalysisOption: {},
      carWashTypeIncomeAnalysisName: "洗车类型收入统计分析",
      carWashTypeIncomeAnalysisXz: [
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
      carWashTypeIncomeAnalysisYA: [1, 3, 5, 4, 5, 2, 7, 5, 3, 8],
      carWashTypeIncomeAnalysisYB: [2, 3, 4, 1, 2, 5, 1, 2, 6, 4],
      carWashTypeIncomeAnalysisYC: [2, 1, 5, 3, 4, 1, 5, 2, 1, 6],

      //洗车次数统计分析
      carWashTimesAnalysisOption: {},
      carWashTimesAnalysisName: "洗车次数统计分析",
      carWashTimesAnalysisXz: [
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
      carWashTimesAnalysisY: [1, 3, 5, 4, 5, 2, 7, 5, 3, 8],

      // 洗车类型次数统计分析
      carWashTypeTimesAnalysisOption: {},
      carWashTypeTimesAnalysisName: "洗车类型次数统计分析",
      carWashTypeTimesAnalysisXz: [
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
      carWashTypeTimesAnalysisYA: [1, 3, 5, 4, 5, 2, 7, 5, 3, 8],
      carWashTypeTimesAnalysisYB: [1, 5, 2, 6, 6, 1, 5, 2, 4, 2],
      carWashTypeTimesAnalysisYC: [2, 5, 3, 4, 1, 5, 7, 6, 1, 5]
    };
  },
  mounted() {
    //洗车收入统计分析
    this.handleRevenueCarWashingAnalysis();
    //洗车类型收入统计分析
    this.handleCarWashTypeIncomeAnalysis();
    //洗车次数统计分析
    this.handleCarWashTimesAnalysis();
    //洗车类型次数统计分析
    this.handleCarWashTypeTimesAnalysis();
  },
  methods: {
    //导出接口
    handleExport() {},

    //洗车收入统计分析
    handleRevenueCarWashingAnalysis() {
      this.revenueCarWashingAnalysisOption = {
        chart: {
          type: "line",
          backgroundColor: "rgba(0,0,0,0)",
          renderTo: "revenueCarWashingAnalysisID"
        },
        title: {
          text: this.revenueCarWashingAnalysisName,
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
          categories: this.revenueCarWashingAnalysisXz
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
            name: "营收金额",
            data: this.revenueCarWashingAnalysisY
          }
        ]
      };
      new HighCharts.chart(this.revenueCarWashingAnalysisOption);
    },
    //洗车类型收入统计分析
    handleCarWashTypeIncomeAnalysis() {
      this.carWashTypeIncomeAnalysisOption = {
        chart: {
          type: "line",
          backgroundColor: "rgba(0,0,0,0)",
          renderTo: "carWashTypeIncomeAnalysisID"
        },
        title: {
          text: this.carWashTypeIncomeAnalysisName,
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
          categories: this.carWashTypeIncomeAnalysisXz
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
          x: 200,
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
        colors: ["#3D96AE", "#DB843D", "#92A8CD"],
        series: [
          {
            name: "精洗营收金额",
            data: this.carWashTypeIncomeAnalysisYA
          },
          {
            name: "普洗营收金额",
            data: this.carWashTypeIncomeAnalysisYB
          },
          {
            name: "快洗营收金额",
            data: this.carWashTypeIncomeAnalysisYC
          }
        ]
      };
      new HighCharts.chart(this.carWashTypeIncomeAnalysisOption);
    },
    //洗车次数统计分析
    handleCarWashTimesAnalysis() {
      this.carWashTimesAnalysisOption = {
        chart: {
          type: "line",
          backgroundColor: "rgba(0,0,0,0)",
          renderTo: "carWashTimesAnalysisID"
        },
        title: {
          text: this.carWashTimesAnalysisName,
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
          categories: this.carWashTimesAnalysisXz
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
            name: "洗车次数",
            data: this.carWashTimesAnalysisY
          }
        ]
      };
      new HighCharts.chart(this.carWashTimesAnalysisOption);
    },
    //洗车类型次数统计分析
    handleCarWashTypeTimesAnalysis() {
      this.carWashTypeTimesAnalysisOption = {
        chart: {
          type: "line",
          backgroundColor: "rgba(0,0,0,0)",
          renderTo: "carWashTypeTimesAnalysisID"
        },
        title: {
          text: this.carWashTypeTimesAnalysisName,
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
          categories: this.carWashTypeTimesAnalysisXz
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
          x: 230,
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
        colors: ["#AA4643", "#89A54E", "#80699B"],
        series: [
          {
            name: "精洗次数",
            data: this.carWashTypeTimesAnalysisYA
          },
          {
            name: "普洗次数",
            data: this.carWashTypeTimesAnalysisYB
          },
          {
            name: "快洗次数",
            data: this.carWashTypeTimesAnalysisYC
          }
        ]
      };
      new HighCharts.chart(this.carWashTypeTimesAnalysisOption);
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
  /*margin-top: 1%;*/
  /*margin-left: 1%;*/
}
</style>
