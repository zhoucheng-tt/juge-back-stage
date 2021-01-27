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
    <div style="width:100%;height:100%;padding-top: 76px">
      <div style="margin-left: 76px">
        <img src="../../assets/login/logo.png" alt="" />
      </div>
      <div class="login-block">
        <div class="login-block-text"><span>欢迎使用</span></div>
        <div class="login-block-title">
          <span>溧水经开区管委会智慧停车管理平台</span>
        </div>
        <el-form
          class="login-form-horizontal"
          :model="loginList"
          ref="loginList"
          :rules="rules"
        >
          <el-form-item prop="loginName">
            <el-input
              v-model="loginList.loginName"
              placeholder="账号或手机号"
            />
          </el-form-item>
          <el-form-item prop="loginPassword" style="margin-top: 25px">
            <el-input
              type="password"
              v-model="loginList.loginPassword"
              placeholder="密码"
            />
          </el-form-item>
          <el-button class="login-btn" @click="loginBtn()">登录</el-button>
          <!--        <a href="forgot.html" class="login-forgot-pass">忘记密码?</a>-->
          <!--  <a href="javascript:void(0);" class="login-regist">现在注册</a> -->
        </el-form>
      </div>
      <div class="support"><span>技术支持:华设E停车</span></div>
    </div>
  </div>
</template>
<script>
// 引入密码加密js
import { hex_sha1 } from "../../assets/JS/sha1.js";
export default {
  data() {
    return {
      loginList: {
        loginName: "",
        loginPassword: ""
      },
      rules: {
        loginName: [
          {
            required: true,
            message: "请输入账号/手机号",
            trigger: "blur"
          }
        ],
        loginPassword: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    //登录
    loginBtn() {
      this.$refs["loginList"].validate(valid => {
        if (valid) {
          var param = {
            userAccount: this.loginList.loginName,
            password: hex_sha1(this.loginList.loginPassword)
          };
          // console.log("打印登录入参", param);
          this.$homePage.login(param).then(response => {
            // console.log("返回结果", response);
            this.$message({
              type: "success",
              message: "登陆成功"
            });
            localStorage.setItem("userToken", response.resultEntity.userToken);
            localStorage.setItem("userName", this.loginList.loginName);
            // 登陆成功后跳转方法
            this.$router.push({
              path: "/homePage"
            });
          });
        }
      });
    }
  }
};
</script>
<style scoped>
@charset "utf-8";
.support {
  width: 100%;
  height: 26px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  /*background-color: red;*/
  margin-top: 10px;
  bottom: 60px;
  position: absolute;
}
.login-content {
  height: 100%;
  width: 100%;
  background-image: url("../../assets/login/dl-di.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /*padding-top: 300px;*/
}
.login-block {
  width: 26.5%;
  height: 38%;
  box-sizing: border-box;
  margin: auto;
  margin-top: 100px;
  align-items: center;
  border-radius: 5px;
  background: rgba(215, 236, 247, 0.6);
  color: #666;
  /*border: 1px solid #fff;*/
  padding: 32px;
  padding-top: 20px;
  /*box-shadow: 0px 0px 8px #fff;*/
}
.login-block-text {
  color: #333;
  font-size: 26px;
  text-align: center;
}
.login-block-title {
  font-weight: normal;
  height: 90px;
  line-height: 90px;
  box-sizing: border-box;
  text-align: center;
  font-size: 26px;
  color: #0f81bf;
}
.login-form-horizontal {
  width: 440px;
}
.login-form-horizontal input {
  font-family: "微软雅黑";
  font-size: 16px;
  border-radius: 5px;
  /*border: 1px solid #aaa;*/
  box-shadow: none;
  width: 440px;
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
  /*border: 1px solid #41b5f5;*/
}

.login-btn {
  width: 438px;
  height: 50px;
  font-size: 16px;
  background-color: #41b5f5;
  color: white;
}

.login-btn:hover {
  background-color: #3883b8;
  border: 1px solid #3883b8;
}
/deep/ .el-input__inner {
  height: 48px !important;
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
