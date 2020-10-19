<!--
 * @Description: 
 * @Author: haojing
 * @Github: https://github.com/hj327
 * @Date: 2020-09-03 14:58:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-17 16:03:29
-->
<template>
  <!-- <div :class="className" :style="{height:height,width:width}" /> -->
  <div id="pieLable" style="height:285px;width:227px;position: absolute;
    left: 35%;
    top: -89px;" />
</template>

<script>
import echarts from 'echarts'
// import resize from '@/components/mixins/resize'
export default {
  // mixins: [resize],
  // data () {
  //   return {
  //     chart: null
  //   }
  // },
  mounted () {
    this.initChart();
  },
  // beforeDestroy () {
  //   if (!this.chart) {
  //     return
  //   }
  //   this.chart.dispose()
  //   this.chart = null
  // },
  methods: {
    initChart () {
      var charts = echarts.init(document.getElementById('pieLable'));
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

          color: ['rgb(0,122,255)', 'rgb(3,215,233)'],
          series: [
            {
              name: '车源地',
              type: 'pie', // 设置图表类型为饼图
              radius: '55%',
              // roseType: 'angle',
              label: {
                show: false
              },
              emphasis: {
                label: {
                  show: false
                }
              },
              center: ['45%', '56%'],
              data: [
                { value: 62, name: '省内' },
                { value: 38, name: '省外' }
              ],
              // emphasis: {
              //   itemStyle: {
              //     shadowBlur: 5,
              //     shadowOffsetX: 0,
              //     shadowColor: 'rgba(0, 0, 0, 0.5)'
              //   }
              // }
            }
          ]
        })
    }
  }
}
</script>