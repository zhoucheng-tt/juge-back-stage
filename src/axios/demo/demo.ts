/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-23 16:40:58
 * @LastEditors: zhoucheng
 */
import request from "@/utils/request";
interface BaseRequest {
  moduleUriPrefix: string
  add(data: Object)
  delete(data: Object)
  update(data: Object)
  list(data: Object)
  listByPage(data: Object)
}

export class CRequest implements BaseRequest {
  moduleUriPrefix: string
  constructor(module: string) {
    this.moduleUriPrefix = module
  }
  add(data: Record<string, any>) {
    return request({
      url: this.moduleUriPrefix + "/add",
      method: "post",
      data: data
    });
  }
  delete(data: Object) {
    return request({
      url: this.moduleUriPrefix + "/delete",
      method: "post",
      data: data
    });
  }
  update(data: Object) {
    return request({
      url: this.moduleUriPrefix + "/update",
      method: "post",
      data: data
    });
  }
  list(data: Object) {
    return request({
      url: this.moduleUriPrefix + "/list",
      method: "post",
      data: data
    });
  }
  listByPage(data: Object) {
    return request({
      url: this.moduleUriPrefix + "/listByPage",
      method: "post",
      data: data
    });
  }

}

export default class BaseRequest1 {
  module: string;

  constructor(module: string) {
    this.module = module;
  }
}

function getMoudle(module: string) {
  return module
}

