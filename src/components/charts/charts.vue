<!--
 * @Author: your name
 * @Date: 2020-10-14 15:15:20
 * @LastEditTime: 2020-11-03 19:23:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\components\charts\charts.vue
-->
<template>
    <div class="x-bar">
      <div :id="id"
      :option="option"></div>
    </div>
  </template>
  <script>
  import HighCharts from 'highcharts'
//   import HighCharts3d from 'highcharts-3d'
  export default {
    // 验证类型
    props: {
      id: {
        type: String
      },
      option: {
        type: Object
      }
    },

    mounted() {
      HighCharts.chart(this.id,this.option);
    }
  }
  </script>
