/*
 * @Author: your name
 * @Date: 2020-09-27 09:18:13
 * @LastEditTime: 2020-10-27 20:59:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\company Environment\tcxt-web\src\axios\ysParking\ysParking.js
 */
import request from "@/utils/request";

// 接口详情
export function echats(params) {
  return request({
    url: "/api/main/ad/getList",
    method: "post",
    data: params
  });
}

export function queryList(params) {
  return request({
    url:
      "http://paks.jitunet.cn:83/parkingspace/parking/space/queryAllSpace.action?parkingId=28&start=0&limit=100",
    method: "post",
    data: params,
    flag: "out"
  });
}

export function queryImgUrl(params) {
  return request({
    url:
      "http://paks.jitunet.cn:83/parkingspace/parking/record/queryRecordByCameraId.action?cameraId=47",
    method: "post",
    data: params,
    flag: "out"
  });
}

export function trendAnalysis(params) {
  return request({
    url: "/realtimeMonitorFunc/queryAlarmMonitorTodayList",
    method: "post",
    data: params
  });
}

//下拉表单查询 queryDictData
export function queryDictData(param) {
  return request({
    url: "/DictDimFunc/queryDictData",
    method: "post",
    data: param
  });
}

//停车场管理-停车场管理-列表查询
export function queryParkList(param) {
  return request({
    url: "/parkFunc/queryParkList",
    method: "post",
    data: param
  });
}

//停车场管理-停车场管理-新增停车场
export function insertPark(param) {
  return request({
    url: "/parkFunc/insertPark",
    method: "post",
    data: param
  });
}

//停车场管理-停车场管理-删除停车场
export function deletePark(param) {
  return request({
    url: "/parkFunc/deletePark",
    method: "post",
    data: param
  });
}

//停车场管理-停车场管理-修改停车场
export function updatePark(param) {
  return request({
    url: "/parkFunc/updatePark",
    method: "post",
    data: param
  });
}

//停车场管理-停车场管理-导出停车场
export function exportParkList(param) {
  return request({
    url: "/parkFunc/exportParkList",
    method: "post",
    data: param,
    flag: "innerExt",
    responseType: "blob"
  });
}

//停车场管理-出入口管理-列表查询
export function queryPassagewayList(param) {
  return request({
    url: "/parkFunc/queryPassagewayList",
    method: "post",
    data: param
  });
}

//停车场管理-出入口管理-新增出入口 insertPassagewayList
export function insertPassagewayList(param) {
  return request({
    url: "/parkFunc/insertPassagewayList",
    method: "post",
    data: param
  });
}

//停车场管理-出入口管理-删除出入口 deletePassagewayList
export function deletePassagewayList(param) {
  return request({
    url: "/parkFunc/deletePassagewayList",
    method: "post",
    data: param
  });
}

//停车场管理-出入口管理-修改出入口 updatePassagewayList
export function updatePassagewayList(param) {
  return request({
    url: "/parkFunc/updatePassagewayList",
    method: "post",
    data: param
  });
}
//停车场管理-出入口管理-导出
export function exportPassagewayList(param) {
  return request({
    url: "/parkFunc/exportPassagewayList",
    method: "post",
    data: param,
    flag: "innerExt",
    responseType: "blob"
  });
}

//停车场管理-车位管理-上半部分列表查询 queryParkLayerList
export function queryParkLayerList(param) {
  return request({
    url: "/parkFunc/queryParkLayerList",
    method: "post",
    data: param
  });
}

//停车场管理-车位管理-下半部分列表查询 queryParkSpaceList
export function queryParkSpaceList(param) {
  return request({
    url: "/parkFunc/queryParkSpaceList",
    method: "post",
    data: param
  });
}

//停车场管理-车位管理-删除 deleteParkLayer
export function deleteParkLayer(param) {
  return request({
    url: "/parkFunc/deleteParkLayer",
    method: "post",
    data: param
  });
}

//停车场管理车位管理的上传图片接口 CommonController/uploadFile
export function uploadFile(param) {
  return request({
    url: "/CommonController/uploadFile",
    method: "post",
    data: param,
    // headers: { "Content-Type": "application/json" },
  });
}
//停车场管理车位管理的上传接口 parkFunc/insertParkLayer
export function insertParkLayer(param) {
  return request({
    url: "/parkFunc/insertParkLayer",
    method: "post",
    data: param
  });
}
