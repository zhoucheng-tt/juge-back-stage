import request from "@/utils/request";

//洗车机信息查询
export function queryWashData(param) {
  return request({
    url: "http://123.207.189.27:7138/RealTimeMonitorController/washData",
    method: "post",
    data: param,
    flag: "out"
  });
}

//洗车收入分析
export function queryWashCount(param) {
  return request({
    url: "http://123.207.189.27:7138/RealTimeMonitorController/washCarCount",
    method: "post",
    data: param,
    flag: "out"
  });
}

//洗车收入分析
export function queryWashEarn(param) {
  return request({
    url: "http://123.207.189.27:7138/RealTimeMonitorController/washEarn",
    method: "post",
    data: param,
    flag: "out"
  });
}

export function queryInRecord(param) {
  return request({
    url:
      "http://123.207.189.27:7138/RealTimeMonitorController/getRecentCarInRecord",
    method: "post",
    data: param,
    flag: "out"
  });
}

export function queryOutRecord(param) {
  return request({
    url:
      "http://123.207.189.27:7138/RealTimeMonitorController/getRecentCarOutRecord",
    method: "post",
    data: param,
    flag: "out"
  });
}

export function getOutRecord(param) {
  return request({
    url:
      "http://123.207.189.27:7138/RealTimeMonitorController/getCarOutRecordByInRecordId",
    method: "post",
    data: param,
    flag: "out"
  });
}

export function getInRecord(param) {
  return request({
    url:
      "http://123.207.189.27:7138/RealTimeMonitorController/getCarInRecordByInRecordId",
    method: "post",
    data: param,
    flag: "out"
  });
}

//洗车机运营分析洗车机收入分析统计
export function queryCarWashIncomeAnalysis(param) {
  return request({
    url:
      "http://123.207.189.27:7138/CarWashAnalysis/queryCarWashIncomeAnalysis",
    method: "post",
    data: param,
    flag: "out"
  });
}

//洗车运营分析洗车类型收入统计分析
export function queryCarWashTypeCountAnalysis(param) {
  return request({
    url:
      "http://123.207.189.27:7138/CarWashAnalysis/queryCarWashTypeCountAnalysis",
    method: "post",
    data: param,
    flag: "out"
  });
}
//洗车机运营分析洗车次数统计分析
export function queryCarWashCountAnalysis(param) {
  return request({
    url: "http://123.207.189.27:7138/CarWashAnalysis/queryCarWashCountAnalysis",
    method: "post",
    data: param,
    flag: "out"
  });
}
//洗车运营分析 洗车类型次数统计分析
export function queryCarWashTypeTimesAnalysis(param) {
  return request({
    url:
      "http://123.207.189.27:7138/CarWashAnalysis/queryCarWashTypeTimesAnalysis",
    method: "post",
    data: param,
    flag: "out"
  });
}
