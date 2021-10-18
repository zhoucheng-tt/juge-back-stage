<!--监测点流量统计-->
<template>
  <div class="all">
    <div class="up-half">
      <!--上半部查询-->
      <el-row class="upQuerySelect">
        <el-form :inline="true"
                 class="demo-form-inline">
          <el-form-item label="实时监测"></el-form-item>
          <el-form-item label="监测点:">
            <el-select size="small"
                       style="width: 160px"
                       v-model="upQueryList.parkId">
              <el-option label="全部"
                         value="" />
              <el-option v-for="(item, index) in parkingLotList"
                         :label="item.name"
                         :value="item.code"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
          <!--时间-->
          <el-form-item label="选择时间:">
            <el-date-picker v-model="upQueryList.minDateTime"
                            type="datetime"
                            size="small"
                            style="width: 160px"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            placeholder="请选择起始时间">
            </el-date-picker>
            <span>
              ~
            </span>
            <el-date-picker v-model="upQueryList.maxDateTime"
                            type="datetime"
                            size="small"
                            style="width: 160px"
                            placeholder="请选择截止日期"
                            value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
          </el-form-item>
          <!--    车牌号-->
          <el-form-item label="车牌号:">
            <el-input size="small"
                      style="width: 160px"
                      v-model="upQueryList.plateNumber"
                      placeholder="请输入车牌号"></el-input>
          </el-form-item>
          <!--      查询按钮-->
          <el-form-item>
            <el-button type="primary"
                       size="small"
                       @click="queryUpFormList">查询
            </el-button>
            <el-button size="small"
                       @click="resetQuery">重置</el-button>
          </el-form-item>
          <el-form-item label="当天流量数:">255</el-form-item>
        </el-form>
      </el-row>
      <el-row class="data-content">
        <!--左侧图片-->
        <el-row class="upImg">
          <img :src="selectedInRecord.inImage"
               class="upImg-content" />
        </el-row>
        <el-row class="upTable">
          <el-table :cell-style="{
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
                    :highlight-current-row="true"
                    @row-click="handleSelection">
            <el-table-column label="经过时间"
                             prop="inTime"
                             label-width="210px"></el-table-column>
            <el-table-column :show-overflow-tooltip="true"
                             label="车牌号"
                             prop="plateNumber" />
            <el-table-column :show-overflow-tooltip="true"
                             label="监测点名称"
                             prop="parkName" />
            <el-table-column :show-overflow-tooltip="true"
                             label="通过设备"
                             prop="inDeviceName" />
            <el-table-column :show-overflow-tooltip="true"
                             label="操作">
              <template slot-scope="scope">
                <el-button size="small"
                           type="text"
                           @click="showDetail(scope.row)">查看详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="float: right;">
            <el-pagination layout="total, prev, pager, next, jumper"
                           :page-size="upPageSize"
                           @current-change="handleUpQuery"
                           :current-page="upPageNum"
                           :total="upTotal"
                           style="height: 10%">
            </el-pagination>
          </div>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //查询绑定
      upQueryList: {},
      //入场记录分页数据
      upPageNum: 1,
      upPageSize: 11,
      upTotal: 5,
      carInRecordList: [], //入场记录列表
      parkingLotList: [], // 停车场下拉列表
      selectedInRecord: {},
      timer: null
    };
  },
  created () {
    // 实现轮询
    this.timer = setInterval(() => {
      setTimeout(this.getNewMessage(), 0);
    }, 60000);
  },
  mounted () {
    this.queryParking();
    this.queryUpList();
  },
  destroyed () {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  },
  methods: {
    //  定时任务
    getNewMessage () {
      this.queryUpList();
      this.queryDownList();
    },
    //上半部查询按钮
    queryUpFormList () {
      this.upPageNum = 1;
      this.queryUpList();
    },
    //入场记录选中某行
    handleSelection (row) {
      this.selectedInRecord = row;
    },
    //入场记录跳页
    handleUpQuery (val) {
      this.upPageNum = val;
      this.queryUpList();
    },
    //查询重置按钮
    resetQuery () {
      this.upQueryList = {};
    },
    //入场记录查询
    queryUpList () {
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
    // 查询停车场下拉表单
    queryParking () {
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
    //查看入场记录详情
    showDetail (item) {
      this.selectedInRecord = item;
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
  height: 98%;
  margin-left: 1%;
  margin-top: 0.5%;
  background-color: white;
}

.upQuerySelect {
  width: 100%;
  height: 7%;
}

.data-content {
  width: 98%;
  height: 98%;
  background-color: white;
  display: flex;
  margin-left: 1%;
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
  height: 70%;
}

.el-table .selectRow {
  background: #f8f9fa !important;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 45px;
  padding-left: 1%;
  padding-top: 0.5%;
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
