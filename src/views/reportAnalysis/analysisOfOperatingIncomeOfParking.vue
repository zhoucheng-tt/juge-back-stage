<!--
    停车场运营收入分析
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-12 19:38:18
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
              value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="停车场：">
          <el-select v-model="query.parkId" placeholder="请选择停车场">
            <el-option label="全部" value=""></el-option>
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
        <Xchart id="earnComponent" :option="earnComponentChart"></Xchart>
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
      query: {
        date: '2020-08-01',
        parkId: ''
      },
      // 停车场下拉框数据暂存处
      parkList: [],
      //收入对比分析表
      earnComChartX: [],
      earnComDataList: [],
      earnCompareChart: {},
      //收入及欠费金额趋势分析
      earnAndOweChartX: [],
      earnAndOweDataList: [],
      earnAndOweChart: {},
      //收入构成分析
      earnComponentDataList: [],
      earnComponentChart: {},
      //停车场收入及欠费分析
      parkEarnAndOweChartX: [],
      parkEarnAndOweDataList: [],
      parkEarnAndOweChart: {},
      //自助充电设备收入按时段分析
      chargeEarnChartX: [],
      chargeEarnDataList: [],
      chargeEarnChart: {},
      //自助洗车设备收入按时段分析
      washEarnChartX: [],
      washEarnDataList: [],
      washEarnChart: {}
    };
  },
  mounted() {
    //初始化停车场下拉菜单
    this.queryParkList();
    //绘表
    this.drawEarnCompareChart();
    this.drawEarnAndOweChart();
    this.drawEarnComponentChart();
    this.drawParkEarnAndOweChart();
    this.drawChargeEarnChart();
    this.drawWashEarnChart();
  },
  methods: {
    // 查询
    queryButton() {
      // console.log("打印出来点击查询后所产生的值", this.query);
      //重新绘表
      this.drawEarnCompareChart();
      this.drawEarnAndOweChart();
      this.drawEarnComponentChart();
      this.drawParkEarnAndOweChart();
      this.drawChargeEarnChart();
      this.drawWashEarnChart();
    },
    //绘表收入对比分析
    drawEarnCompareChart() {
      this.earnComChartX = [];
      var dataListA = [];
      var dataListB = [];
      const param = {
        statisDate: this.query.date,
        parkId: this.query.parkId
      };
      this.$reportAnalysis.queryParkOpeIncomeCompAnal(param).then(res => {
        res.data.dataList.forEach((item) => {
          this.earnComChartX.push(item.name);
          dataListA.push(Number(item.incomeMoneyAmount));
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
                format: "{value}元"
              },
              title: {
                text: ""
              }
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
          series: this.earnComDataList
        };
        new HighCharts.Chart(this.earnCompareChart);
      });
    },
    //绘表收入及欠费金额趋势分析
    drawEarnAndOweChart() {
      this.earnAndOweChartX = [];
      const param = {
        statisDate: this.query.date,
        parkId: this.query.parkId
      };
      var dataListA = [];
      var dataListB = [];
      this.$reportAnalysis.queryParkOpeIncomeArrearsAnal(param).then(res => {
        res.data.dataList.forEach((item) => {
          this.earnAndOweChartX.push(item.statisDate);
          dataListA.push(Number(item.incomeMoneyAmount));
          dataListB.push(Number(item.arrearageMoneyAmount));
        });
        this.earnAndOweDataList = [
          {
            name: "总收入金额",
            data: dataListA
          },
          {
            name: "欠费金额",
            data: dataListB
          }
        ];
        this.earnAndOweChart = {
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
            categories: this.earnAndOweChartX
          },
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}元"
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
          series: this.earnAndOweDataList
        };
        new HighCharts.chart(this.earnAndOweChart);
      });
    },
    //绘表收入构成分析
    drawEarnComponentChart() {
      const param = {
        statisDate: this.query.date,
        parkId: this.query.parkId
      };
      this.$reportAnalysis.queryParkOpeIncomeTypeAnal(param).then(res => {
        var alipayDataList = ['支付宝支付', Number(res.data.dataList[0].alipayPaymentMoneyAmount) / Number(res.data.dataList[0].incomeMoneyAmount)];
        var wechatDataList = ['微信支付', Number(res.data.dataList[0].wechatPaymentMoneyAmount) / Number(res.data.dataList[0].incomeMoneyAmount)];
        var qrCodeDataList = ['扫码支付', Number(res.data.dataList[0].qrCodePaymentMoneyAmount) / Number(res.data.dataList[0].incomeMoneyAmount)];
        var cashDataList = ['现金支付', Number(res.data.dataList[0].cashPaymentMoneyAmount) / Number(res.data.dataList[0].incomeMoneyAmount)];
        var memberDataList = ['月卡充值收入', Number(res.data.dataList[0].memberRechargeMoneyAmount) / Number(res.data.dataList[0].incomeMoneyAmount)];
        this.earnComponentDataList = [
          {
            type: "pie",
            name: "支付占比",
            data: [alipayDataList, wechatDataList, qrCodeDataList, cashDataList, memberDataList]
          }
        ];
        this.earnComponentChart = {
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
            shared: true
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
          series: this.earnComponentDataList
        };
        new HighCharts.chart(this.earnComponentChart);
      });
    },
    //绘表停车场收入及欠费分析
    drawParkEarnAndOweChart() {
      this.parkEarnAndOweChartX = [];
      const param = {
        statisDate: this.query.date,
        parkId: this.query.parkId
      };
      var dataListA = [];
      var dataListB = [];
      this.$reportAnalysis.queryParkOpeIncomeArrearsChart(param).then(res => {
        res.data.dataList.forEach((item) => {
          this.parkEarnAndOweChartX.push(item.parkName);
          dataListA.push(Number(item.incomeMoneyAmount));
          dataListB.push(Number(item.arrearageMoneyAmount));
        });
        this.parkEarnAndOweDataList = [
          {
            name: '收入金额',
            data: dataListA
          },
          {
            name: '欠费金额',
            data: dataListB
          }
        ];
        this.parkEarnAndOweChart = {
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
            categories: this.parkEarnAndOweChartX
          },
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}元"
            },
          },
          tooltip: {
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
          series: this.parkEarnAndOweDataList
        };
        new HighCharts.chart(this.parkEarnAndOweChart);
      });
    },
    //绘表自助充电设备收入按时段分析
    drawChargeEarnChart() {
      this.chargeEarnChartX = [];
      const param = {
        queryDate: this.query.date
      };
      var dataList = [];
      this.$reportAnalysis.queryChargeEarn(param).then(res => {
        res.resultEntity.forEach((item) => {
          this.chargeEarnChartX.push(item.X);
          dataList.push(Number(item.dataY));
        });
        this.chargeEarnDataList = [{
          name: "收入金额",
          showInLegend: false,
          data: dataList
        }];
        this.chargeEarnChart = {
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
          xAxis: {
            categories: this.chargeEarnChartX
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          plotOptions: {
            series: {
              depth: 25,
              colorByPoint: true
            }
          },
          series: this.chargeEarnDataList
        };
        new HighCharts.chart(this.chargeEarnChart);
      })

    },
    //绘表自助洗车设备收入按时段分析
    drawWashEarnChart() {
      this.washEarnChartX = [];
      const param = {
        queryDate: this.query.date
      };
      var dataList=[];
      this.$reportAnalysis.queryWashEarn(param).then(res=>{
        res.resultEntity.forEach(item=>{
          this.washEarnChartX.push(item.X);
          dataList.push(Number(item.dataY));
        });
        this.washEarnDataList = [{
          name: "收入金额",
          showInLegend: false,
          data: dataList
        }];
        this.washEarnChart = {
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
          xAxis: {
            categories: this.washEarnChartX
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          plotOptions: {
            series: {
              depth: 25,
              colorByPoint: true
            }
          },
          series: this.washEarnDataList
        };
        new HighCharts.chart(this.washEarnChart);
      });
    },
    //查询停车场列表数据
    queryParkList() {
      const params = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = 321302"
      };
      this.$deviceManagement.queryDictData(params).then(res => {
        this.parkList = res.data.dataList;
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
