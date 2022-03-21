/*
 * @Description:
 * @Author: 陈书瑶
 * @Date: 2020-04-01 15:09:48
 * @LastEditors: zhoucheng
 */
import axios from "axios";
import { Message } from "element-ui";
import router from "@/router/index";

// create an axios instance
const service = axios.create({
  // baseURL: "http://221.226.72.122:8888/eparking-web/",
  baseURL: '/api',
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 15000, // request timeout
});
// request interceptor
service.interceptors.request.use(
  config => {
    config.headers["userToken"] = localStorage.getItem("userToken");
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 这边是拦截代码
// response interceptor
service.interceptors.response.use(
  // 拦截方法
  response => {
    const res = response.data;
    if (res.code == "3004") {
      Message({
        message: "未登录或登录超时,请重新登录",
        type: "error",
        duration: 5 * 1000,
        showClose: true
      });
      router.push({ name: "login" });
    } else if (res.code != "00000") {
      Message({
        message: res.resultMsg || "系统错误，请联系管理员",
        type: "error",
        duration: 5 * 1000,
        showClose: true
      });
      return Promise.reject(res.resultMsg || "error");
    }
    return res;
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
