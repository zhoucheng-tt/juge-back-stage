import request from '@/utils/request'

//停车场订单管理的下拉接口 DictDimFunc/queryDictData.xhtml
export function queryDictData(param) {
    return request(
        {
            url: 'DictDimFunc/queryDictData.xhtml',
            method: 'post',
            data: param
        }
    )
}
//停车场订单管理的查询接口  orderManageFunc/queryStopOrder.xhtml
export function queryStopOrder(params) {
    return request({
        url: 'orderManageFunc/queryStopOrder.xhtml',
        method: 'post',
        data: params,
    })
}

//预约订单管理接口 orderManageFunc/queryAppointmentStopOrder
export function queryAppointmentStopOrder(params) {
    return request({
        url: 'orderManageFunc/queryAppointmentStopOrder',
        method: 'post',
        data: params,
    })
}
