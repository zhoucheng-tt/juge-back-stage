/*
 * @Author: your name
 * @Date: 2020-08-03 14:28:33
 * @LastEditTime: 2020-11-19 19:24:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./vuex/store";
// 封装ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入svg
import "./assets";
import "@/utils/date.js";
// 自定义全局样式方法
// import '@/styles/element-ul.css';
Vue.use(ElementUI);
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 引入highcharts
import highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import HighchartsNoData from "highcharts/modules/no-data-to-display";
HighchartsNoData(highcharts);
highcharts3d(highcharts);

// 封装axios
import api from "./axios/index";
Vue.use(api);

import storage from "./utils/storage.js";
Vue.prototype.$cookie = storage;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
