<!--
 * @Description: 
 * @Author: haojing
 * @Github: https://github.com/hj327
 * @Date: 2020-09-03 14:58:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-17 16:02:41
-->
<template>
  <!-- <div :class="className" :style="{height:height,width:width}" /> -->

  <div id="threeDpie" style="height:310px;width:241px;position: absolute;
    left: 35%;
    top: -75px;" />

</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// import resize from '@/components/mixins/resize'
// const animationDuration = 6000
export default {
  // mixins: [resize],
  mounted () {
    this.initChart();
  },
  methods: {
    initChart () {
      var charts = echarts.init(document.getElementById('threeDpie'));
      charts.setOption(
        {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          // legend: {
          //   orient: 'vertical',
          //   left: 'left',
          //   data: ['省内', '省外']
          // },
          color: ['rgb(250,117,145)', 'rgb(156,64,255)'],
          series: [
            {
              name: '客货比',
              type: 'pie', // 设置图表类型为饼图
              roseType: 'angle',
              radius: '55%',
              center: ['45%', '50%'],
              label: {
                show: false
              },
              data: [
                { value: 60, name: '客车' },
                { value: 40, name: '货车' }
              ],
            }
          ]
        })
    }
  }
}
</script>