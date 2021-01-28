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

//总停车数量接口
//首页今日总收入接口方法
export function queryTotalIncome(params) {
  return request({
    url: "indexPageFunc/queryTotalIncome",
    method: "post",
    data: params
  });
}
//总停车数量
export function queryParkOptByParkCount(params) {
  return request({
    url: "indexPageFunc/queryParkOptByParkCount",
    method: "post",
    data: params
  });
}
//平均停车时长接口  indexPageFunc/queryParkOptByAvgParkDuration
export function queryParkOptByAvgParkDuration(params) {
  return request({
    url: "indexPageFunc/queryParkOptByAvgParkDuration",
    method: "post",
    data: params
  });
}
//车位利用率接口 indexPageFunc/queryParkOptByParkSpaceUsedRate
export function queryParkOptByParkSpaceUsedRate(params) {
  return request({
    url: "indexPageFunc/queryParkOptByParkSpaceUsedRate",
    method: "post",
    data: params
  });
}
//车位周转率 indexPageFunc/queryParkOptByParkSpaceTurnoverRate
export function queryParkOptByParkSpaceTurnoverRate(params) {
  return request({
    url: "indexPageFunc/queryParkOptByParkSpaceTurnoverRate",
    method: "post",
    data: params
  });
}
//停车场收入排行 indexPageFunc/queryParkIncomeRanking
export function queryParkIncomeRanking(params) {
  return request({
    url: "indexPageFunc/queryParkIncomeRanking",
    method: "post",
    data: params
  });
}
//缴费行为分析 indexPageFunc/queryPaymentBehaviorAnalysis
export function queryPaymentBehaviorAnalysis(params) {
  return request({
    url: "indexPageFunc/queryPaymentBehaviorAnalysis",
    method: "post",
    data: params
  });
}
//模版下载
export function downloadResource(params) {
  return request({
    url: "CommonController/downloadResource",
    method: "post",
    data: params,
    flag: "innerExt",
    responseType: "blob"
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
//首页剩余车位接口 realtimeMonitorFunc/queryParkMonitorParkSpace
// export function queryParkMonitorParkSpace(params) {
//   return request({
//     url: "realtimeMonitorFunc/queryParkMonitorParkSpace",
//     method: "post",
//     data: params
//   });
// }

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
