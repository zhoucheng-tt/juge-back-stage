import request from "@/utils/request";

//停车场订单管理的查询接口
export function queryStopOrder(params) {
  return request({
    url: "http:///123.207.189.27:7138/orderController/queryNormalOrder",
    method: "post",
    data: params,
    flag: "out"
  });
}

//预约订单管理接口
export function queryAppointmentStopOrder(params) {
  return request({
    url: "http:///123.207.189.27:7138/bookController/queryBook",
    method: "post",
    data: params,
    flag: "out"
  });
}
