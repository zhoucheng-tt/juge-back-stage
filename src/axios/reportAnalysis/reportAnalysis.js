import request from '@/utils/request'

//支付台账分析列表查询
export function queryAccountStatisList(param) {
    return request(
        {
            url: 'http://192.168.1.161:8000/PayStatisticController/queryPayStatistic',
            method: 'post',
            data: param,
            flag:'out'
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
            url: 'accountStatisFunc/paymentAnalysis',
            method: 'post',
            data: param
        }
    )
}

//收入对比分析
export function queryParkOpeIncomeCompAnal(param) {
    return request(
        {
            url: 'decisionAnalysisFunc/queryParkOpeIncomeCompAnal',
            method: 'post',
            data: param
        }
    )
}

//收入及欠费金额趋势分析
export function queryParkOpeIncomeArrearsAnal(param) {
    return request(
        {
            url: '/decisionAnalysisFunc/queryParkOpeIncomeArrearsAnal',
            method: 'post',
            data: param
        }
    )
}

//收入构成分析
export function queryParkOpeIncomeTypeAnal(param) {
    return request(
        {
            url: '/decisionAnalysisFunc/queryParkOpeIncomeTypeAnal',
            method: 'post',
            data: param
        }
    )
}

//停车场收入及欠费分析
export function queryParkOpeIncomeArrearsChart(param) {
    return request(
        {
            url: '/decisionAnalysisFunc/queryParkOpeIncomeArrearsChart',
            method: 'post',
            data: param
        }
    )
}

//报表分析日报
export function queryOpeReportStatisDayAnal(param) {
    return request(
        {
            url: 'http://192.168.1.161:8000/EarnAnalysisController/reportDate',
            method: 'post',
            data: param,
            flag:'out'
        }
    )
}

//报表分析月报
export function queryOpeReportStatisMonthAnal(param) {
    return request(
        {
            url: 'http://192.168.1.161:8000/EarnAnalysisController/reportMonth',
            method: 'post',
            data: param,
            flag:'out'
        }
    )
}

//报表分析年报
export function queryOpeReportStatisYearAnal(param) {
    return request(
        {
            url: 'http://192.168.1.161:8000/EarnAnalysisController/reportYear',
            method: 'post',
            data: param,
            flag:'out'
        }
    )
}

//停车场运营收入分析
export function queryParkOpeIdxParkDetailQtyAnal(param) {
    return request(
        {
            url: 'decisionAnalysisFunc/queryParkOpeIdxParkDetailQtyAnal',
            method: 'post',
            data: param
        }
    )
}


//充电桩收入分析
export function queryChargeEarn(param) {
    return request(
        {
            url: 'http://192.168.1.161:8000/EarnAnalysisController/queryChargeEarnData',
            method: 'post',
            header: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: param,
            flag: 'out'
        }
    )
}

//洗车站收入分析
export function queryWashEarn(param) {
    return request(
        {
            url: 'http://192.168.1.161:8000/EarnAnalysisController/queryWashEarnData',
            method: 'post',
            header: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: param,
            flag: 'out'
        }
    )
}

//停车场运营指标分析图表数据接口
export function queryParkOpeIdxParkDetailAnal(param) {
    return request(
        {
            url: 'decisionAnalysisFunc/queryParkOpeIdxParkDetailAnal',
            method: 'post',
            data: param
        }
    )
}

//停车场运营指标分析平均充电时间
export function queryAvgChargeTime(param) {
    return request(
        {
            url: 'http://192.168.1.161:8000/EarnAnalysisController/avgChargeTime',
            method: 'post',
            header: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: param,
            flag: 'out'
        }
    )
}

//停车场运营指标分析平均充电时间
export function queryAvgWashTime(param) {
    return request(
        {
            url: 'http://192.168.1.161:8000/EarnAnalysisController/avgWashTime',
            method: 'post',
            header: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: param,
            flag: 'out'
        }
    )
}
