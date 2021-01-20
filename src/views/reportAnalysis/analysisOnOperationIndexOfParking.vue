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
            v-model="upQueryList.minTime"
            type="date"
            size="small"
            style="width: 160px"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
                    <span>~</span>
                    <el-date-picker
                      v-model="upQueryList.maxTime"
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
      <!-- 平均充电时间 averageChargingTime-->
      <!--      <div class="echartStyle" id="averageChargingTime">-->
      <!--        <Xchart-->
      <!--          id="averageChargingTime"-->
      <!--          :option="averageChargingTimeOptions"-->
      <!--        ></Xchart>-->
      <!--      </div>-->
      <!-- 平均洗车时长 averageWashingTime-->
      <!--      <div class="echartStyle" id="averageWashingTime">-->
      <!--        <Xchart-->
      <!--          id="averageWashingTime"-->
      <!--          :option="averageWashingTimeOptions"-->
      <!--        ></Xchart>-->
      <!--      </div>-->
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
import {BASE_API} from "@/utils/config";

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
        minTime: new Date().Format("yyyy-MM-dd"),
        maxTime: new Date().Format("yyyy-MM-dd")
      },
      // 停车场下拉框数据暂存处
      parkingLotList: [],
      // 动态绑定的停车折线图的id和option
      lineId: "",
      lineOptions: {},
      // 动态绑定标题
      lineTitle: "",
      // 图表类型
      lineChartsType: "",
      // 暂存数据数组
      lineChartsList: [],
      // x轴坐标的信息
      lineChartsX: [],
      // serise中的那么数据
      lineChartsName: "",

      // 停车数量折线图
      // numberOfParking: "",
      numberOfParkingOptions: {},
      // 图表数据
      numberOfParkingData: [],
      numberOfParkingXz: [],
      numberOfParkingName: "停车数量",

      // 平均停车时长
      averageParkingTime: "",
      averageParkingTimeOptions: {},
      // 图表数据
      averageParkingTimeData: [],
      averageParkingTimeXz: [],
      averageParkingTimeName: "平均停车时长",

      // 车位利用率
      parkingSpaceUtilization: "",
      parkingSpaceUtilizationOptions: {},
      // 图表数据
      parkingSpaceUtilizationData: [],
      parkingSpaceUtilizationXz: [],
      parkingSpaceUtilizationName: "车位利用率",

      // 车位周转率
      parkingSpaceTurnoverRate: "",
      parkingSpaceTurnoverRateOptions: {},
      // 图表数据
      parkingSpaceTurnoverRateData: [],
      parkingSpaceTurnoverRateXz: [],
      parkingSpaceTurnoverRateName: "车位周转率",

      // 平均充电时间
      averageChargingTime: "",
      averageChargingTimeOptions: {},
      // 图表数据
      averageChargingTimeData: [],
      averageChargingTimeXz: [],
      averageChargingTimeName: "平均充电时间",

      // 平均洗车时长
      averageWashingTime: "",
      averageWashingTimeOptions: {},
      // 图表数据
      averageWashingTimeData: [],
      averageWashingTimeXz: [],
      averageWashingTimeName: "平均洗车时长"
    };
  },
  watch: {
    upQueryList: {
      handler(newVal) {

        const param={
          startTime:newVal.minTime,
          endTime:newVal.maxTime,
          parkId:newVal.parkId
        }
        this.exportFile =
            BASE_API +
            "operateController/download?jsonStr=" +
            encodeURIComponent(JSON.stringify(param));
      },
      deep: true
    }
  },
  mounted() {
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
    //查询停车场列表数据
    queryParkList() {
      const params = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = 321302"
      };
      this.$deviceManagement.queryDictData(params).then(res => {
        this.parkingLotList = res.data.dataList;
      });
    },
    //列表查询
    queryData() {
      const param = {
        startTime: this.upQueryList.minTime,
        endTime: this.upQueryList.maxTime,
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
    //停车数量图表
    queryParkTimes() {
      const param = {
        startTime: this.upQueryList.minTime,
        endTime: this.upQueryList.maxTime,
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
            type: "area",
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
          colors: ["#03D7E9"],
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
            pointFormat: "{series.name}: <b>{point.y}</b>辆"
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
      // this.lineId = 'averageParkingTime';
      // this.lineOptions = 'averageParkingTimeOptions';
      // this.lineTitle = '平均停车时长';
      // this.lineChartsType = 'area';
      // this.lineChartsList = this.averageParkingTimeData;
      // this.lineChartsX = this.averageParkingTimeXz;
      // this.lineChartsName = this.averageParkingTimeName;
      // this.queryLine(this.lineId, this.lineOptions);\
      const param = {
        startTime: this.upQueryList.minTime,
        endTime: this.upQueryList.maxTime,
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
            type: "area",
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
          colors: ["#03D7E9"],
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
            pointFormat: "{series.name}: <b>{point.y}</b>分钟"
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
      // this.lineId = 'parkingSpaceUtilization';
      // this.lineOptions = 'parkingSpaceUtilizationOptions';
      // this.lineTitle = '车位利用率';
      // this.lineChartsType = 'area';
      // this.lineChartsList = this.parkingSpaceUtilizationData;
      // this.lineChartsX = this.parkingSpaceUtilizationXz;
      // this.lineChartsName = this.parkingSpaceUtilizationName;
      // this.queryLine(this.lineId, this.lineOptions);
      const param = {
        startTime: this.upQueryList.minTime,
        endTime: this.upQueryList.maxTime,
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
            type: "area",
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
          colors: ["#03D7E9"],
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
            //设置每个点位的弹出窗
            pointFormat: "{series.name}: <b>{point.y}</b>%"
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
      // this.lineId = 'parkingSpaceTurnoverRate';
      // this.lineOptions = 'parkingSpaceTurnoverRateOptions';
      // this.lineTitle = '车位周转率';
      // this.lineChartsType = 'area';
      // this.lineChartsList = this.parkingSpaceTurnoverRateData;
      // this.lineChartsX = this.parkingSpaceTurnoverRateXz;
      // this.lineChartsName = this.parkingSpaceTurnoverRateName;
      // this.queryLine(this.lineId, this.lineOptions);
      const param = {
        startTime: this.upQueryList.minTime,
        endTime: this.upQueryList.maxTime,
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
            type: "area",
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
          colors: ["#03D7E9"],
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
            pointFormat: "{series.name}: <b>{point.y}</b>%"
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
