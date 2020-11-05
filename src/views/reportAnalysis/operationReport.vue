<!--
  运营报表（日报，月报，年报）
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-05 14:27:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="日报" name="first">
        <data-Report />
      </el-tab-pane>
      <el-tab-pane label="月报" name="second">
        <mounth-Report />
      </el-tab-pane>
      <el-tab-pane label="年报" name="third">
        <year-Report />
      </el-tab-pane>
    </el-tabs>
  </div>
  </template>
  <script>
    // 日报
    import dataReport from './operationReport/dataReport'
    // 月报
    import mounthReport from './operationReport/mounthReport'
    // 年报  
    import yearReport from './operationReport/yearReport'

    export default {
      components: {
        dataReport,
        mounthReport,
        yearReport
      },
      data() {
        return {
          activeName: 'first'
        }
      }
    }
  </script>
  