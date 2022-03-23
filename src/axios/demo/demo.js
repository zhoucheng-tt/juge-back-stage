import request from "@/utils/request";

// 接口详情
export function demo (params) {
  return request({
    url: "/demo/demo",
    method: "post",
    data: params
  });
}
