import request from "@/utils/request";

//停车计费规则列表查询 billingRuleFunc/queryBillingRuleList
export function queryBillingRuleList(param) {
  return request({
    url: "/billingRuleFunc/queryBillingRuleList",
    method: "post",
    data: param
  });
}

//停车场计费规则新增 billingRuleFunc/insertBillingRule
export function insertBillingRule(param) {
  return request({
    url: "/billingRuleFunc/addBillingRule",
    method: "post",
    data: param
  });
}

//停车场计费规则修改 billingRuleFunc/updateBillingRule
export function updateBillingRule(param) {
  return request({
    url: "/billingRuleFunc/updateBillingRule",
    method: "post",
    data: param
  });
}

//停车计费规则删除 billingRuleFunc/deleteBillingRule
export function deleteBillingRule(param) {
  return request({
    url: "/billingRuleFunc/delBillingRule",
    method: "post",
    data: param
  });
}
//洗车机计费规则查询
export function queryCarWasherBillingRuleList(param) {
  return request({
    url: "/billingRuleFunc/queryCarWasherBillingRuleList",
    method: "post",
    data: param
  });
}
export function updateCawWasherBillingRule(param) {
  return request({
    url: "/billingRuleFunc/updateCawWasherBillingRule",
    method: "post",
    data: param
  });
}
