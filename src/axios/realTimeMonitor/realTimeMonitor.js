import request from '@/utils/request'

//洗车机信息查询
export function queryWashData(param) {
    return request(
        {
            url: 'http://123.207.189.27:7138/RealTimeMonitorController/washData',
            method: 'post',
            data: param,
            flag: 'out'
        }
    )
}

//洗车收入分析
export function queryWashCount(param) {
    return request(
        {
            url: 'http://123.207.189.27:7138/RealTimeMonitorController/washCarCount',
            method: 'post',
            data: param,
            flag: 'out'
        }
    )
}

//洗车收入分析
export function queryWashEarn(param) {
    return request(
        {
            url: 'http://123.207.189.27:7138/RealTimeMonitorController/washEarn',
            method: 'post',
            data: param,
            flag: 'out'
        }
    )
}

export function queryInRecord(param) {
    return request(
        {
            url: 'http://192.168.1.163:8000/RealTimeMonitorController/getRecentCarInRecord',
            method: 'post',
            data: param,
            flag: 'out'
        }
    )
}
