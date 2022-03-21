/*
 * @Author: your name
 * @Date: 2020-08-03 14:28:33
 * @LastEditTime: 2022-03-20 13:43:15
 * @LastEditors: zhoucheng
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import main from "../components/main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      name: "登陆",
      icon: "",
      type: "list"
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/login/register.vue"),
    meta: {
      name: "注册",
      icon: "",
      type: "list"
    }
  },
  {
    path: "/forgetPassword",
    name: "forgetPassword",
    component: () => import("@/views/login/forgetPassword.vue"),
    meta: {
      name: "忘记密码",
      icon: "",
      type: "list"
    }
  },
  {
    path: "/homePage",
    name: "homePage",
    component: () => import("@/views/homePage/index.vue"),
    meta: {
      name: "首页",
      icon: "",
      type: "list"
    }
  },
  {
    path: "/",
    name: "main",
    component: main,
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
        component: () => import("@/views/homePage/index.vue"),
        meta: {
          name: "首页",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/demo",
        name: "demo",
        component: () =>
          import(
            "@/views/demo/index.vue"
          ),
        meta: {
          name: "demo",
          icon: "",
          type: "list"
        }
      },
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
