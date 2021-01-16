<!--
    月报
 * @Author: 邵青阳
 * @Date: 2020-11-05 14:25:01
 * @LastEditTime: 2020-11-05 14:25:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\reportAnalysis\operationReport\mounthReport.vue
-->
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <!--上半部分查询-->
    <div class="up">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="统计月份:">
          <el-date-picker
            v-model="query.date"
            type="month"
            size="small"
            style="width: 160px"
            placeholder="选择月份"
            value-format="yyyy-MM"
          />
        </el-form-item>
        <el-form-item label="停车场：">
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
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="queryReportList"
            >查询</el-button
          >
          <el-button type="primary" size="small" @click="resetQuery"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="exportReport"
          >导出</el-button
        >
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="reportList"
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
          prop="queryDate"
          :show-overflow-tooltip="true"
          label="统计月份"
        />
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        />
        <el-table-column
          prop="parkSpace"
          :show-overflow-tooltip="true"
          label="车位数(个)"
        />
        <el-table-column
          prop="parkCount"
          :show-overflow-tooltip="true"
          label="停车数(个)"
        />
        <el-table-column
          width="160"
          prop="avgParkDuration"
          :show-overflow-tooltip="true"
          label="平均停车时长(分钟)"
        />
        <el-table-column
          width="120"
          prop="parkSpaceUsedRate"
          :show-overflow-tooltip="true"
          label="车位利用率(%)"
        />
        <el-table-column
          width="120"
          prop="parkSpaceTurnoverRate"
          :show-overflow-tooltip="true"
          label="车辆周转率(%)"
        />
        <el-table-column
          width="150"
          prop="reserveParkCount"
          :show-overflow-tooltip="true"
          label="预约停车数量(个)"
        />
        <el-table-column
          width="120"
          prop="reserveCompletionRate"
          :show-overflow-tooltip="true"
          label="预约完成率(%)"
        />
        <el-table-column
          prop="totalIncomeMoneyAmount"
          :show-overflow-tooltip="true"
          label="总收入(元)"
        />
        <el-table-column
          width="120"
          prop="wechatPaymentMoneyAmount"
          :show-overflow-tooltip="true"
          label="微信缴费(元)"
        />
        <el-table-column
          width="120"
          prop="alipayPaymentMoneyAmount"
          :show-overflow-tooltip="true"
          label="支付宝缴费(元)"
        />
        <el-table-column
          width="120"
          prop="ETCEarn"
          :show-overflow-tooltip="true"
          label="ETC缴费(元)"
        />
        <!--        <el-table-column-->
        <!--          prop="arrearageMoneyAmount"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="欠费(元)"-->
        <!--        />-->
      </el-table>
      <div
        style="background-color: white;width: 98%;margin-left: 1%;height: 35px"
      >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 顶部查询数据暂存处
      query: {
        date: "2020-08",
        parkId: ""
      },
      // 停车场下拉框数据暂存处
      parkList: [],
      // 分页8
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      //列表数据
      reportList: []
    };
  },
  mounted() {
    this.queryParkList();
    this.queryReportList();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.query = {};
    },
    // 查询
    queryMounthReport() {
      console.log("打印出来点击查询后所产生的值", this.query);
    },
    //导出
    exportReport() {
      console.log("导出报表");
    },
    // 斑马纹样式
    tableRowClassName({ rowIndex }) {
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
    //列表查询
    queryReportList() {
      const param = {
        queryDate: this.query.date,
        parkId: this.query.parkId,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$reportAnalysis.queryOpeReportStatisMonthAnal(param).then(res => {
        this.reportList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
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
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/*查询*/
.up {
  width: 98%;
  height: 12%;
  background-color: white;
  margin-left: 1%;
}

/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 84%;
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
  height: 40px;
  padding-left: 1%;
  padding-top: 0.5%;
}
.line-2 {
  width: 98%;
  height: 40px;
  margin-left: 1%;
}
.backgroundLine {
  background-color: #eaf0f6;
  width: 100%;
  height: 15px;
}

/*!* 表格表头样式 *!*/
/*.el-table__header-wrapper {*/
/*  width: 100%;*/
/*  height: 0px;*/
/*}*/

/*!* 设置弹出框样式 *!*/
/*/deep/ .el-dialog {*/
/*  width: 50%;*/
/*}*/

/*!* 弹出框内表单样式控制 *!*/
/*.el-form-item-dialog {*/
/*  width: 32%;*/
/*}*/
</style>
