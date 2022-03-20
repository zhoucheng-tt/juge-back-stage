<template>
  <div class="login-content">
    <div style="width:100%;height:100%;padding-top: 76px">
      <div class="login-block">
        <div class="login-block-text"><span>欢迎使用</span></div>
        <el-form class="login-form-horizontal"
                 :model="loginList"
                 ref="loginList"
                 :rules="rules">
          <el-form-item prop="loginName">
            <el-input v-model="loginList.loginName"
                      placeholder="账号或手机号" />
          </el-form-item>
          <el-form-item prop="password"
                        style="margin-top: 25px">
            <el-input type="password"
                      v-model="loginList.password"
                      placeholder="密码" />
          </el-form-item>
          <el-button id="login-btn"
                     @click="handleClickLoginButton()">登录</el-button>
          <a href="forgot.html"
             class="login-forgot-pass">忘记密码?</a>
          <a href="javascript:void(0);"
             class="login-regist">现在注册</a>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginList: {
        loginName: "",
        password: ""
      },
      rules: {
        loginName: [{ required: true, message: "请输入账号/手机号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted () {
    this.$keyBoard(this, "handleClickLoginButton", 13);
  },
  methods: {
    //登录
    handleClickLoginButton () {
      this.$refs["loginList"].validate(valid => {
        if (valid) {
          var info = {
            loginName: this.loginList.loginName,
            password: this.loginList.password
          };
          this.$homePage.login(info).then(response => {
            localStorage.setItem("userToken", response.resultEntity.userToken);
            localStorage.setItem("userName", this.loginList.loginName);
            this.$message({ type: "success", message: "登陆成功" });
            this.$router.push({ path: "/homePage" });
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.login-content {
  height: 100%;
  width: 100%;
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
  padding: 32px;
  padding-top: 20px;
}
.login-block-text {
  color: #333;
  font-size: 26px;
  text-align: center;
}
.login-form-horizontal {
  width: 440px;
}
.login-form-horizontal input {
  font-family: '微软雅黑';
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
#login-btn {
  width: 438px;
  height: 50px;
  font-size: 16px;
  background-color: #41b5f5;
  color: white;
}

#login-btn:hover {
  background-color: #3883b8;
  border: 1px solid #3883b8;
}

.login-forgot-pass {
  font-size: 14px;
  font-family: '微软雅黑';
  display: inline-block;
  color: #3883b8;
  text-decoration: none;
  cursor: auto;
  float: left;
}

.login-regist {
  font-size: 14px;
  font-family: '微软雅黑';
  display: inline-block;
  color: #3883b8;
  text-decoration: none;
  cursor: auto;
  float: right;
}
</style>
