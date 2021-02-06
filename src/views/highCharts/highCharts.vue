<template>
  <div style="height:100%;width: 100%;">
    <div style="width: 48.5%;height:200px;margin-left: 1%;margin-top: 20px;">
      <dt-spline-high-chart
        :spline-high-charts-data-list="splineHighChartsDataList"
      ></dt-spline-high-chart>
    </div>
  </div>
</template>
<script>
// 导入相关的依赖
import Xchart from "../../components/charts/charts.vue";
import Xchart3d from "../../components/charts/charts3d.vue";
//在charts中给vueHighChartsSpline中给他命名为dtSplineHighChart
import dtSplineHighChart from "@/components/charts/HighChartsSpline";
export default {
  // 组件导入
  components: {
    Xchart,
    Xchart3d,
    dtSplineHighChart
  },
  name: "highCharts",
  data() {
    return {
      //组件中的数据 !必须写全!
      splineHighChartsDataList: {
        categoriesX: [],
        seriesDataY: [],
        chartMarginBottom: 0,
        titleText: "",
        colors: "",
        XAxisLineColor: "",
        YAxisLabelsFormat: ""
      },
      // 传参
      // currentDay: new Date().Format("yyyy-MM-dd"),
      currentDay: "2021-01-21",
      //splineX轴的数据
      categoriesX: [],
      //splineY轴数据
      seriesDataY: []
    };
  },
  mounted() {
    this.splineHighChartsUse();
  },
  //方法集合
  methods: {
    //spline Highcharts
    splineHighChartsUse() {
      let that = this;
      const param = {
        endTime: this.currentDay
      };
      this.$reportAnalysis
        .queryParkTimes(param)
        .then(res => {
          res.resultEntity.forEach(item => {
            this.categoriesX.push(item.X + ":00");
            this.seriesDataY.push(Number(item.dataY));
          });
          that.splineHighChartsDataList = {
            categoriesX: this.categoriesX,
            seriesDataY: this.seriesDataY,
            chartMarginBottom: 35,
            titleText: "splineHighCharts",
            colors: "#7654E3",
            XAxisLineColor: "#104DA1",
            XAxisLabelsStyle: "rgba(90,142,227,1)",
            YAxisLabelsFormat: "辆"
          };
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped></style>
