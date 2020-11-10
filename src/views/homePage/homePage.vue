<!--
    首页高保真版本
* @Author: 邵青阳
* @Date: 2020-11-10 10:23:28
 * @LastEditTime: 2020-11-10 11:57:58
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
                <div class="leftCharts"></div>
                <!-- 总停车数量 totalNumberParking-->
                <div class="leftCharts"></div>
                <!-- 平均停车时长 averageParkingTime-->
                <div class="leftCharts"></div>
                <!-- 充电桩收入按月分析 chargingPileRevenue-->
                <div class="leftCharts"></div>
            </div>
        </div>
        <!-- 中间样式 -->
        <div class="center"></div>
        <!-- 右边数据 -->
        <div class="right">
            <div class="leftContent">
                <!-- 停车场收入排行  parkingRevenueRanking-->
                <div class="leftCharts"></div>
                <!-- 车位利用率 parkingSpaceUtilization-->
                <div class="leftCharts"></div>
                <!-- 车位周转率 parkingSpaceTurnoverRate-->
                <div class="leftCharts"></div>
                <!-- 自助洗车收入按月分析 selfServiceCarWashing-->
                <div class="leftCharts"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {

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
        border: 1px solid rgba(0, 221, 255, 0.60);
    }

    /* 支付方式 */
    .leftCharts {
        width: 100%;
        height: 24%;
        margin-top: 2%;
        background-color: darkorange;
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