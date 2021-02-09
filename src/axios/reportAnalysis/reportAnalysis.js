import request from "@/utils/request";
//运营指标分析表格  operateController/queryData
export function queryData(param) {
  return request({
    url: "/operateController/queryData",
    method: "post",
    data: param
  });
}

//运营收入分析 停车收费统计分析
export function queryAmountAnalysis(param) {
  return request({
    url: "/IncomeAnalysis/queryAmountAnalysis",
    method: "post",
    data: param
  });
}
//运营收入分析 停车收入构成统计分析
export function queryChargePercent(param) {
  return request({
    url: "/IncomeAnalysis/queryChargePercent",
    method: "post",
    data: param
  });
}
//运营收入分析 缴费类型统计分析 IncomeAnalysis/queryChargeType
export function queryChargeType(param) {
  return request({
    url: "/IncomeAnalysis/queryChargeType",
    method: "post",
    data: param
  });
}
//停车收入对比分析 IncomeAnalysis/queryIncomeContrast
export function queryIncomeContrast(param) {
  return request({
    url: "/IncomeAnalysis/queryIncomeContrast",
    method: "post",
    data: param
  });
}
//报表分析日报
export function queryOpeReportStatisDayAnal(param) {
  return request({
    url: "/EarnAnalysisController/reportDate",
    method: "post",
    data: param
  });
}
//报表分析月报
export function queryOpeReportStatisMonthAnal(param) {
  return request({
    url: "/EarnAnalysisController/reportMonth",
    method: "post",
    data: param
  });
}
//报表分析年报
export function queryOpeReportStatisYearAnal(param) {
  return request({
    url: "/EarnAnalysisController/reportYear",
    method: "post",
    data: param
  });
}
//支付台账分析列表查询
export function queryAccountStatisList(param) {
  return request({
    url: "/PayStatisticController/queryPayStatistic",
    method: "post",
    data: param
  });
}
//缴费金额趋势分析近七天
export function sevenPayAna(param) {
  return request({
    url: "/PayStatisticController/sevenPayAna",
    method: "post",
    data: param
  });
}
//缴费金额趋势分析近30天
export function thirtyPayAna(param) {
  return request({
    url: "/PayStatisticController/thirtyPayAna",
    method: "post",
    data: param
  });
}
//缴费金额趋势分析近一年
export function PayAna365(param) {
  return request({
    url: "/PayStatisticController/PayAna365",
    method: "post",
    data: param
  });
}
//缴费组成分析
export function paymentAnalysis(param) {
  return request({
    url: "/PayStatisticController/payMethodAna",
    method: "post",
    data: param
  });
}

//运营指标分析平均充电时间
export function queryAvgChargeTime(param) {
  return request({
    url: "/EarnAnalysisController/avgChargeTime",
    method: "post",
    header: {
      "content-type": "application/json;charset=utf-8"
    },
    data: param
  });
}

//充电桩收入分析
export function queryChargeEarn(param) {
  return request({
    url: "/EarnAnalysisController/queryChargeEarnData",
    method: "post",
    header: {
      "content-type": "application/json;charset=utf-8"
    },
    data: param
  });
}

//洗车站收入分析
export function queryWashEarn(param) {
  return request({
    url: "/EarnAnalysisController/queryWashEarnData",
    method: "post",
    header: {
      "content-type": "application/json;charset=utf-8"
    },
    data: param
  });
}
//洗车机报警列表查询
export function carWasherAlarm(param) {
  return request({
    url: "/CarWasherController/queryAlarmInfo",
    method: "post",
    data: param
  });
}

//洗车机报警类型分析
export function alarmTypeAna(param) {
  return request({
    url: "/CarWasherController/alarmTypeAna",
    method: "post",
    data: param
  });
}
//洗车机报警近七天
export function alarmRecent7day(param) {
  return request({
    url: "/CarWasherController/alarmRecent7day",
    method: "post",
    data: param
  });
}
//运营指标分析停车数量 operateController/queryParkTimes
export function queryParkTimes(param) {
  return request({
    url: "/operateController/queryParkTimes",
    method: "post",
    data: param
    // flag: "out"
  });
}
//运营指标分析 平均停车时长 operateController/avgParkDuration
export function avgParkDuration(param) {
  return request({
    url: "/operateController/avgParkDuration",
    method: "post",
    data: param
    // flag: "out"
  });
}
//运营指标分析 车位利用率 operateController/usageRate
export function usageRate(param) {
  return request({
    url: "/operateController/usageRate",
    // url: "http://192.168.1.163:8000/operateController/usageRate",
    method: "post",
    data: param,
    flag: "out"
  });
}
//运营指标分析 车位周转率 operateController/turnoverRate
export function turnoverRate(param) {
  return request({
    url: "/operateController/turnoverRate",
    // url: "http://192.168.1.163:8000/operateController/turnoverRate",
    method: "post",
    data: param,
    flag: "out"
  });
}
//停车场运营指标分析平均充电时间
// export function queryAvgWashTime(param) {
//   return request({
//     url: "/EarnAnalysisController/avgWashTime",
//     method: "post",
//     header: {
//       "content-type": "application/json;charset=utf-8"
//     },
//     data: param,
//
//   });
// }
