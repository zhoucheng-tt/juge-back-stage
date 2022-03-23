/*
 * @Author: your name
 * @Date: 2020-08-03 14:28:33
 * @LastEditTime: 2022-03-23 14:48:45
 * @LastEditors: zhoucheng
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

import "@/utils/date.js";
// 自定义全局样式方法
// import '@/styles/element-ul.css';
Vue.use(ElementUI);

// 封装axios
import api from "./axios/index";
Vue.use(api);
import axios from 'axios'
Vue.prototype.$axios = axios

import publicVar from "./utils/publicVar";
Vue.use(publicVar)

import storage from "./utils/storage.js";
Vue.prototype.$cookie = storage;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//监听键盘事件
Vue.prototype.$keyBoard = function (vm, methodName, code) {
  document.onkeydown = function () {
    let key = window.event.keyCode;
    if (key == code) {
      vm[methodName](code); // 触发methodName事件
    }
  };
};
