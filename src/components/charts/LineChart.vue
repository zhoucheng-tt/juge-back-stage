<template>
  <div style="height: 100%"></div>
</template>

<script>
import Highcharts from "highcharts";
export default {
  name: "DtLineChart",
  props: {
    chartData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.initChart(val);
      }
    }
  },
  mounted() {
    this.initChart(this.chartData);
  },
  methods: {
    initChart(chartData) {
      var chart = Highcharts.chart(this.$el, {
        chart: {
          type: "spline",
          backgroundColor: "rgba(0,0,0,0)",
          marginBottom: 35
        },
        title: {
          text: "",
          align: "left",
          x: 20,
          style: {
            fontFamily: "PingFangSC-Medium",
            fontSize: "16px",
            color: "#333333",
            letterSpacing: "0.17px"
          }
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: chartData.xCategories,
          //X轴间隔显示
          tickInterval: 0,
          //x轴坐标颜色
          lineColor: "#104DA1",
          labels: {
            style: {
              color: "rgba(90,142,227,1)",
              fontSize: "10px"
            }
          }
        },
        colors: ["#7654E3"],
        yAxis: {
          title: {
            text: ""
          },
          labels: {
            //修改Y轴添加单位
            format: "{value}",
            style: {
              color: "rgba(90,142,227,1)"
            }
          }, //设置网格线颜色
          gridLineColor: "#0A3167"
        },
        legend: {
          enabled: true,
          align: "center",
          verticalAlign: "left",
          x: 300,
          y: 0,
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
            color: "#333333"
          }
        },
        tooltip: {
          formatter: function() {
            return (
              this.x +
              ":00" +
              "-" +
              (Number(this.x) + 1) +
              ":00" +
              "<br>" +
              this.series.name +
              ":" +
              this.y +
              "次"
            );
          }
        },
        plotOptions: {
          //  静态渲染
          series: {
            animation: false
          },
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
            name: "停车次数",
            data: chartData.seriesData
          }
        ]
      });
    }
  }
};
</script>

<style scoped></style>
