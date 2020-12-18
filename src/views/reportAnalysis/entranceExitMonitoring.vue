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
    <div class="up">
      <!--上半部分查询-->
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <!--      停车场-->
        <el-form-item label="停车场:">
          <el-select
            size="small"
            style="width: 160px"
            v-model="queryParkId"
            placeholder="请选择停车场"
          >
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
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!--下半部分图片-->
    <el-row class="down-up">
      <div class="span-text">入口数据</div>
      <el-row>
        <el-col style="height: 70%" :offset="1" :span="9">
          <img :src="entranceImgUrl" class="show" />
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

    <el-row class="down-down">
      <el-row class="span-text">出口数据</el-row>
      <el-row>
        <el-col style="height: 70%" :offset="1" :span="9">
          <img :src="exitImgUrl" class="show" />
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
      </el-row></el-row
    >
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
      //图片路径
      entranceImgUrl: require("../../assets/images/cc1.png"),
      exitImgUrl: require("../../assets/images/rc1.png"),
      //滚动效果
      animate: true,
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
        }
      ]
    };
  },
  mounted() {
    this.queryParking();
    this.goScroll();
  },
  methods: {
    goScroll() {
      var _this = this;
      this.p = setInterval(() => {
        console.log(22);
        _this.top = -60 * _this.index + "px";
        if (_this.index >= this.blackTextList.length + 1) {
          _this.index = 0;
          _this.top = -0 + "px";
          clearInterval(_this.p);
          _this.continueScroll();
        } else {
          _this.index++;
        }
      }, 1000);
    },
    continueScroll() {
      var _this = this;
      setTimeout(() => {
        _this.index = 1;
        _this.top = -60 * this.index + "px";
        _this.index++;
        this.goScroll();
      }, 100);
    },
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    query() {},
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
    }
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
  height: 280px;
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
  margin-top: 2%;
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
  width: 80%;
  height: 60px;
  line-height: 60px;
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
