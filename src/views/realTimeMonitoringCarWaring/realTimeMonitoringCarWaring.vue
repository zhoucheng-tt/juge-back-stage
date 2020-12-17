<!--
    实时监测洗车机运营数据
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-07 17:22:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="all">
    <!-- 上半部分 -->
    <div class="up">
      <div class="upSelect">
        <!-- xuanzhong(item):传入点击后所选中的数据 -->
        <div
          class="upSelectContent"
          v-for="(item, index) in upSelectList"
          :key="item.index"
          @click="xuanzhong(index, item.code)"
          :class="item.struts == 0 ? 'upSelectContent' : 'upSelectContentHover'"
        >
          <span class="upSelectContentSpan">{{ item.name }}</span>
        </div>
      </div>
      <div class="upBorder">
        <div
          class="leftUpContentNumContent"
          v-for="(item, index) in contentNumList"
          key="index"
        >
          <img class="leftUpContentNumImg" :src="imgUrl" />
          <!-- 车位统计部分内部文字部分 -->
          <span class="leftUpContentNumSpan1"
            >{{ item.name }}: {{ item.num }}</span
          >
        </div>
      </div>
    </div>
    <!-- 图表部分 -->
    <div class="down">
      <!-- 洗车次数按时间段分析 -->
      <div class="downCharts" id="analysisCarWashingTimes">
        <Xchart
          id="analysisCarWashingTimes"
          :option="analysisCarWashingTimesOptions"
        ></Xchart>
      </div>
      <!-- 洗车次数俺月分析 analysisCarWashingMonth -->
      <div class="downCharts" id="analysisCarWashingMonth" v-if="false">
        <Xchart
          id="analysisCarWashingMonth"
          :option="analysisCarWashingMonthOptions"
        ></Xchart>
      </div>
      <!-- 收费金额按时间段分析  chargeAmountTimes-->
      <div class="downCharts" id="chargeAmountTimes">
        <Xchart
          id="chargeAmountTimes"
          :option="chargeAmountTimesOptions"
        ></Xchart>
      </div>
      <!-- 收费金额按月分析 chargeAmountMonth-->
      <div class="downCharts" id="chargeAmountMonth" v-if="false">
        <Xchart
          id="chargeAmountMonth"
          :option="chargeAmountMonthOptions"
        ></Xchart>
      </div>
    </div>
  </div>
</template>
<script>
import Xchart from "../../components/charts/charts.vue";
import Xchart3d from "../../components/charts/charts3d.vue";
import HighCharts from "highcharts";
import HighCharts3d from "highcharts-3d";
import * as realTimemonitor from "@/axios/realTimeMonitor/realTimeMonitor";

export default {
  // 组件导入
  components: {
    Xchart,
    Xchart3d
  },
  data() {
    return {
      // 图片导入
      imgUrl: require("../../assets/homePage/tupiao.png"),
      contentNumList: [
        {
          // 洗车机数量
          num: 100,
          name: "洗车机数量"
        },
        {
          // 洗车次数
          num: 100,
          name: "洗车次数"
        },
        {
          // 收费金额
          num: 5600,
          name: "收费金额"
        }
      ],
      // 头部选中框中的数据
      upSelectList: [
        {
          name: "今日",
          code: "today",
          struts: 1
        },
        {
          name: "昨日",
          code: "yesterday",
          struts: 0
        },
        {
          name: "本周",
          code: "currentWeek",
          struts: 0
        },
        {
          name: "本月",
          code: "currentMonth",
          struts: 0
        }
      ],
      // 洗车次按时间段分析
      analysisCarWashingTimes: "",
      analysisCarWashingTimesX: [],
      analysisCarWashingTimesData: [],
      analysisCarWashingTimesOptions: {},
      // 洗车次数俺月份报表分析
      analysisCarWashingMonth: "",
      analysisCarWashingMonthOptions: {},
      // 收费金额按照时间段分析
      chargeAmountTimes: "",
      chargeAmountTimesX: [],
      chargeAmountTimesData: [],
      chargeAmountTimesOptions: {},
      // 收费金额按月份分析
      chargeAmountMonth: "",
      chargeAmountMonthOptions: {}
    };
  },
  mounted() {
    this.xuanzhong(0, "today");
    // 洗车次数按时间段分析
    // this.queryanalysisCarWashingTimes();
    // 洗车次数俺月份报表分析
    // this.queryanalysisCarWashingMonth();
    // 收费金额按照时间分析
    // this.querychargeAmountTimes();
    // 收费金额按照月份分析
    // this.querychargeAmountMonth();
  },
  methods: {
    xuanzhong(index, code) {
      // console.log("打印出来的点击选中的数据", e)
      for (let i = 0; i < this.upSelectList.length; i++) {
        this.upSelectList[i].struts = 0;
      }
      // 根据方法中传过来的index的值进行判断
      this.upSelectList[index].struts = 1;
      this.queryWashData(code);
      this.queryanalysisCarWashingTimes(code);
      this.querychargeAmountTimes(code);
    },
    // 洗车按照时间段报表分析
    queryanalysisCarWashingTimes(code) {
      const param = {
        queryType: code
      };
      this.$realTimeMonitor.queryWashCount(param).then(res => {
        this.analysisCarWashingTimesX = [];
        this.analysisCarWashingTimesData = [];
        res.resultEntity.forEach(item => {
          this.analysisCarWashingTimesX.push(item.X);
          this.analysisCarWashingTimesData.push(Number(item.dataY));
        });
        this.analysisCarWashingTimesOptions = {
          chart: {
            type: "line",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "analysisCarWashingTimes"
          },
          title: {
            text: "洗车数量"
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.analysisCarWashingTimesX
          },
          yAxis: {
            title: {
              text: "单位（辆）"
            },
            labels: {
              formatter: function() {
                return this.value / 1000 + "k";
              }
            }
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
              name: "数量",
              data: this.analysisCarWashingTimesData
            }
          ]
        };
        // 绘制
        new HighCharts.Chart(this.analysisCarWashingTimesOptions);
      });
    },
    // 洗车按照月份报表分析
    // queryanalysisCarWashingMonth() {
    //   var that = this;
    //   that.analysisCarWashingMonthOptions = {
    //     chart: {
    //       type: 'line',
    //       backgroundColor: 'rgba(0,0,0,0)',
    //       renderTo: 'analysisCarWashingMonth',
    //     },
    //     title: {
    //       text: '洗车数量'
    //     },
    //     credits: {
    //       enabled: false
    //     },
    //     xAxis: {
    //       categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    //     },
    //     yAxis: {
    //       title: {
    //         text: '单位（辆）'
    //       },
    //       labels: {
    //         formatter: function () {
    //           return this.value / 1000 + 'k';
    //         }
    //       }
    //     },
    //     legend: {
    //       enabled: false,
    //       align: 'center',
    //       verticalAlign: 'top',
    //       x: 0,
    //       y: -20,
    //       itemStyle: {
    //         color: '#cccccc',
    //         cursor: 'pointer',
    //         fontSize: '12px',
    //         fontWeight: 'bold',
    //         fill: '#cccccc',
    //       },
    //       itemHoverStyle: {
    //         color: '#666666',
    //       },
    //       itemHiddenStyle: {
    //         color: '#333333'
    //       }
    //     },
    //     tooltip: {
    //       pointFormat: '洗车： <b>{point.y:,.0f}</b>辆'
    //     },
    //     plotOptions: {
    //       area: {
    //         marker: {
    //           enabled: false,
    //           symbol: 'circle',
    //           radius: 2,
    //           states: {
    //             hover: {
    //               enabled: true
    //             }
    //           }
    //         }
    //       }
    //     },
    //     series: [{
    //       // name: '数量',
    //       data: [6, 11, 32, 110, 235, 369, 640,
    //         1005, 1436, 2063, 3057, 4618]
    //     }]
    //   }
    //   // 绘制
    //   new HighCharts.Chart(that.analysisCarWashingMonthOptions);
    // },
    // 收费金额按照时间端饭分析
    //收费金额分析
    querychargeAmountTimes(code) {
      const param = {
        queryType: code
      };
      this.$realTimeMonitor.queryWashEarn(param).then(res => {
        this.chargeAmountTimesX = [];
        this.chargeAmountTimesData = [];
        res.resultEntity.forEach(item => {
          this.chargeAmountTimesX.push(item.X);
          this.chargeAmountTimesData.push(Number(item.dataY));
        });
        this.chargeAmountTimesOptions = {
          chart: {
            type: "line",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "chargeAmountTimes"
          },
          title: {
            text: "洗车收入"
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.chargeAmountTimesX
          },
          yAxis: {
            title: {
              text: "单位（元）"
            },
            labels: {
              formatter: function() {
                return this.value / 1000 + "k";
              }
            }
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
          tooltip: {
            pointFormat: "收入： <b>{point.y:,.0f}</b>元"
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
              name: "数量",
              data: this.chargeAmountTimesData
            }
          ]
        };
        // 绘制
        new HighCharts.Chart(this.chargeAmountTimesOptions);
      });
    },
    // 收费金额按照月份分析
    // querychargeAmountMonth() {
    //   var that = this;
    //   that.chargeAmountMonthOptions = {
    //     chart: {
    //       type: 'column',
    //       backgroundColor: 'rgba(0,0,0,0)',
    //       renderTo: 'chargeAmountMonth',
    //     },
    //     title: {
    //       text: '收费金额按照月份分析'
    //     },
    //     xAxis: {
    //       categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    //     },
    //     credits: {
    //       enabled: false
    //     },
    //     yAxis: {
    //       min: 0,
    //       title: {
    //         text: '单位（元）'
    //       },
    //       stackLabels: {  // 堆叠数据标签
    //         enabled: true,
    //         style: {
    //           fontWeight: 'bold',
    //           // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
    //         }
    //       }
    //     },
    //     legend: {
    //       enabled: false,
    //       align: 'right',
    //       x: -30,
    //       verticalAlign: 'top',
    //       y: 25,
    //       floating: true,
    //       // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
    //       borderColor: '#CCC',
    //       borderWidth: 1,
    //       shadow: false
    //     },
    //     tooltip: {
    //       formatter: function () {
    //         return '<b>' + this.x + '</b><br/>' +
    //             this.series.name + ': ' + this.y + '<br/>' +
    //             '总量: ' + this.point.stackTotal;
    //       }
    //     },
    //     series: [{
    //       data: [6, 11, 32, 110, 235, 369, 640,
    //         1005, 1436, 2063, 3057, 4618]
    //     }]
    //   }
    //   // 绘制
    //   new HighCharts.Chart(that.chargeAmountMonthOptions);
    // },
    //查看洗车机信息
    queryWashData(code) {
      const param = {
        queryType: code
      };
      this.$realTimeMonitor.queryWashData(param).then(res => {
        console.log(res, "aaa");
        this.contentNumList[0].num = res.resultEntity[0].washCount;
        this.contentNumList[1].num = res.resultEntity[0].orderCount;
        this.contentNumList[2].num = res.resultEntity[0].income;
      });
    }
  }
};
</script>
<style scoped>
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 上半部分 */
.up {
  width: 100%;
  height: 20%;
}

/* 按时间切换框样式 */
.upSelect {
  width: 50%;
  height: 30%;
}

/* 选择框样式 未选中样式 */
.upSelectContent {
  width: 10%;
  height: 70%;
  margin-top: 1%;
  text-align: center;
  border: 1px solid black;
}

/* 设置鼠标移动到上去显示手指形状 */
.upSelectContent:hover {
  cursor: pointer;
}

/* 设置选中状态的样式为蓝色 */
.upSelectContentHover {
  background-color: rgb(130, 204, 238);
}

/* 选中框中样式 */
.upSelectContentSpan {
  line-height: 35px;
}

/* 上部分展示统计数据样式 */
.upBorder {
  width: 100%;
  height: 70%;
  float: left;
}

/* 统计部分外部整体样式 */
.leftUpContentNumContent {
  width: 15%;
  height: 50%;
  float: left;
  margin-top: 2%;
  margin-left: 1%;
  background-color: turquoise;
}

/* 统计部分图片样式 */
.leftUpContentNumImg {
  width: 30%;
  height: 100%;
  float: left;
}

/* 统计部分文字部分样式 */
.leftUpContentNumSpan1 {
  font-size: 14px;
  color: white;
  position: relative;
  top: 10%;
}

/* 下半部分 */
.down {
  width: 100%;
  height: 80%;
  float: left;
}

/* 下部分图表样式 */
.downCharts {
  width: 48.5%;
  height: 46%;
  float: left;
  margin-top: 1%;
  margin-left: 1%;
}
</style>
