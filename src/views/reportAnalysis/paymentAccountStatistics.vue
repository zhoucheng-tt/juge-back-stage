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
                  v-model="query.date"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
              style="width: 350px;"
              value-format="yyyy-mm-dd hh:mm:ss">
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
      <el-scrollbar style="height: 90%">
        <el-table :data="payList"
                  :row-class-name="tableRowClassName"
                  :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                  :cell-style="{ 'text-align': 'center' }" style="width: 100%;height:100%"
        >
          <el-table-column prop="payDate" :show-overflow-tooltip="true" label="缴费日期"/>
          <el-table-column prop="parkId" :show-overflow-tooltip="true" label="停车场编号"/>
          <el-table-column prop="parkName" :show-overflow-tooltip="true" label="停车场名称"/>
          <el-table-column prop="orderId" :show-overflow-tooltip="true" label="订单号"/>
          <el-table-column prop="carNum" :show-overflow-tooltip="true" label="车牌号"/>
          <el-table-column prop="enterTime" :show-overflow-tooltip="true" label="进场时间"/>
          <el-table-column prop="leaveTime" :show-overflow-tooltip="true" label="出场时间"/>
          <el-table-column prop="parkingTime" :show-overflow-tooltip="true" label="停车时长"/>
          <el-table-column prop="payMoney" :show-overflow-tooltip="true" label="应收金额"/>
          <el-table-column prop="gotMoney" :show-overflow-tooltip="true" label="实收金额"/>
          <el-table-column prop="payMethod" :show-overflow-tooltip="true" label="支付方式"/>
        </el-table>
      </el-scrollbar>
      <!--分页条-->
      <el-pagination style="position: relative;left: 78%;height: 9%;margin-top: 1%" background layout="total, prev, pager, next, jumper"
                     :page-size="pageSize" @current-change="handleCurrentModify" :current-page="pageNum"
                     :total="pageTotal"/>
    </div>
    <!-- 底部表格部分 -->
    <div class="down">
      <div class="echartStyle" id="payAna">
        <Xchart id="payAna" :option="payAnaChart"></Xchart>
      </div>
      <!-- 平均洗车时长 averageWashingTime-->
      <div class="echartStyle" id="payMethod">
        <Xchart id="payMethod" :option="payMethodChart"></Xchart>
      </div>
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
    return{
      //查询内容暂存
      query:{},
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
      payMethodList:[
      {
        name:"支付宝",
        code:1
      },
      {
        name:"微信",
        code:2
      },
      {
        name:"ETC",
        code:3
      },
        {
          name:"现金",
          code: 4
        }
    ],
      //支付明细列表
      payList:[
        {
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },
        {
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },
        {
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },{
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },
        {
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },
        {
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },{
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },
        {
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },
        {
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },{
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },
        {
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        },
        {
          payDate:'2020-11-7',
          parkId:1,
          parkName:'公共停车场',
          orderId:'1',
          carNum:'苏A888888',
          enterTime:'13:00',
          leaveTime:'15:00',
          parkingTime:'2小时',
          payMoney:'8元',
          gotMoney:'8元',
          payMethod:'微信'
        }
      ],
      //初始化分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 12,
      //支付方式分析
      payMethodChart: {
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
          text: "支付方式分析"
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
        series: [
          {
            type: "pie",
            name: "支付占比",
            data: [
              ["支付宝支付", 50.0],
              ["微信支付", 30.0],
              ["ETC支付", 20.0]
            ]
          }
        ]
      },
      //缴费金额按月分析
      payAnaChart: {
        chart: {
          type: "column",
          renderTo: "payAna",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        title: {
          text: "缴费金额按月分析"
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          series: {
            depth: 25,
            colorByPoint: true
          }
        },
        series: [
          {
            data: [
              29.9,
              71.5,
              106.4,
              129.2,
              144.0,
              176.0,
              135.6,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4
            ],
            name: "Cylinders",
            showInLegend: false
          }
        ]
      }
    };
  },
  mounted() {
    this.drawChart();
  },
  methods:{
    // 查询
    queryButton() {
      console.log("打印出来点击查询后所产生的值", this.query);
    },
    //斑马纹样式
    tableRowClassName({ rowIndex}) {
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
      // this.queryParkList();
    },
    //绘表
    drawChart(){
      new HighCharts.Chart(this.payMethodChart);
      new HighCharts.chart(this.payAnaChart);
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
