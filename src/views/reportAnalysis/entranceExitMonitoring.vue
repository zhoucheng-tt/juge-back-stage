<!--
    出入口监测
 * @Author:邵青阳
 * @Date: 2020-11-09 10:10:54
 * @LastEditTime: 2020-11-19 19:28:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\reportAnalysis\entranceExitMonitoring.vue
-->
<template>
  <div class="all">
    <div clfass="up">
      <!--上半部分查询-->
      <el-row>
        <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
<!--      停车场-->
          <el-form-item label="停车场:">
            <el-select v-model="queryParkId" placeholder="请选择停车场">
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
                value-format="yyyy-MM-dd hh:mm:ss"
                placeholder="请选择起始时间">
              </el-date-picker>
            <span>
                        ~
                    </span>
            <el-date-picker
              v-model="upQueryList.maxDateTime"
              type="datetime"
              placeholder="请选择截止日期"
              value-format="yyyy-MM-dd hh:mm:ss">
            </el-date-picker>
          </el-form-item>
<!--    车牌号-->
          <el-form-item label="车牌号:">
              <el-input v-model="upQueryList.plateNum" placeholder="请输入车牌号"></el-input>
          </el-form-item>
<!--      查询按钮-->
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button type="primary" @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
    <!--下半部分图片-->
    <div class="down">
      <el-row>
        <el-col :span="12" :offset="1">
          <h3>入口</h3>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="height: 70%" :offset="1" :span="9">
          <img :src="entranceImgUrl"  class="show">
        </el-col>
        <el-col :span="12">
          <div class="marquee">
            <!-- <el-scrollbar style="height: 100%"> -->
            <div class="marquee_box">
              <ul class="marquee_list" :class="{marquee_top:animate}">
                <li v-for="item in blackTextList" class="alarm-card">
                  <span>{{ item.text }}</span>
                  <span>车牌:</span>
                  <span>{{ item.plateNum }}</span>
                  <span>车型：</span>
                  <span>{{ item.carType }}</span>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="1">
          <h3>出口</h3>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="height: 70%" :offset="1" :span="9">
          <img :src="exitImgUrl" class="show">
        </el-col>
        <el-col :span="12">
          <div class="marquee">
            <!-- <el-scrollbar style="height: 100%"> -->
            <div class="marquee_box">
              <ul class="marquee_list" :class="{marquee_top:animate}">
                <li v-for="item in blackTextList" class="alarm-card">
                  <span>{{ item.text }}</span>
                  <span>车牌:</span>
                  <span>{{ item.plateNum }}</span>
                  <span>车型：</span>
                  <span>{{ item.carType }}</span>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询数据暂存处
      queryParkId: "",
      // 停车场下拉列表
      parkingLotList: [],
      //查询绑定
        upQueryList:[],
      //时间选择器绑定
      value1:'',
      //图片路径
      entranceImgUrl: require("../../assets/images/cc1.png"),
      exitImgUrl: require("../../assets/images/rc1.png"),
      //滚动效果
      animate: false,
      //滚动数据暂存
      blackTextList: [
        {
          text: "2020-08-07 17:50:40",
          plateNum: "苏F-D01043",
          carType: "小轿车"
        },
        {
          text: "2020-08-07 17:50:40",
          plateNum: "苏F-D01043",
          carType: "小轿车"
        },
        {
          text: "2020-08-07 17:50:40",
          plateNum: "苏F-D01043",
          carType: "小轿车"
        },
        {
          text: "2020-08-07 17:50:40",
          plateNum: "苏F-D01043",
          carType: "小轿车"
        }, {
          text: "2020-08-07 17:50:40",
          plateNum: "苏F-D01043",
          carType: "小轿车"
        }, {
          text: "2020-08-07 17:50:40",
          plateNum: "苏F-D01043",
          carType: "小轿车"
        },
      ]
    }
  },
  created: function () {
    setInterval(this.showMarquee, 2000);
  },
  methods: {
      //查询重置按钮
      resetQuery(){
          this.upQueryList={};
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

    showMarquee: function () {
      this.animate = true;

      setTimeout(() => {
        this.blackTextList.push(this.blackTextList[0]);
        this.blackTextList.shift();
        this.animate = false;
      }, 1000);

    }
  },
  mounted() {
    this.queryParking()
  }
}
</script>

<style scoped>
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
}


.marquee_top {
  transition: all 1s;
  margin-top: -50px
}

/* 上半部分查询部分 */
.up {
  width: 100%;
  height: 15%;
  float: left;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 80%;
  margin-top: 0.5%;
  padding-left: 2%;
}

.show {
  height: 100%;
  width: 70%;
  padding-left: 18px;
  position:relative;
}

/* 下班部分列表部分 */
.down {
  width: 100%;
  height: 85%;
  float: left;
}

.rightDown {
  width: 100%;
  height: 45%;
  overflow: hidden;
  /* overflow-y: scroll;   */
  /* background-color: lightgoldenrodyellow; */
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

#add {
  height: auto;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.marquee {
  width: 100%;
  height: 150px;
  align-items: center;
  color: #3A3A3A;
  background-color: #b3effe;
  display: flex;
  box-sizing: border-box;
}

.marquee_box {
  display: block;
  position: relative;
  width: 60%;
  height: 150px;
  overflow: hidden;
}

.marquee_list li {
  height: 150px;
  /* line-height: 30px; */
  font-size: 14px;
  padding-left: 20px;
}

.marquee_list li span {
  padding: 0 2px;
}

.marquee_list li {
  height: 150px;
  /* line-height: 30px; */
  font-size: 14px;
  padding-left: 20px;
}

.marquee_list li span {
  padding: 0 2px;
}


/*/deep/.el-scrollbar__wrap {*/
/*  overflow-x: scroll;*/
/*}*/
</style>
