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
    //   HighCharts3d(HighCharts)
    }
  }
  </script>