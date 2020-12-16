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
    <div class="top">
      <el-form
        :inline="true"
        :model="upQueryList"
        class="demo-form-inline"
        size="small"
      >
        <el-form-item>
          <el-date-picker
            v-model="upQueryList.minLogTime"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
          <span>~</span>
          <el-date-picker
            v-model="upQueryList.maxLogTime"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="queryLogList">
            查询
          </el-button>
          <el-button type="primary" @click="resetQuery">重置</el-button>
        </el-form-item>
        <el-row>
          <el-form-item style="float: right">
            <el-button type="primary" @click="exportLogList">
              导出
            </el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <!--        日志管理表格-->
    <div class="table" style="margin:0 24px;background: white">
      <!--数据表格-->
      <el-table
        :data="logManagementData"
        stripe
        :cell-style="{ padding: '10px' }"
        :header-cell-style="{ padding: '10px' }"
      >
        <el-table-column fixed prop="logTime" label="日志时间">
        </el-table-column>
        <el-table-column prop="operator" label="操作人"> </el-table-column>
        <el-table-column prop="sysOperationTypeName" label="操作类型">
        </el-table-column>
        <el-table-column prop="operateObject" label="操作对象" width="280px">
        </el-table-column>
        <el-table-column fixed prop="operateResult" label="操作结果">
        </el-table-column>
        <el-table-column fixed prop="logDetail" label="日志详情" width="340px">
        </el-table-column>
      </el-table>
      <!--分页条-->
      <el-pagination
        style="position: relative;left: 63%"
        @current-change="handleCurrentModify"
        layout=" prev, pager, next,total, jumper"
        :current-page="pageNum"
        :page-size="pageSize"
        :total="pageTotal"
      >
      </el-pagination>
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
      pageSize: 9,
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
  overflow-x: hidden;
}
.demo-form-inline {
  width: 96%;
  height: 80%;
  padding: 1%;
  background: white;
  margin: 16px 24px;
}
/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: white !important;
}
/deep/ .el-table .successSecond {
  background: #eaf0f6 !important;
}
</style>
