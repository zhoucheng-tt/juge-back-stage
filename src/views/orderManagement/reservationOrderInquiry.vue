<!--
    预约订单查询
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-21 09:36:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="all">
    <!-- 上半部分查询 -->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="停车场：">
          <el-select
            size="small"
            style="width: 160px"
            v-model="upQueryList.parkId"
            placeholder="请选择停车场"
          >
            <el-option value="" label="全部"></el-option>
            <el-option
              v-for="(item, index) in parkingLotList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车牌号:">
          <el-input
            size="small"
            style="width: 160px"
            v-model="upQueryList.plateNumber"
            placeholder="请输入车牌号"
          ></el-input>
        </el-form-item>
        <el-form-item label="预约订单:">
          <!-- 时间日期选择器 -->
          <el-date-picker
            v-model="upQueryList.minAppointmentTime"
            type="datetime"
            size="small"
            style="width: 160px"
            placeholder="请选择起始日期"
            value-format="yyyy-MM-dd hh:mm:ss"
          >
          </el-date-picker>
          <span>
            ~
          </span>
          <el-date-picker
            v-model="upQueryList.maxAppointmentTime"
            type="datetime"
            size="small"
            style="width: 160px"
            placeholder="请选择截止日期"
            value-format="yyyy-MM-dd hh:mm:ss"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="预约状态:">
          <el-select
            size="small"
            style="width: 160px"
            v-model="upQueryList.appointmentOrderStatusCode"
            placeholder="请选择状态"
          >
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="(item, index) in strutsList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="queryFormList"
            >查询</el-button
          >
          <el-button size="small" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 下半部分列表 -->
    <div class="down">
      <el-table
        :data="orderParkingList"
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
        <!--        <el-table-column-->
        <!--          prop="orderSequence"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="预约单编号"-->
        <!--        ></el-table-column>-->
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        ></el-table-column>
        <el-table-column
          prop="plateNumber"
          :show-overflow-tooltip="true"
          label="车牌号"
        ></el-table-column>
        <el-table-column
          prop="appointmentTime"
          :show-overflow-tooltip="true"
          label="预约时间"
        ></el-table-column>
        <!--暂无-->
        <el-table-column
          prop="estimatedTimeArrival"
          :show-overflow-tooltip="true"
          label="预计到达时间"
        ></el-table-column>
        <el-table-column
          prop="cancellationTime"
          :show-overflow-tooltip="true"
          label="取消时间"
        ></el-table-column>
        <el-table-column
          prop="appointmentOrderStatusName"
          :show-overflow-tooltip="true"
          label="预约状态"
        ></el-table-column>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="showListDloage(scope.row)"
              type="text"
              size="small"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right">
        <el-pagination
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal"
          :page-size="pageSize"
        >
        </el-pagination>
      </div>
    </div>
    <!-- 订单详情点击弹出框 -->
    <el-dialog
      title="预约订单信息："
      width="50%"
      :visible.sync="showListDloageandoff"
    >
      <el-form :inline="true" :model="showListDloageandoffList">
        <el-form-item label="预约单编号:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.orderSequence"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="停车场名称:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.parkName"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="车牌号:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.plateNumber"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="预约时间:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.appointmentTime"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="预计到达时间:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.estimatedTimeArrival"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="取消时间:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.cancellationTime"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="预约状态:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.appointmentOrderStatusName"
            readonly
          ></el-input>
        </el-form-item>
      </el-form>
      <div>
        <h4>订单信息:</h4>
      </div>
      <el-form :inline="true" :model="showListDloageandoffList">
        <el-form-item label="进场时间:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.entranceTime"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="出场时间:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.leaveTime"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="停车时长:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.parkDuration"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="应收金额:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.receivableMoneyAmount"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="实收金额:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.receivedMoneyAmount"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="支付方式:" label-width="150px">
          <el-input
            v-model="showListDloageandoffList.paymentMethod"
            readonly
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleBack">
          返回
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 停车场下拉框数据暂存处
      parkingLotList: [],
      // 列表中数据暂存处， 订单数据
      orderParkingList: [],
      // 顶部查询数据暂存处
      upQueryList: {
        parkId: "",
        appointmentOrderStatusCode: ""
      },
      //通过停车场名字获取id
      parkIdList: [],
      // 设置只读属性
      readonly: true,
      // 预约状态数据
      strutsList: [],
      // 分页
      pageNum: 1,
      pageSize: 12,
      pageTotal: 4,

      // 控制订单详情弹出框展示和隐藏属性
      showListDloageandoff: false,
      // 弹出框展示订单详情数据暂存
      showListDloageandoffList: []
    };
  },
  mounted() {
    //查询停车场下拉
    this.queryPark();
    //查询预约状态下拉
    this.queryPrepare();
    //预约订单查询
    this.queryAppointmentStopOrder();
  },
  methods: {
    //查询按钮
    queryFormList() {
      this.pageNum = 1;
      this.queryAppointmentStopOrder();
    },
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {
        parkId: "",
        appointmentOrderStatusCode: ""
      };
    },
    //查询停车场接口
    queryPark() {
      var that = this;
      this.parkingLotList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: []
      };
      this.$homePage.queryDict(param).then(response => {
        that.parkingLotList = response.resultEntity;
      });
    },
    //查询预约状态下拉
    queryPrepare() {
      var that = this;
      this.strutsList = [];
      const param = {
        columnName: [
          "appointment_order_status_code",
          "appointment_order_status_name"
        ],
        tableName: "t_d_appointment_order_status",
        whereStr: []
      };
      this.$homePage.queryDict(param).then(response => {
        this.strutsList = response.resultEntity;
      });
    },
    queryAppointmentStopOrder() {
      var that = this;
      const param = {
        parkId: this.upQueryList.parkId,
        minAppointmentTime: this.upQueryList.minAppointmentTime,
        maxAppointmentTime: this.upQueryList.maxAppointmentTime,
        appointmentOrderStatusCode: this.upQueryList.appointmentOrderStatusCode,
        plateNumber: this.upQueryList.plateNumber,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$orderManagement.queryAppointmentStopOrder(param).then(response => {
        //分页
        that.pageTotal = response.resultEntity.total;
        //查询
        that.orderParkingList = response.resultEntity.list;
      });
    },
    // 斑马纹样式
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "successRow11";
      } else if (rowIndex % 2 == 0) {
        return "successSecond";
      }
      return "";
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryAppointmentStopOrder();
    },
    // 点击查看调用的方法
    showListDloage(row) {
      this.showListDloageandoff = true;
      this.showListDloageandoffList = row;
    },
    //弹窗查看点击返回事件
    handleBack() {
      this.showListDloageandoff = false;
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
  height: 7%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}
/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 88%;
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
