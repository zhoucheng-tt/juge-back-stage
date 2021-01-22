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
        <div id="earnCompare" class="echartStyle">
          <Xchart id="earnCompare" :option="earnCompareChart"></Xchart>
        </div>
      </div>
      <!--      <div class="center-content">-->
      <!--        &lt;!&ndash;        &lt;!&ndash; 平均充电时间 averageChargingTime&ndash;&gt;&ndash;&gt;-->
      <!--        &lt;!&ndash;        <div id="chargeEarn" class="center-content-left">&ndash;&gt;-->
      <!--        &lt;!&ndash;          <Xchart id="chargeEarn" :option="chargeEarnChart"></Xchart>&ndash;&gt;-->
      <!--        &lt;!&ndash;        </div>&ndash;&gt;-->
      <!--        &lt;!&ndash;      平均洗车时长 averageWashingTime&ndash;&gt;-->
      <!--        &lt;!&ndash;        <div id="washEarn" class="center-content-right">&ndash;&gt;-->
      <!--        &lt;!&ndash;          <Xchart id="washEarn" :option="washEarnChart"></Xchart>&ndash;&gt;-->
      <!--        &lt;!&ndash;        </div>&ndash;&gt;-->
      <!--        &lt;!&ndash;        &lt;!&ndash; 收入与欠费金额趋势分析 &ndash;&gt;&ndash;&gt;-->
      <!--        &lt;!&ndash;        <div id="earnAndOwe" class="center-content-right">&ndash;&gt;-->
      <!--        &lt;!&ndash;          <Xchart id="earnAndOwe" :option="earnAndOweChart"></Xchart>&ndash;&gt;-->
      <!--        &lt;!&ndash;        </div>&ndash;&gt;-->
      <!--        &lt;!&ndash;停车场收入及欠费分析&ndash;&gt;-->
      <!--        <div id="parkEarnAndOwe" class="center-content-right">-->
      <!--          <Xchart id="parkEarnAndOwe" :option="parkEarnAndOweChart"></Xchart>-->
      <!--        </div>-->
      <!--      </div>-->
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
      query: {
        date: "2020-08-01",
        parkId: ""
      },
      //停车收费统计分析
      parkIncomeAnalysisName: "停车收费统计分析",
      parkIncomeChart: {},
      parkIncomeAnalysisXz: [
        // "00",
        // "01",
        // "02",
        // "03",
        // "04",
        // "05",
        // "06",
        // "07",
        // "08",
        // "09"
      ],
      parkIncomeAnalysisY: [1, 3, 5, 4, 5, 2, 7, 5, 3, 8],

      //停车收入构成统计分析
      earnComponentDataList: [],
      earnComponentChart: {},
      earnComponentTotal: 0,
      earnComponentETC: [],
      earnComponentWX: [],
      earnComponentZFB: [],
      earnComponentOTHER: [],

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
      paymentStyleAnalysisETC: [1, 2, 3, 5, 1, 6, 4, 1, 2, 5],
      paymentStyleAnalysisCash: [3, 1, 5, 2, 4, 1, 5, 2, 6, 3],
      paymentStyleAnalysisOther: [2, 1, 2, 5, 1, 2, 4, 6, 5, 1],

      //停车收入对比分析
      earnComChartX: [],
      earnComDataList: [],
      earnCompareChart: {}
    };
  },
  mounted() {
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
    //导出接口
    handleExport() {},

    //停车收费统计分析
    parkIncomeAnalysis() {
      const param = { querydate: "today" };
      this.$reportAnalysis.queryAmountAnalysis(param).then(res => {
        this.parkIncomeAnalysisXz = [];
        this.parkIncomeAnalysisY = [];
        res.resultEntity.forEach(item => {
          this.parkIncomeAnalysisXz.push(item.X + ":00");
          this.parkIncomeAnalysisY.push(Number(item.dataY));
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
            verticalAlign: "center",
            // x: 300,
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
      const param = { querydate: "today" };
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
          text: "停车收入构成统计分析"
        },
        credits: {
          enabled: false
        },
        tooltip: {
          //饼图显示百分比
          pointFormat: "{series.name} <b>{point.percentage:.1f}%</b>"
        },
        colors: ["#0D64F4", "#7654E3", "#FFBC00", "#00DBEC"],
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
            color: "blue",
            fontSize: "15px"
          },
          itemHoverStyle: {
            color: "#0F2C54"
          },
          //给图例添加占比保留小数点后两位
          labelFormatter: function() {
            return this.name + " " + this.percentage.toFixed(2) + "%";
          }
        },
        series: [
          {
            name: "",
            data: []
          }
        ]
      };
      this.$reportAnalysis.queryChargePercent(param).then(res => {
        console.log(res.resultEntity);
        this.earnComponentETC = [];
        this.earnComponentWX = [];
        this.earnComponentZFB = [];
        this.earnComponentOTHER = [];
        this.earnComponentETC.push(res.resultEntity[0].payType);
        this.earnComponentETC.push(Number(res.resultEntity[0].percent) * 100);
        this.earnComponentOTHER.push(res.resultEntity[1].payType);
        this.earnComponentOTHER.push(Number(res.resultEntity[1].percent) * 100);
        this.earnComponentWX.push(res.resultEntity[2].payType);
        this.earnComponentWX.push(Number(res.resultEntity[2].percent) * 100);
        this.earnComponentZFB.push(res.resultEntity[3].payType);
        this.earnComponentZFB.push(Number(res.resultEntity[3].percent) * 100);
        console.log(this.earnComponentZFB);
        this.earnComponentChart.series[0].data = [
          { name: this.earnComponentETC[0], y: this.earnComponentETC[1] },
          { name: this.earnComponentWX[0], y: this.earnComponentWX[1] },
          { name: this.earnComponentZFB[0], y: this.earnComponentZFB[1] },
          {
            name: this.earnComponentOTHER[0],
            y: this.earnComponentOTHER[1]
          }
        ];
        new HighCharts.chart(this.earnComponentChart);
      });
    },
    // 缴费类型统计分析
    paymentStyleAnalysis() {
      const param = { querydate: "today" };
      this.$reportAnalysis.queryChargeTypeByHours(param).then(res => {
        this.paymentStyleAnalysisXz = [];
        this.paymentStyleAnalysisZFB = [];
        this.paymentStyleAnalysisWX = [];
        this.paymentStyleAnalysisETC = [];
        this.paymentStyleAnalysisCash = [];
        this.paymentStyleAnalysisOther = [];
        res.resultEntity.ZFB.forEach(item => {
          this.paymentStyleAnalysisXz.push(item.X);
          this.paymentStyleAnalysisZFB.push(Number(item.dataY));
        });
        res.resultEntity.WX.forEach(item => {
          this.paymentStyleAnalysisWX.push(Number(item.dataY));
        });
        res.resultEntity.ETC.forEach(item => {
          this.paymentStyleAnalysisETC.push(Number(item.dataY));
        });
        res.resultEntity.CASH.forEach(item => {
          this.paymentStyleAnalysisCash.push(Number(item.dataY));
        });
        res.resultEntity.OTHER.forEach(item => {
          this.paymentStyleAnalysisOther.push(Number(item.dataY));
        });
        this.paymentStyleChart = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "paymentStyle"
          },
          title: {
            text: this.paymentStyleAnalysisName,
            align: "center",
            // x: 20,
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
            categories: this.paymentStyleAnalysisXz
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
            // x: 400,
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
            pointFormat: "{series.name}: <b>{point.y}</b>元"
          },
          plotOptions: {
            spline: {
              lineWidth: 4,
              states: {
                hover: {
                  lineWidth: 5
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
            { name: "现金支付", data: this.paymentStyleAnalysisCash },
            { name: "其他", data: this.paymentStyleAnalysisOther }
          ]
        };
        new HighCharts.chart(this.paymentStyleChart);
      });
    },
    //停车收入对比分析
    revenueCompositionAnalysis() {
      this.earnComChartX = [];
      var dataListA = [];
      var dataListB = [];
      const param = {
        statisDate: this.query.date,
        parkId: this.query.parkId
      };
      this.$reportAnalysis.queryParkOpeIncomeCompAnal(param).then(res => {
        res.data.dataList.forEach(item => {
          this.earnComChartX.push(item.name);
          dataListA.push(Number(item.incomeMoneyAmount / 100));
          dataListB.push(Number(item.yearOnYearRate) * 100);
          // console.log('A',dataListA);
          // console.log('b',dataListB);
        });
        this.earnComDataList = [
          {
            name: "总收入",
            type: "column",
            yAxis: 1,
            data: dataListA
          },
          {
            name: "同比增幅",
            type: "spline",
            data: dataListB
          }
        ];
        // console.log(this.earnComDataList,'aaaaaaa')
        this.earnCompareChart = {
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
              categories: this.earnComChartX,
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
              max: 100,
              opposite: true
            },
            {
              // Primary yAxis
              labels: {
                formatter: function() {
                  return this.value / 1 + "元";
                }
              },
              title: {
                text: ""
              }
            }
          ],
          colors: [
            "#FFBC00" //蓝
            // "#00FF00" //绿
            // "#FF00FF" //紫
          ],
          plotOptions: {
            column: {
              borderWidth: 0,
              pointWidth: 25, //柱子宽度
              color: "#00AEFF",
              dataLabels: {
                style: {
                  fontSize: 11
                },

                enabled: false
              }
            }
          },
          tooltip: {
            shared: true
          },
          legend: {
            align: "center",
            verticalAlign: "top",
            x: 0,
            y: -20
          },
          series: this.earnComDataList
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
  /*margin-top: 0.5%;*/
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
.center-content-left {
  width: 48.5%;
  height: 100%;
  margin-left: 1%;
}
.center-content-right {
  width: 48.5%;
  height: 100%;
  margin-left: 1%;
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
