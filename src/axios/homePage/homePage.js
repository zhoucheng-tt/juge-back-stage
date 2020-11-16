/*
 * @Author: 邵青阳
 * @Date: 2020-10-29 13:34:33
 * @LastEditTime: 2020-11-16 09:37:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\axios\homePage\homePage.js
 */
import request from '@/utils/request'

// 登录接口
export function login(params) {
    return request({
        url: '/systemManageFunc/loginUser.xhtml',
        method: 'post',
        data: params,
    })
}
// 测试接口   http://192.168.1.163:8000/queryChartData/queryChargeEarnData
export function test(params) {
    return request({
        url: 'http://192.168.1.163:8000/EarnAnalysisController/queryChargeEarnData',
        method: 'post',
        data: params,
        flag: 'out'
    })
}



