<!--
  停车场运营指标分袖
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
          <el-date-picker v-model="upQueryList.dataTimeIn" type="date" placeholder="选择日期" value-format="yyyyMMddhhmm">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="停车场：">
          <el-select v-model="upQueryList.TingNum" placeholder="请选择停车场">
            <el-option v-for="(item, index) in parkingLotList" :label="item.parkingName" :value="item.parkingName"
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
      // 顶部查询数据暂存处
      upQueryList: {
        TingNum: '',
        // 进场时间
        dataTimeIn: '',
      },
      // 停车场下拉框数据暂存处
      parkingLotList: [
        {
          parkingName: '停车场1',
          id: 1
        },
        {
          parkingName: '停车场2',
          id: 2
        }
      ],
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
      numberOfParking: "",
      numberOfParkingOptions: {},
      // 图表数据
      numberOfParkingData: [],
      numberOfParkingXz: [],
      numberOfParkingName: '停车数量',

      // 平均停车时长
      averageParkingTime: '',
      averageParkingTimeOptions: {},
      // 图表数据
      averageParkingTimeData: [6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224],
      averageParkingTimeXz: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
      averageParkingTimeName: '平均停车时长',

      // 车位利用率
      parkingSpaceUtilization: '',
      parkingSpaceUtilizationOptions: {},
      // 图表数据
      parkingSpaceUtilizationData: [6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224],
      parkingSpaceUtilizationXz: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
      parkingSpaceUtilizationName: '车位利用率',

      // 车位周转率
      parkingSpaceTurnoverRate: '',
      parkingSpaceTurnoverRateOptions: {},
      // 图表数据
      parkingSpaceTurnoverRateData: [6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224],
      parkingSpaceTurnoverRateXz: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
      parkingSpaceTurnoverRateName: '车位周转率',

      // 平均充电时间
      averageChargingTime: '',
      averageChargingTimeOptions: {},
      // 图表数据
      averageChargingTimeData: [6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224],
      averageChargingTimeXz: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
      averageChargingTimeName: '平均充电时间',

      // 平均洗车时长
      averageWashingTime: '',
      averageWashingTimeOptions: {},
      // 图表数据
      averageWashingTimeData: [6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224],
      averageWashingTimeXz: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
      averageWashingTimeName: '平均洗车时长',
    }
  },
  mounted() {
    this.queryNumberOfParking();
    this.queryaverageParkingTime();
    this.queryparkingSpaceUtilization();
    this.queryparkingSpaceTurnoverRate();
    this.queryaverageChargingTime();
    this.queryaverageWashingTime();
  },
  methods: {
    // 查询方法
    SelectQueryList() {

    },
    // 停车数量折线图的绑定id和option方法
    queryNumberOfParking() {
      //这边就是把参数等于对应的值就行了
      // 绑定自定义的id的字段名
      this.lineId = 'numberOfParking';
      // 自定义绑定的options的字段名
        this.lineOptions = 'lineOptions';
      // 自定义停车时长
      this.lineTitle = '停车数量';
      // 定义图表类型
      this.lineChartsType = 'area';

      // 绑定定义的名字
      this.lineChartsName = this.numberOfParkingName;
      var that = this;
      const param = {
        "statisDate": this.upQueryList.dataTimeIn,
        "cityCode": "321300",
        "districtCode": "321302",
        "parkId": this.upQueryList.TingNum
      }
      this.$reportAnalysis.queryParkOpeIdxParkDetailQtyAnal(param).then(res => {
        this.numberOfParkingXz = [];
        this.numberOfParkingData = [];
        res.data.dataList.forEach((item) => {
          this.numberOfParkingXz.push(item.periodName);
          this.numberOfParkingData.push(item.parkCount);
        })
        // 将数据绑定到暂存数组中
        that.lineChartsList = that.numberOfParkingData;
        that.lineChartsX = that.numberOfParkingXz;
        debugger;
        that.queryLine();
      })
    },
    // 平均停车时长
    queryaverageParkingTime() {
      this.lineId = 'averageParkingTime';
      this.lineOptions = 'averageParkingTimeOptions';
      this.lineTitle = '平均停车时长';
      this.lineChartsType = 'area';
      this.lineChartsList = this.averageParkingTimeData;
      this.lineChartsX = this.averageParkingTimeXz;
      this.lineChartsName = this.averageParkingTimeName;
      this.queryLine(this.lineId, this.lineOptions);
    },
    // 车位利用率
    queryparkingSpaceUtilization() {
      this.lineId = 'parkingSpaceUtilization';
      this.lineOptions = 'parkingSpaceUtilizationOptions';
      this.lineTitle = '车位利用率';
      this.lineChartsType = 'area';
      this.lineChartsList = this.parkingSpaceUtilizationData;
      this.lineChartsX = this.parkingSpaceUtilizationXz;
      this.lineChartsName = this.parkingSpaceUtilizationName;
      this.queryLine(this.lineId, this.lineOptions);
    },
    // 车位周转率
    queryparkingSpaceTurnoverRate() {
      this.lineId = 'parkingSpaceTurnoverRate';
      this.lineOptions = 'parkingSpaceTurnoverRateOptions';
      this.lineTitle = '车位周转率';
      this.lineChartsType = 'area';
      this.lineChartsList = this.parkingSpaceTurnoverRateData;
      this.lineChartsX = this.parkingSpaceTurnoverRateXz;
      this.lineChartsName = this.parkingSpaceTurnoverRateName;
      this.queryLine(this.lineId, this.lineOptions);
    },
    // 平均充电时长
    queryaverageChargingTime() {
      this.lineId = 'averageChargingTime';
      this.lineOptions = 'averageChargingTimeOptions';
      this.lineTitle = '平均充电时间';
      this.lineChartsType = 'area';
      this.lineChartsList = this.averageChargingTimeData;
      this.lineChartsX = this.averageChargingTimeXz;
      this.lineChartsName = this.averageChargingTimeName;
      this.queryLine(this.lineId, this.lineOptions);
    },
    // 平均洗车时长
    queryaverageWashingTime() {
      this.lineId = 'averageWashingTime';
      this.lineOptions = 'averageWashingTimeOptions';
      this.lineTitle = '平均洗车时长';
      this.lineChartsType = 'area';
      this.lineChartsList = this.averageWashingTimeData;
      this.lineChartsX = this.averageWashingTimeXz;
      this.lineChartsName = this.averageWashingTimeName;
      this.queryLine(this.lineId, this.lineOptions);
    },
    // 折线图的方法
    queryLine() {
      var that = this;
      debugger;
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
      debugger;
      new HighCharts.Chart(that.lineOptions);
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
  background-color: chartreuse;
  float: left;
}
</style>
