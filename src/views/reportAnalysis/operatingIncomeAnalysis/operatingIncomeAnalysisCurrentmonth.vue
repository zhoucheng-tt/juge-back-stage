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
          >导出</a
        >
      </el-button>
    </div>
    <div class="backgroundLine"></div>
    <!-- 中间图标部分内容 -->
    <div class="center">
      <div class="center-content">
        <!--停车收费统计分析-->
        <div id="parkIncome" class="echartStyle">
          <Xchart id="parkIncome" :option="parkIncomeChart"></Xchart>
        </div>
        <div class="backgroundShu"></div>
        <!--        停车收入构成统计分析-->
        <div id="earnComponent" class="echartStyle">
          <Xchart id="earnComponent" :option="earnComponentChart"></Xchart>
        </div>
      </div>
      <div class="backgroundLine"></div>
      <div class="center-content">
        <!--缴费类型统计分析-->
        <div class="echartStyle" id="paymentStyle">
          <Xchart id="paymentStyle" :option="paymentStyleChart"></Xchart>
        </div>
        <div class="backgroundShu"></div>
        <!--停车收入对比分析-->
        <div id="earnCompare" class="echartStyle" style="margin-left: 1%">
          <Xchart id="earnCompare" :option="earnCompareChart"></Xchart>
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
      exportFile: BASE_API + "IncomeAnalysis/download?jsonStr=",
      //停车收费统计分析
      parkIncomeAnalysisName: "停车收费统计分析",
      parkIncomeChart: {},
      parkIncomeAnalysisXz: [],
      parkIncomeAnalysisY: [],

      //停车收入构成统计分析
      earnComponentDataList: [],
      earnComponentChart: {},
      earnComponentTotal: 0,
      earnComponentETC: [],
      earnComponentWX: [],
      earnComponentZFB: [],
      earnComponentOTHER: [],
      earnComponentCASH: [],

      //缴费类型统计分析
      paymentStyleChart: {},
      paymentStyleAnalysisName: "缴费类型统计分析",
      paymentStyleAnalysisZFBList: [],
      paymentStyleAnalysisWXList: [],
      paymentStyleAnalysisETCList: [],
      paymentStyleAnalysisCASHList: [],
      paymentStyleAnalysisOTHERList: [],
      paymentStyleAnalysisXz: [],
      paymentStyleAnalysisZFB: [],
      paymentStyleAnalysisWX: [],
      paymentStyleAnalysisETC: [],
      paymentStyleAnalysisCASH: [],
      paymentStyleAnalysisOTHER: [],

      //停车收入对比分析
      earnCompareChart: {},
      earnComChartX: [],
      earnComChartIncome: [],
      earnComChartPercent: []
    };
  },
  mounted() {
    // 导出
    const param = {
      queryDate: "currentMonth"
    };
    this.exportFile =
      BASE_API +
      "IncomeAnalysis/download?jsonStr=" +
      encodeURIComponent(JSON.stringify(param));
    //停车收费统计分析
    this.parkIncomeAnalysis();
    //停车收入构成统计分析
    this.parkComparativeAnalysis();
    //缴费类型统计分析
    this.paymentStyleAnalysis();
    //停车收入对比分析
    this.revenueCompositionAnalysis();
  },
  methods: {
    //停车收费统计分析
    parkIncomeAnalysis() {
      const param = { querydate: "currentMonth" };
      this.$reportAnalysis.queryAmountAnalysis(param).then(res => {
        this.parkIncomeAnalysisXz = [];
        this.parkIncomeAnalysisY = [];
        res.resultEntity.forEach(item => {
          this.parkIncomeAnalysisXz.push(item.time);
          this.parkIncomeAnalysisY.push(Number(item.income));
        });
        this.parkIncomeChart = {
          chart: {
            type: "spline",
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
            categories: this.parkIncomeAnalysisXz,
            tickInterval: 2
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
            verticalAlign: "center",
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
              name: "停车收费金额",
              data: this.parkIncomeAnalysisY
            }
          ]
        };
        new HighCharts.chart(this.parkIncomeChart);
      });
    },
    // 停车收入构成统计分析
    parkComparativeAnalysis() {
      const param = { querydate: "currentMonth" };
      this.$reportAnalysis.queryChargePercent(param).then(res => {
        this.earnComponentETC = [];
        this.earnComponentWX = [];
        this.earnComponentZFB = [];
        this.earnComponentOTHER = [];
        this.earnComponentCASH = [];
        this.earnComponentWX.push(res.resultEntity[0].income);
        this.earnComponentWX.push(res.resultEntity[0].payMethod);
        this.earnComponentZFB.push(res.resultEntity[1].income);
        this.earnComponentZFB.push(res.resultEntity[1].payMethod);
        this.earnComponentOTHER.push(res.resultEntity[2].income);
        this.earnComponentOTHER.push(res.resultEntity[2].payMethod);
        this.earnComponentETC.push(res.resultEntity[3].income);
        this.earnComponentETC.push(res.resultEntity[3].payMethod);
        this.earnComponentCASH.push(res.resultEntity[4].income);
        this.earnComponentCASH.push(res.resultEntity[4].payMethod);
        this.earnComponentChart = {
          lang: {
            noData: "暂无数据"
          },
          chart: {
            type: "pie",
            renderTo: "earnComponent"
            //3D效果
            // options3d: {
            //   enabled: true,
            //   alpha: 45,
            //   beta: 0
            // }
          },
          title: {
            text: "停车收入构成统计分析",
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
          tooltip: {
            //饼图显示百分比
            pointFormat: "{series.name} <b>{point.percentage:.1f}%</b>"
          },
          colors: ["#0D64F4", "#7654E3", "#FFBC00", "#00DBEC", "#AA4643"],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: "pointer",
              innerSize: 100,
              depth: 45,
              //是否显示图例
              showInLegend: true,
              dataLabels: {
                //饼图上面的黑线显示
                enabled: false,
                format: "{point.name}"
              }
            },
            //给图例添加占比保留小数点后两位
            labelFormatter: function() {
              return this.name + " " + this.percentage.toFixed(2) + "%";
            }
          },
          legend: {
            layout: "vertival",
            align: "left",
            verticalAlign: "middle",
            x: 100,
            borderWidth: 0,
            itemStyle: {
              color: "black",
              fontSize: "15px"
            },
            itemHoverStyle: {
              color: "blue"
            },
            //给图例添加占比保留小数点后两位
            labelFormatter: function() {
              return this.name + " " + this.percentage.toFixed(2) + "%";
            }
          },
          series: [
            {
              name: "",
              data: [
                { name: this.earnComponentETC[1], y: this.earnComponentETC[0] },
                { name: this.earnComponentWX[1], y: this.earnComponentWX[0] },
                { name: this.earnComponentZFB[1], y: this.earnComponentZFB[0] },
                {
                  name: this.earnComponentOTHER[1],
                  y: this.earnComponentOTHER[0]
                },
                {
                  name: this.earnComponentCASH[1],
                  y: this.earnComponentCASH[0]
                }
              ]
            }
          ]
        };
        new HighCharts.chart(this.earnComponentChart);
      });
    },
    // 缴费类型统计分析
    paymentStyleAnalysis() {
      const param = { querydate: "currentMonth" };
      this.$reportAnalysis.queryChargeType(param).then(res => {
        this.paymentStyleAnalysisXz = [];
        this.paymentStyleAnalysisZFB = [];
        this.paymentStyleAnalysisWX = [];
        this.paymentStyleAnalysisETC = [];
        this.paymentStyleAnalysisCASH = [];
        this.paymentStyleAnalysisOTHER = [];
        this.paymentStyleAnalysisZFBList = [];
        this.paymentStyleAnalysisWXList = [];
        this.paymentStyleAnalysisETCList = [];
        this.paymentStyleAnalysisCASHList = [];
        this.paymentStyleAnalysisOTHERList = [];
        res.resultEntity.forEach(item => {
          if (item.payMethod == "微信") {
            this.paymentStyleAnalysisWXList.push(item);
          } else if (item.payMethod == "支付宝") {
            this.paymentStyleAnalysisZFBList.push(item);
          } else if (item.payMethod == "现金") {
            this.paymentStyleAnalysisCASHList.push(item);
          } else if (item.payMethod == "其他") {
            this.paymentStyleAnalysisOTHERList.push(item);
          } else if (item.payMethod == "ETC") {
            this.paymentStyleAnalysisETCList.push(item);
          }
        });
        this.paymentStyleAnalysisWXList.forEach(item => {
          this.paymentStyleAnalysisXz.push(item.time);
          this.paymentStyleAnalysisWX.push(Number(item.income));
        });
        this.paymentStyleAnalysisETCList.forEach(item => {
          this.paymentStyleAnalysisETC.push(Number(item.income));
        });
        this.paymentStyleAnalysisZFBList.forEach(item => {
          this.paymentStyleAnalysisZFB.push(Number(item.income));
        });
        this.paymentStyleAnalysisCASHList.forEach(item => {
          this.paymentStyleAnalysisCASH.push(Number(item.income));
        });
        this.paymentStyleAnalysisOTHERList.forEach(item => {
          this.paymentStyleAnalysisOTHER.push(Number(item.income));
        });
        this.paymentStyleChart = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "paymentStyle"
          },
          title: {
            text: this.paymentStyleAnalysisName,
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
            categories: this.paymentStyleAnalysisXz,
            tickInterval: 2
          },
          colors: ["#4572A7", "#AA4643", "#89A54E", "#80699B", "#0F2C54"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}"
            },
            min: 0,
            minorGridLineWidth: 0,
            gridLineWidth: 1,
            alternateGridColor: null
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 150,
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
            pointFormat: "{series.name}: <b>{point.y}</b>元"
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
              name: "支付宝支付",
              data: this.paymentStyleAnalysisZFB
            },
            { name: "微信支付", data: this.paymentStyleAnalysisWX },
            {
              name: "ETC",
              data: this.paymentStyleAnalysisETC
            },
            { name: "现金支付", data: this.paymentStyleAnalysisCASH },
            { name: "其他", data: this.paymentStyleAnalysisOTHER }
          ]
        };
        new HighCharts.chart(this.paymentStyleChart);
      });
    },
    //停车收入对比分析
    revenueCompositionAnalysis() {
      this.earnComChartX = [];
      const param = {
        queryDate: "currentMonth"
      };
      this.$reportAnalysis.queryIncomeContrast(param).then(res => {
        res.resultEntity.forEach(item => {
          this.earnComChartX.push(item.time);
          this.earnComChartIncome.push(item.income);
          this.earnComChartPercent.push(
            Number((item.percent * 100).toFixed(2))
          );
        });
        this.earnCompareChart = {
          chart: {
            zoomType: "xy",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "earnCompare"
          },
          title: {
            text: "收入对比分析",
            align: "left",
            x: 20,
            style: {
              fontFamily: "PingFangSC-Medium",
              fontSize: "16px",
              color: "#333333",
              letterSpacing: "0.17px"
            }
          },
          //不显示highcharts官网点击事件
          credits: {
            enabled: false
          },
          xAxis: [
            {
              categories: this.earnComChartX,
              crosshair: true
            }
          ],
          yAxis: [
            {
              title: {
                text: "同比增幅",
                style: {
                  // color: Highcharts.getOptions().colors[1]
                }
              },
              labels: {
                format: "{value}%",
                style: {
                  // color: Highcharts.getOptions().colors[1]
                }
              }
            },
            {
              // Secondary yAxis
              title: {
                text: "总收入",
                style: {}
              },
              labels: {
                format: "{value} 元",

                style: {}
              },
              //混合图表两侧显示Y轴
              opposite: true
            }
          ],
          tooltip: {
            shared: true,
            //给图例添加占比保留小数点后两位
            labelFormatter: function() {
              return this.name + " " + this.percentage.toFixed(2) + "%";
            }
          },
          plotOptions: {
            column: {
              //柱子宽度
              pointWidth: 25,
              color: "#257CFE"
            },
            spline: {
              color: "#7654E3"
            }
          },
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "top",
            x: 300,
            y: -30,
            itemStyle: {
              color: "#666666"
            },
            itemHoverStyle: {
              color: "#cccccc"
            }
            // floating: true
          },
          series: [
            {
              name: "总收入",
              type: "column",
              //控制折线图在柱状图上
              yAxis: 1,
              data: this.earnComChartIncome,
              tooltip: {
                valueSuffix: "元"
              }
            },
            {
              name: "同比增幅",
              type: "spline",
              data: this.earnComChartPercent,
              tooltip: {
                valueSuffix: "%"
              }
            }
          ]
        };
        new HighCharts.Chart(this.earnCompareChart);
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
  height: 368px;
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
