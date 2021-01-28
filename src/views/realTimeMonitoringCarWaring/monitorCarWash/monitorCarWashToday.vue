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
            style="color: #ffffff;text-decoration:none">
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
import {BASE_API} from "@/utils/config";

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
      carWashTypeTimesAnalysisKUAIY: []
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
    // 导出
    const param = {
      queryDate: "today"
    };
    this.exportFile = BASE_API + "/CarWashAnalysis/download?jsonStr=" + encodeURIComponent(JSON.stringify(param));
  },
  methods: {
    //导出接口
    handleExport() {
    },

    //洗车收入统计分析
    handleRevenueCarWashingAnalysis() {
      const param = {queryDate: "today"};
      this.$realTimeMonitor.queryCarWashIncomeAnalysis(param).then(res => {
        res.resultEntity.forEach(item => {
          this.revenueCarWashingAnalysisXz.push(item.X),
              this.revenueCarWashingAnalysisY.push(Number(item.dataY));
        });
        this.revenueCarWashingAnalysisOption = {
          chart: {
            type: "spline",
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
          colors: ["#0D64F4"],
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
              color: "#333333"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}</b>"
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
      const param = {queryDate: "today"};
      this.$realTimeMonitor.queryCarWashTypeCountAnalysis(param).then(res => {
        res.resultEntity["精洗"].forEach(item => {
          this.carWashTypeIncomeAnalysisXz.push(item.X);
          this.carWashTypeIncomeAnalysisJINGY.push(Number(item.dataY));
        });
        res.resultEntity["普洗"].forEach(item => {
          this.carWashTypeIncomeAnalysisPUY.push(Number(item.dataY));
        });
        res.resultEntity["快洗"].forEach(item => {
          this.carWashTypeIncomeAnalysisKUAIY.push(Number(item.dataY));
        });
        this.carWashTypeIncomeAnalysisOption = {
          chart: {
            type: "spline",
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
          colors: ["#0D64F4", "#00DBEC", "#1EC193"],
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
              color: "#333333"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}</b>"
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
      const param = {queryDate: "today"};
      this.$realTimeMonitor.queryCarWashCountAnalysis(param).then(res => {
        res.resultEntity.forEach(item => {
          this.carWashTimesAnalysisXz.push(item.X);
          this.carWashTimesAnalysisY.push(Number(item.dataY));
        });
        this.carWashTimesAnalysisOption = {
          chart: {
            type: "spline",
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
          colors: ["#0D64F4"],
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
              color: "#333333"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}</b>"
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
      const param = {queryDate: "today"};
      this.$realTimeMonitor.queryCarWashTypeTimesAnalysis(param).then(res => {
        res.resultEntity["精洗"].forEach(item => {
          this.carWashTypeTimesAnalysisXz.push(item.X);
          this.carWashTypeTimesAnalysisJINGY.push(Number(item.dataY));
        });
        res.resultEntity["普洗"].forEach(item => {
          this.carWashTypeTimesAnalysisPUY.push(Number(item.dataY));
        });
        res.resultEntity["快洗"].forEach(item => {
          this.carWashTypeTimesAnalysisKUAIY.push(Number(item.dataY));
        });
        this.carWashTypeTimesAnalysisOption = {
          chart: {
            type: "spline",
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
          colors: ["#0D64F4", "#00DBEC", "#1EC193"],
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
              color: "#333333"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}</b>"
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
