<!--
    停车订单查询
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-02 20:25:49
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
            <el-option label="全部" value=""></el-option>
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
        <el-form-item label="进场时间:">
          <!-- 时间日期选择器 -->
          <el-date-picker
            v-model="upQueryList.minEntranceTime"
            type="datetime"
            size="small"
            style="width: 160px"
            placeholder="请选择起始日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
          <span>
            ~
          </span>
          <el-date-picker
            v-model="upQueryList.maxEntranceTime"
            type="datetime"
            size="small"
            style="width: 160px"
            placeholder="请选择截止日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="出场时间:">
          <el-date-picker
            v-model="upQueryList.minLeaveTime"
            type="datetime"
            size="small"
            style="width: 160px"
            placeholder="请选择起始日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
          <span>
            ~
          </span>
          <el-date-picker
            v-model="upQueryList.maxLeaveTime"
            type="datetime"
            size="small"
            style="width: 160px"
            placeholder="请选择截止日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
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
        <!--          label="订单编号"-->
        <!--          :show-overflow-tooltip="true"-->
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
        <!--        <el-table-column-->
        <!--          prop="parkSpaceNumber"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="车位号"-->
        <!--        ></el-table-column>-->
        <el-table-column
          prop="entranceTime"
          :show-overflow-tooltip="true"
          label="进场时间"
        ></el-table-column>
        <el-table-column
          prop="leaveTime"
          :show-overflow-tooltip="true"
          label="出场时间"
        ></el-table-column>
        <el-table-column
          prop="parkDuration"
          :show-overflow-tooltip="true"
          label="停车时长(分钟)"
        ></el-table-column>
        <el-table-column
          prop="needPay"
          :show-overflow-tooltip="true"
          label="应收金额(元)"
        ></el-table-column>
        <!--        <el-table-column-->
        <!--          prop="receivedMoneyAmount"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="实收金额(元)"-->
        <!--        ></el-table-column>-->
        <el-table-column
          prop="payMethod"
          :show-overflow-tooltip="true"
          label="支付方式"
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
      title="订单详情"
      :visible.sync="showListDloageandoff"
      width="50%"
    >
      <el-form :inline="true" :model="showListDloageandoffList">
        <el-row>
          <el-col :span="12">
            <el-form-item label="订单编号:" label-width="150px">
              <el-input
                v-model="showListDloageandoffList.orderSequence"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="停车场名称:" label-width="150px">
              <el-input
                v-model="showListDloageandoffList.parkName"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车牌号:" label-width="150px">
              <el-input
                v-model="showListDloageandoffList.plateNumber"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="进场时间:" label-width="150px">
              <el-input
                v-model="showListDloageandoffList.entranceTime"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出场时间:" label-width="150px">
              <el-input
                v-model="showListDloageandoffList.leaveTime"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="停车时长:" label-width="150px">
              <el-input
                v-model="showListDloageandoffList.parkDuration"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="应收金额:" label-width="150px">
              <el-input
                v-model="showListDloageandoffList.needPay"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
<!--          <el-col :span="12">-->
<!--            <el-form-item label="实收金额:" label-width="150px">-->
<!--              <el-input-->
<!--                v-model="showListDloageandoffList.paid"-->
<!--                readonly-->
<!--              ></el-input>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
          <el-col :span="12">
            <el-form-item label="支付方式:" label-width="150px">
              <el-input
                v-model="showListDloageandoffList.payMethod"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showListDloageandoff = false">
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
        parkId: ""
      },
      // 分页
      pageNum: 1,
      pageSize: 12,
      pageTotal: 4,
      // 设置只读属性
      readonly: true,
      // 控制订单详情弹出框展示和隐藏属性
      showListDloageandoff: false,
      // 弹出框展示订单详情数据暂存
      showListDloageandoffList: []
    };
  },
  mounted() {
    this.queryStopOrder();
    this.queryPark();
  },
  methods: {
    //查询按钮
    queryFormList() {
      this.pageNum = 1;
      this.queryStopOrder();
    },
    //重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    //停车场管理查询接口
    queryStopOrder() {
      var that = this;
      const params = {
        parkId: this.upQueryList.parkId,
        minEntranceTime: this.upQueryList.minEntranceTime,
        maxEntranceTime: this.upQueryList.maxEntranceTime,
        minLeaveTime: this.upQueryList.minLeaveTime,
        maxLeaveTime: this.upQueryList.maxLeaveTime,
        plateNumber: this.upQueryList.plateNumber,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$orderManagement.queryStopOrder(params).then(response => {
        response.resultEntity.list.forEach(item => {
          item.needPay = Number(item.needPay) / 100;
        });
        console.log(response);
        //分页
        that.pageTotal = response.resultEntity.total;
        //查询
        that.orderParkingList = response.resultEntity.list;
      });
    },
    //查询停车场下拉接口
    queryPark() {
      var that = this;
      this.parkingLotList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: []
      };
      this.$homePage.queryDict(param).then(response => {
        this.parkingLotList = response.resultEntity;
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryStopOrder();
    },
    // 点击查看调用的方法
    showListDloage(row) {
      this.showListDloageandoff = true;
      this.showListDloageandoffList = row;
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
