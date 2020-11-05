<!--
 * @Author: 邵青阳
 * @Date: 2020-11-05 14:26:15
 * @LastEditTime: 2020-11-05 14:26:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\reportAnalysis\operationReport\yearReport.vue
-->
<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="all">
    <!--上半部分查询-->
    <div class="up">
      <el-row>
        <el-form :inline="true" class="demo-form-inline">
          <el-row>
            <el-col :span="6">
              <el-form-item label="统计年份:">
                <el-select v-model="query.year">
                  <el-option v-for="(item,index) in yearList" :label="item.year" :value="item.year"
                             :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="停车场：">
                <el-select v-model="query.parkId" placeholder="请选择停车场">
                  <el-option v-for="(item, index) in parkList" :label="item.name" :value="item.code"
                             :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="6">
              <el-form-item>
                <el-button type="primary" @click="queryYearReport">查询</el-button>
                <el-button type="primary" @click="exportReport">导出</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-row>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-table :data="reportList"
                :row-class-name="tableRowClassName"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;"
      >
        <el-table-column width="120" prop="year" :show-overflow-tooltip="true" label="统计年份"/>
        <el-table-column width="120" prop="parkName" :show-overflow-tooltip="true" label="停车场名称"/>
        <el-table-column width="120" prop="parkNum" :show-overflow-tooltip="true" label="车位数"/>
        <el-table-column width="120" prop="usedNum" :show-overflow-tooltip="true" label="停车数"/>
        <el-table-column width="120" prop="avgParkingTime" :show-overflow-tooltip="true" label="平均停车时长"/>
        <el-table-column width="120" prop="utilization" :show-overflow-tooltip="true" label="车位利用率"/>
        <el-table-column width="120" prop="velocity" :show-overflow-tooltip="true" label="车辆周转率"/>
        <el-table-column width="120" prop="orderNum" :show-overflow-tooltip="true" label="预约停车数量"/>
        <el-table-column width="120" prop="orderComRate" :show-overflow-tooltip="true" label="预约完成率"/>
        <el-table-column width="120" prop="totalEarn" :show-overflow-tooltip="true" label="总收入"/>
        <el-table-column width="120" prop="wechatEarn" :show-overflow-tooltip="true" label="微信缴费金额"/>
        <el-table-column width="120" prop="alipayEarn" :show-overflow-tooltip="true" label="支付宝缴费金额"/>
        <el-table-column width="120" prop="ETCEarn" :show-overflow-tooltip="true" label="ETC缴费金额"/>
        <el-table-column width="120" prop="owe" :show-overflow-tooltip="true" label="欠费金额"/>
      </el-table>
      <el-pagination
          style="position: relative;left: 78%"
          background
          layout="total, prev, pager, next, jumper"
          :page-size="pageSize"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal"
      />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 顶部查询数据暂存处
      query: {},
      //统计年份下拉菜单
      yearList:[
        {
          year: "2020"
        },
        {
          year: "2020"
        },
        {
          year: "2020"
        },
        {
          year: "2020"
        }
      ],
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
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      //列表数据
      reportList: [
        {
          year: "2020",
          parkName: "p2员工停车场",
          parkNum: 130,
          usedNum: 300,
          avgParkingTime: 40,
          utilization: "80%",
          velocity: "100%",
          orderNum: 21,
          orderComRate: "100%",
          totalEarn: 632,
          wechatEarn: 300,
          alipayEarn: 200,
          ETCEarn: 132,
          owe: 0
        },
        {
          year: "2020",
          parkName: "p2员工停车场",
          parkNum: 130,
          usedNum: 300,
          avgParkingTime: 40,
          utilization: "80%",
          velocity: "100%",
          orderNum: 21,
          orderComRate: "100%",
          totalEarn: 632,
          wechatEarn: 300,
          alipayEarn: 200,
          ETCEarn: 132,
          owe: 0
        },
        {
          year: "2020",
          parkName: "p2员工停车场",
          parkNum: 130,
          usedNum: 300,
          avgParkingTime: 40,
          utilization: "80%",
          velocity: "100%",
          orderNum: 21,
          orderComRate: "100%",
          totalEarn: 632,
          wechatEarn: 300,
          alipayEarn: 200,
          ETCEarn: 132,
          owe: 0
        },
        {
          year: "2020",
          parkName: "p2员工停车场",
          parkNum: 130,
          usedNum: 300,
          avgParkingTime: 40,
          utilization: "80%",
          velocity: "100%",
          orderNum: 21,
          orderComRate: "100%",
          totalEarn: 632,
          wechatEarn: 300,
          alipayEarn: 200,
          ETCEarn: 132,
          owe: 0
        }
      ],
    };
  },
  methods: {
    // 查询
    queryYearReport() {
      console.log("打印出来点击查询后所产生的值", this.query)
    },
    //导出
    exportReport() {
      console.log("导出报表")
    },
    // 斑马纹样式
    tableRowClassName({ rowIndex}) {
      if (rowIndex % 2 === 1) {
        return "successRow11";
      } else if (rowIndex % 2 === 0) {
        return "successSecond";
      }
      return "";
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
    }
  }
}

</script>
<style scoped>
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 上半部分查询部分 */
.up {
  width: 100%;
  height: 15%;
  float: left;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 80%;
  margin-top: 3%;
  padding-left: 2%;
}

/* 下班部分列表部分 */
.down {
  width: 100%;
  height: 85%;
  float: left;
}

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #7de6f8 !important;
}

/deep/ .el-table .successSecond {
  background: #8ed3e7 !important;
}

/* 表格表头样式 */
.el-table__header-wrapper {
  width: 100%;
  height: 0px;
}

/* 设置弹出框样式 */
/deep/ .el-dialog {
  width: 50%;
}

/* 弹出框内表单样式控制 */
.el-form-item-dialog {
  width: 32%;
}
</style>
