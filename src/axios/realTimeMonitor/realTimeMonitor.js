import request from "@/utils/request";
//洗车机运营分析洗车机收入分析统计
export function queryCarWashIncomeAnalysis(param) {
  return request({
    url: "/CarWashAnalysis/queryCarWashIncomeAnalysis",
    method: "post",
    data: param
  });
}
//洗车运营分析洗车类型收入统计分析
export function queryCarWashTypeIncomeAnalysis(param) {
  return request({
    url: "/CarWashAnalysis/queryCarWashTypeIncomeAnalysis",
    method: "post",
    data: param
  });
}
//洗车机运营分析洗车次数统计分析
export function queryCarWashCountAnalysis(param) {
  return request({
    url: "/CarWashAnalysis/queryCarWashCountAnalysis",
    method: "post",
    data: param
  });
}
//洗车运营分析 洗车类型次数统计分析
export function queryCarWashTypeTimesAnalysis(param) {
  return request({
    url: "/CarWashAnalysis/queryCarWashTypeTimesAnalysis",
    method: "post",
    data: param
  });
}

//洗车机信息查询
export function queryWashData(param) {
  return request({
    url: "/RealTimeMonitorController/washData",
    method: "post",
    data: param
  });
}

//洗车收入分析
export function queryWashCount(param) {
  return request({
    url: "/RealTimeMonitorController/washCarCount",
    method: "post",
    data: param
  });
}

//洗车收入分析
export function queryWashEarn(param) {
  return request({
    url: "/RealTimeMonitorController/washEarn",
    method: "post",
    data: param
  });
}

//入场记录列表查询
export function queryInRecord(param) {
  return request({
    url: "/RealTimeMonitorController/getRecentCarInRecord",
    method: "post",
    data: param
  });
}

//出场记录列表查询
export function queryOutRecord(param) {
  return request({
    url: "/RealTimeMonitorController/getRecentCarOutRecord",
    method: "post",
    data: param
  });
}

//入场追踪出场
export function getOutRecord(param) {
  return request({
    url: "/RealTimeMonitorController/getCarOutRecordByInRecordId",
    method: "post",
    data: param
  });
}

//出场追踪入场
export function getInRecord(param) {
  return request({
    url: "/RealTimeMonitorController/getCarInRecordByInRecordId",
    method: "post",
    data: param
  });
}
