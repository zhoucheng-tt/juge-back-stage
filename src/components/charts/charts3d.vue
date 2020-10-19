<template>
    <div class="x-bar">
       <div :id="id"
       :option3d="option3d"></div>
     </div>
 </template>
 
 <script>
   import HighCharts from 'highcharts'
   import HighCharts3d from 'highcharts-3d'
   export default {
     // 验证类型
     props: {
       id: {
         type: String
       },
       option3d: {
         type: Object
       }
     },
     mounted() {
       HighCharts.chart(this.id,this.option3d),
       HighCharts3d(HighCharts)
     }
   }
 </script>
 
 <style>
 </style>
 