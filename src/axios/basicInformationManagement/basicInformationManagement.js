import request from "@/utils/request";

//停车计费规则列表查询 billingRuleFunc/queryBillingRuleList
export function queryBillingRuleList(param) {
  return request({
    url: "http://123.207.189.27:7138/billingRuleFunc/queryBillingRuleList",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场计费规则新增 billingRuleFunc/insertBillingRule
export function insertBillingRule(param) {
  return request({
    url: "http://123.207.189.27:7138/billingRuleFunc/addBillingRule",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车场计费规则修改 billingRuleFunc/updateBillingRule
export function updateBillingRule(param) {
  return request({
    url: "http://123.207.189.27:7138/billingRuleFunc/updateBillingRule",
    method: "post",
    data: param,
    flag: "out"
  });
}

//停车计费规则删除 billingRuleFunc/deleteBillingRule
export function deleteBillingRule(param) {
  return request({
    url: "http://123.207.189.27:7138/billingRuleFunc/delBillingRule",
    method: "post",
    data: param,
    flag: "out"
  });
}
