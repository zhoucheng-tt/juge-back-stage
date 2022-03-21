<template>
  <div class="login-content">
    <div class="login-block">
      <div class="login-block-text"><span>立即注册</span></div>
      <div class="login-block-text"><span>使用后台管理系统模版</span></div>
      <el-form class="login-form-horizontal"
               :model="loginList"
               ref="loginList"
               :rules="rules">
        <el-form-item prop="loginName"
                      label="账号">
          <el-input v-model="loginList.loginName"
                    placeholder="账号或手机号" />
        </el-form-item>
        <el-form-item prop="password"
                      label="密码"
                      style="margin-top: 25px">
          <el-input type="password"
                    v-model="loginList.password"
                    placeholder="密码" />
        </el-form-item>
        <el-button id="login-btn"
                   @click="handleClickLoginButton()">立即注册</el-button>
      </el-form>
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
    //设置
    handleClickLoginButton () {
      this.$refs["loginList"].validate(valid => {
        if (valid) {
          // var info = {
          //   loginName: this.loginList.loginName,
          //   password: this.loginList.password
          // };
          // this.$homePage.login(info).then(response => {
          //   localStorage.setItem("userToken", response.resultEntity.userToken);
          //   localStorage.setItem("userName", this.loginList.loginName);
          //   this.$message({ type: "success", message: "登录成功" });
          //   this.$router.push({ path: "/homePage" });
          // });
          this.$message({ type: "success", message: "注册成功" });
          this.$router.push({ path: "/login" });
        }
      });
    },
  }
};
</script>
<style scoped>
.login-content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}
.login-block {
  width: 26.5%;
  height: 38%;
  box-sizing: border-box;
  border-radius: 5px;
  background: rgba(215, 236, 247, 0.6);
  color: #666;
  padding: 32px;
}
.login-block-text {
  color: #333;
  font-size: 26px;
  text-align: center;
}
.login-form-horizontal {
  margin-top: 20px;
  width: 440px;
}
.login-form-horizontal input {
  font-family: '微软雅黑';
  font-size: 16px;
  border-radius: 5px;
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
  border: none;
  color: white;
}

#login-btn:hover {
  background-color: #3883b8;
  border: 1px solid #3883b8;
}
</style>
