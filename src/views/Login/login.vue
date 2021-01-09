<!--
    登录
 * @Author: 邵青阳
 * @Date: 2020-10-29 10:13:00
 * @LastEditTime: 2020-10-29 14:25:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\Login\login.vue
-->
<template>
  <!-- 登录页面 -->
  <div class="login-content">
    <div class="login-block">
      <h1><span>欢迎使用&nbsp;</span>溧水停车采集与发布平台</h1>
      <form class="login-form-horizontal">
        <div class="login-form-group">
          <input
            type="text"
            class="login-form-control"
            placeholder="账号或手机号"
            v-model="loginName"
          />
        </div>
        <div class="login-form-group">
          <input
            type="password"
            class="login-form-control"
            placeholder="密码"
            v-model="loginPassword"
          />
        </div>
        <div class="login-form-group">
          <a class="login-btn" @click="loginBtn()">登录</a>
        </div>
        <a href="forgot.html" class="login-forgot-pass">忘记密码?</a>
        <!--  <a href="javascript:void(0);" class="login-regist">现在注册</a> -->
      </form>
    </div>
  </div>
</template>
<script>
// 引入密码加密js
import { hex_sha1 } from "../../assets/JS/sha1.js";
export default {
  data() {
    return {
      loginName: "",
      loginPassword: ""
    };
  },
  mounted() {},
  methods: {
    //登录
    loginBtn() {
      //	var baseCode = new Base64();
      var param = {
        userAccount: this.loginName,
        password: hex_sha1(this.loginPassword)
      };
      console.log("打印登录入参", param);
      this.$homePage
        .login(param)
        .then(response => {
          console.log("返回结果", response);
          if (
            response != "" &&
            response != undefined &&
            response.status == "0"
          ) {
            this.$message({
              type: "success",
              message: "登陆成功"
            });
            localStorage.setItem("userName", this.loginName);
            // 登陆成功后跳转方法
            this.$router.push({
              path: "/homePage"
            });
          } else {
            this.$message({
              type: "warning",
              message: "登陆失败" + response.resultMsg
            });
          }
        })
        .catch(err => {
          this.$message({
            type: "warning",
            message: "登陆失败,请联系管理员"
          });
        });
    }
  }
};
</script>
<style scoped>
@charset "utf-8";

/* CSS Document */
* {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;
  background: url(../../assets/login/dl-di.jpg) center center no-repeat;
  background-size: cover;
}

.login-form-control {
  display: inline-block;
  width: 100%;
  height: 0.28rem;
  line-height: 0.28rem;
  padding: 2px 4px;
  vertical-align: middle;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  outline: none;
  border: none;
}

.login-content {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  background: url(../../assets/login/dl-di.jpg) center center no-repeat;
  background-size: cover;
}

.login-block {
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  color: #666;
  border: 1px solid #fff;
  padding: 32px;
  padding-top: 0px;
  box-shadow: 0px 0px 8px #fff;
}

.login-block h1 {
  font-weight: normal;
  height: 120px;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
  font-size: 26px;
  color: #0f81bf;
  line-height: 120px;
}

.login-block h1 span {
  color: #333;
}

.login-form-horizontal {
  width: 440px;
  display: block;
}

.login-form-horizontal input {
  font-family: "微软雅黑";
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #aaa;
  box-shadow: none;
  width: 440px;
  height: 30px;
  line-height: 30px;
  padding: 6px 12px;
  background-color: rgba(255, 255, 255, 0.4);
  background-image: none;
  color: #666;
  -webkit-appearance: textfield;
  -webkit-rtl-ordering: logical;
  user-select: text;
  cursor: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  -webkit-writing-mode: horizontal-tb;
  outline: none;
}

.login-form-horizontal input:focus {
  border: 1px solid #41b5f5;
}

.login-form-group {
  margin-bottom: 26px;
}

.login-form-horizontal .login-form-group {
  display: flex;
  align-items: center;
}

.login-btn {
  width: 438px;
  height: 30px;
  line-height: 30px;
  padding: 6px 0;
  font-family: "微软雅黑";
  background-color: #41b5f5;
  border: 1px solid #41b5f5;
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  color: white;
  outline: none;
}

.login-btn:hover {
  background-color: #3883b8;
  border: 1px solid #3883b8;
}

.login-forgot-pass {
  font-size: 14px;
  font-family: "微软雅黑";
  display: inline-block;
  color: #3883b8;
  text-decoration: none;
  cursor: auto;
  float: left;
}

.login-regist {
  font-size: 14px;
  font-family: "微软雅黑";
  display: inline-block;
  color: #3883b8;
  text-decoration: none;
  cursor: auto;
  float: right;
}
</style>
