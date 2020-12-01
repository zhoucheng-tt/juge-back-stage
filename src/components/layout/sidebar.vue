<!-- 7-1修改了侧边菜单栏的图标问题 -->
<template>
    <el-container class="sidebar-style">

        <!--    <el-row class="tac">-->
        <!--      <el-col :span="24">-->
        <!--        <el-menu-->
        <!--                :router=true-->
        <!--                :default-active="menuValue"-->
        <!--                :unique-opened="true"-->
        <!--                class="el-menu-vertical-demo"-->
        <!--                @open="handleOpen"-->
        <!--                @close="handleClose">-->
        <!--          <el-menu-item index="homePage">-->
        <!--            <i class="el-icon-menu"></i>-->
        <!--            <span slot="title">首页</span>-->
        <!--          </el-menu-item>-->
        <!--          <el-menu-item index="trafficOperationStatus">-->
        <!--            <i class="el-icon-menu"></i>-->
        <!--            <span slot="title">交通运行状态</span>-->
        <!--          </el-menu-item>-->
        <!--          <el-submenu index="5">-->
        <!--            <template slot="title">-->
        <!--              <i class="el-icon-location"></i>-->
        <!--              <span>交通态势</span>-->
        <!--            </template>-->
        <!--            <el-menu-item index="trafficSituation">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">道路流量分析</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="trafficSituation">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">出入口流量分析</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="trafficSituation">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">交通流量统计</span>-->
        <!--            </el-menu-item>-->
        <!--          </el-submenu>-->
        <!--          <el-menu-item index="trafficIncidentHandling">-->
        <!--            <i class="el-icon-menu"></i>-->
        <!--            <span slot="title">交通事件处理</span>-->
        <!--          </el-menu-item>-->
        <!--          <el-menu-item index="bridgeHealthMonitoring">-->
        <!--            <i class="el-icon-document"></i>-->
        <!--            <span slot="title">桥梁健康监控</span>-->
        <!--          </el-menu-item>-->
        <!--          <el-submenu index="4">-->
        <!--            <template slot="title">-->
        <!--              <i class="el-icon-location"></i>-->
        <!--              <span>道路资产展示</span>-->
        <!--            </template>-->
        <!--            <el-menu-item index="roadAssets">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">总览</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="roadAssets">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">资产管理</span>-->
        <!--            </el-menu-item>-->
        <!--          </el-submenu>-->

        <!--          <el-submenu index="6">-->
        <!--            <template slot="title">-->
        <!--              <i class="el-icon-location"></i>-->
        <!--              <span>重点车辆监管</span>-->
        <!--            </template>-->
        <!--            <el-menu-item index="keyVehicleSupervision">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">总览</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="overrunDetection">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">超限检测</span>-->
        <!--            </el-menu-item>-->

        <!--            <el-menu-item index="vehicleInvestigation">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">车辆查处</span>-->
        <!--            </el-menu-item>-->
        <!--          </el-submenu>-->
        <!--          <el-submenu index="7">-->
        <!--            <template slot="title">-->
        <!--              <i class="el-icon-location"></i>-->
        <!--              <span>工程养护实施</span>-->
        <!--            </template>-->
        <!--            <el-menu-item index="projectMaintenance">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">总览</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="constructionRegistration">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">占道施工登记</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="completionRegistration">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">竣工登记</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="unauthorizedConstruction">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">擅自施工登记</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="unauthorizedPenaltyRegistration">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">擅自施工处罚措施登记</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="constructionApproval">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">占道施工审批</span>-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="7-7">-->
        <!--              <i class="el-icon-menu"></i>-->
        <!--              <span slot="title">统计分析</span>-->
        <!--            </el-menu-item>-->
        <!--          </el-submenu>-->
        <!--        </el-menu>-->
        <!--      </el-col>-->

        <!--    </el-row>-->
        <side-nav class="tac" :routes="routes" :active-menu="menuValue"></side-nav>
    </el-container>
</template>

<script>
    // import Cookies from 'js-cookie'
    import SideNav from '@/components/SideNav'

    export default {
        components: {
            SideNav
        },
        data() {
            return {
                menuValue: 'homePage',
                routes: [
                    {
                        code: '1',
                        logo: 'el-icon-odometer',
                        name: '首页',
                        routeName: 'homePage',
                        children: []
                    },
                    // {
                    //     code: '2',
                    //     logo: 'el-icon-document',
                    //     name: '高位视频',
                    //     routeName: 'GwVedio'
                    // },
                    // 导航栏添加（包含导航栏中的子页面添加）
                    {
                        code: '3',
                        logo: 'el-icon-s-grid',
                        name: '报表分析',
                        children: [
                            {
                                code: '3-1',
                                logo: 'el-icon-menu',
                                name: '运营指标分析',
                                routeName: 'analysisOnOperationIndexOfParking'
                            },
                            {
                                code: '3-2',
                                logo: 'el-icon-menu',
                                name: '运营收入分析',
                                routeName: 'analysisOfOperatingIncomeOfParking'
                            },
                            // 报表分析（日报，月报，年报）
                            {
                                code: '3-3',
                                logo: 'el-icon-menu',
                                name: '报表分析',
                                routeName: 'operationReport'
                            },
                            // 支付台账统计  paymentAccountStatistics
                            {
                                code: '3-4',
                                logo: 'el-icon-menu',
                                name: '支付台账统计',
                                routeName: 'paymentAccountStatistics'
                            },
                            // 洗车机报警信息统计
                            {
                                code: '3-6',
                                logo: 'el-icon-menu',
                                name: '洗车机报警信息统计',
                                routeName: 'alarmInformationCarWashingMachine'
                            }
                        ]
                    },
                    {
                        code: '4',
                        logo: 'el-icon-document',
                        name: '实时监测',
                        // routeName: 'realTimeMonitoringCarWaring'
                        children: [
                            {
                                code: '4-1',
                                logo: 'el-icon-menu',
                                name: '洗车机运营数据',
                                routeName: 'realTimeMonitoringCarWaring'
                            },
                            // 出入口监测
                            {
                                code: '4-2',
                                logo: 'el-icon-menu',
                                name: '出入口监测',
                                routeName: 'entranceExitMonitoring'
                            },
                            ]
                    },
                    // 订单管理
                    {
                        code: '5',
                        logo: 'el-icon-s-grid',
                        name: '订单管理',
                        children: [
                            {
                                code: '5-1',
                                logo: 'el-icon-menu',
                                name: '停车订单查询',
                                routeName: 'parkingOrderInquiry'
                            },
                            {
                                code: '5-2',
                                logo: 'el-icon-menu',
                                name: '预约订单查询',
                                routeName: 'reservationOrderInquiry'
                            },
                            // 充电订单查询
                            {
                                code: '5-3',
                                logo: 'el-icon-menu',
                                name: '自助充电订单查询',
                                routeName: 'querySelfServiceChargingOrder'
                            }
                        ]
                    },
                    // 基础信息管理
                    {
                        code: '6',
                        logo: 'el-icon-s-grid',
                        name: '基础信息管理',
                        children: [
                            // {
                            //     code: '6-1',
                            //     logo: 'el-icon-menu',
                            //     name: '基础信息管理ETC',
                            //     routeName: 'basicInformationManagementETC'
                            // },
                            // 计费规则管理
                            {
                                code: '6-2',
                                logo: 'el-icon-menu',
                                name: '计费规则管理',
                                routeName: 'billingRuleManagement'
                            },
                            // 洗车机计费规则管理
                            {
                                code: '6-3',
                                logo: 'el-icon-menu',
                                name: '洗车机计费规则管理',
                                routeName: 'carWashingMachineManagement'
                            },
                            // 停车场管理   parkingLotManagement
                            {
                                code: '6-4',
                                logo: 'el-icon-menu',
                                name: '停车场管理',
                                routeName: 'parkingLotManagement'
                            },
                            // 设备管理   deviceManagement
                            {
                                code: '6-5',
                                logo: 'el-icon-menu',
                                name: '设备管理',
                                routeName: 'deviceManagement'
                            },
                        ]
                    },
                    {
                        code: '7',
                        logo: 'el-icon-s-grid',
                        name: '授权管理',
                        children: [
                            {
                                code: '7-1',
                                logo: 'el-icon-menu',
                                name: '白名单管理',
                                routeName: 'whitelistManagement'
                            },
                        ]
                    },
                    {
                        code: '8',
                        logo: 'el-icon-s-grid',
                        name: '系统管理',
                        children: [
                            {
                                code: '8-1',
                                logo: 'el-icon-menu',
                                name: '用户管理',
                                routeName: 'keyVehicleSupervision'
                            },
                            {
                                code: '8-2',
                                logo: 'el-icon-menu',
                                name: '角色管理',
                                routeName: 'overrunDetection'
                            },
                            {
                                code: '8-3',
                                logo: 'el-icon-menu',
                                name: '日志管理',
                                routeName: 'vehicleInvestigation'
                            }
                        ]
                    },
                ]
            }
        },
        methods: {
            // handleOpen(key, keyPath) {
            //   console.log(key, keyPath);
            // },
            // handleClose(key, keyPath) {
            //   console.log(key, keyPath);
            // },
            //
            // toMenu(value) {
            //   this.$router.push(value);
            // },
        },
        watch: {},
        created() {

        },
        mounted() {
            // eslint-disable-next-line no-mixed-spaces-and-tabs
            this.menuValue = this.$route.path.split("/")[1];
        },

    }
</script>

<style lang="scss" scoped>
    .sidebar-style {
        width: 100%;
        height: 100%;

        .tac {
            width: 100%;
            background: #313E5D;
        }
    }

    .el-menu {
        border-right: solid 0px #e6e6e6;
        list-style: none;
        position: relative;
        margin: 0;
        padding-left: 0;
        background-color: #FFF;
    }
    /deep/.el-scrollbar__wrap {
        overflow-x: hidden;
    }
</style>
