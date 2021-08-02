import request from "@/utils/request";

//地磁车列表查询
export function queryMagneticDetecter(params) {
  return request({
    url: "/MagneticDetecterController/queryMagneticDetecter",
    // url: "http://192.168.1.171:8000/MagneticDetecterController/queryMagneticDetecter",
    method: "post",
    data: params
  });
}

//新增地磁车
export function addMagneticDetecter(params) {
  return request({
    url: "/MagneticDetecterController/addMagneticDetecter",
    method: "post",
    data: params
  });
}

//删除地磁车
export function delMagneticDetecter(params) {
  return request({
    url: "/MagneticDetecterController/deleteMagneticDetecter",
    method: "post",
    data: params
  });
}
//修改地磁车
export function updateMagneticDetecter(params) {
  return request({
    url: "/MagneticDetecterController/updateMagneticDetecter",
    method: "post",
    data: params
  });
}
//地锁列表查询
export function queryGroundLock(params) {
  return request({
    url: "/GroundLockController/queryGroundLock",
    method: "post",
    data: params
  });
}
//新增地锁
export function addGroundLock(params) {
  return request({
    url: "/GroundLockController/addGroundLock",
    method: "post",
    data: params
  });
}
//删除地锁
export function delGroundLock(params) {
  return request({
    url: "/GroundLockController/delGroundLock",
    method: "post",
    data: params
  });
}

//修改地锁
export function updateGroundLock(params) {
  return request({
    url: "/GroundLockController/updateGroundLock",
    method: "post",
    data: params
  });
}
//道闸机按钮查询 query
export function queryPassagewayGate(param) {
  return request({
    url: "/PassagewayGateController/queryPassagewayGate",
    method: "post",
    data: param
  });
}

// 道闸机新增 addPassagewayGate
export function addPassagewayGate(param) {
  return request({
    url: "/PassagewayGateController/addPassagewayGate",
    method: "post",
    data: param
  });
}

//道闸机删除 delPassagewayGate
export function delPassagewayGate(param) {
  return request({
    url: "/PassagewayGateController/delPassagewayGate",
    method: "post",
    data: param
  });
}

//道闸机修改 updatePassagewayGate
export function updatePassagewayGate(param) {
  return request({
    url: "/PassagewayGateController/updatePassagewayGate",
    method: "post",
    data: param
  });
}

//新增出入口摄像头
export function addPassagewayCamera(param) {
  return request({
    url: "/PassagewayCameraController/addPassagewayCamera",
    method: "post",
    data: param
  });
}

//出入口摄像头列表查询
export function queryPassagewayCamera(params) {
  return request({
    url: "/PassagewayCameraController/queryPassagewayCamera",
    method: "post",
    data: params
  });
}

//出入口摄像头修改
export function updatePassagewayCamera(params) {
  return request({
    url: "/PassagewayCameraController/updatePassagewayCamera",
    method: "post",
    data: params
  });
}

//出入口摄像头删除
export function delPassagewayCamera(params) {
  return request({
    url: "/PassagewayCameraController/delPassagewayCamera",
    method: "post",
    data: params
  });
}
//基础信息管理信息ETC
export function queryETCList(param) {
  return request({
    url: "/ETCFunc/queryETCList",
    method: "post",
    data: param
  });
}

//修改ETC updateETC
export function updateETC(param) {
  return request({
    url: "/ETCFunc/updateETC",
    method: "post",
    data: param
  });
}

//新增ETC addETC
export function addETC(param) {
  return request({
    url: "/ETCFunc/addETC",
    method: "post",
    data: param
  });
}

//删除ETC
export function delETC(param) {
  return request({
    url: "/ETCFunc/delETC",
    method: "post",
    data: param
  });
}

//洗车机列表
export function queryCarWashingMachineList(param) {
  return request({
    url: "/carWashingMachineFunc/queryCarWashingMachineList",
    method: "post",
    data: param
  });
}
//新增洗车机 addCarWashingMachine
export function addCarWashingMachine(param) {
  return request({
    url: "/carWashingMachineFunc/addCarWashingMachine",
    method: "post",
    data: param
  });
}

//修改洗车机 updateCarWashingMachine
export function updateCarWashingMachine(param) {
  return request({
    url: "/carWashingMachineFunc/updateCarWashingMachine",
    method: "post",
    data: param
  });
}

//删除洗车机 delCarWashingMachine
export function delCarWashingMachine(param) {
  return request({
    url: "/carWashingMachineFunc/delCarWashingMachine",
    method: "post",
    data: param
  });
}

//文件上传
export function uploadFile(param) {
  return request({
    url: "/FileController/upFile",
    method: "post",
    data: param
  });
}

//导出ETC数据
export function exportETC(param) {
  return request({
    url: "/ETCFunc/exportETC",
    method: "post",
    data: param
  });
}
