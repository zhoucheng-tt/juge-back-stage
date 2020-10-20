/*
 * @Author: your name
 * @Date: 2020-08-03 14:28:33
 * @LastEditTime: 2020-10-20 10:37:37
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
  {
    path: "/",
    name: "main",
    component: main,
    // component: main,
    // 重定向，也就是相当于定位到默认展示的一个页面
    redirect: "/homePage",
    meta: {
      name: "主页",
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
      {
        path: "/GwVedio",
        name: "GwVedio",
        component: () => import("@/views/GwVedio/GwVedio"),
        meta: {
          name: "高位视频",
          icon: "",
          type: "list"
        }
      },
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
      // 基础信息管理
      // 基础信息管理ETC
      {
        path: "/basicInformationManagementETC",
        name: "basicInformationManagementETC",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/basicInformationManagement/basicInformationManagementETC.vue")
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
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
