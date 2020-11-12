<!--
    首页高保真版本
* @Author: 邵青阳
* @Date: 2020-11-10 10:23:28
 * @LastEditTime: 2020-11-11 17:21:25
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\homePage\homePage.vue
-->
<template>
    <div class="all">
        <!-- 左边部分 -->
        <div class="left">
            <div class="leftContent">
                <!-- 支付方式  paymentMethod -->
                <div class="leftCharts">
                    <div class="leftChartUp">
                        <img src="../../assets/homePage/fangkuai.svg" class="leftChartUpImage" alt="">
                        <span class="spanStyle">支付方式</span>
                    </div>
                    <!-- 支付方式图表   -->
                    <div class="leftChartCenter" id="paymentIncomeAnalysis">
                        <!-- 支付收入分析 -->
                        <Xchart id="paymentIncomeAnalysis" :option="paymentIncomeAnalysisPie"></Xchart>
                    </div>
                    <div class="leftChartDown">
                        <img src="../../assets/homePage/juxing.svg" alt="">
                    </div>
                </div>
                <!-- 总停车数量 totalNumberParking-->
                <div class="leftCharts">
                    <div class="leftChartUp">
                        <img src="../../assets/homePage/fangkuai.svg" class="leftChartUpImage" alt="">
                        <span class="spanStyle">总停车数量</span>
                    </div>
                    <!-- 支付方式图表   -->
                    <div class="leftChartCenter">
                    </div>
                    <div class="leftChartDown">
                        <img src="../../assets/homePage/juxing.svg" alt="">
                    </div>
                </div>
                <!-- 平均停车时长 averageParkingTime-->
                <div class="leftCharts">
                    <div class="leftChartUp">
                        <img src="../../assets/homePage/fangkuai.svg" class="leftChartUpImage" alt="">
                        <span class="spanStyle">平均停车时长</span>
                    </div>
                    <!-- 支付方式图表   -->
                    <div class="leftChartCenter">
                    </div>
                    <div class="leftChartDown">
                        <img src="../../assets/homePage/juxing.svg" alt="">
                    </div>
                </div>
                <!-- 充电桩收入按月分析 chargingPileRevenue-->
                <div class="leftCharts">
                    <div class="leftChartUp">
                        <img src="../../assets/homePage/fangkuai.svg" class="leftChartUpImage" alt="">
                        <span class="spanStyle">充电桩收入按月分析</span>
                    </div>
                    <!-- 支付方式图表   -->
                    <div class="leftChartCenter">
                    </div>
                    <div class="leftChartDown">
                        <img src="../../assets/homePage/juxing.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 中间样式 -->
        <div class="center"></div>
        <!-- 右边数据 -->
        <div class="right">
            <div class="leftContent">
                <!-- 停车场收入排行  parkingRevenueRanking-->
                <div class="leftCharts">
                    <div class="leftChartUp">
                        <img src="../../assets/homePage/fangkuai.svg" class="leftChartUpImage" alt="">
                        <span class="spanStyle">停车场收入排行</span>
                    </div>
                    <!-- 支付方式图表   -->
                    <div class="leftChartCenter">
                    </div>
                    <div class="leftChartDown">
                        <img src="../../assets/homePage/juxing.svg" alt="">
                    </div>
                </div>
                <!-- 车位利用率 parkingSpaceUtilization-->
                <div class="leftCharts">
                    <div class="leftChartUp">
                        <img src="../../assets/homePage/fangkuai.svg" class="leftChartUpImage" alt="">
                        <span class="spanStyle">车位利用率</span>
                    </div>
                    <!-- 支付方式图表   -->
                    <div class="leftChartCenter">
                    </div>
                    <div class="leftChartDown">
                        <img src="../../assets/homePage/juxing.svg" alt="">
                    </div>
                </div>
                <!-- 车位周转率 parkingSpaceTurnoverRate-->
                <div class="leftCharts">
                    <div class="leftChartUp">
                        <img src="../../assets/homePage/fangkuai.svg" class="leftChartUpImage" alt="">
                        <span class="spanStyle">车位周转率</span>
                    </div>
                    <!-- 支付方式图表   -->
                    <div class="leftChartCenter">
                    </div>
                    <div class="leftChartDown">
                        <img src="../../assets/homePage/juxing.svg" alt="">
                    </div>
                </div>
                <!-- 自助洗车收入按月分析 selfServiceCarWashing-->
                <div class="leftCharts">
                    <div class="leftChartUp">
                        <img src="../../assets/homePage/fangkuai.svg" class="leftChartUpImage" alt="">
                        <span class="spanStyle">自助洗车收入按月分析</span>
                    </div>
                    <!-- 支付方式图表   -->
                    <div class="leftChartCenter">
                    </div>
                    <div class="leftChartDown">
                        <img src="../../assets/homePage/juxing.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // 导入相关的依赖
    import Xchart from "../../components/charts/charts.vue"
    import Xchart3d from "../../components/charts/charts3d.vue"
    import HighCharts from 'highcharts'
    import HighCharts3d from 'highcharts-3d'
    export default {
        // 组件导入
        components: {
            Xchart,
            Xchart3d
        },
        data() {
            return {
                // 支付收入排行
                paymentIncomeAnalysis: '',
                paymentIncomeAnalysisPie: {},
            }
        },
        mounted() {
            // 支付方式
            this.querypaymentIncomeAnalysisPie();
        },
        methods: {
            // 支付收入排行
            querypaymentIncomeAnalysisPie() {
                var that = this;
                that.paymentIncomeAnalysisPie = {
                    chart: {
                        type: 'pie',
                        renderTo: 'paymentIncomeAnalysis',
                        backgroundColor: 'rgba(0,0,0,0)',
                        options3d: {
                            enabled: false,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    title: {
                        text: ''
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        y: 20,
                        // padding: 10,
                        //图例之间的间距
                        // itemMarginTop: 30,
                        // itemMarginBottom: 20,
                        itemStyle: {
                            //内部还可以修改图例的颜色
                            //    图例名字的间距
                            lineHeight: '14px',
                            color: 'white'
                        },
                        // 自定义图表后缀名
                        labelFormatter: function () {
                            console.log("ddddddddddd1");
                            console.log(this);
                            return this.name + this.y + "%";
                        },
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            innerSize: 60,
                            depth: 45,
                            dataLabels: {
                                enabled: false,
                                format: '{point.name}'
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '支付占比',
                        data: [
                            ['支付宝', 45.0],
                            ['微信', 26.8],
                            // {
                            //     name: '现金',
                            //     y: 12.8,
                            //     sliced: true,
                            //     selected: true
                            // },
                            ['现金', 8.5],
                            ['ETC', 6.2]
                        ]
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.paymentIncomeAnalysisPie);
            },
        }
    };
</script>
<style scoped>
    /* 首页去全部内容 */
    .all {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: linear-gradient(180deg, #13258A 0%, #010B2A 100%);
    }

    /* 左边部分内容 */
    .left {
        width: 22%;
        height: 100%;
        overflow: hidden;
        float: left;
    }

    /*左边内容部分 */
    .leftContent {
        width: 96%;
        height: 96%;
        position: relative;
        top: 2%;
        left: 2%;
        background-color: #1a2d94;
        /* border: 1px solid rgba(0, 221, 255, 0.60); */
    }

    /* 支付方式 */
    .leftCharts {
        width: 100%;
        height: 24%;
        margin-top: 2%;
        /* background-color: darkorange; */
        float: left;
    }

    /* 图表部分标题 */
    .leftChartUp {
        width: 100%;
        height: 10%;
        /* background-color: aquamarine; */
        float: left;
    }

    /* 标题图表部分样式 */
    .leftChartUpImage {
        width: 14px;
        height: 14px;
    }

    /* 标题文字部分样式 */
    .spanStyle {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #ECFFF5;
        letter-spacing: 0.36px;
        margin-left: 10px;
    }

    /* 图表部分 */
    .leftChartCenter {
        width: 100%;
        height: 80%;
        /* background-color: aqua; */
        float: left;
    }

    /* 图表底部装饰条样式 */
    .leftChartDown {
        width: 100%;
        height: 10%;
        /* background-color: aquamarine; */
        float: left;
    }

    /* 中间部分样式 */
    .center {
        width: 56%;
        height: 100%;
        overflow: hidden;
        float: left;
        background-color: blueviolet;
    }

    /* 右边部分样式 */
    .right {
        width: 22%;
        height: 100%;
        overflow: hidden;
        float: left;
    }
</style>