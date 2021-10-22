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
                       v-model="upQueryList.deviceId">
              <el-option value=""
                         label="全部"></el-option>
              <el-option v-for="(item, index) in cameraList"
                         :label="item.name"
                         :value="item.code"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择时间:">
            <el-date-picker v-model="upQueryList.startTime"
                            type="datetime"
                            size="small"
                            style="width: 185px"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            placeholder="请选择起始时间">
            </el-date-picker>
            <span>~</span>
            <el-date-picker v-model="upQueryList.endTime"
                            type="datetime"
                            size="small"
                            style="width: 185px"
                            placeholder="请选择截止日期"
                            value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="车牌号:">
            <el-input size="small"
                      style="width: 160px"
                      v-model="upQueryList.plateNumber"
                      placeholder="请输入车牌号"></el-input>
          </el-form-item>
          <!--查询按钮-->
          <el-form-item>
            <el-button type="primary"
                       size="small"
                       @click="queryUpFormList">查 询</el-button>
            <el-button size="small"
                       @click="resetQuery">重 置</el-button>
          </el-form-item>
          <el-form-item label="流量总数:"> {{flowMonitorNumber}}</el-form-item>
        </el-form>
      </el-row>
      <el-row class="data-content">
        <!--左侧图片-->
        <el-row class="upImg">
          <img :src="imageLeft"
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
                    :data="flowList"
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
            <el-table-column :show-overflow-tooltip="true"
                             label="车牌号"
                             prop="plateNumber" />
            <el-table-column :show-overflow-tooltip="true"
                             label="车牌颜色"
                             prop="plateColor" />
            <el-table-column label="经过时间"
                             prop="time"
                             label-width="210px" />
            <el-table-column :show-overflow-tooltip="true"
                             label="监测点名称"
                             prop="deviceName" />
          </el-table>
          <div style="float: right;">
            <el-pagination layout="total, prev, pager, next, jumper"
                           :page-size="pageSize"
                           @current-change="handleUpQuery"
                           :current-page="pageNum"
                           :total="total"
                           style="height: 10%">
            </el-pagination>
          </div>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
// const imageUrl = "http://221.226.72.122:8888/images/"
const imageUrl = "http://123.207.189.27:7182/images/"
// const imageUrl = "http://192.168.1.29:8000/images"
export default {
  data () {
    return {
      //查询绑定
      upQueryList: {
        deviceId: "",
        startTime: "",
        endTime: ""
      },
      // 分页
      pageNum: 1,
      pageSize: 11,
      total: 5,
      flowList: [], //流量列表
      flowMonitorNumber: 0, // 当天流量数
      imageLeft: "",// 左侧图片
      cameraList: [], // 监测点下拉列表
      selectRow: {}, // 选中行数据
      timer: null // 轮询
    };
  },
  created () {
    // 实现轮询
    this.timer = setInterval(() => {
      setTimeout(this.getNewMessage(), 0);
    }, 60000);
  },
  mounted () {
    this.queryToday();
    this.queryCamera();
    this.queryCurrentFlowNumber()
    this.queryFlowList();
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
      this.queryCurrentFlowNumber()
      this.queryFlowList();
    },
    //选中某行
    handleSelection (row) {
      this.selectRow = row;
      this.imageLeft = imageUrl + this.selectRow.image
    },
    queryToday () {
      // 获取当日日期
      let today = new Date();
      today.setTime(today.getTime());
      let t = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      this.upQueryList.startTime = t + " " + "00:00:00"
      this.upQueryList.endTime = t + " " + "23:59:59"
    },
    // 查询当天流量数
    queryCurrentFlowNumber () {
      let info = {
        deviceId: this.upQueryList.deviceId,
        startTime: this.upQueryList.startTime + " " + "00:00:00",
        endTime: this.upQueryList.endTime + " " + "23:59:59",
        plateNumber: this.upQueryList.plateNumber
      }
      this.$trafficstatistics.queryTrafficRecordCount(info).then(res => {
        this.flowMonitorNumber = res.resultEntity
      })
    },
    // 流量列表查询
    queryFlowList () {
      const param = {
        deviceId: this.upQueryList.deviceId,
        plateNumber: this.upQueryList.plateNumber,
        startTime: this.upQueryList.startTime + " " + "00:00:00",
        endTime: this.upQueryList.endTime + " " + "23:59:59",
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      };
      this.$trafficstatistics.queryTrafficRecord(param).then(res => {
        this.flowList = res.resultEntity.list;
        this.total = res.resultEntity.total;
        this.imageLeft = imageUrl + res.resultEntity.list[0].image
      });
    },
    // 分页
    handleUpQuery (val) {
      this.pageNum = val;
      this.queryFlowList();
    },
    //上半部查询按钮
    queryUpFormList () {
      this.pageNum = 1;
      this.queryFlowList();
      this.queryCurrentFlowNumber()
    },
    // 重置按钮
    resetQuery () {
      let today = new Date();
      today.setTime(today.getTime());
      let t = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      this.upQueryList = {
        deviceId: "",
        plateNumber: "",
        startTime: t + " " + "00:00:00",
        endTime: t + " " + "23:59:59",
        pageNum: 1,
        pageSize: this.pageSize,
      };
      this.queryFlowList();
      this.queryCurrentFlowNumber()
    },
    // 查询摄像头下拉表单
    queryCamera () {
      this.cameraList = [];
      const param = {
        "columnName": ["device_id", "device_name"],
        "tableName": "t_bim_camera",
        "whereStr": []
      };
      this.$homePage.queryDict(param).then(res => {
        this.cameraList = res.resultEntity;
      });
    },
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
  width: 40%;
  height: 450px;
}
.upImg-content {
  width: 100%;
  height: 100%;
}
.upTable {
  width: 60%;
  height: 95%;
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
  text-align: left;
  margin: 0;
  font-size: 14px;
}
</style>
