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
          <div class="top-others-div">
            <div class="top-others-text">
              {{ item.name }}
            </div>
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
            <!--            <Xchart-->
            <!--              id="numberOfParking"-->
            <!--              :option="numberOfParkingOptions"-->
            <!--            ></Xchart>-->
            <dt-line-chart :chart-data="chartData"></dt-line-chart>
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
              {{ parkingSpaceUsedRateTotal }}分钟/车位
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
              {{ parkingSpaceTurnoverRateTotal }}次/车位
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
                  {{ parseInt((publicLeftPort % 10000) / 1000) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ parseInt((publicLeftPort % 1000) / 100) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ parseInt((publicLeftPort % 100) / 10) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ publicLeftPort % 10 }}
                </div>
              </div>
            </div>
            <div style="display:flex;margin-left: 13%">
              <div class="center-line2-number-first">
                <div class="center-line2-number-text">
                  {{ parseInt((staffLeftPort % 10000) / 1000) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ parseInt((staffLeftPort % 1000) / 100) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ parseInt((staffLeftPort % 100) / 10) }}
                </div>
              </div>
              <div class="center-line2-number">
                <div class="center-line2-number-text">
                  {{ staffLeftPort % 10 }}
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
              {{ totalIncome }}
            </div>
          </div>
          <div class="center-line3-div">
            <div class="center-line3-div-text">停车场收入(元)</div>
            <div class="center-line3-div-number">
              {{ parkIncome }}
            </div>
          </div>
          <div class="center-line3-div">
            <div class="center-line3-div-text">洗车收入(元)</div>
            <div class="center-line3-div-number">
              {{ washIncome }}
            </div>
          </div>
        </div>
        <!--车位-->
        <div class="center-down">
          <!--图例-->
          <div class="center-down-select">
            <div class="center-down-select-item">
              <div class="center-down-select-item-img-1"></div>
              <div class="center-down-select-item-text">已占用</div>
            </div>
            <div class="center-down-select-item">
              <div class="center-down-select-item-img-2"></div>
              <div class="center-down-select-item-text">停车位</div>
            </div>
            <div class="center-down-select-item">
              <div class="center-down-select-item-img-4"></div>
              <div class="center-down-select-item-text">篮球场</div>
            </div>
            <div class="center-down-select-item">
              <div class="center-down-select-item-img-5"></div>
              <div class="center-down-select-item-text">足球场</div>
            </div>
          </div>
          <!--停车场-->
          <div class="parkListDivP1">
            <div class="parkListDiv-svg">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 28 28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>iconp</title>
                <defs>
                  <polygon
                    id="path-1"
                    points="0 0.0007 28 0.0007 28 28 0 28"
                  ></polygon>
                </defs>
                <g
                  id="切图"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="智慧停车管理平台备份-2"
                    transform="translate(-1018.000000, -653.000000)"
                  >
                    <g
                      id="Bitmap"
                      transform="translate(445.000000, 415.000000)"
                    >
                      <g
                        id="iconp"
                        transform="translate(573.000000, 238.000000)"
                      >
                        <path
                          d="M24.7457,14.0061 C24.7457,19.8861 19.9797,24.6521 14.0997,24.6521 C8.2207,24.6521 3.4537,19.8861 3.4537,14.0061 C3.4537,8.1271 8.2207,3.3601 14.0997,3.3601 C19.9797,3.3601 24.7457,8.1271 24.7457,14.0061"
                          id="Fill-1"
                          fill="#FFFFFF"
                        ></path>
                        <g id="编组">
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                          </mask>
                          <g id="Clip-4"></g>
                          <path
                            d="M15.609,10.1697 L12.553,10.1697 L12.553,13.2267 L15.609,13.2267 C16.9,13.2267 17.135,12.8887 17.135,11.6977 C17.135,10.5067 17.208,10.1697 15.914,10.1697 L15.609,10.1697 Z M14,0.0007 C6.267,0.0007 0,6.2657 0,13.9997 C0,21.7307 6.267,28.0007 14,28.0007 C21.733,28.0007 28,21.7307 28,13.9997 C28,6.2657 21.733,0.0007 14,0.0007 L14,0.0007 Z M15.609,16.2827 L12.553,16.2827 L12.553,22.3927 L9.498,22.3927 L9.498,7.1167 L15.609,7.1167 C18.626,7.1167 20.095,9.2147 20.095,11.6977 C20.095,14.1817 18.938,16.2797 15.917,16.2797 L15.609,16.2797 L15.609,16.2827 Z"
                            id="Fill-3"
                            fill="#0057D0"
                            mask="url(#mask-2)"
                          ></path>
                        </g>
                        <path
                          d="M26.0553,14.0774 C26.0553,20.7054 20.6823,26.0774 14.0553,26.0774 C7.4283,26.0774 2.0553,20.7054 2.0553,14.0774 C2.0553,7.4504 7.4283,2.0774 14.0553,2.0774 C20.6823,2.0774 26.0553,7.4504 26.0553,14.0774 Z"
                          id="Stroke-5"
                          stroke="#FFFFFF"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>{{ parkingLotList[0].name }}</div>
          </div>
          <div class="parkListDivP2">
            <div class="parkListDiv-svg">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 28 28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>iconp</title>
                <defs>
                  <polygon
                    id="path-1"
                    points="0 0.0007 28 0.0007 28 28 0 28"
                  ></polygon>
                </defs>
                <g
                  id="切图"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="智慧停车管理平台备份-2"
                    transform="translate(-1018.000000, -653.000000)"
                  >
                    <g
                      id="Bitmap"
                      transform="translate(445.000000, 415.000000)"
                    >
                      <g
                        id="iconp"
                        transform="translate(573.000000, 238.000000)"
                      >
                        <path
                          d="M24.7457,14.0061 C24.7457,19.8861 19.9797,24.6521 14.0997,24.6521 C8.2207,24.6521 3.4537,19.8861 3.4537,14.0061 C3.4537,8.1271 8.2207,3.3601 14.0997,3.3601 C19.9797,3.3601 24.7457,8.1271 24.7457,14.0061"
                          id="Fill-1"
                          fill="#FFFFFF"
                        ></path>
                        <g id="编组">
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                          </mask>
                          <g id="Clip-4"></g>
                          <path
                            d="M15.609,10.1697 L12.553,10.1697 L12.553,13.2267 L15.609,13.2267 C16.9,13.2267 17.135,12.8887 17.135,11.6977 C17.135,10.5067 17.208,10.1697 15.914,10.1697 L15.609,10.1697 Z M14,0.0007 C6.267,0.0007 0,6.2657 0,13.9997 C0,21.7307 6.267,28.0007 14,28.0007 C21.733,28.0007 28,21.7307 28,13.9997 C28,6.2657 21.733,0.0007 14,0.0007 L14,0.0007 Z M15.609,16.2827 L12.553,16.2827 L12.553,22.3927 L9.498,22.3927 L9.498,7.1167 L15.609,7.1167 C18.626,7.1167 20.095,9.2147 20.095,11.6977 C20.095,14.1817 18.938,16.2797 15.917,16.2797 L15.609,16.2797 L15.609,16.2827 Z"
                            id="Fill-3"
                            fill="#0057D0"
                            mask="url(#mask-2)"
                          ></path>
                        </g>
                        <path
                          d="M26.0553,14.0774 C26.0553,20.7054 20.6823,26.0774 14.0553,26.0774 C7.4283,26.0774 2.0553,20.7054 2.0553,14.0774 C2.0553,7.4504 7.4283,2.0774 14.0553,2.0774 C20.6823,2.0774 26.0553,7.4504 26.0553,14.0774 Z"
                          id="Stroke-5"
                          stroke="#FFFFFF"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>{{ parkingLotList[1].name }}</div>
          </div>
          <div class="parkListDivP3">
            <div class="parkListDiv-svg">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 28 28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>iconp</title>
                <defs>
                  <polygon
                    id="path-1"
                    points="0 0.0007 28 0.0007 28 28 0 28"
                  ></polygon>
                </defs>
                <g
                  id="切图"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="智慧停车管理平台备份-2"
                    transform="translate(-1018.000000, -653.000000)"
                  >
                    <g
                      id="Bitmap"
                      transform="translate(445.000000, 415.000000)"
                    >
                      <g
                        id="iconp"
                        transform="translate(573.000000, 238.000000)"
                      >
                        <path
                          d="M24.7457,14.0061 C24.7457,19.8861 19.9797,24.6521 14.0997,24.6521 C8.2207,24.6521 3.4537,19.8861 3.4537,14.0061 C3.4537,8.1271 8.2207,3.3601 14.0997,3.3601 C19.9797,3.3601 24.7457,8.1271 24.7457,14.0061"
                          id="Fill-1"
                          fill="#FFFFFF"
                        ></path>
                        <g id="编组">
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                          </mask>
                          <g id="Clip-4"></g>
                          <path
                            d="M15.609,10.1697 L12.553,10.1697 L12.553,13.2267 L15.609,13.2267 C16.9,13.2267 17.135,12.8887 17.135,11.6977 C17.135,10.5067 17.208,10.1697 15.914,10.1697 L15.609,10.1697 Z M14,0.0007 C6.267,0.0007 0,6.2657 0,13.9997 C0,21.7307 6.267,28.0007 14,28.0007 C21.733,28.0007 28,21.7307 28,13.9997 C28,6.2657 21.733,0.0007 14,0.0007 L14,0.0007 Z M15.609,16.2827 L12.553,16.2827 L12.553,22.3927 L9.498,22.3927 L9.498,7.1167 L15.609,7.1167 C18.626,7.1167 20.095,9.2147 20.095,11.6977 C20.095,14.1817 18.938,16.2797 15.917,16.2797 L15.609,16.2797 L15.609,16.2827 Z"
                            id="Fill-3"
                            fill="#0057D0"
                            mask="url(#mask-2)"
                          ></path>
                        </g>
                        <path
                          d="M26.0553,14.0774 C26.0553,20.7054 20.6823,26.0774 14.0553,26.0774 C7.4283,26.0774 2.0553,20.7054 2.0553,14.0774 C2.0553,7.4504 7.4283,2.0774 14.0553,2.0774 C20.6823,2.0774 26.0553,7.4504 26.0553,14.0774 Z"
                          id="Stroke-5"
                          stroke="#FFFFFF"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>{{ parkingLotList[2].name }}</div>
          </div>
          <div class="parkListDivP4">
            <div class="parkListDiv-svg">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 28 28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>iconp</title>
                <defs>
                  <polygon
                    id="path-1"
                    points="0 0.0007 28 0.0007 28 28 0 28"
                  ></polygon>
                </defs>
                <g
                  id="切图"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="智慧停车管理平台备份-2"
                    transform="translate(-1018.000000, -653.000000)"
                  >
                    <g
                      id="Bitmap"
                      transform="translate(445.000000, 415.000000)"
                    >
                      <g
                        id="iconp"
                        transform="translate(573.000000, 238.000000)"
                      >
                        <path
                          d="M24.7457,14.0061 C24.7457,19.8861 19.9797,24.6521 14.0997,24.6521 C8.2207,24.6521 3.4537,19.8861 3.4537,14.0061 C3.4537,8.1271 8.2207,3.3601 14.0997,3.3601 C19.9797,3.3601 24.7457,8.1271 24.7457,14.0061"
                          id="Fill-1"
                          fill="#FFFFFF"
                        ></path>
                        <g id="编组">
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                          </mask>
                          <g id="Clip-4"></g>
                          <path
                            d="M15.609,10.1697 L12.553,10.1697 L12.553,13.2267 L15.609,13.2267 C16.9,13.2267 17.135,12.8887 17.135,11.6977 C17.135,10.5067 17.208,10.1697 15.914,10.1697 L15.609,10.1697 Z M14,0.0007 C6.267,0.0007 0,6.2657 0,13.9997 C0,21.7307 6.267,28.0007 14,28.0007 C21.733,28.0007 28,21.7307 28,13.9997 C28,6.2657 21.733,0.0007 14,0.0007 L14,0.0007 Z M15.609,16.2827 L12.553,16.2827 L12.553,22.3927 L9.498,22.3927 L9.498,7.1167 L15.609,7.1167 C18.626,7.1167 20.095,9.2147 20.095,11.6977 C20.095,14.1817 18.938,16.2797 15.917,16.2797 L15.609,16.2797 L15.609,16.2827 Z"
                            id="Fill-3"
                            fill="#0057D0"
                            mask="url(#mask-2)"
                          ></path>
                        </g>
                        <path
                          d="M26.0553,14.0774 C26.0553,20.7054 20.6823,26.0774 14.0553,26.0774 C7.4283,26.0774 2.0553,20.7054 2.0553,14.0774 C2.0553,7.4504 7.4283,2.0774 14.0553,2.0774 C20.6823,2.0774 26.0553,7.4504 26.0553,14.0774 Z"
                          id="Stroke-5"
                          stroke="#FFFFFF"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>{{ parkingLotList[3].name }}</div>
          </div>
          <div class="parkListDivP5">
            <div class="parkListDiv-svg">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 28 28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>iconp</title>
                <defs>
                  <polygon
                    id="path-1"
                    points="0 0.0007 28 0.0007 28 28 0 28"
                  ></polygon>
                </defs>
                <g
                  id="切图"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="智慧停车管理平台备份-2"
                    transform="translate(-1018.000000, -653.000000)"
                  >
                    <g
                      id="Bitmap"
                      transform="translate(445.000000, 415.000000)"
                    >
                      <g
                        id="iconp"
                        transform="translate(573.000000, 238.000000)"
                      >
                        <path
                          d="M24.7457,14.0061 C24.7457,19.8861 19.9797,24.6521 14.0997,24.6521 C8.2207,24.6521 3.4537,19.8861 3.4537,14.0061 C3.4537,8.1271 8.2207,3.3601 14.0997,3.3601 C19.9797,3.3601 24.7457,8.1271 24.7457,14.0061"
                          id="Fill-1"
                          fill="#FFFFFF"
                        ></path>
                        <g id="编组">
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                          </mask>
                          <g id="Clip-4"></g>
                          <path
                            d="M15.609,10.1697 L12.553,10.1697 L12.553,13.2267 L15.609,13.2267 C16.9,13.2267 17.135,12.8887 17.135,11.6977 C17.135,10.5067 17.208,10.1697 15.914,10.1697 L15.609,10.1697 Z M14,0.0007 C6.267,0.0007 0,6.2657 0,13.9997 C0,21.7307 6.267,28.0007 14,28.0007 C21.733,28.0007 28,21.7307 28,13.9997 C28,6.2657 21.733,0.0007 14,0.0007 L14,0.0007 Z M15.609,16.2827 L12.553,16.2827 L12.553,22.3927 L9.498,22.3927 L9.498,7.1167 L15.609,7.1167 C18.626,7.1167 20.095,9.2147 20.095,11.6977 C20.095,14.1817 18.938,16.2797 15.917,16.2797 L15.609,16.2797 L15.609,16.2827 Z"
                            id="Fill-3"
                            fill="#0057D0"
                            mask="url(#mask-2)"
                          ></path>
                        </g>
                        <path
                          d="M26.0553,14.0774 C26.0553,20.7054 20.6823,26.0774 14.0553,26.0774 C7.4283,26.0774 2.0553,20.7054 2.0553,14.0774 C2.0553,7.4504 7.4283,2.0774 14.0553,2.0774 C20.6823,2.0774 26.0553,7.4504 26.0553,14.0774 Z"
                          id="Stroke-5"
                          stroke="#FFFFFF"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>{{ parkingLotList[4].name }}</div>
          </div>
          <!--车位-->
          <div class="center-down-svg">
            <svg
              version="1.1"
              id="图层_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1075.6 717.9"
              style="enable-background:new 0 0 1075.6 717.9;margin-top:2%"
              xml:space="preserve"
            >
              <title>溧水机电系统图纸0409wyh(1) Model (1)</title>
              <g id="底图">
                <path
                  class="st0"
                  d="M572.6,5.2L571,5.3c-5.7,0.7-10.2,5.2-11,10.9l-0.1,1.7v202.4c0,2.8-2.3,5.1-5.1,5.1H38.4l0,0l-6,17.8l0,0H61
		l1.3,0.1c4.1,0.7,6.9,4.6,6.2,8.7l-0.3,1.3l-6,18.4l-5.8,18.5l-4.9,16.6C29.3,384.6,14.5,464.4,7.4,545L6,562.3l-0.2,3.8
		c-0.4,33.9,25.9,62.2,59.7,64.3l3.9,0.2h489.8c7.7,0,14.2,5.7,15.2,13.4l0.1,1.9v61.7h119.1v-61.8l0.1-1.9
		c0.8-7,6.4-12.4,13.3-13.3l1.8-0.1h229.3l1.3-0.1c3.1-0.6,5.6-3,6.2-6.2l0.1-1.4v-72.2l-0.5-0.1l-0.4-0.3l-0.3-0.4l-0.1-0.5
		l0.1-0.5l0.3-0.4l0.4-0.2l0.5-0.1v-50.9l-0.5-0.1l-0.4-0.2l-0.3-0.4l-0.1-0.5l0.1-0.5l0.3-0.4l0.4-0.3l0.5-0.1v-50.9l-0.5-0.1
		l-0.4-0.3l-0.3-0.4l-0.1-0.5l0.1-0.5l0.3-0.4l0.4-0.2l0.5-0.1v-50.9l-0.5-0.1l-0.4-0.3l-0.3-0.4v-0.5l0.1-0.5l0.3-0.4l0.4-0.3
		l0.5-0.1V337l-0.5-0.1l-0.4-0.2l-0.3-0.4l-0.1-0.5l0.1-0.5l0.3-0.4l0.4-0.3l0.5-0.1v-50.9l-0.5-0.1l-0.4-0.3l-0.3-0.4l-0.1-0.5
		l0.1-0.5l0.3-0.4l0.4-0.2l0.5-0.1v-50.9l-0.5-0.1l-0.4-0.2l-0.3-0.4l-0.1-0.5l0.1-0.5l0.3-0.4l0.4-0.3l0.5-0.1v-50.9l0.1-1.1
		c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1h99.2l1.3-0.1c3.2-0.5,5.6-3,6.2-6.2l0.1-1.3V87.9c0.1-2.8-2.1-5-4.9-5.1h-0.1H932.9l0,0l-1.1,0.1
		c-1.9,0.4-3.4,1.9-3.8,3.8l-0.1,1.1v63.6l-0.1,0.8l-0.4,0.7l-0.6,0.6l-0.7,0.4l-0.8,0.1h-14l-1.1-0.1l-1-0.4l-1-0.7l-0.8-0.8
		l-0.6-1l-0.4-1.1l-0.1-1.1V5.3"
                />
                <polyline
                  class="st1"
                  points="635.3,711.5 640.3,715.4 630.2,715.4 	"
                />
                <line class="st2" x1="574.5" y1="645.7" x2="574.5" y2="707.5" />
                <polyline class="st3" points="29,233 25.1,238.1 25.1,228 	" />
                <line class="st2" x1="756.2" y1="503.3" x2="771.5" y2="503.3" />
                <line class="st2" x1="781.7" y1="503.3" x2="796.9" y2="503.3" />
                <line class="st2" x1="807.1" y1="503.3" x2="822.3" y2="503.3" />
                <line class="st2" x1="832.5" y1="503.3" x2="847.8" y2="503.3" />
                <line class="st4" x1="199.3" y1="205" x2="199.3" y2="209.1" />
                <polygon
                  class="st4"
                  points="183.9,205 183.9,204.8 183.6,204.6 183.4,204.5 183.1,204.6 182.9,204.8 182.8,205 182.9,205.3
		183.1,205.6 183.4,205.6 183.6,205.6 183.9,205.3 	"
                />
                <line class="st4" x1="191" y1="209.1" x2="188" y2="194.3" />
                <line class="st4" x1="167.5" y1="205" x2="167.5" y2="209.1" />
                <line class="st4" x1="178.8" y1="194.3" x2="175.7" y2="209.1" />
                <path
                  class="st4"
                  d="M199.3,205l-0.1-1.9c-1.1-8.7-9.1-14.9-17.8-13.8c-7.2,0.9-12.9,6.6-13.8,13.8l-0.1,1.9"
                />
                <line class="st4" x1="181.1" y1="206.3" x2="185.7" y2="206.3" />
                <line class="st4" x1="181.1" y1="206" x2="185.7" y2="206" />
                <line class="st4" x1="183.1" y1="212.7" x2="183.1" y2="206.3" />
                <line class="st4" x1="183.6" y1="212.7" x2="183.6" y2="206.3" />
                <polyline
                  class="st2"
                  points="183.1,212.7 183.2,212.8 183.4,212.9 183.6,212.8 183.6,212.7 	"
                />
                <line class="st4" x1="183" y1="206" x2="183" y2="205.5" />
                <line class="st4" x1="183.8" y1="206" x2="183.8" y2="205.5" />
                <line class="st4" x1="181.1" y1="206" x2="181.1" y2="206.3" />
                <line class="st4" x1="185.7" y1="206" x2="185.7" y2="206.3" />
                <path
                  class="st4"
                  d="M188,194.3l-0.1-1c-0.6-2.5-3-4-5.5-3.4c-1.7,0.4-3,1.7-3.4,3.4l-0.1,1"
                />
                <line class="st4" x1="180.2" y1="197.6" x2="181" y2="198.3" />
                <line class="st4" x1="184.4" y1="198.5" x2="184.5" y2="198.7" />
                <polyline
                  class="st4"
                  points="183.5,198.6 183.5,198.9 184.5,198.7 	"
                />
                <line class="st4" x1="183.3" y1="198.6" x2="183.3" y2="198.9" />
                <line class="st4" x1="182.3" y1="198.5" x2="182.3" y2="198.7" />
                <line class="st4" x1="182.2" y1="198.5" x2="182.1" y2="198.7" />
                <polyline
                  class="st4"
                  points="181.2,198.1 181.1,198.3 182.1,198.7 	"
                />
                <line class="st4" x1="181.2" y1="198" x2="181" y2="198.3" />
                <line class="st4" x1="182.3" y1="198.7" x2="183.3" y2="198.9" />
                <line class="st4" x1="179" y1="195.6" x2="179.4" y2="196.5" />
                <line class="st4" x1="180.3" y1="197.4" x2="180.2" y2="197.6" />
                <line class="st4" x1="180.3" y1="197.3" x2="180.1" y2="197.5" />
                <polyline
                  class="st4"
                  points="179.7,196.5 179.4,196.6 180.1,197.5 	"
                />
                <line class="st4" x1="179.6" y1="196.4" x2="179.4" y2="196.5" />
                <polyline
                  class="st4"
                  points="178.9,195.2 179,195.4 179.2,195.4 	"
                />
                <line class="st4" x1="179.2" y1="195.5" x2="179" y2="195.6" />
                <line class="st4" x1="185.7" y1="198.3" x2="186.6" y2="197.6" />
                <line class="st4" x1="190.6" y1="204.6" x2="190.5" y2="204.4" />
                <line class="st4" x1="190.1" y1="202.3" x2="190.1" y2="202.1" />
                <polyline
                  class="st4"
                  points="184.6,198.7 185.6,198.3 185.5,198.1 	"
                />
                <line class="st4" x1="184.5" y1="198.5" x2="184.6" y2="198.7" />
                <line class="st4" x1="185.6" y1="198" x2="185.7" y2="198.3" />
                <line class="st4" x1="187.4" y1="196.5" x2="187.8" y2="195.6" />
                <line class="st4" x1="186.4" y1="197.4" x2="186.6" y2="197.6" />
                <polyline
                  class="st4"
                  points="186.6,197.5 187.3,196.6 187.1,196.5 	"
                />
                <line class="st4" x1="186.5" y1="197.3" x2="186.6" y2="197.5" />
                <line class="st4" x1="187.1" y1="196.4" x2="187.4" y2="196.5" />
                <polyline
                  class="st4"
                  points="187.5,195.4 187.8,195.4 187.8,195.2 	"
                />
                <line class="st4" x1="187.5" y1="195.5" x2="187.8" y2="195.6" />
                <line class="st4" x1="167.2" y1="205" x2="167.2" y2="209.1" />
                <path
                  class="st4"
                  d="M199.5,205l-0.1-1.9c-1.1-8.9-9.2-15.2-18-14.1c-7.4,0.9-13.2,6.7-14.1,14.1l-0.1,1.9"
                />
                <line class="st4" x1="199.5" y1="205" x2="199.5" y2="209.1" />
                <line class="st4" x1="187.5" y1="195.4" x2="187.7" y2="194.4" />
                <line class="st4" x1="179" y1="194.2" x2="187.7" y2="194.2" />
                <polyline
                  class="st4"
                  points="187.7,194.4 179,194.4 179.2,195.4 	"
                />
                <line class="st4" x1="179.2" y1="195.5" x2="179.6" y2="196.4" />
                <line class="st4" x1="179.7" y1="196.5" x2="180.3" y2="197.3" />
                <line class="st4" x1="180.3" y1="197.4" x2="181.2" y2="198" />
                <line class="st4" x1="181.2" y1="198.1" x2="182.2" y2="198.5" />
                <line class="st4" x1="182.3" y1="198.5" x2="183.3" y2="198.6" />
                <line class="st4" x1="183.5" y1="198.6" x2="184.4" y2="198.5" />
                <line class="st4" x1="184.5" y1="198.5" x2="185.5" y2="198.1" />
                <line class="st4" x1="185.6" y1="198" x2="186.4" y2="197.4" />
                <line class="st4" x1="186.5" y1="197.3" x2="187.1" y2="196.5" />
                <line class="st4" x1="187.1" y1="196.4" x2="187.5" y2="195.5" />
                <path
                  class="st4"
                  d="M187.7,194.2l-0.2-1c-0.6-2.3-3-3.7-5.3-3.1c-1.5,0.4-2.7,1.6-3.1,3.1l-0.2,1"
                />
                <line class="st4" x1="178.9" y1="195.2" x2="176" y2="209.1" />
                <line class="st4" x1="190.7" y1="209.1" x2="187.8" y2="195.2" />
                <line class="st4" x1="190.1" y1="204.7" x2="190.6" y2="204.6" />
                <line class="st4" x1="190.1" y1="204.4" x2="190.5" y2="204.4" />
                <line class="st4" x1="189.6" y1="202.2" x2="190.1" y2="202.1" />
                <line class="st4" x1="189.6" y1="202.5" x2="190.1" y2="202.3" />
                <line class="st4" x1="189.2" y1="200.1" x2="189.6" y2="200" />
                <polyline
                  class="st4"
                  points="189.2,200.4 189.7,200.2 189.6,200 	"
                />
                <polyline
                  class="st4"
                  points="177.1,200 177,200.2 177.5,200.4 	"
                />
                <line class="st4" x1="177.6" y1="200.1" x2="177.1" y2="200" />
                <line class="st4" x1="177.1" y1="202.5" x2="176.6" y2="202.3" />
                <line class="st4" x1="177.2" y1="202.2" x2="176.7" y2="202.1" />
                <line class="st4" x1="176.7" y1="204.4" x2="176.2" y2="204.4" />
                <line class="st4" x1="176.6" y1="204.7" x2="176.1" y2="204.6" />
                <line class="st4" x1="176.6" y1="202.3" x2="176.7" y2="202.1" />
                <line class="st4" x1="176.1" y1="204.6" x2="176.2" y2="204.4" />
                <line class="st4" x1="176.1" y1="142.3" x2="176.2" y2="142.5" />
                <line class="st4" x1="176.6" y1="144.6" x2="176.7" y2="144.8" />
                <line class="st4" x1="176.6" y1="142.2" x2="176.1" y2="142.3" />
                <line class="st4" x1="176.7" y1="142.5" x2="176.2" y2="142.5" />
                <line class="st4" x1="177.2" y1="144.7" x2="176.7" y2="144.8" />
                <line class="st4" x1="177.1" y1="144.4" x2="176.6" y2="144.6" />
                <line class="st4" x1="177.6" y1="146.8" x2="177.1" y2="146.9" />
                <polyline
                  class="st4"
                  points="177.5,146.5 177,146.7 177.1,146.9 	"
                />
                <polyline
                  class="st4"
                  points="189.6,146.9 189.7,146.7 189.2,146.5 	"
                />
                <line class="st4" x1="189.2" y1="146.8" x2="189.6" y2="146.9" />
                <line class="st4" x1="189.6" y1="144.4" x2="190.1" y2="144.6" />
                <line class="st4" x1="189.6" y1="144.7" x2="190.1" y2="144.8" />
                <line class="st4" x1="190.1" y1="142.5" x2="190.5" y2="142.5" />
                <line class="st4" x1="190.1" y1="142.2" x2="190.6" y2="142.3" />
                <line class="st4" x1="190.7" y1="137.8" x2="187.8" y2="151.8" />
                <line class="st4" x1="178.9" y1="151.8" x2="176" y2="137.8" />
                <path
                  class="st4"
                  d="M179,152.7l0.2,1c0.6,2.3,3,3.7,5.3,3.1c1.5-0.4,2.7-1.6,3.1-3.1l0.2-1"
                />
                <line class="st4" x1="187.5" y1="151.4" x2="187.1" y2="150.5" />
                <line class="st4" x1="187.1" y1="150.4" x2="186.5" y2="149.6" />
                <line class="st4" x1="186.4" y1="149.5" x2="185.6" y2="148.9" />
                <line class="st4" x1="185.5" y1="148.8" x2="184.5" y2="148.5" />
                <line class="st4" x1="184.4" y1="148.4" x2="183.5" y2="148.3" />
                <line class="st4" x1="183.3" y1="148.3" x2="182.3" y2="148.4" />
                <line class="st4" x1="182.2" y1="148.5" x2="181.2" y2="148.8" />
                <line class="st4" x1="181.2" y1="148.9" x2="180.3" y2="149.5" />
                <line class="st4" x1="180.3" y1="149.6" x2="179.7" y2="150.4" />
                <line class="st4" x1="179.6" y1="150.5" x2="179.2" y2="151.4" />
                <polyline
                  class="st4"
                  points="179.2,151.5 179,152.5 187.7,152.5 	"
                />
                <line class="st4" x1="179" y1="152.7" x2="187.7" y2="152.7" />
                <line class="st4" x1="187.7" y1="152.5" x2="187.5" y2="151.5" />
                <line class="st4" x1="199.5" y1="141.9" x2="199.5" y2="137.8" />
                <path
                  class="st4"
                  d="M167.2,141.9l0.1,1.9c1.1,8.9,9.2,15.2,18,14.1c7.4-0.9,13.2-6.7,14.1-14.1l0.1-1.9"
                />
                <line class="st4" x1="167.2" y1="141.9" x2="167.2" y2="137.8" />
                <path
                  class="st4"
                  d="M187.7,173.5l-0.1-1l-0.4-1c-1-2.1-3.6-3-5.8-2c-1.2,0.6-2.1,1.7-2.3,3l-0.1,1l0.1,1c0.5,2.3,2.9,3.8,5.2,3.2
		c1.3-0.3,2.3-1.2,2.9-2.3l0.4-0.9L187.7,173.5z"
                />
                <line class="st4" x1="188" y1="173.3" x2="202.5" y2="173.3" />
                <line class="st4" x1="188" y1="173.6" x2="202.5" y2="173.6" />
                <line class="st4" x1="179" y1="173.3" x2="187.7" y2="173.3" />
                <line class="st4" x1="179" y1="173.6" x2="187.7" y2="173.6" />
                <line class="st4" x1="164.3" y1="173.3" x2="178.8" y2="173.3" />
                <line class="st4" x1="164.3" y1="173.6" x2="178.8" y2="173.6" />
                <line class="st4" x1="164" y1="209.3" x2="183.1" y2="209.3" />
                <polyline
                  class="st4"
                  points="183.6,209.3 202.7,209.3 202.7,137.6 183.6,137.6 	"
                />
                <polyline
                  class="st4"
                  points="183.1,137.6 164,137.6 164,209.3 	"
                />
                <polyline
                  class="st4"
                  points="211.1,142.9 211.1,129.2 155.6,129.2 155.6,217.7 211.1,217.7 211.1,204 	"
                />
                <line class="st2" x1="211.1" y1="196.9" x2="211.1" y2="150" />
                <line class="st4" x1="202.5" y1="209.1" x2="202.5" y2="173.5" />
                <polyline
                  class="st4"
                  points="183.1,209.1 164.3,209.1 164.3,173.6 	"
                />
                <line class="st4" x1="183.6" y1="209.1" x2="202.5" y2="209.1" />
                <line class="st4" x1="187.5" y1="151.4" x2="187.8" y2="151.3" />
                <polyline
                  class="st4"
                  points="187.8,151.8 187.8,151.5 187.5,151.5 	"
                />
                <line class="st4" x1="187.1" y1="150.5" x2="187.4" y2="150.4" />
                <line class="st4" x1="186.5" y1="149.6" x2="186.6" y2="149.4" />
                <polyline
                  class="st4"
                  points="187.1,150.4 187.3,150.3 186.6,149.4 	"
                />
                <line class="st4" x1="186.4" y1="149.5" x2="186.6" y2="149.3" />
                <line class="st4" x1="187.8" y1="151.3" x2="187.4" y2="150.4" />
                <line class="st4" x1="185.6" y1="148.9" x2="185.7" y2="148.6" />
                <line class="st4" x1="184.5" y1="148.5" x2="184.6" y2="148.2" />
                <polyline
                  class="st4"
                  points="185.5,148.8 185.6,148.6 184.6,148.2 	"
                />
                <line class="st4" x1="190.1" y1="144.6" x2="190.1" y2="144.8" />
                <line class="st4" x1="190.6" y1="142.3" x2="190.5" y2="142.5" />
                <line class="st4" x1="186.6" y1="149.3" x2="185.7" y2="148.6" />
                <line class="st4" x1="179.2" y1="151.4" x2="179" y2="151.3" />
                <polyline
                  class="st4"
                  points="179.2,151.5 179,151.5 178.9,151.8 	"
                />
                <line class="st4" x1="179.6" y1="150.5" x2="179.4" y2="150.4" />
                <polyline
                  class="st4"
                  points="180.1,149.4 179.4,150.3 179.7,150.4 	"
                />
                <line class="st4" x1="180.3" y1="149.6" x2="180.1" y2="149.4" />
                <line class="st4" x1="180.3" y1="149.5" x2="180.2" y2="149.3" />
                <line class="st4" x1="179.4" y1="150.4" x2="179" y2="151.3" />
                <line class="st4" x1="183.3" y1="148" x2="182.3" y2="148.2" />
                <line class="st4" x1="181.2" y1="148.9" x2="181" y2="148.6" />
                <polyline
                  class="st4"
                  points="182.1,148.2 181.1,148.6 181.2,148.8 	"
                />
                <line class="st4" x1="182.2" y1="148.5" x2="182.1" y2="148.2" />
                <line class="st4" x1="182.3" y1="148.4" x2="182.3" y2="148.2" />
                <line class="st4" x1="183.3" y1="148.3" x2="183.3" y2="148" />
                <polyline
                  class="st4"
                  points="184.5,148.2 183.5,148 183.5,148.3 	"
                />
                <line class="st4" x1="184.4" y1="148.4" x2="184.5" y2="148.2" />
                <line class="st4" x1="181" y1="148.6" x2="180.2" y2="149.3" />
                <path
                  class="st4"
                  d="M178.8,152.6l0.1,1c0.6,2.5,3,4,5.5,3.4c1.7-0.4,3-1.7,3.4-3.4l0.1-1"
                />
                <line class="st4" x1="185.7" y1="140.9" x2="185.7" y2="140.7" />
                <line class="st4" x1="181.1" y1="140.9" x2="181.1" y2="140.7" />
                <line class="st4" x1="183.8" y1="140.9" x2="183.8" y2="141.4" />
                <line class="st4" x1="183" y1="140.9" x2="183" y2="141.4" />
                <polyline
                  class="st4"
                  points="183.6,134.3 183.6,134.1 183.4,134 183.2,134.1 183.1,134.3 	"
                />
                <line class="st4" x1="183.6" y1="134.3" x2="183.6" y2="140.7" />
                <line class="st4" x1="183.1" y1="134.3" x2="183.1" y2="140.7" />
                <line class="st4" x1="181.1" y1="140.9" x2="185.7" y2="140.9" />
                <line class="st4" x1="181.1" y1="140.7" x2="185.7" y2="140.7" />
                <line class="st4" x1="164.3" y1="137.8" x2="183.1" y2="137.8" />
                <path
                  class="st4"
                  d="M167.5,141.9l0.1,1.9c1.1,8.7,9.1,14.9,17.8,13.8c7.2-0.9,12.9-6.6,13.8-13.8l0.1-1.9"
                />
                <line class="st4" x1="178.8" y1="152.6" x2="175.7" y2="137.8" />
                <line class="st4" x1="167.5" y1="141.9" x2="167.5" y2="137.8" />
                <line class="st4" x1="191" y1="137.8" x2="188" y2="152.6" />
                <polygon
                  class="st4"
                  points="183.9,141.9 183.9,141.6 183.6,141.3 183.4,141.3 183.1,141.3 182.9,141.6 182.8,141.9 182.9,142.2
		183.1,142.3 183.4,142.4 183.6,142.3 183.9,142.2 	"
                />
                <line class="st4" x1="199.3" y1="141.9" x2="199.3" y2="137.8" />
                <polyline
                  class="st4"
                  points="183.6,137.8 202.5,137.8 202.5,173.4 	"
                />
                <line class="st4" x1="164.3" y1="173.3" x2="164.3" y2="137.8" />
                <path
                  class="st4"
                  d="M188,173.5l-0.1-1l-0.4-1c-1.1-2.3-3.8-3.2-6.1-2.1c-1.3,0.6-2.2,1.8-2.5,3.1l-0.1,1l0.1,1
		c0.6,2.5,3,4,5.5,3.5c1.4-0.3,2.5-1.2,3.1-2.5l0.4-1L188,173.5z"
                />
                <rect
                  x="237.5"
                  y="140"
                  class="st4"
                  width="27.9"
                  height="60.5"
                />
                <rect
                  x="227.3"
                  y="123.8"
                  class="st4"
                  width="48.2"
                  height="93"
                />
                <line class="st4" x1="251.4" y1="186.6" x2="251.4" y2="154" />
                <line class="st4" x1="261.9" y1="200.5" x2="261.9" y2="140.1" />
                <line class="st4" x1="240.9" y1="140.1" x2="240.9" y2="200.5" />
                <line class="st4" x1="267.7" y1="170.3" x2="235.1" y2="170.3" />
                <line class="st4" x1="237.5" y1="186.6" x2="265.4" y2="186.6" />
                <polygon
                  class="st4"
                  points="267.9,170.3 267.9,170.1 267.7,170.1 267.5,170.1 267.4,170.3 267.5,170.5 267.7,170.5 267.9,170.5
		"
                />
                <polygon
                  class="st4"
                  points="264.5,170.3 264.3,170.1 264.2,170.1 264,170.1 263.9,170.3 264,170.5 264.2,170.5 264.3,170.5 	"
                />
                <polygon
                  class="st4"
                  points="238.8,170.3 238.8,170.1 238.6,170.1 238.4,170.1 238.4,170.3 238.4,170.5 238.6,170.5 238.8,170.5
		"
                />
                <polygon
                  class="st4"
                  points="235.4,170.3 235.3,170.1 235.1,170.1 234.9,170.1 234.9,170.3 234.9,170.5 235.1,170.5 235.3,170.5
		"
                />
                <line class="st4" x1="265.4" y1="154" x2="237.5" y2="154" />
                <polyline
                  class="st4"
                  points="226.4,142.9 211.1,142.9 211.1,225.4 	"
                />
                <polyline
                  class="st4"
                  points="226.4,225.4 226.4,142.9 226.4,177.9 226.4,122.9 276.4,122.9 276.4,217.7 226.4,217.7 226.4,183
		"
                />
                <path
                  class="st4"
                  d="M395.2,225.4l-1.3-3.5c-7.2-17.4-22.8-30-41.3-33.2l-3.7-0.5l-2.5-0.4c-12.6-3.1-21-14.8-19.8-27.7l0.4-2.5
		l0.9-2.7c2.8-7.2,7.9-13.3,14.5-17.2l2.5-1.4l3.7-1.5c22.7-8.8,48.3-4.9,67.4,10.3l3,2.5l3.2,2.3c30.6,20.2,71.7,11.7,91.8-18.8
		c0.6-0.8,1.1-1.7,1.6-2.5l1.9-3.5l1.6-2.8c8-13.1,22.3-21,37.6-20.8l3.2,0.2v5.1l-3.1-0.2c-13.5-0.2-26.1,6.7-33.3,18.2l-1.5,2.6
		l-2,3.6c-20.1,33.9-63.9,45.1-97.8,25c-1.1-0.6-2.1-1.3-3.1-2l-3.4-2.4l-2.9-2.5c-17.6-13.9-41.2-17.6-62.2-9.6l-3.5,1.5l-2.3,1.3
		c-5.4,3.3-9.5,8.3-11.9,14.2L332,159l-0.2,2.2c-0.7,10,5.9,19.2,15.7,21.7l2.2,0.4l3.7,0.5c21.1,3.6,38.7,18.1,46.2,38.2l1.1,3.5"
                />
                <line class="st4" x1="410" y1="153.1" x2="410" y2="155.2" />
                <line class="st4" x1="410" y1="155.7" x2="410" y2="157.7" />
                <line class="st4" x1="410" y1="158.2" x2="410" y2="160.3" />
                <line class="st4" x1="410" y1="160.8" x2="410" y2="162.8" />
                <line class="st4" x1="410" y1="163.3" x2="410" y2="165.4" />
                <line class="st4" x1="410" y1="165.9" x2="410" y2="167.9" />
                <line class="st4" x1="410" y1="168.4" x2="410" y2="170.4" />
                <line class="st4" x1="410" y1="171" x2="410" y2="173" />
                <line class="st4" x1="410" y1="173.5" x2="410" y2="180.6" />
                <line class="st4" x1="415.1" y1="153.1" x2="415.1" y2="155.2" />
                <line class="st4" x1="415.1" y1="155.7" x2="415.1" y2="157.7" />
                <line class="st4" x1="415.1" y1="158.2" x2="415.1" y2="160.3" />
                <line class="st4" x1="415.1" y1="160.8" x2="415.1" y2="162.8" />
                <line class="st4" x1="415.1" y1="163.3" x2="415.1" y2="165.4" />
                <line class="st4" x1="415.1" y1="165.9" x2="415.1" y2="167.9" />
                <line class="st4" x1="415.1" y1="168.4" x2="415.1" y2="170.4" />
                <line class="st4" x1="415.1" y1="171" x2="415.1" y2="173" />
                <line class="st4" x1="415.1" y1="173.5" x2="415.1" y2="175.5" />
                <line class="st4" x1="410" y1="180.6" x2="442.3" y2="180.6" />
                <line class="st4" x1="410" y1="175.5" x2="447.4" y2="175.5" />
                <line class="st4" x1="410" y1="173.5" x2="415.1" y2="173.5" />
                <line class="st4" x1="410" y1="173" x2="415.1" y2="173" />
                <line class="st4" x1="431.1" y1="180.6" x2="431.1" y2="192.1" />
                <line class="st4" x1="429.8" y1="180.6" x2="429.8" y2="193.3" />
                <line class="st4" x1="428.6" y1="180.6" x2="428.6" y2="194.6" />
                <line class="st4" x1="431.1" y1="192.1" x2="442.3" y2="192.1" />
                <line class="st4" x1="429.8" y1="193.3" x2="442.3" y2="193.3" />
                <polyline
                  class="st4"
                  points="428.6,194.6 442.3,194.6 442.3,180.6 	"
                />
                <line class="st4" x1="447.4" y1="175.5" x2="447.4" y2="194.6" />
                <rect
                  x="432.2"
                  y="180.6"
                  class="st4"
                  width="10.1"
                  height="10.2"
                />
                <path class="st4" d="M432.2,190.8" />
                <line class="st4" x1="410" y1="171" x2="415.1" y2="171" />
                <line class="st4" x1="410" y1="170.4" x2="415.1" y2="170.4" />
                <line class="st4" x1="410" y1="168.4" x2="415.1" y2="168.4" />
                <line class="st4" x1="410" y1="167.9" x2="415.1" y2="167.9" />
                <line class="st4" x1="410" y1="165.9" x2="415.1" y2="165.9" />
                <line class="st4" x1="410" y1="165.4" x2="415.1" y2="165.4" />
                <line class="st4" x1="410" y1="163.3" x2="415.1" y2="163.3" />
                <line class="st4" x1="410" y1="162.8" x2="415.1" y2="162.8" />
                <line class="st4" x1="410" y1="160.8" x2="415.1" y2="160.8" />
                <line class="st4" x1="410" y1="160.3" x2="415.1" y2="160.3" />
                <line class="st4" x1="410" y1="158.2" x2="415.1" y2="158.2" />
                <line class="st4" x1="410" y1="157.7" x2="415.1" y2="157.7" />
                <line class="st4" x1="410" y1="155.7" x2="415.1" y2="155.7" />
                <line class="st4" x1="410" y1="155.2" x2="415.1" y2="155.2" />
                <line class="st4" x1="410" y1="153.1" x2="415.1" y2="153.1" />
                <line class="st4" x1="442.3" y1="194.6" x2="447.4" y2="194.6" />
                <line class="st4" x1="410" y1="148" x2="410" y2="150.1" />
                <line class="st4" x1="410" y1="150.6" x2="410" y2="152.7" />
                <polyline
                  class="st4"
                  points="415.1,150.9 415.1,152.7 410,152.7 	"
                />
                <line class="st4" x1="410" y1="150.6" x2="414.7" y2="150.6" />
                <line class="st4" x1="410" y1="150.1" x2="414.1" y2="150.1" />
                <line class="st4" x1="410" y1="148" x2="411.6" y2="148" />
                <line class="st4" x1="467.7" y1="175.5" x2="465.7" y2="175.5" />
                <line class="st4" x1="465.2" y1="175.5" x2="463.2" y2="175.5" />
                <line class="st4" x1="462.6" y1="175.5" x2="460.7" y2="175.5" />
                <line class="st4" x1="460.1" y1="175.5" x2="458.1" y2="175.5" />
                <line class="st4" x1="457.6" y1="175.5" x2="455.6" y2="175.5" />
                <line class="st4" x1="455" y1="175.5" x2="453" y2="175.5" />
                <line class="st4" x1="452.5" y1="175.5" x2="450.5" y2="175.5" />
                <line class="st4" x1="449.9" y1="175.5" x2="447.9" y2="175.5" />
                <line class="st4" x1="467.7" y1="180.6" x2="465.7" y2="180.6" />
                <line class="st4" x1="465.2" y1="180.6" x2="463.2" y2="180.6" />
                <line class="st4" x1="462.6" y1="180.6" x2="460.7" y2="180.6" />
                <line class="st4" x1="460.1" y1="180.6" x2="458.1" y2="180.6" />
                <line class="st4" x1="457.6" y1="180.6" x2="455.6" y2="180.6" />
                <line class="st4" x1="455" y1="180.6" x2="453" y2="180.6" />
                <line class="st4" x1="452.5" y1="180.6" x2="450.5" y2="180.6" />
                <polyline
                  class="st4"
                  points="449.9,180.6 447.9,180.6 447.9,175.5 	"
                />
                <line class="st4" x1="449.9" y1="175.5" x2="449.9" y2="180.6" />
                <line class="st4" x1="450.5" y1="175.5" x2="450.5" y2="180.6" />
                <line class="st4" x1="452.5" y1="175.5" x2="452.5" y2="180.6" />
                <line class="st4" x1="453" y1="175.5" x2="453" y2="180.6" />
                <line class="st4" x1="455" y1="175.5" x2="455" y2="180.6" />
                <line class="st4" x1="455.6" y1="175.5" x2="455.6" y2="180.6" />
                <line class="st4" x1="457.6" y1="175.5" x2="457.6" y2="180.6" />
                <line class="st4" x1="458.1" y1="175.5" x2="458.1" y2="180.6" />
                <line class="st4" x1="460.1" y1="175.5" x2="460.1" y2="180.6" />
                <line class="st4" x1="460.7" y1="175.5" x2="460.7" y2="180.6" />
                <line class="st4" x1="462.6" y1="175.5" x2="462.6" y2="180.6" />
                <line class="st4" x1="463.2" y1="175.5" x2="463.2" y2="180.6" />
                <line class="st4" x1="465.2" y1="175.5" x2="465.2" y2="180.6" />
                <line class="st4" x1="465.7" y1="175.5" x2="465.7" y2="180.6" />
                <line class="st4" x1="467.7" y1="175.5" x2="467.7" y2="180.6" />
                <line class="st4" x1="470.3" y1="175.5" x2="468.3" y2="175.5" />
                <polyline
                  class="st4"
                  points="470.3,180.6 468.3,180.6 468.3,175.5 	"
                />
                <line class="st4" x1="470.3" y1="175.5" x2="470.3" y2="180.6" />
                <line class="st4" x1="488.1" y1="175.5" x2="486.1" y2="175.5" />
                <line class="st4" x1="485.6" y1="175.5" x2="483.5" y2="175.5" />
                <line class="st4" x1="483" y1="175.5" x2="481" y2="175.5" />
                <line class="st4" x1="480.5" y1="175.5" x2="478.4" y2="175.5" />
                <line class="st4" x1="477.9" y1="175.5" x2="475.9" y2="175.5" />
                <line class="st4" x1="475.4" y1="175.5" x2="473.4" y2="175.5" />
                <line class="st4" x1="472.8" y1="175.5" x2="470.8" y2="175.5" />
                <line class="st4" x1="488.1" y1="180.6" x2="486.1" y2="180.6" />
                <line class="st4" x1="485.6" y1="180.6" x2="483.5" y2="180.6" />
                <line class="st4" x1="483" y1="180.6" x2="481" y2="180.6" />
                <line class="st4" x1="480.5" y1="180.6" x2="478.4" y2="180.6" />
                <line class="st4" x1="477.9" y1="180.6" x2="475.9" y2="180.6" />
                <line class="st4" x1="475.4" y1="180.6" x2="473.4" y2="180.6" />
                <polyline
                  class="st4"
                  points="472.8,180.6 470.8,180.6 470.8,175.5 	"
                />
                <line class="st4" x1="472.8" y1="175.5" x2="472.8" y2="180.6" />
                <line class="st4" x1="473.4" y1="175.5" x2="473.4" y2="180.6" />
                <line class="st4" x1="475.4" y1="175.5" x2="475.4" y2="180.6" />
                <line class="st4" x1="475.9" y1="175.5" x2="475.9" y2="180.6" />
                <line class="st4" x1="477.9" y1="175.5" x2="477.9" y2="180.6" />
                <line class="st4" x1="478.4" y1="175.5" x2="478.4" y2="180.6" />
                <line class="st4" x1="480.5" y1="175.5" x2="480.5" y2="180.6" />
                <line class="st4" x1="481" y1="175.5" x2="481" y2="180.6" />
                <line class="st4" x1="483" y1="175.5" x2="483" y2="180.6" />
                <line class="st4" x1="483.5" y1="175.5" x2="483.5" y2="180.6" />
                <line class="st4" x1="485.6" y1="175.5" x2="485.6" y2="180.6" />
                <line class="st4" x1="486.1" y1="175.5" x2="486.1" y2="180.6" />
                <line class="st4" x1="488.1" y1="175.5" x2="488.1" y2="180.6" />
                <line class="st4" x1="490.7" y1="175.5" x2="488.6" y2="175.5" />
                <polyline
                  class="st4"
                  points="490.7,180.6 488.6,180.6 488.6,175.5 	"
                />
                <line class="st4" x1="490.7" y1="175.5" x2="490.7" y2="180.6" />
                <line class="st4" x1="485.6" y1="160.6" x2="485.6" y2="162.3" />
                <line class="st4" x1="485.6" y1="162.8" x2="485.6" y2="164.8" />
                <line class="st4" x1="485.6" y1="165.4" x2="485.6" y2="167.4" />
                <line class="st4" x1="485.6" y1="167.9" x2="485.6" y2="169.9" />
                <line class="st4" x1="485.6" y1="170.4" x2="485.6" y2="172.5" />
                <line class="st4" x1="485.6" y1="173" x2="485.6" y2="175" />
                <line class="st4" x1="490.7" y1="160.3" x2="490.7" y2="162.3" />
                <line class="st4" x1="490.7" y1="162.8" x2="490.7" y2="164.8" />
                <line class="st4" x1="490.7" y1="165.4" x2="490.7" y2="167.4" />
                <line class="st4" x1="490.7" y1="167.9" x2="490.7" y2="169.9" />
                <line class="st4" x1="490.7" y1="170.4" x2="490.7" y2="172.5" />
                <polyline class="st4" points="490.7,173 490.7,175 485.6,175 	" />
                <line class="st4" x1="485.6" y1="173" x2="490.7" y2="173" />
                <line class="st4" x1="485.6" y1="172.5" x2="490.7" y2="172.5" />
                <line class="st4" x1="485.6" y1="170.4" x2="490.7" y2="170.4" />
                <line class="st4" x1="485.6" y1="169.9" x2="490.7" y2="169.9" />
                <line class="st4" x1="485.6" y1="167.9" x2="490.7" y2="167.9" />
                <line class="st4" x1="485.6" y1="167.4" x2="490.7" y2="167.4" />
                <line class="st4" x1="485.6" y1="165.4" x2="490.7" y2="165.4" />
                <line class="st4" x1="485.6" y1="164.8" x2="490.7" y2="164.8" />
                <line class="st4" x1="485.6" y1="162.8" x2="490.7" y2="162.8" />
                <line class="st4" x1="485.6" y1="162.3" x2="490.7" y2="162.3" />
                <line class="st4" x1="486.5" y1="160.3" x2="490.7" y2="160.3" />
                <polyline
                  class="st4"
                  points="490.7,158.4 490.7,159.7 487.7,159.7 	"
                />
                <path
                  class="st5"
                  d="M858,503.3H746l0,0h-37.1l-1.8,0.1c-7.7,0.9-13.5,7.4-13.4,15.1v78.9l0.1,1.9c0.8,7,6.3,12.5,13.3,13.3
		l1.8,0.1h164.3l1.9-0.1c7-0.8,12.5-6.3,13.4-13.3l0.1-1.9v-78.8c0-7.7-5.8-14.2-13.4-15.1l-1.9-0.1L858,503.3"
                />
                <path
                  class="st5"
                  d="M299.6,597.4v-78.8l0.1-1.9c0.8-7,6.4-12.4,13.3-13.3l1.8-0.1h207.4l0,0h37.1l1.9,0.1
		c6.9,0.9,12.4,6.3,13.3,13.3l0.1,1.9v78.8l-0.1,1.9c-1,7.7-7.5,13.4-15.2,13.4H314.8l-1.8-0.1c-7-0.8-12.5-6.3-13.3-13.3
		L299.6,597.4z"
                />
                <path
                  class="st6"
                  d="M415.7,558.2l3.5-0.5c22.5-3.8,40.3-21.3,44.3-43.8l0.5-3.5l0,0l1.3-7.2h5l-1.1,6.5l0,0l-0.5,3.7
		c-4,25.6-24.2,45.7-49.9,49.4l-3.8,0.4L415.7,558.2z"
                />
                <path
                  class="st6"
                  d="M415,563.3l0.3-0.9l0.3-1.6l0.1-1.7l-0.1-1"
                />
                <path
                  class="st6"
                  d="M405,571.6c0.8-0.1,1.7-0.3,2.5-0.5l0,0l15.4,41.6h-2.7L405,571.6L405,571.6z"
                />
                <path
                  class="st6"
                  d="M391.4,555c-0.3,0.8-0.5,1.7-0.6,2.5l-0.1,1.6l0.1,1l0,0l-3.9-1.1c-18.6-4.5-38.3-0.8-54.1,10.2l-3.2,2.4
		l-3.4,2.6c-6.9,5-14.6,8.8-22.8,11.4l-4.1,1.1v-5.2l4.1-1.3c6.9-2.3,13.4-5.7,19.4-9.9l3.5-2.6l3.2-2.5
		c16.8-11.8,37.8-15.9,57.8-11.2l3.9,1"
                />
                <path
                  class="st4"
                  d="M299.6,597.4v-78.8l0.1-1.9c0.8-7,6.4-12.4,13.3-13.3l1.8-0.1h207.4l0,0h37.1l1.9,0.1
		c6.9,0.9,12.4,6.3,13.3,13.3l0.1,1.9v78.8l-0.1,1.9c-1,7.7-7.5,13.4-15.2,13.4H314.8l-1.8-0.1c-7-0.8-12.5-6.3-13.3-13.3
		L299.6,597.4z"
                />
                <path
                  class="st4"
                  d="M415.9,558.3l3.5-0.5c22.5-3.8,40.3-21.3,44.3-43.8l0.5-3.5l0,0l1.3-7.2"
                />
                <path
                  class="st4"
                  d="M470.4,503.3l-1.1,6.5l0,0l-0.5,3.7c-4,25.6-24.2,45.7-49.9,49.4l-3.8,0.4"
                />
                <line class="st4" x1="405.2" y1="571.7" x2="420.3" y2="612.7" />
                <line class="st4" x1="407.6" y1="571.1" x2="423" y2="612.7" />
                <path
                  class="st4"
                  d="M391.6,555.1l-3.9-1c-20-4.7-41.1-0.7-57.8,11.2l-3.2,2.5l-3.5,2.6c-5.9,4.2-12.5,7.6-19.4,9.9l-4.1,1.3"
                />
                <path
                  class="st4"
                  d="M299.6,586.9l4.1-1.1c8.1-2.6,15.8-6.4,22.7-11.4l3.4-2.6l3.2-2.4c15.7-11,35.4-14.7,54.1-10.2l3.9,1.1"
                />
                <path
                  class="st7"
                  d="M416,559.3l-0.1-1.6l-0.3-1.6c-1.8-6.7-8.7-10.6-15.4-8.8c-4.9,1.3-8.4,5.4-9.1,10.4l-0.1,1.6l0.1,1.7
		c1,6.9,7.3,11.7,14.2,10.7c5-0.7,9.1-4.3,10.4-9.1l0.3-1.6V559.3z"
                />
                <path
                  class="st5"
                  d="M314.8,485.5l-1.8-0.1c-7-0.8-12.5-6.3-13.3-13.3l-0.1-1.9V258.4l0.1-1.9c0.9-7.7,7.4-13.4,15.1-13.4h170.4
		l1.8,0.1c7.7,0.9,13.5,7.4,13.4,15.2v211.8l-0.1,1.9c-0.8,7-6.3,12.5-13.3,13.3l-1.8,0.1H314.8z"
                />
                <path
                  class="st6"
                  d="M299.6,453.7l4.1-1.4c39.4-14.9,59.2-58.9,44.3-98.3c-0.6-1.6-1.3-3.3-2-4.9l-1.9-3.9l-0.2-0.4l-1.1-3
		c-7.2-20.9,2.6-43.9,22.6-53.3l2.9-1.3l3.2-1.3c15.3-7,26.3-22.8,26.6-39.8l-0.1-3.2h5.1l0.1,3.5c-0.5,19-12.7,36.4-29.9,44.2
		l-3.2,1.4l-2.7,1.1c-17.6,8.3-26.2,28.4-19.9,46.9l1.1,2.8l2.2,4.4l1.9,4.6l0.7,1.6c1.7,3.2,4.4,5.7,7.8,7.1l1.7,0.5l0,0l3.3,0.9
		c10.3,2.4,21.1,1.2,30.5-3.4l3.5-1.9l2.7-1.7c9.4-5.3,20.5-6.4,30.8-3.2l3,1.1l3.1,1.1c12.8,4.2,26.8,3.1,38.8-3l2.9-1.6l2.5-1.4
		c4.3-2.1,8.9-3.5,13.6-4h2.8v5l-2.9,0.2l-2.8,0.4l-2.8,0.7l-2.7,1l-2.6,1.1l-2.5,1.4l-3.2,1.7c-13.2,6.8-28.6,8-42.7,3.4l-3.5-1.3
		l-2.7-1c-7.4-2.3-15.4-2-22.6,0.9l-2.6,1.1l0,0l-0.9,0.6c-2.2,1.8-2.5,5-0.7,7.2c0.4,0.5,1,1,1.6,1.3l1.1,0.4l4.1,1.2
		c13.6,4.2,25.7,12.2,34.9,22.9l2.6,3.3l2.6,3.5c4.1,6,7.3,12.6,9.5,19.6l1.2,4.2l1.3,5.8c2,9.7,3.1,19.6,3.1,29.5l-0.1,5.9
		l-0.1,5.3l0.2,5.3l0.4,5.3l0.7,5.3h-5.2l-0.7-5.3l-0.4-5.4l-0.1-5.4l0.1-5.3l0.1-5.8c0-9.6-1-19.1-3-28.4l-1.3-5.6l-1.2-4
		c-8.7-27.4-33.3-46.8-62-49l-4.2-0.2l-2.9,0.4c-13.2,2.2-24.5,10.8-30.3,22.9l-0.8,2.2l-1,4.4c-6.6,26.4-26.1,47.7-51.7,56.7
		l-4.2,1.4L299.6,453.7z"
                />
                <path
                  class="st7"
                  d="M357,368.6v-0.8l0.3-0.8l0.5-0.6l0.7-0.5l0.8-0.2l0.8,0.1l4.6,1.2l4.6,1.1l0.8,0.3c1.2,0.7,1.6,2.2,0.9,3.4
		c-0.1,0.1-0.1,0.2-0.2,0.3l-0.7,0.6l-2.8,2l-2.7,2.1l-2.5,2.3l-0.7,0.5c-1.3,0.6-2.8,0.1-3.4-1.2c0-0.1,0-0.1-0.1-0.2l-0.1-0.8
		l-0.4-4.4L357,368.6z"
                />
                <path
                  class="st4"
                  d="M398,243.1l0.1,3.2c-0.3,17-11.3,32.7-26.6,39.7l-3.2,1.3l-2.9,1.3c-20,9.4-29.8,32.3-22.6,53.3l1.1,3l0.2,0.4
		l1.9,3.9c17.6,38.3,0.8,83.5-37.5,101.1c-1.6,0.7-3.2,1.4-4.8,2l-4.1,1.4"
                />
                <path
                  class="st4"
                  d="M299.6,459l4.2-1.4c25.6-9,45.1-30.3,51.7-56.7l1-4.4l0.8-2.2c5.8-12.1,17.1-20.7,30.3-22.9l2.9-0.4l4.2,0.2
		c28.7,2.2,53.3,21.5,62,49l1.2,4l1.3,5.6c2,9.3,3,18.9,3,28.4l-0.1,5.8l-0.1,5.3l0.1,5.4l0.4,5.4l0.7,5.3h5.2l-0.7-5.3l-0.4-5.3
		l-0.2-5.3l0.1-5.3l0.1-5.9c0-9.9-1.1-19.8-3.1-29.5l-1.3-5.8l-1.2-4.2c-2.2-6.9-5.4-13.5-9.5-19.6l-2.6-3.5l-2.6-3.3
		c-9.3-10.8-21.4-18.7-34.9-22.9l-4.1-1.2l-1.1-0.4c-2.5-1.3-3.5-4.4-2.2-6.9c0.3-0.6,0.8-1.2,1.3-1.6l0.9-0.6l0,0l2.6-1.1
		c7.2-2.9,15.2-3.2,22.6-0.9l2.7,1l3.5,1.3c14.1,4.7,29.5,3.4,42.7-3.4l3.2-1.7l2.5-1.4l2.6-1.1l2.7-1l2.8-0.7l2.8-0.4l2.9-0.3v-5
		l-2.8,0.1c-4.7,0.5-9.4,1.8-13.6,4l-2.6,1.4l-2.9,1.6c-12,6.1-26,7.2-38.8,3l-3.1-1.1l-3-1.1c-10.2-3.3-21.4-2.1-30.7,3.1l-2.7,1.7
		l-3.5,1.9c-9.5,4.6-20.3,5.8-30.5,3.4l-3.3-0.9l0,0l-1.7-0.5c-3.4-1.4-6.1-3.9-7.8-7.1l-0.7-1.6l-1.9-4.6l-2.2-4.4l-1.1-2.8
		c-6.3-18.4,2.3-38.6,19.9-46.9l2.7-1.1l3.2-1.4c17.2-7.8,29.4-25.2,29.9-44.2l-0.1-3.5"
                />
              </g>
              <path
                class="st5"
                d="M50.5,564.3l-1.3-0.1c-3.7-0.6-6.3-3.8-6.3-7.5v-20.3l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h61.1l1.3,0.1
	c3.6,0.6,6.3,3.8,6.3,7.5v20.3l-0.1,1.3c-0.6,3.2-3,5.6-6.2,6.2l-1.3,0.1L50.5,564.3z"
              />
              <path
                class="st5"
                d="M144.6,564.3l-1.3-0.1c-3.2-0.5-5.7-3-6.2-6.2l-0.1-1.3v-20.3l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h83.9
	l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v20.3L236,558c-0.5,3.2-3,5.7-6.2,6.2l-1.3,0.1L144.6,564.3z"
              />
              <path
                class="st5"
                d="M254,510.9l0.1-1.3c0.5-3.2,3-5.6,6.2-6.2l1.3-0.1h12.5l1.3,0.1c3.6,0.6,6.3,3.8,6.3,7.5v86.5l-0.1,1.9
	c-0.8,7-6.3,12.5-13.3,13.3l-1.8,0.1H144.6l-1.3-0.1c-3.2-0.5-5.6-3-6.2-6.2l-0.1-1.3v-15.3l0.1-1.3c0.5-3.2,3-5.6,6.2-6.2l1.3-0.1
	H254V510.9"
              />
              <polygon
                class="st5"
                points="70.8,364.2 70.5,365 69.9,365.6 69.2,366 68.3,366.1 57.7,366.1 57.7,366.1 57,366 56.3,365.7
	55.7,365.2 55.4,364.5 55.2,363.7 55.2,363 59.9,344.3 59.9,344.3 73.6,291.1 73.9,290.4 74.4,289.8 75.2,289.3 75.9,289.2
	76.7,289.3 86.9,291.9 87.6,292.2 88.2,292.8 88.7,293.4 88.8,294.2 88.8,295 88,297.9 "
              />
              <path
                class="st5"
                d="M84.1,384H54.4l0,0l-1.1,0.1l-1.1,0.4l-1,0.7l-0.8,0.8l-0.7,1l-0.4,1.1l-3.4,16.1h200.4c3.7,0,6.8,2.7,7.5,6.3
	l0.1,1.3V478l0.1,1.3c0.6,3.1,3,5.6,6.2,6.2l1.3,0.1H274l1.3-0.1c3.1-0.6,5.6-3,6.2-6.2l0.1-1.3v-83.6l-3.1-0.5l-3.2-0.2l-3.1-0.1
	l-3.2,0.2l-3.1,0.4l-2.7,0.1c-17.1-0.6-29.8-15.7-25.7-32.6l0.7-2.3l1-3.3l0.7-3.4l0.5-3.4l0.2-3.5v-3.4l-0.2-3.5l-0.3-4
	c-3.8-36.6-36.6-63.2-73.1-59.3c-5.6,0.6-11.1,1.9-16.4,3.8l-3.7,1.5l0,0l-5.3,2.3c-9,3.5-18.3,6-27.8,7.6l-5.7,0.8l-1,4L84.1,384z"
              />
              <line class="st2" x1="254" y1="582.1" x2="147.2" y2="582.1" />
              <rect x="177.7" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M177.7,597.4" />
              <rect x="185.3" y="582.2" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M185.3,597.4" />
              <rect x="193" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M193,597.4" />
              <rect x="200.6" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M200.6,597.4" />
              <rect x="208.2" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M208.2,597.4" />
              <rect x="215.9" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M215.9,597.4" />
              <rect x="238.8" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M238.8,597.4" />
              <rect x="246.4" y="582.2" class="st8" width="7.6" height="15.2" />
              <rect x="254" y="569.4" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="561.8" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="554.2" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="546.6" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="539" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="531.4" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="523.8" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="516.2" class="st8" width="15.2" height="7.6" />
              <path class="st2" d="M246.4,597.4" />
              <rect x="147.2" y="582.2" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M147.2,597.4" />
              <rect x="154.8" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M154.8,597.4" />
              <rect x="162.5" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M162.4,597.4" />
              <rect x="170.1" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M170.1,597.4" />
              <rect x="185.3" y="388.9" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M185.3,404" />
              <rect x="193" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M193,404" />
              <rect x="200.6" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M200.6,404" />
              <rect x="208.2" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M208.2,404" />
              <rect x="215.9" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M215.9,404" />
              <rect x="223.5" y="388.9" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M223.4,404" />
              <rect x="231.2" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M231.2,404" />
              <rect x="147.2" y="388.9" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M147.2,404" />
              <rect x="154.8" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M154.8,404" />
              <rect x="162.5" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M162.4,404" />
              <rect x="170.1" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M170.1,404" />
              <rect x="177.7" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M177.7,404" />
              <rect x="223.5" y="582.2" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M223.4,597.4" />
              <rect x="231.2" y="582.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M231.2,597.4" />
              <rect x="131.9" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M131.9,404" />
              <rect x="139.5" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M139.5,404" />
              <path class="st2" d="M95.5,243.1L95.5,243.1z" />
              <line class="st2" x1="144.6" y1="528.7" x2="228.6" y2="528.7" />
              <rect x="175.2" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M175.2,544" />
              <rect x="182.8" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M182.8,544" />
              <rect x="190.4" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M190.4,544" />
              <rect x="198" y="528.8" class="st8" width="7.7" height="15.2" />
              <path class="st8" d="M198,544" />
              <rect x="205.7" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M205.7,544" />
              <rect x="213.3" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M213.3,544" />
              <rect x="221" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M221,544" />
              <rect x="144.6" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M144.6,544" />
              <rect x="152.3" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M152.3,544" />
              <rect x="159.9" y="528.8" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M159.9,544" />
              <rect x="167.6" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M167.6,544" />
              <line class="st2" x1="144.6" y1="564.3" x2="228.6" y2="564.3" />
              <rect x="175.2" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M175.2,564.3" />
              <rect x="182.8" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M182.8,564.3" />
              <rect x="190.4" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M190.4,564.3" />
              <rect x="198" y="549.1" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M198,564.3" />
              <rect x="205.7" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M205.7,564.3" />
              <rect x="213.3" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M213.3,564.3" />
              <rect x="221" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M221,564.3" />
              <rect x="144.6" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M144.6,564.3" />
              <rect x="152.3" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M152.3,564.3" />
              <rect x="159.9" y="549.1" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M159.9,564.3" />
              <rect x="167.6" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M167.6,564.3" />
              <path
                class="st5"
                d="M144.6,510.8l-1.3-0.1c-3.2-0.5-5.7-3-6.2-6.2l-0.1-1.3v-20.3l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h83.9
	l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v20.3l-0.1,1.3c-0.5,3.2-3,5.7-6.2,6.2l-1.3,0.1H144.6z"
              />
              <line class="st2" x1="144.6" y1="475.2" x2="228.6" y2="475.2" />
              <rect x="175.2" y="475.3" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M175.2,490.5" />
              <rect x="182.8" y="475.3" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M182.8,490.5" />
              <rect x="190.4" y="475.3" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M190.4,490.5" />
              <rect x="198" y="475.3" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M198,490.5" />
              <rect x="205.7" y="475.3" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M205.7,490.5" />
              <rect x="213.3" y="475.3" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M213.3,490.5" />
              <rect x="221" y="475.3" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M221,490.5" />
              <rect x="144.6" y="475.3" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M144.6,490.5" />
              <rect x="152.3" y="475.3" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M152.3,490.5" />
              <rect x="159.9" y="475.3" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M159.9,490.5" />
              <rect x="167.6" y="475.3" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M167.6,490.5" />
              <line class="st2" x1="144.6" y1="510.8" x2="228.6" y2="510.8" />
              <rect x="175.2" y="495.6" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M175.2,510.8" />
              <rect x="182.8" y="495.6" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M182.8,510.8" />
              <rect x="190.4" y="495.6" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M190.4,510.8" />
              <rect x="198" y="495.6" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M198,510.8" />
              <rect x="205.7" y="495.6" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M205.7,510.8" />
              <rect x="213.3" y="495.6" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M213.3,510.8" />
              <rect x="221" y="495.6" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M221,510.8" />
              <rect x="144.6" y="495.6" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M144.6,510.8" />
              <rect x="152.3" y="495.6" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M152.3,510.8" />
              <rect x="159.9" y="495.6" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M159.9,510.8" />
              <rect x="167.6" y="495.6" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M167.6,510.8" />
              <path
                class="st5"
                d="M144.6,457.2l-1.3-0.1c-3.2-0.5-5.7-3-6.2-6.2l-0.1-1.3v-20.3l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h83.9
	l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v20.3l-0.1,1.3c-0.5,3.2-3,5.7-6.2,6.2l-1.3,0.1H144.6z"
              />
              <line class="st2" x1="144.6" y1="421.7" x2="228.6" y2="421.7" />
              <rect x="175.2" y="421.7" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M175.2,436.9" />
              <rect x="182.8" y="421.7" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M182.8,436.9" />
              <rect x="190.4" y="421.7" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M190.4,436.9" />
              <rect x="198" y="421.7" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M198,436.9" />
              <rect x="205.7" y="421.7" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M205.7,436.9" />
              <rect x="213.3" y="421.7" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M213.3,436.9" />
              <rect x="221" y="421.7" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M221,436.9" />
              <rect x="144.6" y="421.7" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M144.6,436.9" />
              <rect x="152.3" y="421.7" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M152.3,436.9" />
              <rect x="159.9" y="421.7" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M159.9,436.9" />
              <rect x="167.6" y="421.7" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M167.6,436.9" />
              <line class="st2" x1="144.6" y1="457.2" x2="228.6" y2="457.2" />
              <rect x="175.2" y="442" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M175.2,457.2" />
              <rect x="182.8" y="442" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M182.8,457.2" />
              <rect x="190.4" y="442" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M190.4,457.2" />
              <rect x="198" y="442" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M198,457.2" />
              <rect x="205.7" y="442" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M205.7,457.2" />
              <rect x="213.3" y="442" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M213.3,457.2" />
              <rect x="221" y="442" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M221,457.2" />
              <rect x="144.6" y="442" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M144.6,457.2" />
              <rect x="152.3" y="442" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M152.3,457.2" />
              <rect x="159.9" y="442" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M159.9,457.2" />
              <rect x="167.6" y="442" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M167.6,457.2" />
              <rect x="73.4" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M73.4,544" />
              <rect x="81" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M81,544" />
              <rect x="88.7" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M88.7,544" />
              <rect x="96.3" y="528.8" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M96.3,544" />
              <rect x="104" y="528.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M104,544" />
              <rect x="65.7" y="528.8" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M65.7,544" />
              <rect x="73.4" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M73.4,564.3" />
              <rect x="81" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M81,564.3" />
              <rect x="88.7" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M88.7,564.3" />
              <rect x="96.3" y="549.1" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M96.3,564.3" />
              <rect x="104" y="549.1" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M104,564.3" />
              <rect x="65.7" y="549.1" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M65.7,564.3" />
              <path
                class="st5"
                d="M43.1,418.7c-8.2,42-14.1,84.5-17.8,127.1l-1.4,17.7l-0.1,3.3c0,24,18.5,44,42.5,45.8l3.3,0.1h42.1l1.3-0.1
	c3.1-0.6,5.6-3,6.2-6.2l0.1-1.3v-15.3l-0.1-1.3c-0.6-3.1-3-5.6-6.2-6.2l-1.3-0.1h-56l-1.8-0.1c-7.6-0.9-13.4-7.4-13.4-15.1
	l2.7-147.9L43.1,418.7z"
              />
              <rect x="58.1" y="528.8" class="st8" width="7.6" height="15.2" />
              <rect x="50.5" y="528.8" class="st8" width="7.6" height="15.2" />
              <rect x="58.1" y="549.1" class="st8" width="7.6" height="15.2" />
              <rect x="50.5" y="549.1" class="st8" width="7.6" height="15.2" />
              <path
                class="st5"
                d="M50.5,510.7l-1.3-0.1c-3.7-0.6-6.3-3.8-6.3-7.5v-20.3l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h61.1l1.3,0.1
	c3.6,0.6,6.3,3.8,6.3,7.5v20.3l-0.1,1.3c-0.5,3.2-3,5.6-6.2,6.2l-1.3,0.1H50.5z"
              />
              <rect x="73.4" y="475.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M73.4,490.4" />
              <rect x="81" y="475.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M81,490.4" />
              <rect x="88.7" y="475.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M88.7,490.4" />
              <rect x="96.3" y="475.2" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M96.3,490.4" />
              <rect x="104" y="475.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M104,490.4" />
              <rect x="65.7" y="475.2" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M65.7,490.4" />
              <rect x="73.4" y="495.5" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M73.4,510.7" />
              <rect x="81" y="495.5" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M81,510.7" />
              <rect x="88.7" y="495.5" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M88.7,510.7" />
              <rect x="96.3" y="495.5" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M96.3,510.7" />
              <rect x="104" y="495.5" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M104,510.7" />
              <rect x="65.7" y="495.5" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M65.7,510.7" />
              <rect x="58.1" y="475.2" class="st8" width="7.6" height="15.2" />
              <rect x="50.5" y="475.2" class="st8" width="7.6" height="15.2" />
              <rect x="58.1" y="495.5" class="st8" width="7.6" height="15.2" />
              <rect x="50.5" y="495.5" class="st8" width="7.6" height="15.2" />
              <path
                class="st5"
                d="M50.5,457.4l-1.3-0.1c-3.7-0.6-6.3-3.8-6.3-7.5v-20.4l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h61.1l1.3,0.1
	c3.6,0.6,6.3,3.8,6.3,7.5v20.3l-0.1,1.3c-0.5,3.2-3,5.6-6.2,6.2l-1.3,0.1H50.5V457.4z"
              />
              <rect x="73.4" y="421.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M73.4,437" />
              <rect x="81" y="421.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M81,437" />
              <rect x="88.7" y="421.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M88.7,437" />
              <rect x="96.3" y="421.8" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M96.3,437" />
              <rect x="104" y="421.8" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M104,437" />
              <rect x="65.7" y="421.8" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M65.7,437" />
              <rect x="73.4" y="442.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M73.4,457.4" />
              <rect x="81" y="442.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M81,457.4" />
              <rect x="88.7" y="442.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M88.7,457.4" />
              <rect x="96.3" y="442.2" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M96.3,457.4" />
              <rect x="104" y="442.2" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M104,457.4" />
              <rect x="65.7" y="442.2" class="st8" width="7.7" height="15.2" />
              <path class="st2" d="M65.7,457.4" />
              <rect x="58.1" y="421.8" class="st8" width="7.6" height="15.2" />
              <rect x="50.5" y="421.8" class="st8" width="7.6" height="15.2" />
              <rect x="58.1" y="442.2" class="st8" width="7.6" height="15.2" />
              <rect x="50.5" y="442.2" class="st8" width="7.6" height="15.2" />
              <rect
                x="96.3"
                y="344.9"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -266.2789 361.5404)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <rect
                x="98.2"
                y="337.7"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -257.889 357.9244)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <rect
                x="100.1"
                y="330.2"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -249.1932 354.1755)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <polygon
                class="st8"
                points="112.3,336.1 114.2,328.7 99.4,324.9 97.5,332.2 "
              />
              <rect
                x="103.9"
                y="315.6"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -232.1684 346.8112)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <polygon
                class="st8"
                points="116.1,321.3 118,313.9 103.2,310.1 101.3,317.5 "
              />
              <polygon
                class="st8"
                points="118,313.9 119.9,306.5 105.2,302.7 103.2,310.1 "
              />
              <rect
                x="88.8"
                y="374.3"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -300.4519 376.289)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <polygon
                class="st8"
                points="100.9,380.4 102.8,373 88,369.2 86.1,376.6 "
              />
              <polygon
                class="st8"
                points="102.8,372.9 104.7,365.5 90,361.7 88,369.1 "
              />
              <polygon
                class="st8"
                points="104.7,365.5 106.6,358.1 91.8,354.3 90,361.7 "
              />
              <rect
                x="71.9"
                y="306.3"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -247.2151 308.9261)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <rect
                x="73.8"
                y="299"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -238.6906 305.2701)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <rect
                x="75.8"
                y="291.6"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -230.0019 301.6158)"
                class="st10"
                width="7.6"
                height="15.3"
              />
              <rect
                x="64.1"
                y="336.4"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -282.1909 323.9739)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <rect
                x="66.2"
                y="329"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -273.4417 320.3693)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <polygon
                class="st8"
                points="78.4,334.9 80.3,327.4 65.6,323.7 63.6,331 "
              />
              <polygon
                class="st8"
                points="80.2,327 82.1,319.7 67.4,315.8 65.5,323.3 "
              />
              <rect
                x="109.6"
                y="293.3"
                transform="matrix(0.2496 -0.9684 0.9684 0.2496 -206.3234 335.6907)"
                class="st9"
                width="7.6"
                height="15.3"
              />
              <rect x="124.3" y="388.9" class="st8" width="7.6" height="15.2" />
              <path class="st2" d="M124.3,404" />
              <path
                class="st5"
                d="M266.5,243.1l1.8,0.1c7,0.8,12.5,6.3,13.3,13.3l0.1,1.9v130.8l-3.2-0.5l-3.3-0.2H272l-3.3,0.2l-3.2,0.4h-2.1
	c-13.7-0.5-24-12.5-20.8-26.2l0.6-2l1.1-3.7l0.8-3.7l0.5-3.8l0.3-3.8v-3.8l-0.2-3.8l-0.3-4c-4-39.4-39.3-68.1-78.7-64
	c-6.1,0.6-12.2,2-17.9,4.2L145,276l0,0l-4.9,2c-8.2,3.2-16.7,5.6-25.4,7.1l-5.2,0.9v-1.4c-0.2-2.8-1.9-5.2-4.4-6.4l-1.3-0.4
	l-15.1-3.9l0,0l-1.3-0.5c-3-1.4-4.8-4.6-4.4-7.9l0.3-1.3l5-15.9l0.5-1.3c1.1-2,3.1-3.5,5.4-3.9l1.3-0.1L266.5,243.1z"
              />
              <rect x="254" y="462.2" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="454.5" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="446.9" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="439.2" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="431.6" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="424" class="st8" width="15.2" height="7.6" />
              <rect x="254" y="416.3" class="st8" width="15.2" height="7.6" />
              <g id="专用停车场">
                <path
                  class="st5"
                  d="M711.2,485.5H533.5l-1.8-0.1c-7-0.8-12.5-6.3-13.3-13.3l-0.1-1.9V258.4l0.1-1.9c0.8-7,6.3-12.5,13.3-13.3
		l1.8-0.1h339.7l1.9,0.1c7,0.8,12.5,6.3,13.4,13.3l0.1,1.9v28.2l-0.1,1.3c-0.6,3.6-3.7,6.3-7.3,6.4h-24.5v15.2h24.5l1.3,0.1
		c3.1,0.5,5.6,3,6.1,6.2l0.1,1.3v153l-0.1,1.9c-0.8,7-6.3,12.5-13.3,13.3l-1.9,0.1H698.7"
                />
                <polyline
                  class="st3"
                  points="862.5,302 866.4,296.9 866.4,307.1 	"
                />
                <line class="st2" x1="546" y1="385.6" x2="546" y2="303.4" />
                <line class="st2" x1="834.1" y1="450.4" x2="669.2" y2="450.4" />
                <line class="st2" x1="856.6" y1="418.6" x2="856.6" y2="406.6" />
                <line class="st4" x1="541.2" y1="266.3" x2="541.2" y2="243.1" />
                <polyline
                  class="st4"
                  points="578.4,459.6 599,459.6 599,442.9 	"
                />
                <line class="st4" x1="578.4" y1="471.9" x2="578.4" y2="459.6" />
                <line class="st4" x1="584" y1="243.1" x2="584" y2="267.7" />
                <line class="st2" x1="698.9" y1="275.6" x2="816.1" y2="275.6" />
                <polyline
                  class="st4"
                  points="518.3,465 556.2,465 556.2,471.9 578.4,471.9 556.5,471.9 556.5,485.5 	"
                />
                <rect
                  x="650.8"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M650.8,258.4" />
                <rect
                  x="658.4"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M658.4,258.4" />
                <rect x="666" y="243.1" class="st8" width="7.7" height="15.3" />
                <path class="st2" d="M666,258.4" />
                <rect
                  x="673.7"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M673.7,258.4" />
                <rect
                  x="681.3"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M681.3,258.4" />
                <rect x="689" y="243.1" class="st8" width="7.6" height="15.3" />
                <path class="st2" d="M689,258.4" />
                <rect
                  x="696.6"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M696.6,258.4" />
                <rect
                  x="612.6"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M612.6,258.4" />
                <rect
                  x="620.3"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M620.3,258.4" />
                <rect
                  x="627.9"
                  y="243.1"
                  class="st8"
                  width="7.7"
                  height="15.3"
                />
                <path class="st2" d="M627.9,258.4" />
                <rect
                  x="635.6"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M635.6,258.4" />
                <rect
                  x="643.2"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M643.2,258.4" />
                <rect
                  x="597.4"
                  y="243.1"
                  class="st8"
                  width="7.6"
                  height="15.3"
                />
                <path class="st2" d="M597.4,258.4" />
                <rect x="605" y="243.1" class="st8" width="7.6" height="15.3" />
                <path class="st2" d="M605,258.4" />
                <rect
                  x="720.3"
                  y="247.1"
                  class="st2"
                  width="12.7"
                  height="12.7"
                />
                <path class="st2" d="M720.3,247" />
                <rect
                  x="733.1"
                  y="247.1"
                  class="st2"
                  width="12.7"
                  height="12.7"
                />
                <path class="st2" d="M733.1,247" />
                <polyline
                  class="st4"
                  points="669.2,450.4 669.2,459.6 689.8,459.6 689.8,471.9 711.2,471.9 711.2,485.5 	"
                />
                <path
                  class="st7"
                  d="M836.9,323.3v30.8h4.9v19.1h-4.9v26.6h4.5v6.8h15.1v43.8H669.2v-7.5h-70.3v-2h-7.6l0,0l-3.9,2.3l-4.1,2.1
		c-15,7.2-36.7,9.6-50.2-2.2l-2.2-2.3l-1.9-2.6c-8-13.5-0.2-29.5,10.1-39.2l3.3-2.9l3.5-2.7v-89.9h-5.5v-7h-11.6v-30.2h13.5v1.4
		h130.3v3.1h2v4.9h141.5v5.1h19.5v5.1h8.2v-4h12.8v44.4H855v-1h-6.6v1h-1.8v-2.9L836.9,323.3"
                />
              </g>
              <g id="新能源停车场">
                <path
                  class="st5"
                  d="M888.5,22.9v202.5H804l0,0H580.3V28.1l0.2-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1L888.5,22.9"
                />
                <polygon
                  class="st7"
                  points="590,54.5 590,172.8 691.9,172.8 691.9,180.3 714.3,180.3 714.3,177.7 728,177.7 728,172.8
		805.4,172.8 805.4,180.3 856.9,180.3 856.9,54.5 	"
                />
                <line class="st4" x1="607.7" y1="217.7" x2="607.7" y2="225.4" />
                <line class="st4" x1="606.2" y1="217.7" x2="606.2" y2="225.4" />
                <line class="st4" x1="629" y1="217.7" x2="629" y2="225.4" />
                <line class="st4" x1="627.5" y1="217.7" x2="627.5" y2="225.4" />
                <line class="st4" x1="650.4" y1="217.7" x2="650.4" y2="225.4" />
                <line class="st4" x1="648.9" y1="217.7" x2="648.9" y2="225.4" />
                <line class="st4" x1="671.8" y1="217.7" x2="671.8" y2="225.4" />
                <line class="st4" x1="670.2" y1="217.7" x2="670.2" y2="225.4" />
                <line class="st4" x1="691.7" y1="219.3" x2="691.7" y2="225.4" />
                <line class="st4" x1="693.2" y1="219.3" x2="693.2" y2="225.4" />
                <line class="st4" x1="714.5" y1="217.7" x2="714.5" y2="225.4" />
                <line class="st4" x1="713" y1="217.7" x2="713" y2="225.4" />
                <line class="st4" x1="735.9" y1="217.7" x2="735.9" y2="225.4" />
                <line class="st4" x1="734.4" y1="217.7" x2="734.4" y2="225.4" />
                <line class="st4" x1="757.3" y1="217.7" x2="757.3" y2="225.4" />
                <line class="st4" x1="755.7" y1="217.7" x2="755.7" y2="225.4" />
                <line class="st4" x1="778.7" y1="217.7" x2="778.7" y2="225.4" />
                <line class="st4" x1="777.1" y1="217.7" x2="777.1" y2="225.4" />
                <rect
                  x="659.9"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M659.9,217.7" />
                <rect
                  x="667.5"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M667.4,217.7" />
                <rect
                  x="675.1"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M675.1,217.7" />
                <rect
                  x="682.7"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M682.7,217.7" />
                <rect
                  x="694.4"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M694.4,217.7" />
                <rect x="702" y="202.5" class="st8" width="7.7" height="15.2" />
                <path class="st2" d="M702,217.7" />
                <rect
                  x="709.7"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M709.7,217.7" />
                <rect
                  x="621.7"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M621.7,217.7" />
                <rect
                  x="629.3"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M629.3,217.7" />
                <rect
                  x="636.9"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M636.9,217.7" />
                <rect
                  x="644.6"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M644.6,217.7" />
                <rect
                  x="652.2"
                  y="202.5"
                  class="st8"
                  width="7.7"
                  height="15.2"
                />
                <path class="st2" d="M652.2,217.7" />
                <rect
                  x="606.4"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M606.4,217.7" />
                <rect x="614" y="202.5" class="st8" width="7.7" height="15.2" />
                <path class="st2" d="M614,217.7" />
                <rect
                  x="770.7"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M770.7,217.7" />
                <rect
                  x="778.4"
                  y="202.5"
                  class="st8"
                  width="7.7"
                  height="15.2"
                />
                <path class="st2" d="M778.4,217.7" />
                <rect x="786" y="202.5" class="st8" width="7.6" height="15.2" />
                <path class="st2" d="M786,217.7" />
                <rect
                  x="793.7"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M793.7,217.7" />
                <rect
                  x="732.6"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M732.6,217.7" />
                <rect
                  x="740.2"
                  y="202.5"
                  class="st8"
                  width="7.7"
                  height="15.2"
                />
                <path class="st2" d="M740.2,217.7" />
                <rect
                  x="747.9"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M747.9,217.7" />
                <rect
                  x="755.5"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M755.5,217.7" />
                <rect
                  x="763.1"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M763.1,217.7" />
                <rect
                  x="717.3"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <path class="st2" d="M717.3,217.7" />
                <rect x="725" y="202.5" class="st8" width="7.6" height="15.2" />
                <path class="st2" d="M725,217.7" />
                <rect
                  x="598.8"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="591.2"
                  y="202.5"
                  class="st8"
                  width="7.6"
                  height="15.2"
                />
                <rect
                  x="583.5"
                  y="202.5"
                  class="st8"
                  width="7.7"
                  height="15.2"
                />
                <line class="st4" x1="580.4" y1="219.3" x2="580.3" y2="219.3" />
                <polyline
                  class="st4"
                  points="580.4,219.3 804,219.3 804,225.4 	"
                />
              </g>
              <g id="员工停车场">
                <path
                  class="st5"
                  d="M927.9,176.7v50.9l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.2l-0.5,0.1V281l0.5,0.1l0.4,0.2
		l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1v50.9l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.2l-0.5,0.1
		v50.9l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1v50.9l0.5,0.1l0.4,0.2l0.3,0.4l0.1,0.5l-0.1,0.5
		l-0.3,0.4l-0.4,0.3l-0.5,0.1v50.9l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.2l-0.5,0.1v50.9l0.5,0.1l0.4,0.2
		l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1v59.5l-0.1,0.8l-0.4,0.7l-0.6,0.6l-0.7,0.4l-0.8,0.1l0,0h-14l-1.1-0.1l-1-0.4
		l-1-0.6l-0.8-0.8l-0.6-1l-0.4-1.1l-0.1-1.1V176.8l0.1-1.1l0.4-1.1l0.6-1l0.8-0.8l1-0.6l1-0.4l1.1-0.1h11.4l1.1,0.1l1.1,0.4l1,0.6
		l0.8,0.8l0.7,1l0.4,1.1L927.9,176.7"
                />
                <line class="st4" x1="959.7" y1="227.5" x2="945.8" y2="227.5" />
                <line class="st4" x1="945.8" y1="230.1" x2="959.7" y2="230.1" />
                <line class="st4" x1="959.7" y1="280.9" x2="945.8" y2="280.9" />
                <line class="st4" x1="945.8" y1="283.5" x2="959.7" y2="283.5" />
                <line class="st4" x1="959.7" y1="334.3" x2="945.8" y2="334.3" />
                <line class="st4" x1="945.8" y1="336.9" x2="959.7" y2="336.9" />
                <line class="st4" x1="959.7" y1="387.8" x2="945.8" y2="387.8" />
                <line class="st4" x1="945.8" y1="390.3" x2="959.7" y2="390.3" />
                <line class="st4" x1="959.7" y1="441.2" x2="945.8" y2="441.2" />
                <line class="st4" x1="945.8" y1="443.8" x2="959.7" y2="443.8" />
                <line class="st4" x1="959.7" y1="494.7" x2="945.8" y2="494.7" />
                <line class="st4" x1="945.8" y1="497.2" x2="959.7" y2="497.2" />
                <line class="st4" x1="959.7" y1="548.1" x2="945.8" y2="548.1" />
                <line class="st4" x1="945.8" y1="550.6" x2="959.7" y2="550.6" />
                <rect x="914" y="176.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="182.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="189.3" class="st8" width="14" height="6.4" />
                <rect x="914" y="195.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="201.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="208.2" class="st8" width="14" height="6.4" />
                <rect x="914" y="214.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="220.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="230.1" class="st8" width="14" height="6.4" />
                <rect x="914" y="236.5" class="st8" width="14" height="6.4" />
                <rect x="914" y="242.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="249.2" class="st8" width="14" height="6.4" />
                <rect x="914" y="255.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="261.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="268.3" class="st8" width="14" height="6.4" />
                <rect x="914" y="274.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="283.5" class="st8" width="14" height="6.4" />
                <rect x="914" y="289.8" class="st8" width="14" height="6.4" />
                <rect x="914" y="296.1" class="st8" width="14" height="6.4" />
                <rect x="914" y="302.4" class="st8" width="14" height="6.4" />
                <rect x="914" y="308.7" class="st8" width="14" height="6.4" />
                <rect x="914" y="315" class="st8" width="14" height="6.4" />
                <rect x="914" y="321.3" class="st8" width="14" height="6.4" />
                <rect x="914" y="327.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="336.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="343.3" class="st8" width="14" height="6.4" />
                <rect x="914" y="349.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="355.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="362.2" class="st8" width="14" height="6.4" />
                <rect x="914" y="368.5" class="st8" width="14" height="6.4" />
                <rect x="914" y="374.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="381.2" class="st8" width="14" height="6.4" />
                <rect x="914" y="390.3" class="st8" width="14" height="6.4" />
                <rect x="914" y="396.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="403" class="st8" width="14" height="6.4" />
                <rect x="914" y="409.3" class="st8" width="14" height="6.4" />
                <rect x="914" y="415.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="422" class="st8" width="14" height="6.4" />
                <rect x="914" y="428.3" class="st8" width="14" height="6.4" />
                <rect x="914" y="434.7" class="st8" width="14" height="6.4" />
                <rect x="914" y="443.7" class="st8" width="14" height="6.4" />
                <rect x="914" y="450.1" class="st8" width="14" height="6.4" />
                <rect x="914" y="456.5" class="st8" width="14" height="6.4" />
                <rect x="914" y="462.8" class="st8" width="14" height="6.4" />
                <rect x="914" y="469.2" class="st8" width="14" height="6.4" />
                <rect x="914" y="475.5" class="st8" width="14" height="6.4" />
                <rect x="914" y="481.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="488.2" class="st8" width="14" height="6.4" />
                <rect x="914" y="497.1" class="st8" width="14" height="6.4" />
                <rect x="914" y="503.5" class="st8" width="14" height="6.4" />
                <rect x="914" y="509.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="516.3" class="st8" width="14" height="6.4" />
                <rect x="914" y="522.7" class="st8" width="14" height="6.4" />
                <rect x="914" y="529.1" class="st8" width="14" height="6.4" />
                <rect x="914" y="535.5" class="st8" width="14" height="6.4" />
                <rect x="914" y="541.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="550.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="556.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="563.2" class="st8" width="14" height="6.4" />
                <rect x="914" y="569.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="575.9" class="st8" width="14" height="6.4" />
                <rect x="914" y="582.3" class="st8" width="14" height="6.4" />
                <rect x="914" y="588.6" class="st8" width="14" height="6.4" />
                <rect x="914" y="595" class="st8" width="14" height="6.4" />
                <rect x="914" y="601.3" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="183" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="189.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="195.8" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="202.2" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="208.5" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="214.9" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="221.3" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="230.1" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="236.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="242.8" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="249.1" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="255.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="261.7" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="268" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="274.3" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="283.5" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="289.8" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="296.1" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="302.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="308.8" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="315.1" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="321.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="327.7" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="336.9" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="343.2" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="349.5" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="355.9" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="362.2" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="368.5" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="374.9" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="381.2" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="390.3" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="396.6" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="403" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="409.3" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="415.7" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="422" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="428.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="434.7" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="443.7" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="450.1" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="456.5" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="462.9" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="469.2" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="475.6" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="482" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="488.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="497.1" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="503.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="509.8" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="516.1" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="522.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="528.7" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="535.1" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="541.4" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="550.5" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="556.9" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="563.3" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="569.6" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="576" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="582.3" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="588.7" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="595.1" class="st8" width="14" height="6.4" />
                <rect x="945.9" y="601.4" class="st8" width="14" height="6.4" />
                <line class="st4" x1="927.9" y1="227.5" x2="914" y2="227.5" />
                <line class="st4" x1="927.9" y1="230.1" x2="914" y2="230.1" />
                <line class="st4" x1="927.9" y1="280.9" x2="914" y2="280.9" />
                <line class="st4" x1="927.9" y1="283.5" x2="914" y2="283.5" />
                <line class="st4" x1="927.9" y1="334.3" x2="914" y2="334.3" />
                <line class="st4" x1="927.9" y1="336.9" x2="914" y2="336.9" />
                <line class="st4" x1="927.9" y1="387.8" x2="914" y2="387.8" />
                <line class="st4" x1="927.9" y1="390.3" x2="914" y2="390.3" />
                <line class="st4" x1="927.9" y1="441.2" x2="914" y2="441.2" />
                <line class="st4" x1="927.9" y1="443.8" x2="914" y2="443.8" />
                <line class="st4" x1="927.9" y1="494.7" x2="914" y2="494.7" />
                <line class="st4" x1="927.9" y1="497.2" x2="914" y2="497.2" />
                <line class="st4" x1="927.9" y1="548.1" x2="914" y2="548.1" />
                <line class="st4" x1="927.9" y1="550.6" x2="914" y2="550.6" />
              </g>
              <g id="临时停车场">
                <path class="st8" d="M950.9,82V68h6.4v14H950.9z" />
                <path class="st8" d="M957.2,82V68h6.4v14H957.2z" />
                <path class="st8" d="M963.5,82V68h6.4v14H963.5z" />
                <path class="st8" d="M969.9,82V68h6.4v14H969.9z" />
                <path class="st8" d="M976.2,82V68h6.4v14H976.2z" />
                <path class="st8" d="M982.5,82V68h6.4v14H982.5z" />
                <path class="st8" d="M988.9,82V68h6.4v14H988.9z" />
                <path class="st8" d="M995.2,82V68h6.4v14H995.2z" />
                <path class="st8" d="M1001.6,82V68h6.4v14H1001.6z" />
                <path class="st8" d="M1007.9,82V68h6.4v14H1007.9z" />
                <path class="st8" d="M1014.2,82V68h6.4v14H1014.2z" />
                <path class="st8" d="M1020.6,82V68h6.4v14H1020.6z" />
                <path class="st8" d="M1026.9,82V68h6.4v14H1026.9z" />
                <path class="st8" d="M1033.3,82V68h6.4v14H1033.3z" />
                <rect x="1057.6" y="94.1" class="st8" width="14" height="6.4" />
                <rect
                  x="1057.6"
                  y="100.4"
                  class="st8"
                  width="14"
                  height="6.4"
                />
                <rect
                  x="1057.6"
                  y="106.8"
                  class="st8"
                  width="14"
                  height="6.4"
                />
                <rect
                  x="1057.6"
                  y="113.1"
                  class="st8"
                  width="14"
                  height="6.4"
                />
                <rect
                  x="1057.6"
                  y="119.5"
                  class="st8"
                  width="14"
                  height="6.4"
                />
                <rect
                  x="1057.6"
                  y="125.9"
                  class="st8"
                  width="14"
                  height="6.4"
                />
                <rect
                  x="1057.6"
                  y="132.2"
                  class="st8"
                  width="14"
                  height="6.4"
                />
                <rect
                  x="1057.6"
                  y="138.6"
                  class="st8"
                  width="14"
                  height="6.4"
                />
                <path
                  class="st11"
                  d="M945.8,157.6v-20.4l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1h89l1.1,0.1c2.3,0.5,4,2.5,4,4.9v20.4l-0.1,1.1
		c-0.4,1.9-1.9,3.4-3.8,3.8l-1.1,0.1h-89l-1.1-0.1c-1.9-0.4-3.4-1.9-3.8-3.8L945.8,157.6z"
                />
                <line
                  class="st4"
                  x1="1033.5"
                  y1="146.1"
                  x2="1033.5"
                  y2="132.1"
                />
                <path
                  class="st4"
                  d="M945.8,157.6v-20.4l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1h89l1.1,0.1c2.3,0.5,4,2.5,4,4.9v20.4l-0.1,1.1
		c-0.4,1.9-1.9,3.4-3.8,3.8l-1.1,0.1h-89l-1.1-0.1c-1.9-0.4-3.4-1.9-3.8-3.8L945.8,157.6z"
                />
                <path
                  class="st5"
                  d="M945.8,105.4l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1h89l1.1,0.1c2.3,0.5,4,2.5,4,4.9v3.8l-0.1,1.1
		c-0.4,1.9-1.9,3.4-3.8,3.8l-1.1,0.1h-89l-1.1-0.1c-1.9-0.4-3.4-1.9-3.8-3.8l-0.1-1.1L945.8,105.4z"
                />
                <path class="st8" d="M957.2,114.3v-14h6.4v14H957.2z" />
                <path class="st8" d="M963.6,114.3v-14h6.4v14H963.6z" />
                <path class="st8" d="M969.9,114.3v-14h6.4v14H969.9z" />
                <path class="st8" d="M976.2,114.3v-14h6.4v14H976.2z" />
                <path class="st8" d="M982.6,114.3v-14h6.4v14H982.6z" />
                <path class="st8" d="M988.9,114.3v-14h6.4v14H988.9z" />
                <path class="st8" d="M995.2,114.3v-14h6.4v14H995.2z" />
                <path class="st8" d="M1001.6,114.3v-14h6.4v14H1001.6z" />
                <path class="st8" d="M1007.9,114.3v-14h6.4v14H1007.9z" />
                <path class="st8" d="M1014.2,114.3v-14h6.4v14H1014.2z" />
                <path class="st8" d="M1020.6,114.3v-14h6.4v14H1020.6z" />
                <path class="st8" d="M1026.9,114.3v-14h6.4v14H1026.9z" />
                <polygon
                  class="st8"
                  points="950.9,132.1 950.9,146.1 950.9,146.1 957.2,146.1 957.2,132.1 	"
                />
                <polygon
                  class="st8"
                  points="957.2,132.1 957.2,146.1 957.2,146.1 963.6,146.1 963.6,132.1 	"
                />
                <polygon
                  class="st8"
                  points="963.6,132.1 963.6,146.1 963.6,146.1 969.9,146.1 969.9,132.1 	"
                />
                <polygon
                  class="st8"
                  points="969.9,132.1 969.9,146.1 969.9,146.1 976.3,146.1 976.3,132.1 	"
                />
                <polygon
                  class="st8"
                  points="976.3,132.1 976.3,146.1 976.3,146.1 982.6,146.1 982.6,132.1 	"
                />
                <polygon
                  class="st8"
                  points="982.6,132.1 982.6,146.1 982.6,146.1 989,146.1 989,132.1 	"
                />
                <polygon
                  class="st8"
                  points="989,132.1 989,146.1 989,146.1 995.3,146.1 995.3,132.1 	"
                />
                <polygon
                  class="st8"
                  points="995.3,132.1 995.3,146.1 995.3,146.1 1001.7,146.1 1001.7,132.1 	"
                />
                <polygon
                  class="st8"
                  points="1001.7,132.1 1001.7,146.1 1001.7,146.1 1008.1,146.1 1008.1,132.1 	"
                />
                <polygon
                  class="st8"
                  points="1027.1,132.1 1027.1,146.1 1027.1,146.1 1033.5,146.1 1033.5,132.1 	"
                />
                <polygon
                  class="st8"
                  points="1008.1,132.1 1008.1,146.1 1008.1,146.1 1014.4,146.1 1014.4,132.1 	"
                />
                <polygon
                  class="st8"
                  points="1014.4,132.1 1014.4,146.1 1014.4,146.1 1020.8,146.1 1020.8,132.1 	"
                />
                <polygon
                  class="st8"
                  points="1020.8,132.1 1020.8,146.1 1020.8,146.1 1027.1,146.1 1027.1,132.1 	"
                />
              </g>
              <g id="外围线条">
                <path
                  class="st12"
                  d="M906.3,5.1v143.5l0.1,1.1l0.4,1.1l0.6,1l0.8,0.8l1,0.7l1,0.4l1.1,0.1h14l0.8-0.1l0.7-0.4l0.6-0.6l0.4-0.7
		l0.1-0.8V87.6l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1l0,0h119.6c2.8,0,5,2.2,5,5v0.1V164l-0.1,1.3c-0.6,3.2-3,5.6-6.2,6.2
		l-1.3,0.1h-99.1l-1.1,0.1c-1.9,0.4-3.4,1.9-3.8,3.8l-0.1,1.1v50.9l-0.5,0.1l-0.4,0.3l-0.3,0.4l-0.1,0.5l0.1,0.5l0.3,0.4l0.4,0.2
		l0.5,0.1v50.9l-0.5,0.1l-0.4,0.2l-0.3,0.4l-0.1,0.5l0.1,0.5l0.3,0.4l0.4,0.3l0.5,0.1v50.9l-0.5,0.1l-0.4,0.3l-0.3,0.4l-0.1,0.5
		l0.1,0.5l0.3,0.4l0.4,0.2l0.5,0.1v50.9l-0.5,0.1l-0.4,0.3l-0.3,0.4l-0.1,0.5l0.1,0.5l0.3,0.4l0.4,0.3l0.5,0.1v50.9l-0.5,0.1
		l-0.4,0.2l-0.3,0.4l-0.1,0.5l0.1,0.5l0.3,0.4l0.4,0.3l0.5,0.1v50.9l-0.5,0.1l-0.4,0.3l-0.3,0.4l-0.1,0.5l0.1,0.5l0.3,0.4l0.4,0.2
		l0.5,0.1V548l-0.5,0.1l-0.4,0.2l-0.3,0.4l-0.1,0.5l0.1,0.5l0.3,0.4l0.4,0.3l0.5,0.1v72.3l-0.1,1.4c-0.6,3.1-3.1,5.6-6.2,6.2
		l-1.3,0.1H708.9l-1.8,0.1c-7,0.8-12.5,6.3-13.3,13.3l-0.1,1.9v61.7H574.5v-61.8l-0.1-1.9c-1-7.6-7.5-13.4-15.2-13.4H69.5l-3.9-0.1
		C31.7,628.2,5.5,599.9,5.9,566l0.2-3.8l1.3-17.3c7.1-80.6,21.9-160.4,44.2-238.1l4.9-16.6l5.8-18.5l6-18.4l0.3-1.3
		c0.6-4.1-2.1-8-6.2-8.7l-1.3-0.1H32.5l0,0l6.1-17.8l0,0h516.3c2.8,0,5.1-2.3,5.1-5.1V17.9l0.1-1.7c0.7-5.7,5.3-10.2,11-10.9
		l1.6-0.1L906.3,5.1L906.3,5.1z"
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
          <div class="rightChartCenter" id="paymentIncomeAnalysisID">
            <!-- 支付收入分析 -->
            <Xchart
              id="paymentIncomeAnalysisID"
              :option="paymentIncomeAnalysisOption"
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
import DtLineChart from "@/components/charts/LineChart";

export default {
  // 组件导入
  components: {
    Xchart,
    Xchart3d,
    DtLineChart
  },
  data() {
    return {
      chartData: {
        //必须写全
        xCategories: [],
        seriesData: []
      },
      //用户名
      userName: "",
      //停车场列表
      parkingLotList: [
        { name: "", code: "", totalNumber: 0, bookNumber: 0, emptyNumber: 0 },
        { name: "", code: "", totalNumber: 0, bookNumber: 0, emptyNumber: 0 },
        { name: "", code: "", totalNumber: 0, bookNumber: 0, emptyNumber: 0 },
        { name: "", code: "", totalNumber: 0, bookNumber: 0, emptyNumber: 0 },
        { name: "", code: "", totalNumber: 0, bookNumber: 0, emptyNumber: 0 }
      ],
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
      washCarSevenDaysAnalysisData: [],
      washCarSevenDaysAnalysisXz: [],

      //近七日洗车收费金额
      washChargeInSevenDaysOption: {},
      washChargeInSevenDaysXz: [],
      washChargeInSevenDaysJINGWash: [],
      washChargeInSevenDaysPUWash: [],
      washChargeInSevenDaysKUAIWash: [],

      // 支付方式
      paymentIncomeAnalysiID: [],
      paymentIncomeAnalysisOption: {},
      paymentIncomeAnalysisZFB: [],
      paymentIncomeAnalysisWX: [],
      paymentIncomeAnalysisETC: [],
      paymentIncomeAnalysisCash: [],
      paymentIncomeAnalysisOther: [],

      //公共停车场剩余车位数
      publicLeftPort: 312,
      //员工停车场剩余车位数
      staffLeftPort: 120,

      //精洗 普洗 快洗
      poacherWash: 10,
      garmentWash: 20,
      fastWash: 30,

      //中间总收入停车收入
      totalIncome: 1300,
      parkIncome: 1000,
      washIncome: 300,

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
    //剩余车位数
    this.queryParkSpace();
    //精洗普洗快洗次数
    this.queryCarWashTypeCount();
    //中间总收入停车场收入洗车收入
    this.queryFees();
    //停车场名称查询
    this.queryParkLotList();
    // 总停车数量图表
    this.queryParkOptByParkCount();
    // 平均停车时长图表
    this.queryParkOptByAvgParkDuration();
    // 车位利用率图表
    this.queryParkOptByParkSpaceUsedRate();
    // 车位周转率图表
    this.queryParkOptByParkSpaceTurnoverRate();
    // 支付方式图表
    this.queryPayTypeAmountPrecent();
    //自助洗车按月收入分析图表
    this.querychargeAmountTimes();
    //洗车机近七日报警趋势分析
    this.handleWashCarSevenDaysAnalysis();
    //近七日洗车收费金额
    this.handleWashCarIncomeSevenDays();

    // // 添加地图图标方式
    // this.initMap();
    // // 添加图标的方法
    // this.addMoudel();
    //充电桩图标
    // this.countChargeFee();
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
    //退出
    loginOut() {
      this.$homePage.loginOut(1).then(res => {
        localStorage.removeItem("userToken");
        this.$router.push("/");
      });
    },
    //停车场名称
    queryParkLotList() {
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park"
      };
      this.$homePage.queryDict(param).then(res => {
        this.parkingLotList = res.resultEntity;
      });
    },
    //停车场剩余车位数
    queryParkSpace() {
      this.$homePage.queryEmptySpace({}).then(res => {
        console.log(res);
        this.parkingLotList[0].bookNumber =
          res.resultEntity[0]["BM01"].bookNumber;
        this.parkingLotList[0].emptyNumber =
          res.resultEntity[0]["BM01"].emptyNumber;
        this.parkingLotList[0].totalNumber =
          res.resultEntity[0]["BM01"].totalNumber;

        this.parkingLotList[1].bookNumber =
          res.resultEntity[1]["BMK01"].bookNumber;
        this.parkingLotList[1].emptyNumber =
          res.resultEntity[1]["BMK01"].emptyNumber;
        this.parkingLotList[1].totalNumber =
          res.resultEntity[1]["BMK01"].totalNumber;

        this.parkingLotList[2].bookNumber =
          res.resultEntity[2]["HZH01"].bookNumber;
        this.parkingLotList[2].emptyNumber =
          res.resultEntity[2]["HZH01"].emptyNumber;
        this.parkingLotList[2].totalNumber =
          res.resultEntity[2]["HZH01"].totalNumber;

        this.parkingLotList[3].bookNumber =
          res.resultEntity[3]["JQ01"].bookNumber;
        this.parkingLotList[3].emptyNumber =
          res.resultEntity[3]["JQ01"].emptyNumber;
        this.parkingLotList[3].totalNumber =
          res.resultEntity[3]["JQ01"].totalNumber;

        this.parkingLotList[4].bookNumber =
          res.resultEntity[4]["SJDA01"].bookNumber;
        this.parkingLotList[4].emptyNumber =
          res.resultEntity[4]["SJDA01"].emptyNumber;
        this.parkingLotList[4].totalNumber =
          res.resultEntity[4]["SJDA01"].totalNumber;

        this.publicLeftPort =
          this.parkingLotList[0].emptyNumber -
          this.parkingLotList[0].bookNumber;
        this.staffLeftPort =
          this.parkingLotList[1].emptyNumber -
          this.parkingLotList[1].bookNumber +
          (this.parkingLotList[2].emptyNumber -
            this.parkingLotList[2].bookNumber) +
          (this.parkingLotList[3].emptyNumber -
            this.parkingLotList[3].bookNumber) +
          (this.parkingLotList[4].emptyNumber -
            this.parkingLotList[0].bookNumber);
      });
    },
    //获取中间部分总收入、停车场总收入、洗车总收入
    queryFees() {
      this.$homePage.queryFees({}).then(res => {
        this.totalIncome = Number(res.resultEntity["总收入"]) / 100;
        this.parkIncome = Number(res.resultEntity["停车场收入"]) / 100;
        this.washIncome = Number(res.resultEntity["洗车收入"]) / 100;
      });
    },
    //精洗普洗快洗次数
    queryCarWashTypeCount() {
      this.$homePage.queryCarWashTypeCount({}).then(res => {
        this.fastWash = res.resultEntity["快洗"];
        this.garmentWash = res.resultEntity["普洗"];
        this.poacherWash = Number(res.resultEntity["精洗"]);
      });
    },
    //剩余车位数查询

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
        for (let i = 0; i < this.numberOfParkingData.length; i++) {
          this.numberOfParkingTotal += this.numberOfParkingData[i];
        }
        this.chartData = {
          xCategories: this.numberOfParkingXz,
          seriesData: this.numberOfParkingData
        };
        // this.numberOfParkingOptions = {
        //   chart: {
        //     type: "spline",
        //     backgroundColor: "rgba(0,0,0,0)",
        //     renderTo: "numberOfParking",
        //     marginBottom: 24
        //   },
        //   title: {
        //     text: "",
        //     align: "left",
        //     x: 20,
        //     style: {
        //       fontFamily: "PingFangSC-Medium",
        //       fontSize: "16px",
        //       color: "#333333",
        //       letterSpacing: "0.17px"
        //     }
        //   },
        //   credits: {
        //     enabled: false
        //   },
        //   xAxis: {
        //     categories: this.numberOfParkingXz,
        //     //x轴坐标颜色
        //     lineColor: "#104DA1",
        //     labels: {
        //       style: {
        //         color: "rgba(90,142,227,1)",
        //         fontSize: "10px"
        //       }
        //     }
        //   },
        //   colors: ["#7654E3"],
        //   yAxis: {
        //     title: {
        //       text: ""
        //     },
        //     labels: {
        //       //修改Y轴添加单位
        //       format: "{value}辆",
        //       style: {
        //         color: "rgba(90,142,227,1)"
        //       }
        //     }, //设置网格线颜色
        //     gridLineColor: "#0A3167"
        //   },
        //   legend: {
        //     enabled: true,
        //     align: "center",
        //     verticalAlign: "left",
        //     x: 300,
        //     y: 0,
        //     itemStyle: {
        //       color: "#666666",
        //       cursor: "pointer",
        //       fontSize: "12px",
        //       fontWeight: "bold",
        //       fill: "#666666"
        //     },
        //     itemHoverStyle: {
        //       color: "#cccccc"
        //     },
        //     itemHiddenStyle: {
        //       color: "#333333"
        //     }
        //   },
        //   tooltip: {
        //     pointFormat: "{series.name}: <b>{point.y}</b>辆"
        //   },
        //   plotOptions: {
        //     spline: {
        //       lineWidth: 2,
        //       states: {
        //         hover: {
        //           lineWidth: 3
        //         }
        //       },
        //       marker: {
        //         enabled: false
        //       }
        //     }
        //   },
        //   series: [
        //     {
        //       name: "总停车数量",
        //       data: this.numberOfParkingData
        //     }
        //   ]
        // };
        // new HighCharts.chart(this.numberOfParkingOptions);
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
            text: "",
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
              name: "平均停车时长",
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
            text: "",
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
              name: "车位利用率",
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
            text: "",
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
              name: "车位周转率",
              data: this.parkingSpaceTurnoverRateData
            }
          ]
        };
        new HighCharts.chart(this.parkingSpaceTurnoverRateOptions);
      });
    },

    // 支付方式
    queryPayTypeAmountPrecent() {
      this.$homePage.queryPayTypeAmountPrecent({}).then(res => {
        this.paymentIncomeAnalysisOption = {
          chart: {
            type: "pie",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "paymentIncomeAnalysisID"
            //3D效果
            // options3d: {
            //   enabled: true,
            //   alpha: 45,
            //   beta: 0
            // }
          },
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          tooltip: {
            //饼图显示百分比
            pointFormat: "{series.name} <b>{point.percentage:.1f}%</b>"
          },
          colors: ["#0D64F4", "#00DBEC", "#1EC193", "#7654E3", "#FFBC00"],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: "pointer",
              innerSize: 50,
              depth: 45,
              //是否显示图例
              showInLegend: true,
              dataLabels: {
                //饼图上面的黑线显示
                enabled: false,
                format: "{point.name}"
              }
            }
          },
          legend: {
            layout: "vertival",
            align: "left",
            verticalAlign: "middle",
            borderWidth: 0,
            //给图例添加占比保留小数点后两位
            labelFormatter: function() {
              return this.name + " " + this.percentage.toFixed(2) + "%";
            },
            itemStyle: {
              color: "#ecfff5",
              fontSize: "12px"
            },
            itemHoverStyle: {
              color: "blue"
            }
          },
          series: [
            {
              name: "支付占比",
              data: [
                {
                  name: res.resultEntity[0].type,
                  y: Number(res.resultEntity[0].percent)
                },
                {
                  name: res.resultEntity[1].type,
                  y: Number(res.resultEntity[1].percent)
                },
                {
                  name: res.resultEntity[2].type,
                  y: Number(res.resultEntity[2].percent)
                },
                {
                  name: res.resultEntity[3].type,
                  y: Number(res.resultEntity[3].percent)
                },
                {
                  name: res.resultEntity[4].type,
                  y: Number(res.resultEntity[4].percent)
                }
              ]
            }
          ]
        };
        new HighCharts.chart(this.paymentIncomeAnalysisOption);
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
      this.$homePage.queryCarWashAmountRecentDays({}).then(res => {
        res.resultEntity["精洗"].forEach(item => {
          this.washChargeInSevenDaysXz.push(item.X);
          this.washChargeInSevenDaysJINGWash.push(Number(item.dataY) / 100);
        });
        res.resultEntity["普洗"].forEach(item => {
          this.washChargeInSevenDaysPUWash.push(Number(item.dataY) / 100);
        });
        res.resultEntity["快洗"].forEach(item => {
          this.washChargeInSevenDaysKUAIWash.push(Number(item.dataY) / 100);
        });
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
            //x轴坐标颜色
            lineColor: "#104DA1",
            //X轴间隔显示
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
            column: {
              pointPadding: 0,
              //调整每个组的柱形图的间隔
              // borderWidth: 0,
              // groupPadding: 0,
              shadow: false
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
      });
    }
    //查询充电桩总收入总收入
    // countChargeFee() {
    //   var that = this;
    //   const param = {
    //     queryType: "today"
    //   };
    //   // console.log('充电桩总收入惨参',param)
    //   this.$homePage.countChargeFee(param).then(res => {
    //     // console.log("resres", res);
    //     that.rechargeLeftIncome = res.resultEntity;
    //     if (that.rechargeLeftIncome == null) {
    //       that.rechargeLeftIncome = 0;
    //     }
    //     // console.log("洗车机总收入",that.rechargeLeftIncome)
    //   });
    // }
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
  stroke-miterlimit: 4.007;
}
.st10 {
  fill: #ff002b;
  stroke: #3cd5e5;
  stroke-width: 0.7212;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 4.007;
}
.st11 {
  fill: #091830;
}
.st12 {
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
  height: 40px;
  line-height: 25px;
  color: #74a4e3;
  background-color: #043d87;
  margin-left: 0.8%;
  margin-top: 2%;
  transform: skew(-20.5deg);
  position: relative;
  border: #46c5dd 1px solid;
}
.top-others:hover {
  cursor: pointer;
}
.top-others-div {
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
  height: 78%;
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
  width: 100px;
  height: 130px;
  margin-left: 2%;
  margin-top: 25px;
  position: absolute;
  /*background-color: red;*/
}
/*车位图左侧选项每个div*/
.center-down-select-item {
  width: 100px;
  height: 20px;
  display: flex;
  margin-top: 10px;
}
.center-down-select-item-img-1 {
  width: 34px;
  height: 16px;
  background-color: red;
  border: 2px solid #79f4fc;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #4fcfd7;
  letter-spacing: 0.12px;
}
.center-down-select-item-img-2 {
  width: 34px;
  height: 16px;
  background-color: #009245;
  border: 2px solid #79f4fc;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #4fcfd7;
  letter-spacing: 0.12px;
}
.center-down-select-item-img-4 {
  width: 34px;
  height: 16px;
  background: url("../../assets/images/Basketball.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 2px solid #79f4fc;
}
.center-down-select-item-img-5 {
  width: 34px;
  height: 16px;
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
  font-size: 14px;
  color: #4fcfd7;
  letter-spacing: 0.12px;
}
/* 车位图svg*/
.center-down-svg {
  width: 90%;
  height: 100%;
  margin-left: 5%;
  margin-top: 2%;
}
.parkListDiv-svg {
  width: 100px;
}
.parkListDivP1 {
  width: 100px;
  font-family: PingFangSC-Medium;
  font-size: 9px;
  color: #ecedef;
  letter-spacing: 0.32px;
  text-align: center;
  position: absolute;
  margin-left: 7.5%;
  margin-top: 15%;
}
.parkListDivP2 {
  width: 100px;
  font-family: PingFangSC-Medium;
  font-size: 9px;
  color: #ecedef;
  letter-spacing: 0.32px;
  text-align: center;
  position: absolute;
  margin-left: 45%;
  margin-top: 11%;
}
.parkListDivP3 {
  width: 100px;
  font-family: PingFangSC-Medium;
  font-size: 9px;
  color: #ecedef;
  letter-spacing: 0.32px;
  text-align: center;
  position: absolute;
  margin-left: 44%;
  margin-top: 2%;
}
.parkListDivP4 {
  width: 100px;
  font-family: PingFangSC-Medium;
  font-size: 9px;
  color: #ecedef;
  letter-spacing: 0.32px;
  text-align: center;
  position: absolute;
  margin-left: 29%;
  margin-top: 8%;
}
.parkListDivP5 {
  width: 100px;
  font-family: PingFangSC-Medium;
  font-size: 9px;
  color: #ecedef;
  letter-spacing: 0.32px;
  text-align: center;
  position: absolute;
  margin-left: 33%;
  margin-top: 13%;
}
</style>
