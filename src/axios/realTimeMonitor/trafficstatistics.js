/*
 * @Description:监测点流量统计
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2021-10-18 15:12:53
 * @LastEditors: zhoucheng
 */
import request from "@/utils/request";

// 车流记录查询
export function queryTrafficRecord (param) {
  return request({
    url: "/GateController/queryTrafficRecord",
    method: "post",
    data: param
  });
}
// 车流计数
export function queryTrafficRecordCount (param) {
  return request({
    url: "/GateController/queryTrafficRecordCount",
    method: "post",
    data: param
  });
}
// 摄像头下拉菜单
export function queryDictCamera (param) {
  return request({
    url: "/UserController/queryDict",
    method: "post",
    data: param
  });
}