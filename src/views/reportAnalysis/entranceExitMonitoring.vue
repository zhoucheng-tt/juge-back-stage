<!--出入口监测-->
<template>
  <div class="all">
    <!--上半部分入口监测-->
    <div class="up-half">
      <!--上半部查询-->
      <el-row class="upQuerySelect">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="入口监测"></el-form-item>
          <el-form-item label="停车场:">
            <el-select
              size="small"
              style="width: 160px"
              v-model="upQueryList.parkId"
            >
              <el-option label="全部" value="" />
              <el-option
                v-for="(item, index) in parkingLotList"
                :label="item.name"
                :value="item.code"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
          <!--    时间-->
          <el-form-item label="选择时间:">
            <el-date-picker
              v-model="upQueryList.minDateTime"
              type="datetime"
              size="small"
              style="width: 160px"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="请选择起始时间"
            >
            </el-date-picker>
            <span>
              ~
            </span>
            <el-date-picker
              v-model="upQueryList.maxDateTime"
              type="datetime"
              size="small"
              style="width: 160px"
              placeholder="请选择截止日期"
              value-format="yyyy-MM-dd HH:mm:ss"
            >
            </el-date-picker>
          </el-form-item>
          <!--    车牌号-->
          <el-form-item label="车牌号:">
            <el-input
              size="small"
              style="width: 160px"
              v-model="upQueryList.plateNumber"
              placeholder="请输入车牌号"
            ></el-input>
          </el-form-item>
          <!--      查询按钮-->
          <el-form-item>
            <el-button type="primary" size="small" @click="queryUpFormList"
              >查询
            </el-button>
            <el-button size="small" @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="data-content">
        <!--左侧图片-->
        <el-row class="upImg">
          <img :src="selectedInRecord.inImage" class="upImg-content" />
        </el-row>
        <el-row class="upTable">
          <el-table
            :cell-style="{
              fontfamily: 'PingFangSC-Regular',
              letterSpacing: '0.56px',
              fontSize: '14px',
              color: '#333333',
              'text-align': 'center'
            }"
            :data="carInRecordList"
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
            stripe
            style="width: 100%;margin-left: 1%"
            @row-click="handleSelection"
            :highlight-current-row="true"
          >
            <el-table-column
              label="入场时间"
              prop="inTime"
              label-width="210px"
            ></el-table-column>
            <el-table-column
              :show-overflow-tooltip="true"
              label="车牌号"
              prop="plateNumber"
            />
            <el-table-column
              :show-overflow-tooltip="true"
              label="停车场名称"
              prop="parkName"
            />
            <el-table-column
              :show-overflow-tooltip="true"
              label="通过设备"
              prop="inDeviceName"
            />
            <el-table-column :show-overflow-tooltip="true" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  type="text"
                  @click="showDetail(scope.row)"
                  >查看详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="float: right;">
            <el-pagination
              layout="total, prev, pager, next, jumper"
              :page-size="upPageSize"
              @current-change="handleUpQuery"
              :current-page="upPageNum"
              :total="upTotal"
              style="height: 10%"
            >
            </el-pagination>
          </div>
          <el-dialog
            title="详情"
            :visible.sync="upDetailDialogVisible"
            width="640px"
            @close="downshow = 0"
          >
            <el-row style="display: flex">
              <el-row style="width: 30%;">
                <img :src="selectedInRecord.inImage" class="dialog-upimg" />
              </el-row>
              <el-row class="rightcontent">
                <el-row> 停车场:{{ selectedInRecord.parkName }}</el-row>
                <el-row>通过设备:{{ selectedInRecord.inDeviceName }}</el-row>
                <el-row> 入场时间:{{ selectedInRecord.inTime }}</el-row>
                <el-row> 车牌号:{{ selectedInRecord.plateNumber }}</el-row>
                <el-row> 车牌颜色:{{ selectedInRecord.plateColor }}</el-row>
                <el-row> 操作员:{{ selectedInRecord.stationOperator }}</el-row>
                <el-row> 备注:{{ selectedInRecord.remark }}</el-row>
                <el-button
                  type="primary"
                  @click="getOutRecord(selectedInRecord.inRecordId)"
                  >追踪出场记录
                </el-button>
              </el-row>
            </el-row>
            <el-row
              v-if="downshow === 1"
              style="display: flex;margin-top: 20px"
            >
              <el-row style="width: 30%">
                <img :src="selectedOutRecord2.outImage" class="dialog-upimg" />
              </el-row>
              <el-row class="rightcontent">
                <el-row>停车场:{{ selectedOutRecord2.parkName }}</el-row>
                <el-row>
                  通过设备:{{ selectedOutRecord2.outDeviceName }}
                </el-row>
                <el-row>出场时间:{{ selectedOutRecord2.outTime }}</el-row>
                <el-row>车牌号:{{ selectedOutRecord2.plateNumber }}</el-row>
                <el-row>车牌颜色:{{ selectedOutRecord2.plateColor }}</el-row>
                <el-row>
                  操作员:{{ selectedOutRecord2.stationOperator }}
                </el-row>
                <el-row>备注:{{ selectedOutRecord2.remark }}</el-row>
              </el-row>
            </el-row>

            <span slot="footer" class="dialog-footer">
              <el-button @click="upDetailDialogVisible = false">关闭</el-button>
            </span>
          </el-dialog>
        </el-row>
      </el-row>
    </div>
    <!--下半部分出口检测-->
    <div class="down-half">
      <el-row class="upQuerySelect">
        <el-form :inline="true" class="demo-form-inline" :model="downQueryList">
          <el-form-item label="出口监测"></el-form-item>
          <el-form-item label="停车场:">
            <el-select
              size="small"
              style="width: 160px"
              v-model="downQueryList.parkId"
            >
              <el-option label="全部" value="" />
              <el-option
                v-for="(item, index) in parkingLotList2"
                :label="item.name"
                :value="item.code"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
          <!--    时间-->
          <el-form-item label="选择时间:">
            <el-date-picker
              v-model="downQueryList.minDateTime"
              type="datetime"
              size="small"
              style="width: 160px"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="请选择起始时间"
            >
            </el-date-picker>
            <span>
              ~
            </span>
            <el-date-picker
              v-model="downQueryList.maxDateTime"
              type="datetime"
              size="small"
              style="width: 160px"
              placeholder="请选择截止日期"
              value-format="yyyy-MM-dd HH:mm:ss"
            >
            </el-date-picker>
          </el-form-item>
          <!--    车牌号-->
          <el-form-item label="车牌号:">
            <el-input
              size="small"
              style="width: 160px"
              v-model="downQueryList.plateNumber"
              placeholder="请输入车牌号"
            ></el-input>
          </el-form-item>
          <!--      查询按钮-->
          <el-form-item>
            <el-button type="primary" size="small" @click="queryDownFormList"
              >查询
            </el-button>
            <el-button size="small" @click="downResetQuery">重置 </el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="data-content">
        <el-row class="upImg">
          <img :src="selectedOutRecord.outImage" class="upImg-content" />
        </el-row>
        <el-row class="upTable">
          <el-table
            :cell-style="{
              fontfamily: 'PingFangSC-Regular',
              letterSpacing: '0.56px',
              fontSize: '14px',
              color: '#333333',
              'text-align': 'center'
            }"
            :data="carOutRecordList"
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
            stripe
            style="width: 100%;margin-left: 1%"
            @row-click="handleOutSelection"
            :highlight-current-row="true"
          >
            <el-table-column
              label="出场时间"
              prop="outTime"
              label-width="210px"
            ></el-table-column>
            <el-table-column
              :show-overflow-tooltip="true"
              label="车牌号"
              prop="plateNumber"
            />
            <el-table-column
              :show-overflow-tooltip="true"
              label="停车场名称"
              prop="parkName"
            />
            <el-table-column
              :show-overflow-tooltip="true"
              label="通过设备"
              prop="outDeviceName"
            />
            <el-table-column :show-overflow-tooltip="true" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  type="text"
                  @click="showDownDetail(scope.row)"
                  >查看详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="float: right;">
            <el-pagination
              layout="total, prev, pager, next, jumper"
              :page-size="downPageSize"
              @current-change="handleDownQuery"
              :current-page="downPageNum"
              :total="downTotal"
              style="height: 10%"
            >
            </el-pagination>
          </div>
          <el-dialog
            title="详情"
            :visible.sync="downDetailDialogVisible"
            width="640px"
            @close="upshow = 0"
          >
            <el-row style="display: flex">
              <el-row style="width: 30%;">
                <img :src="selectedOutRecord.outImage" class="dialog-upimg" />
              </el-row>
              <el-row class="rightcontent">
                <el-row>停车场:{{ selectedOutRecord.parkName }}</el-row>
                <el-row> 通过设备:{{ selectedOutRecord.outDeviceName }}</el-row>
                <el-row>出场时间:{{ selectedOutRecord.outTime }}</el-row>
                <el-row>车牌号:{{ selectedOutRecord.plateNumber }}</el-row>
                <el-row>车牌颜色:{{ selectedOutRecord.plateColor }}</el-row>
                <el-row> 操作员:{{ selectedOutRecord.stationOperator }}</el-row>
                <el-row>备注:{{ selectedOutRecord.remark }}</el-row>
                <el-button
                  type="primary"
                  @click="getInRecord(selectedOutRecord.inRecordId)"
                  >追踪入场记录
                </el-button>
              </el-row>
            </el-row>
            <el-row v-if="upshow === 1" style="display: flex;margin-top: 20px">
              <el-row style="width: 30%">
                <img :src="selectedInRecord2.inImage" class="dialog-upimg" />
              </el-row>
              <el-row class="rightcontent">
                <el-row> 停车场:{{ selectedInRecord2.parkName }}</el-row>
                <el-row>通过设备:{{ selectedInRecord2.inDeviceName }}</el-row>
                <el-row> 入场时间:{{ selectedInRecord2.inTime }}</el-row>
                <el-row> 车牌号:{{ selectedInRecord2.plateNumber }}</el-row>
                <el-row> 车牌颜色:{{ selectedInRecord2.plateColor }}</el-row>
                <el-row>
                  操作员:{{ selectedInRecord2.stationOperator }}
                </el-row>
                <el-row> 备注:{{ selectedInRecord2.remark }}</el-row>
              </el-row>
            </el-row>
            <span slot="footer" class="dialog-footer">
              <el-button @click="downDetailDialogVisible = false"
                >关闭</el-button
              >
            </span>
          </el-dialog>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //上半部分查看详情
      upDetailDialogVisible: false,
      downDetailDialogVisible: false,
      downshow: 0,
      upshow: 0,
      // 停车场下拉列表
      parkingLotList: [],
      parkingLotList2: [],
      //查询绑定
      upQueryList: {},
      downQueryList: {},
      //入场记录列表
      carInRecordList: [],
      //出场记录列表
      carOutRecordList: [],

      //选中的记录
      selectedInRecord: {},
      selectedInRecord2: {},
      selectedOutRecord: {},
      selectedOutRecord2: {},

      //入场记录分页数据
      upPageNum: 1,
      upPageSize: 5,
      upTotal: 5,
      //出场记录分页数据
      downPageNum: 1,
      downPageSize: 5,
      downTotal: 5
    };
  },
  mounted() {
    this.queryParking();
    this.queryUpList();
    this.queryDownList();
  },
  methods: {
    //上半部查询按钮
    queryUpFormList() {
      this.upPageNum = 1;
      this.queryUpList();
    },
    //下半部查询按钮
    queryDownFormList() {
      this.downPageNum = 1;
      this.queryDownList();
    },
    //入场记录追踪出场记录
    getOutRecord(inRecordId) {
      this.$realTimeMonitor.getOutRecord(inRecordId).then(res => {
        if (res.resultEntity.list.length === 0) {
          this.$message({
            type: "fail",
            message: "没有该车出场记录！请确认该车是否离场!"
          });
          return;
        }
        this.downshow = 1;
        this.selectedOutRecord2 = res.resultEntity.list[0];
      });
    },
    //出场记录追踪入场记录
    getInRecord(inRecordId) {
      this.upshow = 1;
      this.$realTimeMonitor.getInRecord(inRecordId).then(res => {
        this.selectedInRecord2 = res.resultEntity.list[0];
      });
    },
    //入场记录选中某行
    handleSelection(row) {
      this.selectedInRecord = row;
    },
    //出场记录选中某行
    handleOutSelection(row) {
      this.selectedOutRecord = row;
    },
    //入场记录跳页
    handleUpQuery(val) {
      this.upPageNum = val;
      this.queryUpList();
    },
    //出场记录跳页
    handleDownQuery(val) {
      this.downPageNum = val;
      this.queryDownList();
    },
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    downResetQuery() {
      this.downQueryList = {};
    },
    //入场记录查询
    queryUpList() {
      const param = {
        pageNum: this.upPageNum,
        pageSize: this.upPageSize,
        parkId: this.upQueryList.parkId,
        plateNumber: this.upQueryList.plateNumber,
        startTime: this.upQueryList.minDateTime,
        endTime: this.upQueryList.maxDateTime
      };
      this.$realTimeMonitor.queryInRecord(param).then(res => {
        if (res.resultEntity.list.length === 0) {
          this.$message({
            type: "fail",
            message: "没有符合条件的记录!请重新输入!"
          });
          return;
        }
        this.carInRecordList = res.resultEntity.list;
        this.upTotal = res.resultEntity.total;
        this.selectedInRecord = this.carInRecordList[0];
      });
    },
    //出场记录查询
    queryDownList() {
      const param = {
        pageNum: this.downPageNum,
        pageSize: this.downPageSize,
        parkId: this.downQueryList.parkId,
        plateNumber: this.downQueryList.plateNumber,
        startTime: this.downQueryList.minDateTime,
        endTime: this.downQueryList.maxDateTime
      };
      this.$realTimeMonitor.queryOutRecord(param).then(res => {
        if (res.resultEntity.list.length === 0) {
          this.$message({
            type: "fail",
            message: "没有符合条件的记录!请重新输入!"
          });
          return;
        }
        this.carOutRecordList = res.resultEntity.list;
        this.downTotal = res.resultEntity.total;
        this.selectedOutRecord = this.carOutRecordList[0];
      });
    },
    // 查询停车场下拉表单
    queryParking() {
      this.parkingLotList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: []
      };
      this.$homePage.queryDict(param).then(response => {
        this.parkingLotList = response.resultEntity;
        this.parkingLotList2 = response.resultEntity;
      });
    },
    //查看入场记录详情
    showDetail(item) {
      this.selectedInRecord = item;
      this.upDetailDialogVisible = true;
    },
    //查看出场记录详情
    showDownDetail(item) {
      this.selectedOutRecord = item;
      this.downDetailDialogVisible = true;
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

.up-half {
  width: 98%;
  height: 48.5%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

.down-half {
  width: 98%;
  height: 48.5%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

.upQuerySelect {
  width: 100%;
  height: 14%;
}

.data-content {
  width: 98%;
  height: 39%;
  background-color: white;
  display: flex;
  margin-left: 1%;
  margin-top: 1%;
}

.upImg {
  width: 30%;
  height: 325px;
}

.upImg-content {
  width: 100%;
  height: 100%;
}

.upTable {
  width: 70%;
  height: 345px;
}

.el-table .selectRow {
  background: #f8f9fa !important;
}

.showEntrance {
  /*background-color: red;*/
  width: 70%;
  height: 285px;
  margin: 20px auto;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 45px;
  padding-left: 1%;
  padding-top: 0.5%;
}

.dialog-upimg {
  width: 200px;
  height: 200px;
}

.rightcontent {
  width: 70%;
  margin-left: 70px;
}

img {
  width: 30px;
  height: 30px;
  /*border-radius: 50%;*/
  vertical-align: middle;
  margin-right: 20px;
}

ul {
  position: relative;
}

li {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  height: 34px;
  /*line-height: 60px;*/
  text-align: left;
  margin: 0;
  font-size: 14px;
}
</style>
