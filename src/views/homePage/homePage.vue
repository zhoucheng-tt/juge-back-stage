<!--
 * @Author: 邵青阳
 * @Date: 2020-10-13 11:39:37
 * @LastEditTime: 2020-11-05 19:38:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\homePage\homePage.vue
-->
<template>
    <!-- 页面整体外部边框 -->
    <div class="allContent">
        <!-- 左边内容外部边框 -->
        <div class="leftContent">
            <!-- 左边上部分  车位统计部分 -->
            <div class="leftUpContent">
                <div class="leftUpContentSwitch">
                    <div class="leftUpContentSwitch1"
                        :class="classStrust1 == 0 ? 'leftUpContentSwitch2' : 'leftUpContentSwitch1'" @click="jintian()">
                        <span class="leftUpContentSwitchSpan">今日</span>
                    </div>
                    <div class="leftUpContentSwitch1"
                        :class="classStrust2 == 0 ? 'leftUpContentSwitch2' : 'leftUpContentSwitch1'" @click="zuotian()">
                        <span class="leftUpContentSwitchSpan">昨日</span>
                    </div>
                    <div class="leftUpContentSwitch1"
                        :class="classStrust3 == 0 ? 'leftUpContentSwitch2' : 'leftUpContentSwitch1'" @click="benzhou()">
                        <span class="leftUpContentSwitchSpan">本周</span>
                    </div>
                    <div class="leftUpContentSwitch1"
                        :class="classStrust4 == 0 ? 'leftUpContentSwitch2' : 'leftUpContentSwitch1'" @click="benyue()">
                        <span class="leftUpContentSwitchSpan">本月</span>
                    </div>
                </div>
                <div class="leftUpContentNum">
                    <div class="leftUpContentNumContent" v-for="(item, index) in contentNumList" key="index">
                        <img class="leftUpContentNumImg" :src="imgUrl">
                        <!-- 车位统计部分内部文字部分 -->
                        <span class="leftUpContentNumSpan1">{{item.name0}}: {{item.num0}}</span></br>
                        <span class="leftUpContentNumSpan2">{{item.name1}}: {{item.num1}}</span>
                    </div>
                </div>
            </div>
            <!-- 左边下部分  车位统计echarts图表 -->
            <div class="leftDownContent">
                <!-- 停车场收入排行 -->
                <div class="leftDownContentCharts" id="parkingRevenueRanking">
                    <Xchart id="parkingRevenueRanking" :option="parkingRevenueRankingLine"></Xchart>
                </div>
                <!-- 充电桩收入排行 -->
                <div class="leftDownContentCharts" id="chargingPileRevenue">
                    <Xchart id="chargingPileRevenue" :option="chargingPileRevenueLine"></Xchart>
                </div>
                <!-- 自主洗车设备收入按月分布  -->
                <div class="leftDownContentCharts" id="selfServiceCarWashing">
                    <Xchart id="selfServiceCarWashing" :option="selfServiceCarWashingLine"></Xchart>
                </div>
            </div>
        </div>
        <!-- 右边内容外部边框 -->
        <div class="rightContent">
            <!-- 右边上部分内容 -->
            <div class="rightUpContent">
                <div class="dituStyle" id="map"></div>
                <div class="rightUpContentCharts" id="paymentIncomeAnalysis">
                    <!-- 支付收入分析 -->
                    <Xchart id="paymentIncomeAnalysis" :option="paymentIncomeAnalysisPie"></Xchart>
                </div>
            </div>
            <!-- 右边下部分内容 -->
            <div class="rightDownContet">
                <!-- 总停车数量 totalNumberParking -->
                <div class="echartsContent" id="totalNumberParking">
                    <Xchart id="totalNumberParking" :option="totalNumberParkingLine"></Xchart>
                </div>
                <!-- 平均停车时长 averageParkingTime -->
                <div class="echartsContent" id="averageParkingTime">
                    <Xchart id="averageParkingTime" :option="averageParkingTimeLine"></Xchart>
                </div>
                <!-- 车位利用率 parkingSpaceUtilization -->
                <div class="echartsContent" id="parkingSpaceUtilization">
                    <Xchart id="parkingSpaceUtilization" :option="parkingSpaceUtilizationLine"></Xchart>
                </div>
                <!-- 车位周转率 parkingSpaceTurnoverRate -->
                <div class="echartsContent" id="parkingSpaceTurnoverRate">
                    <Xchart id="parkingSpaceTurnoverRate" :option="parkingSpaceTurnoverRateLine"></Xchart>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
                imgUrl: require('../../assets/homePage/tupiao.png'),
                // 充电桩统计数据 （暂时的数据）
                contentNumList: [
                    {
                        // 总车位数
                        num0: 100,
                        num1: 30,
                        name0: "总车位数",
                        name1: "剩余车位数"
                    },
                    {
                        // 总收入
                        num0: 10000,
                        num1: '+6%',
                        name0: "总收入",
                        name1: "环比"
                    },
                    {
                        // 应收金额
                        num0: 5600,
                        num1: '+7%',
                        name0: "应收金额",
                        name1: "环比"
                    },
                    {
                        // 欠费金额
                        num0: 400,
                        num1: '+10%',
                        name0: "欠费金额",
                        name1: "环比"
                    },
                    {
                        // 充电桩总数
                        num0: 10,
                        num1: 5,
                        name0: "充电桩总数",
                        name1: "空闲桩位"
                    },
                    {
                        // 充电桩总收入
                        num0: 5600,
                        num1: '+3%',
                        name0: "充电桩总收入",
                        name1: "环比"
                    },
                    {
                        // 洗车位总数
                        num0: 5,
                        num1: 2,
                        name0: "洗车位总数",
                        name1: "空闲洗车位"
                    },
                    {
                        // 洗车位收入
                        num0: 3500,
                        num1: '+2%',
                        name0: "洗车位收入",
                        name1: "环比"
                    },
                ],
                // 控制默认展示样式
                classStrust1: 1,
                classStrust2: 0,
                classStrust3: 0,
                classStrust4: 0,
                // 停车场收入排行
                parkingRevenueRanking: '',
                parkingRevenueRankingLine: {},
                // 充电桩收入
                chargingPileRevenue: '',
                chargingPileRevenueLine: {},
                // 自助洗车收入
                selfServiceCarWashing: '',
                selfServiceCarWashingLine: {},
                // 支付收入排行
                paymentIncomeAnalysis: '',
                paymentIncomeAnalysisPie: {},
                // 总停车数量
                totalNumberParking: '',
                totalNumberParkingLine: {},
                // 平均停车时长
                averageParkingTime: '',
                averageParkingTimeLine: {},
                // 车位利用率
                parkingSpaceUtilization: '',
                parkingSpaceUtilizationLine: {},
                // 车位周转率
                parkingSpaceTurnoverRate: '',
                parkingSpaceTurnoverRateLine: {},
            }
        },
        mounted() {
            // 默认调用地图加载方法
            this.initMap();
            // 停车收入排行
            this.queryparkingRevenueRankingLine();
            // 收费站收入排行
            this.querychargingPileRevenueLine();
            // 自助洗车收入排行
            this.queryselfServiceCarWashingLine();
            // 支付收入排行
            this.querypaymentIncomeAnalysisPie();
            // 总停车数量
            this.querytotalNumberParkingLine();
            // 平均停车时长
            this.queryaverageParkingTimeLine();
            // 车位利用率
            this.queryparkingSpaceUtilizationLine();
            // 车位周转率
            this.queryparkingSpaceTurnoverRateLine();
        },
        methods: {
            // 地图方式开始
            initMap() {//地图初始化
                this.map = new AMap.Map('map', {
                    zoom: 13,
                    resizeEnable: true,
                    mapStyle: "amap://styles/darkblue",
                    center: [119.016937, 31.706205]
                });
                this.map.addControl(new AMap.MapType({
                    defaultType: 0, //0代表默认，1代表卫星
                    showTraffic: true,//默认显示路况
                    showRoad: true//显示路况（右上角也可点击）
                }));
            },
            // 停车场收入排行
            queryparkingRevenueRankingLine() {
                var that = this;
                that.parkingRevenueRankingLine = {
                    chart: {
                        type: 'column',
                        renderTo: 'parkingRevenueRanking',
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: '停车场收入排行'
                    },
                    xAxis: {
                        categories: ['新能源停车场', '公共停车场']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '水果消费总量'
                        }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>' +
                            '({point.percentage:.0f}%)<br/>',
                        shared: true
                    },
                    legend: {
                        enabled: true,
                        align: 'center',
                        verticalAlign: 'top',
                        x: 0,
                        y: -20,
                        itemStyle: {
                            color: '#cccccc',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fill: '#cccccc',
                        },
                        itemHoverStyle: {
                            color: '#666666',
                        },
                        itemHiddenStyle: {
                            color: '#333333'
                        }
                    },
                    plotOptions: {
                        column: {
                            stacking: 'percent'
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3]
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.parkingRevenueRankingLine);
            },
            // 充电桩收入排行(暂时先放一张3d的图)
            querychargingPileRevenueLine() {
                var that = this;
                that.chargingPileRevenueLine = {
                    chart: {
                        type: 'column',
                        renderTo: 'chargingPileRevenue',
                        backgroundColor: 'rgba(0,0,0,0)',
                        options3d: {
                            enabled: true,
                            alpha: 15,
                            beta: 15,
                            depth: 50,
                            viewDistance: 25
                        }
                    },
                    title: {
                        text: '收费站收入排行'
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            depth: 25,
                            colorByPoint: true
                        }
                    },
                    series: [{
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                        name: 'Cylinders',
                        showInLegend: false
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.chargingPileRevenueLine);
            },
            // 自助洗车收入(暂时先放一张3d的图)
            queryselfServiceCarWashingLine() {
                var that = this;
                that.selfServiceCarWashingLine = {
                    chart: {
                        type: 'column',
                        renderTo: 'selfServiceCarWashing',
                        backgroundColor: 'rgba(0,0,0,0)',
                        options3d: {
                            enabled: true,
                            alpha: 15,
                            beta: 15,
                            depth: 50,
                            viewDistance: 25
                        }
                    },
                    title: {
                        text: '自助洗车收入排行'
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            depth: 25,
                            colorByPoint: true
                        }
                    },
                    series: [{
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                        name: 'Cylinders',
                        showInLegend: false
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.selfServiceCarWashingLine);
            },
            // 支付收入排行
            querypaymentIncomeAnalysisPie() {
                var that = this;
                that.paymentIncomeAnalysisPie = {
                    chart: {
                        type: 'pie',
                        renderTo: 'paymentIncomeAnalysis',
                        backgroundColor: 'rgba(0,0,0,0)',
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    title: {
                        text: '支付收入排行'
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            innerSize: 100,
                            depth: 45,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            }
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
            // 总停车数量
            querytotalNumberParkingLine() {
                var that = this;
                that.totalNumberParkingLine = {
                    chart: {
                        type: 'area',
                        backgroundColor: 'rgba(0,0,0,0)',
                        renderTo: 'totalNumberParking',
                    },
                    title: {
                        text: '总停车数量'
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
                    },
                    yAxis: {
                        title: {
                            text: '单位（辆）'
                        },
                        labels: {
                            formatter: function () {
                                return this.value / 1000 + 'k';
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                        align: 'center',
                        verticalAlign: 'top',
                        x: 0,
                        y: -20,
                        itemStyle: {
                            color: '#cccccc',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fill: '#cccccc',
                        },
                        itemHoverStyle: {
                            color: '#666666',
                        },
                        itemHiddenStyle: {
                            color: '#333333'
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>辆'
                    },
                    plotOptions: {
                        area: {
                            marker: {
                                enabled: false,
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name: '数量',
                        data: [6, 11, 32, 110, 235, 369, 640,
                            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                            27387, 29459, 31056, 31982, 32040, 31233, 29224]
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.totalNumberParkingLine);
            },
            // 平均停车时长
            queryaverageParkingTimeLine() {
                var that = this;
                that.averageParkingTimeLine = {
                    chart: {
                        type: 'area',
                        backgroundColor: 'rgba(0,0,0,0)',
                        renderTo: 'averageParkingTime',
                    },
                    title: {
                        text: '平均停车时长'
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
                    },
                    yAxis: {
                        title: {
                            text: '单位（辆）'
                        },
                        labels: {
                            formatter: function () {
                                return this.value / 1000 + 'k';
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                        align: 'center',
                        verticalAlign: 'top',
                        x: 0,
                        y: -20,
                        itemStyle: {
                            color: '#cccccc',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fill: '#cccccc',
                        },
                        itemHoverStyle: {
                            color: '#666666',
                        },
                        itemHiddenStyle: {
                            color: '#333333'
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>辆'
                    },
                    plotOptions: {
                        area: {
                            marker: {
                                enabled: false,
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name: '数量',
                        data: [6, 11, 32, 110, 235, 369, 640,
                            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                            27387, 29459, 31056, 31982, 32040, 31233, 29224]
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.averageParkingTimeLine);
            },
            // 车位利用率
            queryparkingSpaceUtilizationLine() {
                var that = this;
                that.parkingSpaceUtilizationLine = {
                    chart: {
                        type: 'area',
                        backgroundColor: 'rgba(0,0,0,0)',
                        renderTo: 'parkingSpaceUtilization',
                    },
                    title: {
                        text: '车位利用率'
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
                    },
                    yAxis: {
                        title: {
                            text: '单位（辆）'
                        },
                        labels: {
                            formatter: function () {
                                return this.value / 1000 + 'k';
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                        align: 'center',
                        verticalAlign: 'top',
                        x: 0,
                        y: -20,
                        itemStyle: {
                            color: '#cccccc',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fill: '#cccccc',
                        },
                        itemHoverStyle: {
                            color: '#666666',
                        },
                        itemHiddenStyle: {
                            color: '#333333'
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>辆'
                    },
                    plotOptions: {
                        area: {
                            marker: {
                                enabled: false,
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name: '数量',
                        data: [6, 11, 32, 110, 235, 369, 640,
                            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                            27387, 29459, 31056, 31982, 32040, 31233, 29224]
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.parkingSpaceUtilizationLine);
            },
            // 车位周转率
            queryparkingSpaceTurnoverRateLine() {
                var that = this;
                that.parkingSpaceTurnoverRateLine = {
                    chart: {
                        type: 'area',
                        backgroundColor: 'rgba(0,0,0,0)',
                        renderTo: 'parkingSpaceTurnoverRate',
                    },
                    title: {
                        text: '车位周转率'
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
                    },
                    yAxis: {
                        title: {
                            text: '单位（辆）'
                        },
                        labels: {
                            formatter: function () {
                                return this.value / 1000 + 'k';
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                        align: 'center',
                        verticalAlign: 'top',
                        x: 0,
                        y: -20,
                        itemStyle: {
                            color: '#cccccc',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fill: '#cccccc',
                        },
                        itemHoverStyle: {
                            color: '#666666',
                        },
                        itemHiddenStyle: {
                            color: '#333333'
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>辆'
                    },
                    plotOptions: {
                        area: {
                            marker: {
                                enabled: false,
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name: '数量',
                        data: [6, 11, 32, 110, 235, 369, 640,
                            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                            27387, 29459, 31056, 31982, 32040, 31233, 29224]
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.parkingSpaceTurnoverRateLine);
            },
            // 今日点击数据处理方法
            jintian() {
                this.classStrust1 = 1
                this.classStrust2 = 0
                this.classStrust3 = 0
                this.classStrust4 = 0
                // 数据变动
                this.contentNumList = [
                    {
                        // 总车位数
                        num0: 100,
                        num1: 30,
                        name0: "总车位数",
                        name1: "剩余车位数"
                    },
                    {
                        // 总收入
                        num0: 10000,
                        num1: '+6%',
                        name0: "总收入",
                        name1: "环比"
                    },
                    {
                        // 应收金额
                        num0: 5600,
                        num1: '+7%',
                        name0: "应收金额",
                        name1: "环比"
                    },
                    {
                        // 欠费金额
                        num0: 400,
                        num1: '+10%',
                        name0: "欠费金额",
                        name1: "环比"
                    },
                    {
                        // 充电桩总数
                        num0: 10,
                        num1: 5,
                        name0: "充电桩总数",
                        name1: "空闲桩位"
                    },
                    {
                        // 充电桩总收入
                        num0: 5600,
                        num1: '+3%',
                        name0: "充电桩总收入",
                        name1: "环比"
                    },
                    {
                        // 洗车位总数
                        num0: 5,
                        num1: 2,
                        name0: "洗车位总数",
                        name1: "空闲洗车位"
                    },
                    {
                        // 洗车位收入
                        num0: 3500,
                        num1: '+2%',
                        name0: "洗车位收入",
                        name1: "环比"
                    },
                ]
            },
            // 昨日点击数据处理方法
            zuotian() {
                this.classStrust1 = 0
                this.classStrust2 = 1
                this.classStrust3 = 0
                this.classStrust4 = 0
                // 数据变动
                this.contentNumList = [
                    {
                        // 总车位数
                        num0: 100,
                        num1: 30,
                        name0: "总车位数",
                        name1: "剩余车位数"
                    },
                    {
                        // 总收入
                        num0: 50000,
                        num1: '+6%',
                        name0: "总收入",
                        name1: "环比"
                    },
                    {
                        // 应收金额
                        num0: 50000,
                        num1: '+7%',
                        name0: "应收金额",
                        name1: "环比"
                    },
                    {
                        // 欠费金额
                        num0: 4000,
                        num1: '+10%',
                        name0: "欠费金额",
                        name1: "环比"
                    },
                    {
                        // 充电桩总数
                        num0: 10,
                        num1: 5,
                        name0: "充电桩总数",
                        name1: "空闲桩位"
                    },
                    {
                        // 充电桩总收入
                        num0: 5600,
                        num1: '+3%',
                        name0: "充电桩总收入",
                        name1: "环比"
                    },
                    {
                        // 洗车位总数
                        num0: 5,
                        num1: 2,
                        name0: "洗车位总数",
                        name1: "空闲洗车位"
                    },
                    {
                        // 洗车位收入
                        num0: 3500,
                        num1: '+2%',
                        name0: "洗车位收入",
                        name1: "环比"
                    },
                ]
            },
            // 本周点击数据处理方法
            benzhou() {
                this.classStrust1 = 0
                this.classStrust2 = 0
                this.classStrust3 = 1
                this.classStrust4 = 0
                // 数据变动
                this.contentNumList = [
                    {
                        // 总车位数
                        num0: 100,
                        num1: 30,
                        name0: "总车位数",
                        name1: "剩余车位数"
                    },
                    {
                        // 总收入
                        num0: 10000,
                        num1: '+6%',
                        name0: "总收入",
                        name1: "环比"
                    },
                    {
                        // 应收金额
                        num0: 5600,
                        num1: '+7%',
                        name0: "应收金额",
                        name1: "环比"
                    },
                    {
                        // 欠费金额
                        num0: 400,
                        num1: '+10%',
                        name0: "欠费金额",
                        name1: "环比"
                    },
                    {
                        // 充电桩总数
                        num0: 10,
                        num1: 5,
                        name0: "充电桩总数",
                        name1: "空闲桩位"
                    },
                    {
                        // 充电桩总收入
                        num0: 1500,
                        num1: '+3%',
                        name0: "充电桩总收入",
                        name1: "环比"
                    },
                    {
                        // 洗车位总数
                        num0: 5,
                        num1: 2,
                        name0: "洗车位总数",
                        name1: "空闲洗车位"
                    },
                    {
                        // 洗车位收入
                        num0: 2500,
                        num1: '+2%',
                        name0: "洗车位收入",
                        name1: "环比"
                    },
                ]
            },
            // 本月点击数据处理方法
            benyue() {
                this.classStrust1 = 0
                this.classStrust2 = 0
                this.classStrust3 = 0
                this.classStrust4 = 1
                // 数据变动
                this.contentNumList = [
                    {
                        // 总车位数
                        num0: 100,
                        num1: 30,
                        name0: "总车位数",
                        name1: "剩余车位数"
                    },
                    {
                        // 总收入
                        num0: 10000,
                        num1: '+6%',
                        name0: "总收入",
                        name1: "环比"
                    },
                    {
                        // 应收金额
                        num0: 5600,
                        num1: '+7%',
                        name0: "应收金额",
                        name1: "环比"
                    },
                    {
                        // 欠费金额
                        num0: 400,
                        num1: '+10%',
                        name0: "欠费金额",
                        name1: "环比"
                    },
                    {
                        // 充电桩总数
                        num0: 10,
                        num1: 5,
                        name0: "充电桩总数",
                        name1: "空闲桩位"
                    },
                    {
                        // 充电桩总收入
                        num0: 5600,
                        num1: '+3%',
                        name0: "充电桩总收入",
                        name1: "环比"
                    },
                    {
                        // 洗车位总数
                        num0: 5,
                        num1: 2,
                        name0: "洗车位总数",
                        name1: "空闲洗车位"
                    },
                    {
                        // 洗车位收入
                        num0: 36000,
                        num1: '+2%',
                        name0: "洗车位收入",
                        name1: "环比"
                    },
                ]
            }
        }
    }
</script>
<style scoped>
    .allContent {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    /*左边内容开始*/
    .leftContent {
        width: 35%;
        height: 100%;
        overflow: hidden;
        float: left;
    }

    /* 左边上部分车位统计部分 */
    .leftUpContent {
        width: 100%;
        height: 30%;
    }

    /* 顶部切换控件部分 */
    .leftUpContentSwitch {
        width: 100%;
        height: 15%;
        float: left;
    }

    /* 今日、昨日、本周、本月 样式 */
    /* 选中状态样式 */
    .leftUpContentSwitch1 {
        width: 15%;
        height: 96%;
        background-color: rgb(113, 190, 241);
        float: left;
        text-align: center;
        border: 1px solid black;
    }

    .leftUpContentSwitch2 {
        background-color: rgb(244, 246, 248);
    }

    .leftUpContentSwitch1,
    .leftUpContentSwitch1:hover {
        cursor: pointer
    }

    /* 今日、昨日、本周、本月 文字样式 */
    .leftUpContentSwitchSpan {
        color: black;
        font-size: 15px;
        position: relative;
        top: 20%;
    }

    /* 顶部统计部分样式 */
    .leftUpContentNum {
        width: 100%;
        height: 85%;
        float: left;
    }

    /* 统计部分外部整体样式 */
    .leftUpContentNumContent {
        width: 32%;
        height: 28%;
        float: left;
        margin-top: 2%;
        margin-left: 1%;
        background-color: turquoise;
    }

    /* 统计部分图片样式 */
    .leftUpContentNumImg {
        width: 30%;
        height: 100%;
        float: left;
    }

    /* 统计部分文字部分样式 */
    .leftUpContentNumSpan1 {
        font-size: 14px;
        color: white;
        position: relative;
        top: 10%;
    }

    .leftUpContentNumSpan2 {
        font-size: 15px;
        color: red;
        position: relative;
        top: 30%;
    }

    /* 左边下部分车位统计部分 */
    .leftDownContent {
        width: 100%;
        height: 70%;
    }

    /* 左边下部分echarts图表 */
    .leftDownContentCharts {
        width: 100%;
        height: 32%;
        margin-top: 1%;
        float: left;
    }

    /* 左边内容结束*/

    /* 右边内容开始 */
    .rightContent {
        width: 65%;
        height: 100%;
        overflow: hidden;
        float: left;
    }

    /* 右边上部分内容 */
    .rightUpContent {
        width: 100%;
        height: 60%;
    }

    /* 地图部分样式 */
    .dituStyle {
        width: 65%;
        height: 100%;
        float: left;
    }

    /* 右上角图表部分 */
    .rightUpContentCharts {
        width: 35%;
        height: 100%;
        float: left;
    }

    /* 右边下部分内容 */
    .rightDownContet {
        width: 100%;
        height: 40%;
        float: left;
        background-color: blanchedalmond;
    }

    /* 左边右下角echarts图表部分 */
    .echartsContent {
        width: 48.5%;
        height: 46.5%;
        margin-left: 1%;
        margin-top: 1%;
        float: left;
    }

    /* 右边内容结束*/
</style>