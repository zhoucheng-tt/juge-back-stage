<!--
    首页高保真版本
* @Author: 邵青阳
* @Date: 2020-11-10 10:23:28
 * @LastEditTime: 2020-11-12 19:13:31
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
                
            </div>
            <div class="centerDown" id="map"></div>
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
                        <Xchart id="parkingRevenueRanking" :option="parkingRevenueRankingOptions"></Xchart>
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

                // 停车数量折线图
                numberOfParking: "",
                numberOfParkingOptions: {},
                // 图表数据
                numberOfParkingData: [6, 11, 32, 110, 235, 369, 640,
                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                    27387, 29459, 31056, 31982, 32040, 31233, 29224],
                numberOfParkingXz: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
                numberOfParkingName: '停车数量',

                // 平均停车时长
                averageParkingTime: '',
                averageParkingTimeOptions: {},
                // 图表数据
                averageParkingTimeData: [6, 11, 32, 110, 235, 369, 640,
                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                    27387, 29459, 31056, 31982, 32040, 31233, 29224],
                averageParkingTimeXz: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
                averageParkingTimeName: '平均停车时长',

                // 车位利用率
                parkingSpaceUtilization: '',
                parkingSpaceUtilizationOptions: {},
                // 图表数据
                parkingSpaceUtilizationData: [6, 11, 32, 110, 235, 369, 640,
                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                    27387, 29459, 31056, 31982, 32040, 31233, 29224],
                parkingSpaceUtilizationXz: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
                parkingSpaceUtilizationName: '车位利用率',

                // 车位周转率  
                parkingSpaceTurnoverRate: '',
                parkingSpaceTurnoverRateOptions: {},
                // 图表数据
                parkingSpaceTurnoverRateData: [6, 11, 32, 110, 235, 369, 640,
                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                    27387, 29459, 31056, 31982, 32040, 31233, 29224],
                parkingSpaceTurnoverRateXz: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
                parkingSpaceTurnoverRateName: '车位周转率',

                // 支付收入排行
                paymentIncomeAnalysis: '',
                paymentIncomeAnalysisPie: {},
                // 充电桩收入
                chargingPileRevenue: '',
                chargingPileRevenueLine: {},
                // 自助洗车收入
                selfServiceCarWashing: '',
                selfServiceCarWashingLine: {},
                // 停车场收入排行
                parkingRevenueRanking: '',
                parkingRevenueRankingOptions: {}
            }
        },
        mounted() {
            // 添加地图图标方式
            this.initMap();
            // 添加图标的方法
            this.addMoudel();
            // 支付方式
            this.querypaymentIncomeAnalysisPie();
            // 停车数量
            this.queryNumberOfParking();
            // 平均停车时长
            this.queryaverageParkingTime();
            // 车位利用率
            this.queryparkingSpaceUtilization();
            // 车位周转率
            this.queryparkingSpaceTurnoverRate();
            // 充电桩收入排行
            this.querychargingPileRevenueLine();
            // 充电桩收入按月分析
            this.queryselfServiceCarWashingLine();
            // 停车场收入排行
            this.queryparkingRevenueRanking();
            this.queryTest();
        },
        methods: {
            queryTest(){
                var jsonStr = {};
                // debugger
                this.$homePage.test().then(res => {
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
                        itemMarginTop: 5,
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
                            ['现金', 8.5],
                            ['ETC', 6.2]
                        ]
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.paymentIncomeAnalysisPie);
            },
            // 停车数量折线图的绑定id和option方法
            queryNumberOfParking() {
                //这边就是把参数等于对应的值就行了
                // 绑定自定义的id的字段名
                this.lineId = 'numberOfParking';
                // 自定义绑定的options的字段名
                this.lineOptions = 'lineOptions';
                // 自定义停车时长
                this.lineTitle = '停车数量';
                // 定义图表类型
                this.lineChartsType = 'area';
                // 将数据绑定到暂存数组中
                this.lineChartsList = this.numberOfParkingData;
                // 自定义x轴坐标数据
                this.lineChartsX = this.numberOfParkingXz;
                // 绑定定义的名字
                this.lineChartsName = this.numberOfParkingName;
                // 调用折线图的方法
                this.queryLine(this.lineId, this.lineOptions);
            },
            // 平均停车时长
            queryaverageParkingTime() {
                this.lineId = 'averageParkingTime';
                this.lineOptions = 'averageParkingTimeOptions';
                this.lineTitle = '平均停车时长';
                this.lineChartsType = 'area';
                this.lineChartsList = this.averageParkingTimeData;
                this.lineChartsX = this.averageParkingTimeXz;
                this.lineChartsName = this.averageParkingTimeName;
                this.queryLine(this.lineId, this.lineOptions);
            },
            // 车位利用率
            queryparkingSpaceUtilization() {
                this.lineId = 'parkingSpaceUtilization';
                this.lineOptions = 'parkingSpaceUtilizationOptions';
                this.lineTitle = '车位利用率';
                this.lineChartsType = 'area';
                this.lineChartsList = this.parkingSpaceUtilizationData;
                this.lineChartsX = this.parkingSpaceUtilizationXz;
                this.lineChartsName = this.parkingSpaceUtilizationName;
                this.queryLine(this.lineId, this.lineOptions);
            },
            // 车位周转率
            queryparkingSpaceTurnoverRate() {
                this.lineId = 'parkingSpaceTurnoverRate';
                this.lineOptions = 'parkingSpaceTurnoverRateOptions';
                this.lineTitle = '车位周转率';
                this.lineChartsType = 'area';
                this.lineChartsList = this.parkingSpaceTurnoverRateData;
                this.lineChartsX = this.parkingSpaceTurnoverRateXz;
                this.lineChartsName = this.parkingSpaceTurnoverRateName;
                this.queryLine(this.lineId, this.lineOptions);
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
            // 停车场收入排行
            queryparkingRevenueRanking() {
                var that = this;
                that.parkingRevenueRankingOptions = {
                    chart: {
                        type: 'bar',
                        renderTo: 'parkingRevenueRanking',
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        categories: ['内部停车场', '专用停车场', '员工停车场', '新能源停车场', '公共停车场'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '单位（辆）',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' 辆'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: false,
                                allowOverlap: false // 允许数据标签重叠
                            },
                            showInLegend: false
                        }
                    },
                    series: [{
                        name: '共',
                        data: [107, 31, 635, 203, 2]
                    }]
                }
                // 绘制
                new HighCharts.Chart(that.parkingRevenueRankingOptions);
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
</style>