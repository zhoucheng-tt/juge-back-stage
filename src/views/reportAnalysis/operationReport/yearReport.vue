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
              <el-form-item label="统计年份:">
                <el-date-picker v-model="query.date" type="year" placeholder="选择年份" value-format="yyyy"/>
              </el-form-item>
              <el-form-item label="停车场：">
                <el-select v-model="query.parkId" placeholder="请选择停车场">
                  <el-option label="全部" value=""></el-option>
                  <el-option v-for="(item, index) in parkList" :label="item.name" :value="item.code" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="queryReportList">查询</el-button>
                <el-button type="primary" @click="resetQuery">重置</el-button>
              </el-form-item>
          <el-row class="demo-form-inline-two">
            <el-form-item>
              <el-button type="primary" @click="exportReport">导出</el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </el-row>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-table :data="reportList"
                :row-class-name="tableRowClassName"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }"
                style="width: 100%;">
        <el-table-column width="120" prop="queryDate" :show-overflow-tooltip="true" label="统计年份"/>
        <el-table-column width="130" prop="parkName" :show-overflow-tooltip="true" label="停车场名称"/>
        <el-table-column width="120" prop="parkSpace" :show-overflow-tooltip="true" label="车位数"/>
        <el-table-column width="120" prop="parkCount" :show-overflow-tooltip="true" label="停车数"/>
        <el-table-column width="120" prop="avgParkDuration" :show-overflow-tooltip="true" label="平均停车时长"/>
        <el-table-column width="120" prop="parkSpaceUsedRate" :show-overflow-tooltip="true" label="车位利用率"/>
        <el-table-column width="120" prop="parkSpaceTurnoverRate" :show-overflow-tooltip="true" label="车辆周转率"/>
        <el-table-column width="120" prop="reserveParkCount" :show-overflow-tooltip="true" label="预约停车数量"/>
        <el-table-column width="120" prop="reserveCompletionRate" :show-overflow-tooltip="true" label="预约完成率"/>
        <el-table-column width="120" prop="totalIncomeMoneyAmount" :show-overflow-tooltip="true" label="总收入"/>
        <el-table-column width="120" prop="wechatPaymentMoneyAmount" :show-overflow-tooltip="true" label="微信缴费金额"/>
        <el-table-column width="120" prop="alipayPaymentMoneyAmount" :show-overflow-tooltip="true" label="支付宝缴费金额"/>
        <el-table-column width="120" prop="ETCEarn" :show-overflow-tooltip="true" label="ETC缴费金额"/>
        <el-table-column width="100" prop="arrearageMoneyAmount" :show-overflow-tooltip="true" label="欠费金额"/>
      </el-table>
      <el-pagination style="position: relative;left: 80%" background layout="total, prev, pager, next, jumper" :page-size="pageSize" @current-change="handleCurrentModify" :current-page="pageNum" :total="pageTotal"/>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 顶部查询数据暂存处
      query: {
        date:'2020',
        parkId:''
      },
      //统计年份下拉菜单
      yearList:[],
      // 停车场下拉框数据暂存处
      parkList: [],
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      //列表数据
      reportList: [],
    };
  },
  methods: {
      //查询重置按钮
      resetQuery(){
          this.query={};
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
      this.queryReportList();
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
    },
    //列表查询
    queryReportList() {
      const param = {
        queryDate: this.query.date,
        parkId: this.query.parkId,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$reportAnalysis.queryOpeReportStatisYearAnal(param).then(res => {
        this.reportList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      })
    },
  },
  mounted() {
    //初始化数据
    this.queryParkList();
    this.queryReportList();
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
  height: 85%;
  padding-left: 2%;
}
.demo-form-inline-two{
  height: 45px;
  margin-left: 93%;
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
