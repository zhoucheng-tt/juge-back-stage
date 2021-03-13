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
    url: "/UserController/login",
    method: "post",
    data: params
  });
}

export function loginOut(params) {
  return request({
    url: "/UserController/loginOut",
    method: "post",
    data: params
  });
}
//停车场下拉代码
export function queryDict(params) {
  return request({
    url: "/UserController/queryDict",
    method: "post",
    data: params
  });
}

// 测试接口   /queryChartData/queryChargeEarnData
export function test(params) {
  return request({
    url: "/EarnAnalysisController/queryChargeEarnData",
    method: "post",
    data: params
  });
}
//首页洗车机收入  /homePageFunc/countWashFee
export function countWashFee(params) {
  return request({
    url: "/homePageFunc/countWashFee",
    method: "post",
    data: params
  });
}

//首页充电桩收入 /homePageFunc/countChargeFee
export function countChargeFee(params) {
  return request({
    url: "/homePageFunc/countChargeFee",
    method: "post",
    data: params
  });
}

//首页 按月分析充电桩图表
export function queryChargeEarn(params) {
  return request({
    url: "/homePageFunc/queryChargeEarn",
    method: "post",
    data: params
  });
}

//首页按日周月分析停车数量
export function queryParkCount(params) {
  return request({
    url: "/homePageFunc/queryParkCount",
    method: "post",
    data: params
  });
}

//总收入停车收入洗车收入 queryFees
export function queryFees(params) {
  return request({
    url: "/homePageFunc/queryFees",
    method: "post",
    data: params
  });
}
//精洗普洗快洗  queryCarWashTypeCount
export function queryCarWashTypeCount(params) {
  return request({
    url: "/homePageFunc/queryCarWashTypeCount",
    method: "post",
    data: params
  });
}
// 支付方式 queryPayTypeAmountPrecent
export function queryPayTypeAmountPrecent(params) {
  return request({
    url: "/homePageFunc/queryPayTypeAmountPrecent",
    method: "post",
    data: params
  });
}
//近七日洗车金额 queryCarWashAmountRecentDays
export function queryCarWashAmountRecentDays(params) {
  return request({
    url: "homePageFunc/queryCarWashAmountRecentDays",
    method: "post",
    data: params,
    flag: "out"
  });
}
//剩余车位数查询 http://192.168.1.163:8000/homePageFunc/queryEmptySpace
export function queryEmptySpace(params) {
  return request({
    url: "/homePageFunc/queryEmptySpace",
    // url: "http://192.168.1.163:8000/homePageFunc/queryEmptySpace",
    method: "post",
    data: params
    // flag: "out"
  });
}
//被占用的车位Id http://192.168.1.163:8000/homePageFunc/queryParkSpaceStatus
export function queryParkSpaceStatus(params) {
  return request({
    url: "/homePageFunc/queryParkSpaceStatus",
    // url: "http://192.168.1.163:8000//homePageFunc/queryParkSpaceStatus",
    method: "post",
    data: params
    // flag: "out"
  });
}

//停车数量 operateController/queryParkTimes
export function queryPark7Days(param) {
  return request({
    url: "/operateController/queryPark7Days",
    method: "post",
    data: param
    // url: "http://192.168.1.163:8000/operateController/queryPark7Days",
    // flag: "out"
  });
}
// 平均停车时长 operateController/avgParkDuration
export function avgParkDuration7Days(param) {
  return request({
    url: "/operateController/avgParkDuration7Days",
    method: "post",
    data: param
    // url: "http://192.168.1.163:8000/operateController/avgParkDuration7Days",
    // flag: "out"
  });
}
// 车位利用率 operateController/usageRate
export function usageRate7Days(param) {
  return request({
    url: "/operateController/usageRate7Days",
    method: "post",
    data: param
    // url: "http://192.168.1.163:8000/operateController/usageRate7Days",
    // flag: "out"
  });
}
//车位周转率 operateController/turnoverRate
export function turnoverRate7Days(param) {
  return request({
    url: "/operateController/turnoverRate7Days",
    method: "post",
    data: param
    // url: "http://192.168.1.163:8000/operateController/turnoverRate7Days",
    // flag: "out"
  });
}
//洗车机近七日洗车次数统计 homePageFunc/queryCarWashTiemsRecentDays
export function queryCarWashTiemsRecentDays(param) {
  return request({
    url: "/homePageFunc/queryCarWashTiemsRecentDays",
    method: "post",
    data: param
    // url: "http://192.168.1.163:8000/homePageFunc/queryCarWashTiemsRecentDays",
    // flag: "out"
  });
}
