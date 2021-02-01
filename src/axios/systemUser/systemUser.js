import request from "@/utils/request";
import { BASE_API } from "@/utils/config";

//系统管理角色管理列表查询
export function queryRoleList(param) {
  return request({
    url: "/UserController/queryRoleList",
    method: "post",
    data: param
  });
}

//系统管理角色管理新增角色
export function addRole(param) {
  return request({
    url: "/UserController/addRole",
    method: "post",
    data: param
  });
}

//系统管理角色管理删除行
export function deleteRole(param) {
  return request({
    url: "/UserController/deleteRole",
    method: "post",
    data: param
  });
}

// 用户信息列表
export function queryUserList(param) {
  return request({
    url: "/UserController/queryUserList",
    method: "post",
    data: param
  });
}

// 新增用户
export function addUser(param) {
  return request({
    url: "/UserController/addUser",
    method: "post",
    data: param
  });
}

// 修改用户
export function updateUser(param) {
  return request({
    url: "/UserController/updateUser",
    method: "post",
    data: param
  });
}

// 删除用户
export function deleteUser(param) {
  return request({
    url: "/UserController/deleteUser",
    method: "post",
    data: param
  });
}

// 角色列表 systemManageFunc/queryRoleListByUser.xhtml
export function queryRoleListByUser(param) {
  return request({
    url: "/UserController/queryRoleListByUser",
    method: "post",
    data: param
  });
}

//角色修改 systemManageFunc/updateRole.xhtml
export function updateRole(param) {
  return request({
    url: "/UserController/updateRole",
    method: "post",
    data: param
  });
}

//日志管理列表查询
export function queryLogList(param) {
  return request({
    url: "/UserController/queryLogList",
    method: "post",
    data: param
  });
}
