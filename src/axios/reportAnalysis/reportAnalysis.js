import request from "@/utils/request";

//支付台账分析列表查询
export function queryAccountStatisList(param) {
  return request({
    url: "http://123.207.189.27:7138/PayStatisticController/queryPayStatistic",
    method: "post",
    data: param,
    flag: "out"
  });
}

//缴费金额趋势分析近七天
export function sevenPayAna(param) {
  return request({
    url: "http://123.207.189.27:7138/PayStatisticController/sevenPayAna",
    method: "post",
    data: param,
    flag: "out"
  });
}

//缴费金额趋势分析近30天
export function thirtyPayAna(param) {
  return request({
    url: "http://123.207.189.27:7138/PayStatisticController/thirtyPayAna",
    method: "post",
    data: param,
    flag: "out"
  });
}
//缴费金额趋势分析近一年
export function PayAna365(param) {
  return request({
    url: "http://123.207.189.27:7138/PayStatisticController/PayAna365",
    method: "post",
    data: param,
    flag: "out"
  });
}

//缴费组成分析
export function paymentAnalysis(param) {
  return request({
    url: "http://123.207.189.27:7138/PayStatisticController/payMethodAna",
    method: "post",
    data: param,
    flag: "out"
  });
}



//报表分析日报
export function queryOpeReportStatisDayAnal(param) {
  return request({
    url: "http://123.207.189.27:7138/EarnAnalysisController/reportDate",
    method: "post",
    data: param,
    flag: "out"
  });
}

//报表分析月报
export function queryOpeReportStatisMonthAnal(param) {
  return request({
    url: "http://123.207.189.27:7138/EarnAnalysisController/reportMonth",
    method: "post",
    data: param,
    flag: "out"
  });
}

//报表分析年报
export function queryOpeReportStatisYearAnal(param) {
  return request({
    url: "http://123.207.189.27:7138/EarnAnalysisController/reportYear",
    method: "post",
    data: param,
    flag: "out"
  });
}

//充电桩收入分析
export function queryChargeEarn(param) {
  return request({
    url:
      "http://123.207.189.27:7138/EarnAnalysisController/queryChargeEarnData",
    method: "post",
    header: {
      "content-type": "application/json;charset=utf-8"
    },
    data: param,
    flag: "out"
  });
}

//洗车站收入分析
export function queryWashEarn(param) {
  return request({
    url: "http://123.207.189.27:7138/EarnAnalysisController/queryWashEarnData",
    method: "post",
    header: {
      "content-type": "application/json;charset=utf-8"
    },
    data: param,
    flag: "out"
  });
}


//停车场运营指标分析平均充电时间
export function queryAvgChargeTime(param) {
  return request({
    url: "http://123.207.189.27:7138/EarnAnalysisController/avgChargeTime",
    method: "post",
    header: {
      "content-type": "application/json;charset=utf-8"
    },
    data: param,
    flag: "out"
  });
}

//停车场运营指标分析平均充电时间
export function queryAvgWashTime(param) {
  return request({
    url: "http://123.207.189.27:7138/EarnAnalysisController/avgWashTime",
    method: "post",
    header: {
      "content-type": "application/json;charset=utf-8"
    },
    data: param,
    flag: "out"
  });
}

//停车场运营收入分析表格  http://192.168.1.163:8000/operateController/queryData
export function queryData(param) {
  return request({
    url: "http://123.207.189.27:7138/operateController/queryData",
    method: "post",
    data: param,
    flag: "out"
  });
}
//运营指标分析 停车次数 http://192.168.1.163:8000/operateController/queryParkTimes
export function queryParkTimes(param) {
  return request({
    url: "http://123.207.189.27:7138/operateController/queryParkTimes",
    method: "post",
    data: param,
    flag: "out"
  });
}
//运营指标分析 平均停车时长 http://192.168.1.163:8000/operateController/avgParkDuration
export function avgParkDuration(param) {
  return request({
    url: "http://123.207.189.27:7138/operateController/avgParkDuration",
    method: "post",
    data: param,
    flag: "out"
  });
}
//运营指标分析 车位利用率 http://192.168.1.163:8000/operateController/usageRate
export function usageRate(param) {
  return request({
    url: "http://123.207.189.27:7138/operateController/usageRate",
    method: "post",
    data: param,
    flag: "out"
  });
}
//运营指标分析 车位周转率 http://192.168.1.163:8000/operateController/turnoverRate
export function turnoverRate(param) {
  return request({
    url: "http://123.207.189.27:7138/operateController/turnoverRate",
    method: "post",
    data: param,
    flag: "out"
  });
}

export function carWasherAlarm(param) {
  return request({
    url: "http://123.207.189.27:7138/CarWasherController/queryAlarmInfo",
    method: "post",
    data: param,
    flag: "out"
  });
}

export function alarmTypeAna(param) {
  return request({
    url: "http://123.207.189.27:7138/CarWasherController/alarmTypeAna",
    method: "post",
    data: param,
    flag: "out"
  });
}

export function alarmRecent7day(param) {
  return request({
    url: "http://123.207.189.27:7138/CarWasherController/alarmRecent7day",
    method: "post",
    data: param,
    flag: "out"
  });
}

//运营收入分析 缴费类型统计分析图表今日昨日
export function queryChargeTypeByHours(param) {
  return request({
    url: "http://123.207.189.27:7138/IncomeAnalysis/queryChargeTypeByHours",
    method: "post",
    data: param,
    flag: "out"
  });
}
//运营收入分析 缴费类型统计分析图表本周本月
export function queryChargeTypeByDays(param) {
  return request({
    url: "http://123.207.189.27:7138/IncomeAnalysis/queryChargeTypeByDays",
    method: "post",
    data: param,
    flag: "out"
  });
}
//运营收入分析 停车收入构成统计分析
export function queryChargePercent(param) {
  return request({
    url: "http://123.207.189.27:7138/IncomeAnalysis/queryChargePercent",
    method: "post",
    data: param,
    flag: "out"
  });
}
//运营收入分析 停车收费统计分析
export function queryAmountAnalysis(param) {
  return request({
    url: "http://123.207.189.27:7138/IncomeAnalysis/queryAmountAnalysis",
    method: "post",
    data: param,
    flag: "out"
  });
}
