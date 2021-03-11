/** * @author admin * @since 2021-03-11 * @data 2021-03-11 */
<template>
  <div>
    <el-tabs v-model="activeName" class="tabsStyle" type="card">
      <el-tab-pane label="停车场计费规则" name="first">
        <billing-rule-management v-if="activeName === 'first'" />
      </el-tab-pane>
      <el-tab-pane label="洗车机计费规则" name="second">
        <car-washing-machine-management v-if="activeName === 'second'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
//地磁车
import billingRuleManagement from "./components/billingRuleManagement/billingRuleManagement";
// 地锁
import carWashingMachineManagement from "./components/billingRuleManagement/carWashingMachineManagement";

export default {
  components: {
    billingRuleManagement,
    carWashingMachineManagement
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
