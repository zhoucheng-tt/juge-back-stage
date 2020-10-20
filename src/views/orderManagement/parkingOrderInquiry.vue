<!--
    停车订单查询
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 15:48:16
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
                <el-form-item label="进场时间:">
                    <el-date-picker v-model="upQueryList.dataTimeIn" type="datetimerange" range-separator="至"
                        start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyyMMddhhmm">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="出场时间:">
                    <el-date-picker v-model="upQueryList.dataTimeOut" type="datetimerange" range-separator="至"
                        start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyyMMddhhmm">
                    </el-date-picker>
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
                <el-table-column prop="orderNumber" label="订单编号" width="80"></el-table-column>
                <el-table-column prop="parkingLotNumber" :show-overflow-tooltip="true" label="停车场编号" width="">
                </el-table-column>
                <el-table-column prop="nameOfParkingLot" :show-overflow-tooltip="true" label="停车场名称" width="">
                </el-table-column>
                <el-table-column prop="carNum" :show-overflow-tooltip="true" label="车牌号"></el-table-column>
                <el-table-column prop="parkingNumber" :show-overflow-tooltip="true" label="车位号"></el-table-column>
                <el-table-column prop="entryTime" :show-overflow-tooltip="true" label="进场时间"></el-table-column>
                <el-table-column prop="deliveryTime" :show-overflow-tooltip="true" label="出厂时间"></el-table-column>
                <el-table-column prop="parkingTime" :show-overflow-tooltip="true" label="停车时长"></el-table-column>
                <el-table-column prop="chargingStatus" :show-overflow-tooltip="true" label="收费状态"></el-table-column>
                <el-table-column prop="amountReceivable" :show-overflow-tooltip="true" label="应收金额"></el-table-column>
                <el-table-column prop="paidInAmount" :show-overflow-tooltip="true" label="实收金额"></el-table-column>
                <el-table-column prop="paymentMethod" :show-overflow-tooltip="true" label="支付方式"></el-table-column>
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
        <el-dialog title="订单详情" :visible.sync="showListDloageandoff">
            <el-form :inline="true" :model="showListDloageandoffList" class="demo-form-inline">
                <el-form-item label="停车场编号:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.parkingLotNumber"></el-input>
                </el-form-item>
                <el-form-item label="停车场名称:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.nameOfParkingLot"></el-input>
                </el-form-item>
                <el-form-item label="车牌号:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.carNum"></el-input>
                </el-form-item>
                <el-form-item label="车位号:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.parkingNumber"></el-input>
                </el-form-item>
                <el-form-item label="进场时间:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.entryTime"></el-input>
                </el-form-item>
                <el-form-item label="出厂时间:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.deliveryTime"></el-input>
                </el-form-item>
                <el-form-item label="停车时长:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.parkingTime"></el-input>
                </el-form-item>
                <el-form-item label="收费状态:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.chargingStatus"></el-input>
                </el-form-item>
                <el-form-item label="应收金额:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.amountReceivable"></el-input>
                </el-form-item>
                <el-form-item label="实收金额:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.paymentMethod"></el-input>
                </el-form-item>
                <el-form-item label="支付方式:" class="el-form-item-dialog">
                    <el-input v-model="showListDloageandoffList.paymentMethod"></el-input>
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
                // 分页
                pageNum: 1,
                pageSize: 10,
                pageTotal: 4,
                // 列表中数据暂存处， 订单数据
                orderParkingList: [
                    {
                        orderNumber: '01',
                        parkingLotNumber: '1',
                        nameOfParkingLot: '一号停车场',
                        carNum: '苏A00001',
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
                        orderNumber: '013',
                        parkingLotNumber: '1',
                        nameOfParkingLot: '一号停车场',
                        carNum: '苏A00001',
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
                        orderNumber: '014',
                        parkingLotNumber: '1',
                        nameOfParkingLot: '一号停车场',
                        carNum: '苏A00001',
                        parkingNumber: '10',
                        entryTime: '2020-10-20 10：20',
                        deliveryTime: '2020-10-20 18：20',
                        parkingTime: '8小时',
                        chargingStatus: '未支付',
                        amountReceivable: '12',
                        paidInAmount: '12',
                        paymentMethod: '现金'
                    },
                    {
                        orderNumber: '014',
                        parkingLotNumber: '1',
                        nameOfParkingLot: '一号停车场',
                        carNum: '苏A00001',
                        parkingNumber: '10',
                        entryTime: '2020-10-20 10：20',
                        deliveryTime: '2020-10-20 18：20',
                        parkingTime: '8小时',
                        chargingStatus: '未支付',
                        amountReceivable: '12',
                        paidInAmount: '12',
                        paymentMethod: '微信'
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
        margin-top: 3%;
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