<template>
  <div style="height:100%;width: 100%;">
    <dt-line-chart
      :chart-data="chartData"
      style="width: 48.5%;height:200px;float:left;margin-left: 1%;margin-top: 20px;"
    ></dt-line-chart>
  </div>
</template>
<script>
// 导入相关的依赖
import Xchart from "../../components/charts/charts.vue";
import Xchart3d from "../../components/charts/charts3d.vue";
import DtLineChart from "@/components/charts/HighChartsSpline";
export default {
  // 组件导入
  components: {
    Xchart,
    Xchart3d,
    DtLineChart
  },
  name: "highCharts",
  data() {
    return {
      chartData: {
        //必须写全
        xCategories: [],
        seriesData: []
      },
      // 传参
      currentDay: new Date().Format("yyyy-MM-dd"),
      numberOfParkingData: [],
      numberOfParkingXz: []
    };
  },
  mounted() {
    this.useHighChartsSpline();
  },
  //方法集合
  methods: {
    useHighChartsSpline() {
      let that = this;
      const param = {
        endTime: this.currentDay
      };
      this.$reportAnalysis
        .queryParkTimes(param)
        .then(res => {
          res.resultEntity.forEach(item => {
            this.numberOfParkingXz.push(item.X + ":00");
            this.numberOfParkingData.push(Number(item.dataY));
          });
          that.chartData = {
            xCategories: this.numberOfParkingXz,
            seriesData: this.numberOfParkingData
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
