<!--
  停车场运营指标分析
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
          <el-date-picker v-model="upQueryList.dataTimeIn" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="停车场：">
          <el-select v-model="upQueryList.TingNum" placeholder="请选择停车场">
            <el-option value="" label="全部"></el-option>
            <el-option v-for="(item, index) in parkingLotList" :label="item.name" :value="item.code"
                       :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="SelectQueryList">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 中间图标部分内容 -->
    <div class="center">
      <!-- 停车数量 numberOfParking-->
      <div class="echartStyle" id="numberOfParking">
        <Xchart id="numberOfParking" :option="numberOfParkingOptions"></Xchart>
      </div>
      <!-- 平均停车时长 averageParkingTime -->
      <div class="echartStyle" id="averageParkingTime">
        <Xchart id="averageParkingTime" :option="averageParkingTimeOptions"></Xchart>
      </div>
      <!-- 车位利用率  parkingSpaceUtilization -->
      <div class="echartStyle" id="parkingSpaceUtilization">
        <Xchart id="parkingSpaceUtilization" :option="parkingSpaceUtilizationOptions"></Xchart>
      </div>
      <!-- 车位周转率  parkingSpaceTurnoverRate-->
      <div class="echartStyle" id="parkingSpaceTurnoverRate">
        <Xchart id="parkingSpaceTurnoverRate" :option="parkingSpaceTurnoverRateOptions"></Xchart>
      </div>
      <!-- 平均充电时间 averageChargingTime-->
      <div class="echartStyle" id="averageChargingTime">
        <Xchart id="averageChargingTime" :option="averageChargingTimeOptions"></Xchart>
      </div>
      <!-- 平均洗车时长 averageWashingTime-->
      <div class="echartStyle" id="averageWashingTime">
        <Xchart id="averageWashingTime" :option="averageWashingTimeOptions"></Xchart>
      </div>
    </div>
    <!-- 底部表格部分 -->
    <div class="down">
      <el-table :data="reportList" :row-class-name="tableRowClassName"
                :header-cell-style="{'text-align': 'center',background: '#24314A',color: '#FFF',border: 'none',padding: 'none',fontSize: '12px',fontWeight: '100'}"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;height: 90%">
        <el-table-column prop="statisDate" label="日期"/>
        <el-table-column prop="parkName" label="停车场"/>
        <el-table-column prop="parkSpaceCount" label="车位数"/>
        <el-table-column prop="parkCount" label="停车数量"/>
        <el-table-column prop="parkDuration" label="平均停车时长"/>
        <el-table-column prop="parkSpaceUsedRate" label="车位利用率"/>
        <el-table-column prop="parkSpaceTurnoverRate" label="车位周转率"/>
      </el-table>
      <div style="width:100%;height:10%;">
        <el-pagination style="position: absolute;right: 1px;" background layout="total, prev, pager, next, jumper"
                       :page-size="pageSize" @current-change="handleCurrentModify" :current-page="pageNum"
                       :total="pageTotal"/>
      </div>
    </div>
  </div>
</template>
<script>
import Xchart from "../../components/charts/charts.vue"
import Xchart3d from "../../components/charts/charts3d.vue"
import HighCharts from 'highcharts'
import HighCharts3d from 'highcharts-3d'

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
      //初始化分页
      pageNum: 1,
      pageSize: 3,
      pageTotal: 5,
      // 顶部查询数据暂存处
      upQueryList: {
        TingNum: "",
        // 进场时间
        dataTimeIn: '2020-08-01',
      },
      // 停车场下拉框数据暂存处
      parkingLotList: [],
      // 动态绑定的停车折线图的id和option
      lineId: '',
      lineOptions: {},
      // 动态绑定标题
      lineTitle: '',
      // 图表类型
      lineChartsType: '',
      // 暂存数据数组
      lineChartsList: [],
      // x轴坐标的信息
      lineChartsX: [],
      // serise中的那么数据
      lineChartsName: '',

      // 停车数量折线图
      // numberOfParking: "",
      numberOfParkingOptions: {},
      // 图表数据
      numberOfParkingData: [],
      numberOfParkingXz: [],
      numberOfParkingName: '停车数量',

      // 平均停车时长
      averageParkingTime: '',
      averageParkingTimeOptions: {},
      // 图表数据
      averageParkingTimeData: [],
      averageParkingTimeXz: [],
      averageParkingTimeName: '平均停车时长',

      // 车位利用率
      parkingSpaceUtilization: '',
      parkingSpaceUtilizationOptions: {},
      // 图表数据
      parkingSpaceUtilizationData: [],
      parkingSpaceUtilizationXz: [],
      parkingSpaceUtilizationName: '车位利用率',

      // 车位周转率
      parkingSpaceTurnoverRate: '',
      parkingSpaceTurnoverRateOptions: {},
      // 图表数据
      parkingSpaceTurnoverRateData: [],
      parkingSpaceTurnoverRateXz: [],
      parkingSpaceTurnoverRateName: '车位周转率',

      // 平均充电时间
      averageChargingTime: '',
      averageChargingTimeOptions: {},
      // 图表数据
      averageChargingTimeData: [],
      averageChargingTimeXz: [],
      averageChargingTimeName: '平均充电时间',

      // 平均洗车时长
      averageWashingTime: '',
      averageWashingTimeOptions: {},
      // 图表数据
      averageWashingTimeData: [],
      averageWashingTimeXz: [],
      averageWashingTimeName: '平均洗车时长',
    }
  },
  mounted() {
    //初始化下拉菜单
    this.queryParkList();
    //初始化列表
    this.queryReportList()
    this.queryNumberOfParking();
    this.queryaverageParkingTime();
    this.queryparkingSpaceUtilization();
    this.queryparkingSpaceTurnoverRate();
    this.queryaverageChargingTime();
    this.queryaverageWashingTime();
  },
  methods: {
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
      this.queryReportList();
    },
    // 查询方法
    SelectQueryList() {
      this.queryReportList();
      this.queryNumberOfParking();
      this.queryaverageParkingTime();
      this.queryparkingSpaceUtilization();
      this.queryparkingSpaceTurnoverRate();
      this.queryaverageChargingTime();
      this.queryaverageWashingTime();
    },
    // 停车数量折线图的绑定id和option方法
    queryNumberOfParking() {
      // //这边就是把参数等于对应的值就行了
      // // 绑定自定义的id的字段名
      // this.lineId = 'numberOfParking';
      // // 自定义绑定的options的字段名
      //   this.lineOptions = 'lineOptions';
      // // 自定义停车时长
      // this.lineTitle = '停车数量';
      // // 定义图表类型
      // this.lineChartsType = 'area';
      //
      // // 绑定定义的名字
      // this.lineChartsName = this.numberOfParkingName;
      // var that = this;
      // const param = {
      //   "statisDate": this.upQueryList.dataTimeIn,
      //   "cityCode": "321300",
      //   "districtCode": "321302",
      //   "parkId": this.upQueryList.TingNum
      // }
      // this.$reportAnalysis.queryParkOpeIdxParkDetailQtyAnal(param).then(res => {
      //   this.numberOfParkingXz = [];
      //   this.numberOfParkingData = [];
      //   res.data.dataList.forEach((item) => {
      //     this.numberOfParkingXz.push(item.periodName);
      //     this.numberOfParkingData.push(item.parkCount);
      //   })
      //   // 将数据绑定到暂存数组中
      //   that.lineChartsList = that.numberOfParkingData;
      //   that.lineChartsX = that.numberOfParkingXz;
      //   that.queryLine();
      // })
      const param = {
        "statisDate": this.upQueryList.dataTimeIn,
        "cityCode": "321300",
        "districtCode": "321302",
        "parkId": this.upQueryList.TingNum
      };
      this.$reportAnalysis.queryParkOpeIdxParkDetailQtyAnal(param).then(res => {
        this.numberOfParkingXz = [];
        this.numberOfParkingData = [];
        res.data.dataList.forEach((item) => {
          this.numberOfParkingXz.push(item.periodName);
          this.numberOfParkingData.push(Number(item.parkCount));
        });
        this.numberOfParkingOptions = {
          chart: {
            type: 'area',
            backgroundColor: 'rgba(0,0,0,0)',
            renderTo: 'numberOfParking',
          },
          title: {
            text: this.numberOfParkingName
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.numberOfParkingXz
          },
          yAxis: {
            title: {
              text: '单位（辆）'
            },
            labels: {
              formatter: function () {
                return this.value / 1000 + 'k';
              }
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
            pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>辆'
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
          series: [{
            name: this.numberOfParkingName,
            data: this.numberOfParkingData
          }]
        };
        new HighCharts.chart(this.numberOfParkingOptions);
      });
    },
    // 平均停车时长
    queryaverageParkingTime() {
      // this.lineId = 'averageParkingTime';
      // this.lineOptions = 'averageParkingTimeOptions';
      // this.lineTitle = '平均停车时长';
      // this.lineChartsType = 'area';
      // this.lineChartsList = this.averageParkingTimeData;
      // this.lineChartsX = this.averageParkingTimeXz;
      // this.lineChartsName = this.averageParkingTimeName;
      // this.queryLine(this.lineId, this.lineOptions);\
      const param = {
        "statisDate": this.upQueryList.dataTimeIn,
        "cityCode": "321300",
        "districtCode": "321302",
        "parkId": this.upQueryList.TingNum
      };
      this.$reportAnalysis.queryParkOpeIdxParkDetailQtyAnal(param).then(res => {
        this.averageParkingTimeXz = [];
        this.averageParkingTimeData = [];
        res.data.dataList.forEach((item) => {
          this.averageParkingTimeXz.push(item.periodName);
          this.averageParkingTimeData.push(Number(item.avgParkDuration));
        });
        this.averageParkingTimeOptions = {
          chart: {
            type: 'area',
            backgroundColor: 'rgba(0,0,0,0)',
            renderTo: 'averageParkingTime',
          },
          title: {
            text: this.averageParkingTimeName
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.averageParkingTimeXz
          },
          yAxis: {
            title: {
              text: '单位（分钟）'
            },
            labels: {
              formatter: function () {
                return this.value / 1000 + 'k';
              }
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
            pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>分钟'
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
          series: [{
            name: this.averageParkingTimeName,
            data: this.averageParkingTimeData
          }]
        };
        new HighCharts.chart(this.averageParkingTimeOptions);
      });
    },
    // 车位利用率
    queryparkingSpaceUtilization() {
      // this.lineId = 'parkingSpaceUtilization';
      // this.lineOptions = 'parkingSpaceUtilizationOptions';
      // this.lineTitle = '车位利用率';
      // this.lineChartsType = 'area';
      // this.lineChartsList = this.parkingSpaceUtilizationData;
      // this.lineChartsX = this.parkingSpaceUtilizationXz;
      // this.lineChartsName = this.parkingSpaceUtilizationName;
      // this.queryLine(this.lineId, this.lineOptions);
      const param = {
        "statisDate": this.upQueryList.dataTimeIn,
        "cityCode": "321300",
        "districtCode": "321302",
        "parkId": this.upQueryList.TingNum
      };
      this.$reportAnalysis.queryParkOpeIdxParkDetailQtyAnal(param).then(res => {
        this.parkingSpaceUtilizationXz = [];
        this.parkingSpaceUtilizationData = [];
        res.data.dataList.forEach((item) => {
          this.parkingSpaceUtilizationXz.push(item.periodName);
          this.parkingSpaceUtilizationData.push(Number(item.parkSpaceUsedRate));
        });
        this.parkingSpaceUtilizationOptions = {
          chart: {
            type: 'area',
            backgroundColor: 'rgba(0,0,0,0)',
            renderTo: 'parkingSpaceUtilization',
          },
          title: {
            text: this.parkingSpaceUtilizationName
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.parkingSpaceUtilizationXz
          },
          yAxis: {
            title: {
              text: '单位（%）'
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
            pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>%'
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
          series: [{
            name: this.parkingSpaceUtilizationName,
            data: this.parkingSpaceUtilizationData
          }]
        };
        new HighCharts.chart(this.parkingSpaceUtilizationOptions);
      });
    },
    // 车位周转率
    queryparkingSpaceTurnoverRate() {
      // this.lineId = 'parkingSpaceTurnoverRate';
      // this.lineOptions = 'parkingSpaceTurnoverRateOptions';
      // this.lineTitle = '车位周转率';
      // this.lineChartsType = 'area';
      // this.lineChartsList = this.parkingSpaceTurnoverRateData;
      // this.lineChartsX = this.parkingSpaceTurnoverRateXz;
      // this.lineChartsName = this.parkingSpaceTurnoverRateName;
      // this.queryLine(this.lineId, this.lineOptions);
      const param = {
        "statisDate": this.upQueryList.dataTimeIn,
        "cityCode": "321300",
        "districtCode": "321302",
        "parkId": this.upQueryList.TingNum
      };
      this.$reportAnalysis.queryParkOpeIdxParkDetailQtyAnal(param).then(res => {
        this.parkingSpaceTurnoverRateXz = [];
        this.parkingSpaceTurnoverRateData = [];
        res.data.dataList.forEach((item) => {
          this.parkingSpaceTurnoverRateXz.push(item.periodName);
          this.parkingSpaceTurnoverRateData.push(Number(item.parkSpaceTurnoverRate));
        });
        this.parkingSpaceTurnoverRateOptions = {
          chart: {
            type: 'area',
            backgroundColor: 'rgba(0,0,0,0)',
            renderTo: 'parkingSpaceTurnoverRate',
          },
          title: {
            text: this.parkingSpaceTurnoverRateName
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.parkingSpaceTurnoverRateXz
          },
          yAxis: {
            title: {
              text: '单位（%）'
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
            pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>%'
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
          series: [{
            name: this.parkingSpaceTurnoverRateName,
            data: this.parkingSpaceTurnoverRateData
          }]
        };
        new HighCharts.chart(this.parkingSpaceTurnoverRateOptions);
      });
    },
    // 平均充电时长
    queryaverageChargingTime() {
      // this.lineId = 'averageChargingTime';
      // this.lineOptions = 'averageChargingTimeOptions';
      // this.lineTitle = '平均充电时间';
      // this.lineChartsType = 'area';
      // this.lineChartsList = this.averageChargingTimeData;
      // this.lineChartsX = this.averageChargingTimeXz;
      // this.lineChartsName = this.averageChargingTimeName;
      // this.queryLine(this.lineId, this.lineOptions);
      const param = {
        queryDate: this.upQueryList.dataTimeIn,
      };
      this.$reportAnalysis.queryAvgChargeTime(param).then(res => {
        // console.log(res,"aa");
        this.averageChargingTimeXz=[];
        this.averageChargingTimeData=[]
        res.resultEntity.forEach(item => {
          this.averageChargingTimeXz.push(item.X);
          this.averageChargingTimeData.push(Number(item.dataY));
        });
        this.averageChargingTimeOptions = {
          chart: {
            type: 'area',
            backgroundColor: 'rgba(0,0,0,0)',
            renderTo: 'averageChargingTime',
          },
          title: {
            text: "平均充电时间"
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.averageChargingTimeXz
          },
          yAxis: {
            title: {
              text: '单位（分钟）'
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
            pointFormat: '{series.name} 充电 <b>{point.y:,.0f}</b>分钟'
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
          series: [{
            name: this.averageChargingTimeName,
            data: this.averageChargingTimeData
          }]
        };
        new HighCharts.chart(this.averageChargingTimeOptions);
      })
    },
    // 平均洗车时长
    queryaverageWashingTime() {
      // this.lineId = 'averageWashingTime';
      // this.lineOptions = 'averageWashingTimeOptions';
      // this.lineTitle = '平均洗车时长';
      // this.lineChartsType = 'area';
      // this.lineChartsList = this.averageWashingTimeData;
      // this.lineChartsX = this.averageWashingTimeXz;
      // this.lineChartsName = this.averageWashingTimeName;
      // this.queryLine(this.lineId, this.lineOptions);
      const param = {
        queryDate: this.upQueryList.dataTimeIn
      };
      this.$reportAnalysis.queryAvgWashTime(param).then(res => {
        // console.log(res,"aa");
        this.averageWashingTimeXz=[];
        this.averageWashingTimeData=[]
        res.resultEntity.forEach(item => {
          this.averageWashingTimeXz.push(item.X);
          this.averageWashingTimeData.push(Number(item.dataY));
        });
        this.averageWashingTimeOptions = {
          chart: {
            type: 'area',
            backgroundColor: 'rgba(0,0,0,0)',
            renderTo: 'averageWashingTime',
          },
          title: {
            text: "平均洗车时长"
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.averageWashingTimeXz
          },
          yAxis: {
            title: {
              text: '单位（分钟）'
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
            pointFormat: '{series.name} 洗车 <b>{point.y:,.0f}</b>分钟'
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
          series: [{
            name: this.averageWashingTimeName,
            data: this.averageWashingTimeData
          }]
        };
        new HighCharts.chart(this.averageWashingTimeOptions);
      })
    },
    // 折线图的方法
    queryLine() {
      var that = this;

      that.lineOptions = {
        chart: {
          type: that.lineChartsType,
          backgroundColor: 'rgba(0,0,0,0)',
          renderTo: that.lineId,
        },
        title: {
          text: that.lineTitle
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: that.lineChartsX
        },
        yAxis: {
          title: {
            text: '单位（辆）'
          },
          labels: {
            formatter: function () {
              return this.value / 1000 + 'k';
            }
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
          pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>辆'
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
        series: [{
          name: this.lineChartsName,
          data: that.lineChartsList
        }]
      }
      // 绘制

      new HighCharts.Chart(that.lineOptions);
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
    queryReportList() {
      const param = {
        "statisDate": this.upQueryList.dataTimeIn,
        "cityCode": "321300",
        "districtCode": "321302",
        "parkId": this.upQueryList.TingNum,
        "pageNum": this.pageNum,
        "pageSize": this.pageSize
      };
      this.$reportAnalysis.queryParkOpeIdxParkDetailAnal(param).then(res => {
        this.reportList = res.data.dataList;
        this.pageTotal = res.data.totalRecord;
      });
    }
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
  width: 100%;
  height: 65%;
  float: left;
}

/* 中间每个图表部分样式 */
.echartStyle {
  width: 48.5%;
  height: 30%;
  background-color: bisque;
  float: left;
  margin-top: 1%;
  margin-left: 1%;
}

/* 底部表格部分 */
.down {
  width: 100%;
  height: 30%;
  background-color: #ffffff;
  float: left;
}

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #7de6f8 !important;
}

/deep/ .el-table .successSecond {
  background: #8ed3e7 !important;
}
</style>
