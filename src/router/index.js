/*
 * @Author: your name
 * @Date: 2020-08-03 14:28:33
 * @LastEditTime: 2022-03-25 11:11:51
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
      {
        path: "/directoryManagement",
        name: "directoryManagement",
        component: () =>
          import(
            "@/views/directoryManagement/index.vue"
          ),
        meta: {
          name: "目录管理",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/articleManagement",
        name: "articleManagement",
        component: () =>
          import(
            "@/views/articleManagement/index.vue"
          ),
        meta: {
          name: "文章管理",
          icon: "",
          type: "list"
        }
      },
      {
        path: "/carouselPic",
        name: "carouselPic",
        component: () =>
          import(
            "@/views/carouselPic/index.vue"
          ),
        meta: {
          name: "轮播管理",
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
