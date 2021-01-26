import request from "@/utils/request";
import { BASE_API } from "@/utils/config";

//系统管理角色管理列表查询
export function queryRoleList(param) {
  return request({
    url: "http://123.207.189.27:7138/UserController/queryRoleList",
    method: "post",
    data: param,
    flag: "out"
  });
}

//系统管理角色管理新增角色
export function addRole(param) {
  return request({
    url: "http://123.207.189.27:7138/UserController/addRole",
    method: "post",
    data: param,
    flag: "out"
  });
}

//系统管理角色管理删除行
export function deleteRole(param) {
  return request({
    url: "http://192.168.1.163:8000/UserController/deleteRole",
    method: "post",
    data: param,
    flag: "out"
  });
}

//系统管理角色新增查询选择用户
export function queryUserListByRole(param) {
  return request({
    url: "systemManageFunc/queryUserListByRole.xhtml",
    method: "post",
    data: param
  });
}

//系统管理中新增功能权限的tabs
export function queryFuncListByRole(param) {
  return request({
    url: "systemManageFunc/queryFuncListByRole.xhtml",
    method: "post",
    data: param
  });
}

// 用户信息列表
export function queryUserList(param) {
  return request({
    url: "http://123.207.189.27:7138/UserController/queryUserList",
    method: "post",
    data: param,
    flag: "out"
  });
}

// 新增用户
export function addUser(param) {
  return request({
    url: "http://123.207.189.27:7138/UserController/addUser",
    method: "post",
    data: param,
    flag: "out"
  });
}

// 修改用户
export function updateUser(param) {
  return request({
    url: "http://123.207.189.27:7138/UserController/updateUser",
    method: "post",
    data: param,
    flag: "out"
  });
}

// 删除用户
export function deleteUser(param) {
  return request({
    url: "http://123.207.189.27:7138/UserController/deleteUser",
    method: "post",
    data: param,
    flag: "out"
  });
}

// 角色列表 systemManageFunc/queryRoleListByUser.xhtml
export function queryRoleListByUser(param) {
  return request({
    url: "http://123.207.189.27:7138/UserController/queryRoleListByUser",
    method: "post",
    data: param,
    flag: "out"
  });
}

//新增角色查询
export function queryFuncListByUser(param) {
  return request({
    url: "systemManageFunc/queryFuncListByUser",
    method: "post",
    data: param
  });
}

//角色修改 systemManageFunc/updateRole.xhtml
export function updateRole(param) {
  return request({
    url: "http://123.207.189.27:7138/UserController/updateRole",
    method: "post",
    data: param,
    flag: "out"
  });
}

//日志管理列表查询
export function queryLogList(param) {
  return request({
    url: "http://123.207.189.27:7138/UserController/queryLogList",
    method: "post",
    data: param,
    flag: "out"
  });
}
//用户管理导出接口  eparking-web/systemManageFunc/exportUserList.xhtml
export function exportUserList(param) {
  return request({
    url: "eparking-web/systemManageFunc/exportUserList.xhtml",
    method: "post",
    data: param
  });
}
