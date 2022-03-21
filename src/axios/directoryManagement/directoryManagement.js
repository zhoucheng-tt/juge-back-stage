/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-21 16:36:57
 * @LastEditors: zhoucheng
 */
import request from "@/utils/request";

export function categoryList (params) {
  return request({
    url: "/category/list",
    method: "post",
    data: params
  });
}