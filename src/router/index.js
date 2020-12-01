/*
 * @Author: your name
 * @Date: 2020-08-03 14:28:33
 * @LastEditTime: 2020-11-23 10:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import main from '../components/main.vue'

Vue.use(VueRouter);

const routes = [
  // 登录
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/login"),
    meta: {
      name: "登陆",
      icon: "",
      type: "list"
    }
  },
  {
    path: "/",
    name: "main",
    component: main,
    // component: main,
    // 重定向，也就是相当于定位到默认展示的一个页面
    redirect: "/login",
    meta: {
      name: "登陆",
      icon: ""
    },
    children: [
      {
        path: "/homePage",
        name: "homePage",
        component: () => import("@/views/homePage/homePage"),
        meta: {
          name: "首页",
          icon: "",
          type: "list"
        }
      },
/*      {
        path: "/GwVedio",
        name: "GwVedio",
        component: () => import("@/views/GwVedio/GwVedio"),
        meta: {
          name: "高位视频",
          icon: "",
          type: "list"
        }
      },*/
      {
        path: "/realTimeMonitoringCarWaring",
        name: "realTimeMonitoringCarWaring",
        component: () => import("@/views/realTimeMonitoringCarWaring/realTimeMonitoringCarWaring"),
        meta: {
          name: "实时监测-洗车机运营数据",
          icon: "",
          type: "list"
        }
      },
      // 报表分析
      // -- 停车场运营指标分析
      {
        path: "/analysisOfOperatingIncomeOfParking",
        name: "analysisOfOperatingIncomeOfParking",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/reportAnalysis//analysisOfOperatingIncomeOfParking.vue")
      },
      // 停车场运营收入分析
      {
        path: "/analysisOnOperationIndexOfParking",
        name: "analysisOnOperationIndexOfParking",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/reportAnalysis/analysisOnOperationIndexOfParking.vue")
      },
      // 报表分析（日报，月报，年报）
      {
        path: "/operationReport",
        name: "operationReport",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/reportAnalysis/operationReport.vue")
      },
      // 支付台账统计
      {
        path: "/paymentAccountStatistics",
        name: "paymentAccountStatistics",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/reportAnalysis/paymentAccountStatistics.vue")
      },
      // 出入口监测  entranceExitMonitoring
      {
        path: "/entranceExitMonitoring",
        name: "entranceExitMonitoring",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/reportAnalysis/entranceExitMonitoring.vue")
      },
      // 洗车机报警信息统计
      {
        path: "/alarmInformationCarWashingMachine",
        name: "alarmInformationCarWashingMachine",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/reportAnalysis/alarmInformationCarWashingMachine.vue")
      },
      // 订单管理
      // 停车订单查询
      {
        path: "/parkingOrderInquiry",
        name: "parkingOrderInquiry",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/orderManagement/parkingOrderInquiry.vue")
      },
      // 预约订单查询
      {
        path: "/reservationOrderInquiry",
        name: "reservationOrderInquiry",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/orderManagement/reservationOrderInquiry.vue")
      },
      // 自助充电订单查询
      {
        path: "/querySelfServiceChargingOrder",
        name: "querySelfServiceChargingOrder",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/orderManagement/querySelfServiceChargingOrder.vue")
      },
      // 基础信息管理
      // 基础信息管理ETC
/*      {
        path: "/basicInformationManagementETC",
        name: "basicInformationManagementETC",
        component: () =>
          import(/!* webpackChunkName: "about" *!/ "@/views/basicInformationManagement/basicInformationManagementETC.vue")
      },*/
      // 计费规则管理
      {
        path: "/billingRuleManagement",
        name: "billingRuleManagement",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/basicInformationManagement/billingRuleManagement.vue")
      },
      // 洗车机计费规则管理  carWashingMachineManagement
      {
        path: "/carWashingMachineManagement",
        name: "carWashingMachineManagement",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/basicInformationManagement/carWashingMachineManagement.vue")
      },
      // 停车场管理  parkingLotManagement
      {
        path: "/parkingLotManagement",
        name: "parkingLotManagement",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/basicInformationManagement/parkingLotManagement.vue")
      },
      // 设备管理   deviceManagement
      {
        path: "/deviceManagement",
        name: "deviceManagement",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/basicInformationManagement/deviceManagement.vue")
      },
      // 授权管理白名单管理
      {
        path: "/whitelistManagement",
        name: "whitelistManagement",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/authorizationManagement/whitelistManagement.vue")
      },
      // 系统管理
      // 用户管理  systemManagement
      {
        path: "/keyVehicleSupervision",
        name: "keyVehicleSupervision",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/systemManagement/keyVehicleSupervision.vue")
      },
      // 角色管理
      {
        path: "/overrunDetection",
        name: "overrunDetection",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/systemManagement/overrunDetection.vue")
      },
      // 日志管理
      {
        path: "/vehicleInvestigation",
        name: "vehicleInvestigation",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/systemManagement/vehicleInvestigation.vue")
      },
    ]
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
