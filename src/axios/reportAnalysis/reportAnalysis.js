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

//收入对比分析
export function queryParkOpeIncomeCompAnal(param) {
    return request(
        {
            url:'decisionAnalysisFunc/queryParkOpeIncomeCompAnal',
            method:'post',
            data:param
        }
    )
}

//收入及欠费金额趋势分析
export function queryParkOpeIncomeArrearsAnal(param) {
    return request(
        {
            url:'/decisionAnalysisFunc/queryParkOpeIncomeArrearsAnal',
            method:'post',
            data:param
        }
    )
}

//收入构成分析
export function queryParkOpeIncomeTypeAnal(param) {
    return request(
        {
            url:'/decisionAnalysisFunc/queryParkOpeIncomeTypeAnal',
            method:'post',
            data:param
        }
    )
}

export function queryParkOpeIncomeArrearsChart(param) {
    return request(
        {
            url:'/decisionAnalysisFunc/queryParkOpeIncomeArrearsChart',
            method:'post',
            data:param
        }
    )
}

//报表分析日报
export function queryOpeReportStatisDayAnal(param) {
    return request(
        {
            url:'decisionAnalysisFunc/queryOpeReportStatisDayAnal',
            method:'post',
            data:param
        }
    )
}

//报表分析月报
export function queryOpeReportStatisMonthAnal(param) {
    return request(
        {
            url:'decisionAnalysisFunc/queryOpeReportStatisMonthAnal',
            method:'post',
            data:param
        }
    )
}
