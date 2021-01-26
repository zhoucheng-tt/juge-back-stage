<!--
  运营指标分析
 * @Author: 邵青阳
 * @Date: 2020-10-20 10:05:17
 * @LastEditTime: 2020-11-07 16:45:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\reportAnalysis\analysisOnOperationIndexOfParking.vue
-->

<template>
  <div class="about">
    <!-- 上部分查询内容 -->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="统计日期:">
          <el-date-picker
            v-model="upQueryList.startTime"
            type="date"
            size="small"
            style="width: 160px"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
          <span>~</span>
          <el-date-picker
            v-model="upQueryList.endTime"
            type="date"
            size="small"
            style="width: 160px"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="停车场：">
          <el-select
            size="small"
            style="width: 160px"
            v-model="upQueryList.parkId"
            placeholder="请选择停车场"
          >
            <el-option value="" label="全部"></el-option>
            <el-option
              v-for="(item, index) in parkingLotList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="SelectQueryList"
            >查询</el-button
          >
          <el-button type="primary" size="small" @click="resetQuery"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-row class="demo-form-inline2">
        <e-form-item>
          <el-button type="primary" size="small">
            <a
              :href="exportFile"
              class="download"
              download=""
              style="color: #ffffff;text-decoration:none"
              >导出</a
            >
          </el-button>
        </e-form-item>
      </el-row>
    </div>
    <!-- 中间图标部分内容 -->
    <div class="center">
      <!-- 停车数量 numberOfParking-->
      <div class="echartStyle" id="numberOfParking">
        <Xchart id="numberOfParking" :option="numberOfParkingOptions"></Xchart>
      </div>
      <!-- 平均停车时长 averageParkingTime -->
      <div class="echartStyle" id="averageParkingTime">
        <Xchart
          id="averageParkingTime"
          :option="averageParkingTimeOptions"
        ></Xchart>
      </div>
      <!-- 车位利用率  parkingSpaceUtilization -->
      <div class="echartStyle" id="parkingSpaceUtilization">
        <Xchart
          id="parkingSpaceUtilization"
          :option="parkingSpaceUtilizationOptions"
        ></Xchart>
      </div>
      <!-- 车位周转率  parkingSpaceTurnoverRate-->
      <div class="echartStyle" id="parkingSpaceTurnoverRate">
        <Xchart
          id="parkingSpaceTurnoverRate"
          :option="parkingSpaceTurnoverRateOptions"
        ></Xchart>
      </div>
    </div>
    <!-- 底部表格部分 -->
    <div class="down">
      <el-table
        :data="reportList"
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
        <el-table-column prop="statisDate" label="日期" />
        <el-table-column prop="parkName" label="停车场" />
        <el-table-column prop="totalParkCount" label="车位数(个)" />
        <el-table-column prop="totalParkTimes" label="停车数量(个)" />
        <el-table-column prop="avgParkDuration" label="平均停车时长(分钟)" />
        <el-table-column prop="usageRate" label="车位利用率" />
        <el-table-column prop="turnoverRate" label="车位周转率" />
      </el-table>
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
  </div>
</template>
<script>
import Xchart from "../../components/charts/charts.vue";
import Xchart3d from "../../components/charts/charts3d.vue";
import HighCharts from "highcharts";
import HighCharts3d from "highcharts-3d";
import { BASE_API } from "@/utils/config";

export default {
  // 组件导入
  components: {
    Xchart,
    Xchart3d
  },
  data() {
    return {
      //表格数据
      reportList: [],
      //导出
      exportFile: BASE_API + "operateController/download",
      //初始化分页
      pageNum: 1,
      pageSize: 5,
      pageTotal: 5,
      // 顶部查询数据暂存处
      upQueryList: {
        parkId: "",
        // 进场时间
        startTime: "",
        endTime: ""
      },
      // 停车场下拉框数据暂存处
      parkingLotList: [],

      // 停车数量折线图
      numberOfParkingOptions: {},
      numberOfParkingData: [],
      numberOfParkingXz: [],
      numberOfParkingName: "停车数量",

      // 平均停车时长
      averageParkingTime: "",
      averageParkingTimeOptions: {},
      averageParkingTimeData: [],
      averageParkingTimeXz: [],
      averageParkingTimeName: "平均停车时长",

      // 车位利用率
      parkingSpaceUtilization: "",
      parkingSpaceUtilizationOptions: {},
      parkingSpaceUtilizationData: [],
      parkingSpaceUtilizationXz: [],
      parkingSpaceUtilizationName: "车位利用率",

      // 车位周转率
      parkingSpaceTurnoverRate: "",
      parkingSpaceTurnoverRateOptions: {},
      parkingSpaceTurnoverRateData: [],
      parkingSpaceTurnoverRateXz: [],
      parkingSpaceTurnoverRateName: "车位周转率"
    };
  },
  watch: {
    upQueryList: {
      handler(newVal) {
        const param = {
          startTime: newVal.startTime,
          endTime: newVal.endTime,
          parkId: newVal.parkId
        };
        this.exportFile =
          BASE_API +
          "operateController/download?jsonStr=" +
          encodeURIComponent(JSON.stringify(param));
      },
      deep: true
    }
  },
  mounted() {
    //  初始化查询条件传入的时间
    this.initQuery();
    //停车场下拉菜单
    this.queryParkList();
    //初始化列表
    this.queryData();
    //停车总数
    this.queryParkTimes();
    //平均停车时长
    this.avgParkDuration();
    //车位利用率
    this.usageRate();
    //  车位周转率
    this.turnoverRate();
  },
  methods: {
    //导出功能
    handleExport() {},
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    //初始化查询条件
    initQuery() {
      var targetday_milliseconds =
        new Date().getTime() - 1000 * 60 * 60 * 24 * 6;
      var targetday = new Date();
      targetday.setTime(targetday_milliseconds);
      this.upQueryList.startTime = targetday.Format("yyyy-MM-dd");
      this.upQueryList.endTime = new Date().Format("yyyy-MM-dd");
    },
    //查询停车场列表数据
    queryParkList() {
      alert("你个头");
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
        this.parkingLotList = response.resultEntity;
      });
    },
    //列表查询
    queryData() {
      const param = {
        startTime: this.upQueryList.startTime,
        endTime: this.upQueryList.endTime,
        parkId: this.upQueryList.parkId,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$reportAnalysis.queryData(param).then(res => {
        res.resultEntity.list.forEach(item => {
          item.usageRate = Number(item.usageRate).toFixed(2) + "%";
          item.turnoverRate = Number(item.turnoverRate).toFixed(2) + "%";
          item.avgParkDuration = Math.round(item.avgParkDuration);
        });
        this.reportList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      // 查询列表方法
      this.queryData();
    },
    // 查询方法
    SelectQueryList() {
      //初始化列表
      this.queryData();
      //停车总数
      this.queryParkTimes();
      //平均停车时长
      this.avgParkDuration();
      //车位利用率
      this.usageRate();
      //  车位周转率
      this.turnoverRate();
    },
    //停车数量图表
    queryParkTimes() {
      const param = {
        startTime: this.upQueryList.startTime,
        endTime: this.upQueryList.endTime,
        parkId: this.upQueryList.parkId
      };
      this.$reportAnalysis.queryParkTimes(param).then(res => {
        this.numberOfParkingXz = [];
        this.numberOfParkingData = [];
        res.resultEntity.forEach(item => {
          this.numberOfParkingXz.push(item.X);
          this.numberOfParkingData.push(Number(item.dataY));
        });
        this.numberOfParkingOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "numberOfParking"
          },
          title: {
            text: this.numberOfParkingName,
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
            categories: this.numberOfParkingXz
          },
          colors: ["#7654E3"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              //修改Y轴添加单位
              format: "{value}辆"
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
            pointFormat: "{series.name}: <b>{point.y}</b>辆"
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
              name: this.numberOfParkingName,
              data: this.numberOfParkingData
            }
          ]
        };
        new HighCharts.chart(this.numberOfParkingOptions);
      });
    },
    // 平均停车时长
    avgParkDuration() {
      const param = {
        startTime: this.upQueryList.startTime,
        endTime: this.upQueryList.endTime,
        parkId: this.upQueryList.parkId
      };
      this.$reportAnalysis.avgParkDuration(param).then(res => {
        this.averageParkingTimeXz = [];
        this.averageParkingTimeData = [];
        res.resultEntity.forEach(item => {
          this.averageParkingTimeXz.push(item.X);
          this.averageParkingTimeData.push(Number(Math.round(item.dataY)));
        });
        this.averageParkingTimeOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "averageParkingTime"
          },
          title: {
            text: this.averageParkingTimeName,
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
            categories: this.averageParkingTimeXz
          },
          colors: ["#00DBEC"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              //修改Y轴添加单位
              format: "{value}min"
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
            pointFormat: "{series.name}: <b>{point.y}</b>分钟"
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
              name: this.averageParkingTimeName,
              data: this.averageParkingTimeData
            }
          ]
        };
        new HighCharts.chart(this.averageParkingTimeOptions);
      });
    },
    // 车位利用率
    usageRate() {
      const param = {
        startTime: this.upQueryList.startTime,
        endTime: this.upQueryList.endTime,
        parkId: this.upQueryList.parkId
      };
      this.$reportAnalysis.usageRate(param).then(res => {
        this.parkingSpaceUtilizationXz = [];
        this.parkingSpaceUtilizationData = [];
        res.resultEntity.forEach(item => {
          this.parkingSpaceUtilizationXz.push(item.X);
          //%后小数点后两位
          this.parkingSpaceUtilizationData.push(
            Number((Number(item.dataY) * 100).toFixed(2))
          );
        });
        this.parkingSpaceUtilizationOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "parkingSpaceUtilization"
          },
          title: {
            text: this.parkingSpaceUtilizationName,
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
            categories: this.parkingSpaceUtilizationXz
          },
          colors: ["#1EC193"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}%"
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
            //设置每个点位的弹出窗
            pointFormat: "{series.name}: <b>{point.y}</b>%"
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
              name: this.parkingSpaceUtilizationName,
              data: this.parkingSpaceUtilizationData
            }
          ]
        };
        new HighCharts.chart(this.parkingSpaceUtilizationOptions);
      });
    },
    // 车位周转率
    turnoverRate() {
      const param = {
        startTime: this.upQueryList.startTime,
        endTime: this.upQueryList.endTime,
        parkId: this.upQueryList.parkId
      };
      this.$reportAnalysis.turnoverRate(param).then(res => {
        this.parkingSpaceTurnoverRateXz = [];
        this.parkingSpaceTurnoverRateData = [];
        res.resultEntity.forEach(item => {
          this.parkingSpaceTurnoverRateXz.push(item.X);
          this.parkingSpaceTurnoverRateData.push(
            Number((Number(item.dataY) * 100).toFixed(2))
          );
        });
        this.parkingSpaceTurnoverRateOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "parkingSpaceTurnoverRate"
          },
          title: {
            text: this.parkingSpaceTurnoverRateName,
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
            categories: this.parkingSpaceTurnoverRateXz
          },
          colors: ["#FFBC00"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}%"
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
            pointFormat: "{series.name}: <b>{point.y}</b>%"
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
              name: this.parkingSpaceTurnoverRateName,
              data: this.parkingSpaceTurnoverRateData
            }
          ]
        };
        new HighCharts.chart(this.parkingSpaceTurnoverRateOptions);
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
  background-color: #eaf0f6;
}

/* 顶部查询部分 */
.up {
  width: 98%;
  height: 10%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 40px;
  padding-left: 1%;
  padding-top: 0.5%;
}
.demo-form-inline2 {
  width: 98%;
  height: 40px;
  margin-left: 1%;
}
/* 中间部分图表内容 */
.center {
  width: 100%;
  height: 50%;
}

/* 中间每个图表部分样式 */
.echartStyle {
  width: 48.5%;
  height: 45%;
  background-color: #ffffff;
  float: left;
  margin-top: 1%;
  margin-left: 1%;
}

/* 底部表格部分 */
.down {
  width: 98%;
  height: 37%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #f8f9fa !important;
}

/deep/ .el-table .successSecond {
  background: white !important;
}
</style>
