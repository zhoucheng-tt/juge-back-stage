/*
 * @Author: your name
 * @Date: 2020-09-24 14:16:45
 * @LastEditTime: 2020-11-09 10:14:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\company Environment\tcxt-web\src\axios\index.js
 */
// 封装返回
import * as ysParking from './ysParking/ysParking.js'
// 首页接口
import * as homePage from './homePage/homePage.js'
// 设备管理接口
import * as deviceManagement from './deviceManagement/deviceManagement.js'
// 报表分析
import * as reportAnalysis from './reportAnalysis/reportAnalysis.js'
// 系统管理接口
import * as systemUser from './systemUser/systemUser.js'
//订单管理
import * as orderManagement from './orderManagement/orderManagement.js'
//实时监测
import * as realTimeMonitor from './realTimeMonitor/realTimeMonitor'
//白黑名单
import * as listManagement from './listManagement/listManagement'
//基础信息管理 计费规则 basicInformationManagement
import * as basicInformationManagement from './basicInformationManagement/basicInformationManagement'

const install = function (Vue) {
    if (install.installed) {
        return install.installed = true
    }
    Object.defineProperties(Vue.prototype, {
        $ysParking: {
            get() {
                return ysParking
            }
        },
        // 首页接口  homePage
        $homePage: {
            get() {
                return homePage
            }
        },
        //	设备管理页面接口
        $deviceManagement: {
            get() {
                return deviceManagement
            }
        },
        // 报表分析接口
        $reportAnalysis: {
            get() {
                return reportAnalysis
            }
        },
        // 系统管理接口
        $systemUser: {
            get() {
                return systemUser
            }
        },
        //订单管理页面
        $orderManagement: {
            get() {
                return orderManagement
            }
        },
        //实时监测
        $realTimeMonitor: {
            get() {
                return realTimeMonitor
            }
        },
        //实时监测
        $listManagement: {
            get() {
                return listManagement
            }
        },
        //基础信息管理
        //实时监测
        $basicInformationManagement: {
            get() {
                return basicInformationManagement
            }
        }
    })
}

export default {install}
