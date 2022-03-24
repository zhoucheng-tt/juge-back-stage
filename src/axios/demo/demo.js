import request from "@/utils/request";
import { createImportEqualsDeclaration } from "typescript";
import { CRequest } from "./demo";

// 接口详情
export function demo (params) {
  return request({
    url: "/demo/demo",
    method: "post",
    data: params
  });
}


// let user = new CRequest("/user")
// user.add().then()
// user.delete()