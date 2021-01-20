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
        <!-- 停车收入构成统计分析 -->
        <div id="earnComponent" class="echartStyle">
          <Xchart id="earnComponent" :option="earnComponentChart"></Xchart>
        </div>
      </div>
      <div class="backgroundLine"></div>
      <div class="center-content">
        <!--缴费类型统计分析-->
        <div id="paymentStyle" class="echartStyle">
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

export default {
  data() {
    return {
      // 顶部查询数据暂存处
      query: {
        date: "2020-08-01",
        parkId: ""
      },
      // 停车场下拉框数据暂存处
      parkList: [],

      //停车收费统计分析
      parkIncomeAnalysisName: "停车收费统计分析",
      parkIncomeChart: {},
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
      paymentStyleAnalysisOther: [2, 1, 2, 5, 1, 2, 4, 6, 5, 1],

      //支付方式
      alipayDataList: [],
      wechatDataList: [],
      qrCodeDataList: [],
      cashDataList: [],
      memberDataList: [],
      //收入构成分析
      earnComponentDataList: [],
      earnComponentChart: {},

      //缴费类型统计分析

      //停车收入对比分析
      earnComChartX: [],
      earnComDataList: [],
      earnCompareChart: {}
      //停车场收入及欠费分析
      // parkEarnAndOweChartX: [],
      // parkEarnAndOweDataList: [],
      // parkEarnAndOweChart: {}
      //收入及欠费金额趋势分析
      // earnAndOweChartX: [],
      // earnAndOweDataList: [],
      // earnAndOweChart: {},
      // //自助充电设备收入按时段分析
      // chargeEarnChartX: [],
      // chargeEarnDataList: [],
      // chargeEarnChart: {},
      //自助洗车设备收入按时段分析
      // washEarnChartX: [],
      // washEarnDataList: [],
      // washEarnChart: {}
    };
  },
  mounted() {
    //初始化停车场下拉菜单
    this.queryParkList();
    //停车收费统计分析
    this.parkIncomeAnalysis();
    //停车场收入构成统计分析
    this.revenueCompositionAnalysis();
    //缴费类型统计分析
    this.paymentStyleAnalysis();
    //停车场收入对比分析
    this.parkComparativeAnalysis();
    // this.drawEarnAndOweChart();
    // this.drawParkEarnAndOweChart();
    // this.drawChargeEarnChart();
    // this.drawWashEarnChart();
  },
  methods: {
    //导出接口
    handleExport() {},
    //停车场查询
    queryParkList() {
      const params = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = 321302"
      };
      this.$deviceManagement.queryDictData(params).then(res => {
        this.parkList = res.data.dataList;
      });
    },

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
    },
    //缴费类型统计分析
    paymentStyleAnalysis() {
      this.paymentStyleChart = {
        chart: {
          type: "line",
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
          categories: this.paymentStyleAnalysisXz
        },
        colors: ["#4572A7", "#AA4643", "#89A54E", "#80699B"],
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
          align: "left",
          verticalAlign: "left",
          x: 400,
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
            name: "支付宝支付",
            data: this.paymentStyleAnalysisZFB
          },
          { name: "微信支付", data: this.paymentStyleAnalysisWX },
          { name: "现金支付", data: this.paymentStyleAnalysisCrash },
          { name: "其他", data: this.paymentStyleAnalysisOther }
        ]
      };
      new HighCharts.chart(this.paymentStyleChart);
    },

    //停车场收入构成统计分析
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
    },

    //停车场收入对比分析
    parkComparativeAnalysis() {
      const param = {
        statisDate: this.query.date,
        parkId: this.query.parkId
      };
      this.$reportAnalysis.queryParkOpeIncomeTypeAnal(param).then(res => {
        this.alipayDataList = [
          "支付宝支付",
          Math.round(
            (Number(res.data.dataList[0].alipayPaymentMoneyAmount) /
              Number(res.data.dataList[0].incomeMoneyAmount)) *
              100
          ) / 100
        ];
        console.log(this.alipayDataList);
        this.wechatDataList = [
          "微信支付",
          Math.round(
            (Number(res.data.dataList[0].wechatPaymentMoneyAmount) /
              Number(res.data.dataList[0].incomeMoneyAmount)) *
              100
          ) / 100
        ];
        this.qrCodeDataList = [
          "扫码支付",
          Math.round(
            (Number(res.data.dataList[0].qrCodePaymentMoneyAmount) /
              Number(res.data.dataList[0].incomeMoneyAmount)) *
              100
          ) / 100
        ];
        this.cashDataList = [
          "现金支付",
          Math.round(
            (Number(res.data.dataList[0].cashPaymentMoneyAmount) /
              Number(res.data.dataList[0].incomeMoneyAmount)) *
              100
          ) / 100
        ];
        this.memberDataList = [
          "月卡充值收入",
          Math.round(
            (Number(res.data.dataList[0].memberRechargeMoneyAmount) /
              Number(res.data.dataList[0].incomeMoneyAmount)) *
              100
          ) / 100
        ];
        this.earnComponentDataList = [
          {
            type: "pie",
            name: "支付占比",
            data: [
              this.alipayDataList,
              this.wechatDataList,
              this.qrCodeDataList,
              this.cashDataList,
              this.memberDataList
            ]
          }
        ];
        this.earnComponentChart = {
          chart: {
            type: "pie",
            renderTo: "earnComponent"
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
            shared: true
          },
          colors: ["#0D64F4", "#7654E3", "#FFBC00", "#00DBEC", "#00FF00"],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: "pointer",
              innerSize: 70,
              depth: 45,
              dataLabels: {
                enabled: false,
                format: "{point.name}"
              }, //是否显示图例
              showInLegend: true
            }
          },
          legend: {
            layout: "vertival",
            align: "left",
            verticalAlign: "middle",
            x: 30,
            borderWidth: 0,
            itemStyle: {
              color: "#007AFF"
            },
            itemHoverStyle: {
              color: "black"
            }
          },
          series: this.earnComponentDataList
        };
        new HighCharts.chart(this.earnComponentChart);
      });
    }
    // //绘表停车场收入及欠费分析
    // drawParkEarnAndOweChart() {
    //   this.parkEarnAndOweChartX = [];
    //   const param = {
    //     statisDate: this.query.date,
    //     parkId: this.query.parkId
    //   };
    //   var dataListA = [];
    //   var dataListB = [];
    //   this.$reportAnalysis.queryParkOpeIncomeArrearsChart(param).then(res => {
    //     res.data.dataList.forEach(item => {
    //       this.parkEarnAndOweChartX.push(item.parkName);
    //       dataListA.push(Number(item.incomeMoneyAmount / 100));
    //       dataListB.push(Number(item.arrearageMoneyAmount / 100));
    //     });
    //     this.parkEarnAndOweDataList = [
    //       {
    //         name: "收入金额",
    //         data: dataListA
    //       },
    //       {
    //         name: "欠费金额",
    //         data: dataListB
    //       }
    //     ];
    //     this.parkEarnAndOweChart = {
    //       chart: {
    //         type: "column",
    //         renderTo: "parkEarnAndOwe"
    //       },
    //       credits: {
    //         enabled: false
    //       },
    //       title: {
    //         text: "停车场收入及欠费分析"
    //       },
    //       xAxis: {
    //         categories: this.parkEarnAndOweChartX
    //       },
    //       yAxis: {
    //         title: {
    //           text: "单位(元)"
    //         },
    //         labels: {
    //           format: "{value}元"
    //         }
    //       },
    //       colors: [
    //         "#00AEFF", //蓝
    //         "#1EC193" //绿
    //       ],
    //
    //       plotOptions: {
    //         column: {
    //           borderWidth: 0,
    //           pointWidth: 25, //柱子宽度
    //           dataLabels: {
    //             style: {
    //               fontSize: 11
    //             },
    //
    //             enabled: false
    //           }
    //         }
    //       },
    //
    //       tooltip: {
    //         shared: true
    //       },
    //       legend: {
    //         enabled: false,
    //         align: "center",
    //         verticalAlign: "top",
    //         x: 0,
    //         y: -20,
    //         itemStyle: {
    //           color: "#cccccc",
    //           cursor: "pointer",
    //           fontSize: "12px",
    //           fontWeight: "bold",
    //           fill: "#cccccc"
    //         },
    //         itemHoverStyle: {
    //           color: "#666666"
    //         },
    //         itemHiddenStyle: {
    //           color: "#333333"
    //         }
    //       },
    //       series: this.parkEarnAndOweDataList
    //     };
    //     new HighCharts.chart(this.parkEarnAndOweChart);
    //   });
    // }
    // //绘表收入及欠费金额趋势分析
    // drawEarnAndOweChart() {
    //     this.earnAndOweChartX = [];
    //     const param = {
    //         statisDate: this.query.date,
    //         parkId: this.query.parkId
    //     };
    //     var dataListA = [];
    //     var dataListB = [];
    //     this.$reportAnalysis.queryParkOpeIncomeArrearsAnal(param).then(res => {
    //         res.data.dataList.forEach(item => {
    //             this.earnAndOweChartX.push(item.statisDate);
    //             dataListA.push(Number(item.incomeMoneyAmount / 100));
    //             dataListB.push(Number(item.arrearageMoneyAmount / 100));
    //         });
    //         this.earnAndOweDataList = [
    //             {
    //                 name: "总收入金额",
    //                 data: dataListA
    //             },
    //             {
    //                 name: "欠费金额",
    //                 data: dataListB
    //             }
    //         ];
    //         this.earnAndOweChart = {
    //             chart: {
    //                 type: "line",
    //                 renderTo: "earnAndOwe"
    //             },
    //             title: {
    //                 text: "收入及欠费金额趋势分析"
    //             },
    //             credits: {
    //                 enabled: false
    //             },
    //             xAxis: {
    //                 categories: this.earnAndOweChartX
    //             },
    //             yAxis: {
    //                 title: {
    //                     text: "单位(元)"
    //                 },
    //                 labels: {
    //                     // format: "{value}元"
    //                     formatter: function() {
    //                         return this.value / 1 + "元";
    //                     }
    //                 }
    //             },
    //             tooltip: {
    //                 shared: true
    //             },
    //             legend: {
    //                 align: "center",
    //                 verticalAlign: "top",
    //                 x: 0,
    //                 y: -20
    //             },
    //             plotOptions: {
    //                 area: {
    //                     marker: {
    //                         enabled: false,
    //                         symbol: "circle",
    //                         radius: 2,
    //                         states: {
    //                             hover: {
    //                                 enabled: true
    //                             }
    //                         }
    //                     }
    //                 }
    //             },
    //             series: this.earnAndOweDataList
    //         };
    //         new HighCharts.chart(this.earnAndOweChart);
    //     });
    // },
    //绘表自助充电设备收入按时段分析
    // drawChargeEarnChart() {
    //   this.chargeEarnChartX = [];
    //   const param = {
    //     queryDate: this.query.date
    //   };
    //   var dataList = [];
    //   this.$reportAnalysis.queryChargeEarn(param).then(res => {
    //     res.resultEntity.forEach(item => {
    //       this.chargeEarnChartX.push(item.X);
    //       dataList.push(Number(item.dataY));
    //     });
    //     this.chargeEarnDataList = [
    //       {
    //         name: "收入金额",
    //         showInLegend: false,
    //         data: dataList
    //       }
    //     ];
    //     this.chargeEarnChart = {
    //       chart: {
    //         type: "column",
    //         renderTo: "chargeEarn"
    //         // options3d: {
    //         //   enabled: true,
    //         //   alpha: 15,
    //         //   beta: 15,
    //         //   depth: 50,
    //         //   viewDistance: 25
    //         // }
    //       },
    //       title: {
    //         text: "自助充电设备收入按时段分析"
    //       },
    //       credits: {
    //         enabled: false
    //       },
    //       xAxis: {
    //         categories: this.chargeEarnChartX
    //       },
    //       yAxis: {
    //         title: {
    //           text: "单位(元)"
    //         }
    //       },
    //       colors: ["#00CDE6"],
    //       plotOptions: {
    //         series: {
    //           // depth: 25,
    //           colorByPoint: true
    //         }
    //       },
    //       series: this.chargeEarnDataList
    //     };
    //     new HighCharts.chart(this.chargeEarnChart);
    //   });
    // },
    //绘表自助洗车设备收入按时段分析
    // drawWashEarnChart() {
    //   this.washEarnChartX = [];
    //   const param = {
    //     queryDate: this.query.date
    //   };
    //   var dataList = [];
    //   this.$reportAnalysis.queryWashEarn(param).then(res => {
    //     res.resultEntity.forEach(item => {
    //       this.washEarnChartX.push(item.X);
    //       dataList.push(Number(item.dataY));
    //     });
    //     this.washEarnDataList = [
    //       {
    //         name: "收入金额",
    //         showInLegend: false,
    //         data: dataList
    //       }
    //     ];
    //     this.washEarnChart = {
    //       chart: {
    //         type: "column",
    //         renderTo: "washEarn"
    //         // options3d: {
    //         //   enabled: true,
    //         //   alpha: 15,
    //         //   beta: 15,
    //         //   depth: 50,
    //         //   viewDistance: 25
    //         // }
    //       },
    //       title: {
    //         text: "自助洗车设备收入按时段分析"
    //       },
    //       credits: {
    //         enabled: false
    //       },
    //       xAxis: {
    //         categories: this.washEarnChartX
    //       },
    //       yAxis: {
    //         title: {
    //           text: "单位(元)"
    //         }
    //       },
    //       colors: ["#7654E3"],
    //       plotOptions: {
    //         series: {
    //           depth: 25,
    //           colorByPoint: true
    //         }
    //       },
    //       series: this.washEarnDataList
    //     };
    //     new HighCharts.chart(this.washEarnChart);
    //   });
    // },
    //查询停车场列表数据
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
