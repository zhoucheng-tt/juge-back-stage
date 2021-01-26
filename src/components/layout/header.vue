<template>
  <div class="header-style">
    <span class="head-title">溧水经济开发区管委会智慧停车管理平台</span>
    <!--天气类型-->
    <span class="head-weatherType">{{ weatherList.type }}</span>
    <!--最高最低天气-->
    <span class="head-weatheroc"
      >{{ weatherList.low }}/{{ weatherList.high }}</span
    >
    <!--时间-->
    <span class="head-time">{{ dateTimeValue }}</span>
    <!--用户名-->
    <span>{{ userName }}</span>
    <!--退出-->
    <span @click="loginOut()">
      <div class="exit">
        <svg
          width="36px"
          height="36px"
          viewBox="0 0 36 36"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>nav_exit</title>
          <defs>
            <filter
              x="-0.6%"
              y="-18.8%"
              width="101.2%"
              height="137.5%"
              filterUnits="objectBoundingBox"
              id="filter-1"
            >
              <feOffset
                dx="0"
                dy="2"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="2"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0.433839645   0 0 0 0 0.47302197   0 0 0 0 0.520040761  0 0 0 0.1 0"
                type="matrix"
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
              ></feColorMatrix>
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <polygon
              id="path-2"
              points="0.6671 0 15.612 0 15.612 17.9999 0.6671 17.9999"
            ></polygon>
          </defs>
          <g
            id="交通"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="top"
              transform="translate(-1859.000000, -14.000000)"
              filter="url(#filter-1)"
            >
              <g
                id="nav_functional_area"
                transform="translate(1857.000000, 0.000000)"
              >
                <g id="nav_exit" transform="translate(11.000000, 23.000000)">
                  <path
                    d="M7.6053,11.7015 C7.4173,11.8885 7.4173,12.1925 7.6043,12.3805 C7.6973,12.4745 7.8203,12.5215 7.9433,12.5215 C8.0663,12.5215 8.1883,12.4755 8.2823,12.3825 L11.1013,9.5775 C11.3883,9.2915 11.3883,8.8265 11.1023,8.5405 L8.2833,5.7245 C8.0953,5.5365 7.7923,5.5365 7.6043,5.7245 C7.4173,5.9115 7.4173,6.2165 7.6053,6.4035 L9.7823,8.5785 L0.4803,8.5785 C0.2143,8.5785 0.0003,8.7935 0.0003,9.0585 C0.0003,9.3235 0.2143,9.5385 0.4803,9.5385 L9.7793,9.5385 L7.6053,11.7015 Z"
                    id="Fill-1"
                    fill="#FFFFFF"
                  ></path>
                  <g id="Group-5" transform="translate(2.000000, 0.000000)">
                    <mask id="mask-3" fill="white">
                      <use xlink:href="#path-2"></use>
                    </mask>
                    <g id="Clip-4"></g>
                    <path
                      d="M15.3201,0.2919 C15.1261,0.0969 14.8711,-0.0001 14.6161,-0.0001 L1.6631,-0.0001 C1.4081,-0.0001 1.1531,0.0969 0.9591,0.2919 C0.7641,0.4859 0.6671,0.7409 0.6671,0.9969 L0.6671,4.3879 L0.6671,4.9879 L0.6671,5.5189 C0.6671,5.7829 0.8841,5.9989 1.1531,5.9989 C1.4211,5.9989 1.6381,5.7829 1.6381,5.5189 L1.6381,4.9879 L1.6381,4.3909 L1.6381,0.9699 C1.6381,0.9699 14.6371,0.9659 14.6401,0.9689 L14.6411,0.9699 L14.6411,17.0289 C14.6411,17.0289 1.6411,17.0319 1.6381,17.0289 L1.6381,12.5089 L1.6381,12.5089 L1.6381,12.4819 C1.6381,12.2169 1.4211,12.0019 1.1531,12.0019 C0.8841,12.0019 0.6671,12.2169 0.6671,12.4819 L0.6671,12.5089 L0.6671,13.6099 L0.6671,17.0039 C0.6671,17.2579 0.7641,17.5129 0.9591,17.7069 C1.1531,17.9019 1.4081,17.9999 1.6631,17.9999 L14.6161,17.9999 C14.8711,17.9999 15.1261,17.9019 15.3201,17.7069 C15.5151,17.5129 15.6121,17.2579 15.6121,17.0039 L15.6121,0.9969 C15.6121,0.7409 15.5151,0.4859 15.3201,0.2919"
                      id="Fill-3"
                      fill="#FFFFFF"
                      mask="url(#mask-3)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </span>
  </div>
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
  mounted() {
    setInterval(() => {
      this.getDateTime();
    }, 1000);
    // this.userName = localStorage["userName"];
    this.userName = localStorage.getItem("userName");
    this.getWeatherShow();
  },

  methods: {
    // 首页时间和天气展示，天气请求的是线上的一个在线列表
    toMenu(value) {
      // Cookies.set("menuValue", value);
      this.$router.push(value);
    },
    loginOut() {
      alert("aaa)");
      this.$homePage.loginOut(1).then(res=>{
        localStorage.removeItem("userToken");
        this.$router.push("/");
      });
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
  }
};
</script>

<style scoped>
.header-style {
  width: 100%;
  height: 64px;
  line-height: 64px;
  display: flex;
  background: #043d87;
  color: white;
}
.head-title {
  width: 30%;
  height: 64px;
  line-height: 64px;
  font-size: 26px;
  text-align: left;
  padding-left: 40px;
}

.head-weatherType {
  width: 3%;
  text-align: left;
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  margin-left: 45%;
}
.head-weatheroc {
  width: 3%;
  text-align: left;
  height: 64px;
  line-height: 66px;
  font-size: 14px;
}
.head-time {
  width: 8%;
  text-align: left;
  height: 64px;
  line-height: 66px;
  margin-left: 1%;
  font-size: 14px;
}
.exit {
  margin-top: 12px;
}
</style>
