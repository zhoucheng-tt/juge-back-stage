import request from "@/utils/request";

//停车场订单管理的查询接口
export function queryStopOrder(params) {
  return request({
    url: "/orderController/queryNormalOrder",
    method: "post",
    data: params
  });
}

//预约订单管理接口
export function queryAppointmentStopOrder(params) {
  return request({
    url: "/bookController/queryBook",
    method: "post",
    data: params
  });
}
