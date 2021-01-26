<template>
  <div></div>
</template>

<script>
import Highcharts from "highcharts";
export default {
  name: "DtLineChart",
  props: {
    xCategories: {
      type: Array
    },
    seriesData: {
      type: Array
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.xCategories, this.seriesData);
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = Highcharts.chart(this.$el, {
        chart: {
          type: "spline",
          backgroundColor: "rgba(0,0,0,0)",
          marginBottom: 24
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
          categories: this.xCategories,
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
            format: "{value}辆",
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
            data: this.seriesData
          }
        ]
      });
    }
  }
};
</script>

<style scoped></style>
