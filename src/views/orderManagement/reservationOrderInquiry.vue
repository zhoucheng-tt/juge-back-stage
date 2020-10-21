<!--
    预约订单查询
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-21 09:36:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
    <div class="all">
        <!-- 上半部分查询 -->
        <div class="up">
            <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
                <el-form-item label="停车场：">
                    <el-select v-model="upQueryList.TingNum" placeholder="请选择停车场">
                        <el-option v-for="(item, index) in parkingLotList" :label="item.parkingName"
                            :value="item.parkingName" :key="index"></el-option>
                        <!-- <el-option label="二楼" value="TingNum2"></el-option> -->
                    </el-select>
                </el-form-item>
                <el-form-item label="车牌号:">
                    <el-input v-model="upQueryList.carNum" placeholder="请输入车牌号"></el-input>
                </el-form-item>
                <!-- 时间日期选择器 -->
                <el-form-item label="预约时间:">
                    <el-date-picker v-model="upQueryList.dataTimeIn" type="datetimerange" range-separator="至"
                        start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyyMMddhhmm">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="预约状态">
                    <el-select v-model="upQueryList.struts" placeholder="请选择状态">
                        <el-option v-for="(item, index) in strutsList" :label="item.struts"
                            :value="item.struts" :key="index"></el-option>
                        <!-- <el-option label="二楼" value="TingNum2"></el-option> -->
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="SelectQueryList">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 下半部分列表 -->
        <div class="down">
            <el-table :data="orderParkingList" :row-class-name="tableRowClassName"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
                <el-table-column prop="reservationOrderNumber" label="预约单编号" width="80"></el-table-column>
                <el-table-column prop="parkingLotNumber" :show-overflow-tooltip="true" label="停车场编号" width="">
                </el-table-column>
                <el-table-column prop="nameOfParkingLot" :show-overflow-tooltip="true" label="停车场名称" width="">
                </el-table-column>
                <el-table-column prop="carNum" :show-overflow-tooltip="true" label="车牌号"></el-table-column>
                <el-table-column prop="timeAppoinTment" :show-overflow-tooltip="true" label="预约时间"></el-table-column>
                <el-table-column prop="estimatedTimeArrival" :show-overflow-tooltip="true" label="预计到达时间"></el-table-column>
                <el-table-column prop="cancellationTime" :show-overflow-tooltip="true" label="取消时间"></el-table-column>
                <el-table-column prop="appointmentStatus" :show-overflow-tooltip="true" label="预约状态"></el-table-column>
                <el-table-column :show-overflow-tooltip="true" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="showListDloage(scope.row)" type="text" size="small">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination style="position: absolute;right:4%;margin-top:20px" background
                layout="total, prev, pager, next, jumper" @current-change="handleCurrentModify" :current-page="pageNum"
                :total="pageTotal" :page-size="pageSize"></el-pagination>
        </div>
        <!-- 订单详情点击弹出框 -->
        <el-dialog title="预约订单信息：" :visible.sync="showListDloageandoff">
            <el-form :inline="true" :model="showListDloageandoffList" class="demo-form-inline">
                <el-form-item label="预约单编号:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.parkingLotNumber" readonly></el-input>
                </el-form-item>
                <el-form-item label="停车场名称:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.nameOfParkingLot" readonly></el-input>
                </el-form-item>
                <el-form-item label="车牌号:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.carNum" readonly></el-input>
                </el-form-item>
                <el-form-item label="预约时间:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.timeAppoinTment" readonly></el-input>
                </el-form-item>
                <el-form-item label="取消时间:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.appointmentStatus" readonly></el-input>
                </el-form-item>
                <el-form-item label="预约状态:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.appointmentStatus" readonly></el-input>
                </el-form-item>
                <el-form-item label="预计到达时间:" class="el-form-item-dialog" style="width:40%">
                    <el-input v-model="showListDloageandoffList.cancellationTime" readonly></el-input>
                </el-form-item>
            </el-form>
            <div>
                <h3>订单信息：</h3>
            </div>
            <el-form :inline="true" :model="showListDloageandoffList" class="demo-form-inline">
                <el-form-item label="车位号:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.parkingNumber" readonly></el-input>
                </el-form-item>
                <el-form-item label="进场时间:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.entryTime" readonly></el-input>
                </el-form-item>
                <el-form-item label="出厂时间:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.deliveryTime" readonly></el-input>
                </el-form-item>
                <el-form-item label="停车时长:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.parkingTime" readonly></el-input>
                </el-form-item>
                <el-form-item label="收费状态:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.chargingStatus" readonly></el-input>
                </el-form-item>
                <el-form-item label="应收金额:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.amountReceivable" readonly></el-input>
                </el-form-item>
                <el-form-item label="实收金额:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.paymentMethod" readonly></el-input>
                </el-form-item>
                <el-form-item label="支付方式:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.paymentMethod" readonly></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // 顶部查询数据暂存处
                upQueryList: {
                    TingNum: '',
                    carNum: '',
                    // 进场时间
                    dataTimeIn: '',
                    // 出场时间
                    dataTimeOut: '',
                },
                // 设置只读属性
                readonly : true,
                // 停车场下拉框数据暂存处
                parkingLotList: [
                    {
                        parkingName: '停车场1',
                        id: 1
                    },
                    {
                        parkingName: '停车场2',
                        id: 2
                    }
                ],
                // 预约状态数据
                strutsList:[
                    {
                        struts: "全部",
                        id: 1
                    },
                    {
                        struts: "预约成功",
                        id: 2
                    },
                    {
                        struts: "预约失败",
                        id: 3
                    }
                ],
                // 分页
                pageNum: 1,
                pageSize: 10,
                pageTotal: 4,
                // 列表中数据暂存处， 订单数据
                orderParkingList: [
                    {
                        reservationOrderNumber: '01',
                        parkingLotNumber: '1',
                        nameOfParkingLot: '一号停车场',
                        carNum: '苏A00001',
                        timeAppoinTment: '2020-10-20 10：20',
                        estimatedTimeArrival: '2020-10-20 10：20',
                        cancellationTime: '2020-10-20 18：20',
                        appointmentStatus: '预约成功',
                        // 订单信息部分数据
                        parkingNumber: '10',
                        entryTime: '2020-10-20 10：20',
                        deliveryTime: '2020-10-20 18：20',
                        parkingTime: '8小时',
                        chargingStatus: '未支付',
                        amountReceivable: '12',
                        paidInAmount: '12',
                        paymentMethod: '支付宝'
                    },
                    {
                        reservationOrderNumber: '013',
                        parkingLotNumber: '1',
                        nameOfParkingLot: '一号停车场',
                        carNum: '苏A00001',
                        timeAppoinTment: '2020-10-20 10：20',
                        estimatedTimeArrival: '2020-10-20 10：20',
                        cancellationTime: '2020-10-20 18：20',
                        appointmentStatus: '预约成功',
                        parkingNumber: '10',
                        entryTime: '2020-10-20 10：20',
                        deliveryTime: '2020-10-20 18：20',
                        parkingTime: '8小时',
                        chargingStatus: '未支付',
                        amountReceivable: '12',
                        paidInAmount: '12',
                        paymentMethod: '支付宝'
                    },
                    {
                        reservationOrderNumber: '014',
                        parkingLotNumber: '1',
                        nameOfParkingLot: '一号停车场',
                        carNum: '苏A00001',
                        timeAppoinTment: '2020-10-20 18：20',
                        estimatedTimeArrival: '2020-10-20 10：20',
                        cancellationTime: '2020-10-20 18：20',
                        appointmentStatus: '预约成功',
                        parkingNumber: '10',
                        entryTime: '2020-10-20 10：20',
                        deliveryTime: '2020-10-20 18：20',
                        parkingTime: '8小时',
                        chargingStatus: '未支付',
                        amountReceivable: '12',
                        paidInAmount: '12',
                        paymentMethod: '支付宝'
                    },
                    {
                        reservationOrderNumber: '014',
                        parkingLotNumber: '1',
                        nameOfParkingLot: '一号停车场',
                        carNum: '苏A00001',
                        timeAppoinTment: '2020-10-20 18：20',
                        estimatedTimeArrival: '2020-10-20 10：20',
                        cancellationTime: '2020-10-20 18：20',
                        appointmentStatus: '预约成功',
                        parkingNumber: '10',
                        entryTime: '2020-10-20 10：20',
                        deliveryTime: '2020-10-20 18：20',
                        parkingTime: '8小时',
                        chargingStatus: '未支付',
                        amountReceivable: '12',
                        paidInAmount: '12',
                        paymentMethod: '支付宝'
                    }
                ],
                
                
                // 控制订单详情弹出框展示和隐藏属性
                showListDloageandoff: false,
                // 弹出框展示订单详情数据暂存
                showListDloageandoffList: []
            }
        },
        mounted() {

        },
        methods: {
            // 点击查询调用的方法
            SelectQueryList() {
                console.log("打印出来点击查询后所产生的值", this.upQueryList)
            },
            // 斑马纹样式
            tableRowClassName({ row, rowIndex }) {
                if (rowIndex % 2 == 1) {
                    return 'successRow11';
                } else if (rowIndex % 2 == 0) {
                    return 'successSecond';
                }
                return '';
            },
            // 分页查询方法
            handleCurrentModify(val) {
                this.pageNum = val;
            },
            // 点击查看调用的方法
            showListDloage(row) {
                this.showListDloageandoff = true;
                this.showListDloageandoffList = row;
            }
        }
    }
</script>
<style scoped>
    .all {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    /* 上半部分查询部分 */
    .up {
        width: 100%;
        height: 15%;
        float: left;
    }

    /* 查询条件部分样式 */
    .demo-form-inline {
        width: 100%;
        height: 80%;
        margin-top: 1%;
        padding-left: 2%;
    }

    /* 下班部分列表部分 */
    .down {
        width: 100%;
        height: 85%;
        float: left;
    }

    /* 斑马纹样式 */
    /deep/ .el-table .successRow11 {
        background: #7de6f8 !important;
    }

    /deep/ .el-table .successSecond {
        background: #8ed3e7 !important;
    }

    /* 表格表头样式 */
    .el-table__header-wrapper {
        width: 100%;
        height: 0px;
    }

    /* 设置弹出框样式 */
    /deep/ .el-dialog {
        width: 50%;
    }
    /* 弹出框内表单样式控制 */
    .el-form-item-dialog{
        width: 32%;
    }
</style>