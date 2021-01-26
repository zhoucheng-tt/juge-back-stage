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
      <div class="top-left">
        <span class="top-text">溧水经济开发区管委会智慧停车管理平台</span>
      </div>
      <div class="top-right">
        <!--  首页头部选项卡-->
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
        <!--用户名和退出-->
        <div class="top-loginName">
          <!--用户名-->
          <span>{{ userName }}</span>
          <!--退出-->
          <span @click="loginOut()">
            <div class="exit">
              <svg
                width="36px"
                height="36px"
                viewBox="0 0 36 36"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>nav_exit</title>
                <defs>
                  <filter
                    x="-0.6%"
                    y="-18.8%"
                    width="101.2%"
                    height="137.5%"
                    filterUnits="objectBoundingBox"
                    id="filter-1"
                  >
                    <feOffset
                      dx="0"
                      dy="2"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    ></feOffset>
                    <feGaussianBlur
                      stdDeviation="2"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    ></feGaussianBlur>
                    <feColorMatrix
                      values="0 0 0 0 0.433839645   0 0 0 0 0.47302197   0 0 0 0 0.520040761  0 0 0 0.1 0"
                      type="matrix"
                      in="shadowBlurOuter1"
                      result="shadowMatrixOuter1"
                    ></feColorMatrix>
                    <feMerge>
                      <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                  <polygon
                    id="path-2"
                    points="0.6671 0 15.612 0 15.612 17.9999 0.6671 17.9999"
                  ></polygon>
                </defs>
                <g
                  id="交通"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="top"
                    transform="translate(-1859.000000, -14.000000)"
                    filter="url(#filter-1)"
                  >
                    <g
                      id="nav_functional_area"
                      transform="translate(1857.000000, 0.000000)"
                    >
                      <g
                        id="nav_exit"
                        transform="translate(11.000000, 23.000000)"
                      >
                        <path
                          d="M7.6053,11.7015 C7.4173,11.8885 7.4173,12.1925 7.6043,12.3805 C7.6973,12.4745 7.8203,12.5215 7.9433,12.5215 C8.0663,12.5215 8.1883,12.4755 8.2823,12.3825 L11.1013,9.5775 C11.3883,9.2915 11.3883,8.8265 11.1023,8.5405 L8.2833,5.7245 C8.0953,5.5365 7.7923,5.5365 7.6043,5.7245 C7.4173,5.9115 7.4173,6.2165 7.6053,6.4035 L9.7823,8.5785 L0.4803,8.5785 C0.2143,8.5785 0.0003,8.7935 0.0003,9.0585 C0.0003,9.3235 0.2143,9.5385 0.4803,9.5385 L9.7793,9.5385 L7.6053,11.7015 Z"
                          id="Fill-1"
                          fill="#FFFFFF"
                        ></path>
                        <g
                          id="Group-5"
                          transform="translate(2.000000, 0.000000)"
                        >
                          <mask id="mask-3" fill="white">
                            <use xlink:href="#path-2"></use>
                          </mask>
                          <g id="Clip-4"></g>
                          <path
                            d="M15.3201,0.2919 C15.1261,0.0969 14.8711,-0.0001 14.6161,-0.0001 L1.6631,-0.0001 C1.4081,-0.0001 1.1531,0.0969 0.9591,0.2919 C0.7641,0.4859 0.6671,0.7409 0.6671,0.9969 L0.6671,4.3879 L0.6671,4.9879 L0.6671,5.5189 C0.6671,5.7829 0.8841,5.9989 1.1531,5.9989 C1.4211,5.9989 1.6381,5.7829 1.6381,5.5189 L1.6381,4.9879 L1.6381,4.3909 L1.6381,0.9699 C1.6381,0.9699 14.6371,0.9659 14.6401,0.9689 L14.6411,0.9699 L14.6411,17.0289 C14.6411,17.0289 1.6411,17.0319 1.6381,17.0289 L1.6381,12.5089 L1.6381,12.5089 L1.6381,12.4819 C1.6381,12.2169 1.4211,12.0019 1.1531,12.0019 C0.8841,12.0019 0.6671,12.2169 0.6671,12.4819 L0.6671,12.5089 L0.6671,13.6099 L0.6671,17.0039 C0.6671,17.2579 0.7641,17.5129 0.9591,17.7069 C1.1531,17.9019 1.4081,17.9999 1.6631,17.9999 L14.6161,17.9999 C14.8711,17.9999 15.1261,17.9019 15.3201,17.7069 C15.5151,17.5129 15.6121,17.2579 15.6121,17.0039 L15.6121,0.9969 C15.6121,0.7409 15.5151,0.4859 15.3201,0.2919"
                            id="Fill-3"
                            fill="#FFFFFF"
                            mask="url(#mask-3)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div class="content">
      <!-- 左边部分 -->
      <div class="leftContent">
        <!-- 总停车数量 totalNumberParking-->
        <div class="leftCharts">
          <div class="leftChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">
              当日总停车数量(辆)
            </span>
            <span
              style="float:right;font-family:   HelveticaNeue-Bold;font-size: 18px;color: #7654E3;letter-spacing: 0.41px;"
              >{{ numberOfParkingTotal }} 辆
            </span>
          </div>
          <!-- 总停车数量-->
          <div class="leftChartCenter" id="numberOfParking">
            <Xchart
              id="numberOfParking"
              :option="numberOfParkingOptions"
            ></Xchart>
          </div>
          <div class="leftChartDown">
            <svg
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
        <div class="leftCharts-others">
          <div class="leftChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">当日车位利用率</span>
            <span
              style="font-family: PingFangSC-Medium;
font-size: 1rem;
color: #08F6E4;
letter-spacing: 0.36px;float: right"
            >
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
        <div class="leftCharts-others">
          <div class="leftChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">当日车位周转率</span>
            <span
              style="font-family: PingFangSC-Medium;
                     font-size: 1rem;
                     color: #E9C503;
                     letter-spacing: 0.36px;float:right;"
            >
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
        <div class="leftCharts-others">
          <div class="leftChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">当日平均停车时长(分钟)</span>
            <span
              style="margin-top:4px;font-family: PingFangSC-Medium;
              font-size: 1rem;
              color: #00DBEC;
              letter-spacing: 0.36px;
              float: right"
            >
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
      </div>
      <!-- 中间部分 -->
      <div class="center">
        <div style="display: flex">
          <!--        剩余车位数-->
          <div class="center-leftport">公共停车场剩余车位数</div>
          <!--        剩余车位数-->
          <div class="center-leftport" style="margin-left: 19%">
            员工停车场剩余车位数
          </div>
        </div>
        <div>
          <!--剩余停车场数字-->
          <div class="center-line2">
            <div style="display:flex;">
              <div class="center-line2-number-first">
                <div class="center-line2-number-text">
                  {{ parseInt((leftPort % 10000) / 1000) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ parseInt((leftPort % 1000) / 100) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ parseInt((leftPort % 100) / 10) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ leftPort % 10 }}
                </div>
              </div>
            </div>
            <div style="display:flex;margin-left: 13%">
              <div class="center-line2-number-first">
                <div class="center-line2-number-text">
                  {{ parseInt((leftPort % 10000) / 1000) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ parseInt((leftPort % 1000) / 100) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ parseInt((leftPort % 100) / 10) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ leftPort % 10 }}
                </div>
              </div>
            </div>
            <!--洗车机洗车次数数据-->
            <div class="center-line2-poacher">
              <div class="center-line2-poacher-text">精洗次数</div>
              <div class="center-line2-poacher-number">{{ poacherWash }}</div>
            </div>
            <div class="center-line2-normal">
              <div class="center-line2-normal-text">普洗次数</div>
              <div class="center-line2-normal-number">{{ garmentWash }}</div>
            </div>
            <div class="center-line2-fast">
              <div class="center-line2-fast-text">快洗次数</div>
              <div class="center-line2-fast-number">{{ fastWash }}</div>
            </div>
          </div>
        </div>
        <!--        总收入一行-->
        <div class="center-line3">
          <div class="center-line3-div-first">
            <div class="center-line3-div-text">总收入(元)</div>
            <div class="center-line3-div-number">
              {{ parseInt(contentNumList[0].totalIncome) / 100 }}
            </div>
          </div>
          <div class="center-line3-div">
            <div class="center-line3-div-text">停车场收入(元)</div>
            <div class="center-line3-div-number">
              {{ parseInt(contentNumList[0].receivableMoneyAmount) / 100 }}
            </div>
          </div>
          <div class="center-line3-div">
            <div class="center-line3-div-text">洗车收入(元)</div>
            <div class="center-line3-div-number">
              {{ parseInt(contentNumList[0].arrearageMoneyAmount) / 100 }}
            </div>
          </div>
        </div>
        <!--车位-->
        <div class="center-down">
          <div class="center-down-svg">
            <svg
              version="1.1"
              id="图层_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 711.8 1080.3"
              style="enable-background:new 0 0 711.8 1080.3;height: 100%; width: 100%"
              xml:space="preserve"
            >
              <title>溧水机电系统图纸0409wyh(1) Model (1)</title>
              <g id="底图">
                <path
                  class="st0"
                  d="M710.2,580.9l-0.1-1.6c-0.7-5.7-5.2-10.2-10.9-11l-1.7-0.1H495.1c-2.8,0-5.1-2.3-5.1-5.1V46.7l0,0l-17.8-6l0,0
		v28.6l-0.1,1.3c-0.7,4.1-4.6,6.9-8.7,6.2l-1.3-0.3l-18.4-6l-18.5-5.8l-16.6-4.9C330.8,37.6,251,22.8,170.4,15.7l-17.3-1.4l-3.8-0.2
		C115.4,13.7,87.1,40,85,73.8l-0.2,3.9v489.8c0,7.7-5.7,14.2-13.4,15.2l-1.9,0.1H7.8v119.1h61.8l1.9,0.1c7,0.8,12.4,6.4,13.3,13.3
		l0.1,1.8v229.3l0.1,1.3c0.6,3.1,3,5.6,6.2,6.2l1.4,0.1h72.2l0.1-0.5l0.3-0.4l0.4-0.3l0.5-0.1l0.5,0.1l0.4,0.3l0.2,0.4l0.1,0.5h50.9
		l0.1-0.5l0.2-0.4l0.4-0.3l0.5-0.1l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5h50.9l0.1-0.5l0.3-0.4l0.4-0.3l0.5-0.1l0.5,0.1l0.4,0.3l0.2,0.4
		l0.1,0.5h50.9l0.1-0.5l0.3-0.4l0.4-0.3l0.5,0l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5h50.8l0.1-0.5l0.2-0.4l0.4-0.3l0.5-0.1l0.5,0.1
		l0.4,0.3l0.3,0.4l0.1,0.5h50.9l0.1-0.5l0.3-0.4l0.4-0.3l0.5-0.1l0.5,0.1l0.4,0.3l0.2,0.4l0.1,0.5h50.9l0.1-0.5l0.2-0.4l0.4-0.3
		l0.5-0.1l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5h50.9l1.1,0.1c1.9,0.4,3.4,1.9,3.8,3.8l0.1,1.1v99.2l0.1,1.3c0.5,3.2,3,5.6,6.2,6.2
		l1.3,0.1h76.3c2.8,0.1,5-2.1,5.1-4.9c0,0,0-0.1,0-0.1V941.2l0,0l-0.1-1.1c-0.4-1.9-1.9-3.4-3.8-3.8l-1.1-0.1h-63.6l-0.8-0.1
		l-0.7-0.4l-0.6-0.6l-0.4-0.7l-0.1-0.8v-14l0.1-1.1l0.4-1l0.7-1l0.8-0.8l1-0.6l1.1-0.4l1.1-0.1h143.5"
                />
                <polyline class="st1" points="3.9,643.6 0,648.6 0,638.5 	" />
                <line class="st2" x1="69.7" y1="582.8" x2="7.9" y2="582.8" />
                <polyline
                  class="st3"
                  points="482.4,37.3 477.3,33.4 487.4,33.4 	"
                />
                <line class="st2" x1="212.1" y1="764.5" x2="212.1" y2="779.8" />
                <line class="st2" x1="212.1" y1="790" x2="212.1" y2="805.2" />
                <line class="st2" x1="212.1" y1="815.4" x2="212.1" y2="830.6" />
                <line class="st2" x1="212.1" y1="840.8" x2="212.1" y2="856.1" />
                <line class="st4" x1="510.4" y1="207.6" x2="506.3" y2="207.6" />
                <polygon
                  class="st4"
                  points="510.4,192.2 510.6,192.2 510.8,191.9 510.9,191.7 510.8,191.4 510.6,191.2 510.4,191.1 510.1,191.2
		509.8,191.4 509.8,191.7 509.8,191.9 510.1,192.2 	"
                />
                <line class="st4" x1="506.3" y1="199.3" x2="521.1" y2="196.3" />
                <line class="st4" x1="510.4" y1="175.8" x2="506.3" y2="175.8" />
                <line class="st4" x1="521.1" y1="187.1" x2="506.3" y2="184" />
                <path
                  class="st4"
                  d="M510.4,207.6l1.9-0.1c8.7-1.1,14.9-9.1,13.8-17.8c-0.9-7.2-6.6-12.9-13.8-13.8l-1.9-0.1"
                />
                <line class="st4" x1="509.1" y1="189.4" x2="509.1" y2="194" />
                <line class="st4" x1="509.4" y1="189.4" x2="509.4" y2="194" />
                <line class="st4" x1="502.7" y1="191.4" x2="509.1" y2="191.4" />
                <line class="st4" x1="502.7" y1="191.9" x2="509.1" y2="191.9" />
                <polyline
                  class="st2"
                  points="502.7,191.4 502.6,191.5 502.5,191.7 502.6,191.9 502.7,191.9 	"
                />
                <line class="st4" x1="509.4" y1="191.3" x2="509.9" y2="191.3" />
                <line class="st4" x1="509.4" y1="192.1" x2="509.9" y2="192.1" />
                <line class="st4" x1="509.4" y1="189.4" x2="509.1" y2="189.4" />
                <line class="st4" x1="509.4" y1="194" x2="509.1" y2="194" />
                <path
                  class="st4"
                  d="M521.1,196.3l1-0.1c2.5-0.6,4-3,3.4-5.5c-0.4-1.7-1.7-3-3.4-3.4l-1-0.1"
                />
                <line class="st4" x1="517.8" y1="188.5" x2="517.1" y2="189.3" />
                <line class="st4" x1="516.9" y1="192.7" x2="516.7" y2="192.8" />
                <polyline
                  class="st4"
                  points="516.8,191.8 516.5,191.8 516.7,192.8 	"
                />
                <line class="st4" x1="516.8" y1="191.6" x2="516.5" y2="191.6" />
                <line class="st4" x1="516.9" y1="190.6" x2="516.7" y2="190.6" />
                <line class="st4" x1="516.9" y1="190.5" x2="516.7" y2="190.4" />
                <polyline
                  class="st4"
                  points="517.3,189.5 517.1,189.4 516.7,190.4 	"
                />
                <line class="st4" x1="517.4" y1="189.5" x2="517.1" y2="189.3" />
                <line class="st4" x1="516.7" y1="190.6" x2="516.5" y2="191.6" />
                <line class="st4" x1="519.8" y1="187.3" x2="518.9" y2="187.7" />
                <line class="st4" x1="518" y1="188.6" x2="517.8" y2="188.5" />
                <line class="st4" x1="518.1" y1="188.6" x2="517.9" y2="188.4" />
                <polyline
                  class="st4"
                  points="518.9,188 518.8,187.7 517.9,188.4 	"
                />
                <line class="st4" x1="519" y1="187.9" x2="518.9" y2="187.7" />
                <polyline
                  class="st4"
                  points="520.2,187.2 520,187.3 520,187.5 	"
                />
                <line class="st4" x1="519.9" y1="187.5" x2="519.8" y2="187.3" />
                <line class="st4" x1="517.1" y1="194" x2="517.8" y2="194.9" />
                <line class="st4" x1="510.8" y1="198.9" x2="511" y2="198.8" />
                <line class="st4" x1="513.1" y1="198.4" x2="513.3" y2="198.4" />
                <polyline
                  class="st4"
                  points="516.7,192.9 517.1,193.9 517.3,193.8 	"
                />
                <line class="st4" x1="516.9" y1="192.8" x2="516.7" y2="192.9" />
                <line class="st4" x1="517.4" y1="193.9" x2="517.1" y2="194" />
                <line class="st4" x1="518.9" />
                <line class="st4" x1="518.1" y1="194.8" x2="517.9" y2="194.9" />
                <line class="st4" x1="519" y1="195.4" x2="518.9" y2="195.7" />
                <polyline
                  class="st4"
                  points="520,195.8 520,196.1 520.2,196.1 	"
                />
                <line class="st4" x1="519.9" y1="195.8" x2="519.8" y2="196.1" />
                <line class="st4" x1="510.4" y1="175.5" x2="506.3" y2="175.5" />
                <path
                  class="st4"
                  d="M510.4,207.8l1.9-0.1c8.9-1.1,15.2-9.2,14.1-18c-0.9-7.4-6.7-13.2-14.1-14.1l-1.9-0.1"
                />
                <line class="st4" x1="510.4" y1="207.8" x2="506.3" y2="207.8" />
                <line class="st4" x1="520" y1="195.8" x2="521" y2="196" />
                <line class="st4" x1="521.2" y1="187.3" x2="521.2" y2="196" />
                <polyline class="st4" points="521,196 521,187.3 520,187.5 	" />
                <line class="st4" x1="519.9" y1="187.5" x2="519" y2="187.9" />
                <line class="st4" x1="518.9" y1="188" x2="518.1" y2="188.6" />
                <line class="st4" x1="518" y1="188.6" x2="517.4" y2="189.5" />
                <line class="st4" x1="517.3" y1="189.5" x2="516.9" y2="190.5" />
                <line class="st4" x1="516.9" y1="190.6" x2="516.8" y2="191.6" />
                <line class="st4" x1="516.8" y1="191.8" x2="516.9" y2="192.7" />
                <line class="st4" x1="516.9" y1="192.8" x2="517.3" y2="193.8" />
                <line class="st4" x1="517.4" y1="193.9" x2="518" y2="194.7" />
                <line class="st4" x1="518.1" y1="194.8" x2="518.9" y2="195.4" />
                <line class="st4" x1="519" y1="195.4" x2="519.9" y2="195.8" />
                <path
                  class="st4"
                  d="M521.2,196l1-0.2c2.3-0.6,3.7-3,3.1-5.3c-0.4-1.5-1.6-2.7-3.1-3.1l-1-0.2"
                />
                <line class="st4" x1="520.2" y1="187.2" x2="506.3" y2="184.3" />
                <line class="st4" x1="506.3" y1="199" x2="520.2" y2="196.1" />
                <line class="st4" x1="510.7" y1="198.4" x2="510.8" y2="198.9" />
                <line class="st4" x1="511" y1="198.4" x2="511" y2="198.8" />
                <line class="st4" x1="513.2" y1="197.9" x2="513.3" y2="198.4" />
                <line class="st4" x1="512.9" y1="197.9" x2="513.1" y2="198.4" />
                <line class="st4" x1="515.3" y1="197.5" x2="515.4" y2="197.9" />
                <polyline
                  class="st4"
                  points="515,197.5 515.2,198 515.4,197.9 	"
                />
                <polyline
                  class="st4"
                  points="515.4,185.4 515.2,185.3 515,185.8 	"
                />
                <line class="st4" x1="515.3" y1="185.9" x2="515.4" y2="185.4" />
                <line class="st4" x1="512.9" y1="185.4" x2="513.1" y2="184.9" />
                <line class="st4" x1="513.2" y1="185.5" x2="513.3" y2="185" />
                <line class="st4" x1="511" y1="185" x2="511" y2="184.5" />
                <line class="st4" x1="510.7" y1="184.9" x2="510.8" y2="184.4" />
                <line class="st4" x1="513.1" y1="184.9" x2="513.3" y2="185" />
                <line class="st4" x1="510.8" y1="184.4" x2="511" y2="184.5" />
                <line class="st4" x1="573.1" y1="184.4" x2="572.9" y2="184.5" />
                <line class="st4" x1="570.8" y1="184.9" x2="570.6" y2="185" />
                <line class="st4" x1="573.2" y1="184.9" x2="573.1" y2="184.4" />
                <line class="st4" x1="572.9" y1="185" x2="572.9" y2="184.5" />
                <line class="st4" x1="570.7" y1="185.5" x2="570.6" y2="185" />
                <line class="st4" x1="571" y1="185.4" x2="570.8" y2="184.9" />
                <line class="st4" x1="568.6" y1="185.9" x2="568.5" y2="185.4" />
                <polyline
                  class="st4"
                  points="568.9,185.8 568.7,185.3 568.5,185.4 	"
                />
                <polyline
                  class="st4"
                  points="568.5,197.9 568.7,198 568.9,197.5 	"
                />
                <line class="st4" x1="568.6" y1="197.5" x2="568.5" y2="197.9" />
                <line class="st4" x1="571" y1="197.9" x2="570.8" y2="198.4" />
                <line class="st4" x1="570.7" y1="197.9" x2="570.6" y2="198.4" />
                <line class="st4" x1="572.9" y1="198.4" x2="572.9" y2="198.8" />
                <line class="st4" x1="573.2" y1="198.4" x2="573.1" y2="198.9" />
                <line class="st4" x1="577.6" y1="199" x2="563.6" y2="196.1" />
                <line class="st4" x1="563.6" y1="187.2" x2="577.6" y2="184.3" />
                <path
                  class="st4"
                  d="M562.7,187.3l-1,0.2c-2.3,0.6-3.7,3-3.1,5.3c0.4,1.5,1.6,2.7,3.1,3.1l1,0.2"
                />
                <line class="st4" x1="564" y1="195.8" x2="564.9" y2="195.4" />
                <line class="st4" x1="565" y1="195.4" x2="565.8" y2="194.8" />
                <line class="st4" x1="565.9" y1="194.7" x2="566.5" y2="193.9" />
                <line class="st4" x1="566.6" y1="193.8" x2="566.9" y2="192.8" />
                <line class="st4" x1="567" y1="192.7" x2="567.1" y2="191.8" />
                <line class="st4" x1="567.1" y1="191.6" x2="567" y2="190.6" />
                <line class="st4" x1="566.9" y1="190.5" x2="566.6" y2="189.5" />
                <line class="st4" x1="566.5" y1="189.5" x2="565.9" y2="188.6" />
                <line class="st4" x1="565.8" y1="188.6" x2="565" y2="188" />
                <line class="st4" x1="564.9" y1="187.9" x2="564" y2="187.5" />
                <polyline
                  class="st4"
                  points="563.9,187.5 562.9,187.3 562.9,196 	"
                />
                <line class="st4" x1="562.7" y1="187.3" x2="562.7" y2="196" />
                <line class="st4" x1="562.9" y1="196" x2="563.9" y2="195.8" />
                <line class="st4" x1="573.5" y1="207.8" x2="577.6" y2="207.8" />
                <path
                  class="st4"
                  d="M573.5,175.5l-1.9,0.1c-8.9,1.1-15.2,9.2-14.1,18c0.9,7.4,6.7,13.2,14.1,14.1l1.9,0.1"
                />
                <line class="st4" x1="573.5" y1="175.5" x2="577.6" y2="175.5" />
                <path
                  class="st4"
                  d="M541.9,196l1-0.1l1-0.4c2.1-1,3-3.6,2-5.8c-0.6-1.2-1.7-2.1-3-2.3l-1-0.1l-1,0.1c-2.3,0.5-3.8,2.9-3.2,5.2
		c0.3,1.3,1.2,2.3,2.3,2.9l0.9,0.4L541.9,196z"
                />
                <line class="st4" x1="542.1" y1="196.3" x2="542.1" y2="210.8" />
                <line class="st4" x1="541.8" y1="196.3" x2="541.8" y2="210.8" />
                <line class="st4" x1="542.1" y1="187.3" x2="542.1" y2="196" />
                <line class="st4" x1="541.8" y1="187.3" x2="541.8" y2="196" />
                <line class="st4" x1="542.1" y1="172.6" x2="542.1" y2="187.1" />
                <line class="st4" x1="541.8" y1="172.6" x2="541.8" y2="187.1" />
                <line class="st4" x1="506.1" y1="172.3" x2="506.1" y2="191.4" />
                <polyline
                  class="st4"
                  points="506.1,191.9 506.1,211 577.8,211 577.8,191.9 	"
                />
                <polyline
                  class="st4"
                  points="577.8,191.4 577.8,172.3 506.1,172.3 	"
                />
                <polyline
                  class="st4"
                  points="572.5,219.4 586.2,219.4 586.2,163.9 497.7,163.9 497.7,219.4 511.4,219.4 	"
                />
                <line class="st2" x1="518.5" y1="219.4" x2="565.4" y2="219.4" />
                <line class="st4" x1="506.3" y1="210.8" x2="541.9" y2="210.8" />
                <polyline
                  class="st4"
                  points="506.3,191.4 506.3,172.6 541.8,172.6 	"
                />
                <line class="st4" x1="506.3" y1="191.9" x2="506.3" y2="210.8" />
                <line class="st4" x1="564" y1="195.8" x2="564.1" y2="196.1" />
                <polyline
                  class="st4"
                  points="563.6,196.1 563.9,196.1 563.9,195.8 	"
                />
                <line class="st4" x1="564.9" y1="195.4" x2="565" y2="195.7" />
                <line class="st4" x1="565.8" y1="194.8" x2="566" y2="194.9" />
                <polyline
                  class="st4"
                  points="565,195.4 565.1,195.6 566,194.9 	"
                />
                <line class="st4" x1="565.9" y1="194.7" x2="566.1" y2="194.9" />
                <line class="st4" x1="564.1" y1="196.1" x2="565" y2="195.7" />
                <line class="st4" x1="566.5" y1="193.9" x2="566.8" y2="194" />
                <line class="st4" x1="566.9" y1="192.8" x2="567.2" y2="192.9" />
                <polyline
                  class="st4"
                  points="566.6,193.8 566.8,193.9 567.2,192.9 	"
                />
                <line class="st4" x1="570.8" y1="198.4" x2="570.6" y2="198.4" />
                <line class="st4" x1="573.1" y1="198.9" x2="572.9" y2="198.8" />
                <line class="st4" x1="566.1" y1="194.9" x2="566.8" y2="194" />
                <line class="st4" x1="564" y1="187.5" x2="564.1" y2="187.3" />
                <polyline
                  class="st4"
                  points="563.9,187.5 563.9,187.3 563.6,187.2 	"
                />
                <line class="st4" x1="564.9" y1="187.9" x2="565" y2="187.7" />
                <polyline class="st4" points="566,188.4 565.1,187.7 565,188 	" />
                <line class="st4" x1="565.8" y1="188.6" x2="566" y2="188.4" />
                <line class="st4" x1="565.9" y1="188.6" x2="566.1" y2="188.5" />
                <line class="st4" x1="565" y1="187.7" x2="564.1" y2="187.3" />
                <line class="st4" x1="567.4" y1="191.6" x2="567.2" y2="190.6" />
                <line class="st4" x1="566.5" y1="189.5" x2="566.8" y2="189.3" />
                <polyline
                  class="st4"
                  points="567.2,190.4 566.8,189.4 566.6,189.5 	"
                />
                <line class="st4" x1="566.9" y1="190.5" x2="567.2" y2="190.4" />
                <line class="st4" x1="567" y1="190.6" x2="567.2" y2="190.6" />
                <line class="st4" x1="567.1" y1="191.6" x2="567.4" y2="191.6" />
                <polyline
                  class="st4"
                  points="567.2,192.8 567.4,191.8 567.1,191.8 	"
                />
                <line class="st4" x1="567" y1="192.7" x2="567.2" y2="192.8" />
                <line class="st4" x1="566.8" y1="189.3" x2="566.1" y2="188.5" />
                <path
                  class="st4"
                  d="M562.8,187.1l-1,0.1c-2.5,0.6-4,3-3.4,5.5c0.4,1.7,1.7,3,3.4,3.4l1,0.1"
                />
                <line class="st4" x1="574.5" y1="194" x2="574.7" y2="194" />
                <line class="st4" x1="574.5" y1="189.4" x2="574.7" y2="189.4" />
                <line class="st4" x1="574.5" y1="192.1" x2="574" y2="192.1" />
                <line class="st4" x1="574.5" y1="191.3" x2="574" y2="191.3" />
                <polyline
                  class="st4"
                  points="581.1,191.9 581.3,191.9 581.4,191.7 581.3,191.5 581.1,191.4 	"
                />
                <line class="st4" x1="581.1" y1="191.9" x2="574.7" y2="191.9" />
                <line class="st4" x1="581.1" y1="191.4" x2="574.7" y2="191.4" />
                <line class="st4" x1="574.5" y1="189.4" x2="574.5" y2="194" />
                <line class="st4" x1="574.7" y1="189.4" x2="574.7" y2="194" />
                <line class="st4" x1="577.6" y1="172.6" x2="577.6" y2="191.4" />
                <path
                  class="st4"
                  d="M573.5,175.8l-1.9,0.1c-8.7,1.1-14.9,9.1-13.8,17.8c0.9,7.2,6.6,12.9,13.8,13.8l1.9,0.1"
                />
                <line class="st4" x1="562.8" y1="187.1" x2="577.6" y2="184" />
                <line class="st4" x1="573.5" y1="175.8" x2="577.6" y2="175.8" />
                <line class="st4" x1="577.6" y1="199.3" x2="562.8" y2="196.3" />
                <polygon
                  class="st4"
                  points="573.5,192.2 573.8,192.2 574.1,191.9 574.1,191.7 574.1,191.4 573.8,191.2 573.5,191.1 573.2,191.2
		573.1,191.4 573,191.7 573.1,191.9 573.2,192.2 	"
                />
                <line class="st4" x1="573.5" y1="207.6" x2="577.6" y2="207.6" />
                <polyline
                  class="st4"
                  points="577.6,191.9 577.6,210.8 542,210.8 	"
                />
                <line class="st4" x1="542.1" y1="172.6" x2="577.6" y2="172.6" />
                <path
                  class="st4"
                  d="M541.9,196.3l1-0.1l1-0.4c2.3-1.1,3.2-3.8,2.1-6.1c-0.6-1.3-1.8-2.2-3.1-2.5l-1-0.1l-1,0.1
		c-2.5,0.6-4,3-3.5,5.5c0.3,1.4,1.2,2.5,2.5,3.1l1,0.4L541.9,196.3z"
                />
                <rect
                  x="514.9"
                  y="245.8"
                  class="st4"
                  width="60.5"
                  height="27.9"
                />
                <rect
                  x="498.6"
                  y="235.6"
                  class="st4"
                  width="93"
                  height="48.2"
                />
                <line class="st4" x1="528.8" y1="259.7" x2="561.4" y2="259.7" />
                <line class="st4" x1="514.9" y1="270.2" x2="575.3" y2="270.2" />
                <line class="st4" x1="575.3" y1="249.2" x2="514.9" y2="249.2" />
                <line class="st4" x1="545.1" y1="276" x2="545.1" y2="243.4" />
                <line class="st4" x1="528.8" y1="245.8" x2="528.8" y2="273.7" />
                <polygon
                  class="st4"
                  points="545.1,276.2 545.3,276.2 545.3,276 545.3,275.8 545.1,275.7 544.9,275.8 544.9,276 544.9,276.2 	"
                />
                <polygon
                  class="st4"
                  points="545.1,272.8 545.3,272.6 545.3,272.5 545.3,272.3 545.1,272.2 544.9,272.3 544.9,272.5 544.9,272.6
		"
                />
                <polygon
                  class="st4"
                  points="545.1,247.1 545.3,247.1 545.3,246.9 545.3,246.7 545.1,246.7 544.9,246.7 544.9,246.9 544.9,247.1
		"
                />
                <polygon
                  class="st4"
                  points="545.1,243.7 545.3,243.6 545.3,243.4 545.3,243.2 545.1,243.2 544.9,243.2 544.9,243.4 544.9,243.6
		"
                />
                <line class="st4" x1="561.4" y1="273.7" x2="561.4" y2="245.8" />
                <polyline
                  class="st4"
                  points="572.5,234.7 572.5,219.4 490,219.4 	"
                />
                <polyline
                  class="st4"
                  points="490,234.7 572.5,234.7 537.5,234.7 592.5,234.7 592.5,284.7 497.7,284.7 497.7,234.7 532.4,234.7
		"
                />
                <path
                  class="st4"
                  d="M490,403.5l3.5-1.3c17.4-7.2,30-22.8,33.2-41.3l0.5-3.7l0.4-2.5c3.1-12.6,14.8-21,27.7-19.8l2.5,0.4l2.7,0.9
		c7.2,2.8,13.3,7.9,17.2,14.5l1.4,2.5l1.5,3.7c8.8,22.7,4.9,48.3-10.3,67.4l-2.5,3l-2.3,3.2c-20.2,30.6-11.7,71.7,18.8,91.8
		c0.8,0.6,1.7,1.1,2.5,1.6l3.5,1.9l2.8,1.6c13.1,8,21,22.3,20.8,37.6l-0.2,3.2h-5.1l0.2-3.1c0.2-13.5-6.7-26.1-18.2-33.3l-2.6-1.5
		l-3.6-2c-33.9-20.1-45.1-63.9-25-97.8c0.6-1.1,1.3-2.1,2-3.1l2.4-3.4l2.5-2.9c13.9-17.6,17.6-41.2,9.6-62.2l-1.5-3.5l-1.3-2.3
		c-3.3-5.4-8.3-9.5-14.2-11.9l-2.5-0.9l-2.2-0.2c-10-0.7-19.2,5.9-21.7,15.7l-0.4,2.2l-0.5,3.7c-3.6,21.1-18.1,38.7-38.2,46.2
		l-3.5,1.1"
                />
                <line class="st4" x1="562.3" y1="418.3" x2="560.2" y2="418.3" />
                <line class="st4" x1="559.7" y1="418.3" x2="557.7" y2="418.3" />
                <line class="st4" x1="557.2" y1="418.3" x2="555.1" y2="418.3" />
                <line class="st4" x1="554.6" y1="418.3" x2="552.6" y2="418.3" />
                <line class="st4" x1="552.1" y1="418.3" x2="550" y2="418.3" />
                <line class="st4" x1="549.5" y1="418.3" x2="547.5" y2="418.3" />
                <line class="st4" x1="547" y1="418.3" x2="545" y2="418.3" />
                <line class="st4" x1="544.4" y1="418.3" x2="542.4" y2="418.3" />
                <line class="st4" x1="541.9" y1="418.3" x2="534.8" y2="418.3" />
                <line class="st4" x1="562.3" y1="423.4" x2="560.2" y2="423.4" />
                <line class="st4" x1="559.7" y1="423.4" x2="557.7" y2="423.4" />
                <line class="st4" x1="557.2" y1="423.4" x2="555.1" y2="423.4" />
                <line class="st4" x1="554.6" y1="423.4" x2="552.6" y2="423.4" />
                <line class="st4" x1="552.1" y1="423.4" x2="550" y2="423.4" />
                <line class="st4" x1="549.5" y1="423.4" x2="547.5" y2="423.4" />
                <line class="st4" x1="547" y1="423.4" x2="545" y2="423.4" />
                <line class="st4" x1="544.4" y1="423.4" x2="542.4" y2="423.4" />
                <line class="st4" x1="541.9" y1="423.4" x2="539.9" y2="423.4" />
                <line class="st4" x1="534.8" y1="418.3" x2="534.8" y2="450.6" />
                <line class="st4" x1="539.9" y1="418.3" x2="539.9" y2="455.7" />
                <line class="st4" x1="541.9" y1="418.3" x2="541.9" y2="423.4" />
                <line class="st4" x1="542.4" y1="418.3" x2="542.4" y2="423.4" />
                <line class="st4" x1="534.8" y1="439.4" x2="523.3" y2="439.4" />
                <line class="st4" x1="534.8" y1="438.1" x2="522.1" y2="438.1" />
                <line class="st4" x1="534.8" y1="436.9" x2="520.8" y2="436.9" />
                <line class="st4" x1="523.3" y1="439.4" x2="523.3" y2="450.6" />
                <line class="st4" x1="522.1" y1="438.1" x2="522.1" y2="450.6" />
                <polyline
                  class="st4"
                  points="520.8,436.9 520.8,450.6 534.8,450.6 	"
                />
                <line class="st4" x1="539.9" y1="455.7" x2="520.8" y2="455.7" />
                <rect
                  x="524.6"
                  y="440.5"
                  class="st4"
                  width="10.2"
                  height="10.1"
                />
                <path class="st4" d="M524.6,440.5" />
                <line class="st4" x1="544.4" y1="418.3" x2="544.4" y2="423.4" />
                <line class="st4" x1="545" y1="418.3" x2="545" y2="423.4" />
                <line class="st4" x1="547" y1="418.3" x2="547" y2="423.4" />
                <line class="st4" x1="547.5" y1="418.3" x2="547.5" y2="423.4" />
                <line class="st4" x1="549.5" y1="418.3" x2="549.5" y2="423.4" />
                <line class="st4" x1="550" y1="418.3" x2="550" y2="423.4" />
                <line class="st4" x1="552.1" y1="418.3" x2="552.1" y2="423.4" />
                <line class="st4" x1="552.6" y1="418.3" x2="552.6" y2="423.4" />
                <line class="st4" x1="554.6" y1="418.3" x2="554.6" y2="423.4" />
                <line class="st4" x1="555.1" y1="418.3" x2="555.1" y2="423.4" />
                <line class="st4" x1="557.2" y1="418.3" x2="557.2" y2="423.4" />
                <line class="st4" x1="557.7" y1="418.3" x2="557.7" y2="423.4" />
                <line class="st4" x1="559.7" y1="418.3" x2="559.7" y2="423.4" />
                <line class="st4" x1="560.2" y1="418.3" x2="560.2" y2="423.4" />
                <line class="st4" x1="562.3" y1="418.3" x2="562.3" y2="423.4" />
                <line class="st4" x1="520.8" y1="450.6" x2="520.8" y2="455.7" />
                <line class="st4" x1="567.4" y1="418.3" x2="565.3" y2="418.3" />
                <line class="st4" x1="564.8" y1="418.3" x2="562.7" y2="418.3" />
                <polyline
                  class="st4"
                  points="564.5,423.4 562.7,423.4 562.7,418.3 	"
                />
                <line class="st4" x1="564.8" y1="418.3" x2="564.8" y2="423" />
                <line class="st4" x1="565.3" y1="418.3" x2="565.3" y2="422.4" />
                <line class="st4" x1="567.4" y1="418.3" x2="567.4" y2="419.9" />
                <line class="st4" x1="539.9" y1="476" x2="539.9" y2="474" />
                <line class="st4" x1="539.9" y1="473.5" x2="539.9" y2="471.5" />
                <line class="st4" x1="539.9" y1="470.9" x2="539.9" y2="469" />
                <line class="st4" x1="539.9" y1="468.4" x2="539.9" y2="466.4" />
                <line class="st4" x1="539.9" y1="465.9" x2="539.9" y2="463.9" />
                <line class="st4" x1="539.9" y1="463.3" x2="539.9" y2="461.3" />
                <line class="st4" x1="539.9" y1="460.8" x2="539.9" y2="458.8" />
                <line class="st4" x1="539.9" y1="458.2" x2="539.9" y2="456.2" />
                <line class="st4" x1="534.8" y1="476" x2="534.8" y2="474" />
                <line class="st4" x1="534.8" y1="473.5" x2="534.8" y2="471.5" />
                <line class="st4" x1="534.8" y1="470.9" x2="534.8" y2="469" />
                <line class="st4" x1="534.8" y1="468.4" x2="534.8" y2="466.4" />
                <line class="st4" x1="534.8" y1="465.9" x2="534.8" y2="463.9" />
                <line class="st4" x1="534.8" y1="463.3" x2="534.8" y2="461.3" />
                <line class="st4" x1="534.8" y1="460.8" x2="534.8" y2="458.8" />
                <polyline
                  class="st4"
                  points="534.8,458.2 534.8,456.2 539.9,456.2 	"
                />
                <line class="st4" x1="539.9" y1="458.2" x2="534.8" y2="458.2" />
                <line class="st4" x1="539.9" y1="458.8" x2="534.8" y2="458.8" />
                <line class="st4" x1="539.9" y1="460.8" x2="534.8" y2="460.8" />
                <line class="st4" x1="539.9" y1="461.3" x2="534.8" y2="461.3" />
                <line class="st4" x1="539.9" y1="463.3" x2="534.8" y2="463.3" />
                <line class="st4" x1="539.9" y1="463.9" x2="534.8" y2="463.9" />
                <line class="st4" x1="539.9" y1="465.9" x2="534.8" y2="465.9" />
                <line class="st4" x1="539.9" y1="466.4" x2="534.8" y2="466.4" />
                <line class="st4" x1="539.9" y1="468.4" x2="534.8" y2="468.4" />
                <line class="st4" x1="539.9" y1="469" x2="534.8" y2="469" />
                <line class="st4" x1="539.9" y1="470.9" x2="534.8" y2="470.9" />
                <line class="st4" x1="539.9" y1="471.5" x2="534.8" y2="471.5" />
                <line class="st4" x1="539.9" y1="473.5" x2="534.8" y2="473.5" />
                <line class="st4" x1="539.9" y1="474" x2="534.8" y2="474" />
                <line class="st4" x1="539.9" y1="476" x2="534.8" y2="476" />
                <line class="st4" x1="539.9" y1="478.6" x2="539.9" y2="476.6" />
                <polyline
                  class="st4"
                  points="534.8,478.6 534.8,476.6 539.9,476.6 	"
                />
                <line class="st4" x1="539.9" y1="478.6" x2="534.8" y2="478.6" />
                <line class="st4" x1="539.9" y1="496.4" x2="539.9" y2="494.4" />
                <line class="st4" x1="539.9" y1="493.9" x2="539.9" y2="491.8" />
                <line class="st4" x1="539.9" y1="491.3" x2="539.9" y2="489.3" />
                <line class="st4" x1="539.9" y1="488.8" x2="539.9" y2="486.7" />
                <line class="st4" x1="539.9" y1="486.2" x2="539.9" y2="484.2" />
                <line class="st4" x1="539.9" y1="483.7" x2="539.9" y2="481.7" />
                <line class="st4" x1="539.9" y1="481.1" x2="539.9" y2="479.1" />
                <line class="st4" x1="534.8" y1="496.4" x2="534.8" y2="494.4" />
                <line class="st4" x1="534.8" y1="493.9" x2="534.8" y2="491.8" />
                <line class="st4" x1="534.8" y1="491.3" x2="534.8" y2="489.3" />
                <line class="st4" x1="534.8" y1="488.8" x2="534.8" y2="486.7" />
                <line class="st4" x1="534.8" y1="486.2" x2="534.8" y2="484.2" />
                <line class="st4" x1="534.8" y1="483.7" x2="534.8" y2="481.7" />
                <polyline
                  class="st4"
                  points="534.8,481.1 534.8,479.1 539.9,479.1 	"
                />
                <line class="st4" x1="539.9" y1="481.1" x2="534.8" y2="481.1" />
                <line class="st4" x1="539.9" y1="481.7" x2="534.8" y2="481.7" />
                <line class="st4" x1="539.9" y1="483.7" x2="534.8" y2="483.7" />
                <line class="st4" x1="539.9" y1="484.2" x2="534.8" y2="484.2" />
                <line class="st4" x1="539.9" y1="486.2" x2="534.8" y2="486.2" />
                <line class="st4" x1="539.9" y1="486.7" x2="534.8" y2="486.7" />
                <line class="st4" x1="539.9" y1="488.8" x2="534.8" y2="488.8" />
                <line class="st4" x1="539.9" y1="489.3" x2="534.8" y2="489.3" />
                <line class="st4" x1="539.9" y1="491.3" x2="534.8" y2="491.3" />
                <line class="st4" x1="539.9" y1="491.8" x2="534.8" y2="491.8" />
                <line class="st4" x1="539.9" y1="493.9" x2="534.8" y2="493.9" />
                <line class="st4" x1="539.9" y1="494.4" x2="534.8" y2="494.4" />
                <line class="st4" x1="539.9" y1="496.4" x2="534.8" y2="496.4" />
                <line class="st4" x1="539.9" y1="499" x2="539.9" y2="496.9" />
                <polyline
                  class="st4"
                  points="534.8,499 534.8,496.9 539.9,496.9 	"
                />
                <line class="st4" x1="539.9" y1="499" x2="534.8" y2="499" />
                <line class="st4" x1="554.8" y1="493.9" x2="553.1" y2="493.9" />
                <line class="st4" x1="552.6" y1="493.9" x2="550.6" y2="493.9" />
                <line class="st4" x1="550" y1="493.9" x2="548" y2="493.9" />
                <line class="st4" x1="547.5" y1="493.9" x2="545.5" y2="493.9" />
                <line class="st4" x1="545" y1="493.9" x2="542.9" y2="493.9" />
                <line class="st4" x1="542.4" y1="493.9" x2="540.4" y2="493.9" />
                <line class="st4" x1="555.1" y1="499" x2="553.1" y2="499" />
                <line class="st4" x1="552.6" y1="499" x2="550.6" y2="499" />
                <line class="st4" x1="550" y1="499" x2="548" y2="499" />
                <line class="st4" x1="547.5" y1="499" x2="545.5" y2="499" />
                <line class="st4" x1="545" y1="499" x2="542.9" y2="499" />
                <polyline
                  class="st4"
                  points="542.4,499 540.4,499 540.4,493.9 	"
                />
                <line class="st4" x1="542.4" y1="493.9" x2="542.4" y2="499" />
                <line class="st4" x1="542.9" y1="493.9" x2="542.9" y2="499" />
                <line class="st4" x1="545" y1="493.9" x2="545" y2="499" />
                <line class="st4" x1="545.5" y1="493.9" x2="545.5" y2="499" />
                <line class="st4" x1="547.5" y1="493.9" x2="547.5" y2="499" />
                <line class="st4" x1="548" y1="493.9" x2="548" y2="499" />
                <line class="st4" x1="550" y1="493.9" x2="550" y2="499" />
                <line class="st4" x1="550.6" y1="493.9" x2="550.6" y2="499" />
                <line class="st4" x1="552.6" y1="493.9" x2="552.6" y2="499" />
                <line class="st4" x1="553.1" y1="493.9" x2="553.1" y2="499" />
                <line class="st4" x1="555.1" y1="494.8" x2="555.1" y2="499" />
                <polyline class="st4" points="557,499 555.7,499 555.7,496 	" />
                <path
                  class="st5"
                  d="M212.1,866.3v-112l0,0v-37.1l-0.1-1.8c-0.9-7.7-7.4-13.5-15.1-13.4H118l-1.9,0.1c-7,0.8-12.5,6.3-13.3,13.3
		l-0.1,1.8v164.3l0.1,1.9c0.8,7,6.3,12.5,13.3,13.4l1.9,0.1h78.8c7.7,0,14.2-5.8,15.1-13.4l0.1-1.9L212.1,866.3"
                />
                <path
                  class="st5"
                  d="M118,307.9h78.8l1.9,0.1c7,0.8,12.4,6.4,13.3,13.3l0.1,1.8v207.4l0,0v37.1l-0.1,1.9
		c-0.9,6.9-6.3,12.4-13.3,13.3l-1.9,0.1H118l-1.9-0.1c-7.7-1-13.4-7.5-13.4-15.2V323.1l0.1-1.8c0.8-7,6.3-12.5,13.3-13.3L118,307.9z
		"
                />
                <path
                  class="st6"
                  d="M157.2,424l0.5,3.5c3.8,22.5,21.3,40.3,43.8,44.3l3.5,0.5l0,0l7.2,1.3v5l-6.5-1.1l0,0l-3.7-0.5
		c-25.6-4-45.7-24.2-49.4-49.9l-0.4-3.8L157.2,424z"
                />
                <path
                  class="st6"
                  d="M152.1,423.3l0.9,0.3l1.6,0.3l1.7,0.1l1-0.1"
                />
                <path
                  class="st6"
                  d="M143.8,413.3c0.1,0.8,0.3,1.7,0.5,2.5l0,0l-41.6,15.4v-2.7L143.8,413.3L143.8,413.3z"
                />
                <path
                  class="st6"
                  d="M160.4,399.7c-0.8-0.3-1.7-0.5-2.5-0.6l-1.6-0.1l-1,0.1l0,0l1.1-3.9c4.5-18.6,0.8-38.3-10.2-54.1l-2.4-3.2
		l-2.6-3.4c-5-6.9-8.8-14.6-11.4-22.8l-1.1-4.1h5.2l1.3,4.1c2.3,6.9,5.7,13.4,9.9,19.4l2.6,3.5l2.5,3.2
		c11.8,16.8,15.9,37.8,11.2,57.8l-1,3.9"
                />
                <path
                  class="st4"
                  d="M118,307.9h78.8l1.9,0.1c7,0.8,12.4,6.4,13.3,13.3l0.1,1.8v207.4l0,0v37.1l-0.1,1.9
		c-0.9,6.9-6.3,12.4-13.3,13.3l-1.9,0.1H118l-1.9-0.1c-7.7-1-13.4-7.5-13.4-15.2V323.1l0.1-1.8c0.8-7,6.3-12.5,13.3-13.3L118,307.9z
		"
                />
                <path
                  class="st4"
                  d="M157.1,424.2l0.5,3.5c3.8,22.5,21.3,40.3,43.8,44.3l3.5,0.5l0,0l7.2,1.3"
                />
                <path
                  class="st4"
                  d="M212.1,478.7l-6.5-1.1l0,0l-3.7-0.5c-25.6-4-45.7-24.2-49.4-49.9l-0.4-3.8"
                />
                <line class="st4" x1="143.7" y1="413.5" x2="102.7" y2="428.6" />
                <line class="st4" x1="144.3" y1="415.9" x2="102.7" y2="431.3" />
                <path
                  class="st4"
                  d="M160.3,399.9l1-3.9c4.7-20,0.7-41.1-11.2-57.8l-2.5-3.2l-2.6-3.5c-4.2-5.9-7.6-12.5-9.9-19.4l-1.3-4.1"
                />
                <path
                  class="st4"
                  d="M128.5,307.9l1.1,4.1c2.6,8.1,6.4,15.8,11.4,22.7l2.6,3.4l2.4,3.2c11,15.7,14.7,35.4,10.2,54.1l-1.1,3.9"
                />
                <path
                  class="st7"
                  d="M156.1,424.3l1.6-0.1l1.6-0.3c6.7-1.8,10.6-8.7,8.8-15.4c-1.3-4.9-5.4-8.4-10.4-9.1l-1.6-0.1l-1.7,0.1
		c-6.9,1-11.7,7.3-10.7,14.2c0.7,5,4.3,9.1,9.1,10.4l1.6,0.3L156.1,424.3z"
                />
                <path
                  class="st5"
                  d="M229.9,323.1l0.1-1.8c0.8-7,6.3-12.5,13.3-13.3l1.9-0.1H457l1.9,0.1c7.7,0.9,13.4,7.4,13.4,15.1v170.4
		l-0.1,1.8c-0.9,7.7-7.4,13.5-15.2,13.4H245.2l-1.9-0.1c-7-0.8-12.5-6.3-13.3-13.3l-0.1-1.8V323.1z"
                />
                <path
                  class="st6"
                  d="M261.7,307.9l1.4,4.1c14.9,39.4,58.9,59.2,98.3,44.3c1.6-0.6,3.3-1.3,4.9-2l3.9-1.9l0.4-0.2l3-1.1
		c20.9-7.2,43.9,2.6,53.3,22.6l1.3,2.9l1.3,3.2c7,15.3,22.8,26.3,39.8,26.6l3.2-0.1v5.1l-3.5,0.1c-19-0.5-36.4-12.7-44.2-29.9
		l-1.4-3.2l-1.1-2.7c-8.3-17.6-28.4-26.2-46.9-19.9l-2.8,1.1l-4.4,2.2l-4.6,1.9l-1.6,0.7c-3.2,1.7-5.7,4.4-7.1,7.8l-0.5,1.7l0,0
		l-0.9,3.3c-2.4,10.3-1.2,21.1,3.4,30.5l1.9,3.5l1.7,2.7c5.3,9.4,6.4,20.5,3.2,30.8l-1.1,3l-1.1,3.1c-4.2,12.8-3.1,26.8,3,38.8
		l1.6,2.9l1.4,2.5c2.1,4.3,3.5,8.9,4,13.6v2.8h-5l-0.2-2.9l-0.4-2.8l-0.7-2.8l-1-2.7l-1.1-2.6l-1.4-2.5l-1.7-3.2
		c-6.8-13.2-8-28.6-3.4-42.7l1.3-3.5l1-2.7c2.3-7.4,2-15.4-0.9-22.6l-1.1-2.6l0,0l-0.6-0.9c-1.8-2.2-5-2.5-7.2-0.7
		c-0.5,0.4-1,1-1.3,1.6l-0.4,1.1l-1.2,4.1c-4.2,13.6-12.2,25.7-22.9,34.9l-3.3,2.6l-3.5,2.6c-6,4.1-12.6,7.3-19.6,9.5l-4.2,1.2
		l-5.8,1.3c-9.7,2-19.6,3.1-29.5,3.1l-5.9-0.1l-5.3-0.1l-5.3,0.2l-5.3,0.4l-5.3,0.7v-5.2l5.3-0.7l5.4-0.4l5.4-0.1l5.3,0.1l5.8,0.1
		c9.6,0,19.1-1,28.4-3l5.6-1.3l4-1.2c27.4-8.7,46.8-33.3,49-62l0.2-4.2l-0.4-2.9c-2.2-13.2-10.8-24.5-22.9-30.3l-2.2-0.8l-4.4-1
		c-26.4-6.6-47.7-26.1-56.7-51.7l-1.4-4.2L261.7,307.9z"
                />
                <path
                  class="st7"
                  d="M346.8,365.3h0.8l0.8,0.3l0.6,0.5l0.5,0.7l0.2,0.8l-0.1,0.8l-1.2,4.6l-1.1,4.6l-0.3,0.8
		c-0.7,1.2-2.2,1.6-3.4,0.9c-0.1-0.1-0.2-0.1-0.3-0.2l-0.6-0.7l-2-2.8l-2.1-2.7l-2.3-2.5l-0.5-0.7c-0.6-1.3-0.1-2.8,1.2-3.4
		c0.1,0,0.1,0,0.2-0.1l0.8-0.1l4.4-0.4L346.8,365.3z"
                />
                <path
                  class="st4"
                  d="M472.3,406.3l-3.2,0.1c-17-0.3-32.7-11.3-39.7-26.6l-1.3-3.2l-1.3-2.9c-9.4-20-32.3-29.8-53.3-22.6l-3,1.1
		l-0.4,0.2l-3.9,1.9c-38.3,17.6-83.5,0.8-101.1-37.5c-0.7-1.6-1.4-3.2-2-4.8l-1.4-4.1"
                />
                <path
                  class="st4"
                  d="M256.4,307.9l1.4,4.2c9,25.6,30.3,45.1,56.7,51.7l4.4,1l2.2,0.8c12.1,5.8,20.7,17.1,22.9,30.3l0.4,2.9
		l-0.2,4.2c-2.2,28.7-21.5,53.3-49,62l-4,1.2l-5.6,1.3c-9.3,2-18.9,3-28.4,3l-5.8-0.1l-5.3-0.1l-5.4,0.1l-5.4,0.4l-5.3,0.7v5.2
		l5.3-0.7l5.3-0.4l5.3-0.2l5.3,0.1l5.9,0.1c9.9,0,19.8-1.1,29.5-3.1l5.8-1.3l4.2-1.2c6.9-2.2,13.5-5.4,19.6-9.5l3.5-2.6l3.3-2.6
		c10.8-9.3,18.7-21.4,22.9-34.9l1.2-4.1l0.4-1.1c1.3-2.5,4.4-3.5,6.9-2.2c0.6,0.3,1.2,0.8,1.6,1.3l0.6,0.9l0,0l1.1,2.6
		c2.9,7.2,3.2,15.2,0.9,22.6l-1,2.7l-1.3,3.5c-4.7,14.1-3.4,29.5,3.4,42.7l1.7,3.2l1.4,2.5l1.1,2.6l1,2.7l0.7,2.8l0.4,2.8l0.3,2.9h5
		l-0.1-2.8c-0.5-4.7-1.8-9.4-4-13.6l-1.4-2.6l-1.6-2.9c-6.1-12-7.2-26-3-38.8l1.1-3.1l1.1-3c3.3-10.2,2.1-21.4-3.1-30.7l-1.7-2.7
		l-1.9-3.5c-4.6-9.5-5.8-20.3-3.4-30.5l0.9-3.3l0,0l0.5-1.7c1.4-3.4,3.9-6.1,7.1-7.8l1.6-0.7l4.6-1.9l4.4-2.2l2.8-1.1
		c18.4-6.3,38.6,2.3,46.9,19.9l1.1,2.7l1.4,3.2c7.8,17.2,25.2,29.4,44.2,29.9l3.5-0.1"
                />
              </g>
              <g id="公共停车场">
                <path
                  class="st5"
                  d="M151.1,58.8l0.1-1.3c0.6-3.7,3.8-6.3,7.5-6.3H179l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v61.1l-0.1,1.3
		c-0.6,3.6-3.8,6.3-7.5,6.3h-20.3l-1.3-0.1c-3.2-0.6-5.6-3-6.2-6.2l-0.1-1.3L151.1,58.8z"
                />
                <path
                  class="st5"
                  d="M151.1,152.9l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1H179l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v83.9l-0.1,1.3
		c-0.5,3.2-3,5.7-6.2,6.2l-1.3,0.1h-20.3l-1.3-0.1c-3.2-0.5-5.7-3-6.2-6.2l-0.1-1.3L151.1,152.9z"
                />
                <path
                  class="st5"
                  d="M204.5,262.3l1.3,0.1c3.2,0.5,5.6,3,6.2,6.2l0.1,1.3v12.5l-0.1,1.3c-0.6,3.6-3.8,6.3-7.5,6.3H118l-1.9-0.1
		c-7-0.8-12.5-6.3-13.3-13.3l-0.1-1.8V152.9l0.1-1.3c0.5-3.2,3-5.6,6.2-6.2l1.3-0.1h15.3l1.3,0.1c3.2,0.5,5.6,3,6.2,6.2l0.1,1.3
		v109.4H204.5"
                />
                <polygon
                  class="st5"
                  points="351.2,79.1 350.4,78.8 349.8,78.2 349.4,77.5 349.3,76.6 349.3,66 349.3,66 349.4,65.3 349.7,64.6
		350.2,64 350.9,63.7 351.7,63.5 352.4,63.5 371.1,68.2 371.1,68.2 424.3,81.9 425,82.2 425.6,82.7 426.1,83.5 426.2,84.2 426.1,85
		423.5,95.2 423.2,95.9 422.6,96.5 422,97 421.2,97.1 420.4,97.1 417.5,96.3 	"
                />
                <path
                  class="st5"
                  d="M331.4,92.4V62.7l0,0l-0.1-1.1l-0.4-1.1l-0.7-1l-0.8-0.8l-1-0.7l-1.1-0.4l-16.1-3.4v200.4
		c0,3.7-2.7,6.8-6.3,7.5l-1.3,0.1h-66.2l-1.3,0.1c-3.1,0.6-5.6,3-6.2,6.2l-0.1,1.3v12.5l0.1,1.3c0.6,3.1,3,5.6,6.2,6.2l1.3,0.1H321
		l0.5-3.1l0.2-3.2l0.1-3.1l-0.2-3.2l-0.4-3.1l-0.1-2.7c0.6-17.1,15.7-29.8,32.6-25.7l2.3,0.7l3.3,1l3.4,0.7l3.4,0.5l3.5,0.2h3.4
		l3.5-0.2l4-0.3c36.6-3.8,63.2-36.6,59.3-73.1c-0.6-5.6-1.9-11.1-3.8-16.4l-1.5-3.7l0,0l-2.3-5.3c-3.5-9-6-18.3-7.6-27.8l-0.8-5.7
		l-4-1L331.4,92.4z"
                />
                <line class="st2" x1="133.3" y1="262.3" x2="133.3" y2="155.5" />
                <rect x="118" y="186" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,186" />
                <rect x="118" y="193.6" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M118,193.6" />
                <rect x="118" y="201.3" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,201.3" />
                <rect x="118" y="208.9" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,208.9" />
                <rect x="118" y="216.5" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,216.5" />
                <rect x="118" y="224.2" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,224.2" />
                <rect x="118" y="247.1" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,247.1" />
                <rect x="118" y="254.7" class="st8" width="15.2" height="7.6" />
                <rect
                  x="138.4"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect x="146" y="262.3" class="st8" width="7.6" height="15.2" />
                <rect
                  x="153.6"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="161.2"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="168.8"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="176.4"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect x="184" y="262.3" class="st8" width="7.6" height="15.2" />
                <rect
                  x="191.6"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M118,254.7" />
                <rect x="118" y="155.5" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M118,155.5" />
                <rect x="118" y="163.1" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,163.1" />
                <rect x="118" y="170.8" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,170.7" />
                <rect x="118" y="178.4" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,178.4" />
                <rect
                  x="311.3"
                  y="193.6"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M311.4,193.6" />
                <rect
                  x="311.3"
                  y="201.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,201.3" />
                <rect
                  x="311.3"
                  y="208.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,208.9" />
                <rect
                  x="311.3"
                  y="216.5"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,216.5" />
                <rect
                  x="311.3"
                  y="224.2"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,224.2" />
                <rect
                  x="311.3"
                  y="231.8"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M311.4,231.7" />
                <rect
                  x="311.3"
                  y="239.5"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,239.5" />
                <rect
                  x="311.3"
                  y="155.5"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M311.4,155.5" />
                <rect
                  x="311.3"
                  y="163.1"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,163.1" />
                <rect
                  x="311.3"
                  y="170.8"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,170.7" />
                <rect
                  x="311.3"
                  y="178.4"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,178.4" />
                <rect x="311.3" y="186" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M311.4,186" />
                <rect x="118" y="231.8" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M118,231.7" />
                <rect x="118" y="239.5" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M118,239.5" />
                <rect
                  x="311.3"
                  y="140.2"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,140.2" />
                <rect
                  x="311.3"
                  y="147.8"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,147.8" />
                <path class="st2" d="M472.3,103.8L472.3,103.8z" />
                <line class="st2" x1="186.7" y1="152.9" x2="186.7" y2="236.9" />
                <rect
                  x="171.4"
                  y="183.5"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,183.5" />
                <rect
                  x="171.4"
                  y="191.1"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,191.1" />
                <rect
                  x="171.4"
                  y="198.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,198.7" />
                <rect
                  x="171.4"
                  y="206.3"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st8" d="M171.4,206.3" />
                <rect x="171.4" y="214" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M171.4,214" />
                <rect
                  x="171.4"
                  y="221.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,221.6" />
                <rect
                  x="171.4"
                  y="229.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,229.3" />
                <rect
                  x="171.4"
                  y="152.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,152.9" />
                <rect
                  x="171.4"
                  y="160.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,160.6" />
                <rect
                  x="171.4"
                  y="168.2"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M171.4,168.2" />
                <rect
                  x="171.4"
                  y="175.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,175.9" />
                <line class="st2" x1="151.1" y1="152.9" x2="151.1" y2="236.9" />
                <rect
                  x="151.1"
                  y="183.5"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,183.5" />
                <rect
                  x="151.1"
                  y="191.1"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,191.1" />
                <rect
                  x="151.1"
                  y="198.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,198.7" />
                <rect
                  x="151.1"
                  y="206.3"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M151.1,206.3" />
                <rect x="151.1" y="214" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M151.1,214" />
                <rect
                  x="151.1"
                  y="221.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,221.6" />
                <rect
                  x="151.1"
                  y="229.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,229.3" />
                <rect
                  x="151.1"
                  y="152.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,152.9" />
                <rect
                  x="151.1"
                  y="160.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,160.6" />
                <rect
                  x="151.1"
                  y="168.2"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M151.1,168.2" />
                <rect
                  x="151.1"
                  y="175.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,175.9" />
                <path
                  class="st5"
                  d="M204.6,152.9l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h20.3l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v83.9
		l-0.1,1.3c-0.5,3.2-3,5.7-6.2,6.2l-1.3,0.1h-20.3l-1.3-0.1c-3.2-0.5-5.7-3-6.2-6.2l-0.1-1.3L204.6,152.9z"
                />
                <line class="st2" x1="240.2" y1="152.9" x2="240.2" y2="236.9" />
                <rect
                  x="224.9"
                  y="183.5"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M224.9,183.5" />
                <rect
                  x="224.9"
                  y="191.1"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M224.9,191.1" />
                <rect
                  x="224.9"
                  y="198.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M224.9,198.7" />
                <rect
                  x="224.9"
                  y="206.3"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M224.9,206.3" />
                <rect x="224.9" y="214" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M224.9,214" />
                <rect
                  x="224.9"
                  y="221.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M224.9,221.6" />
                <rect
                  x="224.9"
                  y="229.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M224.9,229.3" />
                <rect
                  x="224.9"
                  y="152.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M224.9,152.9" />
                <rect
                  x="224.9"
                  y="160.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M224.9,160.6" />
                <rect
                  x="224.9"
                  y="168.2"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M224.9,168.2" />
                <rect
                  x="224.9"
                  y="175.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M224.9,175.9" />
                <line class="st2" x1="204.6" y1="152.9" x2="204.6" y2="236.9" />
                <rect
                  x="204.6"
                  y="183.5"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.6,183.5" />
                <rect
                  x="204.6"
                  y="191.1"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.6,191.1" />
                <rect
                  x="204.6"
                  y="198.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.6,198.7" />
                <rect
                  x="204.6"
                  y="206.3"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M204.6,206.3" />
                <rect x="204.6" y="214" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M204.6,214" />
                <rect
                  x="204.6"
                  y="221.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.6,221.6" />
                <rect
                  x="204.6"
                  y="229.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.6,229.3" />
                <rect
                  x="204.6"
                  y="152.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.6,152.9" />
                <rect
                  x="204.6"
                  y="160.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.6,160.6" />
                <rect
                  x="204.6"
                  y="168.2"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M204.6,168.2" />
                <rect
                  x="204.6"
                  y="175.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.6,175.9" />
                <path
                  class="st5"
                  d="M258.2,152.9l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h20.3l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v83.9
		l-0.1,1.3c-0.5,3.2-3,5.7-6.2,6.2l-1.3,0.1h-20.3l-1.3-0.1c-3.2-0.5-5.7-3-6.2-6.2l-0.1-1.3V152.9z"
                />
                <line class="st2" x1="293.7" y1="152.9" x2="293.7" y2="236.9" />
                <rect
                  x="278.5"
                  y="183.5"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.5,183.5" />
                <rect
                  x="278.5"
                  y="191.1"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.5,191.1" />
                <rect
                  x="278.5"
                  y="198.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.5,198.7" />
                <rect
                  x="278.5"
                  y="206.3"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M278.5,206.3" />
                <rect x="278.5" y="214" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M278.5,214" />
                <rect
                  x="278.5"
                  y="221.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.5,221.6" />
                <rect
                  x="278.5"
                  y="229.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.5,229.3" />
                <rect
                  x="278.5"
                  y="152.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.5,152.9" />
                <rect
                  x="278.5"
                  y="160.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.5,160.6" />
                <rect
                  x="278.5"
                  y="168.2"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M278.5,168.2" />
                <rect
                  x="278.5"
                  y="175.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.5,175.9" />
                <line class="st2" x1="258.2" y1="152.9" x2="258.2" y2="236.9" />
                <rect
                  x="258.2"
                  y="183.5"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M258.2,183.5" />
                <rect
                  x="258.2"
                  y="191.1"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M258.2,191.1" />
                <rect
                  x="258.2"
                  y="198.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M258.2,198.7" />
                <rect
                  x="258.2"
                  y="206.3"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M258.2,206.3" />
                <rect x="258.2" y="214" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M258.2,214" />
                <rect
                  x="258.2"
                  y="221.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M258.2,221.6" />
                <rect
                  x="258.2"
                  y="229.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M258.2,229.3" />
                <rect
                  x="258.2"
                  y="152.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M258.2,152.9" />
                <rect
                  x="258.2"
                  y="160.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M258.2,160.6" />
                <rect
                  x="258.2"
                  y="168.2"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M258.2,168.2" />
                <rect
                  x="258.2"
                  y="175.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M258.2,175.9" />
                <rect
                  x="171.4"
                  y="81.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,81.7" />
                <rect
                  x="171.4"
                  y="89.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,89.3" />
                <rect x="171.4" y="97" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M171.4,97" />
                <rect
                  x="171.4"
                  y="104.6"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M171.4,104.6" />
                <rect
                  x="171.4"
                  y="112.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M171.4,112.3" />
                <rect x="171.4" y="74" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M171.4,74" />
                <rect
                  x="151.1"
                  y="81.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,81.7" />
                <rect
                  x="151.1"
                  y="89.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,89.3" />
                <rect x="151.1" y="97" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M151.1,97" />
                <rect
                  x="151.1"
                  y="104.6"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M151.1,104.6" />
                <rect
                  x="151.1"
                  y="112.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M151.1,112.3" />
                <rect x="151.1" y="74" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M151.1,74" />
                <path
                  class="st5"
                  d="M296.7,51.4c-42-8.2-84.5-14.1-127.1-17.8l-17.7-1.4l-3.3-0.1c-24,0-44,18.5-45.8,42.5l-0.1,3.3v42.1l0.1,1.3
		c0.6,3.1,3,5.6,6.2,6.2l1.3,0.1h15.3l1.3-0.1c3.1-0.6,5.6-3,6.2-6.2l0.1-1.3v-56l0.1-1.8c0.9-7.6,7.4-13.4,15.1-13.4l147.9,2.7
		L296.7,51.4z"
                />
                <rect
                  x="171.4"
                  y="66.4"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <rect
                  x="171.4"
                  y="58.8"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <rect
                  x="151.1"
                  y="66.4"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <rect
                  x="151.1"
                  y="58.8"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path
                  class="st5"
                  d="M204.7,58.8l0.1-1.3c0.6-3.7,3.8-6.3,7.5-6.3h20.3l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v61.1l-0.1,1.3
		c-0.6,3.6-3.8,6.3-7.5,6.3h-20.3l-1.3-0.1c-3.2-0.5-5.6-3-6.2-6.2l-0.1-1.3L204.7,58.8z"
                />
                <rect x="225" y="81.7" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M225,81.7" />
                <rect x="225" y="89.3" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M225,89.3" />
                <rect x="225" y="97" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M225,97" />
                <rect x="225" y="104.6" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M225,104.6" />
                <rect x="225" y="112.3" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M225,112.3" />
                <rect x="225" y="74" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M225,74" />
                <rect
                  x="204.7"
                  y="81.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.7,81.7" />
                <rect
                  x="204.7"
                  y="89.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.7,89.3" />
                <rect x="204.7" y="97" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M204.7,97" />
                <rect
                  x="204.7"
                  y="104.6"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M204.7,104.6" />
                <rect
                  x="204.7"
                  y="112.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M204.7,112.3" />
                <rect x="204.7" y="74" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M204.7,74" />
                <rect x="225" y="66.4" class="st8" width="15.2" height="7.6" />
                <rect x="225" y="58.8" class="st8" width="15.2" height="7.6" />
                <rect
                  x="204.7"
                  y="66.4"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <rect
                  x="204.7"
                  y="58.8"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path
                  class="st5"
                  d="M258,58.8l0.1-1.3c0.6-3.7,3.8-6.3,7.5-6.3H286l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v61.1l-0.1,1.3
		c-0.6,3.6-3.8,6.3-7.5,6.3h-20.3l-1.3-0.1c-3.2-0.5-5.6-3-6.2-6.2l-0.1-1.3V58.8z"
                />
                <rect
                  x="278.4"
                  y="81.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.4,81.7" />
                <rect
                  x="278.4"
                  y="89.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.4,89.3" />
                <rect x="278.4" y="97" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M278.4,97" />
                <rect
                  x="278.4"
                  y="104.6"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M278.4,104.6" />
                <rect
                  x="278.4"
                  y="112.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M278.4,112.3" />
                <rect x="278.4" y="74" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M278.4,74" />
                <rect x="258" y="81.7" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M258,81.7" />
                <rect x="258" y="89.3" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M258,89.3" />
                <rect x="258" y="97" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M258,97" />
                <rect x="258" y="104.6" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M258,104.6" />
                <rect x="258" y="112.3" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M258,112.3" />
                <rect x="258" y="74" class="st8" width="15.2" height="7.7" />
                <path class="st2" d="M258,74" />
                <rect
                  x="278.4"
                  y="66.4"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <rect
                  x="278.4"
                  y="58.8"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <rect x="258" y="66.4" class="st8" width="15.2" height="7.6" />
                <rect x="258" y="58.8" class="st8" width="15.2" height="7.6" />

                <rect
                  x="354.7"
                  y="103.5"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 167.9481 431.4639)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />

                <rect
                  x="362.1"
                  y="105.5"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 171.6431 440.0347)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />

                <rect
                  x="369.4"
                  y="107.4"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 175.3305 448.5958)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />
                <polygon
                  class="st8"
                  points="379.3,120.6 386.7,122.5 390.5,107.7 383.2,105.8 	"
                />

                <rect
                  x="384.2"
                  y="111.1"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 182.7498 465.7005)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />
                <polygon
                  class="st8"
                  points="394.1,124.4 401.5,126.3 405.3,111.5 397.9,109.6 	"
                />
                <polygon
                  class="st8"
                  points="401.5,126.3 408.9,128.2 412.7,113.5 405.3,111.5 	"
                />

                <rect
                  x="325.2"
                  y="96"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 153.1068 397.1727)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />
                <polygon
                  class="st8"
                  points="335,109.1 342.4,111 346.2,96.2 338.8,94.3 	"
                />
                <polygon
                  class="st8"
                  points="342.4,111 349.8,112.9 353.6,98.2 346.2,96.2 	"
                />
                <polygon
                  class="st8"
                  points="349.8,112.9 357.2,114.8 361,100 353.6,98.2 	"
                />

                <rect
                  x="392.8"
                  y="79.2"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 220.0361 450.0534)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />

                <rect
                  x="400.1"
                  y="81.1"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 223.731 458.6243)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />

                <rect
                  x="407.5"
                  y="83"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 227.4185 467.1854)"
                  class="st10"
                  width="15.3"
                  height="7.6"
                />

                <rect
                  x="363.2"
                  y="71.6"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 205.2221 415.7425)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />

                <rect
                  x="370.6"
                  y="73.5"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 208.9171 424.3133)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />
                <polygon
                  class="st8"
                  points="380.5,86.7 388,88.6 391.7,73.9 384.4,71.9 	"
                />
                <polygon
                  class="st8"
                  points="388,88.6 395.3,90.5 399.2,75.8 391.7,73.9 	"
                />

                <rect
                  x="406.4"
                  y="116.8"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 193.8593 491.4481)"
                  class="st9"
                  width="15.3"
                  height="7.6"
                />
                <rect
                  x="311.3"
                  y="132.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M311.4,132.6" />
                <path
                  class="st5"
                  d="M472.3,274.8l-0.1,1.8c-0.8,7-6.3,12.5-13.3,13.3L457,290H326.2l0.5-3.2l0.2-3.3v-3.2l-0.2-3.3l-0.4-3.2v-2.1
		c0.5-13.7,12.5-24,26.2-20.8l2,0.6l3.7,1.1l3.7,0.8l3.8,0.5l3.8,0.3h3.8l3.8-0.2l4-0.3c39.4-4,68.1-39.3,64-78.7
		c-0.6-6.1-2-12.2-4.2-17.9l-1.5-3.8l0,0l-2-4.9c-3.2-8.2-5.6-16.7-7.1-25.4l-0.9-5.2h1.4c2.8-0.2,5.2-1.9,6.4-4.4l0.4-1.3l3.9-15.1
		l0,0l0.5-1.3c1.4-3,4.6-4.8,7.9-4.4l1.3,0.3l15.9,5l1.3,0.5c2,1.1,3.5,3.1,3.9,5.4l0.1,1.3L472.3,274.8z"
                />
                <rect
                  x="245.6"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="253.3"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="260.9"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="268.6"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="276.2"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="283.8"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="291.5"
                  y="262.3"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect x="371.5" y="-123.5" class="st11" width="1" height="1" />
                <circle class="st12" cx="371.9" cy="-123.1" r="0.1" />
                <circle class="st12" cx="371.6" cy="-123.4" r="0" />
                <circle class="st12" cx="372.3" cy="-123.1" r="0" />
                <circle class="st12" cx="371.9" cy="-123.4" r="0" />
                <circle class="st12" cx="372.3" cy="-122.8" r="0.1" />
                <circle class="st12" cx="371.6" cy="-123.1" r="0" />
                <circle class="st12" cx="372" cy="-122.7" r="0.1" />
                <circle class="st12" cx="372.3" cy="-123.3" r="0" />
                <circle class="st12" cx="371.9" cy="-122.9" r="0" />
                <circle class="st12" cx="372.1" cy="-123.2" r="0.1" />
                <circle class="st12" cx="372.4" cy="-123.4" r="0" />
                <circle class="st12" cx="371.6" cy="-122.9" r="0.1" />
              </g>
              <g id="专用停车场">
                <path
                  class="st5"
                  d="M229.9,719.5V541.8l0.1-1.8c0.8-7,6.3-12.5,13.3-13.3l1.9-0.1H457l1.9,0.1c7,0.8,12.5,6.3,13.3,13.3l0.1,1.8
		v339.7l-0.1,1.9c-0.8,7-6.3,12.5-13.3,13.4l-1.9,0.1h-28.2l-1.3-0.1c-3.6-0.6-6.3-3.7-6.4-7.3v-24.5h-15.2v24.5l-0.1,1.3
		c-0.5,3.1-3,5.6-6.2,6.1l-1.3,0.1h-153l-1.9-0.1c-7-0.8-12.5-6.3-13.3-13.3l-0.1-1.9V707"
                />
                <polyline
                  class="st3"
                  points="413.4,870.8 418.5,874.7 408.3,874.7 	"
                />
                <line class="st2" x1="329.8" y1="554.3" x2="412" y2="554.3" />
                <line class="st2" x1="265" y1="842.4" x2="265" y2="677.5" />
                <line class="st2" x1="296.8" y1="864.9" x2="308.8" y2="864.9" />
                <line class="st4" x1="449.1" y1="549.5" x2="472.3" y2="549.5" />
                <polyline
                  class="st4"
                  points="255.8,586.7 255.8,607.3 272.5,607.3 	"
                />
                <line class="st4" x1="243.5" y1="586.7" x2="255.8" y2="586.7" />
                <line class="st4" x1="472.3" y1="592.3" x2="447.7" y2="592.3" />
                <line class="st2" x1="439.8" y1="707.2" x2="439.8" y2="824.4" />
                <polyline
                  class="st4"
                  points="250.4,526.6 250.4,564.5 243.5,564.5 243.5,586.7 243.5,564.8 229.9,564.8 	"
                />
                <rect x="457" y="659.1" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,659.1" />
                <rect x="457" y="666.7" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,666.7" />
                <rect x="457" y="674.3" class="st8" width="15.3" height="7.7" />
                <path class="st2" d="M457,674.3" />
                <rect x="457" y="682" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,682" />
                <rect x="457" y="689.6" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,689.6" />
                <rect x="457" y="697.3" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,697.3" />
                <rect x="457" y="704.9" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,704.9" />
                <rect x="457" y="620.9" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,620.9" />
                <rect x="457" y="628.6" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,628.6" />
                <rect x="457" y="636.2" class="st8" width="15.3" height="7.7" />
                <path class="st2" d="M457,636.2" />
                <rect x="457" y="643.9" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,643.9" />
                <rect x="457" y="651.5" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,651.5" />
                <rect x="457" y="605.7" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,605.7" />
                <rect x="457" y="613.3" class="st8" width="15.3" height="7.6" />
                <path class="st2" d="M457,613.3" />
                <rect
                  x="455.6"
                  y="728.6"
                  class="st2"
                  width="12.7"
                  height="12.7"
                />
                <path class="st2" d="M468.4,728.6" />
                <rect
                  x="455.6"
                  y="741.4"
                  class="st2"
                  width="12.7"
                  height="12.7"
                />
                <path class="st2" d="M468.4,741.4" />
                <polyline
                  class="st4"
                  points="265,677.5 255.8,677.5 255.8,698.1 243.5,698.1 243.5,719.5 229.9,719.5 	"
                />
                <path
                  class="st7"
                  d="M392.1,845.2h-30.8v4.9h-19.1v-4.9h-26.6v4.5h-6.8v15.1H265V677.5h7.5v-70.3h2v-7.6l0,0l-2.3-3.9l-2.1-4.1
		c-7.2-15-9.6-36.7,2.2-50.2l2.3-2.2l2.6-1.9c13.5-8,29.5-0.2,39.2,10.1l2.9,3.3l2.7,3.5h89.9v-5.5h7v-11.6h30.2v13.5h-1.4v130.3
		h-3.1v2h-4.9v141.5h-5.1v19.5h-5.1v8.2h4v12.8h-44.4v-1.6h1v-6.6h-1v-1.8h2.9L392.1,845.2"
                />
              </g>
              <g id="新能源停车场">
                <path
                  class="st5"
                  d="M692.5,896.8H490v-84.5l0,0V588.6h197.3l1.1,0.2c1.9,0.4,3.4,1.9,3.8,3.8l0.1,1.1L692.5,896.8"
                />
                <polygon
                  class="st7"
                  points="660.9,598.3 542.6,598.3 542.6,700.2 535.1,700.2 535.1,722.6 537.7,722.6 537.7,736.3 542.6,736.3
		542.6,813.7 535.1,813.7 535.1,865.2 660.9,865.2 	"
                />
                <line class="st4" x1="497.7" y1="616" x2="490" y2="616" />
                <line class="st4" x1="497.7" y1="614.5" x2="490" y2="614.5" />
                <line class="st4" x1="497.7" y1="637.3" x2="490" y2="637.3" />
                <line class="st4" x1="497.7" y1="635.8" x2="490" y2="635.8" />
                <line class="st4" x1="497.7" y1="658.7" x2="490" y2="658.7" />
                <line class="st4" x1="497.7" y1="657.2" x2="490" y2="657.2" />
                <line class="st4" x1="497.7" y1="680.1" x2="490" y2="680.1" />
                <line class="st4" x1="497.7" y1="678.5" x2="490" y2="678.5" />
                <line class="st4" x1="496.1" y1="700" x2="490" y2="700" />
                <line class="st4" x1="496.1" y1="701.5" x2="490" y2="701.5" />
                <line class="st4" x1="497.7" y1="722.8" x2="490" y2="722.8" />
                <line class="st4" x1="497.7" y1="721.3" x2="490" y2="721.3" />
                <line class="st4" x1="497.7" y1="744.2" x2="490" y2="744.2" />
                <line class="st4" x1="497.7" y1="742.7" x2="490" y2="742.7" />
                <line class="st4" x1="497.7" y1="765.6" x2="490" y2="765.6" />
                <line class="st4" x1="497.7" y1="764" x2="490" y2="764" />
                <line class="st4" x1="497.7" y1="787" x2="490" y2="787" />
                <line class="st4" x1="497.7" y1="785.4" x2="490" y2="785.4" />
                <rect
                  x="497.7"
                  y="668.2"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,668.2" />
                <rect
                  x="497.7"
                  y="675.8"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,675.7" />
                <rect
                  x="497.7"
                  y="683.4"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,683.4" />
                <rect x="497.7" y="691" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M497.7,691" />
                <rect
                  x="497.7"
                  y="702.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,702.7" />
                <rect
                  x="497.7"
                  y="710.3"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M497.7,710.3" />
                <rect x="497.7" y="718" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M497.7,718" />
                <rect x="497.7" y="630" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M497.7,630" />
                <rect
                  x="497.7"
                  y="637.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,637.6" />
                <rect
                  x="497.7"
                  y="645.2"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,645.2" />
                <rect
                  x="497.7"
                  y="652.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,652.9" />
                <rect
                  x="497.7"
                  y="660.5"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M497.7,660.5" />
                <rect
                  x="497.7"
                  y="614.7"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,614.7" />
                <rect
                  x="497.7"
                  y="622.3"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M497.7,622.3" />
                <rect x="497.7" y="779" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M497.7,779" />
                <rect
                  x="497.7"
                  y="786.7"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M497.7,786.7" />
                <rect
                  x="497.7"
                  y="794.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,794.3" />
                <rect x="497.7" y="802" class="st8" width="15.2" height="7.6" />
                <path class="st2" d="M497.7,802" />
                <rect
                  x="497.7"
                  y="740.9"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,740.9" />
                <rect
                  x="497.7"
                  y="748.5"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <path class="st2" d="M497.7,748.5" />
                <rect
                  x="497.7"
                  y="756.2"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,756.2" />
                <rect
                  x="497.7"
                  y="763.8"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,763.8" />
                <rect
                  x="497.7"
                  y="771.4"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,771.4" />
                <rect
                  x="497.7"
                  y="725.6"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,725.6" />
                <rect
                  x="497.7"
                  y="733.3"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <path class="st2" d="M497.7,733.3" />
                <rect
                  x="497.7"
                  y="607.1"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <rect
                  x="497.7"
                  y="599.5"
                  class="st8"
                  width="15.2"
                  height="7.6"
                />
                <rect
                  x="497.7"
                  y="591.8"
                  class="st8"
                  width="15.2"
                  height="7.7"
                />
                <line class="st4" x1="496.1" y1="588.7" x2="496.1" y2="588.6" />
                <polyline
                  class="st4"
                  points="496.1,588.7 496.1,812.3 490,812.3 	"
                />
              </g>
              <g id="员工停车场">
                <path
                  class="st5"
                  d="M538.7,936.2h-50.9l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1l-0.5-0.1l-0.4-0.3l-0.2-0.4l-0.1-0.5h-50.9l-0.1,0.5
		l-0.2,0.4l-0.4,0.3l-0.5,0.1l-0.5-0.1l-0.4-0.3l-0.3-0.4l-0.1-0.5h-50.9l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1l-0.5-0.1l-0.4-0.3
		l-0.2-0.4l-0.1-0.5h-50.9l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1l-0.5-0.1l-0.4-0.3l-0.3-0.4l-0.1-0.5h-50.9l-0.1,0.5l-0.2,0.4
		l-0.4,0.3l-0.5,0.1l-0.5-0.1l-0.4-0.3l-0.3-0.4l-0.1-0.5h-50.9l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1l-0.5-0.1l-0.4-0.3l-0.2-0.4
		l-0.1-0.5h-50.9l-0.1,0.5l-0.2,0.4l-0.4,0.3l-0.5,0.1l-0.5-0.1l-0.4-0.3l-0.3-0.4l-0.1-0.5h-59.5l-0.8-0.1l-0.7-0.4l-0.6-0.6
		l-0.4-0.7l-0.1-0.8l0,0v-14l0.1-1.1l0.4-1l0.6-1l0.8-0.8l1-0.6l1.1-0.4l1.1-0.1h430.8l1.1,0.1l1.1,0.4l1,0.6l0.8,0.8l0.6,1l0.4,1
		l0.1,1.1v11.4l-0.1,1.1l-0.4,1.1l-0.6,1l-0.8,0.8l-1,0.7l-1.1,0.4L538.7,936.2"
                />
                <line class="st4" x1="487.9" y1="968" x2="487.9" y2="954.1" />
                <line class="st4" x1="485.3" y1="954.1" x2="485.3" y2="968" />
                <line class="st4" x1="434.5" y1="968" x2="434.5" y2="954.1" />
                <line class="st4" x1="431.9" y1="954.1" x2="431.9" y2="968" />
                <line class="st4" x1="381.1" y1="968" x2="381.1" y2="954.1" />
                <line class="st4" x1="378.5" y1="954.1" x2="378.5" y2="968" />
                <line class="st4" x1="327.6" y1="968" x2="327.6" y2="954.1" />
                <line class="st4" x1="325.1" y1="954.1" x2="325.1" y2="968" />
                <line class="st4" x1="274.2" y1="968" x2="274.2" y2="954.1" />
                <line class="st4" x1="271.6" y1="954.1" x2="271.6" y2="968" />
                <line class="st4" x1="220.7" y1="968" x2="220.7" y2="954.1" />
                <line class="st4" x1="218.2" y1="954.1" x2="218.2" y2="968" />
                <line class="st4" x1="167.3" y1="968" x2="167.3" y2="954.1" />
                <line class="st4" x1="164.8" y1="954.1" x2="164.8" y2="968" />
                <rect x="532.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="526.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="519.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="513.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="507.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="500.8" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="494.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="488.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="478.9" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="472.5" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="466.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="459.8" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="453.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="447.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="440.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="434.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="425.5" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="419.2" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="412.9" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="406.6" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="400.3" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="394" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="387.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="381.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="372.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="365.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="359.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="353.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="346.8" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="340.5" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="334.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="327.8" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="318.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="312.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="306" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="299.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="293.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="287" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="280.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="274.3" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="265.3" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="258.9" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="252.5" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="246.2" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="239.8" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="233.5" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="227.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="220.8" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="211.9" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="205.5" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="199.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="192.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="186.3" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="179.9" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="173.5" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="167.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="158.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="152.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="145.8" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="139.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="133.1" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="126.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="120.4" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="114" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="107.7" y="922.3" class="st8" width="6.4" height="14" />
                <rect x="526" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="519.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="513.2" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="506.8" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="500.5" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="494.1" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="487.7" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="478.9" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="472.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="466.2" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="459.9" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="453.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="447.3" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="441" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="434.7" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="425.5" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="419.2" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="412.9" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="406.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="400.2" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="393.9" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="387.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="381.3" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="372.1" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="365.8" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="359.5" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="353.1" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="346.8" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="340.5" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="334.1" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="327.8" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="318.7" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="312.4" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="306" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="299.7" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="293.3" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="287" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="280.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="274.3" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="265.3" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="258.9" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="252.5" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="246.1" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="239.8" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="233.4" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="227" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="220.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="211.9" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="205.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="199.2" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="192.9" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="186.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="180.3" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="173.9" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="167.6" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="158.5" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="152.1" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="145.7" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="139.4" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="133" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="126.7" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="120.3" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="113.9" y="954.2" class="st8" width="6.4" height="14" />
                <rect x="107.6" y="954.2" class="st8" width="6.4" height="14" />
                <line class="st4" x1="487.9" y1="936.2" x2="487.9" y2="922.3" />
                <line class="st4" x1="485.3" y1="936.2" x2="485.3" y2="922.3" />
                <line class="st4" x1="434.5" y1="936.2" x2="434.5" y2="922.3" />
                <line class="st4" x1="431.9" y1="936.2" x2="431.9" y2="922.3" />
                <line class="st4" x1="381.1" y1="936.2" x2="381.1" y2="922.3" />
                <line class="st4" x1="378.5" y1="936.2" x2="378.5" y2="922.3" />
                <line class="st4" x1="327.6" y1="936.2" x2="327.6" y2="922.3" />
                <line class="st4" x1="325.1" y1="936.2" x2="325.1" y2="922.3" />
                <line class="st4" x1="274.2" y1="936.2" x2="274.2" y2="922.3" />
                <line class="st4" x1="271.6" y1="936.2" x2="271.6" y2="922.3" />
                <line class="st4" x1="220.7" y1="936.2" x2="220.7" y2="922.3" />
                <line class="st4" x1="218.2" y1="936.2" x2="218.2" y2="922.3" />
                <line class="st4" x1="167.3" y1="936.2" x2="167.3" y2="922.3" />
                <line class="st4" x1="164.8" y1="936.2" x2="164.8" y2="922.3" />
              </g>
              <g id="临时停车场">
                <path class="st8" d="M633.4,959.2h14v6.4h-14V959.2z" />
                <path class="st8" d="M633.4,965.5h14v6.4h-14V965.5z" />
                <path class="st8" d="M633.4,971.8h14v6.4h-14V971.8z" />
                <path class="st8" d="M633.4,978.2h14v6.4h-14V978.2z" />
                <path class="st8" d="M633.4,984.5h14v6.4h-14V984.5z" />
                <path class="st8" d="M633.4,990.8h14v6.4h-14V990.8z" />
                <path class="st8" d="M633.4,997.2h14v6.4h-14V997.2z" />
                <path class="st8" d="M633.4,1003.5h14v6.4h-14V1003.5z" />
                <path class="st8" d="M633.4,1009.9h14v6.4h-14V1009.9z" />
                <path class="st8" d="M633.4,1016.2h14v6.4h-14V1016.2z" />
                <path class="st8" d="M633.4,1022.5h14v6.4h-14V1022.5z" />
                <path class="st8" d="M633.4,1028.9h14v6.4h-14V1028.9z" />
                <path class="st8" d="M633.4,1035.2h14v6.4h-14V1035.2z" />
                <path class="st8" d="M633.4,1041.6h14v6.4h-14V1041.6z" />
                <rect
                  x="614.9"
                  y="1065.9"
                  class="st8"
                  width="6.4"
                  height="14"
                />
                <rect
                  x="608.6"
                  y="1065.9"
                  class="st8"
                  width="6.4"
                  height="14"
                />
                <rect
                  x="602.2"
                  y="1065.9"
                  class="st8"
                  width="6.4"
                  height="14"
                />
                <rect
                  x="595.9"
                  y="1065.9"
                  class="st8"
                  width="6.4"
                  height="14"
                />
                <rect
                  x="589.5"
                  y="1065.9"
                  class="st8"
                  width="6.4"
                  height="14"
                />
                <rect
                  x="583.1"
                  y="1065.9"
                  class="st8"
                  width="6.4"
                  height="14"
                />
                <rect
                  x="576.8"
                  y="1065.9"
                  class="st8"
                  width="6.4"
                  height="14"
                />
                <rect
                  x="570.4"
                  y="1065.9"
                  class="st8"
                  width="6.4"
                  height="14"
                />
                <path
                  class="st13"
                  d="M557.8,954.1h20.4l1.1,0.1c1.9,0.4,3.4,1.9,3.8,3.8l0.1,1.1v89l-0.1,1.1c-0.5,2.3-2.5,4-4.9,4h-20.4l-1.1-0.1
		c-1.9-0.4-3.4-1.9-3.8-3.8l-0.1-1.1v-89l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8L557.8,954.1z"
                />
                <line
                  class="st4"
                  x1="569.3"
                  y1="1041.8"
                  x2="583.3"
                  y2="1041.8"
                />
                <path
                  class="st4"
                  d="M557.8,954.1h20.4l1.1,0.1c1.9,0.4,3.4,1.9,3.8,3.8l0.1,1.1v89l-0.1,1.1c-0.5,2.3-2.5,4-4.9,4h-20.4l-1.1-0.1
		c-1.9-0.4-3.4-1.9-3.8-3.8l-0.1-1.1v-89l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8L557.8,954.1z"
                />
                <path
                  class="st5"
                  d="M610,954.1l1.1,0.1c1.9,0.4,3.4,1.9,3.8,3.8l0.1,1.1v89l-0.1,1.1c-0.5,2.3-2.5,4-4.9,4h-3.8l-1.1-0.1
		c-1.9-0.4-3.4-1.9-3.8-3.8l-0.1-1.1v-89l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1L610,954.1z"
                />
                <path class="st8" d="M601.1,965.5h14v6.4h-14V965.5z" />
                <path class="st8" d="M601.1,971.9h14v6.4h-14V971.9z" />
                <path class="st8" d="M601.1,978.2h14v6.4h-14V978.2z" />
                <path class="st8" d="M601.1,984.5h14v6.4h-14V984.5z" />
                <path class="st8" d="M601.1,990.9h14v6.4h-14V990.9z" />
                <path class="st8" d="M601.1,997.2h14v6.4h-14V997.2z" />
                <path class="st8" d="M601.1,1003.5h14v6.4h-14V1003.5z" />
                <path class="st8" d="M601.1,1009.9h14v6.4h-14V1009.9z" />
                <path class="st8" d="M601.1,1016.2h14v6.4h-14V1016.2z" />
                <path class="st8" d="M601.1,1022.5h14v6.4h-14V1022.5z" />
                <path class="st8" d="M601.1,1028.9h14v6.4h-14V1028.9z" />
                <path class="st8" d="M601.1,1035.2h14v6.4h-14V1035.2z" />
                <polygon
                  class="st8"
                  points="583.3,959.2 569.3,959.2 569.3,959.2 569.3,965.5 583.3,965.5 	"
                />
                <polygon
                  class="st8"
                  points="583.3,965.5 569.3,965.5 569.3,965.5 569.3,971.9 583.3,971.9 	"
                />
                <polygon
                  class="st8"
                  points="583.3,971.9 569.3,971.9 569.3,971.9 569.3,978.2 583.3,978.2 	"
                />
                <polygon
                  class="st8"
                  points="583.3,978.2 569.3,978.2 569.3,978.2 569.3,984.6 583.3,984.6 	"
                />
                <polygon
                  class="st8"
                  points="583.3,984.6 569.3,984.6 569.3,984.6 569.3,990.9 583.3,990.9 	"
                />
                <polygon
                  class="st8"
                  points="583.3,990.9 569.3,990.9 569.3,990.9 569.3,997.3 583.3,997.3 	"
                />
                <polygon
                  class="st8"
                  points="583.3,997.3 569.3,997.3 569.3,997.3 569.3,1003.6 583.3,1003.6 	"
                />
                <polygon
                  class="st8"
                  points="583.3,1003.6 569.3,1003.6 569.3,1003.6 569.3,1010 583.3,1010 	"
                />
                <polygon
                  class="st8"
                  points="583.3,1010 569.3,1010 569.3,1010 569.3,1016.4 583.3,1016.4 	"
                />
                <polygon
                  class="st8"
                  points="583.3,1035.4 569.3,1035.4 569.3,1035.4 569.3,1041.8 583.3,1041.8 	"
                />
                <polygon
                  class="st8"
                  points="583.3,1016.4 569.3,1016.4 569.3,1016.4 569.3,1022.7 583.3,1022.7 	"
                />
                <polygon
                  class="st8"
                  points="583.3,1022.7 569.3,1022.7 569.3,1022.7 569.3,1029.1 583.3,1029.1 	"
                />
                <polygon
                  class="st8"
                  points="583.3,1029.1 569.3,1029.1 569.3,1029.1 569.3,1035.4 583.3,1035.4 	"
                />
              </g>
              <g id="外围线条">
                <path
                  class="st14"
                  d="M710.3,914.6H566.8l-1.1,0.1l-1.1,0.4l-1,0.6l-0.8,0.8l-0.7,1l-0.4,1l-0.1,1.1v14l0.1,0.8l0.4,0.7l0.6,0.6
		l0.7,0.4l0.8,0.1h63.6l1.1,0.1c1.9,0.4,3.4,1.9,3.8,3.8l0.1,1.1l0,0v119.6c0,2.8-2.2,5-5,5c0,0-0.1,0-0.1,0h-76.3l-1.3-0.1
		c-3.2-0.6-5.6-3-6.2-6.2l-0.1-1.3v-99.1l-0.1-1.1c-0.4-1.9-1.9-3.4-3.8-3.8l-1.1-0.1h-50.9l-0.1-0.5l-0.3-0.4l-0.4-0.3l-0.5-0.1
		l-0.5,0.1l-0.4,0.3l-0.2,0.4l-0.1,0.5h-50.9l-0.1-0.5l-0.2-0.4l-0.4-0.3l-0.5-0.1l-0.5,0.1l-0.4,0.3l-0.3,0.4l-0.1,0.5h-50.9
		l-0.1-0.5l-0.3-0.4l-0.4-0.3l-0.5-0.1l-0.5,0.1l-0.4,0.3l-0.2,0.4l-0.1,0.5h-50.9l-0.1-0.5l-0.3-0.4l-0.4-0.3l-0.5-0.1l-0.5,0.1
		l-0.4,0.3l-0.3,0.4l-0.1,0.5h-50.9l-0.1-0.5l-0.2-0.4l-0.4-0.3l-0.5-0.1l-0.5,0.1l-0.4,0.3l-0.3,0.4l-0.1,0.5h-50.9l-0.1-0.5
		l-0.3-0.4l-0.4-0.3l-0.5-0.1l-0.5,0.1l-0.4,0.3l-0.2,0.4l-0.1,0.5h-50.9l-0.1-0.5l-0.2-0.4l-0.4-0.3l-0.5-0.1l-0.5,0.1l-0.4,0.3
		l-0.3,0.4l-0.1,0.5H92.6l-1.4-0.1c-3.1-0.6-5.6-3.1-6.2-6.2l-0.1-1.3V717.2l-0.1-1.8c-0.8-7-6.3-12.5-13.3-13.3l-1.9-0.1H7.9V582.8
		h61.8l1.9-0.1c7.6-1,13.4-7.5,13.4-15.2V77.8l0.1-3.9c2.1-33.9,30.4-60.1,64.3-59.7l3.8,0.2l17.3,1.3
		c80.6,7.1,160.4,21.9,238.1,44.2l16.6,4.9l18.5,5.8l18.4,6l1.3,0.3c4.1,0.6,8-2.1,8.7-6.2l0.1-1.3V40.8l0,0l17.8,6.1l0,0v516.3
		c0,2.8,2.3,5.1,5.1,5.1h202.4l1.7,0.1c5.7,0.7,10.2,5.3,10.9,11l0.1,1.6V914.6z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <!-- 右边内容  -->
      <div class="rightContent">
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
        <!-- 自助洗车收入按月分析 -->
        <div class="rightCharts-others">
          <div class="rightChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="rightChartUpImage"
              alt=""
            />
            <span class="spanStyle">自助洗车收入本月分析(元)</span>
          </div>
          <div class="rightChartCenter" id="chargeAmountTimes">
            <Xchart
              id="chargeAmountTimes"
              :option="chargeAmountTimesOptions"
            ></Xchart>
          </div>
          <div class="rightChartDown">
            <svg
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
        <!-- 洗车机近七日报警趋势分析-->
        <div class="rightCharts-others">
          <div class="rightChartUp">
            <div>
              <img
                src="../../assets/homePage/fangkuai.svg"
                class="rightChartUpImage"
                alt=""
              />
              <span class="spanStyle">洗车机近七日报警趋势分析</span>
            </div>
          </div>
          <div class="leftChartCenter" id="washCarSevenDaysAnalysis">
            <Xchart
              id="washCarSevenDaysAnalysis"
              :option="washCarSevenDaysAnalysisOption"
            ></Xchart>
          </div>
          <div class="leftChartDown">
            <svg
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
        <!-- 近七日洗车收费次数 carWeekWashEarn-->
        <div class="rightCharts-others">
          <div class="rightChartUp">
            <img
              src="../../assets/homePage/fangkuai.svg"
              class="leftChartUpImage"
              alt=""
            />
            <span class="spanStyle">近七日洗车收费金额(元)</span>
          </div>
          <div class="rightChartCenter" id="washChargeInSevenDays">
            <Xchart
              id="washChargeInSevenDays"
              :option="washChargeInSevenDaysOption"
            ></Xchart>
          </div>
          <div class="leftChartDown">
            <svg
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
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
      //用户名
      userName: "",

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

      // 左侧当日图表查询条件
      currentDay: new Date().Format("yyyy-MM-dd"),

      // 总停车数量
      numberOfParking: "",
      numberOfParkingOptions: {},
      numberOfParkingData: [],
      numberOfParkingXz: [],
      //总停车数量图表数字
      numberOfParkingTotal: 0,

      // 平均停车时长
      averageParkingTime: "",
      averageParkingTimeOptions: {},
      averageParkingTimeData: [],
      averageParkingTimeXz: [],
      //平均停车时长图表数字
      averageParkingTimeTotal: 0,

      // 车位利用率
      parkingSpaceUtilization: "",
      parkingSpaceUtilizationOptions: {},
      parkingSpaceUtilizationData: [],
      parkingSpaceUtilizationXz: [],
      //车位利用率图表数字
      parkingSpaceUsedRateTotal: 0,

      // 车位周转率
      parkingSpaceTurnoverRate: "",
      parkingSpaceTurnoverRateOptions: {},
      parkingSpaceTurnoverRateData: [],
      parkingSpaceTurnoverRateXz: [],
      //车位周转率图表上的数字
      parkingSpaceTurnoverRateTotal: 0,

      // 洗车机近七日报警趋势分析
      washCarSevenDaysAnalysisOption: {},
      washCarSevenDaysAnalysisName: "洗车机近七日报警报警趋势分析",
      washCarSevenDaysAnalysisData: [],
      washCarSevenDaysAnalysisXz: [],

      //近七日洗车收费金额
      washChargeInSevenDaysOption: {},
      washChargeInSevenDaysName: "近七日洗车收费金额",
      washChargeInSevenDaysXz: [
        "2021-01-16",
        "2021-01-17",
        "2021-01-18",
        "2021-01-19",
        "2021-01-20",
        "2021-01-21",
        "2021-01-22"
      ],
      washChargeInSevenDaysJINGWash: [1, 2, 3, 5, 2, 4, 4],
      washChargeInSevenDaysPUWash: [2, 1, 3, 4, 2, 3, 6],
      washChargeInSevenDaysKUAIWash: [4, 2, 6, 5, 2, 1, 5],

      // 支付收入排行
      paymentIncomeAnalysis: [],
      paymentIncomeAnalysisPie: {},

      //剩余车位数
      leftPort: 312,

      //精洗 普洗 快洗
      poacherWash: 20,
      garmentWash: 30,
      fastWash: 30,

      //中间总收入停车收入
      contentNumList: [
        {
          totalIncome: 130000,
          receivableMoneyAmount: 100000,
          arrearageMoneyAmount: 30000
        }
      ],

      // 收费金额按照时间段分析
      chargeAmountTimes: "",
      chargeAmountTimesOptions: {},
      chargeAmountTimesData: [],
      chargeAmountTimesX: [],

      // 地图中点击添加弹框
      mapList: {
        lng: 119.016937,
        lat: 31.706205
      },
      map: "",
      xlicon: require("../../assets/homePage/TCIcon.png")
    };
  },
  mounted() {
    this.userName = localStorage.getItem("userName");
    // 总停车数量图表
    this.queryParkOptByParkCount();
    // 平均停车时长图表
    this.queryParkOptByAvgParkDuration();
    // 车位利用率图表
    this.queryParkOptByParkSpaceUsedRate();
    // 车位周转率图表
    this.queryParkOptByParkSpaceTurnoverRate();
    // 支付方式图表
    this.queryPaymentBehaviorAnalysis();
    //自助洗车按月收入分析图表
    this.querychargeAmountTimes();
    //洗车机近七日报警趋势分析
    this.handleWashCarSevenDaysAnalysis();
    //近七日洗车收费金额
    this.handleWashCarIncomeSevenDays();
    //剩余车位数
    this.queryParkMonitorParkSpace();
    //中间总收入应收欠收
    this.queryTotalIncome();
    //中间充电桩总收入
    this.countChargeFee();
    //中间洗车机总收入
    this.countWashFee();

    // // 添加地图图标方式
    // this.initMap();
    // // 添加图标的方法
    // this.addMoudel();
  },
  methods: {
    //退出
    loginOut() {
      alert(aaa)
      this.$homePage.loginOut(1).then(res=>{
        localStorage.removeItem("userToken");
        this.$router.push("/");
      });
    },
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

    //获取中间部分总收入、应收金额、欠收金额
    queryTotalIncome() {
      const param = {
        statisType: "today"
      };
      this.$homePage.queryTotalIncome(param).then(res => {});
    },
    //首页剩余车位数
    queryParkMonitorParkSpace() {
      var that = this;
      const param = {
        cityCode: "321300",
        districtCode: "321302",
        statisType: "today",
        pageSize: 3,
        pageNum: 1
      };
      this.$homePage.queryParkMonitorParkSpace(param).then(res => {
        // that.leftPort = res.data.dataList.info.remainderParkSpaceCount;
        // if (that.leftPort == null) {
        //   that.leftPort = 0;
        // }
      });
    },
    //查询充电桩总收入总收入
    countChargeFee() {
      var that = this;
      const param = {
        queryType: "today"
      };
      // console.log('充电桩总收入惨参',param)
      this.$homePage.countChargeFee(param).then(res => {
        // console.log("resres", res);
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
        queryType: "today"
      };
      this.$homePage.countWashFee(param).then(res => {});
    },

    // 总停车数量
    queryParkOptByParkCount() {
      const param = {
        endTime: this.currentDay
      };
      this.$reportAnalysis.queryParkTimes(param).then(res => {
        this.numberOfParkingXz = [];
        this.numberOfParkingData = [];
        res.resultEntity.forEach(item => {
          this.numberOfParkingXz.push(item.X);
          this.numberOfParkingData.push(Number(item.dataY));
        });
        this.numberOfParkingOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "numberOfParking",
            marginBottom: 24
          },
          title: {
            text: this.numberOfParkingName,
            align: "left",
            x: 20,
            style: {
              fontFamily: "PingFangSC-Medium",
              fontSize: "16px",
              color: "#333333",
              letterSpacing: "0.17px"
            }
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.numberOfParkingXz,
            //x轴坐标颜色
            lineColor: "#104DA1",
            labels: {
              style: {
                color: "rgba(90,142,227,1)",
                fontSize: "10px"
              }
            }
          },
          colors: ["#7654E3"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              //修改Y轴添加单位
              format: "{value}辆",
              style: {
                color: "rgba(90,142,227,1)"
              }
            }, //设置网格线颜色
            gridLineColor: "#0A3167"
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 0,
            itemStyle: {
              color: "#666666",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "#666666"
            },
            itemHoverStyle: {
              color: "#cccccc"
            },
            itemHiddenStyle: {
              color: "#333333"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}</b>辆"
          },
          plotOptions: {
            spline: {
              lineWidth: 2,
              states: {
                hover: {
                  lineWidth: 3
                }
              },
              marker: {
                enabled: false
              }
            }
          },
          series: [
            {
              name: this.numberOfParkingName,
              data: this.numberOfParkingData
            }
          ]
        };
        new HighCharts.chart(this.numberOfParkingOptions);
      });
    },

    // 平均停车时长
    queryParkOptByAvgParkDuration() {
      const param = {
        endTime: this.currentDay
      };
      this.$reportAnalysis.avgParkDuration(param).then(res => {
        this.averageParkingTimeXz = [];
        this.averageParkingTimeData = [];
        res.resultEntity.forEach(item => {
          this.averageParkingTimeXz.push(item.X);
          this.averageParkingTimeData.push(Number(Math.round(item.dataY)));
        });
        this.averageParkingTimeOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "averageParkingTime",
            marginBottom: 24
          },
          title: {
            text: this.averageParkingTimeName,
            align: "left",
            x: 20,
            style: {
              fontFamily: "PingFangSC-Medium",
              fontSize: "16px",
              color: "#333333",
              letterSpacing: "0.17px"
            }
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.averageParkingTimeXz,
            //x轴坐标颜色
            lineColor: "#104DA1",
            labels: {
              style: {
                color: "rgba(90,142,227,1)",
                fontSize: "10px"
              }
            }
          },
          colors: ["#00DBEC"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              //修改Y轴添加单位
              format: "{value}min",
              style: {
                color: "rgba(90,142,227,1)"
              }
            },
            //设置网格线颜色
            gridLineColor: "#0A3167"
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 10,
            itemStyle: {
              color: "#666666",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "#666666"
            },
            itemHoverStyle: {
              color: "#cccccc"
            },
            itemHiddenStyle: {
              color: "#333333"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}</b>分钟"
          },
          plotOptions: {
            spline: {
              lineWidth: 2,
              states: {
                hover: {
                  lineWidth: 3
                }
              },
              marker: {
                enabled: false
              }
            }
          },
          series: [
            {
              name: this.averageParkingTimeName,
              data: this.averageParkingTimeData
            }
          ]
        };
        new HighCharts.chart(this.averageParkingTimeOptions);
      });
    },

    // 车位利用率
    queryParkOptByParkSpaceUsedRate() {
      const param = {
        endTime: this.currentDay
      };
      this.$reportAnalysis.usageRate(param).then(res => {
        this.parkingSpaceUtilizationXz = [];
        this.parkingSpaceUtilizationData = [];
        res.resultEntity.forEach(item => {
          this.parkingSpaceUtilizationXz.push(item.X);
          //%后小数点后两位
          this.parkingSpaceUtilizationData.push(
            Number((Number(item.dataY) * 100).toFixed(2))
          );
        });
        this.parkingSpaceUtilizationOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "parkingSpaceUtilization",
            marginBottom: 24
          },
          title: {
            text: this.parkingSpaceUtilizationName,
            align: "left",
            x: 20,
            style: {
              fontFamily: "PingFangSC-Medium",
              fontSize: "16px",
              color: "#333333",
              letterSpacing: "0.17px"
            }
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.parkingSpaceUtilizationXz,
            //x轴坐标颜色
            lineColor: "#104DA1",
            labels: {
              style: {
                color: "rgba(90,142,227,1)",
                fontSize: "10px"
              }
            }
          },
          colors: ["#1EC193"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}%",
              style: {
                color: "rgba(90,142,227,1)"
              }
            },
            //设置网格线颜色
            gridLineColor: "#0A3167"
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 10,
            itemStyle: {
              color: "#666666",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "#666666"
            },
            itemHoverStyle: {
              color: "#cccccc"
            },
            itemHiddenStyle: {
              color: "#333333"
            }
          },
          tooltip: {
            //设置每个点位的弹出窗
            pointFormat: "{series.name}: <b>{point.y}</b>%"
          },
          plotOptions: {
            spline: {
              lineWidth: 2,
              states: {
                hover: {
                  lineWidth: 3
                }
              },
              marker: {
                enabled: false
              }
            }
          },
          series: [
            {
              name: this.parkingSpaceUtilizationName,
              data: this.parkingSpaceUtilizationData
            }
          ]
        };
        new HighCharts.chart(this.parkingSpaceUtilizationOptions);
      });
    },

    // 车位周转率
    queryParkOptByParkSpaceTurnoverRate() {
      const param = {
        endTime: this.currentDay
      };
      this.$reportAnalysis.turnoverRate(param).then(res => {
        this.parkingSpaceTurnoverRateXz = [];
        this.parkingSpaceTurnoverRateData = [];
        res.resultEntity.forEach(item => {
          this.parkingSpaceTurnoverRateXz.push(item.X);
          this.parkingSpaceTurnoverRateData.push(
            Number((Number(item.dataY) * 100).toFixed(2))
          );
        });
        this.parkingSpaceTurnoverRateOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "parkingSpaceTurnoverRate",
            marginBottom: 24
          },
          title: {
            text: this.parkingSpaceTurnoverRateName,
            align: "left",
            x: 20,
            style: {
              fontFamily: "PingFangSC-Medium",
              fontSize: "16px",
              color: "#333333",
              letterSpacing: "0.17px"
            }
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.parkingSpaceTurnoverRateXz,
            //x轴坐标颜色
            lineColor: "#104DA1",
            labels: {
              style: {
                color: "rgba(90,142,227,1)",
                fontSize: "10px"
              }
            }
          },
          colors: ["#FFBC00"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}%",
              style: {
                color: "rgba(90,142,227,1)"
              }
            },
            //设置网格线颜色
            gridLineColor: "#0A3167"
          },
          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "left",
            x: 300,
            y: 10,
            itemStyle: {
              color: "#666666",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "#666666"
            },
            itemHoverStyle: {
              color: "#cccccc"
            },
            itemHiddenStyle: {
              color: "#333333"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}</b>%"
          },
          plotOptions: {
            spline: {
              lineWidth: 2,
              states: {
                hover: {
                  lineWidth: 3
                }
              },
              marker: {
                enabled: false
              }
            }
          },
          series: [
            {
              name: this.parkingSpaceTurnoverRateName,
              data: this.parkingSpaceTurnoverRateData
            }
          ]
        };
        new HighCharts.chart(this.parkingSpaceTurnoverRateOptions);
      });
    },

    // 支付方式
    queryPaymentBehaviorAnalysis() {
      const param = {
        statisType: "today"
      };
      this.$homePage.queryPaymentBehaviorAnalysis(param).then(res => {
        var alipayDataList = ["支付宝支付", 10];
        var wechatDataList = ["微信支付", 20];
        var qrCodeDataList = ["扫码支付", 30];
        var cashDataList = ["现金支付", 40];
        // var alipayDataList = [
        //   "支付宝支付",
        //   Math.round(
        //     (Number(res.data.dataList[0].alipayPaymentMoneyAmount) /
        //       Number(res.data.dataList[0].paymentMoneyAmountTotalAll)) *
        //       100
        //   ) / 100
        // ];
        // console.log(this.alipayDataList);
        // var wechatDataList = [
        //   "微信支付",
        //   Math.round(
        //     (Number(res.data.dataList[0].wechatPaymentMoneyAmount) /
        //       Number(res.data.dataList[0].paymentMoneyAmountTotalAll)) *
        //       100
        //   ) / 100
        // ];
        // var qrCodeDataList = [
        //   "扫码支付",
        //   Math.round(
        //     (Number(res.data.dataList[0].qrCodePaymentMoneyAmount) /
        //       Number(res.data.dataList[0].paymentMoneyAmountTotalAll)) *
        //       100
        //   ) / 100
        // ];
        // var cashDataList = [
        //   "现金支付",
        //   Math.round(
        //     (Number(res.data.dataList[0].cashPaymentMoneyAmount) /
        //       Number(res.data.dataList[0].paymentMoneyAmountTotalAll)) *
        //       100
        //   ) / 100
        // ];

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
            spacingBottom: 10,
            backgroundColor: "rgba(0,0,0,0)",
            color: "red",
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
          colors: ["#0D64F4", "#00DBEC", "#1EC193", "#7654E3"],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              //放到上面是小手
              cursor: "pointer",
              //控制距离中心的值
              innerSize: 60,
              depth: 45,
              dataLabels: {
                //显示映出来的数据
                enabled: false
                // format: "{point.name}"
              },
              //是否显示图例
              showInLegend: true
            }
          },
          legend: {
            layout: "vertival",
            align: "left",
            verticalAlign: "top",
            borderWidth: 0,
            itemStyle: {
              color: "white"
            },
            itemHoverStyle: {
              color: "#007AFF"
            }
          },
          series: this.paymentIncomeAnalysis
        };
        new HighCharts.chart(this.paymentIncomeAnalysisPie);
      });
    },

    //洗车收费按月分析金额分析
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
            renderTo: "chargeAmountTimes",
            marginBottom: 24
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.chargeAmountTimesX,
            //x轴坐标颜色
            lineColor: "#104DA1",
            labels: {
              format: "{value}",
              style: {
                color: "rgba(90,142,227,1)",
                fontSize: "10px"
              }
            }
          },
          yAxis: {
            //设置网格线颜色
            gridLineColor: "#0A3167",
            title: {
              text: "",
              style: {
                color: "#08F6E4", //字体颜色
                fontSize: "16px" //字体大小
              }
            },
            labels: {
              format: "{value}",
              style: {
                color: "rgba(90,142,227,1)"
              }
            }
          },
          colors: ["#00AEFF"],
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

    //洗车机近七日报警报警趋势分析
    handleWashCarSevenDaysAnalysis() {
      this.$reportAnalysis.alarmRecent7day(1).then(res => {
        this.washCarSevenDaysAnalysisXz = [];
        this.washCarSevenDaysAnalysisData = [];
        res.resultEntity.forEach(item => {
          this.washCarSevenDaysAnalysisXz.push(item.X);
          this.washCarSevenDaysAnalysisData.push(Number(item.dataY));
        });
        this.washCarSevenDaysAnalysisOption = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "washCarSevenDaysAnalysis",
            marginBottom: 24
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.washCarSevenDaysAnalysisXz,
            //x轴坐标颜色
            lineColor: "#104DA1",
            tickInterval: 2,
            labels: {
              style: {
                color: "rgba(90,142,227,1)",
                fontSize: "10px"
              }
            }
          },
          yAxis: {
            title: {
              text: ""
            },
            //设置网格线颜色
            gridLineColor: "#0A3167",
            labels: {
              //修改Y轴添加单位
              format: "{value}次",
              style: {
                color: "rgba(90,142,227,1)",
                fontSize: "10px"
              }
            }
          },
          colors: ["#00CDE6"],
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
            pointFormat: "{series.name}<b>{point.y}</b>次"
          },
          plotOptions: {
            spline: {
              lineWidth: 2,
              states: {
                hover: {
                  lineWidth: 3
                }
              },
              marker: {
                enabled: false
              }
            }
          },
          series: [
            {
              name: "报警",
              data: this.washCarSevenDaysAnalysisData
            }
          ]
        };
        new HighCharts.chart(this.washCarSevenDaysAnalysisOption);
      });
    },

    //近七日洗车收费金额
    handleWashCarIncomeSevenDays() {
      this.washChargeInSevenDaysOption = {
        chart: {
          type: "column",
          backgroundColor: "rgba(0,0,0,0)",
          renderTo: "washChargeInSevenDays",
          marginBottom: 24
        },
        title: {
          text: ""
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: this.washChargeInSevenDaysXz,
          tickInterval: 2,
          labels: {
            style: {
              color: "rgba(90,142,227,1)",
              fontSize: "10px"
            }
          }
        },

        yAxis: {
          title: {
            text: ""
          },
          labels: {
            //修改Y轴添加单位
            format: "{value}元",
            style: {
              color: "rgba(90,142,227,1)",
              fontSize: "10px"
            }
          },
          //设置网格线颜色
          gridLineColor: "#0A3167"
        },
        colors: ["#7654E3", "#00CDE6", "#FFBC00"],
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
          pointFormat: "{series.name}<b>{point.y}</b>元"
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
            name: "精洗",
            data: this.washChargeInSevenDaysJINGWash
          },
          { name: "普洗", data: this.washChargeInSevenDaysPUWash },
          { name: "快洗", data: this.washChargeInSevenDaysKUAIWash }
        ]
      };
      new HighCharts.chart(this.washChargeInSevenDaysOption);
    }
  }
};
</script>
<style scoped>
.st0 {
  opacity: 0.5;
  fill: #098d97;
  enable-background: new;
}
.st1 {
  fill-rule: evenodd;
  clip-rule: evenodd;
}
.st2 {
  fill: none;
  stroke: #000000;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st3 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #3cd5e5;
}
.st4 {
  fill: none;
  stroke: #3cd5e5;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st5 {
  fill: #07172f;
  stroke: #3cd5e5;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st6 {
  fill: #095263;
}
.st7 {
  fill: #095263;
  stroke: #3cd5e5;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st8 {
  fill: #0c7454;
  stroke: #3cd5e5;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st9 {
  fill: #0c7454;
  stroke: #3cd5e5;
  stroke-width: 0.7212;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 4.0068;
}
.st10 {
  fill: #ff002b;
  stroke: #3cd5e5;
  stroke-width: 0.7212;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 4.0068;
}
.st11 {
  fill: #07172f;
}
.st12 {
  fill: #3cd5e5;
}
.st13 {
  fill: #091830;
}
.st14 {
  fill: none;
  stroke: #3cd5e5;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* 首页去全部内容 */
.body {
  width: 100%;
  height: 100%;
  /*min-width: 1900px;*/
  /*min-height: 1080px;*/
  /*overflow-x: auto;*/
  /*overflow-y: auto;*/
  background-image: linear-gradient(180deg, #001d43 0%, #000c1c 100%);
}
/*顶部盒子*/
.top {
  width: 100%;
  height: 64px;
  position: relative;
  display: flex;
}
.top-left {
  width: 727px;
  height: 64px;
  background-image: url("../../assets/homePage/top-left-background.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.top-right {
  width: 1253px;
  /*width: 63.3%;*/
  height: 64px;
  background-image: url("../../assets/homePage/top-right-background.png");
  background-size: 100% 26%;
  background-repeat: no-repeat;
  margin-left: -1px;
  display: flex;
}
.top-text {
  font-family: PingFangSC;
  width: 31.4%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 26px;
  color: white;
  position: relative;
  margin-left: 40px;
}
/*顶部首页按钮框*/
.top-homepage {
  font-family: PingFangSC;
  width: 10%;
  height: 38px;
  position: relative;
  color: #46c5dd;
  background-color: #043d87;
  margin-left: -8.5%;
  margin-top: 1.9%;
  transform: skew(-20.5deg);
  border: 2px solid #45c3db;
  /* box-shadow: 0 0 0 2px #45c3db; */
}
.top-homepage:hover {
  cursor: pointer;
}
.top-homepage-text {
  font-family: PingFangSC;
  width: 100%;
  height: 65%;
  transform: skew(20.5deg);
  font-size: 16px;
  letter-spacing: 0.53px;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
/*顶部其他文本*/
.top-others {
  width: 10%;
  height: 41px;
  line-height: 29px;
  color: #74a4e3;
  background-color: #043d87;
  margin-left: 0.8%;
  margin-top: 2%;
  transform: skew(-20.5deg);
  position: relative;
  border: 1px solid #0071d0;
}
.top-others:hover {
  cursor: pointer;
}
.top-others-text {
  width: 100%;
  height: 65%;
  transform: skew(20.5deg);
  font-size: 16px;
  letter-spacing: 0.53px;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.top-loginName {
  display: flex;
  width: 10%;
  height: 64px;
  margin-left: 20%;
  margin-top: 12px;
  line-height: 72px;
  color: white;
  font-size: 18px;
}
.exit {
  margin-top: 12px;
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
  margin-top: 1.3%;
  margin-left: 1.3%;
  background-image: url("../../assets/homePage/bothBack.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
/* 每个表格上面的标题名支付方式样式 */
.spanStyle {
  font-family: PingFangSC;
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
  height: 22%;
  position: relative;
  /*margin-top: 1px;*/
}
.leftCharts-others {
  width: 90%;
  margin-left: 5%;
  margin-top: 7%;
  height: 22%;
  position: relative;
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
  margin-top: 1.3%;
  margin-left: 1.8%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../../assets/homePage/bothBack.png");
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
  height: 22%;
}
.rightCharts-others {
  width: 90%;
  margin-left: 5%;
  margin-top: 7%;
  height: 22%;
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
  margin-top: 1.3%;
  margin-left: 1.8%;
  /*border: 1px solid red;*/
}
/*  中间剩余车位*/
.center-leftport {
  font-family: PingFangSC-Regular;
  font-size: 14px;
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
.center-line2-number-first {
  width: 50px;
  height: 56px;
  background: #023376;
  border: 1px solid #66e3fb;
}
.center-line2-number {
  width: 50px;
  height: 56px;
  margin-left: 5%;
  background: #023376;
  border: 1px solid #66e3fb;
}
/*数字框中的字*/
.center-line2-number-text {
  font-family: Helvetica-Bold;
  font-size: 40px;
  color: #08f6e4;
  text-align: center;
  line-height: 56px;
  font-weight: 600;
}
.center-line2-poacher {
  height: 72px;
  width: 80px;
  margin-left: 15%;
}
.center-line2-poacher-text {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #5a8ee3;
  letter-spacing: 0.5px;
}
.center-line2-poacher-number {
  font-family: HelveticaNeue-Bold;
  font-size: 40px;
  color: #895efc;
  letter-spacing: 1.43px;
}

.center-line2-normal {
  height: 72px;
  width: 80px;
  margin-left: 1%;
}
.center-line2-normal-text {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #5a8ee3;
  letter-spacing: 0.5px;
}
.center-line2-normal-number {
  font-family: HelveticaNeue-Bold;
  font-size: 40px;
  color: #e9c503;
  letter-spacing: 1.43px;
}

.center-line2-fast {
  height: 72px;
  width: 120px;
  margin-left: 1%;
}
.center-line2-fast-text {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #5a8ee3;
  letter-spacing: 0.5px;
}
.center-line2-fast-number {
  font-family: HelveticaNeue-Bold;
  font-size: 40px;
  color: #00cde6;
  letter-spacing: 1.43px;
}
/*总收入一行*/
.center-line3 {
  width: 100%;
  height: 6%;
  position: relative;
  margin-top: 2%;
  display: flex;
}
/*上下的盒子*/
.center-line3-div-first {
  width: 10%;
  /*background-color: red;*/
}
.center-line3-div {
  width: 10%;
  margin-left: 7%;
  /*background-color: red;*/
}
/*总收入文字*/
.center-line3-div-text {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #5a8ee3;
  letter-spacing: 0.57px;
}
/*总收入数字*/
.center-line3-div-number {
  font-family: HelveticaNeue-Medium;
  font-size: 26px;
  color: #18b2ff;
  letter-spacing: 1.21px;
  text-align: left;
}
/*  车位图*/
.center-down {
  width: 100%;
  height: 77%;
  display: flex;
  margin-top: 3%;
  border: 1px solid #3d71c1;
  background-image: linear-gradient(180deg, #001d43 0%, #000c1c 100%);
}
.center-down-parkName {
  /*background-color: white;*/
}
.content-parklot {
  width: 130px;
  background-color: #041b3a;
  margin-top: 5px;
  margin-left: 0px;
}
/*车位图左侧选项*/
.center-down-select {
  width: 130px;
  height: 150px;
  margin-left: 5%;
  margin-top: 40%;
  /*border: 1px solid red;*/
}
/*车位图左侧选项每个div*/
.center-down-select-item {
  width: 100px;
  height: 20px;
  display: flex;
  margin-top: 10px;
}
.center-down-select-item-img-1 {
  width: 40px;
  height: 20px;
  background-color: red;
  border: 2px solid #79f4fc;
}
.center-down-select-item-img-2 {
  width: 40px;
  height: 20px;
  background-color: #009245;
  border: 2px solid #79f4fc;
}
.center-down-select-item-img-3 {
  width: 40px;
  height: 20px;
  background: url("../../assets/images/Greenbelt.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 2px solid #79f4fc;
}
.center-down-select-item-img-4 {
  width: 40px;
  height: 20px;
  background: url("../../assets/images/Basketball.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 2px solid #79f4fc;
}
.center-down-select-item-img-5 {
  width: 40px;
  height: 20px;
  background-color: red;
  background: url("../../assets/images/Football.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 2px solid #79f4fc;
}

.center-down-select-item-text {
  width: 50px;
  height: 20px;
  margin-left: 8px;
  color: #4cc8d1;
  font-size: 16px;
}
/* 车位图svg*/
.center-down-svg {
  width: 75%;
  height: 98.5%;
  margin-left: 6%;
}
</style>
