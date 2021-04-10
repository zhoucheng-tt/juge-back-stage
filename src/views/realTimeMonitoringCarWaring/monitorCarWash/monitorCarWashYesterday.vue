<!--洗车运营分析昨日-->
<template>
  <div class="about">
    <div class="backgroundLine"></div>
    <!-- 上半部分查询-->
    <div class="up">
      <el-button type="primary" size="small">
        <a
          :href="exportFile"
          class="download"
          download=""
          style="color: #ffffff;text-decoration:none"
        >
          导出
        </a>
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
import { BASE_API } from "@/utils/config";

export default {
  components: {
    Xchart,
    Xchart3d
  },
  data() {
    return {
      //导出
      exportFile: BASE_API + "/CarWashAnalysis/download?jsonStr=",
      //洗车收入统计分析
      revenueCarWashingAnalysisOption: {},
      revenueCarWashingAnalysisName: "洗车收入统计分析",
      revenueCarWashingAnalysisXz: [],
      revenueCarWashingAnalysisY: [],

      //洗车类型收入统计分析
      carWashTypeIncomeAnalysisOption: {},
      carWashTypeIncomeAnalysisName: "洗车类型收入统计分析",
      carWashTypeIncomeAnalysisXz: [],
      carWashTypeIncomeAnalysisJINGY: [],
      carWashTypeIncomeAnalysisPUY: [],
      carWashTypeIncomeAnalysisKUAIY: [],
      carWashTypeIncomeAnalysisJINGList: [],
      carWashTypeIncomeAnalysisPUList: [],
      carWashTypeIncomeAnalysisKUAIList: [],

      //洗车次数统计分析
      carWashTimesAnalysisOption: {},
      carWashTimesAnalysisName: "洗车次数统计分析",
      carWashTimesAnalysisXz: [],
      carWashTimesAnalysisY: [],

      // 洗车类型次数统计分析
      carWashTypeTimesAnalysisOption: {},
      carWashTypeTimesAnalysisName: "洗车类型次数统计分析",
      carWashTypeTimesAnalysisXz: [],
      carWashTypeTimesAnalysisJINGY: [],
      carWashTypeTimesAnalysisPUY: [],
      carWashTypeTimesAnalysisKUAIY: [],
      carWashTypeTimesAnalysisJINGList: [],
      carWashTypeTimesAnalysisPUList: [],
      carWashTypeTimesAnalysisKUAIList: []
    };
  },
  mounted() {
    // 导出
    const param = {
      queryDate: "yesterday"
    };
    this.exportFile =
      BASE_API +
      "/CarWashAnalysis/download?jsonStr=" +
      encodeURIComponent(JSON.stringify(param));
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
    //洗车收入统计分析
    handleRevenueCarWashingAnalysis() {
      const param = { queryDate: "yesterday" };
      this.$realTimeMonitor.queryCarWashIncomeAnalysis(param).then(res => {
        res.resultEntity.forEach(item => {
          this.revenueCarWashingAnalysisXz.push(item.time),
            this.revenueCarWashingAnalysisY.push(Number(item.amount)/100);
        });
        this.revenueCarWashingAnalysisOption = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "revenueCarWashingAnalysisID",
            marginBottom: 40
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
            // tickInterval: 2
          },
          colors: ["#0D64F4"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}元"
            }
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 10,
            itemStyle: {
              color: "#666666",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "#666666"
            },
            itemHoverStyle: {
              color: "#cccccc"
            },
            itemHiddenStyle: {
              color: "#cccccc"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}元</b>"
          },
          plotOptions: {
            spline: {
              lineWidth: 2,
              states: {
                hover: {
                  lineWidth: 3
                }
              },
              marker: {
                enabled: false
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
      });
    },
    //洗车类型收入统计分析
    handleCarWashTypeIncomeAnalysis() {
      const param = { queryDate: "yesterday" };
      this.$realTimeMonitor.queryCarWashTypeIncomeAnalysis(param).then(res => {
        res.resultEntity.forEach(item => {
          if (item.washType == "精洗") {
            this.carWashTypeIncomeAnalysisJINGList.push(item);
          } else if (item.washType == "普洗") {
            this.carWashTypeIncomeAnalysisPUList.push(item);
          } else if (item.washType == "快洗") {
            this.carWashTypeIncomeAnalysisKUAIList.push(item);
          }
        });
        this.carWashTypeIncomeAnalysisJINGList.forEach(item => {
          this.carWashTypeIncomeAnalysisXz.push(item.time);
          this.carWashTypeIncomeAnalysisJINGY.push(Number(item.income)/100);
        });
        this.carWashTypeIncomeAnalysisPUList.forEach(item => {
          this.carWashTypeIncomeAnalysisPUY.push(Number(item.income)/100);
        });
        this.carWashTypeIncomeAnalysisKUAIList.forEach(item => {
          this.carWashTypeIncomeAnalysisKUAIY.push(Number(item.income)/100);
        });
        this.carWashTypeIncomeAnalysisOption = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "carWashTypeIncomeAnalysisID",
            marginBottom: 40
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
            // tickInterval: 2
          },
          colors: ["#0D64F4", "#00DBEC", "#1EC193"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}元"
            }
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 200,
            y: 10,
            itemStyle: {
              color: "#666666",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "#666666"
            },
            itemHoverStyle: {
              color: "#cccccc"
            },
            itemHiddenStyle: {
              color: "#cccccc"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}元</b>"
          },
          plotOptions: {
            spline: {
              lineWidth: 1,
              states: {
                hover: {
                  lineWidth: 2
                }
              },
              marker: {
                enabled: false
              }
            }
          },
          series: [
            {
              name: "精洗营收金额",
              data: this.carWashTypeIncomeAnalysisJINGY
            },
            {
              name: "普洗营收金额",
              data: this.carWashTypeIncomeAnalysisPUY
            },
            {
              name: "快洗营收金额",
              data: this.carWashTypeIncomeAnalysisKUAIY
            }
          ]
        };
        new HighCharts.chart(this.carWashTypeIncomeAnalysisOption);
      });
    },
    //洗车次数统计分析
    handleCarWashTimesAnalysis() {
      const param = { queryDate: "yesterday" };
      this.$realTimeMonitor.queryCarWashCountAnalysis(param).then(res => {
        res.resultEntity.forEach(item => {
          this.carWashTimesAnalysisXz.push(item.time);
          this.carWashTimesAnalysisY.push(Number(item.times));
        });
        this.carWashTimesAnalysisOption = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "carWashTimesAnalysisID",
            marginBottom: 40
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
            // tickInterval: 2
          },
          colors: ["#0D64F4"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}次"
            }
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 10,
            itemStyle: {
              color: "#666666",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "#666666"
            },
            itemHoverStyle: {
              color: "#cccccc"
            },
            itemHiddenStyle: {
              color: "#cccccc"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}次</b>"
          },
          plotOptions: {
            spline: {
              lineWidth: 2,
              states: {
                hover: {
                  lineWidth: 3
                }
              },
              marker: {
                enabled: false
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
      });
    },
    //洗车类型次数统计分析
    handleCarWashTypeTimesAnalysis() {
      const param = { queryDate: "yesterday" };
      this.$realTimeMonitor.queryCarWashTypeTimesAnalysis(param).then(res => {
        res.resultEntity.forEach(item => {
          if (item.washType == "精洗") {
            this.carWashTypeTimesAnalysisJINGList.push(item);
          } else if (item.washType == "普洗") {
            this.carWashTypeTimesAnalysisPUList.push(item);
          } else if (item.washType == "快洗") {
            this.carWashTypeTimesAnalysisKUAIList.push(item);
          }
        });
        this.carWashTypeTimesAnalysisJINGList.forEach(item => {
          this.carWashTypeTimesAnalysisXz.push(item.time);
          this.carWashTypeTimesAnalysisJINGY.push(Number(item.times));
        });
        this.carWashTypeTimesAnalysisPUList.forEach(item => {
          this.carWashTypeTimesAnalysisPUY.push(Number(item.times));
        });
        this.carWashTypeTimesAnalysisKUAIList.forEach(item => {
          this.carWashTypeTimesAnalysisKUAIY.push(Number(item.times));
        });
        this.carWashTypeTimesAnalysisOption = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "carWashTypeTimesAnalysisID",
            marginBottom: 40
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
            // tickInterval: 2
          },
          colors: ["#0D64F4", "#00DBEC", "#1EC193"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}次"
            }
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 230,
            y: 10,
            itemStyle: {
              color: "#666666",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "#666666"
            },
            itemHoverStyle: {
              color: "#cccccc"
            },
            itemHiddenStyle: {
              color: "#cccccc"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}次</b>"
          },
          plotOptions: {
            spline: {
              lineWidth: 1,
              states: {
                hover: {
                  lineWidth: 2
                }
              },
              marker: {
                enabled: false
              }
            }
          },
          series: [
            {
              name: "精洗次数",
              data: this.carWashTypeTimesAnalysisJINGY
            },
            {
              name: "普洗次数",
              data: this.carWashTypeTimesAnalysisPUY
            },
            {
              name: "快洗次数",
              data: this.carWashTypeTimesAnalysisKUAIY
            }
          ]
        };
        new HighCharts.chart(this.carWashTypeTimesAnalysisOption);
      });
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
  height: 370px;
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
