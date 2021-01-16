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
        url: 'http:///123.207.189.27:7138/orderController/queryNormalOrder',
        method: 'post',
        data: params,
        flag: 'out'
    })
}

//预约订单管理接口 orderManageFunc/queryAppointmentStopOrder
export function queryAppointmentStopOrder(params) {
    return request({
        url: 'http:///123.207.189.27:7138/bookController/queryBook',
        method: 'post',
        data: params,
        flag: 'out'
    })
}
