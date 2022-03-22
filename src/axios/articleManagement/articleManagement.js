/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-21 16:38:03
 * @LastEditors: zhoucheng
 */
import request from "@/utils/request";

export function articleList (params) {
  return request({
    url: "/article/list",
    method: "post",
    data: params
  });
}
export function articleAddList (params) {
  return request({
    url: "/article/add",
    method: "post",
    data: params
  });
}