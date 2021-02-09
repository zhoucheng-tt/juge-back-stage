<template>
  <div style="height: 100%"></div>
</template>

<script>
import Highcharts from "highcharts";
export default {
  //用来引入的组件名
  name: "dtSplineHighChart",
  //  传入的数据格式list
  props: {
    //引入传入的DataList
    splineHighChartsDataList: {
      type: Object
    },
    chartStyle: {
      type: String
    }
  },
  data() {
    return {};
  },
  watch: {
    // 监听传入的DataList
    splineHighChartsDataList: {
      deep: true,
      handler(val) {
        this.splintHighChartsInit(val);
      }
    }
  },
  mounted() {
    console.log(this.chartStyle);
    // 初始化splineHIG和Chart是方法传入DataList
    this.splintHighChartsInit(this.splineHighChartsDataList);
  },
  methods: {
    // 创建HighCharts对象
    splintHighChartsInit(splineHighChartsDataList) {
      // 无数据情况
      Highcharts.setOptions({
        lang: {
          noData: "暂无数据"
        }
      });
      var chart = Highcharts.chart(this.$el, {
        //如果图表没数据显示没有数据的提示信息
        noData: {
          position: {
            //相对于绘图区定位无数据标签的位置。 默认值：[object Object].
            // align: 'right',
            //verticalAlign: 'bottom'
          },
          attr: {
            //无数据标签中额外的SVG属性
            // "stroke-width": 3,
            // stroke: "#cccccc"
          },
          style: {
            //对无数据标签的CSS样式。 默认值：[object Object].
            fontWeight: "bold",
            fontSize: "15px",
            color: "#202030"
          }
        },
        //不显示HighCharts点击官网事件
        credits: {
          enabled: false
        },
        //设置图表类型
        chart: {
          type: "spline",
          //背景色默认为透明色装HighCharts图表的盒子的颜色
          backgroundColor:
            this.chartStyle !== null ? this.chartStyle : "rgba(0,0,0,0)",
          //距离底部的距离默认为100
          marginBottom: splineHighChartsDataList.chartMarginBottom
        },
        //设置图表标题及样式
        title: {
          //  标题文本
          text: splineHighChartsDataList.titleText,
          // 标题默认居中
          // align: "left",
          // 根据偏移量调整标题位置
          // x: 20,
          // y: 20,
          //  标题样式
          style: {
            fontFamily: "PingFangSC-Medium",
            fontSize: "16px",
            color: "#333333",
            letterSpacing: "0.17px"
          }
        },
        // spline线的颜色
        colors: [splineHighChartsDataList.colors],
        // 图例显示
        legend: {
          enabled: true,
          //左右居中
          align: "right",
          //  位于顶部
          verticalAlign: "top",
          // x: 300,
          // y: 0,
          itemStyle: {
            color: "#666666",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            fill: "#666666"
          },
          itemHoverStyle: {
            color: "#cccccc"
          },
          itemHiddenStyle: {
            color: "#cccccc"
          }
        },

        //  X轴及数据
        xAxis: {
          //X轴数据
          categories: splineHighChartsDataList.categoriesX,
          //x轴颜色
          labels: {
            style: {
              color: splineHighChartsDataList.XAxisLabelsStyle,
              fontSize: "10px"
            }
          },
          //x轴坐标颜色
          lineColor: splineHighChartsDataList.XAxisLineColor
          //X轴间隔显示
          // tickInterval: 2,
        },
        //Y轴数据
        yAxis: {
          title: {
            text: ""
          },
          labels: {
            //修改Y轴添加单位
            format: "{value}" + splineHighChartsDataList.YAxisLabelsFormat,
            style: {
              color: "rgba(90,142,227,1)"
            }
          }, //设置网格线颜色
          gridLineColor: "#0A3167"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.y}</b>辆"
        },
        plotOptions: {
          spline: {
            lineWidth: 2,
            states: {
              hover: {
                lineWidth: 3
              }
            },
            marker: {
              enabled: false
            }
          }
        },
        series: [
          {
            name: "总停车数量",
            data: splineHighChartsDataList.seriesDataY
          }
        ]
      });
    }
  }
};
</script>

<style scoped></style>
