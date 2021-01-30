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



//停车场管理-停车场管理-列表查询
export function queryParkList(param) {
  return request({
    url: "http://123.207.189.27:7138/ParkingLotController/queryParkList",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-停车场管理-新增停车场
export function insertPark(param) {
  return request({
    url: "http://123.207.189.27:7138/ParkingLotController/insertParkingLot",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-停车场管理-删除停车场
export function deletePark(param) {
  return request({
    url: "http://123.207.189.27:7138/ParkingLotController/delParkingLot",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-停车场管理-修改停车场
export function updatePark(param) {
  return request({
    url: "http://123.207.189.27:7138/ParkingLotController/updateParkingLot",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-出入口管理-列表查询
export function queryPassagewayList(param) {
  return request({
    url: "http://123.207.189.27:7138/PassagewayController/queryPassagewayList",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-出入口管理-新增出入口 insertPassagewayList
export function insertPassagewayList(param) {
  return request({
    url: "http://123.207.189.27:7138/PassagewayController/insertPassageway",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-出入口管理-删除出入口 deletePassagewayList
export function deletePassagewayList(param) {
  return request({
    url: "http://123.207.189.27:7138/PassagewayController/delPassagewayList",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-出入口管理-修改出入口 updatePassagewayList
export function updatePassagewayList(param) {
  return request({
    url: "http://123.207.189.27:7138/PassagewayController/updatePassagewayList",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-车位管理-上半部分列表查询 queryParkLayerList
export function queryParkLayerList(param) {
  return request({
    url: "http://123.207.189.27:7138/ParkingSpaceController/queryParkLayerList",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-车位管理-下半部分列表查询 queryParkSpaceList
export function queryParkSpaceList(param) {
  return request({
    url:
      "http://123.207.189.27:7138//ParkingSpaceController/queryParkSpaceList",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-车位管理-删除 deleteParkLayer
export function deleteParkLayer(param) {
  return request({
    url: "http://123.207.189.27:7138//ParkingSpaceController/delParkLayer",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场管理-车位管理-修改 deleteParkLayer
export function updateParkLayer(param) {
  return request({
    url: "http://123.207.189.27:7138//ParkingSpaceController/updateParkLayer",
    method: "post",
    data: param,
    flag: "out"
  });
}


//停车场管理车位管理的上传接口 parkFunc/insertParkLayer
export function insertParkLayer(param) {
  return request({
    url: "http://123.207.189.27:7138//ParkingSpaceController/addParkLayer",
    method: "post",
    data: param,
    flag: "out"
  });
}
