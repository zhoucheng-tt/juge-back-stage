<template>
  <div class="all">
    <!--上半部分入口监测-->
    <div class="up-half">
      <el-row class="query">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="入口监测"></el-form-item>
          <el-form-item label="停车场:">
            <el-select size="small"
                       style="width: 160px"
                       v-model="upQueryList.parkId"
            >
              <el-option label="全部" value=""/>
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
                value-format="yyyy-MM-dd hh:mm:ss"
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
                value-format="yyyy-MM-dd hh:mm:ss"
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
            <el-button type="primary" size="small" @click="query">查询</el-button>
            <el-button type="primary" size="small" @click="resetQuery"
            >重置
            </el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="data-content">
        <el-col style="height: 70%" :offset="1" :span="9">
          <img :src="selectedInRecord.inImage" class="show"/>
        </el-col>
        <el-col :span="14">
          <el-table :cell-style="{fontfamily: 'PingFangSC-Regular',letterSpacing: '0.56px',
          fontSize: '14px',color: '#333333','text-align': 'center'}" :data="carInRecordList" :header-cell-style="{
          fontfamily: 'PingFangSC-Medium',
          background: '#FFFFFF',
          color: '#333333',
          border: 'none',
          padding: 'none',
          fontSize: '14px',
          letterSpacing: '0.56px',
          'text-align': 'center'}"
                    stripe
                    style="width: 100%;margin-left: 1%"
                    @row-click="handleSelection"
                    v-show="inRecordShowDetial">
            <el-table-column label="入场时间" prop="inTime" label-width="210px"></el-table-column>
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
          <div style="float: right;" v-show="inRecordShowDetial">
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
          <el-row v-show="!inRecordShowDetial">
            <el-row style="margin-top: 1%">
              <el-col :span="7" offset="1"><span>停车场:{{ selectedInRecord.parkName }}</span></el-col>
              <el-col :span="7" offset="1"><span>通过设备:{{ selectedInRecord.inDeviceName }}</span></el-col>
              <el-col :span="8"><span>入场时间:{{ selectedInRecord.inTime }}</span></el-col>
            </el-row>
            <el-row style="margin-top: 8%">
              <el-col :span="7" offset="1"><span>车牌号:{{ selectedInRecord.plateNumber }}</span></el-col>
              <el-col :span="7" offset="1"><span>车牌颜色:{{ selectedInRecord.plateColor }}</span></el-col>
              <el-col :span="8"><span>操作员:{{ selectedInRecord.stationOperator }}</span></el-col>
            </el-row>
            <el-row style="margin-top: 8%">
              <el-col :span="15" offset="1"><span>备注:{{ selectedInRecord.remark }}</span></el-col>
              <el-col :span="8">
                <el-button type="primary" @click="inRecordShowDetial = true">返回</el-button>
                <el-button type="primary" @click="getOutRecord(selectedInRecord.inRecordId)">追踪出场记录</el-button>
              </el-col>
            </el-row>
          </el-row>
        </el-col>

      </el-row>

    </div>
    <!--    下半部分出口检测-->
    <div class="down-half">
      <el-row class="query">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="出口监测"></el-form-item>
          <el-form-item label="停车场:">
            <el-select size="small"
                       style="width: 160px"
                       v-model="downQueryList">
              <el-option label="全部" value=""/>
              <el-option label="全部" value=""></el-option>
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
                value-format="yyyy-MM-dd hh:mm:ss"
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
                value-format="yyyy-MM-dd hh:mm:ss"
            >
            </el-date-picker>
          </el-form-item>
          <!--    车牌号-->
          <el-form-item label="车牌号:">
            <el-input
                size="small"
                style="width: 160px"
                v-model="downQueryList.plateNum"
                placeholder="请输入车牌号"
            ></el-input>
          </el-form-item>
          <!--      查询按钮-->
          <el-form-item>
            <el-button type="primary" size="small" @click="downQuery">查询</el-button>
            <el-button type="primary" size="small" @click="downResetQuery"
            >重置
            </el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="data-content">
        <el-col style="height: 70%" :offset="1" :span="9">
          <img :src="selectedOutRecord.outImage" class="show"/>
        </el-col>
        <el-col :span="14">
          <el-table :cell-style="{fontfamily: 'PingFangSC-Regular',letterSpacing: '0.56px',
          fontSize: '14px',color: '#333333','text-align': 'center'}" :data="carOutRecordList" :header-cell-style="{
          fontfamily: 'PingFangSC-Medium',
          background: '#FFFFFF',
          color: '#333333',
          border: 'none',
          padding: 'none',
          fontSize: '14px',
          letterSpacing: '0.56px',
          'text-align': 'center'}"
                    stripe
                    style="width: 100%;margin-left: 1%"
                    @row-click="handleOutSelection"
                    v-show="outRecordShowDetial">
            <el-table-column label="出场时间" prop="outTime" label-width="210px"></el-table-column>
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
          <div style="float: right;" v-show="outRecordShowDetial">
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
          <el-row v-show="!outRecordShowDetial">
            <el-row style="margin-top: 1%">
              <el-col :span="7" offset="1"><span>停车场:{{ selectedOutRecord.parkName }}</span></el-col>
              <el-col :span="7" offset="1"><span>通过设备:{{ selectedOutRecord.outDeviceName }}</span></el-col>
              <el-col :span="8"><span>出场时间:{{ selectedOutRecord.outTime }}</span></el-col>
            </el-row>
            <el-row style="margin-top: 8%">
              <el-col :span="7" offset="1"><span>车牌号:{{ selectedOutRecord.plateNumber }}</span></el-col>
              <el-col :span="7" offset="1"><span>车牌颜色:{{ selectedOutRecord.plateColor }}</span></el-col>
              <el-col :span="8"><span>操作员:{{ selectedOutRecord.stationOperator }}</span></el-col>
            </el-row>
            <el-row style="margin-top: 8%">
              <el-col :span="15" offset="1"><span>备注:{{ selectedOutRecord.remark }}</span></el-col>
              <el-col :span="8">
                <el-button type="primary" @click="outRecordShowDetial = true">返回</el-button>
                <el-button type="primary" @click="getInRecord(selectedOutRecord.inRecordId)">追踪入场记录</el-button>
              </el-col>
            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 停车场下拉列表
      parkingLotList: [],
      parkingLotList2: [],
      //查询绑定
      upQueryList: [],
      downQueryList: [],
      //入场记录列表
      carInRecordList: [],
      //出场记录列表
      carOutRecordList: [],
      //查看具体数据
      inRecordShowDetial: true,
      outRecordShowDetial: true,
      //选中的记录
      selectedInRecord: {},
      selectedOutRecord: {},
      //入场记录分页数据
      upPageNum: 1,
      upPageSize: 4,
      upTotal: 5,
      //出场记录分页数据
      downPageNum: 1,
      downPageSize: 4,
      downTotal: 5
    };
  },
  mounted() {
    this.queryParking();
    this.query();
    this.downQuery();
  },
  methods: {
    //入场记录追踪出场记录
    getOutRecord(inRecordId) {
      this.$realTimeMonitor.getOutRecord(inRecordId).then(res => {
        if (res.resultEntity.list.length === 0) {
          this.$message({type: "fail", message: "没有该车出场记录！请确认该车是否离场!"});
          this.downQuery();
          return;
        }
        this.selectedOutRecord = res.resultEntity.list[0];
        this.outRecordShowDetial = false;
      });
    },
    //出场记录追踪入场记录
    getInRecord(inRecordId) {
      this.$realTimeMonitor.getInRecord(inRecordId).then(res => {
        this.selectedInRecord = res.resultEntity.list[0];
        this.inRecordShowDetial = false;
      });
    },
    //入场记录选中某行
    handleSelection(row) {
      //此处把这一行高亮
      this.selectedInRecord = row;
    },
    //出场记录选中某行
    handleOutSelection(row) {
      //此处把这一行高亮
      this.selectedOutRecord = row;
    },
    //入场记录跳页
    handleUpQuery(val) {
      this.upPageNum = val;
      this.query();
    },
    //出场记录跳页
    handleDownQuery(val) {
      this.downPageNum = val;
      this.downQuery();
    },
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    downResetQuery() {
      this.downQueryList = {}
    },
    //入场记录查询
    query() {
      const param = {
        pageNum: this.upPageNum,
        pageSize: this.upPageSize,
        parkId: this.upQueryList.parkId,
        plateNumber: this.upQueryList.plateNumber,
        startTime: this.upQueryList.minDateTime,
        endTime: this.upQueryList.maxDateTime
      };
      this.$realTimeMonitor.queryInRecord(param).then(res => {
        this.carInRecordList = res.resultEntity.list;
        this.upTotal = res.resultEntity.total;
        this.selectedInRecord = this.carInRecordList[0];
      });
    },
    //出场记录查询
    downQuery() {
      const param = {
        pageNum: this.downPageNum,
        pageSize: this.downPageSize,
        parkId: this.downQueryList.parkId,
        plateNumber: this.downQueryList.plateNumber,
        startTime: this.downQueryList.minDateTime,
        endTime: this.downQueryList.maxDateTime
      };
      this.$realTimeMonitor.queryOutRecord(param).then(res => {
        this.carOutRecordList = res.resultEntity.list;
        this.downTotal = res.resultEntity.total;
        this.selectedOutRecord = this.carOutRecordList[0];
      });
    },
    // 查询停车场下拉表单
    queryParking() {
      var that = this;
      this.parkingLotList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = '321302'"
      };
      this.$ysParking.queryDictData(param).then(res => {
        console.log("下拉表单查询数据显示", res);
        that.parkingLotList = res.data.dataList;
        console.log("下拉菜单", this.parkingLotList);
      });
    },
    //查看入场记录详情
    showDetail(item) {
      this.selectedInRecord = item;
      this.inRecordShowDetial = false;
    },
    //查看出场记录详情
    showDownDetail(item) {
      this.selectedOutRecord = item;
      this.outRecordShowDetial = false;
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
  height: 48%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

.down-half {
  width: 98%;
  height: 48%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

.query {
  width: 98%;
  height: 10%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

.data-content {
  width: 98%;
  height: 39%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}

/*查询*/
.up {
  width: 98%;
  height: 7%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 45px;
  padding-left: 1%;
  padding-top: 0.5%;
}

.show {
  height: 300px;
  width: 80%;
  padding-left: 18px;
  position: relative;
}

/* 下班部分列表部分 */
.down-up {
  width: 98%;
  height: 42%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}

.down-down {
  width: 98%;
  height: 42%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}

.span-text {
  font-size: 20px;
  width: 100%;
  height: 10%;
  margin-top: 1%;
  margin-left: 3%;
  /*background-color: red;*/
}

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #7de6f8 !important;
}

/deep/ .el-table .successSecond {
  background: #8ed3e7 !important;
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

.scroll {
  height: 60px;
  overflow: hidden;
  font-size: 0px;
  position: relative;
}

.transition {
  transition: top 1s;
}
</style>
