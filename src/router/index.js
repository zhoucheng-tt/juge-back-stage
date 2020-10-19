/*
 * @Author: your name
 * @Date: 2020-08-03 14:28:33
 * @LastEditTime: 2020-10-17 14:36:28
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
          name: "高位视屏",
          icon: "",
          type: "list"
        }
      },
      // {
      //   path: "/Home",
      //   name: "Home",
      //   component: () => import("@/views/Home"),
      //   meta: {
      //     name: "高位视频",
      //     icon: "",
      //     type: "list"
      //   }
      // },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/svgStudent",
        name: "svgStudent",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/svgStudent.vue")
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
