<!--
    自助充电订单查询
 * @Author: 邵青阳
 * @Date: 2020-11-23 10:02:13
 * @LastEditTime: 2020-11-23 10:41:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\orderManagement\querySelfServiceChargingOrder.vue
-->
<template>
  <div class="all">
    <!-- 上半部分查询 -->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="充电桩号：">
          <el-select v-model="upQueryList.parkId" placeholder="请选择停车场">
            <el-option
              v-for="(item, index) in parkingLotList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车牌号:" v-if="false">
          <el-input
            v-model="upQueryList.carNum"
            placeholder="请输入车牌号"
          ></el-input>
        </el-form-item>
        <!-- 时间日期选择器 -->
        <el-form-item label="进场时间:">
          <!-- 时间日期选择器 -->
          <el-date-picker
            v-model="upQueryList.minEntranceTime"
            type="datetime"
            placeholder="请选择起始日期"
            value-format="yyyy-MM-dd hh:mm:ss"
          >
          </el-date-picker>
          <span>
            ~
          </span>
          <el-date-picker
            v-model="upQueryList.maxEntranceTime"
            type="datetime"
            placeholder="请选择截止日期"
            value-format="yyyy-MM-dd hh:mm:ss"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="出场时间:">
          <el-date-picker
            v-model="upQueryList.minLeaveTime"
            type="datetime"
            placeholder="请选择起始日期"
            value-format="yyyy-MM-dd hh:mm:ss"
          >
          </el-date-picker>
          <span>
            ~
          </span>
          <el-date-picker
            v-model="upQueryList.maxLeaveTime"
            type="datetime"
            placeholder="请选择截止日期"
            value-format="yyyy-MM-dd hh:mm:ss"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryStopOrder">查询</el-button>
          <el-button type="primary" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 下半部分列表 -->
    <div class="down">
      <el-table
        :data="orderParkingList"
        :row-class-name="tableRowClassName"
        :header-cell-style="{
          'text-align': 'center',
          background: '#24314A',
          color: '#FFF',
          border: 'none',
          padding: 'none',
          fontSize: '12px',
          fontWeight: '100'
        }"
        :cell-style="{ 'text-align': 'center' }"
        style="width: 100%;"
      >
        <el-table-column
          fixed
          prop="orderSequence"
          label="订单编号"
          width="310"
        ></el-table-column>
        <el-table-column
          prop="parkId"
          :show-overflow-tooltip="true"
          label="充电桩号"
          width=""
        ></el-table-column>
        <el-table-column
          prop="plateNumber"
          :show-overflow-tooltip="true"
          label="车牌号"
        ></el-table-column>
        <el-table-column
          prop="entranceTime"
          :show-overflow-tooltip="true"
          label="开始时间"
        ></el-table-column>
        <el-table-column
          prop="leaveTime"
          :show-overflow-tooltip="true"
          label="结束时间"
        ></el-table-column>
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="充电时长"
          width=""
        ></el-table-column>
        <el-table-column
          prop="parkSpaceNumber"
          :show-overflow-tooltip="true"
          label="订单金额"
        ></el-table-column>
        <el-table-column
          prop="paymentMethod"
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
      <el-pagination
        style="position: absolute;right:4%;margin-top:20px"
        background
        layout="total, prev, pager, next, jumper"
        @current-change="handleCurrentModify"
        :current-page="pageNum"
        :total="pageTotal"
        :page-size="pageSize"
      >
      </el-pagination>
    </div>
    <!-- 订单详情点击弹出框 -->
    <el-dialog title="订单详情" :visible.sync="showListDloageandoff">
      <el-form
        :inline="true"
        :model="showListDloageandoffList"
        class="demo-form-inline"
      >
        <el-form-item label="订单编号:" class="el-form-item-dialog">
          <el-input
            v-model="showListDloageandoffList.parkingLotNumber"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="充电桩号:" class="el-form-item-dialog">
          <el-input
            v-model="showListDloageandoffList.nameOfParkingLot"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="车牌号:" class="el-form-item-dialog">
          <el-input
            v-model="showListDloageandoffList.carNum"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="开始时间:" class="el-form-item-dialog">
          <el-input
            v-model="showListDloageandoffList.parkingNumber"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="充电时长:" class="el-form-item-dialog">
          <el-input
            v-model="showListDloageandoffList.entryTime"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="订单金额:" class="el-form-item-dialog">
          <el-input
            v-model="showListDloageandoffList.deliveryTime"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="支付方式:" class="el-form-item-dialog">
          <el-input
            v-model="showListDloageandoffList.parkingTime"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleBack">
            返回
          </el-button>
        </el-form-item>
      </el-form>
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
      upQueryList: {},
      // 分页
      pageNum: 1,
      pageSize: 10,
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
    // this.queryList();
    this.queryStopOrder();
    this.queryPark();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    //停车场管理查询接口
    queryStopOrder() {
      var that = this;
      const params = {
        cityCode: "321300",
        districtCode: "321302",
        parkTypeCode: "0",
        parkId: this.upQueryList.parkId,
        supervisorAccount: "",
        minEntranceTime: this.upQueryList.minEntranceTime,
        maxEntranceTime: "",
        minLeaveTime: "",
        maxLeaveTime: "",
        plateNumber: "",
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      console.log("mmmmmmmmmmmmmmmmmm", params);
      this.$orderManagement.queryStopOrder(params).then(response => {
        console.log("查询表格数据", response);
        // console.log("that.gateList", that.orderParkingList)
        //分页
        that.pageTotal = response.data.totalRecord;
        //查询
        that.orderParkingList = response.data.dataList;
      });
    },
    //查询停车场下拉接口
    queryPark() {
      var that = this;
      this.parkingLotList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = '321302'"
      };
      this.$orderManagement.queryDictData(param).then(response => {
        console.log("下拉停车场名称", response);
        this.parkingLotList = response.data.dataList;
        console.log("下拉菜单", that.parkingLotList);
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
    //查看弹窗的返回事件
    handleBack() {
      this.showListDloageandoff = false;
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

/* 上半部分查询部分 */
.up {
  width: 100%;
  height: 8.5%;
  float: left;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 85%;
  margin-top: 1%;
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
