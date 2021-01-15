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

//收入对比分析
export function queryParkOpeIncomeCompAnal(param) {
  return request({
    url: "decisionAnalysisFunc/queryParkOpeIncomeCompAnal",
    method: "post",
    data: param
  });
}

//收入及欠费金额趋势分析
export function queryParkOpeIncomeArrearsAnal(param) {
  return request({
    url: "decisionAnalysisFunc/queryParkOpeIncomeArrearsAnal",
    method: "post",
    data: param
  });
}

//收入构成分析
export function queryParkOpeIncomeTypeAnal(param) {
  return request({
    url: "decisionAnalysisFunc/queryParkOpeIncomeTypeAnal",
    method: "post",
    data: param
  });
}

//停车场收入及欠费分析
export function queryParkOpeIncomeArrearsChart(param) {
  return request({
    url: "decisionAnalysisFunc/queryParkOpeIncomeArrearsChart",
    method: "post",
    data: param
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

//停车场运营指标分析图表数据接口
export function queryParkOpeIdxParkDetailAnal(param) {
  return request({
    url: "decisionAnalysisFunc/queryParkOpeIdxParkDetailAnal",
    method: "post",
    data: param
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



