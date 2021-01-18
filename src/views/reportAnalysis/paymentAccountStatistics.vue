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
            v-model="query.checkedPark"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择(不选默认查全部)"
            size="medium "
          >
            <el-option
              v-for="(item, index) in parkList"
              :key="index"
              :label="item.name"
              :value="item.code"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="支付方式:">
          <el-select
            v-model="query.checkedPayMethods"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择(不选默认查全部)"
            size="medium "
          >
            <el-option
              v-for="(item, index) in payMethodList"
              :key="index"
              :label="item.name"
              :value="item.code"
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

        <el-form-item>
          <el-button type="primary" size="small" @click="queryButton"
            >查询
          </el-button>
          <el-button type="primary" size="small" @click="resetQuery"
            >重置
          </el-button>
        </el-form-item>
      </el-form>
      <el-row class="line2">
          <el-button type="primary" size="small">
            <a
              :href="exportFile"
              class="download"
              download=""
              style="color: #ffffff;text-decoration:none"
              >导出</a
            >
          </el-button>
      </el-row>
    </div>
    <!-- 中间图标部分内容 -->
    <div class="down">
      <el-table
        :data="payList"
        stripe
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
          prop="payTime"
          :show-overflow-tooltip="true"
          label="支付时间"
        />
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        />
        <el-table-column
          prop="paid"
          :show-overflow-tooltip="true"
          label="收费金额(元)"
        />
        <el-table-column
          prop="plateNumber"
          :show-overflow-tooltip="true"
          label="车牌号"
        />
        <el-table-column
          prop="payMethodName"
          :show-overflow-tooltip="true"
          label="支付方式"
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
      <el-row style="height: 100%;width: 100%;display: flex">
        <el-row style="width: 49.5%;">
          <el-tabs
            style="background-color: white"
            v-model="activeName"
            type="card"
            @tab-click="handleClickTabs"
          >
            <el-tab-pane label="近七天" name="first">
              <div class="echartStyle" id="payAnaSeven">
                <Xchart id="payAnaSeven" :option="payAnaChartSeven" />
              </div>
            </el-tab-pane>
            <el-tab-pane label="近30天" name="second">
              <div class="echartStyle" id="payAnaThirty">
                <Xchart id="payAnaThirty" :option="payAnaChartThirty" />
              </div>
            </el-tab-pane>
            <el-tab-pane label="近一年" name="third">
              <div class="echartStyle" id="payAna365">
                <Xchart id="payAna365" :option="payAnaChart365" />
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row style="width: 49.5%;margin-left: 1%">
          <!-- 平均洗车时长 averageWashingTime-->
          <div class="echartStyle" id="payMethod" style="height: 405px">
            <Xchart id="payMethod" :option="payMethodChart"></Xchart>
          </div>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
import Xchart from "../../components/charts/charts.vue";
import HighCharts from "highcharts";
import Xchart3d from "@/components/charts/charts3d";
import { BASE_API } from "@/utils/config";

export default {
  // 组件导入
  components: {
    Xchart
  },
  data() {
    return {
      activeName: "first",
      //导出
      exportFile: BASE_API + "PayStatisticController/download/",
      //查询内容暂存
      query: {},
      // 停车场下拉框数据暂存处
      parkList: [],
      //支付方式下拉框数据暂存处
      payMethodList: [
        {
          name: "支付宝",
          code: "ZFB"
        },
        {
          name: "微信",
          code: "WX"
        },
        {
          name: "其他",
          code: "OTHER"
        },
        {
          name: "ETC",
          code: "ETC"
        }
      ],
      //支付明细列表
      payList: [],
      //初始化分页
      pageNum: 1,
      pageSize: 5,
      pageTotal: 12,
      // 柱状图serise中的数据
      payAnaSevenX: [],
      dataListSeven: [],
      payAnaChartSeven: {},

      payAnaThirtyX: [],
      dataListThirty: [],
      payAnaChartThirty: {},
      payAna365X: [],
      dataList365: [],
      payAnaChart365: {},
      //饼图数据
      dataListP: [],
      payMethodChart: {}
    };
  },
  mounted() {
    //初始化列表
    this.queryPayList();
    this.queryParkList();
    this.drawPayAnaSevenChart();
    this.drawPayAnaThirtyChart();
    this.drawPayAna365Chart();
    this.drawPayMethodAna();
  },
  watch: {
    query: {
      handler(newVal) {
        this.exportFile =
          BASE_API +
          "PayStatisticController/download?jsonStr=" +
          encodeURIComponent(JSON.stringify(newVal));
      },
      deep: true
    }
  },
  methods: {
    //  tabs页点击事件
    handleClickTabs() {},
    //查询重置按钮
    resetQuery() {
      this.query = {};
      this.checkedPayMethods = [];
      this.checkedPark = [];
    },
    //查询
    queryButton() {
      this.queryPayList();
      this.drawPayMethodAna();
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
        endTime: this.query.endStatisDate,
        startTime: this.query.startStatisDate,
        parkIds: this.query.checkedPark,
        plateNumber: this.query.carNum,
        payMethods: this.query.checkedPayMethods,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$reportAnalysis.queryAccountStatisList(param).then(res => {
        res.resultEntity.list.forEach(item => {
          this.payMethodList.forEach(item1 => {
            if (item1.code == item.payMethod) {
              item.payMethodName = item1.name;
            }
          });
        });
        this.payList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      });
    },
    //收入构成分析
    drawPayMethodAna() {
      const param = {
        endTime: this.query.endStatisDate,
        startTime: this.query.startStatisDate,
        parkIds: this.query.checkedPark,
        plateNumber: this.query.carNum,
        payMethods: this.query.checkedPayMethods
      };
      this.$reportAnalysis.paymentAnalysis(param).then(res => {
        res.resultEntity.forEach(item => {
          this.payMethodList.forEach(item1 => {
            if (item1.code == item.name) {
              item.name = item1.name;
            }
          });
          item.y = Number(item.y);
        });
        this.payMethodChart = {
          chart: {
            type: "pie",
            renderTo: "payMethod"
            // options3d: {
            //   enabled: true,
            //   alpha: 45,
            //   beta: 0
            // }
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
              //是否显示图例
              showInLegend: true,
              dataLabels: {
                //饼图上面的黑线显示
                enabled: false,
                format: "{point.name}"
              }
            }
          },
          //饼图左侧竖直显示图例
          legend: {
            layout: "vertival",
            align: "left",
            verticalAlign: "middle",

            borderWidth: 0,
            itemStyle: {
              color: "blue",
              fontSize: "15px"
            },
            itemHoverStyle: {
              color: "#0F2C54"
            }
          },
          series: [
            {
              name: "收入占比：",
              colorByPoint: true,
              data: res.resultEntity
            }
          ]
        };
        new HighCharts.chart(this.payMethodChart);
      });
    },
    //近七天
    drawPayAnaSevenChart() {
      this.$reportAnalysis.sevenPayAna(1).then(res => {
        res.resultEntity.forEach(item => {
          this.payAnaSevenX.push(item.statisticDate);
          this.dataListSeven.push(Number(item.income));
        });
        this.payAnaChartSeven = {
          chart: {
            type: "column",
            renderTo: "payAnaSeven"
          },
          title: {
            text: "收入趋势分析"
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.payAnaSevenX
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
            column: {
              borderWidth: 0,
              pointWidth: 25, //柱子宽度
              // color: "#00AEFF",
              dataLabels: {
                style: {
                  fontSize: 11
                },

                enabled: false
              }
            },
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
              name: "近七天收入金额",
              data: this.dataListSeven
            }
          ]
        };
        new HighCharts.chart(this.payAnaChartSeven);
      });
    },
    //近一个月
    drawPayAnaThirtyChart() {
      this.$reportAnalysis.thirtyPayAna(1).then(res => {
        res.resultEntity.forEach(item => {
          this.payAnaThirtyX.push(item.statisticDate);
          this.dataListThirty.push(Number(item.income));
        });
        this.payAnaChartThirty = {
          chart: {
            type: "column",
            renderTo: "payAnaThirty"
          },
          title: {
            text: "收入趋势分析"
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.payAnaThirtyX
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
            // column: {
            //   borderWidth: 0,
            //   pointWidth: 25, //柱子宽度
            //   // color: "#00AEFF",
            //   dataLabels: {
            //     style: {
            //       fontSize: 11
            //     },
            //
            //     enabled: false
            //   }
            // },
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
              name: "近30天收入金额",
              data: this.dataListThirty
            }
          ]
        };
        new HighCharts.chart(this.payAnaChartThirty);
      });
    },
    //近一年
    drawPayAna365Chart() {
      this.$reportAnalysis.PayAna365(1).then(res => {
        res.resultEntity.forEach(item => {
          this.payAna365X.push(item.statisticDate);
          this.dataList365.push(Number(item.income));
        });
        this.payAnaChart365 = {
          chart: {
            type: "column",
            renderTo: "payAna365"
          },
          title: {
            text: "收入趋势分析"
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.payAna365X
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
            column: {},
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
              name: "近一年收入金额",
              data: this.dataList365
            }
          ]
        };
        new HighCharts.chart(this.payAnaChart365);
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
  height: 11%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 37%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
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
  width: 100%;
  height: 350px;
}

/* 底部表格部分 */
.center {
  width: 100%;
  height: 47%;
  margin-top: 0.5%;
  margin-left: 1%;
  float: left;
}

.line2 {
  width: 98%;
  height: 40px;
  margin-left: 1%;
}
</style>
