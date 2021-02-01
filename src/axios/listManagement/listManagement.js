import request from "@/utils/request";

//查询白名单列表  MemberFunc/queryWhiteList
export function queryWhiteList(param) {
  return request({
    url: "/AuthorizationController/queryWhiteList",
    method: "post",
    data: param
  });
}

//新增白名单接口 MemberFunc/insertWhiteList
export function insertWhiteList(param) {
  return request({
    url: "/AuthorizationController/addWhite",
    method: "post",
    data: param
  });
}

//白名单删除接口 MemberFunc/deleteWhiteList
export function deleteWhiteList(param) {
  return request({
    url: "/AuthorizationController/delWhite",
    method: "post",
    data: param
  });
}

//白名单修改接口 MemberFunc/updateWhiteList
export function updateWhiteList(param) {
  return request({
    url: "/AuthorizationController/updateWhite",
    method: "post",
    data: param
  });
}

//启动白名单
export function enableWhite(param) {
  return request({
    url: "/AuthorizationController/enableWhite",
    method: "post",
    data: param
  });
}

//失效白名单
export function disableWhite(param) {
  return request({
    url: "/AuthorizationController/disableWhite",
    method: "post",
    data: param
  });
}

//查询黑名单列表 MemberFunc/queryBlackList
export function queryBlackList(param) {
  return request({
    url: "/AuthorizationController/queryBlackList",
    method: "post",
    data: param
  });
}

//新增黑名单接口 MemberFunc/insertBlackList
export function insertBlackList(param) {
  return request({
    url: "/AuthorizationController/addBlack",
    method: "post",
    data: param
  });
}

//黑名单删除接口 MemberFunc/deleteBlackList
export function deleteBlackList(param) {
  return request({
    url: "/AuthorizationController/delBlack",
    method: "post",
    data: param
  });
}

//黑名单修改接口 MemberFunc/updateBlackList
export function updateBlackList(param) {
  return request({
    url: "/AuthorizationController/updateBlack",
    method: "post",
    data: param
  });
}

//黑名单修改状态 MemberFunc/updateBlackListStatus
export function enableBlack(param) {
  return request({
    url: "/AuthorizationController/enableBlack",
    method: "post",
    data: param
  });
}

export function disableBlack(param) {
  return request({
    url: "/AuthorizationController/disableBlack",
    method: "post",
    data: param
  });
}
