<!--
    洗车机报警信息统计
 * @Author: 邵青阳
 * @Date: 2020-11-23 09:16:41
 * @LastEditTime: 2020-11-23 09:51:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\reportAnalysis\operationReport\alarmInformationCarWashingMachine.VUE
-->
<template>
  <div class="about">
    <!-- 上部分查询内容 -->
    <div class="up">
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <el-form-item label="统计日期:">
          <el-date-picker
            v-model="query.startTime"
            size="small"
            style="width: 160px"
            value-format="yyyy-MM-dd"
            placeholder="请选择起始日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="~">
          <el-date-picker
            v-model="query.endTime"
            size="small"
            style="width: 160px"
            value-format="yyyy-MM-dd"
            placeholder="请选择截止日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="queryButton"
            >查询</el-button
          >
          <el-button size="small" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <!-- 中间图标部分内容 -->
      <div class="center">
        <!--    表格-->
        <el-table
          :data="alarmInfoList"
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
            prop="washerName"
            :show-overflow-tooltip="true"
            label="洗车机名称"
          />
          <el-table-column
            prop="alarmTime"
            :show-overflow-tooltip="true"
            label="报警时间"
          />
          <el-table-column
            prop="alarmType"
            :show-overflow-tooltip="true"
            label="报警类型"
          />

          <el-table-column
            prop="inDeviceName"
            :show-overflow-tooltip="true"
            label="报警时长"
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
      <!-- 图表部分 -->
      <div class="down">
        <!--  报警次数统计-->
        <div class="echartStyle" id="paymentIncomeAnalysis">
          <Xchart
            id="paymentIncomeAnalysis"
            :option="paymentIncomeAnalysisPie"
          ></Xchart>
        </div>
        <!-- 洗车机近七日报警趋势分析 -->
        <div
          class="echartStyle"
          id="washCarSevenDaysAnalysis"
          style="margin-top: 8px"
        >
          <Xchart
            id="washCarSevenDaysAnalysis"
            :option="washCarSevenDaysAnalysisOption"
          ></Xchart>
        </div>
      </div>
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
        startTime: new Date().Format("yyyy-MM-dd"),
        endTime: new Date().Format("yyyy-MM-dd")
      },
      //列表数据存放
      alarmInfoList: [],
      // 停车场下拉框数据暂存处
      parkList: [],
      //初始化分页
      pageNum: 1,
      pageSize: 14,
      pageTotal: 12,

      //  报警次数统计
      paymentIncomeAnalysis: [],
      paymentIncomeAnalysisPie: {},

      //洗车机近七日报警报警趋势分析
      washCarSevenDaysAnalysisOption: {},
      // 图表数据
      washCarSevenDaysAnalysisData: [],
      washCarSevenDaysAnalysisXz: [],
      washCarSevenDaysAnalysisName: "洗车机近七日报警趋势分析"
    };
  },
  mounted() {
    //列表查询
    this.queryList();
    //报警次数统计
    this.queryPaymentBehaviorAnalysis();
    //洗车机近七日报警报警趋势分析
    this.handleWashCarSevenDaysAnalysis();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.query = {};
    },
    //查询按钮
    queryButton() {
      this.pageNum = 1;
      //列表查询
      this.queryList();
      //报警次数统计
      this.queryPaymentBehaviorAnalysis();
    },
    //列表查询
    queryList() {
      const param = {
        pageNumber: this.pageNum,
        pageSize: this.pageSize,
        startTime: this.query.startTime,
        endTime: this.query.endTime
      };
      this.$reportAnalysis.carWasherAlarm(param).then(res => {
        this.alarmInfoList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      // 查询列表方法
      this.queryList();
    },
    //查询停车场列表数据
    queryParkList() {
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: [
          {
            colName: "district_code",
            value: "321302"
          }
        ]
      };
      this.$homePage.queryDict(param).then(response => {
        this.parkList = response.resultEntity;
      });
    },
    //报警次数统计
    queryPaymentBehaviorAnalysis() {
      const param = {
        startTime: this.query.startTime,
        endTime: this.query.endTime
      };
      this.$reportAnalysis.alarmTypeAna(param).then(res => {
        this.paymentIncomeAnalysisPie = {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            spacingBottom: 10,
            backgroundColor: "rgba(0,0,0,0)",
            color: "red",
            renderTo: "paymentIncomeAnalysis"
            // options3d: {
            //     enabled: true,
            //     alpha: 45,
            //     beta: 0
            // }
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          tooltip: {
            shared: true
          },

          colors: [
            "#7cb5ec",
            "#434348",
            "#90ed7d",
            "#f7a35c",
            "#8085e9",
            "#f15c80",
            "#e4d354",
            "#8085e8",
            "#8d4653",
            "#91e8e1"
          ],

          plotOptions: {
            pie: {
              allowPointSelect: true,
              //放到上面是小手
              cursor: "pointer",
              //控制距离中心的值
              innerSize: 60,
              depth: 45,
              dataLabels: {
                //显示映出来的数据
                enabled: false
                // format: "{point.name}"
              },
              //是否显示图例
              showInLegend: true
            }
          },
          legend: {
            layout: "vertival",
            align: "left",
            verticalAlign: "top",
            borderWidth: 0,
            itemStyle: {
              // color: "blue"
            },
            itemHoverStyle: {
              color: "blue"
            }
          },
          series: [
            {
              name: "报警次数统计",
              colorByPoint: true,
              data: res.resultEntity
            }
          ]
        };
        new HighCharts.chart(this.paymentIncomeAnalysisPie);
      });
    },
    //洗车机近七日报警报警趋势分析
    handleWashCarSevenDaysAnalysis() {
      this.$reportAnalysis.alarmRecent7day(1).then(res => {
        this.washCarSevenDaysAnalysisXz = [];
        this.washCarSevenDaysAnalysisData = [];
        res.resultEntity.forEach(item => {
          this.washCarSevenDaysAnalysisXz.push(item.X);
          this.washCarSevenDaysAnalysisData.push(Number(item.dataY));
        });
        this.washCarSevenDaysAnalysisOption = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "washCarSevenDaysAnalysis"
          },
          title: {
            text: this.washCarSevenDaysAnalysisName
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.washCarSevenDaysAnalysisXz,
            tickInterval: 2
          },
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              //修改Y轴添加单位
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
            pointFormat: "报警 <b>{point.y}</b>次"
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
          colors: ["#0D64F4"],
          series: [
            {
              name: this.washCarSevenDaysAnalysisName,
              data: this.washCarSevenDaysAnalysisData
            }
          ]
        };
        new HighCharts.chart(this.washCarSevenDaysAnalysisOption);
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
.content {
  display: flex;
  width: 99%;
  height: 90%;
  /*margin-left: 1%;*/
  /*background-color: red;*/
}
/* 下班部分列表部分 */
.center {
  width: 75%;
  height: 97%;
  margin-left: 1%;
  margin-top: 1%;
  background-color: white;
}
/* 底部表格部分 */
.down {
  width: 25%;
  height: 48%;
  margin-left: 1%;
  margin-top: 0.8%;
  /*background-color: red;*/
}
/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 45px;
  padding-left: 1%;
  padding-top: 0.5%;
}
/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #f8f9fa !important;
}

/deep/ .el-table .successSecond {
  background: white !important;
}

/* 中间每个图表部分样式 */
.echartStyle {
  width: 98%;
  height: 100%;
  background-color: white;
  /*float: left;*/
  margin-top: 1%;
  margin-left: 1%;
}
</style>
