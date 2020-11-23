<!--
    洗车机报警信息统计
 * @Author: 邵青阳
 * @Date: 2020-11-23 09:16:41
 * @LastEditTime: 2020-11-23 09:51:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\reportAnalysis\operationReport\alarmInformationCarWashingMachine.VUE
-->
<template>
    <div class="about">
        <!-- 上部分查询内容 -->
        <div class="up">
            <el-form :inline="true" :model="query" class="demo-form-inline">
                <el-row>
                    <el-col :span="7">
                        <el-form-item label="统计日期">
                            <el-date-picker v-model="query.startStatisDate" style="width: 170px;"
                                value-format="yyyy-MM-dd" placeholder="请选择起始日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="~">
                            <el-date-picker v-model="query.endStatisDate" style="width: 170px;"
                                value-format="yyyy-MM-dd" placeholder="请选择截止日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="停车场">
                            <el-select v-model="query.parkId" placeholder="请选择停车场">
                                <el-option label="全部" value=""></el-option>
                                <el-option v-for="(item, index) in parkList" :label="item.name" :value="item.code"
                                    :key="index">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="洗车机名称">
                            <el-input v-model="query.carNum" palceholder="请输入洗车机名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5" v-if = "false">
                        <el-form-item label="支付方式">
                            <el-select v-model="query.payMethod" placeholder="请选择支付方式">
                                <el-option label="全部" value=""></el-option>
                                <el-option v-for="(item, index) in payMethodList" :label="item.name" :value="item.name"
                                    :key="index">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <el-form-item>
                            <el-button type="primary" @click="queryButton">查询</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <!-- 中间图标部分内容 -->
        <div class="center">
            <el-table :data="payList" :row-class-name="tableRowClassName"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;height:90%">
                <el-table-column prop="statisticDate" :show-overflow-tooltip="true" label="报警时间" />
                <el-table-column prop="parkName" :show-overflow-tooltip="true" label="洗车机编号" />
                <el-table-column prop="passagewayName" :show-overflow-tooltip="true" label="洗车机名称" />
                <el-table-column prop="passagewayGateName" :show-overflow-tooltip="true" label="停车场名称" />
                <el-table-column prop="income" :show-overflow-tooltip="true" label="报警信息" />
                <!-- <el-table-column prop="carNum" :show-overflow-tooltip="true" label="车牌号" />
                <el-table-column prop="payMethod" :show-overflow-tooltip="true" label="支付方式" />
                <el-table-column prop="oweMoney" :show-overflow-tooltip="true" label="欠费金额" /> -->
            </el-table>
            <!--分页条-->
            <div style="width:100%;height:9%;margin-top: 1%">
                <el-pagination style="position: absolute;right: 1px;" background
                    layout="total, prev, pager, next, jumper" :page-size="pageSize"
                    @current-change="handleCurrentModify" :current-page="pageNum" :total="pageTotal" />
            </div>
        </div>
        <!-- 底部图表部分 -->
        <div class="down">
            <!-- 洗车机报警信息按月分布 -->
            <div class="echartStyle" id="payAna">
                <Xchart id="payAna" :option="payAnaChart" />
            </div>
            <!--  洗车机报警类型统计-->
            <div class="echartStyle" id="payMethod">
                <Xchart id="payMethod" :option="payMethodChart"></Xchart>
            </div>
            <!-- 洗车机报警信息按时间段统计 -->
            <div class="echartStyle" id="cartime">
                <Xchart id="cartime" :option="cartimeChart" />
            </div>
        </div>
    </div>
</template>
<script>
    import Xchart from "../../components/charts/charts.vue"
    import HighCharts from 'highcharts'
    import Xchart3d from "@/components/charts/charts3d";

    export default {
        // 组件导入
        components: {
            Xchart,
        },
        data() {
            return {
                //查询内容暂存
                query: {
                    parkId: "",
                    payMethod: ""
                },
                // 停车场下拉框数据暂存处
                parkList: [],
                //支付方式下拉框数据暂存处
                payMethodList: [
                    {
                        name: "支付宝",
                        code: 1
                    },
                    {
                        name: "微信",
                        code: 2
                    },
                    {
                        name: "ETC",
                        code: 3
                    },
                    {
                        name: "现金",
                        code: 4
                    }
                ],
                //支付明细列表
                payList: [],
                //初始化分页
                pageNum: 1,
                pageSize: 5,
                pageTotal: 12,
                // 柱状图serise中的数据
                payAnaX: [],
                dataListC: [],
                payAnaChart: {},
                //饼图数据
                dataListP: [],
                payMethodChart: {},
                cartime:'',
                cartimeChart:{}

            };
        },
        mounted() {
            //初始化列表
            this.queryPayList();
            this.queryParkList()
            this.drawPayAnaChart();
            this.timeChart();
            this.drawPayMethodChart();
        },
        methods: {
            //查询
            queryButton() {
                this.queryPayList();
                this.drawPayAnaChart();
                this.timeChart();
                this.drawPayMethodChart();
            },
            //斑马纹样式
            tableRowClassName({ rowIndex }) {
                if (rowIndex % 2) {
                    return "successRow11";
                } else {
                    return "successSecond";
                }
            },
            // 分页查询方法
            handleCurrentModify(val) {
                this.pageNum = val;
                // 查询列表方法
                this.queryPayList();
            },
            //列表查询
            queryPayList() {
                const param = {
                    endDate: this.query.endStatisDate,
                    startDate: this.query.startStatisDate,
                    parkId: this.query.parkId,
                    carNum: this.query.carNum,
                    payMethod: this.query.payMethod,
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                };
                this.$reportAnalysis.queryAccountStatisList(param).then(res => {
                    this.payList = res.resultEntity.list;
                    this.pageTotal = res.resultEntity.total;
                });
            },
            drawPayMethodChart() {
                const param = {
                    startStatisDate: this.query.startStatisDate,
                    endStatisDate: this.query.endStatisDate
                };
                this.$reportAnalysis.paymentAnalysis(param).then(res => {
                    const param = {
                        type: 'pie',
                        name: '收入分析',
                        data: [
                            ['支付宝', Number(res.data.dataList[0].alipayPaymentMoneyAmount)],
                            ['微信', Number(res.data.dataList[0].wechatPaymentMoneyAmount)],
                            ['现金', Number(res.data.dataList[0].cashPaymentMoneyAmount)],
                            ['扫码', Number(res.data.dataList[0].qrCodePaymentMoneyAmount)]
                        ]
                    };
                    console.log("dayinshuju", this.dataListP)
                    this.dataListP.push(param);
                    this.payMethodChart = {
                        chart: {
                            type: "pie",
                            renderTo: "payMethod",
                            options3d: {
                                enabled: true,
                                alpha: 45,
                                beta: 0
                            }
                        },
                        title: {
                            text: "洗车机报警类型分析"
                        },
                        credits: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: "pointer",
                                innerSize: 100,
                                depth: 45,
                                dataLabels: {
                                    enabled: true,
                                    format: "{point.name}"
                                }
                            }
                        },
                        series: this.dataListP
                    }
                    new HighCharts.chart(this.payMethodChart);
                })
            },
            drawPayAnaChart() {
                const param = {
                    startStatisDate: this.query.startStatisDate,
                    endStatisDate: this.query.endStatisDate
                };

                this.$reportAnalysis.trendAnalysis(param).then(res => {
                    this.payAnaX = [];
                    this.dataListC = [];
                    var dataListA = [];
                    var dataListB = [];
                    var dataListC = [];
                    res.data.dataList.forEach((item) => {
                        this.payAnaX.push(item.date);
                        dataListA.push(Number(item.arrearageMoneyAmount));
                        dataListB.push(Number(item.memberRechargeMoneyAmount));
                        dataListC.push(Number(item.paymentMoneyAmount));
                    });
                    const paramA = {
                        name: '欠费金额',
                        data: dataListA
                    };
                    this.dataListC.push(paramA);
                    const paramB = {
                        name: '月卡充值金额',
                        data: dataListB
                    };
                    this.dataListC.push(paramB);
                    const paramC = {
                        name: '普通用户缴费金额',
                        data: dataListC
                    };
                    this.dataListC.push(paramC);
                    this.payAnaChart = {
                        chart: {
                            type: 'column',
                            renderTo: 'payAna'
                        },
                        title: {
                            text: '洗车机信息按月分析'
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: this.payAnaX
                        },
                        yAxis: {
                            title: {
                                text: ''
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
                            pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>元'
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
                        series: this.dataListC
                    }
                    new HighCharts.chart(this.payAnaChart);
                });
            },
            timeChart() {
                const param = {
                    startStatisDate: this.query.startStatisDate,
                    endStatisDate: this.query.endStatisDate
                };

                this.$reportAnalysis.trendAnalysis(param).then(res => {
                    this.payAnaX = [];
                    this.dataListC = [];
                    var dataListA = [];
                    var dataListB = [];
                    var dataListC = [];
                    res.data.dataList.forEach((item) => {
                        this.payAnaX.push(item.date);
                        dataListA.push(Number(item.arrearageMoneyAmount));
                        dataListB.push(Number(item.memberRechargeMoneyAmount));
                        dataListC.push(Number(item.paymentMoneyAmount));
                    });
                    const paramA = {
                        name: '欠费金额',
                        data: dataListA
                    };
                    this.dataListC.push(paramA);
                    const paramB = {
                        name: '月卡充值金额',
                        data: dataListB
                    };
                    this.dataListC.push(paramB);
                    const paramC = {
                        name: '普通用户缴费金额',
                        data: dataListC
                    };
                    this.dataListC.push(paramC);
                    this.cartimeChart = {
                        chart: {
                            type: 'column',
                            renderTo: 'cartime'
                        },
                        title: {
                            text: '洗车机报警信息按月统计'
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: this.payAnaX
                        },
                        yAxis: {
                            title: {
                                text: ''
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
                            pointFormat: '{series.name} 停车 <b>{point.y:,.0f}</b>元'
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
                        series: this.dataListC
                    }
                    new HighCharts.chart(this.cartimeChart);
                });
            },
            //查询停车场列表数据
            queryParkList() {
                const params = {
                    columnName: ["park_id", "park_name"],
                    tableName: "t_bim_park",
                    whereStr: "district_code = 321302"
                };
                this.$deviceManagement.queryDictData(params).then(res => {
                    this.parkList = res.data.dataList;
                });
            }


        }
    }
</script>
<style scoped>
    /* 总体的页面样式 */
    .about {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    /* 顶部查询部分 */
    .up {
        width: 100%;
        height: 5%;
        float: left;
    }

    /* 查询条件部分样式 */
    .demo-form-inline {
        width: 100%;
        height: 80%;
        margin-top: 0.5%;
        padding-left: 2%;
    }

    /* 中间部分图表内容 */
    .center {
        margin-top: 2%;
        width: 100%;
        height: 46%;
        float: left;
    }

    /* 中间每个图表部分样式 */
    .echartStyle {
        width: 32%;
        height: 100%;
        background-color: bisque;
        float: left;
        margin-top: 1%;
        margin-left: 1%;
    }

    /* 斑马纹样式 */
    /deep/ .el-table .successRow11 {
        background: #7de6f8 !important;
    }

    /deep/ .el-table .successSecond {
        background: #8ed3e7 !important;
    }

    /* 底部表格部分 */
    .down {
        width: 100%;
        height: 41%;
        margin-top: 1%;
        float: left;
    }
</style>