<!--
    首页高保真版本
* @Author: 邵青阳
* @Date: 2020-11-10 10:23:28
 * @LastEditTime: 2020-11-21 09:36:14
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\homePage\homePage.vue
-->
<template>
  <div class="body">
    <!--    顶部导航栏-->
    <div class="top">
      <!--  首页-->
      <div class="top-homepage">
        <div class="top-homepage-text">
          首页
        </div>
      </div>

      <div
        class="top-others"
        @click="handleTopClick(item.code)"
        v-for="(item, index) in topList"
        :label="item.name"
        :value="item.code"
        :key="index"
      >
        <div class="top-others-text">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="content">
      <!-- 左边部分 -->
      <div class="leftContent">
        <div class="img-top-left"></div>
        <div class="img-top-mid"></div>
        <div class="img-top-right"></div>
        <!-- 总停车数量 totalNumberParking-->
        <div class="leftCharts">
          <div class="leftChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">
              总停车数量
            </span>
            <span style="color: rgba(8,246,228,1);margin-left: 2%">
              {{ numberOfParkingTotal }} 辆
            </span>
          </div>
          <!-- 总停车数量   -->
          <div class="leftChartCenter" id="numberOfParking">
            <Xchart
              id="numberOfParking"
              :option="numberOfParkingOptions"
            ></Xchart>
          </div>
          <div class="leftChartDown">
            <svg
              width="358px"
              height="24px"
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>矩形</title>
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop
                    stop-color="#061F42"
                    stop-opacity="0"
                    offset="0%"
                  ></stop>
                  <stop stop-color="#123D75" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="智慧停车管理平台备份-2"
                  transform="translate(-1519.000000, -552.000000)"
                  fill="url(#linearGradient-1)"
                >
                  <g id="right" transform="translate(1499.000000, 94.000000)">
                    <g
                      id="停车场收入排行"
                      transform="translate(20.000000, 262.000000)"
                    >
                      <polygon
                        id="矩形"
                        points="52.5 196 288.438611 196 358 220 0 220"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <!-- 平均停车时长 averageParkingTime-->
        <div class="leftCharts">
          <div class="leftChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">平均停车时长</span>
            <span style="color: rgba(8,246,228,1);margin-left: 2%">
              {{ averageParkingTimeTotal }} 分钟
            </span>
          </div>
          <!-- 平均停车时长   -->
          <div class="leftChartCenter" id="averageParkingTime">
            <Xchart
              id="averageParkingTime"
              :option="averageParkingTimeOptions"
            ></Xchart>
          </div>
          <div class="leftChartDown">
            <svg
              width="358px"
              height="24px"
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>矩形</title>
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop
                    stop-color="#061F42"
                    stop-opacity="0"
                    offset="0%"
                  ></stop>
                  <stop stop-color="#123D75" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="智慧停车管理平台备份-2"
                  transform="translate(-1519.000000, -552.000000)"
                  fill="url(#linearGradient-1)"
                >
                  <g id="right" transform="translate(1499.000000, 94.000000)">
                    <g
                      id="停车场收入排行"
                      transform="translate(20.000000, 262.000000)"
                    >
                      <polygon
                        id="矩形"
                        points="52.5 196 288.438611 196 358 220 0 220"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <!-- 车位利用率 parkingSpaceUtilization-->
        <div class="leftCharts">
          <div class="leftChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">车位利用率</span>
            <span style="color: rgba(8,246,228,1);margin-left: 2%">
              {{ parkingSpaceUsedRateTotal }}
            </span>
          </div>
          <!-- 车位利用率   -->
          <div class="leftChartCenter" id="parkingSpaceUtilization">
            <Xchart
              id="parkingSpaceUtilization"
              :option="parkingSpaceUtilizationOptions"
            ></Xchart>
          </div>
          <div class="leftChartDown">
            <svg
              width="358px"
              height="24px"
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>矩形</title>
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop
                    stop-color="#061F42"
                    stop-opacity="0"
                    offset="0%"
                  ></stop>
                  <stop stop-color="#123D75" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="智慧停车管理平台备份-2"
                  transform="translate(-1519.000000, -552.000000)"
                  fill="url(#linearGradient-1)"
                >
                  <g id="right" transform="translate(1499.000000, 94.000000)">
                    <g
                      id="停车场收入排行"
                      transform="translate(20.000000, 262.000000)"
                    >
                      <polygon
                        id="矩形"
                        points="52.5 196 288.438611 196 358 220 0 220"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <!-- 车位周转率 parkingSpaceTurnoverRate-->
        <div class="leftCharts">
          <div class="leftChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">车位周转率</span>
            <span style="color: rgba(8,246,228,1);margin-left: 2%">
              {{ parkingSpaceTurnoverRateTotal }}
            </span>
          </div>
          <!-- 车位周转率   -->
          <div class="leftChartCenter" id="parkingSpaceTurnoverRate">
            <Xchart
              id="parkingSpaceTurnoverRate"
              :option="parkingSpaceTurnoverRateOptions"
            ></Xchart>
          </div>
          <div class="leftChartDown">
            <svg
              width="358px"
              height="24px"
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>矩形</title>
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop
                    stop-color="#061F42"
                    stop-opacity="0"
                    offset="0%"
                  ></stop>
                  <stop stop-color="#123D75" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="智慧停车管理平台备份-2"
                  transform="translate(-1519.000000, -552.000000)"
                  fill="url(#linearGradient-1)"
                >
                  <g id="right" transform="translate(1499.000000, 94.000000)">
                    <g
                      id="停车场收入排行"
                      transform="translate(20.000000, 262.000000)"
                    >
                      <polygon
                        id="矩形"
                        points="52.5 196 288.438611 196 358 220 0 220"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="img-bottom-left"></div>
        <div class="img-bottom-right"></div>
      </div>
      <!-- 中间部分 -->
      <div class="center">
        <!--        剩余车位数-->
        <div class="center-leftport">剩余车位数</div>
        <!--        数字-->
        <div class="center-line2">
          <div class="center-line2-number">
            <div class="center-line2-number-text">0</div>
          </div>
          <div class="center-line2-number">
            <div class="center-line2-number-text">0</div>
          </div>
          <div class="center-line2-number">
            <div class="center-line2-number-text">0</div>
          </div>
          <div class="center-line2-number">
            <div class="center-line2-number-text">0</div>
          </div>
          <div class="center-line2-number">
            <div class="center-line2-number-text">0</div>
          </div>
          <div class="center-line2-number">
            <div class="center-line2-number-text">0</div>
          </div>
          <div class="center-line2-charge">
            <div class="center-line2-charge-text">空闲充电桩总数</div>
            <div class="center-line2-charge-number">20</div>
          </div>
          <div class="center-line2-wash">
            <div class="center-line2-wash-text">空闲洗车位总数</div>
            <div class="center-line2-wash-number">30</div>
          </div>
        </div>
        <!--        总收入一行-->
        <div class="center-line3">
          <div class="center-line3-div-first">
            <div class="center-line3-div-text">总收入(万元)</div>
            <div class="center-line3-div-number">52</div>
          </div>
          <div class="center-line3-div">
            <div class="center-line3-div-text">应收金额(万元)</div>
            <div class="center-line3-div-number">40</div>
          </div>
          <div class="center-line3-div">
            <div class="center-line3-div-text">欠收金额(万元)</div>
            <div class="center-line3-div-number">40</div>
          </div>
          <div class="center-line3-div">
            <div class="center-line3-div-text">充电桩总收入(万元)</div>
            <div class="center-line3-div-number">1.2</div>
          </div>
          <div class="center-line3-div">
            <div class="center-line3-div-text">洗车位收入(万元)</div>
            <div class="center-line3-div-number">5.5</div>
          </div>
        </div>
        <!--车位-->
        <div class="center-down"></div>
      </div>
      <!-- 右边内容  -->
      <div class="rightContent" style="">
        <!--                支付方式两个脚-->
        <div class="img-top-left"></div>
        <div class="img-top-mid"></div>
        <div class="img-top-right"></div>
        <!-- 支付方式  paymentMethod -->
        <div class="rightCharts">
          <div class="rightChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="rightChartUpImage"
              alt=""
            />
            <span class="spanStyle">支付方式</span>
          </div>
          <!-- 支付方式图表   -->
          <div class="rightChartCenter" id="paymentIncomeAnalysis">
            <!-- 支付收入分析 -->
            <Xchart
              id="paymentIncomeAnalysis"
              :option="paymentIncomeAnalysisPie"
            ></Xchart>
          </div>
          <div class="rightChartDown">
            <svg
              width="358px"
              height="24px"
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>矩形</title>
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop
                    stop-color="#061F42"
                    stop-opacity="0"
                    offset="0%"
                  ></stop>
                  <stop stop-color="#123D75" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="智慧停车管理平台备份-2"
                  transform="translate(-1519.000000, -552.000000)"
                  fill="url(#linearGradient-1)"
                >
                  <g id="right" transform="translate(1499.000000, 94.000000)">
                    <g
                      id="停车场收入排行"
                      transform="translate(20.000000, 262.000000)"
                    >
                      <polygon
                        id="矩形"
                        points="52.5 196 288.438611 196 358 220 0 220"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <!-- 停车场收入排行  parkingRevenueRanking-->
        <div class="rightCharts">
          <div class="rightChartUp">
            <div>
              <img
                src="../../assets/homePage/fangkuai.svg"
                class="rightChartUpImage"
                alt=""
              />
              <span class="spanStyle">停车场收入排行</span>
            </div>
          </div>
          <!-- 停车场收入排行   -->
          <div class="leftChartCenter" id="parkingRevenueRanking">
            <Xchart
              id="parkingRevenueRanking"
              :option="parkingRevenueRankingChart"
            ></Xchart>
          </div>
          <div class="leftChartDown">
            <svg
              width="358px"
              height="24px"
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>矩形</title>
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop
                    stop-color="#061F42"
                    stop-opacity="0"
                    offset="0%"
                  ></stop>
                  <stop stop-color="#123D75" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="智慧停车管理平台备份-2"
                  transform="translate(-1519.000000, -552.000000)"
                  fill="url(#linearGradient-1)"
                >
                  <g id="right" transform="translate(1499.000000, 94.000000)">
                    <g
                      id="停车场收入排行"
                      transform="translate(20.000000, 262.000000)"
                    >
                      <polygon
                        id="矩形"
                        points="52.5 196 288.438611 196 358 220 0 220"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <!-- 充电桩收入按月分析 chargingPileRevenue-->
        <div class="rightCharts">
          <div class="rightChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">充电桩收入按月分析</span>
          </div>
          <!-- 充电桩收入按月分析   -->
          <div class="rightChartCenter" id="chargeEarn">
            <Xchart id="chargeEarn" :option="chargeEarnChart"></Xchart>
          </div>
          <div class="rightChartDown">
            <svg
              width="358px"
              height="24px"
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>矩形</title>
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop
                    stop-color="#061F42"
                    stop-opacity="0"
                    offset="0%"
                  ></stop>
                  <stop stop-color="#123D75" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="智慧停车管理平台备份-2"
                  transform="translate(-1519.000000, -552.000000)"
                  fill="url(#linearGradient-1)"
                >
                  <g id="right" transform="translate(1499.000000, 94.000000)">
                    <g
                      id="停车场收入排行"
                      transform="translate(20.000000, 262.000000)"
                    >
                      <polygon
                        id="矩形"
                        points="52.5 196 288.438611 196 358 220 0 220"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <!-- 自助洗车收入按月分析 selfServiceCarWashing-->
        <div class="rightCharts">
          <div class="rightChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="rightChartUpImage"
              alt=""
            />
            <span class="spanStyle">自助洗车收入按月分析</span>
          </div>
          <div class="rightChartCenter" id="chargeAmountTimes">
            <Xchart
              id="chargeAmountTimes"
              :option="chargeAmountTimesOptions"
            ></Xchart>
          </div>
          <div class="rightChartDown">
            <svg
              width="358px"
              height="24px"
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>矩形</title>
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop
                    stop-color="#061F42"
                    stop-opacity="0"
                    offset="0%"
                  ></stop>
                  <stop stop-color="#123D75" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="智慧停车管理平台备份-2"
                  transform="translate(-1519.000000, -552.000000)"
                  fill="url(#linearGradient-1)"
                >
                  <g id="right" transform="translate(1499.000000, 94.000000)">
                    <g
                      id="停车场收入排行"
                      transform="translate(20.000000, 262.000000)"
                    >
                      <polygon
                        id="矩形"
                        points="52.5 196 288.438611 196 358 220 0 220"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="img-bottom-left"></div>
        <div class="img-bottom-right"></div>
      </div>
    </div>
  </div>
</template>
<script>
// 导入相关的依赖
import Xchart from "../../components/charts/charts.vue";
import Xchart3d from "../../components/charts/charts3d.vue";
import HighCharts from "highcharts";
import HighCharts3d from "highcharts-3d";

export default {
  // 组件导入
  components: {
    Xchart,
    Xchart3d
  },
  data() {
    return {
      //top存放
      topList: [
        {
          name: "报表分析",
          code: "1"
        },
        {
          name: "实时监测",
          code: "2"
        },
        {
          name: "订单管理",
          code: "3"
        },
        {
          name: "基础信息管理",
          code: "4"
        },
        {
          name: "授权管理",
          code: "5"
        },
        {
          name: "系统管理",
          code: "6"
        }
      ],
      //车位利用率图表数字
      parkingSpaceUsedRateTotal: 0,
      //车位周转率图表上的数字
      parkingSpaceTurnoverRateTotal: 0,
      //平均停车时长图表数字
      averageParkingTimeTotal: 0,
      //总停车数量图表数字
      numberOfParkingTotal: 0,
      //中间部分洗车机总收入
      washCarPortIncome: 0,
      //中间部分充电桩总收入
      rechargeLeftIncome: 0,
      //剩余车位数
      leftPort: 0,

      // 充电桩统计数据 （暂时的数据）
      contentNumList: [],
      //总停车数量传入参数存放
      newTypeParam: {
        queryType: "today"
      },
      //总收入参数暂存存放
      oldTypeParam: {
        statisType: "today"
      },
      // 地图中点击添加弹框
      mapList: {
        lng: 119.016937,
        lat: 31.706205
      },
      map: "",
      xlicon: require("../../assets/homePage/TCIcon.png"),
      // 动态绑定的停车折线图的id和option
      lineId: "",
      lineOptions: {},
      // 动态绑定标题
      lineTitle: "",
      // 图表类型
      lineChartsType: "",
      // 暂存数据数组
      lineChartsList: [],
      // x轴坐标的信息
      lineChartsX: [],
      // serise中的那么数据
      lineChartsName: "",

      // 停车总数量折线图
      numberOfParking: "",
      numberOfParkingOptions: {},
      // 图表数据
      numberOfParkingData: [],
      numberOfParkingXz: [],
      // numberOfParkingName: '停车总数量',

      // 平均停车时长
      averageParkingTime: "",
      averageParkingTimeOptions: {},
      // 图表数据
      averageParkingTimeData: [],
      averageParkingTimeXz: [],
      // averageParkingTimeName: '平均停车时长',

      // 车位利用率
      parkingSpaceUtilization: "",
      parkingSpaceUtilizationOptions: {},
      // 图表数据
      parkingSpaceUtilizationData: [],
      parkingSpaceUtilizationXz: [],
      // parkingSpaceUtilizationName: '车位利用率',

      // 车位周转率
      parkingSpaceTurnoverRate: "",
      parkingSpaceTurnoverRateOptions: {},
      // 图表数据
      parkingSpaceTurnoverRateData: [],
      parkingSpaceTurnoverRateXz: [],
      // parkingSpaceTurnoverRateName: '车位周转率',

      // 停车场收入排行
      parkingRevenueRankingChartX: [],
      parkingRevenueRankingChartY: [],
      parkingRevenueRankingList: [],
      parkingRevenueRankingChart: {},

      // 支付收入排行
      paymentIncomeAnalysis: [],
      paymentIncomeAnalysisPie: {},

      // 充电桩收入
      chargingPileRevenue: "",
      chargingPileRevenueLine: {},
      // 自助洗车收入
      selfServiceCarWashing: "",
      selfServiceCarWashingLine: {},

      //充电桩按月分析
      chargeEarnChartX: [],
      chargeEarnDataList: [],
      chargeEarnChart: {},

      // 收费金额按照时间段分析
      chargeAmountTimes: "",
      chargeAmountTimesX: [],
      chargeAmountTimesData: [],
      chargeAmountTimesOptions: {}
    };
  },
  mounted() {
    // 添加地图图标方式
    this.initMap();
    // 添加图标的方法
    this.addMoudel();

    this.queryTest();
    //查询今天
    this.today();
    //剩余车位数
    this.queryParkMonitorParkSpace();
  },
  methods: {
    //tabs点击事件
    handleTopClick(code) {
      if (code == 1) {
        this.$router.push("/analysisOnOperationIndexOfParking");
      } else if (code == 2) {
        this.$router.push("/realTimeMonitoringCarWaring");
      } else if (code == 3) {
        this.$router.push("/parkingOrderInquiry");
      } else if (code == 4) {
        this.$router.push("/billingRuleManagement");
      } else if (code == 5) {
        this.$router.push("/whitelistManagement");
      } else if (code == 6) {
        this.$router.push("/keyVehicleSupervision");
      }
    },
    // 今日点击数据处理方法
    today() {
      //控制显示今天
      this.classStrust1 = 1;
      this.classStrust2 = 0;
      this.classStrust3 = 0;
      this.classStrust4 = 0;
      this.oldTypeParam.statisType = "today";
      this.newTypeParam.queryType = "today";
      // 支付方式图表
      this.queryPaymentBehaviorAnalysis();
      // 总停车数量图表
      this.queryParkOptByParkCount();
      // 平均停车时长图表
      this.queryParkOptByAvgParkDuration();
      // 车位利用率图表
      this.queryParkOptByParkSpaceUsedRate();
      // 车位周转率图表
      this.queryParkOptByParkSpaceTurnoverRate();
      // 停车场收入排行图表
      this.queryParkIncomeRanking();
      //自助洗车按月收入分析图表
      this.querychargeAmountTimes();
      //充电桩按月分析图表
      this.drawChargeEarnChart();
      //中间总收入、应收金额、欠收金额
      this.queryTotalIncome();
      //中间洗车机总收入
      this.countWashFee();
      //中间充电桩总收入
      this.countChargeFee();
      //总停车数量图表上的数字
      // this.queryParkCount();
      // 数据变动
      this.contentNumList = [];
    },

    //获取中间部分总收入、应收金额、欠收金额
    queryTotalIncome() {
      var that = this;
      const param = {
        statisType: this.oldTypeParam.statisType
      };
      // console.log('总收入方法传入的参数',param)
      this.$homePage.queryTotalIncome(param).then(res => {
        that.contentNumList = res.data.dataList;
        // console.log("总收入参数",that.contentNumList)
      });
    },
    //首页剩余车位数
    queryParkMonitorParkSpace() {
      var that = this;
      const param = {
        cityCode: "321300",
        districtCode: "321302",
        statisType: this.oldTypeParam.statisType,
        pageSize: 3,
        pageNum: 1
      };
      this.$homePage.queryParkMonitorParkSpace(param).then(res => {
        console.log("resres", res);
        that.leftPort = res.data.dataList.info.remainderParkSpaceCount;
        if (that.leftPort == null) {
          that.leftPort = 0;
        }
      });
    },
    //查询充电桩总收入总收入
    countChargeFee() {
      var that = this;
      const param = {
        queryType: this.newTypeParam.queryType
      };
      // console.log('充电桩总收入惨参',param)
      this.$homePage.countChargeFee(param).then(res => {
        // console.log('resres',res)
        that.rechargeLeftIncome = res.resultEntity;
        if (that.rechargeLeftIncome == null) {
          that.rechargeLeftIncome = 0;
        }
        // console.log("洗车机总收入",that.rechargeLeftIncome)
      });
    },

    //中间部分查询洗车机总收入
    countWashFee() {
      var that = this;
      const param = {
        queryType: this.newTypeParam.queryType
      };
      // console.log('洗车机总收入参数',param)
      this.$homePage.countWashFee(param).then(res => {
        that.washCarPortIncome = res.resultEntity;
        if (that.washCarPortIncome == null) {
          that.washCarPortIncome = 0;
        }
        // console.log("洗车机总收入", that.washCarPortIncome)
      });
    },

    // 支付方式
    queryPaymentBehaviorAnalysis() {
      const param = {
        statisType: this.oldTypeParam.statisType
      };
      this.$homePage.queryPaymentBehaviorAnalysis(param).then(res => {
        var alipayDataList = [
          "支付宝支付",
          Number(res.data.dataList[0].alipayPaymentMoneyAmount) /
            Number(res.data.dataList[0].paymentMoneyAmountTotalAll)
        ];
        var cashDataList = [
          "现金支付",
          Number(res.data.dataList[0].cashPaymentMoneyAmount) /
            Number(res.data.dataList[0].paymentMoneyAmountTotalAll)
        ];
        var wechatDataList = [
          "微信支付",
          Number(res.data.dataList[0].wechatPaymentMoneyAmount) /
            Number(res.data.dataList[0].paymentMoneyAmountTotalAll)
        ];
        var qrCodeDataList = [
          "扫码支付",
          Number(res.data.dataList[0].qrCodePaymentMoneyAmount) /
            Number(res.data.dataList[0].paymentMoneyAmountTotalAll)
        ];

        this.paymentIncomeAnalysis = [
          {
            type: "pie",
            name: "支付占比",
            data: [alipayDataList, wechatDataList, qrCodeDataList, cashDataList]
          }
        ];
        this.paymentIncomeAnalysisPie = {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "paymentIncomeAnalysis"
            // options3d: {
            //     enabled: true,
            //     alpha: 45,
            //     beta: 0
            // }
          },
          title: {
            text: ""
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
              //放到上面是小手
              cursor: "pointer",
              //控制距离中心的值
              innerSize: 40,
              depth: 45,
              dataLabels: {
                enabled: true
                // format: "{point.name}"
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
        statisType: this.oldTypeParam.statisType
      };
      this.$homePage.queryParkOptByParkCount(param).then(res => {
        this.numberOfParkingXz = [];
        this.numberOfParkingData = [];
        res.data.dataList.detail.forEach(item => {
          this.numberOfParkingXz.push(item.date);
          this.numberOfParkingData.push(Number(item.val));
        });
        this.numberOfParkingTotal = Math.ceil(res.data.dataList.total);
        this.numberOfParkingOptions = {
          chart: {
            type: "area",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "numberOfParking"
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          color: ["#03D7E9 "],
          xAxis: {
            categories: this.numberOfParkingXz,
            labels: {
              //设置刻度
              // tickPositions: [],
              style: {
                color: "rgba(90,142,227,1)",
                letterSpacing: "0.27px",
                lineHeight: "17px",
                fontSize: "12px"
              }
            }
          },
          yAxis: {
            //设置网格线颜色
            gridLineColor: "#2B3DA1",
            title: {
              text: ""
            },
            labels: {
              style: {
                color: "rgba(90,142,227,1)",
                letterSpacing: "0.27px",
                lineHeight: "17px",
                fontSize: "12px"
              }
            }
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 10,
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
          tooltip: {
            pointFormat: "{series.name} 停车 <b>{point.y:,.0f}</b>辆"
          },
          plotOptions: {
            area: {
              marker: {
                enabled: false,
                color: "rgba(3,215,233,1)",
                symbol: "circle",
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [
            {
              // name: this.numberOfParkingName,
              data: this.numberOfParkingData
            }
          ]
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
        statisType: this.oldTypeParam.statisType
      };
      this.$homePage.queryParkOptByAvgParkDuration(param).then(res => {
        this.averageParkingTimeXz = [];
        this.averageParkingTimeData = [];
        res.data.dataList.detail.forEach(item => {
          this.averageParkingTimeXz.push(item.date);
          this.averageParkingTimeData.push(Number(item.val));
          this.averageParkingTimeTotal = Math.ceil(res.data.dataList.total);
        });
        this.averageParkingTimeOptions = {
          chart: {
            type: "area",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "averageParkingTime"
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          colors: ["#E9C503"],
          xAxis: {
            categories: this.averageParkingTimeXz,
            labels: {
              //设置刻度
              // tickPositions: [],
              style: {
                color: "rgba(90,142,227,1)",
                letterSpacing: "0.27px",
                lineHeight: "17px",
                fontSize: "12px"
              }
            }
          },
          yAxis: {
            //设置网格线颜色
            gridLineColor: "#2B3DA1",
            title: {
              text: ""
            },
            labels: {
              formatter: function() {
                return this.value / 1;
              },
              style: {
                color: "rgba(90,142,227,1)",
                letterSpacing: "0.27px",
                lineHeight: "17px",
                fontSize: "12px"
              }
            }
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 10,
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
          tooltip: {
            pointFormat: "{series.name} 停车 <b>{point.y:,.0f}</b>分钟"
          },
          plotOptions: {
            area: {
              marker: {
                enabled: false,
                symbol: "circle",
                color: "#fff",
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [
            {
              // name: this.averageParkingTimeName,
              data: this.averageParkingTimeData
            }
          ]
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
        statisType: this.oldTypeParam.statisType
      };
      this.$homePage.queryParkOptByParkSpaceUsedRate(param).then(res => {
        this.parkingSpaceUtilizationXz = [];
        this.parkingSpaceUtilizationData = [];
        res.data.dataList.detail.forEach(item => {
          this.parkingSpaceUtilizationXz.push(item.date);
          this.parkingSpaceUtilizationData.push(Number(item.val));
        });
        this.parkingSpaceUsedRateTotal =
          (Number(res.data.dataList.total) * 100).toFixed(2) + "%";
        this.parkingSpaceUtilizationOptions = {
          chart: {
            type: "area",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "parkingSpaceUtilization"
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          colors: ["#895EFC"],
          xAxis: {
            categories: this.parkingSpaceUtilizationXz,
            labels: {
              //设置刻度
              // tickPositions: [],
              style: {
                color: "rgba(90,142,227,1)",
                letterSpacing: "0.27px",
                lineHeight: "17px",
                fontSize: "12px"
              }
            }
          },
          yAxis: {
            //设置网格线颜色
            gridLineColor: "#2B3DA1",
            title: {
              text: ""
            },
            labels: {
              style: {
                color: "rgba(90,142,227,1)",
                letterSpacing: "0.27px",
                lineHeight: "17px",
                fontSize: "12px"
              }
            }
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 10,
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
          tooltip: {
            pointFormat: "{series.name} 停车 <b>{point.y:,.0f}</b>%"
          },
          plotOptions: {
            area: {
              marker: {
                enabled: false,
                symbol: "circle",
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [
            {
              // name: this.parkingSpaceUtilizationName,
              data: this.parkingSpaceUtilizationData
            }
          ]
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
        statisType: this.oldTypeParam.statisType
      };
      this.$homePage.queryParkOptByParkSpaceTurnoverRate(param).then(res => {
        this.parkingSpaceTurnoverRateXz = [];
        this.parkingSpaceTurnoverRateData = [];
        res.data.dataList.detail.forEach(item => {
          this.parkingSpaceTurnoverRateXz.push(item.date);
          this.parkingSpaceTurnoverRateData.push(Number(item.val));
        });
        this.parkingSpaceTurnoverRateTotal =
          Number(res.data.dataList.total).toFixed(2) + "%";
        this.parkingSpaceTurnoverRateOptions = {
          chart: {
            type: "area",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "parkingSpaceTurnoverRate"
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          colors: ["#E9C503"],
          xAxis: {
            categories: this.parkingSpaceTurnoverRateXz,
            labels: {
              //设置刻度
              // tickPositions: [],
              style: {
                color: "rgba(90,142,227,1)",
                letterSpacing: "0.27px",
                lineHeight: "17px",
                fontSize: "12px"
              }
            }
          },
          yAxis: {
            //设置网格线颜色
            gridLineColor: "#2B3DA1",
            title: {
              text: ""
            },
            labels: {
              style: {
                color: "rgba(90,142,227,1)",
                letterSpacing: "0.27px",
                lineHeight: "17px",
                fontSize: "12px"
              }
            }
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 10,
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
          tooltip: {
            pointFormat: "{series.name} 停车 <b>{point.y:,.0f}</b>%"
          },
          plotOptions: {
            area: {
              marker: {
                enabled: false,
                symbol: "circle",
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [
            {
              // name: this.parkingSpaceTurnoverRateName,
              data: this.parkingSpaceTurnoverRateData
            }
          ]
        };
        new HighCharts.chart(this.parkingSpaceTurnoverRateOptions);
      });
    },

    // 停车场收入排行
    queryParkIncomeRanking() {
      this.parkingRevenueRankingChartX = [];
      const param = {
        statisType: this.oldTypeParam.statisType
      };
      var dataListA = [];
      this.$homePage.queryParkIncomeRanking(param).then(res => {
        res.data.dataList.forEach(item => {
          this.parkingRevenueRankingChartY.push(item.parkName);
          dataListA.push(Number(item.parkIncome));
        });
        this.parkingRevenueRankingList = [
          {
            name: this.parkName,
            data: dataListA
          }
        ];
        this.parkingRevenueRankingChart = {
          chart: {
            type: "bar",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "parkingRevenueRanking"
          },
          credits: {
            enabled: false
          },
          title: {
            text: ""
          },
          xAxis: {
            categories: this.parkingRevenueRankingChartY,
            labels: {
              format: "{value}",
              style: {
                color: "rgba(90,142,227,1)"
              }
            }
          },
          yAxis: {
            //设置网格线颜色
            gridLineColor: "#2B3DA1",
            title: {
              text: ""
            },
            labels: {
              formatter: function() {
                return this.value / 1;
              },
              style: {
                color: "rgba(90,142,227,1)",
                letterSpacing: "0.27px",
                lineHeight: "17px",
                fontSize: "12px"
              }
            }
          },
          tooltip: {
            shared: true
          },
          plotOptions: {
            series: {
              depth: 25,
              colorByPoint: true
              // color : '#B9A32B'
            }
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

    //收费按月分析金额分析
    querychargeAmountTimes() {
      const param = {
        queryType: "currentMonth"
      };
      this.$realTimeMonitor.queryWashEarn(param).then(res => {
        this.chargeAmountTimesX = [];
        this.chargeAmountTimesData = [];
        res.resultEntity.forEach(item => {
          this.chargeAmountTimesX.push(item.X);
          this.chargeAmountTimesData.push(Number(item.dataY));
        });
        this.chargeAmountTimesOptions = {
          chart: {
            type: "column",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "chargeAmountTimes"
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.chargeAmountTimesX,
            labels: {
              format: "{value}",
              style: {
                color: "rgba(90,142,227,1)"
              }
            }
          },
          yAxis: {
            //设置网格线颜色
            gridLineColor: "#2B3DA1",
            title: {
              text: ""
            },
            labels: {
              format: "{value}",
              style: {
                color: "rgba(90,142,227,1)"
              }
            }
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
          tooltip: {
            pointFormat: "收入： <b>{point.y:,.0f}</b>元"
          },
          plotOptions: {
            series: {
              depth: 25,
              // colorByPoint: true,
              color: "#00ABFF"
            },
            area: {
              marker: {
                enabled: false,
                symbol: "circle",
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [
            {
              name: "数量",
              data: this.chargeAmountTimesData
            }
          ]
        };
        // 绘制
        new HighCharts.Chart(this.chargeAmountTimesOptions);
      });
    },

    //绘表自助充电设备收入按时段分析
    drawChargeEarnChart() {
      this.chargeEarnChartX = [];
      const param = {
        queryType: "currentMonth"
      };
      var dataList = [];
      this.$homePage.queryChargeEarn(param).then(res => {
        res.resultEntity.forEach(item => {
          this.chargeEarnChartX.push(item.X);
          dataList.push(Number(item.dataY));
        });
        this.chargeEarnDataList = [
          {
            name: "收入金额",
            showInLegend: false,
            data: dataList
          }
        ];
        this.chargeEarnChart = {
          chart: {
            type: "column",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "chargeEarn"
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.chargeEarnChartX,
            labels: {
              format: "{value}",
              style: {
                color: "rgba(90,142,227,1)"
              }
            }
          },
          yAxis: {
            //设置网格线颜色
            gridLineColor: "#2B3DA1",
            title: {
              text: ""
            },
            labels: {
              format: "{value}",
              style: {
                color: "rgba(90,142,227,1)"
              }
            }
          },
          plotOptions: {
            series: {
              depth: 25,
              // colorByPoint: true,
              color: "#08F6E4"
            }
          },
          series: this.chargeEarnDataList
        };
        new HighCharts.chart(this.chargeEarnChart);
      });
    },

    queryLine() {
      var that = this;
      that.lineOptions = {
        chart: {
          type: that.lineChartsType,
          backgroundColor: "rgba(0,0,0,0)",
          renderTo: that.lineId
        },
        title: {
          // text: that.lineTitle,
          text: "",
          style: {
            color: "white"
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
            text: ""
          },
          labels: {
            formatter: function() {
              return this.value / 1000 + "k";
            }
          }
        },
        legend: {
          enabled: true,
          align: "center",
          verticalAlign: "left",
          x: 300,
          y: 10,
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
        tooltip: {
          pointFormat: "{series.name} 停车 <b>{point.y:,.0f}</b>辆"
        },
        plotOptions: {
          area: {
            marker: {
              enabled: false,
              symbol: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [
          {
            name: this.lineChartsName,
            data: that.lineChartsList
          }
        ]
      };
      // 绘制
      new HighCharts.Chart(that.lineOptions);
    },
    //测试查询
    queryTest() {
      var jsonStr = {
        queryDate: "2020-08-02"
      };
      this.$homePage.test(jsonStr).then(res => {
        console.log("测试新建后台地址", res);
      });
    },
    // 地图方式开始
    initMap() {
      //地图初始化
      this.map = new AMap.Map("map", {
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
        size: new AMap.Size(20, 20), // 图标尺寸
        image: that.xlicon, // Icon的图像
        imageOffset: new AMap.Pixel(1, 1), // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(15, 15) // 根据所设置的大小拉伸或压缩图片
      });
      let marker = new AMap.Marker({
        icon: icon,
        position: [that.mapList.lng, that.mapList.lat],
        offset: new AMap.Pixel(-13, -30)
      });
      // 点击弹出标签方法，其中内容可以根据需要自己定义
      marker.content =
        "停车场名:" + "停车场1" + "<br / >剩余车位:" + "剩余20个车位";
      // 定义完标签后调用显示方法将其显示出来
      marker.on("click", this.showInfoM);
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
    }
  }
};
</script>
<style scoped>
/* 首页去全部内容 */
.body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(180deg, #001d43 0%, #000c1c 100%);
}
/*顶部盒子*/
.top {
  width: 100%;
  height: 6.7%;
  background: url("../../assets/homePage/top.jpg");
  background-repeat: no-repeat;
  display: flex;
}
/*顶部首页按钮框*/
.top-homepage {
  width: 7%;
  height: 58%;
  position: relative;
  color: #46c5dd;
  background-color: #043d87;
  margin-left: 32.5%;
  margin-top: 1.2%;
  transform: skew(-20.5deg);
  border: 2px solid #45c3db;
}
.top-homepage:hover {
  cursor: pointer;
  user-select: none;
}
.top-homepage-text {
  width: 100%;
  height: 65%;
  transform: skew(20.5deg);
  font-size: 18px;
  letter-spacing: 0.53px;
  margin-left: 34%;
  margin-top: 4%;
}
/*顶部其他文本*/
.top-others {
  width: 7%;
  height: 58%;
  color: white;
  background-color: #043d87;
  margin-left: 1%;
  margin-top: 1.3%;
  transform: skew(-20.5deg);
  position: relative;
}
.top-others:hover {
  cursor: pointer;
  user-select: none;
}
.top-others-text {
  width: 100%;
  height: 65%;
  transform: skew(20.5deg);
  font-size: 18px;
  letter-spacing: 0.53px;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

/*上左脚*/
.img-top-left {
  width: 10px;
  height: 1%;
  border-top: 3px solid rgba(8, 246, 228, 1);
  border-left: 3px solid rgba(8, 246, 228, 1);
  margin-left: -0.5%;
  margin-top: -0.6%;
}

/*上中横线*/
.img-top-mid {
  width: 141px;
  height: 1%;
  margin-top: -3%;
  position: relative;
  border-top: 4px solid rgba(8, 246, 228, 1);
  margin-left: 9.8%;
}

/*上右脚*/
.img-top-right {
  width: 10px;
  height: 1%;
  margin-top: -3%;
  position: relative;
  border-top: 3px solid rgba(8, 246, 228, 1);
  border-right: 3px solid rgba(8, 246, 228, 1);
  margin-left: 97%;
}

/*下左脚*/
.img-bottom-left {
  width: 10px;
  height: 10px;
  border-bottom: 3px solid rgba(8, 246, 228, 1);
  border-left: 3px solid rgba(8, 246, 228, 1);
  margin-left: -0.5%;
  margin-top: -1%;
}

/*下右脚*/
.img-bottom-right {
  width: 10px;
  height: 10px;
  margin-top: -3%;
  border-bottom: 3px solid rgba(8, 246, 228, 1);
  border-right: 3px solid rgba(8, 246, 228, 1);
  margin-left: 97.2%;
}
/*内容部分*/
.content {
  display: flex;
  width: 100%;
  height: 93.2%;
  /*background-color: red;*/
}
/*左边内容部分 */
.leftContent {
  width: 20.6%;
  height: 96%;
  background-color: #041f44;
  margin-top: 1.3%;
  margin-left: 1.3%;
  border: 1px solid #3d71c1;
}
/* 每个表格上面的标题名支付方式样式 */
.spanStyle {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #ecfff5;
  letter-spacing: 0.36px;
  line-height: 22px;
  margin-left: 2%;
}
/* 每个表格上面的标题名左边小图片样式 */
.leftChartUpImage {
  color: #1398ff;
  margin-left: 4%;
  margin-top: 2.5%;
}

/*图表*/
.leftCharts {
  width: 90%;
  margin-left: 5%;
  height: 24.5%;
}
/* 图表部分标题 */
.leftChartUp {
  width: 100%;
  height: 10%;
}
/* 图表部分 */
.leftChartCenter {
  margin-top: 2%;
  width: 100%;
  height: 78%;
}
/* 图表底部装饰条样式 */
.leftChartDown {
  width: 100%;
  height: 10%;
}

/*右边内容*/
.rightContent {
  width: 20.6%;
  height: 96%;
  background-color: #041f44;
  margin-top: 1.3%;
  margin-left: 1.8%;
  border: 1px solid #3d71c1;
}
/* 每个表格上面的标题名左边小图片样式 */
.rightChartUpImage {
  color: #1398ff;
  margin-left: 4%;
  margin-top: 2.5%;
}

/*图表*/
.rightCharts {
  width: 90%;
  margin-left: 5%;
  height: 24.5%;
}
/* 图表部分标题 */
.rightChartUp {
  width: 100%;
  height: 10%;
}
/* 图表部分 */
.rightChartCenter {
  margin-top: 2%;
  width: 100%;
  height: 78%;
}
/* 图表底部装饰条样式 */
.rightChartDown {
  width: 100%;
  height: 10%;
}

/*中间上部分样式*/
.center {
  width: 52.6%;
  height: 94%;
  margin-top: 2.3%;
  margin-left: 1.8%;
  /*border: 1px solid red;*/
}
/*  中间剩余车位*/
.center-leftport {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #4fcfd7;
  letter-spacing: 0.57px;
}
/* 数字一栏*/
.center-line2 {
  width: 100%;
  height: 6.5%;
  margin-top: 0.8%;
  display: flex;
}
/* 数字框*/
.center-line2-number {
  width: 50px;
  height: 72px;
  margin-left: 1%;
  background: #023376;
  border: 1px solid #66e3fb;
}
/*数字框中的字*/
.center-line2-number-text {
  font-family: Helvetica-Bold;
  font-size: 40px;
  color: #08f6e4;
  text-align: center;
  margin-top: 20%;
}
/*空闲充电桩*/
.center-line2-charge {
  height: 72px;
  width: 120px;
  margin-left: 38%;
}
.center-line2-charge-text {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.5px;
}
.center-line2-charge-number {
  font-family: HelveticaNeue-Bold;
  font-size: 40px;
  color: #895efc;
  letter-spacing: 1.43px;
}

/*  空闲洗车位总数*/
.center-line2-wash {
  height: 72px;
  width: 120px;
  margin-left: 1%;
}
.center-line2-wash-text {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.5px;
}
.center-line2-wash-number {
  font-family: HelveticaNeue-Bold;
  font-size: 40px;
  color: #e9c503;
  letter-spacing: 1.43px;
}
/*总收入一行*/
.center-line3 {
  width: 100%;
  height: 6%;
  margin-top: 3%;
  display: flex;
}
/*上下的盒子*/
.center-line3-div-first {
}
.center-line3-div {
  margin-left: 2.1%;
}
/*总收入文字*/
.center-line3-div-text {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.57px;
}
/*总收入数字*/
.center-line3-div-number {
  font-family: HelveticaNeue-Medium;
  font-size: 34px;
  color: #18b2ff;
  letter-spacing: 1.21px;
}
/*  车位图*/
.center-down {
  width: 100%;
  height: 74.5%;
  margin-top: 4.2%;
  border: 1px solid #3d71c1;
  background-image: linear-gradient(180deg, #001d43 0%, #000c1c 100%);
}
</style>
