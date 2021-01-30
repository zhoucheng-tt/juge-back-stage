/*
 * @Author: 邵青阳
 * @Date: 2020-10-29 13:34:33
 * @LastEditTime: 2020-11-16 09:37:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\axios\homePage\homePage.js
 */
import request from "@/utils/request";

// 登录接口
export function login(params) {
  return request({
    url: "http://123.207.189.27:7138/UserController/login",
    method: "post",
    data: params,
    flag: "out"
  });
}

export function loginOut(params) {
  return request({
    url: "http://123.207.189.27:7138/UserController/loginOut",
    method: "post",
    data: params,
    flag: "out"
  });
}
//停车场下拉代码
export function queryDict(params) {
  return request({
    url: "http://123.207.189.27:7138/UserController/queryDict",
    method: "post",
    data: params,
    flag: "out"
  });
}

// 测试接口   http://123.207.189.27:7138/queryChartData/queryChargeEarnData
export function test(params) {
  return request({
    url:
      "http://123.207.189.27:7138/EarnAnalysisController/queryChargeEarnData",
    method: "post",
    data: params,
    flag: "out"
  });
}
//首页洗车机收入  http://123.207.189.27:7138/homePageFunc/countWashFee
export function countWashFee(params) {
  return request({
    url: "http://123.207.189.27:7138/homePageFunc/countWashFee",
    method: "post",
    data: params,
    flag: "out"
  });
}

//首页充电桩收入 http://123.207.189.27:7138/homePageFunc/countChargeFee
export function countChargeFee(params) {
  return request({
    url: "http://123.207.189.27:7138/homePageFunc/countChargeFee",
    method: "post",
    data: params,
    flag: "out"
  });
}
//首页 按月分析充电桩图表
export function queryChargeEarn(params) {
  return request({
    url: "http://123.207.189.27:7138/homePageFunc/queryChargeEarn",
    method: "post",
    data: params,
    flag: "out"
  });
}

//首页按日周月分析停车数量
export function queryParkCount(params) {
  return request({
    url: "http://123.207.189.27:7138/homePageFunc/queryParkCount",
    method: "post",
    data: params,
    flag: "out"
  });
}

//总收入停车收入洗车收入 queryFees
export function queryFees(params) {
  return request({
    url: "http://123.207.189.27:7138/homePageFunc/queryFees",
    method: "post",
    data: params,
    flag: "out"
  });
}
//精洗普洗快洗  queryCarWashTypeCount
export function queryCarWashTypeCount(params) {
  return request({
    url: "http://123.207.189.27:7138/homePageFunc/queryCarWashTypeCount",
    method: "post",
    data: params,
    flag: "out"
  });
}
// 支付方式 queryPayTypeAmountPrecent
export function queryPayTypeAmountPrecent(params) {
  return request({
    url: "http://123.207.189.27:7138/homePageFunc/queryPayTypeAmountPrecent",
    method: "post",
    data: params,
    flag: "out"
  });
}
//近七日洗车金额 queryCarWashAmountRecentDays
export function queryCarWashAmountRecentDays(params) {
  return request({
    url: "http://123.207.189.27:7138/homePageFunc/queryCarWashAmountRecentDays",
    method: "post",
    data: params,
    flag: "out"
  });
}
//剩余车位数插叙 http://192.168.1.163:8000/homePageFunc/queryEmptySpace
export function queryEmptySpace(params) {
  return request({
    url: "http://123.207.189.27:7138/homePageFunc/queryEmptySpace",
    method: "post",
    data: params,
    flag: "out"
  });
}
