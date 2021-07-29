<!--
  黑白名单管理
 * @Author: 邵青阳
 * @Date: 2020-10-20 10:31:51
 * @LastEditTime: 2020-11-07 13:56:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\authorizationManagement\whitelistManagement.vue
-->

<template>
  <div>
    <el-tabs v-model="activeName" class="tabsStyle" type="card">
      <el-tab-pane label="白名单管理" name="first">
        <white-List-Management-Compent />
      </el-tab-pane>
<!--      <el-tab-pane label="专车配置" name="second">-->
<!--        <configuration-car />-->
      </el-tab-pane>
      <el-tab-pane label="黑名单管理" name="third">
        <black-List-Management-Compent />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// 白名单管理
import whiteListManagementCompent from "./listManagement/whiteListManagementCompent";
// 黑名单管理
import blackListManagementCompent from "./listManagement/blackListManagementCompent";
// 专车配置
// import configurationCar from "./listManagement/configurationCar";

export default {
  components: {
    whiteListManagementCompent,
    // configurationCar,
    blackListManagementCompent
  },
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>
<style scoped>
.tabsStyle {
  background-color: white;
  margin-top: 0.5%;
  margin-left: 1%;
  width: 98%;
  height: 907px;
  background-color: white;
}
/deep/ .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 !important;
}
</style>
