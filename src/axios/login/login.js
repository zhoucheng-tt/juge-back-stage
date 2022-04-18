/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-21 16:23:02
 * @LastEditors: zhoucheng
 */
import request from "@/utils/request";

// 接口详情
export function login (params) {
  return request({
    url: "/user/pc/login",
    method: "post",
    data: params
  });
}

// 文件上传
export function upload (params) {
  return request({
    url: "/file/upload",
    method: "post",
    data: params
  });
}