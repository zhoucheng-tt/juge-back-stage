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
            v-model="upQueryList"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small" @click="queryLogList">
            查询
          </el-button>
          <el-button size="small" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small">
          <a
            :href="exportFile"
            class="download"
            download=""
            style="color: #ffffff;text-decoration:none"
            >导出</a
          >
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
import { BASE_API } from "@/utils/config";

export default {
  data() {
    return {
      //顶部查询条件存放
      upQueryList: [
        new Date(2000, 10, 10, 10, 10),
        new Date(2000, 10, 11, 10, 10)
      ],
      //初始化分页
      pageNum: 1,
      pageSize: 13,
      pageTotal: 1,
      //日志管理表格数据存放
      logManagementData: [],
      exportFile: BASE_API + "UserController/download"
    };
  },
  mounted() {
    this.initQuery();
    //查询日志管理列表
    this.queryLogList();
  },
  watch: {
    upQueryList: {
      handler(newVal) {
        const param = {
          minLogTime: newVal[0],
          maxLogTime: newVal[1]
        };
        this.exportFile =
          BASE_API +
          "UserController/download?jsonStr=" +
          encodeURIComponent(JSON.stringify(param));
        // console.log(this.exportFile)
      },
      deep: true
    }
  },
  methods: {
    //初始化查询条件
    initQuery() {
      var targetday_milliseconds =
        new Date().getTime() - 1000 * 60 * 60 * 24 * 6;
      var targetday = new Date();
      targetday.setTime(targetday_milliseconds);
      this.upQueryList = [
        targetday.Format("yyyy-MM-dd hh:mm:ss"),
        new Date().Format("yyyy-MM-dd hh:mm:ss")
      ];
      // console.log(this.upQueryList);
    },
    //查询重置按钮
    resetQuery() {
      this.initQuery();
    },
    //顶部查询按钮
    queryLogList() {
      var that = this;
      const param = {
        //传入查询要用的参数
        minLogTime: this.upQueryList[0],
        maxLogTime: this.upQueryList[1],
        pageSize: this.pageSize,
        pageNumber: this.pageNum
      };
      // console.log("param", param);
      this.$systemUser.queryLogList(param).then(response => {
        // console.log("打印查询response", response);
        //分页
        that.pageTotal = response.resultEntity.total;
        // console.log("that.pageTotal", that.pageTotal);
        //查询
        that.logManagementData = response.resultEntity.list;
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
