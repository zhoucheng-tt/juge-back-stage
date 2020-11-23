import request from '@/utils/request'

//洗车机信息查询
export function queryWashData(param) {
    return request(
        {
            url: 'http://192.168.1.161:8000/RealTimeMonitorController/washData',
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
            url: 'http://192.168.1.161:8000/RealTimeMonitorController/washCarCount',
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
            url: 'http://192.168.1.161:8000/RealTimeMonitorController/washEarn',
            method: 'post',
            data: param,
            flag: 'out'
        }
    )
}
