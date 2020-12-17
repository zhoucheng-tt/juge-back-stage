<!--
    日志管理
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:36:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="about">
    <!--       日志时间-->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item>
          <el-date-picker
            v-model="upQueryList.minLogTime"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            size="small"
            style="width: 160px"
            placeholder="选择日期时间"
          >
          </el-date-picker>
          <span>~</span>
          <el-date-picker
            v-model="upQueryList.maxLogTime"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            size="small"
            style="width: 160px"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small" @click="queryLogList">
            查询
          </el-button>
          <el-button type="primary" size="small" @click="resetQuery"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="exportLogList">
          导出
        </el-button>
      </el-row>
    </div>
    <!--        日志管理表格-->
    <div class="down">
      <!--数据表格-->
      <el-table
        :data="logManagementData"
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
          fixed
          prop="logTime"
          label="日志时间"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="operator"
          label="操作人"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="sysOperationTypeName"
          label="操作类型"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="operateObject"
          label="操作对象"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          fixed
          prop="operateResult"
          label="操作结果"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          fixed
          prop="logDetail"
          label="日志详情"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
      </el-table>
      <div style="float: right">
        <!--分页条-->
        <el-pagination
          @current-change="handleCurrentModify"
          layout=" total,prev, pager, next, jumper"
          :current-page="pageNum"
          :page-size="pageSize"
          :total="pageTotal"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //顶部查询条件存放
      upQueryList: {},
      //顶部开始时间
      minLogTime: "",
      //顶部结束时间
      maxLogTime: "",
      //初始化分页
      pageNum: 1,
      pageSize: 13,
      pageTotal: 1,
      //日志管理表格数据存放
      logManagementData: []
    };
  },
  mounted() {
    //查询日志管理列表
    this.queryLogList();
  },
  methods: {
    //顶部导出按钮
    exportLogList() {},
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    //顶部查询按钮
    queryLogList() {
      var that = this;
      const param = {
        //传入查询要用的参数
        minLogTime: this.upQueryList.minLogTime,
        maxLogTime: this.upQueryList.maxLogTime,
        pageSize: this.pageSize,
        pageNum: this.pageNum
      };
      console.log("param", param);
      this.$systemUser.queryLogList(param).then(response => {
        console.log("打印查询response", response);
        //分页
        that.pageTotal = response.resultEntity.total;
        console.log("that.pageTotal", that.pageTotal);
        //查询
        that.logManagementData = response.resultEntity.list;
        console.log("查询日志管理表格数据", that.logManagementData);
      });
    },
    //分页方法
    handleCurrentModify(val) {
      //查询
      this.pageNum = val;
      this.queryLogList();
    },
    // 斑马纹样式
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "successRow11";
      } else if (rowIndex % 2 == 0) {
        return "successSecond";
      }
      return "";
    }
  }
};
</script>
<style scoped>
.about {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
/*查询*/
.up {
  width: 98%;
  height: 11%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}
/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 84%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
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

.line-2 {
  width: 98%;
  height: 40px;
  margin-left: 1%;
}
</style>
