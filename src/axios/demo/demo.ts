/*
 * @Description: 
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-23 16:40:58
 * @LastEditors: zhoucheng
 */

interface Module {
  module: string;
}

export default class BaseRequest {
  module: string;

  constructor(module: string) {
    this.module = module;
  }
}

function getMoudle(module: string) {
  return module
}
