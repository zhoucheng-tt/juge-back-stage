<template>
  <el-container class="header-style">
    <!-- <div class="header-tittle">交通工程建设监管系统</div> -->
    <div class="G524-project-title">
      溧水经济开发区管委会智慧停车管理平台
    </div>
    <div class="header-setting menu-box">
      <div style="width: 100%;height: 50%;color: #FFF;">
        {{ dateTimeValue }}
      </div>
      <div style="width: 100%;height: 50%;color: #FFF;">
        <span style="position: relative;color: #FFF;">{{
          weatherList.type
        }}</span>
        <span style="position: relative;color: #FFF;"
          >{{ weatherList.low }}/{{ weatherList.high }}</span
        >
      </div>
    </div>
    <div class="header-setting menu-box" style="right: 100px;font-size: 15px;">
      <div style="width: 100%;height: 60%;color: #FFF;">
        {{ userName }}
        <span
          style="position: relative;right: 1px;float: right;color: #CCC;cursor:pointer;"
          @click="loginOut()"
          >退出</span
        >
      </div>
    </div>
  </el-container>
</template>

<script>
import $ from "jquery";
// import Cookies from 'js-cookie'
export default {
  data() {
    return {
      menuValue: "",
      dateTimeValue: "",

      userName: "",

      weatherList: {}
    };
  },
  methods: {
    // 首页时间和天气展示，天气请求的是线上的一个在线列表
    toMenu(value) {
      // Cookies.set("menuValue", value);
      this.$router.push(value);
    },
    loginOut() {
      localStorage.removeItem("userToken");
      this.$router.push("/");
    },
    getDateTime() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      var day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      var hour = date.getHours();
      var minute = date.getMinutes();
      if (minute < 10) {
        minute = "0" + minute;
      }
      var second = date.getSeconds();
      if (second < 10) {
        second = "0" + second;
      }

      this.dateTimeValue =
        year +
        "." +
        month +
        "." +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second +
        "";
    },

    getWeatherShow() {
      var _this = this;
      $.ajax({
        url: "http://wthrcdn.etouch.cn/weather_mini?city=南京",
        type: "get",
        success: function(data) {
          var weatherResults = JSON.parse(data).data;
          var temp = weatherResults.forecast[0];
          _this.weatherList.high = temp.high.substring(3, 6);
          _this.weatherList.low = temp.low.substring(3, 6);
          _this.weatherList.type = temp.type;
          console.log(_this.weatherList);
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to.path);
      // this.menuValue = to.path.split("/")[1];
    }
  },
  mounted() {
    setInterval(() => {
      this.getDateTime();
    }, 1000);
    this.userName = localStorage["userName"];

    this.getWeatherShow();
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.header-style {
  width: 100%;
  height: 100%;
  line-height: 64px;
  text-align: center;
  color: white;
  background: #043d87;

  .G524-project-title {
    float: left;
    margin-left: 20px;
    ont-family: PingFangSC-Medium;
    font-size: 22px;
    color: #ffffff;
    letter-spacing: 0.23px;
  }

  .title-weather {
    display: inline-block;
    width: 300px;
    position: absolute;
    right: 250px;
  }

  .personal-info {
    position: absolute;
    right: 10px;
    width: 200px;
  }
}

.menu-box {
  position: relative;
  font-size: 12px;
}

.header-setting {
  width: 130px;
  height: 38px;
  margin-left: 20px;
  margin-top: 0px;
  float: left;
  right: 300px;
  position: absolute;
}
</style>
