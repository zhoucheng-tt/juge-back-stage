<!--
    首页高保真版本
* @Author: 邵青阳
* @Date: 2020-11-10 10:23:28
 * @LastEditTime: 2020-11-13 15:54:41
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
                    <!-- 总停车数量   -->
                    <div class="leftChartCenter" id="numberOfParking">
                        <Xchart id="numberOfParking" :option="numberOfParkingOptions"></Xchart>
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
                    <!-- 平均停车时长   -->
                    <div class="leftChartCenter" id="averageParkingTime">
                        <Xchart id="averageParkingTime" :option="averageParkingTimeOptions"></Xchart>
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
                    <!-- 充电桩收入按月分析   -->
                    <div class="leftChartCenter" id="chargingPileRevenue">
                        <Xchart id="chargingPileRevenue" :option="chargingPileRevenueLine"></Xchart>
                    </div>
                    <div class="leftChartDown">
                        <img src="../../assets/homePage/juxing.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 中间样式 -->
        <div class="center">
            <div class="centerUp">
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
                        <!-- 车位统计部分内部文字部分 -->
<!--                        第一行-->
                        <el-row>
                            <el-col :span="6">
                                <el-row>
                                    <span class="spanTop">
                                        总收入（元）:
                                    </span>
                                </el-row>
                                <el-row>
                                    <span class="spanTopNum" style="color:#08F6E4;">
                                          {{parseInt(item.totalIncome/100)}}
                                    </span>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row>
                                    <span class="spanTop">
                                        应收金额（元）:
                                    </span>
                                </el-row>
                                <el-row>
                                    <span class="spanTopNum" style="color:#895EFC ">
                                        {{parseInt(item.receivableMoneyAmount/100)}}
                                    </span>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row>
                                    <span class="spanTop">
                                        欠收金额（元）:
                                    </span>
                                </el-row>
                                <el-row>
                                    <span class="spanTopNum" style="color:#E9C503">
                                      {{parseInt(item.arrearageMoneyAmount/100)}}
                                    </span>
                                </el-row>
                            </el-col>
                        </el-row>
<!--                        第二行-->
                        <el-row style="margin-top: 4%">
                            <el-col :span="5">
                                <el-row>
                                    <span class="spanMid">
                                            空闲充电桩总数:
                                    </span>
                                </el-row>
                                <el-row>
                                    <span class="spanMidNum">
                                        {{item.totalRechargeLeft}}
                                    </span>
                                </el-row>
                            </el-col>
                            <el-col :span="5">
                                <el-row>
                                      <span class="spanMid">
                                         充电桩总收入:
                                    </span>
                                </el-row>
                                <el-row>
                                     <span class="spanMidNum">
                                        {{item.rechargeLeftIncome}}
                                    </span>
                                </el-row>
                            </el-col>
                            <el-col :span="5">
                                <el-row>
                                      <span class="spanMid">
                                         空闲洗车位总数:
                                    </span>
                                </el-row>
                                <el-row>
                                     <span class="spanMidNum">
                                        {{item.totalWashCarPort}}
                                    </span>
                                </el-row>
                            </el-col>
                            <el-col :span="4">
                                <el-row>
                                      <span class="spanMid">
                                         洗车位收入:
                                    </span>
                                </el-row>
                                <el-row>
                                     <span class="spanMidNum">
                                         {{item.washCarPortIncome}}
                                    </span>
                                </el-row>
                            </el-col>
                            <el-col :span="5">
                                <el-row>
                                    <span class="leftCarPlot">
                                        剩余车位数:
                                    </span>
                                </el-row>
                                <el-row class="leftCarPlotBorder">
                                    <span class="leftCarPlotNum">
                                        {{item.leftPort}}
                                    </span>
                                </el-row>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
<!--            中间下半边的地图-->
            <div class="centerDown" id="map">
            </div>
        </div>
        <!-- 右边数据 -->
        <div class="right">
            <div class="leftContent">
                <!-- 停车场收入排行  parkingRevenueRanking-->
                <div class="leftCharts">
                    <div class="leftChartUp">
                        <img src="../../assets/homePage/fangkuai.svg" class="leftChartUpImage" alt="">
                        <span class="spanStyle">停车场收入排行</span>
                    </div>
                    <!-- 停车场收入排行   -->
                    <div class="leftChartCenter" id="parkingRevenueRanking">
                        <Xchart id="parkingRevenueRanking" :option="parkingRevenueRankingChart"></Xchart>
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
                    <!-- 车位利用率   -->
                    <div class="leftChartCenter" id="parkingSpaceUtilization">
                        <Xchart id="parkingSpaceUtilization" :option="parkingSpaceUtilizationOptions"></Xchart>
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
                    <!-- 车位周转率   -->
                    <div class="leftChartCenter" id="parkingSpaceTurnoverRate">
                        <Xchart id="parkingSpaceTurnoverRate" :option="parkingSpaceTurnoverRateOptions"></Xchart>
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
                    <!-- 自助洗车收入按月分析   -->
                    <div class="leftChartCenter" id="selfServiceCarWashing">
                        <Xchart id="selfServiceCarWashing" :option="selfServiceCarWashingLine"></Xchart>
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
                // 控制默认展示样式
                classStrust1: 1,
                classStrust2: 0,
                classStrust3: 0,
                classStrust4: 0,
                // 充电桩统计数据 （暂时的数据）
                contentNumList:[],
                //"statisType"存放
                days:{
                    statisType:"today"
                },
                // 地图中点击添加弹框
                mapList: {
                    lng: 119.016937,
                    lat: 31.706205
                },
                map: '',
                xlicon: require("../../assets/homePage/TCIcon.png"),
                // 动态绑定的停车折线图的id和option
                lineId: '',
                lineOptions: {},
                // 动态绑定标题
                lineTitle: '',
                // 图表类型
                lineChartsType: '',
                // 暂存数据数组
                lineChartsList: [],
                // x轴坐标的信息
                lineChartsX: [],
                // serise中的那么数据
                lineChartsName: '',

                // 停车总数量折线图
                numberOfParking: "",
                numberOfParkingOptions: {},
                // 图表数据
                numberOfParkingData: [],
                numberOfParkingXz: [],
                numberOfParkingName: '停车总数量',

                // 平均停车时长
                averageParkingTime: '',
                averageParkingTimeOptions: {},
                // 图表数据
                averageParkingTimeData: [],
                averageParkingTimeXz: [],
                averageParkingTimeName: '平均停车时长',

                // 车位利用率
                parkingSpaceUtilization: '',
                parkingSpaceUtilizationOptions: {},
                // 图表数据
                parkingSpaceUtilizationData: [],
                parkingSpaceUtilizationXz: [],
                parkingSpaceUtilizationName: '车位利用率',

                // 车位周转率
                parkingSpaceTurnoverRate: '',
                parkingSpaceTurnoverRateOptions: {},
                // 图表数据
                parkingSpaceTurnoverRateData: [],
                parkingSpaceTurnoverRateXz: [],
                parkingSpaceTurnoverRateName: '车位周转率',

                // 停车场收入排行
                parkingRevenueRankingChartX: [],
                parkingRevenueRankingChartY:[],
                parkingRevenueRankingList: [],
                parkingRevenueRankingChart:{},

                // 支付收入排行
                paymentIncomeAnalysis: [],
                paymentIncomeAnalysisPie: {},

                // 充电桩收入
                chargingPileRevenue: '',
                chargingPileRevenueLine: {},
                // 自助洗车收入
                selfServiceCarWashing: '',
                selfServiceCarWashingLine: {},

            }
        },
        mounted() {
            // 添加地图图标方式
            this.initMap();
            // 添加图标的方法
            this.addMoudel();
            // 充电桩收入排行
            this.querychargingPileRevenueLine();
            // 充电桩收入按月分析
            this.queryselfServiceCarWashingLine();
            this.queryTest();
            //查询总收入
            this.jintian();
            // this.jintian();
        },
        methods: {

            // 今日点击数据处理方法
            jintian() {
                //控制显示今天
                this.classStrust1 = 1
                this.classStrust2 = 0
                this.classStrust3 = 0
                this.classStrust4 = 0
                this.days.statisType = "today"
                // 支付方式
                this.queryPaymentBehaviorAnalysis();
                // 总停车数量
                this.queryParkOptByParkCount();
                // 平均停车时长
                this.queryParkOptByAvgParkDuration();
                // 车位利用率
                this.queryParkOptByParkSpaceUsedRate();
                // 车位周转率
                this.queryParkOptByParkSpaceTurnoverRate();
                // 停车场收入排行
                this.queryParkIncomeRanking();
                //顶部总收入查询
                this.queryTotalIncome();
                // 数据变动
                this.contentNumList = [];
            },
            // 昨日点击数据处理方法
            zuotian() {
                this.classStrust1 = 0
                this.classStrust2 = 1
                this.classStrust3 = 0
                this.classStrust4 = 0
                this.days.statisType = "yesterday"
                this.queryParkOptByParkCount();
                this.queryParkOptByAvgParkDuration();
                this.queryParkOptByParkSpaceUsedRate();
                this.queryParkOptByParkSpaceTurnoverRate();
                this.queryParkIncomeRanking();
                this.queryPaymentBehaviorAnalysis();
                //顶部总收入查询
                this.queryTotalIncome();
                // 数据变动
                this.contentNumList = [];
            },
            // 本周点击数据处理方法
            benzhou() {
                this.classStrust1 = 0
                this.classStrust2 = 0
                this.classStrust3 = 1
                this.classStrust4 = 0
                this.days.statisType = "currentWeek"
                this.queryParkOptByParkCount();
                this.queryParkOptByAvgParkDuration();
                this.queryParkOptByParkSpaceUsedRate();
                this.queryParkOptByParkSpaceTurnoverRate();
                this.queryParkIncomeRanking();
                this.queryPaymentBehaviorAnalysis();
                //顶部总收入查询
                this.queryTotalIncome();
                // 数据变动
                this.contentNumList = [];
            },
            // 本月点击数据处理方法
            benyue() {
                this.classStrust1 = 0
                this.classStrust2 = 0
                this.classStrust3 = 0
                this.classStrust4 = 1
                this.days.statisType = "currentMonth"
                this.queryParkOptByParkCount();
                this.queryParkOptByAvgParkDuration();
                this.queryParkOptByParkSpaceUsedRate();
                this.queryParkOptByParkSpaceTurnoverRate();
                this.queryParkIncomeRanking();
                this.queryPaymentBehaviorAnalysis();
                //顶部总收入查询
                this.queryTotalIncome();
                // 数据变动
                this.contentNumList = [];
            },
            //获取总的收入的方法
            queryTotalIncome(){
                var that = this;
                const param={
                    statisType : this.days.statisType
                };
                console.log('总收入方法传入的参数',param)
                this.$homePage.queryTotalIncome(param).then(res => {
                    that.contentNumList=res.data.dataList;
                    console.log("总收入参数",that.contentNumList)
                })
            },
            // 支付收入排行
            queryPaymentBehaviorAnalysis() {
                const param = {
                    "statisType":this.days.statisType
                };
                this.$homePage.queryPaymentBehaviorAnalysis(param).then(res => {
                    var alipayDataList = ['支付宝支付', Number(res.data.dataList[0].alipayPaymentMoneyAmount) / Number(res.data.dataList[0].paymentMoneyAmountTotalAll)];
                    var cashDataList = ['现金支付', Number(res.data.dataList[0].cashPaymentMoneyAmount) / Number(res.data.dataList[0].paymentMoneyAmountTotalAll)];
                    var wechatDataList = ['微信支付', Number(res.data.dataList[0].wechatPaymentMoneyAmount) / Number(res.data.dataList[0].paymentMoneyAmountTotalAll)];
                    var qrCodeDataList = ['扫码支付', Number(res.data.dataList[0].qrCodePaymentMoneyAmount) / Number(res.data.dataList[0].paymentMoneyAmountTotalAll)];

                    this.paymentIncomeAnalysis = [
                        {
                            type: "pie",
                            name: "支付占比",
                            data: [alipayDataList, wechatDataList, qrCodeDataList, cashDataList]
                        }
                    ];
                    this.paymentIncomeAnalysisPie = {
                        chart: {
                            type: "pie",
                            backgroundColor: 'rgba(0,0,0,0)',
                            renderTo: "paymentIncomeAnalysis",
                            options3d: {
                                enabled: true,
                                alpha: 45,
                                beta: 0
                            }
                        },
                        title: {
                            text: "收入构成分析"
                        },
                        credits: {
                            enabled: false
                        },
                        tooltip: {
                            shared: true
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: "pointer",
                                innerSize: 1,
                                depth: 45,
                                dataLabels: {
                                    enabled: true,
                                    format: "{point.name}"
                                }
                            }
                        },
                        series: this.paymentIncomeAnalysis
                    };
                    new HighCharts.chart(this.paymentIncomeAnalysisPie);
                });
            },
            // 总停车数量折线图的绑定id和option方法
            queryParkOptByParkCount() {
                // //这边就是把参数等于对应的值就行了
                // // 绑定自定义的id的字段名
                // this.lineId = 'numberOfParking';
                // // 自定义绑定的options的字段名
                // this.lineOptions = 'lineOptions';
                // // 自定义停车时长
                // this.lineTitle = '停车数量';
                // // 定义图表类型
                // this.lineChartsType = 'area';
                // // 将数据绑定到暂存数组中
                // this.lineChartsList = this.numberOfParkingData;
                // // 自定义x轴坐标数据
                // this.lineChartsX = this.numberOfParkingXz;
                // // 绑定定义的名字
                // this.lineChartsName = this.numberOfParkingName;
                // // 调用折线图的方法
                // this.queryLine(this.lineId, this.lineOptions);
                const param = {
                    "statisType":this.days.statisType
                };
                this.$homePage.queryParkOptByParkCount(param).then(res => {
                    this.numberOfParkingXz = [];
                    this.numberOfParkingData = [];
                    res.data.dataList.detail.forEach((item) => {
                        this.numberOfParkingXz.push(item.date);
                        this.numberOfParkingData.push(Number(item.val));
                    });
                    this.numberOfParkingOptions = {
                        chart: {
                            type: 'area',
                            backgroundColor: 'rgba(0,0,0,0)',
                            renderTo: 'numberOfParking',
                        },
                        title: {
                            text: this.numberOfParkingName
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: this.numberOfParkingXz
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
                            enabled: true,
                            align: 'center',
                            verticalAlign: 'left',
                            x: 300,
                            y: 10,
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
                            name: this.numberOfParkingName,
                            data: this.numberOfParkingData
                        }]
                    };
                    new HighCharts.chart(this.numberOfParkingOptions);
                });
            },
            // 平均停车时长
            queryParkOptByAvgParkDuration() {
                // this.lineId = 'averageParkingTime';
                // this.lineOptions = 'averageParkingTimeOptions';
                // this.lineTitle = '平均停车时长';
                // this.lineChartsType = 'area';
                // this.lineChartsList = this.averageParkingTimeData;
                // this.lineChartsX = this.averageParkingTimeXz;
                // this.lineChartsName = this.averageParkingTimeName;
                // this.queryLine(this.lineId, this.lineOptions);
                const param = {
                    "statisType":this.days.statisType
                };
                this.$homePage.queryParkOptByAvgParkDuration(param).then(res => {
                    this.averageParkingTimeXz = [];
                    this.averageParkingTimeData = [];
                    res.data.dataList.detail.forEach((item) => {
                        this.averageParkingTimeXz.push(item.date);
                        this.averageParkingTimeData.push(Number(item.val));
                    });
                    this.averageParkingTimeOptions = {
                        chart: {
                            type: 'area',
                            backgroundColor: 'rgba(0,0,0,0)',
                            renderTo: 'averageParkingTime',
                        },
                        title: {
                            text: this.averageParkingTimeName
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: this.averageParkingTimeXz
                        },
                        yAxis: {
                            title: {
                                text: '单位（分钟）'
                            },
                            labels: {
                                formatter: function () {
                                    return this.value / 1000 + 'k';
                                }
                            }
                        },
                        legend: {
                            enabled: true,
                            align: 'center',
                            verticalAlign: 'left',
                            x: 300,
                            y: 10,
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
                            pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>分钟'
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
                            name: this.averageParkingTimeName,
                            data: this.averageParkingTimeData
                        }]
                    };
                    new HighCharts.chart(this.averageParkingTimeOptions);
                });

            },
            // 车位利用率
            queryParkOptByParkSpaceUsedRate() {
                // this.lineId = 'parkingSpaceUtilization';
                // this.lineOptions = 'parkingSpaceUtilizationOptions';
                // this.lineTitle = '车位利用率';
                // this.lineChartsType = 'area';
                // this.lineChartsList = this.parkingSpaceUtilizationData;
                // this.lineChartsX = this.parkingSpaceUtilizationXz;
                // this.lineChartsName = this.parkingSpaceUtilizationName;
                // this.queryLine(this.lineId, this.lineOptions);
                const param = {
                    "statisType":this.days.statisType
                };
                this.$homePage.queryParkOptByParkSpaceUsedRate(param).then(res => {
                    this.parkingSpaceUtilizationXz = [];
                    this.parkingSpaceUtilizationData = [];
                    res.data.dataList.detail.forEach((item) => {
                        this.parkingSpaceUtilizationXz.push(item.date);
                        this.parkingSpaceUtilizationData.push(Number(item.val));
                    });
                    this.parkingSpaceUtilizationOptions = {
                        chart: {
                            type: 'area',
                            backgroundColor: 'rgba(0,0,0,0)',
                            renderTo: 'parkingSpaceUtilization',
                        },
                        title: {
                            text: this.parkingSpaceUtilizationName
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: this.parkingSpaceUtilizationXz
                        },
                        yAxis: {
                            title: {
                                text: '单位（%）'
                            },
                            labels: {
                                formatter: function () {
                                    return this.value / 1000 + 'k';
                                }
                            }
                        },
                        legend: {
                            enabled: true,
                            align: 'center',
                            verticalAlign: 'left',
                            x: 300,
                            y: 10,
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
                            pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>%'
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
                            name: this.parkingSpaceUtilizationName,
                            data: this.parkingSpaceUtilizationData
                        }]
                    };
                    new HighCharts.chart(this.parkingSpaceUtilizationOptions);
                });
            },
            // 车位周转率
            queryParkOptByParkSpaceTurnoverRate() {
                // this.lineId = 'parkingSpaceTurnoverRate';
                // this.lineOptions = 'parkingSpaceTurnoverRateOptions';
                // this.lineTitle = '车位周转率';
                // this.lineChartsType = 'area';
                // this.lineChartsList = this.parkingSpaceTurnoverRateData;
                // this.lineChartsX = this.parkingSpaceTurnoverRateXz;
                // this.lineChartsName = this.parkingSpaceTurnoverRateName;
                // this.queryLine(this.lineId, this.lineOptions);
                const param = {
                    "statisType":this.days.statisType
                };
                this.$homePage.queryParkOptByParkSpaceTurnoverRate(param).then(res => {
                    this.parkingSpaceTurnoverRateXz = [];
                    this.parkingSpaceTurnoverRateData = [];
                    res.data.dataList.detail.forEach((item) => {
                        this.parkingSpaceTurnoverRateXz.push(item.date);
                        this.parkingSpaceTurnoverRateData.push(Number(item.val));
                    });
                    this.parkingSpaceTurnoverRateOptions = {
                        chart: {
                            type: 'area',
                            backgroundColor: 'rgba(0,0,0,0)',
                            renderTo: 'parkingSpaceTurnoverRate',
                        },
                        title: {
                            text: this.parkingSpaceTurnoverRateName
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: this.parkingSpaceTurnoverRateXz
                        },
                        yAxis: {
                            title: {
                                text: '单位（%）'
                            },
                            labels: {
                                formatter: function () {
                                    return this.value / 1000 + 'k';
                                }
                            }
                        },
                        legend: {
                            enabled: true,
                            align: 'center',
                            verticalAlign: 'left',
                            x: 300,
                            y: 10,
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
                            pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>%'
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
                            name: this.parkingSpaceTurnoverRateName,
                            data: this.parkingSpaceTurnoverRateData
                        }]
                    };
                    new HighCharts.chart(this.parkingSpaceTurnoverRateOptions);
                });
            },
            // 停车场收入排行
            queryParkIncomeRanking() {
                this.parkingRevenueRankingChartX = [];
                const param = {
                    "statisType":this.days.statisType
                };
                var dataListA = [];
                this.$homePage.queryParkIncomeRanking(param).then(res => {
                    res.data.dataList.forEach((item) => {
                        this.parkingRevenueRankingChartX.push(item.parkName);
                        dataListA.push(Number(item.parkIncome));
                        // dataListB.push(Number(item.arrearageMoneyAmount));
                    });
                    this.parkingRevenueRankingList = [
                        {
                            name: this.parkName,
                            data: dataListA
                        },
                    ];
                    this.parkingRevenueRankingChart = {
                        chart: {
                            type: "bar",
                            backgroundColor: 'rgba(0,0,0,0)',
                            renderTo: "parkingRevenueRanking"
                        },
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: "停车场收入排行"
                        },
                        xAxis: {
                            categories: this.parkingRevenueRankingChartX,

                            categories: this.parkingRevenueRankingChartY
                        },
                        yAxis: {
                            title: {
                                text: ""
                            },
                            categories: this.parkingRevenueRankingChartY,
                            labels: {
                                format: "{value}分"
                            },
                        },
                        tooltip: {
                            shared: true
                        },
                        legend: {
                            enabled: false,
                            align: "center",
                            verticalAlign: "top",
                            x: 0,
                            y: -20,
                            itemStyle: {
                                color: "#cccccc",
                                cursor: "pointer",
                                fontSize: "12px",
                                fontWeight: "bold",
                                fill: "#cccccc"
                            },
                            itemHoverStyle: {
                                color: "#666666"
                            },
                            itemHiddenStyle: {
                                color: "#333333"
                            }
                        },
                        series: this.parkingRevenueRankingList
                    };
                    new HighCharts.chart(this.parkingRevenueRankingChart);
                });
            },
            // 折线图的方法
            queryLine() {
                var that = this;
                that.lineOptions = {
                    chart: {
                        type: that.lineChartsType,
                        backgroundColor: 'rgba(0,0,0,0)',
                        renderTo: that.lineId,
                    },
                    title: {
                        // text: that.lineTitle,
                        text: '',
                        style: {
                            color: 'white'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: that.lineChartsX
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
                        enabled: true,
                        align: 'center',
                        verticalAlign: 'left',
                        x: 300,
                        y: 10,
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
                        name: this.lineChartsName,
                        data: that.lineChartsList
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.lineOptions);
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
                            enabled: false,
                            alpha: 15,
                            beta: 15,
                            depth: 50,
                            viewDistance: 25
                        }
                    },
                    title: {
                        text: ''
                    },
                    yAxis: {
                        title: {
                            text: ''
                        },
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
                            enabled: false,
                            alpha: 15,
                            beta: 15,
                            depth: 50,
                            viewDistance: 25
                        }
                    },
                    title: {
                        text: ''
                    },
                    yAxis: {
                        title: {
                            text: ''
                        }
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
            //测试查询
            queryTest(){
                var jsonStr = {
                    queryDate: '2020-08-02'
                };
                // debugger
                this.$homePage.test(jsonStr).then(res => {
                    console.log("测试新建后台地址", res)
                })
            },
            // 地图方式开始
            initMap() {//地图初始化
                this.map = new AMap.Map('map', {
                    zoom: 13,
                    resizeEnable: true,
                    mapStyle: "amap://styles/normal",
                    center: [119.016937, 31.706205]
                });
                // this.map.addControl(new AMap.MapType({
                //     defaultType: 0, //0代表默认，1代表卫星
                //     showTraffic: true,//默认显示路况
                //     showRoad: true//显示路况（右上角也可点击）
                // }));
            },
            // 地图中添加标点方法
            addMoudel() {
                var that = this;
                var icon = new AMap.Icon({
                    size: new AMap.Size(20, 20),    // 图标尺寸
                    image: that.xlicon,  // Icon的图像
                    imageOffset: new AMap.Pixel(1, 1),  // 图像相对展示区域的偏移量，适于雪碧图等
                    imageSize: new AMap.Size(15, 15)   // 根据所设置的大小拉伸或压缩图片
                });
                let marker = new AMap.Marker({
                    icon: icon,
                    position: [that.mapList.lng, that.mapList.lat],
                    offset: new AMap.Pixel(-13, -30)
                });
                // 点击弹出标签方法，其中内容可以根据需要自己定义
                marker.content = '停车场名:' + "停车场1" + '<br / >剩余车位:' + "剩余20个车位"
                // 定义完标签后调用显示方法将其显示出来
                marker.on('click', this.showInfoM);
                // 点击时间暂时废弃
                // marker.on('click', e => {
                //   console.log("点击弹框弹出有")
                // });
                this.map.add(marker);
            },
            // 弹出框中标签
            showInfoM(e) {
                var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
                infoWindow.setContent(e.target.content);
                infoWindow.open(this.map, e.target.getPosition());
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
        height: 96%;
        overflow: hidden;
        float: left;
        margin-top: 1%;
    }

    /* 中间内容上部分 */
    .centerUp {
        width: 100%;
        height: 40%;
        background-color: blueviolet;
        float: left;
    }

    /* 中间内容下部分 */
    .centerDown {
        width: 100%;
        height: 60%;
        float: left;
    }

    /* 右边部分样式 */
    .right {
        width: 22%;
        height: 100%;
        overflow: hidden;
        float: left;
    }
    /* 顶部切换控件部分 */
    .leftUpContentSwitch {
        width: 100%;
        height: 10%;
        margin-left: 30%;
        /*float: left;*/
    }
    /* 今日、昨日、本周、本月 样式 */
    /* 选中状态样式 */
    .leftUpContentSwitch1 {
        width: 8%;
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
        width: 98%;
        height: 90%;
        float: left;
        margin-top: 2%;
        margin-left: 1%;
        background-color: cadetblue;
    }

    /* 统计部分图片样式 */
    .leftUpContentNumImg {
        width: 30%;
        height: 100%;
        float: left;
    }

    /* 统计部分文字部分样式 */
    /*总收入一行*/
    .spanTop{
        color: white;
        line-height: 22px;
        font-size: 16px;
        letter-spacing: 0.57px;
    }
    /*总收入一行数字*/
    .spanTopNum{
        font-size: 56px;
        line-height: 68px;
        letter-spacing:2px;
    }
    /*空闲充电桩总数*/
    .spanMid{
        color: white;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.5px;
    }
    /*充电桩总数的数字*/
    .spanMidNum{
        color: #08B4F6;
        font-size: 28px;
        line-height: 40px;
        letter-spacing: 1px;
    }
    /*剩余车位数*/
    .leftCarPlot{
        color: #286599;
        font-size: 16px;
        letter-spacing: 0.57px;
        line-height: 22px;
    }
    /*剩余车位数数字*/
    .leftCarPlotBorder{
        border: 2px solid #66E3FB;
        width: 120px;
        height: 40px;
    }
    /*剩余车位数字*/
    .leftCarPlotNum{
        color: white;
        font-size: 28px;
        line-height: 40px;
        letter-spacing: 1px;
        /*text-align: center;*/
        /*margin-left: 20%;*/
    }

</style>
