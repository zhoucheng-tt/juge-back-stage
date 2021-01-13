<template>
  <div class="all">
    <!--上半部分入口监测-->
    <div class="up-half">
      <el-row class="query">
        <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
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
          <img :src="this.selectedInRecord.inImage" class="show"/>
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
                    @row-click = "handleSelection"
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
              <el-col :span="7" offset="1"><span>停车场:{{ this.selectedInRecord.parkName }}</span></el-col>
              <el-col :span="7" offset="1"><span>通过设备:{{ this.selectedInRecord.inDeviceName }}</span></el-col>
              <el-col :span="8"><span>入场时间:{{ this.selectedInRecord.inTime }}</span></el-col>
            </el-row>
            <el-row style="margin-top: 8%">
              <el-col :span="7" offset="1"><span>车牌号:{{ this.selectedInRecord.plateNumber }}</span></el-col>
              <el-col :span="7" offset="1"><span>车牌颜色:{{ this.selectedInRecord.plateColor }}</span></el-col>
              <el-col :span="8"><span>操作员:{{ this.selectedInRecord.stationOperator }}</span></el-col>
            </el-row>
            <el-row style="margin-top: 8%">
              <el-col :span="15" offset="1"><span>备注:{{ this.selectedInRecord.remark }}</span></el-col>
              <el-col :span="8">
                <el-button type="primary" @click="inRecordShowDetial = true">返回</el-button>
              </el-col>
            </el-row>
          </el-row>
        </el-col>

      </el-row>

    </div>
    <!--    下半部分出口检测-->
    <div class="down-half">
      <el-row class="query">
        <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
          <el-form-item label="停车场:">
            <el-select size="small"
                       style="width: 160px"
                       v-model="queryParkId">
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
                v-model="upQueryList.plateNum"
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
        <el-row>
          <el-col style="height: 70%" :offset="1" :span="9">
            <img :src="entranceImgUrl" class="show"/>
          </el-col>
          <el-col :span="12">
            <div class="index">
              <div class="scroll">
                <ul :style="{ top }" :class="{ transition: index != 0 }">
                  <li v-for="(item, index) in blackTextList">
                    {{ item.text }} {{ item.carType }} {{ item.plateNum }}
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: "",
      index: 0,
      p: "",
      // 查询数据暂存处
      queryParkId: "",
      // 停车场下拉列表
      parkingLotList: [],
      //查询绑定
      upQueryList: [],
      //时间选择器绑定
      value1: "",
      //滚动效果
      animate: true,
      //入场记录
      carInRecordList: [

      ],
      //查看具体数据
      inRecordShowDetial: true,
      //选中的记录
      selectedInRecord: {},
      upPageNum: 1,
      upPageSize: 4,
      upTotal: ''
    };
  },
  mounted() {
    this.queryParking();
    this.query();

  },
  methods: {
    handleSelection(row){
      this.selectedInRecord = row;
    },
    handleUpQuery(val) {
      this.upPageNum = val;
      this.query();
    },
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
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
        this.upTotal =  res.resultEntity.total;
        this.selectedInRecord = this.carInRecordList[0];
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
    showDetail(item) {
      this.selectedInRecord = item;
      this.inRecordShowDetial = false;
    },
  },
  destroyed() {
    clearInterval(this.p);
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
