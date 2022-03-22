/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-21 16:36:57
 * @LastEditors: zhoucheng
 */
import request from "@/utils/request";

export function categoryTreeList (params) {
  return request({
    url: "/category/tree",
    method: "post",
    data: params
  });
}
export function categoryList (params) {
  return request({
    url: "/category/list",
    method: "post",
    data: params
  });
}
export function categoryAddList (params) {
  return request({
    url: "/category/add",
    method: "post",
    data: params
  });
}
export function categoryEditList (params) {
  return request({
    url: "/category/edit",
    method: "post",
    data: params
  });
}
export function categoryDeleteList (params) {
  return request({
    url: "/category/delete",
    method: "post",
    data: params
  });
}