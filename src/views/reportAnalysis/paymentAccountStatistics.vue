<!--
 * @Author: 邵青阳
 * @Date: 2020-11-07 13:46:25
 * @LastEditTime: 2020-11-07 13:46:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\reportAnalysis\paymentAccountStatistics.vue
-->
<template>
  <div class="about">
    <!-- 上部分查询内容 -->
    <div class="up">
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <el-row>
          <el-col :span="7">
            <el-form-item label="统计日期">
              <el-date-picker
                  v-model="query.startStatisDate"
                  style="width: 170px;"
                  value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="~">
              <el-date-picker
                  v-model="query.endStatisDate"
                  style="width: 170px;"
                  value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="停车场">
              <el-select v-model="query.parkId" placeholder="请选择停车场">
                <el-option v-for="(item, index) in parkList" :label="item.name" :value="item.code"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="车牌号">
              <el-input v-model="query.carNum" palceholder="请输入车牌号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="支付方式">
              <el-select v-model="query.payMethod" placeholder="请选择支付方式">
                <el-option v-for="(item, index) in payMethodList" :label="item.name" :value="item.code"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item>
              <el-button type="primary" @click="queryButton">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 中间图标部分内容 -->
    <div class="center">
      <el-table :data="payList"
                :row-class-name="tableRowClassName"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;height:90%%"
      >
        <el-table-column prop="statisDate" :show-overflow-tooltip="true" label="日期"/>
        <el-table-column prop="incomeMoneyAmount" :show-overflow-tooltip="true" label="总收入金额"/>
        <el-table-column prop="memberRechargeMoneyAmount" :show-overflow-tooltip="true" label="月卡会员充值金额"/>
        <el-table-column prop="paymentMoneyAmount" :show-overflow-tooltip="true" label="普通用户缴费金额"/>
        <el-table-column prop="cashPaymentMoneyAmount" :show-overflow-tooltip="true" label="其中：现金缴费金额"/>
        <el-table-column prop="wechatPaymentMoneyAmount" :show-overflow-tooltip="true" label="其中：微信缴费金额"/>
        <el-table-column prop="alipayPaymentMoneyAmount" :show-overflow-tooltip="true" label="其中：支付宝支付"/>
        <el-table-column prop="qrCodePaymentMoneyAmount" :show-overflow-tooltip="true" label="其中：扫码缴费金额"/>
        <el-table-column prop="arrearageMoneyAmount" :show-overflow-tooltip="true" label="欠费金额"/>
      </el-table>
      <!--分页条-->
      <div style="width:100%;height:9%;margin-top: 1%">
        <el-pagination style="position: absolute;right: 1px;"
                       background
                       layout="total, prev, pager, next, jumper"
                       :page-size="pageSize" @current-change="handleCurrentModify" :current-page="pageNum"
                       :total="pageTotal"/>
      </div>

    </div>
    <!-- 底部表格部分 -->
    <div class="down">
      <div class="echartStyle" id="payAna">
        <Xchart id="payAna" :option="chartOptions"/>
      </div>
      <!-- 平均洗车时长 averageWashingTime-->
      <el-scrollbar class="echartStyle" id="payMethod">
        <Xchart id="payMethod" :option="payMethodChart"></Xchart>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import Xchart from "../../components/charts/charts.vue"
import HighCharts from 'highcharts'
import Xchart3d from "@/components/charts/charts3d";

export default {
  // 组件导入
  components: {
    Xchart,
  },
  data() {
    return {
      //查询内容暂存
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
      //支付方式下拉框数据暂存处
      payMethodList: [
        {
          name: "支付宝",
          code: 1
        },
        {
          name: "微信",
          code: 2
        },
        {
          name: "ETC",
          code: 3
        },
        {
          name: "现金",
          code: 4
        }
      ],
      //支付明细列表
      payList: [],
      //初始化分页
      pageNum: 1,
      pageSize: 5,
      pageTotal: 12,
      // 动态绑定的停车折线图的id和option
      chartId: '',
      chartOptions: {},
      // 动态绑定标题
      chartTitle: '',
      // 图表类型
      chartType: '',
      // 暂存数据数组
      lineChartsList: [],
      // x轴坐标的信息
      chartX: [],
      // serise中的那么数据
      dataList: [],

    };
  },
  mounted() {
    //初始化列表
    this.queryPayList();
    this.drawPayAnaChart();
  },
  methods: {
    //查询
    queryButton() {
      this.queryPayList();
      this.chartX = [];
      this.dataList = [];
      this.drawPayAnaChart();
    },
    //斑马纹样式
    tableRowClassName({rowIndex}) {
      if (rowIndex % 2) {
        return "successRow11";
      } else {
        return "successSecond";
      }
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      // 查询列表方法
      this.queryPayList();
    },
    //列表查询
    queryPayList() {
      const param = {
        endStatisDate: this.query.endStatisDate,
        startStatisDate: this.query.startStatisDate,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$reportAnalysis.queryAccountStatisList(param).then(res => {
        this.payList = res.data.dataList;
        this.pageTotal = res.data.totalRecord;
      });
    },
    drawPayMethodChart() {
      this.chartId = 'payMethod';
      this.chartOptions = 'payMethodChart';
      this.chartTitle = 0;
      this.drawChart();
    },
    drawPayAnaChart() {
      this.chartId = 'payAna';
      this.chartTitle = '缴费金额按月分析';
      this.chartType = 'column';
      const param = {
        startStatisDate: this.query.startStatisDate,
        endStatisDate: this.query.endStatisDate
      };
      this.$reportAnalysis.trendAnalysis(param).then(res => {
        var dataListA = [];
        var dataListB = [];
        var dataListC = [];
        res.data.dataList.forEach((item) => {
          this.chartX.push(item.date);
          dataListA.push(item.arrearageMoneyAmount);
          dataListB.push(item.memberRechargeMoneyAmount);
          dataListC.push(item.paymentMoneyAmount);
        });
        const paramA = {
          name: '欠费金额',
          data: dataListA
        };
        this.dataList.push(paramA);
        const paramB = {
          name: '月卡充值金额',
          data: dataListB
        };
        this.dataList.push(paramB);
        const paramC = {
          name: '普通用户缴费金额',
          data: dataListC
        };
        this.dataList.push(paramC);
        this.drawChart();
      });
    },
    // 绘图方法
    drawChart() {
      var that = this;
      that.chartOptions = {
        chart: {
          type: that.chartType,
          renderTo: that.chartId,
          // height:'100%',
          // width:'100%'
        },
        title: {
          text: that.chartTitle
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: that.chartX
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        legend: {
          enabled: true,
          align: 'center',
          verticalAlign: 'left',
          x: 300,
          y: 10,
          itemStyle: {
            color: '#cccccc',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
            fill: '#cccccc',
          },
          itemHoverStyle: {
            color: '#666666',
          },
          itemHiddenStyle: {
            color: '#333333'
          }
        },
        tooltip: {
          pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>元'
        },
        plotOptions: {
          area: {
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: that.dataList
      };
      // 绘制
      new HighCharts.Chart(that.chartOptions);
    },

  }
}
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
  height: 5%;
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
  margin-top: 2%;
  width: 100%;
  height: 46%;
  float: left;
}

/* 中间每个图表部分样式 */
.echartStyle {
  width: 48.5%;
  height: 100%;
  background-color: bisque;
  float: left;
  margin-top: 1%;
  margin-left: 1%;
}

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #7de6f8 !important;
}

/deep/ .el-table .successSecond {
  background: #8ed3e7 !important;
}

/* 底部表格部分 */
.down {
  width: 100%;
  height: 41%;
  margin-top: 1%;
  float: left;
}
</style>
