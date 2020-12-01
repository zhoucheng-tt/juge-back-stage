import request from '@/utils/request'

//停车场下拉查询 停车场计费规则下拉
export function queryDictData(param) {
    return request(
        {
            url: 'DictDimFunc/queryDictData.xhtml',
            method: 'post',
            data: param
        }
    )
}
//停车计费规则列表查询 billingRuleFunc/queryBillingRuleList
export function queryBillingRuleList(param) {
    return request(
        {
            url: '/billingRuleFunc/queryBillingRuleList',
            method: 'post',
            data: param
        }
    )
}
