import request from '@/utils/request'

//支付台账分析列表查询
export function queryAccountStatisList(param) {
    return request(
        {
            url: 'accountStatisFunc/queryAccountStatisList',
            method: 'post',
            data: param
        }
    )
}

//缴费金额按月分析
export function trendAnalysis(param) {
    return request(
        {
            url: 'accountStatisFunc/trendAnalysis',
            method: 'post',
            data: param
        }
    )
}

//缴费组成分析
export function paymentAnalysis(param) {
    return request(
        {
            url:'accountStatisFunc/paymentAnalysis',
            method:'post',
            data:param
        }
    )
}
