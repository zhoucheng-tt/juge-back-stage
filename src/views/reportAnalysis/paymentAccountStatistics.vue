<!--
  支付台账统计
 * @Author: 邵青阳
 * @Date: 2020-11-07 13:46:25
 * @LastEditTime: 2020-11-12 19:43:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\reportAnalysis\paymentAccountStatistics.vue
-->
<template>
  <div class="about">
    <!-- 上部分查询内容 -->
    <div class="up">
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <el-form-item label="统计日期:">
          <el-date-picker
            v-model="query.startStatisDate"
            size="small"
            style="width: 160px"
            value-format="yyyy-MM-dd"
            placeholder="请选择起始日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="~">
          <el-date-picker
            v-model="query.endStatisDate"
            size="small"
            style="width: 160px"
            value-format="yyyy-MM-dd"
            placeholder="请选择截止日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="停车场:">
          <el-select
            size="small"
            style="width: 160px"
            v-model="query.parkId"
            placeholder="请选择停车场"
          >
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="(item, index) in parkList"
              :label="item.name"
              :value="item.code"
              :key="index"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车牌号:">
          <el-input
            size="small"
            style="width: 160px"
            v-model="query.carNum"
            placeholder="请输入车牌号"
          ></el-input>
        </el-form-item>
        <el-form-item label="支付方式:">
          <el-select
            size="small"
            style="width: 160px"
            v-model="query.payMethod"
            placeholder="请选择支付方式"
          >
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="(item, index) in payMethodList"
              :label="item.name"
              :value="item.name"
              :key="index"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="queryButton"
            >查询</el-button
          >
          <el-button type="primary" size="small" @click="resetQuery"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- 中间图标部分内容 -->
    <div class="down">
      <el-table
        :data="payList"
        :row-class-name="tableRowClassName"
        :header-cell-style="{
          fontfamily: 'PingFangSC-Medium',
          background: '#FFFFFF',
          color: '#333333',
          border: 'none',
          padding: 'none',
          fontSize: '14px',
          letterSpacing: '0.56px',
          'text-align': 'center'
        }"
        :cell-style="{
          fontfamily: 'PingFangSC-Regular',
          letterSpacing: '0.56px',
          fontSize: '14px',
          color: '#333333',
          'text-align': 'center'
        }"
        style="width: 98%;margin-left: 1%"
      >
        <el-table-column
          prop="statisticDate"
          :show-overflow-tooltip="true"
          label="支付时间"
        />
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        />
        <el-table-column
          prop="passagewayName"
          :show-overflow-tooltip="true"
          label="通过出口名称"
        />
        <el-table-column
          prop="passagewayGateName"
          :show-overflow-tooltip="true"
          label="通过道闸机名称"
        />
        <el-table-column
          prop="income"
          :show-overflow-tooltip="true"
          label="收费金额(元)"
        />
        <el-table-column
          prop="carNum"
          :show-overflow-tooltip="true"
          label="车牌号"
        />
        <el-table-column
          prop="payMethod"
          :show-overflow-tooltip="true"
          label="支付方式"
        />
        <el-table-column
          prop="oweMoney"
          :show-overflow-tooltip="true"
          label="欠费金额(元)"
        />
      </el-table>
      <!--分页条-->
      <div style="float: right">
        <el-pagination
          layout="total, prev, pager, next, jumper"
          :page-size="pageSize"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal"
        />
      </div>
    </div>
    <!-- 底部表格部分 -->
    <div class="center">
      <div class="echartStyle" id="payAna">
        <Xchart id="payAna" :option="payAnaChart" />
      </div>
      <!-- 平均洗车时长 averageWashingTime-->
      <el-scrollbar class="echartStyle" id="payMethod">
        <Xchart id="payMethod" :option="payMethodChart"></Xchart>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import Xchart from "../../components/charts/charts.vue";
import HighCharts from "highcharts";
import Xchart3d from "@/components/charts/charts3d";

export default {
  // 组件导入
  components: {
    Xchart
  },
  data() {
    return {
      //查询内容暂存
      query: {
        parkId: "",
        payMethod: ""
      },
      // 停车场下拉框数据暂存处
      parkList: [],
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
      pageSize: 6,
      pageTotal: 12,
      // 柱状图serise中的数据
      payAnaX: [],
      dataListC: [],
      payAnaChart: {},
      //饼图数据
      dataListP: [],
      payMethodChart: {}
    };
  },
  mounted() {
    //初始化列表
    this.queryPayList();
    this.queryParkList();
    this.drawPayAnaChart();
    this.drawPayMethodChart();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.query = {};
    },
    //查询
    queryButton() {
      this.queryPayList();
      this.drawPayAnaChart();
      this.drawPayMethodChart();
    },
    //斑马纹样式
    tableRowClassName({ rowIndex }) {
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
        endDate: this.query.endStatisDate,
        startDate: this.query.startStatisDate,
        parkId: this.query.parkId,
        carNum: this.query.carNum,
        payMethod: this.query.payMethod,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$reportAnalysis.queryAccountStatisList(param).then(res => {
        this.payList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      });
    },
    drawPayMethodChart() {
      const param = {
        startStatisDate: this.query.startStatisDate,
        endStatisDate: this.query.endStatisDate
      };
      this.$reportAnalysis.paymentAnalysis(param).then(res => {
        const param = {
          type: "pie",
          name: "收入分析",
          data: [
            ["支付宝", Number(res.data.dataList[0].alipayPaymentMoneyAmount)],
            ["微信", Number(res.data.dataList[0].wechatPaymentMoneyAmount)],
            ["现金", Number(res.data.dataList[0].cashPaymentMoneyAmount)],
            ["扫码", Number(res.data.dataList[0].qrCodePaymentMoneyAmount)]
          ]
        };
        console.log("dayinshuju", this.dataListP);
        this.dataListP.push(param);
        this.payMethodChart = {
          chart: {
            type: "pie",
            renderTo: "payMethod",
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
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
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
          series: this.dataListP
        };
        new HighCharts.chart(this.payMethodChart);
      });
    },
    drawPayAnaChart() {
      const param = {
        startStatisDate: this.query.startStatisDate,
        endStatisDate: this.query.endStatisDate
      };

      this.$reportAnalysis.trendAnalysis(param).then(res => {
        this.payAnaX = [];
        this.dataListC = [];
        var dataListA = [];
        var dataListB = [];
        var dataListC = [];
        res.data.dataList.forEach(item => {
          this.payAnaX.push(item.date);
          dataListA.push(Number(item.arrearageMoneyAmount));
          dataListB.push(Number(item.memberRechargeMoneyAmount));
          dataListC.push(Number(item.paymentMoneyAmount));
        });
        const paramA = {
          name: "近七天",
          data: dataListA
        };
        this.dataListC.push(paramA);
        const paramB = {
          name: "近一个月",
          data: dataListB
        };
        this.dataListC.push(paramB);
        const paramC = {
          name: "近一年",
          data: dataListC
        };
        this.dataListC.push(paramC);
        this.payAnaChart = {
          chart: {
            type: "column",
            renderTo: "payAna"
          },
          title: {
            text: "收入趋势分析"
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.payAnaX
          },
          yAxis: {
            title: {
              text: ""
            }
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            itemDistance: 5,
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
            pointFormat: "{series.name} 停车 <b>{point.y:,.0f}</b>元"
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
          series: this.dataListC
        };
        new HighCharts.chart(this.payAnaChart);
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

/*查询*/
.up {
  width: 98%;
  height: 7%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 44%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}
/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #f8f9fa !important;
}

/deep/ .el-table .successSecond {
  background: white !important;
}
/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 45px;
  padding-left: 1%;
  padding-top: 0.5%;
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

/* 底部表格部分 */
.center {
  width: 100%;
  height: 41%;
  margin-top: 1%;
  float: left;
}
</style>
