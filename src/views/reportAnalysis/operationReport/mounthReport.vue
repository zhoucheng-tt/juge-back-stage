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
            v-model="query.startTime"
            type="month"
            size="small"
            style="width: 160px"
            placeholder="选择月份"
            value-format="yyyy-MM"
          />
        </el-form-item>
        <el-form-item label="~">
          <el-date-picker
            v-model="query.endTime"
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
          <el-button type="primary" size="small" @click="queryFormList"
            >查询
          </el-button>
          <el-button size="small" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small"
          ><a
            :href="exportFile"
            class="download"
            download=""
            style="color: #ffffff;text-decoration:none"
            >导出</a
          >
        </el-button>
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
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
        <el-table-column
          prop="statisticDate"
          :show-overflow-tooltip="true"
          label="统计月份"
        />
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        />
        <el-table-column
          prop="parkCount"
          :show-overflow-tooltip="true"
          label="车位数(个)"
        />
        <el-table-column
          prop="parkTimes"
          :show-overflow-tooltip="true"
          label="停车数(次)"
        />
        <el-table-column
          prop="avgParkDuration"
          :show-overflow-tooltip="true"
          label="平均停车时长(分钟)"
        />
        <el-table-column
          prop="usageRate"
          :show-overflow-tooltip="true"
          label="车位利用率"
        />
        <el-table-column
          prop="turnoverRate"
          :show-overflow-tooltip="true"
          label="车辆周转率"
        />
        <el-table-column
          prop="income"
          :show-overflow-tooltip="true"
          label="总收入(元)"
        />
        <!--        <el-table-column-->
        <!--          width="150"-->
        <!--          prop="reserveParkCount"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="预约停车数量(个)"-->
        <!--        />-->
        <!--        <el-table-column-->
        <!--          width="120"-->
        <!--          prop="reserveCompletionRate"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="预约完成率"-->
        <!--        />-->

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
import { BASE_API } from "@/utils/config";

export default {
  data() {
    return {
      // 顶部查询数据暂存处
      query: {
        startTime: new Date().Format("yyyy-MM"),
        endTime: new Date().Format("yyyy-MM"),
        parkId: ""
      },
      // 停车场下拉框数据暂存处
      parkList: [],
      // 分页
      pageNum: 1,
      pageSize: 13,
      pageTotal: 1,
      //列表数据
      reportList: []
    };
  },
  mounted() {
    this.queryParkList();
    this.queryReportList();
  },
  //导出监听
  computed: {
    exportFile: function() {
      const param = {
        parkId: this.query.parkId,
        startTime: this.query.startTime,
        endTime: this.query.endTime
      };
      return (
        BASE_API +
        "EarnAnalysisController/month/download?jsonStr=" +
        encodeURIComponent(JSON.stringify(param))
      );
    }
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.query = {};
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryReportList();
    },
    queryFormList() {
      this.pageNum = 1;
      this.queryReportList();
    },
    //列表查询
    queryReportList() {
      const param = {
        startTime: this.query.startTime,
        endTime: this.query.endTime,
        parkId: this.query.parkId,
        pageNumber: this.pageNum,
        pageSize: this.pageSize
      };
      this.$reportAnalysis.queryOpeReportStatisMonthAnal(param).then(res => {
        this.reportList = res.resultEntity.list;
        this.reportList.forEach(item => {
          item.avgParkDuration = Number(item.avgParkDuration).toFixed(0);
          item.turnoverRate = Number(item.turnoverRate).toFixed(2);
          item.usageRate = Number(item.usageRate).toFixed(2);
        });
        this.pageTotal = res.resultEntity.total;
      });
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
