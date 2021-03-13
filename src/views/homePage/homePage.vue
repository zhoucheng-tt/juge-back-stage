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
        <span class="top-text">溧水经开区管委会智慧停车管理平台</span>
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
          <div class="top-loginName-Text">{{ userName }}</div>
          <!--          <div class="top-loginName-Text">超级管理员</div>-->
          <!--退出-->
          <div @click="loginOut()" class="exit">
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title></title>
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
                      <g id="Group-5" transform="translate(2.000000, 0.000000)">
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
        </div>
      </div>
    </div>
    <div class="content">
      <!-- 左边部分 -->
      <div class="leftContent">
        <!-- 总停车数量 totalNumberParking-->
        <div class="leftCharts">
          <div class="leftChartUp" style="display:flex">
            <div style="width: 50%" class="leftChartUpImage">
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>形状结合</title>
                <g
                  id="切图"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="智慧停车管理平台备份-2"
                    transform="translate(-44.000000, -108.000000)"
                    fill="#1398FF"
                  >
                    <g
                      id="支付方式"
                      transform="translate(44.000000, 104.000000)"
                    >
                      <path
                        d="M4,14 L4,18 L0,18 L0,14 L4,14 Z M9,14 L9,18 L5,18 L5,14 L9,14 Z M14,14 L14,18 L10,18 L10,14 L14,14 Z M4,9 L4,13 L0,13 L0,9 L4,9 Z M9,9 L9,13 L5,13 L5,9 L9,9 Z M14,9 L14,13 L10,13 L10,9 L14,9 Z M4,4 L4,8 L0,8 L0,4 L4,4 Z M9,4 L9,8 L5,8 L5,4 L9,4 Z M14,4 L14,8 L10,8 L10,4 L14,4 Z"
                        id="形状结合"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span class="spanStyle">
                近七日总停车次数
              </span>
            </div>
            <div style="width: 20%">
              <el-tooltip effect="light" content="当前停车次数">
                <img
                  style="width: 18px;height: 18px;margin-top: 3px;margin-left: 1px"
                  src="../../assets/homePage/i.png"
                  alt=""
                />
              </el-tooltip>
            </div>
            <div style="width: 40%">
              <span
                style="float:right;font-family:HelveticaNeue-Bold;font-size: 18px;color: #7654E3;letter-spacing: 0.41px;"
                >{{ numberOfParkingTotal }} 次
              </span>
            </div>
          </div>
          <!-- 总停车数量-->
          <div class="leftChartCenter" id="numberOfParking">
            <dt-line-chart :chart-data="chartData"></dt-line-chart>
          </div>
          <div class="leftChartDown">
            <svg
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title></title>
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
            <div style="width:50%">
              <img
                src="../../assets/homePage/fangkuai.svg"
                class="leftChartUpImage"
                alt=""
              />
              <span class="spanStyle">近七日车位利用率</span>
            </div>
            <div style="width: 20%">
              <el-tooltip effect="light" content="停车时长/总车位数">
                <img
                  style="width: 18px;height: 18px;margin-top: 2px"
                  src="../../assets/homePage/i.png"
                  alt=""
                />
              </el-tooltip>
            </div>
            <div style="width:40%">
              <span
                style="font-family: PingFangSC-Medium;
                     font-size: 1rem;
                      color: #08F6E4;
                  letter-spacing: 0.36px;float: right"
              >
                {{ parkingSpaceUsedRateNumber }}分钟/车位
              </span>
            </div>
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
              <title></title>
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
            <div style="width: 50%">
              <img
                src="../../assets/homePage/fangkuai.svg"
                class="leftChartUpImage"
                alt=""
              />
              <span class="spanStyle">近七日车位周转率</span>
            </div>
            <div style="width:20%">
              <el-tooltip effect="light" content="停车次数/总车位数">
                <img
                  style="width: 18px;height: 18px;margin-top: 2px"
                  src="../../assets/homePage/i.png"
                  alt=""
                />
              </el-tooltip>
            </div>
            <div style="width: 40%">
              <span
                style="font-family: PingFangSC-Medium;
                     font-size: 1rem;
                     color: #E9C503;
                     letter-spacing: 0.36px;float:right;"
              >
                {{ parkingSpaceTurnoverRateNumber }}次/车位
              </span>
            </div>
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
              <title></title>
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
            <div style="width: 50%;">
              <img
                src="../../assets/homePage/fangkuai.svg"
                class="leftChartUpImage"
                alt=""
              />
              <span class="spanStyle">近七日平均停车时长</span>
            </div>
            <div style="width: 15%">
              <el-tooltip effect="light" content="停车时长/停车次数">
                <img
                  style="width: 18px;height: 18px;margin-top: 3px;margin-left: 1px"
                  src="../../assets/homePage/i.png"
                  alt=""
                />
              </el-tooltip>
            </div>
            <div style="width: 40%;">
              <span
                style="margin-top:4px;font-family: PingFangSC-Medium;
              font-size: 1rem;
              color: #00DBEC;
              letter-spacing: 0.36px;
              float: right"
              >
                {{ averageParkingTimeNumber }} 分钟
              </span>
            </div>
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
              <title></title>
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
          <!--停车场p1-->
          <el-tooltip
            placement="top"
            popper-class="popperClass"
            :value="true"
            :manual="true"
          >
            <div slot="content" style="width: 155px;height: 55px">
              <!--停车场点击弹窗-->
              <div class="parkListDialogP1">
                <!--停车场图片svg-->
                <div class="parkListDialogP1-leftSvg">
                  <svg
                    width="44px"
                    height="44px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title></title>
                    <g
                      id="切图"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="智慧停车管理平台-鼠标经过"
                        transform="translate(-959.000000, -603.000000)"
                      >
                        <g
                          id="气泡"
                          transform="translate(951.000000, 597.000000)"
                        >
                          <g
                            id="iconp2"
                            transform="translate(8.000000, 6.000000)"
                          >
                            <g
                              id="编组"
                              transform="translate(2.250000, 2.250000)"
                            >
                              <path
                                d="M31.4784,5.24925 C31.4784,2.35125 29.1294,0.00225 26.2314,0.00225 L5.24565,0.00225 C2.34765,0.00225 -0.000225,2.35125 -0.000225,5.24925 L-0.000225,26.233875 C-0.000225,29.131875 2.34765,31.480875 5.24565,31.480875 L26.2314,31.480875 C29.1294,31.480875 31.4784,29.131875 31.4784,26.233875 L31.4784,5.24925 Z"
                                id="Fill-2"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M28.851525,25.3135125 C28.851525,27.2901375 27.249525,28.8910125 25.274025,28.8910125 L6.167025,28.8910125 C4.191525,28.8910125 2.589525,27.2901375 2.589525,25.3135125 L2.589525,6.2065125 C2.589525,4.2310125 4.191525,2.6290125 6.167025,2.6290125 L25.274025,2.6290125 C27.249525,2.6290125 28.851525,4.2310125 28.851525,6.2065125 L28.851525,25.3135125 Z"
                                id="Fill-4"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M15.1630875,11.8531125 C15.1630875,12.8397375 14.2225875,13.8173625 13.2258375,13.8691125 L9.5110875,13.8691125 L9.5110875,9.8764875 L13.2179625,9.8764875 C14.2360875,9.9237375 15.1630875,10.8664875 15.1630875,11.8531125 M13.6218375,6.6432375 C13.4924625,6.6432375 13.3687125,6.6522375 13.2393375,6.6612375 L8.8765875,6.6612375 L8.5165875,6.6713625 L6.2778375,6.6713625 L6.2778375,25.2709875 L9.5110875,25.2709875 L9.5110875,17.1023625 L13.2145875,17.1023625 C13.3630875,17.1192375 13.4092125,17.1192375 13.5228375,17.1192375 L13.6218375,17.1181125 C16.5513375,17.1181125 18.9352125,14.7679875 18.9352125,11.8801125 C18.9352125,8.9933625 16.5513375,6.6432375 13.6218375,6.6432375"
                                id="Fill-6"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M22.70025,19.8862875 L17.59275,19.8862875 C17.59275,19.8862875 17.465625,19.8997875 17.503875,19.7580375 C17.5365,19.6387875 17.753625,18.7117875 17.84925,18.3900375 C17.88975,18.2786625 18.14625,17.9479125 18.446625,17.9670375 L21.846375,17.9670375 C22.14675,17.9479125 22.40325,18.2786625 22.442625,18.3900375 C22.539375,18.7117875 22.7565,19.6387875 22.789125,19.7580375 C22.827375,19.8997875 22.70025,19.8862875 22.70025,19.8862875 M24.6915,20.5095375 C24.611625,20.3497875 24.393375,20.1686625 24.393375,20.1686625 L23.491125,17.7555375 C23.304375,17.2976625 22.75425,17.0569125 22.5135,17.0569125 L17.7795,17.0569125 C17.53875,17.0569125 16.988625,17.2976625 16.80075,17.7555375 L15.899625,20.1686625 C15.899625,20.1686625 15.681375,20.3497875 15.6015,20.5095375 C15.521625,20.6670375 15.435,20.8076625 15.435,21.8786625 C15.435,22.9215375 15.64425,23.2927875 15.894,23.4221625 L16.092,23.5324125 L16.092,24.5021625 C16.092,24.8160375 16.16625,24.9094126 16.464375,24.9094126 L17.13375,24.9094126 C17.431875,24.9094126 17.63325,24.9105375 17.63325,24.5966625 L17.63325,23.6550375 L22.65975,23.6550375 L22.65975,24.5966625 C22.65975,24.9105375 22.861125,24.9094126 23.15925,24.9094126 L23.828625,24.9094126 C24.12675,24.9094126 24.201,24.8160375 24.201,24.5021625 L24.201,23.5324125 L24.399,23.4221625 C24.64875,23.2927875 24.859125,22.9215375 24.859125,21.8786625 C24.859125,20.8076625 24.771375,20.6670375 24.6915,20.5095375"
                                id="Fill-8"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M17.1972,22.3813125 C16.876575,22.3813125 16.615575,22.1135625 16.615575,21.7850625 C16.615575,21.4565625 16.876575,21.1876875 17.1972,21.1876875 C17.517825,21.1876875 17.778825,21.4565625 17.778825,21.7850625 C17.778825,22.1135625 17.517825,22.3813125 17.1972,22.3813125"
                                id="Fill-10"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.71195 L19.361025,22.71195 C19.2744,22.71195 19.20465,22.6422 19.20465,22.55445 C19.20465,22.467825 19.2744,22.398075 19.361025,22.398075 L20.931525,22.398075 C21.01815,22.398075 21.089025,22.467825 21.089025,22.55445 C21.089025,22.6422 21.01815,22.71195 20.931525,22.71195"
                                id="Fill-12"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.083525 L19.361025,22.083525 C19.2744,22.083525 19.20465,22.013775 19.20465,21.926025 C19.20465,21.8394 19.2744,21.76965 19.361025,21.76965 L20.931525,21.76965 C21.01815,21.76965 21.089025,21.8394 21.089025,21.926025 C21.089025,22.013775 21.01815,22.083525 20.931525,22.083525"
                                id="Fill-14"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,21.4551 L19.361025,21.4551 C19.2744,21.4551 19.20465,21.38535 19.20465,21.2976 C19.20465,21.210975 19.2744,21.141225 19.361025,21.141225 L20.931525,21.141225 C21.01815,21.141225 21.089025,21.210975 21.089025,21.2976 C21.089025,21.38535 21.01815,21.4551 20.931525,21.4551"
                                id="Fill-16"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M23.1177375,22.3813125 C22.7971125,22.3813125 22.5361125,22.1135625 22.5361125,21.7850625 C22.5361125,21.4565625 22.7971125,21.1876875 23.1177375,21.1876875 C23.4383625,21.1876875 23.6993625,21.4565625 23.6993625,21.7850625 C23.6993625,22.1135625 23.4383625,22.3813125 23.1177375,22.3813125"
                                id="Fill-18"
                                fill="#FFFFFF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <!--停车场名称剩余车位数量-->
                <div class="parkListDialogP1-text">
                  <div>{{ parkingLotList[0].name }}</div>
                  <div>
                    <span class="parkListDialogP1-text-leftPort">剩余车位</span>
                    <span class="parkListDialogP1-text-leftPortNumber">
                      {{ P1LeftPort }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="parkListDivP1">
              <!--              <div>{{ parkingLotList[0].name }}</div>-->
            </div>
          </el-tooltip>
          <!--停车场p2-->
          <el-tooltip
            placement="right"
            popper-class="popperClass"
            :value="true"
            :manual="true"
          >
            <div slot="content" style="width: 155px;height: 55px">
              <!--停车场点击弹窗-->
              <div class="parkListDialogP1">
                <!--停车场图片svg-->
                <div class="parkListDialogP1-leftSvg">
                  <svg
                    width="44px"
                    height="44px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title></title>
                    <g
                      id="切图"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="智慧停车管理平台-鼠标经过"
                        transform="translate(-959.000000, -603.000000)"
                      >
                        <g
                          id="气泡"
                          transform="translate(951.000000, 597.000000)"
                        >
                          <g
                            id="iconp2"
                            transform="translate(8.000000, 6.000000)"
                          >
                            <g
                              id="编组"
                              transform="translate(2.250000, 2.250000)"
                            >
                              <path
                                d="M31.4784,5.24925 C31.4784,2.35125 29.1294,0.00225 26.2314,0.00225 L5.24565,0.00225 C2.34765,0.00225 -0.000225,2.35125 -0.000225,5.24925 L-0.000225,26.233875 C-0.000225,29.131875 2.34765,31.480875 5.24565,31.480875 L26.2314,31.480875 C29.1294,31.480875 31.4784,29.131875 31.4784,26.233875 L31.4784,5.24925 Z"
                                id="Fill-2"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M28.851525,25.3135125 C28.851525,27.2901375 27.249525,28.8910125 25.274025,28.8910125 L6.167025,28.8910125 C4.191525,28.8910125 2.589525,27.2901375 2.589525,25.3135125 L2.589525,6.2065125 C2.589525,4.2310125 4.191525,2.6290125 6.167025,2.6290125 L25.274025,2.6290125 C27.249525,2.6290125 28.851525,4.2310125 28.851525,6.2065125 L28.851525,25.3135125 Z"
                                id="Fill-4"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M15.1630875,11.8531125 C15.1630875,12.8397375 14.2225875,13.8173625 13.2258375,13.8691125 L9.5110875,13.8691125 L9.5110875,9.8764875 L13.2179625,9.8764875 C14.2360875,9.9237375 15.1630875,10.8664875 15.1630875,11.8531125 M13.6218375,6.6432375 C13.4924625,6.6432375 13.3687125,6.6522375 13.2393375,6.6612375 L8.8765875,6.6612375 L8.5165875,6.6713625 L6.2778375,6.6713625 L6.2778375,25.2709875 L9.5110875,25.2709875 L9.5110875,17.1023625 L13.2145875,17.1023625 C13.3630875,17.1192375 13.4092125,17.1192375 13.5228375,17.1192375 L13.6218375,17.1181125 C16.5513375,17.1181125 18.9352125,14.7679875 18.9352125,11.8801125 C18.9352125,8.9933625 16.5513375,6.6432375 13.6218375,6.6432375"
                                id="Fill-6"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M22.70025,19.8862875 L17.59275,19.8862875 C17.59275,19.8862875 17.465625,19.8997875 17.503875,19.7580375 C17.5365,19.6387875 17.753625,18.7117875 17.84925,18.3900375 C17.88975,18.2786625 18.14625,17.9479125 18.446625,17.9670375 L21.846375,17.9670375 C22.14675,17.9479125 22.40325,18.2786625 22.442625,18.3900375 C22.539375,18.7117875 22.7565,19.6387875 22.789125,19.7580375 C22.827375,19.8997875 22.70025,19.8862875 22.70025,19.8862875 M24.6915,20.5095375 C24.611625,20.3497875 24.393375,20.1686625 24.393375,20.1686625 L23.491125,17.7555375 C23.304375,17.2976625 22.75425,17.0569125 22.5135,17.0569125 L17.7795,17.0569125 C17.53875,17.0569125 16.988625,17.2976625 16.80075,17.7555375 L15.899625,20.1686625 C15.899625,20.1686625 15.681375,20.3497875 15.6015,20.5095375 C15.521625,20.6670375 15.435,20.8076625 15.435,21.8786625 C15.435,22.9215375 15.64425,23.2927875 15.894,23.4221625 L16.092,23.5324125 L16.092,24.5021625 C16.092,24.8160375 16.16625,24.9094126 16.464375,24.9094126 L17.13375,24.9094126 C17.431875,24.9094126 17.63325,24.9105375 17.63325,24.5966625 L17.63325,23.6550375 L22.65975,23.6550375 L22.65975,24.5966625 C22.65975,24.9105375 22.861125,24.9094126 23.15925,24.9094126 L23.828625,24.9094126 C24.12675,24.9094126 24.201,24.8160375 24.201,24.5021625 L24.201,23.5324125 L24.399,23.4221625 C24.64875,23.2927875 24.859125,22.9215375 24.859125,21.8786625 C24.859125,20.8076625 24.771375,20.6670375 24.6915,20.5095375"
                                id="Fill-8"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M17.1972,22.3813125 C16.876575,22.3813125 16.615575,22.1135625 16.615575,21.7850625 C16.615575,21.4565625 16.876575,21.1876875 17.1972,21.1876875 C17.517825,21.1876875 17.778825,21.4565625 17.778825,21.7850625 C17.778825,22.1135625 17.517825,22.3813125 17.1972,22.3813125"
                                id="Fill-10"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.71195 L19.361025,22.71195 C19.2744,22.71195 19.20465,22.6422 19.20465,22.55445 C19.20465,22.467825 19.2744,22.398075 19.361025,22.398075 L20.931525,22.398075 C21.01815,22.398075 21.089025,22.467825 21.089025,22.55445 C21.089025,22.6422 21.01815,22.71195 20.931525,22.71195"
                                id="Fill-12"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.083525 L19.361025,22.083525 C19.2744,22.083525 19.20465,22.013775 19.20465,21.926025 C19.20465,21.8394 19.2744,21.76965 19.361025,21.76965 L20.931525,21.76965 C21.01815,21.76965 21.089025,21.8394 21.089025,21.926025 C21.089025,22.013775 21.01815,22.083525 20.931525,22.083525"
                                id="Fill-14"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,21.4551 L19.361025,21.4551 C19.2744,21.4551 19.20465,21.38535 19.20465,21.2976 C19.20465,21.210975 19.2744,21.141225 19.361025,21.141225 L20.931525,21.141225 C21.01815,21.141225 21.089025,21.210975 21.089025,21.2976 C21.089025,21.38535 21.01815,21.4551 20.931525,21.4551"
                                id="Fill-16"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M23.1177375,22.3813125 C22.7971125,22.3813125 22.5361125,22.1135625 22.5361125,21.7850625 C22.5361125,21.4565625 22.7971125,21.1876875 23.1177375,21.1876875 C23.4383625,21.1876875 23.6993625,21.4565625 23.6993625,21.7850625 C23.6993625,22.1135625 23.4383625,22.3813125 23.1177375,22.3813125"
                                id="Fill-18"
                                fill="#FFFFFF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <!--停车场名称剩余车位数量-->
                <div class="parkListDialogP1-text">
                  <div>{{ parkingLotList[1].name }}</div>
                  <div>
                    <span class="parkListDialogP1-text-leftPort">剩余车位</span>
                    <span class="parkListDialogP1-text-leftPortNumber">
                      {{ P2LeftPort }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="parkListDivP2">
              <!--              <div>{{ parkingLotList[1].name }}</div>-->
            </div>
          </el-tooltip>
          <!--停车场p3-->
          <el-tooltip
            placement="top"
            popper-class="popperClass"
            :value="true"
            :manual="true"
          >
            <div slot="content" style="width: 155px;height: 55px">
              <!--停车场点击弹窗-->
              <div class="parkListDialogP1">
                <!--停车场图片svg-->
                <div class="parkListDialogP1-leftSvg">
                  <svg
                    width="44px"
                    height="44px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title></title>
                    <g
                      id="切图"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="智慧停车管理平台-鼠标经过"
                        transform="translate(-959.000000, -603.000000)"
                      >
                        <g
                          id="气泡"
                          transform="translate(951.000000, 597.000000)"
                        >
                          <g
                            id="iconp2"
                            transform="translate(8.000000, 6.000000)"
                          >
                            <g
                              id="编组"
                              transform="translate(2.250000, 2.250000)"
                            >
                              <path
                                d="M31.4784,5.24925 C31.4784,2.35125 29.1294,0.00225 26.2314,0.00225 L5.24565,0.00225 C2.34765,0.00225 -0.000225,2.35125 -0.000225,5.24925 L-0.000225,26.233875 C-0.000225,29.131875 2.34765,31.480875 5.24565,31.480875 L26.2314,31.480875 C29.1294,31.480875 31.4784,29.131875 31.4784,26.233875 L31.4784,5.24925 Z"
                                id="Fill-2"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M28.851525,25.3135125 C28.851525,27.2901375 27.249525,28.8910125 25.274025,28.8910125 L6.167025,28.8910125 C4.191525,28.8910125 2.589525,27.2901375 2.589525,25.3135125 L2.589525,6.2065125 C2.589525,4.2310125 4.191525,2.6290125 6.167025,2.6290125 L25.274025,2.6290125 C27.249525,2.6290125 28.851525,4.2310125 28.851525,6.2065125 L28.851525,25.3135125 Z"
                                id="Fill-4"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M15.1630875,11.8531125 C15.1630875,12.8397375 14.2225875,13.8173625 13.2258375,13.8691125 L9.5110875,13.8691125 L9.5110875,9.8764875 L13.2179625,9.8764875 C14.2360875,9.9237375 15.1630875,10.8664875 15.1630875,11.8531125 M13.6218375,6.6432375 C13.4924625,6.6432375 13.3687125,6.6522375 13.2393375,6.6612375 L8.8765875,6.6612375 L8.5165875,6.6713625 L6.2778375,6.6713625 L6.2778375,25.2709875 L9.5110875,25.2709875 L9.5110875,17.1023625 L13.2145875,17.1023625 C13.3630875,17.1192375 13.4092125,17.1192375 13.5228375,17.1192375 L13.6218375,17.1181125 C16.5513375,17.1181125 18.9352125,14.7679875 18.9352125,11.8801125 C18.9352125,8.9933625 16.5513375,6.6432375 13.6218375,6.6432375"
                                id="Fill-6"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M22.70025,19.8862875 L17.59275,19.8862875 C17.59275,19.8862875 17.465625,19.8997875 17.503875,19.7580375 C17.5365,19.6387875 17.753625,18.7117875 17.84925,18.3900375 C17.88975,18.2786625 18.14625,17.9479125 18.446625,17.9670375 L21.846375,17.9670375 C22.14675,17.9479125 22.40325,18.2786625 22.442625,18.3900375 C22.539375,18.7117875 22.7565,19.6387875 22.789125,19.7580375 C22.827375,19.8997875 22.70025,19.8862875 22.70025,19.8862875 M24.6915,20.5095375 C24.611625,20.3497875 24.393375,20.1686625 24.393375,20.1686625 L23.491125,17.7555375 C23.304375,17.2976625 22.75425,17.0569125 22.5135,17.0569125 L17.7795,17.0569125 C17.53875,17.0569125 16.988625,17.2976625 16.80075,17.7555375 L15.899625,20.1686625 C15.899625,20.1686625 15.681375,20.3497875 15.6015,20.5095375 C15.521625,20.6670375 15.435,20.8076625 15.435,21.8786625 C15.435,22.9215375 15.64425,23.2927875 15.894,23.4221625 L16.092,23.5324125 L16.092,24.5021625 C16.092,24.8160375 16.16625,24.9094126 16.464375,24.9094126 L17.13375,24.9094126 C17.431875,24.9094126 17.63325,24.9105375 17.63325,24.5966625 L17.63325,23.6550375 L22.65975,23.6550375 L22.65975,24.5966625 C22.65975,24.9105375 22.861125,24.9094126 23.15925,24.9094126 L23.828625,24.9094126 C24.12675,24.9094126 24.201,24.8160375 24.201,24.5021625 L24.201,23.5324125 L24.399,23.4221625 C24.64875,23.2927875 24.859125,22.9215375 24.859125,21.8786625 C24.859125,20.8076625 24.771375,20.6670375 24.6915,20.5095375"
                                id="Fill-8"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M17.1972,22.3813125 C16.876575,22.3813125 16.615575,22.1135625 16.615575,21.7850625 C16.615575,21.4565625 16.876575,21.1876875 17.1972,21.1876875 C17.517825,21.1876875 17.778825,21.4565625 17.778825,21.7850625 C17.778825,22.1135625 17.517825,22.3813125 17.1972,22.3813125"
                                id="Fill-10"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.71195 L19.361025,22.71195 C19.2744,22.71195 19.20465,22.6422 19.20465,22.55445 C19.20465,22.467825 19.2744,22.398075 19.361025,22.398075 L20.931525,22.398075 C21.01815,22.398075 21.089025,22.467825 21.089025,22.55445 C21.089025,22.6422 21.01815,22.71195 20.931525,22.71195"
                                id="Fill-12"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.083525 L19.361025,22.083525 C19.2744,22.083525 19.20465,22.013775 19.20465,21.926025 C19.20465,21.8394 19.2744,21.76965 19.361025,21.76965 L20.931525,21.76965 C21.01815,21.76965 21.089025,21.8394 21.089025,21.926025 C21.089025,22.013775 21.01815,22.083525 20.931525,22.083525"
                                id="Fill-14"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,21.4551 L19.361025,21.4551 C19.2744,21.4551 19.20465,21.38535 19.20465,21.2976 C19.20465,21.210975 19.2744,21.141225 19.361025,21.141225 L20.931525,21.141225 C21.01815,21.141225 21.089025,21.210975 21.089025,21.2976 C21.089025,21.38535 21.01815,21.4551 20.931525,21.4551"
                                id="Fill-16"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M23.1177375,22.3813125 C22.7971125,22.3813125 22.5361125,22.1135625 22.5361125,21.7850625 C22.5361125,21.4565625 22.7971125,21.1876875 23.1177375,21.1876875 C23.4383625,21.1876875 23.6993625,21.4565625 23.6993625,21.7850625 C23.6993625,22.1135625 23.4383625,22.3813125 23.1177375,22.3813125"
                                id="Fill-18"
                                fill="#FFFFFF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <!--停车场名称剩余车位数量-->
                <div class="parkListDialogP1-text">
                  <div>{{ parkingLotList[2].name }}</div>
                  <div>
                    <span class="parkListDialogP1-text-leftPort">剩余车位</span>
                    <span class="parkListDialogP1-text-leftPortNumber">
                      {{ P3LeftPort }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="parkListDivP3">
              <!--              <div>{{ parkingLotList[2].name }}</div>-->
            </div>
          </el-tooltip>
          <!--停车场p4-->
          <el-tooltip
            placement="top"
            popper-class="popperClass"
            :value="true"
            :manual="true"
          >
            <div slot="content" style="width: 170px;height: 55px">
              <!--停车场点击弹窗-->
              <div class="parkListDialogP1">
                <!--停车场图片svg-->
                <div class="parkListDialogP1-leftSvg">
                  <svg
                    width="44px"
                    height="44px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title></title>
                    <g
                      id="切图"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="智慧停车管理平台-鼠标经过"
                        transform="translate(-959.000000, -603.000000)"
                      >
                        <g
                          id="气泡"
                          transform="translate(951.000000, 597.000000)"
                        >
                          <g
                            id="iconp2"
                            transform="translate(8.000000, 6.000000)"
                          >
                            <g
                              id="编组"
                              transform="translate(2.250000, 2.250000)"
                            >
                              <path
                                d="M31.4784,5.24925 C31.4784,2.35125 29.1294,0.00225 26.2314,0.00225 L5.24565,0.00225 C2.34765,0.00225 -0.000225,2.35125 -0.000225,5.24925 L-0.000225,26.233875 C-0.000225,29.131875 2.34765,31.480875 5.24565,31.480875 L26.2314,31.480875 C29.1294,31.480875 31.4784,29.131875 31.4784,26.233875 L31.4784,5.24925 Z"
                                id="Fill-2"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M28.851525,25.3135125 C28.851525,27.2901375 27.249525,28.8910125 25.274025,28.8910125 L6.167025,28.8910125 C4.191525,28.8910125 2.589525,27.2901375 2.589525,25.3135125 L2.589525,6.2065125 C2.589525,4.2310125 4.191525,2.6290125 6.167025,2.6290125 L25.274025,2.6290125 C27.249525,2.6290125 28.851525,4.2310125 28.851525,6.2065125 L28.851525,25.3135125 Z"
                                id="Fill-4"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M15.1630875,11.8531125 C15.1630875,12.8397375 14.2225875,13.8173625 13.2258375,13.8691125 L9.5110875,13.8691125 L9.5110875,9.8764875 L13.2179625,9.8764875 C14.2360875,9.9237375 15.1630875,10.8664875 15.1630875,11.8531125 M13.6218375,6.6432375 C13.4924625,6.6432375 13.3687125,6.6522375 13.2393375,6.6612375 L8.8765875,6.6612375 L8.5165875,6.6713625 L6.2778375,6.6713625 L6.2778375,25.2709875 L9.5110875,25.2709875 L9.5110875,17.1023625 L13.2145875,17.1023625 C13.3630875,17.1192375 13.4092125,17.1192375 13.5228375,17.1192375 L13.6218375,17.1181125 C16.5513375,17.1181125 18.9352125,14.7679875 18.9352125,11.8801125 C18.9352125,8.9933625 16.5513375,6.6432375 13.6218375,6.6432375"
                                id="Fill-6"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M22.70025,19.8862875 L17.59275,19.8862875 C17.59275,19.8862875 17.465625,19.8997875 17.503875,19.7580375 C17.5365,19.6387875 17.753625,18.7117875 17.84925,18.3900375 C17.88975,18.2786625 18.14625,17.9479125 18.446625,17.9670375 L21.846375,17.9670375 C22.14675,17.9479125 22.40325,18.2786625 22.442625,18.3900375 C22.539375,18.7117875 22.7565,19.6387875 22.789125,19.7580375 C22.827375,19.8997875 22.70025,19.8862875 22.70025,19.8862875 M24.6915,20.5095375 C24.611625,20.3497875 24.393375,20.1686625 24.393375,20.1686625 L23.491125,17.7555375 C23.304375,17.2976625 22.75425,17.0569125 22.5135,17.0569125 L17.7795,17.0569125 C17.53875,17.0569125 16.988625,17.2976625 16.80075,17.7555375 L15.899625,20.1686625 C15.899625,20.1686625 15.681375,20.3497875 15.6015,20.5095375 C15.521625,20.6670375 15.435,20.8076625 15.435,21.8786625 C15.435,22.9215375 15.64425,23.2927875 15.894,23.4221625 L16.092,23.5324125 L16.092,24.5021625 C16.092,24.8160375 16.16625,24.9094126 16.464375,24.9094126 L17.13375,24.9094126 C17.431875,24.9094126 17.63325,24.9105375 17.63325,24.5966625 L17.63325,23.6550375 L22.65975,23.6550375 L22.65975,24.5966625 C22.65975,24.9105375 22.861125,24.9094126 23.15925,24.9094126 L23.828625,24.9094126 C24.12675,24.9094126 24.201,24.8160375 24.201,24.5021625 L24.201,23.5324125 L24.399,23.4221625 C24.64875,23.2927875 24.859125,22.9215375 24.859125,21.8786625 C24.859125,20.8076625 24.771375,20.6670375 24.6915,20.5095375"
                                id="Fill-8"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M17.1972,22.3813125 C16.876575,22.3813125 16.615575,22.1135625 16.615575,21.7850625 C16.615575,21.4565625 16.876575,21.1876875 17.1972,21.1876875 C17.517825,21.1876875 17.778825,21.4565625 17.778825,21.7850625 C17.778825,22.1135625 17.517825,22.3813125 17.1972,22.3813125"
                                id="Fill-10"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.71195 L19.361025,22.71195 C19.2744,22.71195 19.20465,22.6422 19.20465,22.55445 C19.20465,22.467825 19.2744,22.398075 19.361025,22.398075 L20.931525,22.398075 C21.01815,22.398075 21.089025,22.467825 21.089025,22.55445 C21.089025,22.6422 21.01815,22.71195 20.931525,22.71195"
                                id="Fill-12"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.083525 L19.361025,22.083525 C19.2744,22.083525 19.20465,22.013775 19.20465,21.926025 C19.20465,21.8394 19.2744,21.76965 19.361025,21.76965 L20.931525,21.76965 C21.01815,21.76965 21.089025,21.8394 21.089025,21.926025 C21.089025,22.013775 21.01815,22.083525 20.931525,22.083525"
                                id="Fill-14"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,21.4551 L19.361025,21.4551 C19.2744,21.4551 19.20465,21.38535 19.20465,21.2976 C19.20465,21.210975 19.2744,21.141225 19.361025,21.141225 L20.931525,21.141225 C21.01815,21.141225 21.089025,21.210975 21.089025,21.2976 C21.089025,21.38535 21.01815,21.4551 20.931525,21.4551"
                                id="Fill-16"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M23.1177375,22.3813125 C22.7971125,22.3813125 22.5361125,22.1135625 22.5361125,21.7850625 C22.5361125,21.4565625 22.7971125,21.1876875 23.1177375,21.1876875 C23.4383625,21.1876875 23.6993625,21.4565625 23.6993625,21.7850625 C23.6993625,22.1135625 23.4383625,22.3813125 23.1177375,22.3813125"
                                id="Fill-18"
                                fill="#FFFFFF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <!--停车场名称剩余车位数量-->
                <div class="parkListDialogP1-text">
                  <div>{{ parkingLotList[3].name }}</div>
                  <div>
                    <span class="parkListDialogP1-text-leftPort">剩余车位</span>
                    <span class="parkListDialogP1-text-leftPortNumber">
                      {{ P4LeftPort }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="parkListDivP4">
              <!--              <div>{{ parkingLotList[3].name }}</div>-->
            </div>
          </el-tooltip>
          <!--停车场p5-->
          <el-tooltip popper-class="popperClass" :value="true" :manual="true">
            <div slot="content" style="width: 155px;height: 55px">
              <!--停车场点击弹窗-->
              <div class="parkListDialogP1">
                <!--停车场图片svg-->
                <div class="parkListDialogP1-leftSvg">
                  <svg
                    width="44px"
                    height="44px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title></title>
                    <g
                      id="切图"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="智慧停车管理平台-鼠标经过"
                        transform="translate(-959.000000, -603.000000)"
                      >
                        <g
                          id="气泡"
                          transform="translate(951.000000, 597.000000)"
                        >
                          <g
                            id="iconp2"
                            transform="translate(8.000000, 6.000000)"
                          >
                            <g
                              id="编组"
                              transform="translate(2.250000, 2.250000)"
                            >
                              <path
                                d="M31.4784,5.24925 C31.4784,2.35125 29.1294,0.00225 26.2314,0.00225 L5.24565,0.00225 C2.34765,0.00225 -0.000225,2.35125 -0.000225,5.24925 L-0.000225,26.233875 C-0.000225,29.131875 2.34765,31.480875 5.24565,31.480875 L26.2314,31.480875 C29.1294,31.480875 31.4784,29.131875 31.4784,26.233875 L31.4784,5.24925 Z"
                                id="Fill-2"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M28.851525,25.3135125 C28.851525,27.2901375 27.249525,28.8910125 25.274025,28.8910125 L6.167025,28.8910125 C4.191525,28.8910125 2.589525,27.2901375 2.589525,25.3135125 L2.589525,6.2065125 C2.589525,4.2310125 4.191525,2.6290125 6.167025,2.6290125 L25.274025,2.6290125 C27.249525,2.6290125 28.851525,4.2310125 28.851525,6.2065125 L28.851525,25.3135125 Z"
                                id="Fill-4"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M15.1630875,11.8531125 C15.1630875,12.8397375 14.2225875,13.8173625 13.2258375,13.8691125 L9.5110875,13.8691125 L9.5110875,9.8764875 L13.2179625,9.8764875 C14.2360875,9.9237375 15.1630875,10.8664875 15.1630875,11.8531125 M13.6218375,6.6432375 C13.4924625,6.6432375 13.3687125,6.6522375 13.2393375,6.6612375 L8.8765875,6.6612375 L8.5165875,6.6713625 L6.2778375,6.6713625 L6.2778375,25.2709875 L9.5110875,25.2709875 L9.5110875,17.1023625 L13.2145875,17.1023625 C13.3630875,17.1192375 13.4092125,17.1192375 13.5228375,17.1192375 L13.6218375,17.1181125 C16.5513375,17.1181125 18.9352125,14.7679875 18.9352125,11.8801125 C18.9352125,8.9933625 16.5513375,6.6432375 13.6218375,6.6432375"
                                id="Fill-6"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M22.70025,19.8862875 L17.59275,19.8862875 C17.59275,19.8862875 17.465625,19.8997875 17.503875,19.7580375 C17.5365,19.6387875 17.753625,18.7117875 17.84925,18.3900375 C17.88975,18.2786625 18.14625,17.9479125 18.446625,17.9670375 L21.846375,17.9670375 C22.14675,17.9479125 22.40325,18.2786625 22.442625,18.3900375 C22.539375,18.7117875 22.7565,19.6387875 22.789125,19.7580375 C22.827375,19.8997875 22.70025,19.8862875 22.70025,19.8862875 M24.6915,20.5095375 C24.611625,20.3497875 24.393375,20.1686625 24.393375,20.1686625 L23.491125,17.7555375 C23.304375,17.2976625 22.75425,17.0569125 22.5135,17.0569125 L17.7795,17.0569125 C17.53875,17.0569125 16.988625,17.2976625 16.80075,17.7555375 L15.899625,20.1686625 C15.899625,20.1686625 15.681375,20.3497875 15.6015,20.5095375 C15.521625,20.6670375 15.435,20.8076625 15.435,21.8786625 C15.435,22.9215375 15.64425,23.2927875 15.894,23.4221625 L16.092,23.5324125 L16.092,24.5021625 C16.092,24.8160375 16.16625,24.9094126 16.464375,24.9094126 L17.13375,24.9094126 C17.431875,24.9094126 17.63325,24.9105375 17.63325,24.5966625 L17.63325,23.6550375 L22.65975,23.6550375 L22.65975,24.5966625 C22.65975,24.9105375 22.861125,24.9094126 23.15925,24.9094126 L23.828625,24.9094126 C24.12675,24.9094126 24.201,24.8160375 24.201,24.5021625 L24.201,23.5324125 L24.399,23.4221625 C24.64875,23.2927875 24.859125,22.9215375 24.859125,21.8786625 C24.859125,20.8076625 24.771375,20.6670375 24.6915,20.5095375"
                                id="Fill-8"
                                fill="#0057D0"
                              ></path>
                              <path
                                d="M17.1972,22.3813125 C16.876575,22.3813125 16.615575,22.1135625 16.615575,21.7850625 C16.615575,21.4565625 16.876575,21.1876875 17.1972,21.1876875 C17.517825,21.1876875 17.778825,21.4565625 17.778825,21.7850625 C17.778825,22.1135625 17.517825,22.3813125 17.1972,22.3813125"
                                id="Fill-10"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.71195 L19.361025,22.71195 C19.2744,22.71195 19.20465,22.6422 19.20465,22.55445 C19.20465,22.467825 19.2744,22.398075 19.361025,22.398075 L20.931525,22.398075 C21.01815,22.398075 21.089025,22.467825 21.089025,22.55445 C21.089025,22.6422 21.01815,22.71195 20.931525,22.71195"
                                id="Fill-12"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,22.083525 L19.361025,22.083525 C19.2744,22.083525 19.20465,22.013775 19.20465,21.926025 C19.20465,21.8394 19.2744,21.76965 19.361025,21.76965 L20.931525,21.76965 C21.01815,21.76965 21.089025,21.8394 21.089025,21.926025 C21.089025,22.013775 21.01815,22.083525 20.931525,22.083525"
                                id="Fill-14"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M20.931525,21.4551 L19.361025,21.4551 C19.2744,21.4551 19.20465,21.38535 19.20465,21.2976 C19.20465,21.210975 19.2744,21.141225 19.361025,21.141225 L20.931525,21.141225 C21.01815,21.141225 21.089025,21.210975 21.089025,21.2976 C21.089025,21.38535 21.01815,21.4551 20.931525,21.4551"
                                id="Fill-16"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M23.1177375,22.3813125 C22.7971125,22.3813125 22.5361125,22.1135625 22.5361125,21.7850625 C22.5361125,21.4565625 22.7971125,21.1876875 23.1177375,21.1876875 C23.4383625,21.1876875 23.6993625,21.4565625 23.6993625,21.7850625 C23.6993625,22.1135625 23.4383625,22.3813125 23.1177375,22.3813125"
                                id="Fill-18"
                                fill="#FFFFFF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <!--停车场名称剩余车位数量-->
                <div class="parkListDialogP1-text">
                  <div>{{ parkingLotList[4].name }}</div>
                  <div>
                    <span class="parkListDialogP1-text-leftPort">剩余车位</span>
                    <span class="parkListDialogP1-text-leftPortNumber">
                      {{ P5LeftPort }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="parkListDivP5">
              <!--              <div>{{ parkingLotList[4].name }}</div>-->
            </div>
          </el-tooltip>
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
              style="enable-background:new 0 0 1075.6 717.9;"
              xml:space="preserve"
            >
              <title></title>
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
                <polyline points="635.3,711.5 640.3,715.4 630.2,715.4 	" />
                <line class="st1" x1="574.5" y1="645.7" x2="574.5" y2="707.5" />
                <polyline class="st2" points="29,233 25.1,238.1 25.1,228 	" />
                <line class="st1" x1="756.2" y1="503.3" x2="771.5" y2="503.3" />
                <line class="st1" x1="781.7" y1="503.3" x2="796.9" y2="503.3" />
                <line class="st1" x1="807.1" y1="503.3" x2="822.3" y2="503.3" />
                <line class="st1" x1="832.5" y1="503.3" x2="847.8" y2="503.3" />
                <line class="st3" x1="199.3" y1="205" x2="199.3" y2="209.1" />
                <polygon
                  class="st3"
                  points="183.9,205 183.9,204.8 183.6,204.6 183.4,204.5 183.1,204.6 182.9,204.8 182.8,205 182.9,205.3
		183.1,205.6 183.4,205.6 183.6,205.6 183.9,205.3 	"
                />
                <line class="st3" x1="191" y1="209.1" x2="188" y2="194.3" />
                <line class="st3" x1="167.5" y1="205" x2="167.5" y2="209.1" />
                <line class="st3" x1="178.8" y1="194.3" x2="175.7" y2="209.1" />
                <path
                  class="st3"
                  d="M199.3,205l-0.1-1.9c-1.1-8.7-9.1-14.9-17.8-13.8c-7.2,0.9-12.9,6.6-13.8,13.8l-0.1,1.9"
                />
                <line class="st3" x1="181.1" y1="206.3" x2="185.7" y2="206.3" />
                <line class="st3" x1="181.1" y1="206" x2="185.7" y2="206" />
                <line class="st3" x1="183.1" y1="212.7" x2="183.1" y2="206.3" />
                <line class="st3" x1="183.6" y1="212.7" x2="183.6" y2="206.3" />
                <polyline
                  class="st1"
                  points="183.1,212.7 183.2,212.8 183.4,212.9 183.6,212.8 183.6,212.7 	"
                />
                <line class="st3" x1="183" y1="206" x2="183" y2="205.5" />
                <line class="st3" x1="183.8" y1="206" x2="183.8" y2="205.5" />
                <line class="st3" x1="181.1" y1="206" x2="181.1" y2="206.3" />
                <line class="st3" x1="185.7" y1="206" x2="185.7" y2="206.3" />
                <path
                  class="st3"
                  d="M188,194.3l-0.1-1c-0.6-2.5-3-4-5.5-3.4c-1.7,0.4-3,1.7-3.4,3.4l-0.1,1"
                />
                <line class="st3" x1="180.2" y1="197.6" x2="181" y2="198.3" />
                <line class="st3" x1="184.4" y1="198.5" x2="184.5" y2="198.7" />
                <polyline
                  class="st3"
                  points="183.5,198.6 183.5,198.9 184.5,198.7 	"
                />
                <line class="st3" x1="183.3" y1="198.6" x2="183.3" y2="198.9" />
                <line class="st3" x1="182.3" y1="198.5" x2="182.3" y2="198.7" />
                <line class="st3" x1="182.2" y1="198.5" x2="182.1" y2="198.7" />
                <polyline
                  class="st3"
                  points="181.2,198.1 181.1,198.3 182.1,198.7 	"
                />
                <line class="st3" x1="181.2" y1="198" x2="181" y2="198.3" />
                <line class="st3" x1="182.3" y1="198.7" x2="183.3" y2="198.9" />
                <line class="st3" x1="179" y1="195.6" x2="179.4" y2="196.5" />
                <line class="st3" x1="180.3" y1="197.4" x2="180.2" y2="197.6" />
                <line class="st3" x1="180.3" y1="197.3" x2="180.1" y2="197.5" />
                <polyline
                  class="st3"
                  points="179.7,196.5 179.4,196.6 180.1,197.5 	"
                />
                <line class="st3" x1="179.6" y1="196.4" x2="179.4" y2="196.5" />
                <polyline
                  class="st3"
                  points="178.9,195.2 179,195.4 179.2,195.4 	"
                />
                <line class="st3" x1="179.2" y1="195.5" x2="179" y2="195.6" />
                <line class="st3" x1="185.7" y1="198.3" x2="186.6" y2="197.6" />
                <line class="st3" x1="190.6" y1="204.6" x2="190.5" y2="204.4" />
                <line class="st3" x1="190.1" y1="202.3" x2="190.1" y2="202.1" />
                <polyline
                  class="st3"
                  points="184.6,198.7 185.6,198.3 185.5,198.1 	"
                />
                <line class="st3" x1="184.5" y1="198.5" x2="184.6" y2="198.7" />
                <line class="st3" x1="185.6" y1="198" x2="185.7" y2="198.3" />
                <line class="st3" x1="187.4" y1="196.5" x2="187.8" y2="195.6" />
                <line class="st3" x1="186.4" y1="197.4" x2="186.6" y2="197.6" />
                <polyline
                  class="st3"
                  points="186.6,197.5 187.3,196.6 187.1,196.5 	"
                />
                <line class="st3" x1="186.5" y1="197.3" x2="186.6" y2="197.5" />
                <line class="st3" x1="187.1" y1="196.4" x2="187.4" y2="196.5" />
                <polyline
                  class="st3"
                  points="187.5,195.4 187.8,195.4 187.8,195.2 	"
                />
                <line class="st3" x1="187.5" y1="195.5" x2="187.8" y2="195.6" />
                <line class="st3" x1="167.2" y1="205" x2="167.2" y2="209.1" />
                <path
                  class="st3"
                  d="M199.5,205l-0.1-1.9c-1.1-8.9-9.2-15.2-18-14.1c-7.4,0.9-13.2,6.7-14.1,14.1l-0.1,1.9"
                />
                <line class="st3" x1="199.5" y1="205" x2="199.5" y2="209.1" />
                <line class="st3" x1="187.5" y1="195.4" x2="187.7" y2="194.4" />
                <line class="st3" x1="179" y1="194.2" x2="187.7" y2="194.2" />
                <polyline
                  class="st3"
                  points="187.7,194.4 179,194.4 179.2,195.4 	"
                />
                <line class="st3" x1="179.2" y1="195.5" x2="179.6" y2="196.4" />
                <line class="st3" x1="179.7" y1="196.5" x2="180.3" y2="197.3" />
                <line class="st3" x1="180.3" y1="197.4" x2="181.2" y2="198" />
                <line class="st3" x1="181.2" y1="198.1" x2="182.2" y2="198.5" />
                <line class="st3" x1="182.3" y1="198.5" x2="183.3" y2="198.6" />
                <line class="st3" x1="183.5" y1="198.6" x2="184.4" y2="198.5" />
                <line class="st3" x1="184.5" y1="198.5" x2="185.5" y2="198.1" />
                <line class="st3" x1="185.6" y1="198" x2="186.4" y2="197.4" />
                <line class="st3" x1="186.5" y1="197.3" x2="187.1" y2="196.5" />
                <line class="st3" x1="187.1" y1="196.4" x2="187.5" y2="195.5" />
                <path
                  class="st3"
                  d="M187.7,194.2l-0.2-1c-0.6-2.3-3-3.7-5.3-3.1c-1.5,0.4-2.7,1.6-3.1,3.1l-0.2,1"
                />
                <line class="st3" x1="178.9" y1="195.2" x2="176" y2="209.1" />
                <line class="st3" x1="190.7" y1="209.1" x2="187.8" y2="195.2" />
                <line class="st3" x1="190.1" y1="204.7" x2="190.6" y2="204.6" />
                <line class="st3" x1="190.1" y1="204.4" x2="190.5" y2="204.4" />
                <line class="st3" x1="189.6" y1="202.2" x2="190.1" y2="202.1" />
                <line class="st3" x1="189.6" y1="202.5" x2="190.1" y2="202.3" />
                <line class="st3" x1="189.2" y1="200.1" x2="189.6" y2="200" />
                <polyline
                  class="st3"
                  points="189.2,200.4 189.7,200.2 189.6,200 	"
                />
                <polyline
                  class="st3"
                  points="177.1,200 177,200.2 177.5,200.4 	"
                />
                <line class="st3" x1="177.6" y1="200.1" x2="177.1" y2="200" />
                <line class="st3" x1="177.1" y1="202.5" x2="176.6" y2="202.3" />
                <line class="st3" x1="177.2" y1="202.2" x2="176.7" y2="202.1" />
                <line class="st3" x1="176.7" y1="204.4" x2="176.2" y2="204.4" />
                <line class="st3" x1="176.6" y1="204.7" x2="176.1" y2="204.6" />
                <line class="st3" x1="176.6" y1="202.3" x2="176.7" y2="202.1" />
                <line class="st3" x1="176.1" y1="204.6" x2="176.2" y2="204.4" />
                <line class="st3" x1="176.1" y1="142.3" x2="176.2" y2="142.5" />
                <line class="st3" x1="176.6" y1="144.6" x2="176.7" y2="144.8" />
                <line class="st3" x1="176.6" y1="142.2" x2="176.1" y2="142.3" />
                <line class="st3" x1="176.7" y1="142.5" x2="176.2" y2="142.5" />
                <line class="st3" x1="177.2" y1="144.7" x2="176.7" y2="144.8" />
                <line class="st3" x1="177.1" y1="144.4" x2="176.6" y2="144.6" />
                <line class="st3" x1="177.6" y1="146.8" x2="177.1" y2="146.9" />
                <polyline
                  class="st3"
                  points="177.5,146.5 177,146.7 177.1,146.9 	"
                />
                <polyline
                  class="st3"
                  points="189.6,146.9 189.7,146.7 189.2,146.5 	"
                />
                <line class="st3" x1="189.2" y1="146.8" x2="189.6" y2="146.9" />
                <line class="st3" x1="189.6" y1="144.4" x2="190.1" y2="144.6" />
                <line class="st3" x1="189.6" y1="144.7" x2="190.1" y2="144.8" />
                <line class="st3" x1="190.1" y1="142.5" x2="190.5" y2="142.5" />
                <line class="st3" x1="190.1" y1="142.2" x2="190.6" y2="142.3" />
                <line class="st3" x1="190.7" y1="137.8" x2="187.8" y2="151.8" />
                <line class="st3" x1="178.9" y1="151.8" x2="176" y2="137.8" />
                <path
                  class="st3"
                  d="M179,152.7l0.2,1c0.6,2.3,3,3.7,5.3,3.1c1.5-0.4,2.7-1.6,3.1-3.1l0.2-1"
                />
                <line class="st3" x1="187.5" y1="151.4" x2="187.1" y2="150.5" />
                <line class="st3" x1="187.1" y1="150.4" x2="186.5" y2="149.6" />
                <line class="st3" x1="186.4" y1="149.5" x2="185.6" y2="148.9" />
                <line class="st3" x1="185.5" y1="148.8" x2="184.5" y2="148.5" />
                <line class="st3" x1="184.4" y1="148.4" x2="183.5" y2="148.3" />
                <line class="st3" x1="183.3" y1="148.3" x2="182.3" y2="148.4" />
                <line class="st3" x1="182.2" y1="148.5" x2="181.2" y2="148.8" />
                <line class="st3" x1="181.2" y1="148.9" x2="180.3" y2="149.5" />
                <line class="st3" x1="180.3" y1="149.6" x2="179.7" y2="150.4" />
                <line class="st3" x1="179.6" y1="150.5" x2="179.2" y2="151.4" />
                <polyline
                  class="st3"
                  points="179.2,151.5 179,152.5 187.7,152.5 	"
                />
                <line class="st3" x1="179" y1="152.7" x2="187.7" y2="152.7" />
                <line class="st3" x1="187.7" y1="152.5" x2="187.5" y2="151.5" />
                <line class="st3" x1="199.5" y1="141.9" x2="199.5" y2="137.8" />
                <path
                  class="st3"
                  d="M167.2,141.9l0.1,1.9c1.1,8.9,9.2,15.2,18,14.1c7.4-0.9,13.2-6.7,14.1-14.1l0.1-1.9"
                />
                <line class="st3" x1="167.2" y1="141.9" x2="167.2" y2="137.8" />
                <path
                  class="st3"
                  d="M187.7,173.5l-0.1-1l-0.4-1c-1-2.1-3.6-3-5.8-2c-1.2,0.6-2.1,1.7-2.3,3l-0.1,1l0.1,1c0.5,2.3,2.9,3.8,5.2,3.2
		c1.3-0.3,2.3-1.2,2.9-2.3l0.4-0.9L187.7,173.5z"
                />
                <line class="st3" x1="188" y1="173.3" x2="202.5" y2="173.3" />
                <line class="st3" x1="188" y1="173.6" x2="202.5" y2="173.6" />
                <line class="st3" x1="179" y1="173.3" x2="187.7" y2="173.3" />
                <line class="st3" x1="179" y1="173.6" x2="187.7" y2="173.6" />
                <line class="st3" x1="164.3" y1="173.3" x2="178.8" y2="173.3" />
                <line class="st3" x1="164.3" y1="173.6" x2="178.8" y2="173.6" />
                <line class="st3" x1="164" y1="209.3" x2="183.1" y2="209.3" />
                <polyline
                  class="st3"
                  points="183.6,209.3 202.7,209.3 202.7,137.6 183.6,137.6 	"
                />
                <polyline
                  class="st3"
                  points="183.1,137.6 164,137.6 164,209.3 	"
                />
                <polyline
                  class="st3"
                  points="211.1,142.9 211.1,129.2 155.6,129.2 155.6,217.7 211.1,217.7 211.1,204 	"
                />
                <line class="st1" x1="211.1" y1="196.9" x2="211.1" y2="150" />
                <line class="st3" x1="202.5" y1="209.1" x2="202.5" y2="173.5" />
                <polyline
                  class="st3"
                  points="183.1,209.1 164.3,209.1 164.3,173.6 	"
                />
                <line class="st3" x1="183.6" y1="209.1" x2="202.5" y2="209.1" />
                <line class="st3" x1="187.5" y1="151.4" x2="187.8" y2="151.3" />
                <polyline
                  class="st3"
                  points="187.8,151.8 187.8,151.5 187.5,151.5 	"
                />
                <line class="st3" x1="187.1" y1="150.5" x2="187.4" y2="150.4" />
                <line class="st3" x1="186.5" y1="149.6" x2="186.6" y2="149.4" />
                <polyline
                  class="st3"
                  points="187.1,150.4 187.3,150.3 186.6,149.4 	"
                />
                <line class="st3" x1="186.4" y1="149.5" x2="186.6" y2="149.3" />
                <line class="st3" x1="187.8" y1="151.3" x2="187.4" y2="150.4" />
                <line class="st3" x1="185.6" y1="148.9" x2="185.7" y2="148.6" />
                <line class="st3" x1="184.5" y1="148.5" x2="184.6" y2="148.2" />
                <polyline
                  class="st3"
                  points="185.5,148.8 185.6,148.6 184.6,148.2 	"
                />
                <line class="st3" x1="190.1" y1="144.6" x2="190.1" y2="144.8" />
                <line class="st3" x1="190.6" y1="142.3" x2="190.5" y2="142.5" />
                <line class="st3" x1="186.6" y1="149.3" x2="185.7" y2="148.6" />
                <line class="st3" x1="179.2" y1="151.4" x2="179" y2="151.3" />
                <polyline
                  class="st3"
                  points="179.2,151.5 179,151.5 178.9,151.8 	"
                />
                <line class="st3" x1="179.6" y1="150.5" x2="179.4" y2="150.4" />
                <polyline
                  class="st3"
                  points="180.1,149.4 179.4,150.3 179.7,150.4 	"
                />
                <line class="st3" x1="180.3" y1="149.6" x2="180.1" y2="149.4" />
                <line class="st3" x1="180.3" y1="149.5" x2="180.2" y2="149.3" />
                <line class="st3" x1="179.4" y1="150.4" x2="179" y2="151.3" />
                <line class="st3" x1="183.3" y1="148" x2="182.3" y2="148.2" />
                <line class="st3" x1="181.2" y1="148.9" x2="181" y2="148.6" />
                <polyline
                  class="st3"
                  points="182.1,148.2 181.1,148.6 181.2,148.8 	"
                />
                <line class="st3" x1="182.2" y1="148.5" x2="182.1" y2="148.2" />
                <line class="st3" x1="182.3" y1="148.4" x2="182.3" y2="148.2" />
                <line class="st3" x1="183.3" y1="148.3" x2="183.3" y2="148" />
                <polyline
                  class="st3"
                  points="184.5,148.2 183.5,148 183.5,148.3 	"
                />
                <line class="st3" x1="184.4" y1="148.4" x2="184.5" y2="148.2" />
                <line class="st3" x1="181" y1="148.6" x2="180.2" y2="149.3" />
                <path
                  class="st3"
                  d="M178.8,152.6l0.1,1c0.6,2.5,3,4,5.5,3.4c1.7-0.4,3-1.7,3.4-3.4l0.1-1"
                />
                <line class="st3" x1="185.7" y1="140.9" x2="185.7" y2="140.7" />
                <line class="st3" x1="181.1" y1="140.9" x2="181.1" y2="140.7" />
                <line class="st3" x1="183.8" y1="140.9" x2="183.8" y2="141.4" />
                <line class="st3" x1="183" y1="140.9" x2="183" y2="141.4" />
                <polyline
                  class="st3"
                  points="183.6,134.3 183.6,134.1 183.4,134 183.2,134.1 183.1,134.3 	"
                />
                <line class="st3" x1="183.6" y1="134.3" x2="183.6" y2="140.7" />
                <line class="st3" x1="183.1" y1="134.3" x2="183.1" y2="140.7" />
                <line class="st3" x1="181.1" y1="140.9" x2="185.7" y2="140.9" />
                <line class="st3" x1="181.1" y1="140.7" x2="185.7" y2="140.7" />
                <line class="st3" x1="164.3" y1="137.8" x2="183.1" y2="137.8" />
                <path
                  class="st3"
                  d="M167.5,141.9l0.1,1.9c1.1,8.7,9.1,14.9,17.8,13.8c7.2-0.9,12.9-6.6,13.8-13.8l0.1-1.9"
                />
                <line class="st3" x1="178.8" y1="152.6" x2="175.7" y2="137.8" />
                <line class="st3" x1="167.5" y1="141.9" x2="167.5" y2="137.8" />
                <line class="st3" x1="191" y1="137.8" x2="188" y2="152.6" />
                <polygon
                  class="st3"
                  points="183.9,141.9 183.9,141.6 183.6,141.3 183.4,141.3 183.1,141.3 182.9,141.6 182.8,141.9 182.9,142.2
		183.1,142.3 183.4,142.4 183.6,142.3 183.9,142.2 	"
                />
                <line class="st3" x1="199.3" y1="141.9" x2="199.3" y2="137.8" />
                <polyline
                  class="st3"
                  points="183.6,137.8 202.5,137.8 202.5,173.4 	"
                />
                <line class="st3" x1="164.3" y1="173.3" x2="164.3" y2="137.8" />
                <path
                  class="st3"
                  d="M188,173.5l-0.1-1l-0.4-1c-1.1-2.3-3.8-3.2-6.1-2.1c-1.3,0.6-2.2,1.8-2.5,3.1l-0.1,1l0.1,1
		c0.6,2.5,3,4,5.5,3.5c1.4-0.3,2.5-1.2,3.1-2.5l0.4-1L188,173.5z"
                />
                <rect
                  x="237.5"
                  y="140"
                  class="st3"
                  width="27.9"
                  height="60.5"
                />
                <rect
                  x="227.3"
                  y="123.8"
                  class="st3"
                  width="48.2"
                  height="93"
                />
                <line class="st3" x1="251.4" y1="186.6" x2="251.4" y2="154" />
                <line class="st3" x1="261.9" y1="200.5" x2="261.9" y2="140.1" />
                <line class="st3" x1="240.9" y1="140.1" x2="240.9" y2="200.5" />
                <line class="st3" x1="267.7" y1="170.3" x2="235.1" y2="170.3" />
                <line class="st3" x1="237.5" y1="186.6" x2="265.4" y2="186.6" />
                <polygon
                  class="st3"
                  points="267.9,170.3 267.9,170.1 267.7,170.1 267.5,170.1 267.4,170.3 267.5,170.5 267.7,170.5 267.9,170.5
		"
                />
                <polygon
                  class="st3"
                  points="264.5,170.3 264.3,170.1 264.2,170.1 264,170.1 263.9,170.3 264,170.5 264.2,170.5 264.3,170.5 	"
                />
                <polygon
                  class="st3"
                  points="238.8,170.3 238.8,170.1 238.6,170.1 238.4,170.1 238.4,170.3 238.4,170.5 238.6,170.5 238.8,170.5
		"
                />
                <polygon
                  class="st3"
                  points="235.4,170.3 235.3,170.1 235.1,170.1 234.9,170.1 234.9,170.3 234.9,170.5 235.1,170.5 235.3,170.5
		"
                />
                <line class="st3" x1="265.4" y1="154" x2="237.5" y2="154" />
                <polyline
                  class="st3"
                  points="226.4,142.9 211.1,142.9 211.1,225.4 	"
                />
                <polyline
                  class="st3"
                  points="226.4,225.4 226.4,142.9 226.4,177.9 226.4,122.9 276.4,122.9 276.4,217.7 226.4,217.7 226.4,183
		"
                />
                <path
                  class="st3"
                  d="M395.2,225.4l-1.3-3.5c-7.2-17.4-22.8-30-41.3-33.2l-3.7-0.5l-2.5-0.4c-12.6-3.1-21-14.8-19.8-27.7l0.4-2.5
		l0.9-2.7c2.8-7.2,7.9-13.3,14.5-17.2l2.5-1.4l3.7-1.5c22.7-8.8,48.3-4.9,67.4,10.3l3,2.5l3.2,2.3c30.6,20.2,71.7,11.7,91.8-18.8
		c0.6-0.8,1.1-1.7,1.6-2.5l1.9-3.5l1.6-2.8c8-13.1,22.3-21,37.6-20.8l3.2,0.2v5.1l-3.1-0.2c-13.5-0.2-26.1,6.7-33.3,18.2l-1.5,2.6
		l-2,3.6c-20.1,33.9-63.9,45.1-97.8,25c-1.1-0.6-2.1-1.3-3.1-2l-3.4-2.4l-2.9-2.5c-17.6-13.9-41.2-17.6-62.2-9.6l-3.5,1.5l-2.3,1.3
		c-5.4,3.3-9.5,8.3-11.9,14.2L332,159l-0.2,2.2c-0.7,10,5.9,19.2,15.7,21.7l2.2,0.4l3.7,0.5c21.1,3.6,38.7,18.1,46.2,38.2l1.1,3.5"
                />
                <line class="st3" x1="410" y1="153.1" x2="410" y2="155.2" />
                <line class="st3" x1="410" y1="155.7" x2="410" y2="157.7" />
                <line class="st3" x1="410" y1="158.2" x2="410" y2="160.3" />
                <line class="st3" x1="410" y1="160.8" x2="410" y2="162.8" />
                <line class="st3" x1="410" y1="163.3" x2="410" y2="165.4" />
                <line class="st3" x1="410" y1="165.9" x2="410" y2="167.9" />
                <line class="st3" x1="410" y1="168.4" x2="410" y2="170.4" />
                <line class="st3" x1="410" y1="171" x2="410" y2="173" />
                <line class="st3" x1="410" y1="173.5" x2="410" y2="180.6" />
                <line class="st3" x1="415.1" y1="153.1" x2="415.1" y2="155.2" />
                <line class="st3" x1="415.1" y1="155.7" x2="415.1" y2="157.7" />
                <line class="st3" x1="415.1" y1="158.2" x2="415.1" y2="160.3" />
                <line class="st3" x1="415.1" y1="160.8" x2="415.1" y2="162.8" />
                <line class="st3" x1="415.1" y1="163.3" x2="415.1" y2="165.4" />
                <line class="st3" x1="415.1" y1="165.9" x2="415.1" y2="167.9" />
                <line class="st3" x1="415.1" y1="168.4" x2="415.1" y2="170.4" />
                <line class="st3" x1="415.1" y1="171" x2="415.1" y2="173" />
                <line class="st3" x1="415.1" y1="173.5" x2="415.1" y2="175.5" />
                <line class="st3" x1="410" y1="180.6" x2="442.3" y2="180.6" />
                <line class="st3" x1="410" y1="175.5" x2="447.4" y2="175.5" />
                <line class="st3" x1="410" y1="173.5" x2="415.1" y2="173.5" />
                <line class="st3" x1="410" y1="173" x2="415.1" y2="173" />
                <line class="st3" x1="431.1" y1="180.6" x2="431.1" y2="192.1" />
                <line class="st3" x1="429.8" y1="180.6" x2="429.8" y2="193.3" />
                <line class="st3" x1="428.6" y1="180.6" x2="428.6" y2="194.6" />
                <line class="st3" x1="431.1" y1="192.1" x2="442.3" y2="192.1" />
                <line class="st3" x1="429.8" y1="193.3" x2="442.3" y2="193.3" />
                <polyline
                  class="st3"
                  points="428.6,194.6 442.3,194.6 442.3,180.6 	"
                />
                <line class="st3" x1="447.4" y1="175.5" x2="447.4" y2="194.6" />
                <rect
                  x="432.2"
                  y="180.6"
                  class="st3"
                  width="10.1"
                  height="10.2"
                />
                <path class="st3" d="M432.2,190.8" />
                <line class="st3" x1="410" y1="171" x2="415.1" y2="171" />
                <line class="st3" x1="410" y1="170.4" x2="415.1" y2="170.4" />
                <line class="st3" x1="410" y1="168.4" x2="415.1" y2="168.4" />
                <line class="st3" x1="410" y1="167.9" x2="415.1" y2="167.9" />
                <line class="st3" x1="410" y1="165.9" x2="415.1" y2="165.9" />
                <line class="st3" x1="410" y1="165.4" x2="415.1" y2="165.4" />
                <line class="st3" x1="410" y1="163.3" x2="415.1" y2="163.3" />
                <line class="st3" x1="410" y1="162.8" x2="415.1" y2="162.8" />
                <line class="st3" x1="410" y1="160.8" x2="415.1" y2="160.8" />
                <line class="st3" x1="410" y1="160.3" x2="415.1" y2="160.3" />
                <line class="st3" x1="410" y1="158.2" x2="415.1" y2="158.2" />
                <line class="st3" x1="410" y1="157.7" x2="415.1" y2="157.7" />
                <line class="st3" x1="410" y1="155.7" x2="415.1" y2="155.7" />
                <line class="st3" x1="410" y1="155.2" x2="415.1" y2="155.2" />
                <line class="st3" x1="410" y1="153.1" x2="415.1" y2="153.1" />
                <line class="st3" x1="442.3" y1="194.6" x2="447.4" y2="194.6" />
                <line class="st3" x1="410" y1="148" x2="410" y2="150.1" />
                <line class="st3" x1="410" y1="150.6" x2="410" y2="152.7" />
                <polyline
                  class="st3"
                  points="415.1,150.9 415.1,152.7 410,152.7 	"
                />
                <line class="st3" x1="410" y1="150.6" x2="414.7" y2="150.6" />
                <line class="st3" x1="410" y1="150.1" x2="414.1" y2="150.1" />
                <line class="st3" x1="410" y1="148" x2="411.6" y2="148" />
                <line class="st3" x1="467.7" y1="175.5" x2="465.7" y2="175.5" />
                <line class="st3" x1="465.2" y1="175.5" x2="463.2" y2="175.5" />
                <line class="st3" x1="462.6" y1="175.5" x2="460.7" y2="175.5" />
                <line class="st3" x1="460.1" y1="175.5" x2="458.1" y2="175.5" />
                <line class="st3" x1="457.6" y1="175.5" x2="455.6" y2="175.5" />
                <line class="st3" x1="455" y1="175.5" x2="453" y2="175.5" />
                <line class="st3" x1="452.5" y1="175.5" x2="450.5" y2="175.5" />
                <line class="st3" x1="449.9" y1="175.5" x2="447.9" y2="175.5" />
                <line class="st3" x1="467.7" y1="180.6" x2="465.7" y2="180.6" />
                <line class="st3" x1="465.2" y1="180.6" x2="463.2" y2="180.6" />
                <line class="st3" x1="462.6" y1="180.6" x2="460.7" y2="180.6" />
                <line class="st3" x1="460.1" y1="180.6" x2="458.1" y2="180.6" />
                <line class="st3" x1="457.6" y1="180.6" x2="455.6" y2="180.6" />
                <line class="st3" x1="455" y1="180.6" x2="453" y2="180.6" />
                <line class="st3" x1="452.5" y1="180.6" x2="450.5" y2="180.6" />
                <polyline
                  class="st3"
                  points="449.9,180.6 447.9,180.6 447.9,175.5 	"
                />
                <line class="st3" x1="449.9" y1="175.5" x2="449.9" y2="180.6" />
                <line class="st3" x1="450.5" y1="175.5" x2="450.5" y2="180.6" />
                <line class="st3" x1="452.5" y1="175.5" x2="452.5" y2="180.6" />
                <line class="st3" x1="453" y1="175.5" x2="453" y2="180.6" />
                <line class="st3" x1="455" y1="175.5" x2="455" y2="180.6" />
                <line class="st3" x1="455.6" y1="175.5" x2="455.6" y2="180.6" />
                <line class="st3" x1="457.6" y1="175.5" x2="457.6" y2="180.6" />
                <line class="st3" x1="458.1" y1="175.5" x2="458.1" y2="180.6" />
                <line class="st3" x1="460.1" y1="175.5" x2="460.1" y2="180.6" />
                <line class="st3" x1="460.7" y1="175.5" x2="460.7" y2="180.6" />
                <line class="st3" x1="462.6" y1="175.5" x2="462.6" y2="180.6" />
                <line class="st3" x1="463.2" y1="175.5" x2="463.2" y2="180.6" />
                <line class="st3" x1="465.2" y1="175.5" x2="465.2" y2="180.6" />
                <line class="st3" x1="465.7" y1="175.5" x2="465.7" y2="180.6" />
                <line class="st3" x1="467.7" y1="175.5" x2="467.7" y2="180.6" />
                <line class="st3" x1="470.3" y1="175.5" x2="468.3" y2="175.5" />
                <polyline
                  class="st3"
                  points="470.3,180.6 468.3,180.6 468.3,175.5 	"
                />
                <line class="st3" x1="470.3" y1="175.5" x2="470.3" y2="180.6" />
                <line class="st3" x1="488.1" y1="175.5" x2="486.1" y2="175.5" />
                <line class="st3" x1="485.6" y1="175.5" x2="483.5" y2="175.5" />
                <line class="st3" x1="483" y1="175.5" x2="481" y2="175.5" />
                <line class="st3" x1="480.5" y1="175.5" x2="478.4" y2="175.5" />
                <line class="st3" x1="477.9" y1="175.5" x2="475.9" y2="175.5" />
                <line class="st3" x1="475.4" y1="175.5" x2="473.4" y2="175.5" />
                <line class="st3" x1="472.8" y1="175.5" x2="470.8" y2="175.5" />
                <line class="st3" x1="488.1" y1="180.6" x2="486.1" y2="180.6" />
                <line class="st3" x1="485.6" y1="180.6" x2="483.5" y2="180.6" />
                <line class="st3" x1="483" y1="180.6" x2="481" y2="180.6" />
                <line class="st3" x1="480.5" y1="180.6" x2="478.4" y2="180.6" />
                <line class="st3" x1="477.9" y1="180.6" x2="475.9" y2="180.6" />
                <line class="st3" x1="475.4" y1="180.6" x2="473.4" y2="180.6" />
                <polyline
                  class="st3"
                  points="472.8,180.6 470.8,180.6 470.8,175.5 	"
                />
                <line class="st3" x1="472.8" y1="175.5" x2="472.8" y2="180.6" />
                <line class="st3" x1="473.4" y1="175.5" x2="473.4" y2="180.6" />
                <line class="st3" x1="475.4" y1="175.5" x2="475.4" y2="180.6" />
                <line class="st3" x1="475.9" y1="175.5" x2="475.9" y2="180.6" />
                <line class="st3" x1="477.9" y1="175.5" x2="477.9" y2="180.6" />
                <line class="st3" x1="478.4" y1="175.5" x2="478.4" y2="180.6" />
                <line class="st3" x1="480.5" y1="175.5" x2="480.5" y2="180.6" />
                <line class="st3" x1="481" y1="175.5" x2="481" y2="180.6" />
                <line class="st3" x1="483" y1="175.5" x2="483" y2="180.6" />
                <line class="st3" x1="483.5" y1="175.5" x2="483.5" y2="180.6" />
                <line class="st3" x1="485.6" y1="175.5" x2="485.6" y2="180.6" />
                <line class="st3" x1="486.1" y1="175.5" x2="486.1" y2="180.6" />
                <line class="st3" x1="488.1" y1="175.5" x2="488.1" y2="180.6" />
                <line class="st3" x1="490.7" y1="175.5" x2="488.6" y2="175.5" />
                <polyline
                  class="st3"
                  points="490.7,180.6 488.6,180.6 488.6,175.5 	"
                />
                <line class="st3" x1="490.7" y1="175.5" x2="490.7" y2="180.6" />
                <line class="st3" x1="485.6" y1="160.6" x2="485.6" y2="162.3" />
                <line class="st3" x1="485.6" y1="162.8" x2="485.6" y2="164.8" />
                <line class="st3" x1="485.6" y1="165.4" x2="485.6" y2="167.4" />
                <line class="st3" x1="485.6" y1="167.9" x2="485.6" y2="169.9" />
                <line class="st3" x1="485.6" y1="170.4" x2="485.6" y2="172.5" />
                <line class="st3" x1="485.6" y1="173" x2="485.6" y2="175" />
                <line class="st3" x1="490.7" y1="160.3" x2="490.7" y2="162.3" />
                <line class="st3" x1="490.7" y1="162.8" x2="490.7" y2="164.8" />
                <line class="st3" x1="490.7" y1="165.4" x2="490.7" y2="167.4" />
                <line class="st3" x1="490.7" y1="167.9" x2="490.7" y2="169.9" />
                <line class="st3" x1="490.7" y1="170.4" x2="490.7" y2="172.5" />
                <polyline class="st3" points="490.7,173 490.7,175 485.6,175 	" />
                <line class="st3" x1="485.6" y1="173" x2="490.7" y2="173" />
                <line class="st3" x1="485.6" y1="172.5" x2="490.7" y2="172.5" />
                <line class="st3" x1="485.6" y1="170.4" x2="490.7" y2="170.4" />
                <line class="st3" x1="485.6" y1="169.9" x2="490.7" y2="169.9" />
                <line class="st3" x1="485.6" y1="167.9" x2="490.7" y2="167.9" />
                <line class="st3" x1="485.6" y1="167.4" x2="490.7" y2="167.4" />
                <line class="st3" x1="485.6" y1="165.4" x2="490.7" y2="165.4" />
                <line class="st3" x1="485.6" y1="164.8" x2="490.7" y2="164.8" />
                <line class="st3" x1="485.6" y1="162.8" x2="490.7" y2="162.8" />
                <line class="st3" x1="485.6" y1="162.3" x2="490.7" y2="162.3" />
                <line class="st3" x1="486.5" y1="160.3" x2="490.7" y2="160.3" />
                <polyline
                  class="st3"
                  points="490.7,158.4 490.7,159.7 487.7,159.7 	"
                />
                <path
                  class="st4"
                  d="M858,503.3H746l0,0h-37.1l-1.8,0.1c-7.7,0.9-13.5,7.4-13.4,15.1v78.9l0.1,1.9c0.8,7,6.3,12.5,13.3,13.3
		l1.8,0.1h164.3l1.9-0.1c7-0.8,12.5-6.3,13.4-13.3l0.1-1.9v-78.8c0-7.7-5.8-14.2-13.4-15.1l-1.9-0.1L858,503.3"
                />
                <path
                  class="st4"
                  d="M299.6,597.4v-78.8l0.1-1.9c0.8-7,6.4-12.4,13.3-13.3l1.8-0.1h207.4l0,0h37.1l1.9,0.1
		c6.9,0.9,12.4,6.3,13.3,13.3l0.1,1.9v78.8l-0.1,1.9c-1,7.7-7.5,13.4-15.2,13.4H314.8l-1.8-0.1c-7-0.8-12.5-6.3-13.3-13.3
		L299.6,597.4z"
                />
                <path
                  class="st5"
                  d="M415.7,558.2l3.5-0.5c22.5-3.8,40.3-21.3,44.3-43.8l0.5-3.5l0,0l1.3-7.2h5l-1.1,6.5l0,0l-0.5,3.7
		c-4,25.6-24.2,45.7-49.9,49.4l-3.8,0.4L415.7,558.2z"
                />
                <path
                  class="st5"
                  d="M415,563.3l0.3-0.9l0.3-1.6l0.1-1.7l-0.1-1"
                />
                <path
                  class="st5"
                  d="M405,571.6c0.8-0.1,1.7-0.3,2.5-0.5l0,0l15.4,41.6h-2.7L405,571.6L405,571.6z"
                />
                <path
                  class="st5"
                  d="M391.4,555c-0.3,0.8-0.5,1.7-0.6,2.5l-0.1,1.6l0.1,1l0,0l-3.9-1.1c-18.6-4.5-38.3-0.8-54.1,10.2l-3.2,2.4
		l-3.4,2.6c-6.9,5-14.6,8.8-22.8,11.4l-4.1,1.1v-5.2l4.1-1.3c6.9-2.3,13.4-5.7,19.4-9.9l3.5-2.6l3.2-2.5
		c16.8-11.8,37.8-15.9,57.8-11.2l3.9,1"
                />
                <path
                  class="st3"
                  d="M299.6,597.4v-78.8l0.1-1.9c0.8-7,6.4-12.4,13.3-13.3l1.8-0.1h207.4l0,0h37.1l1.9,0.1
		c6.9,0.9,12.4,6.3,13.3,13.3l0.1,1.9v78.8l-0.1,1.9c-1,7.7-7.5,13.4-15.2,13.4H314.8l-1.8-0.1c-7-0.8-12.5-6.3-13.3-13.3
		L299.6,597.4z"
                />
                <path
                  class="st3"
                  d="M415.9,558.3l3.5-0.5c22.5-3.8,40.3-21.3,44.3-43.8l0.5-3.5l0,0l1.3-7.2"
                />
                <path
                  class="st3"
                  d="M470.4,503.3l-1.1,6.5l0,0l-0.5,3.7c-4,25.6-24.2,45.7-49.9,49.4l-3.8,0.4"
                />
                <line class="st3" x1="405.2" y1="571.7" x2="420.3" y2="612.7" />
                <line class="st3" x1="407.6" y1="571.1" x2="423" y2="612.7" />
                <path
                  class="st3"
                  d="M391.6,555.1l-3.9-1c-20-4.7-41.1-0.7-57.8,11.2l-3.2,2.5l-3.5,2.6c-5.9,4.2-12.5,7.6-19.4,9.9l-4.1,1.3"
                />
                <path
                  class="st3"
                  d="M299.6,586.9l4.1-1.1c8.1-2.6,15.8-6.4,22.7-11.4l3.4-2.6l3.2-2.4c15.7-11,35.4-14.7,54.1-10.2l3.9,1.1"
                />
                <path
                  class="st6"
                  d="M416,559.3l-0.1-1.6l-0.3-1.6c-1.8-6.7-8.7-10.6-15.4-8.8c-4.9,1.3-8.4,5.4-9.1,10.4l-0.1,1.6l0.1,1.7
		c1,6.9,7.3,11.7,14.2,10.7c5-0.7,9.1-4.3,10.4-9.1l0.3-1.6V559.3z"
                />
                <path
                  class="st4"
                  d="M314.8,485.5l-1.8-0.1c-7-0.8-12.5-6.3-13.3-13.3l-0.1-1.9V258.4l0.1-1.9c0.9-7.7,7.4-13.4,15.1-13.4h170.4
		l1.8,0.1c7.7,0.9,13.5,7.4,13.4,15.2v211.8l-0.1,1.9c-0.8,7-6.3,12.5-13.3,13.3l-1.8,0.1H314.8z"
                />
                <path
                  class="st5"
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
                  class="st6"
                  d="M357,368.6v-0.8l0.3-0.8l0.5-0.6l0.7-0.5l0.8-0.2l0.8,0.1l4.6,1.2l4.6,1.1l0.8,0.3c1.2,0.7,1.6,2.2,0.9,3.4
		c-0.1,0.1-0.1,0.2-0.2,0.3l-0.7,0.6l-2.8,2l-2.7,2.1l-2.5,2.3l-0.7,0.5c-1.3,0.6-2.8,0.1-3.4-1.2c0-0.1,0-0.1-0.1-0.2l-0.1-0.8
		l-0.4-4.4L357,368.6z"
                />
                <path
                  class="st3"
                  d="M398,243.1l0.1,3.2c-0.3,17-11.3,32.7-26.6,39.7l-3.2,1.3l-2.9,1.3c-20,9.4-29.8,32.3-22.6,53.3l1.1,3l0.2,0.4
		l1.9,3.9c17.6,38.3,0.8,83.5-37.5,101.1c-1.6,0.7-3.2,1.4-4.8,2l-4.1,1.4"
                />
                <path
                  class="st3"
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
                class="st4"
                d="M50.5,564.3l-1.3-0.1c-3.7-0.6-6.3-3.8-6.3-7.5v-20.3l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h61.1l1.3,0.1
	c3.6,0.6,6.3,3.8,6.3,7.5v20.3l-0.1,1.3c-0.6,3.2-3,5.6-6.2,6.2l-1.3,0.1H50.5z"
              />
              <path
                class="st4"
                d="M144.6,564.3l-1.3-0.1c-3.2-0.5-5.7-3-6.2-6.2l-0.1-1.3v-20.3l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h83.9
	l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v20.3L236,558c-0.5,3.2-3,5.7-6.2,6.2l-1.3,0.1H144.6z"
              />
              <path
                class="st4"
                d="M254,510.9l0.1-1.3c0.5-3.2,3-5.6,6.2-6.2l1.3-0.1h12.5l1.3,0.1c3.6,0.6,6.3,3.8,6.3,7.5v86.5l-0.1,1.9
	c-0.8,7-6.3,12.5-13.3,13.3l-1.8,0.1H144.6l-1.3-0.1c-3.2-0.5-5.6-3-6.2-6.2l-0.1-1.3v-15.3l0.1-1.3c0.5-3.2,3-5.6,6.2-6.2l1.3-0.1
	H254V510.9"
              />
              <polygon
                class="st4"
                points="70.8,364.2 70.5,365 69.9,365.6 69.2,366 68.3,366.1 57.7,366.1 57.7,366.1 57,366 56.3,365.7
	55.7,365.2 55.4,364.5 55.2,363.7 55.2,363 59.9,344.3 59.9,344.3 73.6,291.1 73.9,290.4 74.4,289.8 75.2,289.3 75.9,289.2
	76.7,289.3 86.9,291.9 87.6,292.2 88.2,292.8 88.7,293.4 88.8,294.2 88.8,295 88,297.9 "
              />
              <path
                class="st4"
                d="M84.1,384H54.4l0,0l-1.1,0.1l-1.1,0.4l-1,0.7l-0.8,0.8l-0.7,1l-0.4,1.1l-3.4,16.1h200.4c3.7,0,6.8,2.7,7.5,6.3
	l0.1,1.3V478l0.1,1.3c0.6,3.1,3,5.6,6.2,6.2l1.3,0.1H274l1.3-0.1c3.1-0.6,5.6-3,6.2-6.2l0.1-1.3v-83.6l-3.1-0.5l-3.2-0.2l-3.1-0.1
	l-3.2,0.2l-3.1,0.4l-2.7,0.1c-17.1-0.6-29.8-15.7-25.7-32.6l0.7-2.3l1-3.3l0.7-3.4l0.5-3.4l0.2-3.5v-3.4l-0.2-3.5l-0.3-4
	c-3.8-36.6-36.6-63.2-73.1-59.3c-5.6,0.6-11.1,1.9-16.4,3.8l-3.7,1.5l0,0l-5.3,2.3c-9,3.5-18.3,6-27.8,7.6l-5.7,0.8l-1,4L84.1,384z"
              />
              <!--公共停车场-->
              <line class="st1" x1="254" y1="582.1" x2="147.2" y2="582.1" />
              <!--公共停车场135-->
              <rect
                id="BM01L1_135"
                x="177.7"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_135') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M177.7,597.4" />
              <!--公共停车场134-->
              <rect
                id="BM01L1_134"
                x="185.3"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_134') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M185.3,597.4" />
              <!--公共停车场133-->
              <rect
                id="BM01L1_133"
                x="193"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_133') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M193,597.4" />
              <!--公共停车场132-->
              <rect
                id="BM01L1_132"
                x="200.6"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_132') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M200.6,597.4" />
              <!--公共停车场131-->
              <rect
                id="BM01L1_131"
                x="208.2"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_131') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M208.2,597.4" />
              <!--公共停车场130-->
              <rect
                id="BM01L1_130"
                x="215.9"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_130') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M215.9,597.4" />
              <!--公共停车场127-->
              <rect
                id="BM01L1_127"
                x="238.8"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_127') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M238.8,597.4" />
              <!--公共停车场126-->
              <rect
                id="BM01L1_126"
                x="246.4"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_126') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场125-->
              <rect
                id="BM01L1_125"
                x="254"
                y="569.4"
                :class="P1occupyList.includes('BM01L1_125') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场124-->
              <rect
                id="BM01L1_124"
                x="254"
                y="561.8"
                :class="P1occupyList.includes('BM01L1_124') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场123-->
              <rect
                id="BM01L1_123"
                x="254"
                y="554.2"
                :class="P1occupyList.includes('BM01L1_123') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场122-->
              <rect
                id="BM01L1_122"
                x="254"
                y="546.6"
                :class="P1occupyList.includes('BM01L1_122') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场121-->
              <rect
                id="BM01L1_121"
                x="254"
                y="539"
                :class="P1occupyList.includes('BM01L1_121') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场120-->
              <rect
                id="BM01L1_120"
                x="254"
                y="531.4"
                :class="P1occupyList.includes('BM01L1_120') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场119-->
              <rect
                id="BM01L1_119"
                x="254"
                y="523.8"
                :class="P1occupyList.includes('BM01L1_119') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场118-->
              <rect
                id="BM01L1_118"
                x="254"
                y="516.2"
                :class="P1occupyList.includes('BM01L1_118') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <path class="st1" d="M246.4,597.4" />
              <!--公共停车场139-->
              <rect
                id="BM01L1_139"
                x="147.2"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_139') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M147.2,597.4" />
              <!--公共停车场138-->
              <rect
                id="BM01L1_138"
                x="154.8"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_138') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M154.8,597.4" />
              <!--公共停车场137-->
              <rect
                id="BM01L1_137"
                x="162.5"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_137') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M162.4,597.4" />
              <!--公共停车场136-->
              <rect
                id="BM01L1_136"
                x="170.1"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_136') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M170.1,597.4" />
              <!--公共停车场009-->
              <rect
                id="BM01L1_009"
                x="185.3"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_009') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M185.3,404" />
              <!--公共停车场010-->
              <rect
                id="BM01L1_010"
                x="193"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_010') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M193,404" />
              <!--公共停车场011-->
              <rect
                id="BM01L1_011"
                x="200.6"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_011') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M200.6,404" />
              <!--公共停车场012-->
              <rect
                id="BM01L1_012"
                x="208.2"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_012') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M208.2,404" />
              <!--公共停车场013-->
              <rect
                id="BM01L1_013"
                x="215.9"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_013') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M215.9,404" />
              <!--公共停车场014-->
              <rect
                id="BM01L1_014"
                x="223.5"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_014') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M223.4,404" />
              <path class="st1" d="M231.2,404" />
              <!--公共停车场004-->
              <rect
                id="BM01L1_004"
                x="147.2"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_004') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M147.2,404" />
              <!--公共停车场005-->
              <rect
                id="BM01L1_005"
                x="154.8"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_005') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M154.8,404" />
              <!--公共停车场006-->
              <rect
                id="BM01L1_006"
                x="162.5"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_006') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M162.4,404" />
              <!--公共停车场007-->
              <rect
                id="BM01L1_007"
                x="170.1"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_007') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M170.1,404" />
              <!--公共停车场008-->
              <rect
                id="BM01L1_008"
                x="177.7"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_008') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M177.7,404" />
              <!--公共停车场129-->
              <rect
                id="BM01L1_129"
                x="223.5"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_129') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M223.4,597.4" />
              <!--公共停车场128-->
              <rect
                id="BM01L1_128"
                x="231.2"
                y="582.2"
                :class="P1occupyList.includes('BM01L1_128') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M231.2,597.4" />
              <!--公共停车场002-->
              <rect
                id="BM01L1_002"
                x="131.9"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_002') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M131.9,404" />
              <!--公共停车场003-->
              <rect
                id="BM01L1_003"
                x="139.5"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_003') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M139.5,404" />
              <path class="st1" d="M95.5,243.1L95.5,243.1z" />
              <line class="st1" x1="144.6" y1="528.7" x2="228.6" y2="528.7" />
              <!--公共停车场111-->
              <rect
                id="BM01L1_111"
                x="175.2"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_111') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M175.2,544" />
              <!--公共停车场112-->
              <rect
                id="BM01L1_112"
                x="182.8"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_112') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M182.8,544" />
              <!--公共停车场113-->
              <rect
                id="BM01L1_113"
                x="190.4"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_113') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M190.4,544" />
              <!--公共停车场114-->
              <rect
                id="BM01L1_114"
                x="198"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_114') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st7" d="M198,544" />
              <!--公共停车场115-->
              <rect
                id="BM01L1_115"
                x="205.7"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_115') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M205.7,544" />
              <!--公共停车场116-->
              <rect
                id="BM01L1_116"
                x="213.3"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_116') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M213.3,544" />
              <!--公共停车场117-->
              <rect
                id="BM01L1_117"
                x="221"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_117') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M221,544" />
              <!--公共停车场107-->
              <rect
                id="BM01L1_107"
                x="144.6"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_107') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M144.6,544" />
              <!--公共停车场108-->
              <rect
                id="BM01L1_108"
                x="152.3"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_108') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M152.3,544" />
              <!--公共停车场109-->
              <rect
                id="BM01L1_109"
                x="159.9"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_109') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M159.9,544" />
              <!--公共停车场110-->
              <rect
                id="BM01L1_110"
                x="167.6"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_110') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M167.6,544" />
              <line class="st1" x1="144.6" y1="564.3" x2="228.6" y2="564.3" />
              <!--公共停车场146-->
              <rect
                id="BM01L1_146"
                x="175.2"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_146') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M175.2,564.3" />
              <!--公共停车场145-->
              <rect
                id="BM01L1_145"
                x="182.8"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_145') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M182.8,564.3" />
              <!--公共停车场144-->
              <rect
                id="BM01L1_144"
                x="190.4"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_144') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M190.4,564.3" />
              <!--公共停车场143-->
              <rect
                id="BM01L1_143"
                x="198"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_143') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M198,564.3" />
              <!--公共停车场142-->
              <rect
                id="BM01L1_142"
                x="205.7"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_142') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M205.7,564.3" />
              <!--公共停车场141-->
              <rect
                id="BM01L1_141"
                x="213.3"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_141') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M213.3,564.3" />
              <!--公共停车场140-->
              <rect
                id="BM01L1_140"
                x="221"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_140') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M221,564.3" />
              <!--公共停车场150-->
              <rect
                id="BM01L1_150"
                x="144.6"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_150') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M144.6,564.3" />
              <!--公共停车场149-->
              <rect
                id="BM01L1_149"
                x="152.3"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_149') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M152.3,564.3" />
              <!--公共停车场148-->
              <rect
                id="BM01L1_148"
                x="159.9"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_148') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M159.9,564.3" />
              <!--公共停车场147-->
              <rect
                id="BM01L1_147"
                x="167.6"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_147') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M167.6,564.3" />
              <path
                class="st4"
                d="M144.6,510.8l-1.3-0.1c-3.2-0.5-5.7-3-6.2-6.2l-0.1-1.3v-20.3l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h83.9
	l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v20.3l-0.1,1.3c-0.5,3.2-3,5.7-6.2,6.2l-1.3,0.1H144.6z"
              />
              <line class="st1" x1="144.6" y1="475.2" x2="228.6" y2="475.2" />
              <!--公共停车场072-->
              <rect
                id="BM01L1_072"
                x="175.2"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_072') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M175.2,490.5" />
              <!--公共停车场073-->
              <rect
                id="BM01L1_073"
                x="182.8"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_073') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M182.8,490.5" />
              <!--公共停车场074-->
              <rect
                id="BM01L1_074"
                x="190.4"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_074') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M190.4,490.5" />
              <!--公共停车场075-->
              <rect
                id="BM01L1_075"
                x="198"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_075') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M198,490.5" />
              <!--公共停车场076-->
              <rect
                id="BM01L1_076"
                x="205.7"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_076') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M205.7,490.5" />
              <!--公共停车场077-->
              <rect
                id="BM01L1_077"
                x="213.3"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_077') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M213.3,490.5" />
              <!--公共停车场078-->
              <rect
                id="BM01L1_078"
                x="221"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_078') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M221,490.5" />
              <!--公共停车场068-->
              <rect
                id="BM01L1_068"
                x="144.6"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_068') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M144.6,490.5" />
              <!--公共停车场069-->
              <rect
                id="BM01L1_069"
                x="152.3"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_069') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M152.3,490.5" />
              <!--公共停车场-->
              <rect
                id="BM01L1_070"
                x="159.9"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_070') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M159.9,490.5" />
              <!--公共停车场071-->
              <rect
                id="BM01L1_071"
                x="167.6"
                y="475.3"
                :class="P1occupyList.includes('BM01L1_071') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M167.6,490.5" />
              <line class="st1" x1="144.6" y1="510.8" x2="228.6" y2="510.8" />
              <!--公共停车场085-->
              <rect
                id="BM01L1_085"
                x="175.2"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_085') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M175.2,510.8" />
              <!--公共停车场084-->
              <rect
                id="BM01L1_084"
                x="182.8"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_084') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M182.8,510.8" />
              <!--公共停车场083-->
              <rect
                id="BM01L1_083"
                x="190.4"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_083') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M190.4,510.8" />
              <!--公共停车场082-->
              <rect
                id="BM01L1_082"
                x="198"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_082') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M198,510.8" />
              <!--公共停车场081-->
              <rect
                id="BM01L1_081"
                x="205.7"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_081') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M205.7,510.8" />
              <!--公共停车场-->
              <rect
                id="BM01L1_080"
                x="213.3"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_080') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M213.3,510.8" />
              <!--公共停车场079-->
              <rect
                id="BM01L1_079"
                x="221"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_079') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M221,510.8" />
              <!--公共停车场089-->
              <rect
                id="BM01L1_089"
                x="144.6"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_089') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M144.6,510.8" />
              <!--公共停车场088-->
              <rect
                id="BM01L1_088"
                x="152.3"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_088') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M152.3,510.8" />
              <!--公共停车场087-->
              <rect
                id="BM01L1_087"
                x="159.9"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_087') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M159.9,510.8" />
              <!--公共停车场086-->
              <rect
                id="BM01L1_086"
                x="167.6"
                y="495.6"
                :class="P1occupyList.includes('BM01L1_086') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M167.6,510.8" />
              <path
                class="st4"
                d="M144.6,457.2l-1.3-0.1c-3.2-0.5-5.7-3-6.2-6.2l-0.1-1.3v-20.3l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h83.9
	l1.3,0.1c3.2,0.5,5.7,3,6.2,6.2l0.1,1.3v20.3l-0.1,1.3c-0.5,3.2-3,5.7-6.2,6.2l-1.3,0.1H144.6z"
              />
              <line class="st1" x1="144.6" y1="421.7" x2="228.6" y2="421.7" />
              <!--公共停车场026-->
              <rect
                id="BM01L1_026"
                x="175.2"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_026') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M175.2,436.9" />
              <!--公共停车场027-->
              <rect
                id="BM01L1_027"
                x="182.8"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_027') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M182.8,436.9" />
              <!--公共停车场028-->
              <rect
                id="BM01L1_028"
                x="190.4"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_028') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M190.4,436.9" />
              <!--公共停车场029-->
              <rect
                id="BM01L1_029"
                x="198"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_029') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M198,436.9" />
              <!--公共停车场030-->
              <rect
                id="BM01L1_030"
                x="205.7"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_030') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M205.7,436.9" />
              <!--公共停车场031-->
              <rect
                id="BM01L1_031"
                x="213.3"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_031') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M213.3,436.9" />
              <!--公共停车场032-->
              <rect
                id="BM01L1_032"
                x="221"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_032') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M221,436.9" />
              <!--公共停车场022-->
              <rect
                id="BM01L1_022"
                x="144.6"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_022') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M144.6,436.9" />
              <!--公共停车场023-->
              <rect
                id="BM01L1_023"
                x="152.3"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_023') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M152.3,436.9" />
              <!--公共停车场024-->
              <rect
                id="BM01L1_024"
                x="159.9"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_024') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M159.9,436.9" />
              <!--公共停车场025-->
              <rect
                id="BM01L1_025"
                x="167.6"
                y="421.7"
                :class="P1occupyList.includes('BM01L1_025') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M167.6,436.9" />
              <line class="st1" x1="144.6" y1="457.2" x2="228.6" y2="457.2" />
              <!--公共停车场046-->
              <rect
                id="BM01L1_046"
                x="175.2"
                y="442"
                :class="P1occupyList.includes('BM01L1_046') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M175.2,457.2" />
              <!--公共停车场045-->
              <rect
                id="BM01L1_045"
                x="182.8"
                y="442"
                :class="P1occupyList.includes('BM01L1_045') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M182.8,457.2" />
              <!--公共停车场044-->
              <rect
                id="BM01L1_044"
                x="190.4"
                y="442"
                :class="P1occupyList.includes('BM01L1_044') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M190.4,457.2" />
              <!--公共停车场043-->
              <rect
                id="BM01L1_043"
                x="198"
                y="442"
                :class="P1occupyList.includes('BM01L1_043') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M198,457.2" />
              <!--公共停车场042-->
              <rect
                id="BM01L1_042"
                x="205.7"
                y="442"
                :class="P1occupyList.includes('BM01L1_042') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M205.7,457.2" />
              <!--公共停车场041-->
              <rect
                id="BM01L1_041"
                x="213.3"
                y="442"
                :class="P1occupyList.includes('BM01L1_041') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M213.3,457.2" />
              <!--公共停车场040-->
              <rect
                id="BM01L1_040"
                x="221"
                y="442"
                :class="P1occupyList.includes('BM01L1_040') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M221,457.2" />
              <!--公共停车场050-->
              <rect
                id="BM01L1_050"
                x="144.6"
                y="442"
                :class="P1occupyList.includes('BM01L1_050') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M144.6,457.2" />
              <!--公共停车场049-->
              <rect
                id="BM01L1_049"
                x="152.3"
                y="442"
                :class="P1occupyList.includes('BM01L1_049') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M152.3,457.2" />
              <!--公共停车场048-->
              <rect
                id="BM01L1_048"
                x="159.9"
                y="442"
                :class="P1occupyList.includes('BM01L1_048') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M159.9,457.2" />
              <!--公共停车场047-->
              <rect
                id="BM01L1_047"
                x="167.6"
                y="442"
                :class="P1occupyList.includes('BM01L1_047') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M167.6,457.2" />
              <!--公共停车场102-->
              <rect
                id="BM01L1_102"
                x="73.4"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_102') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M73.4,544" />
              <!--公共停车场103-->
              <rect
                id="BM01L1_103"
                x="81"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_103') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M81,544" />
              <!--公共停车场104-->
              <rect
                id="BM01L1_104"
                x="88.7"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_104') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M88.7,544" />
              <!--公共停车场105-->
              <rect
                id="BM01L1_105"
                x="96.3"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_105') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M96.3,544" />
              <!--公共停车场106-->
              <rect
                id="BM01L1_106"
                x="104"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_106') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M104,544" />
              <!--公共停车场-->
              <rect
                id="BM01L1_101"
                x="65.7"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_101') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M65.7,544" />
              <!--公共停车场155-->
              <rect
                id="BM01L1_155"
                x="73.4"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_155') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M73.4,564.3" />
              <!--公共停车场154-->
              <rect
                id="BM01L1_154"
                x="81"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_154') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M81,564.3" />
              <!--公共停车场153-->
              <rect
                id="BM01L1_153"
                x="88.7"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_153') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M88.7,564.3" />
              <!--公共停车场152-->
              <rect
                id="BM01L1_152"
                x="96.3"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_152') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M96.3,564.3" />
              <!--公共停车场151-->
              <rect
                id="BM01L1_151"
                x="104"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_151') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M104,564.3" />
              <!--公共停车场156-->
              <rect
                id="BM01L1_156"
                x="65.7"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_156') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M65.7,564.3" />
              <path
                class="st4"
                d="M43.1,418.7c-8.2,42-14.1,84.5-17.8,127.1l-1.4,17.7l-0.1,3.3c0,24,18.5,44,42.5,45.8l3.3,0.1h42.1l1.3-0.1
	c3.1-0.6,5.6-3,6.2-6.2l0.1-1.3v-15.3l-0.1-1.3c-0.6-3.1-3-5.6-6.2-6.2l-1.3-0.1h-56l-1.8-0.1c-7.6-0.9-13.4-7.4-13.4-15.1
	l2.7-147.9L43.1,418.7z"
              />
              <!--公共停车场100-->
              <rect
                id="BM01L1_100"
                x="58.1"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_100') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场099-->
              <rect
                id="BM01L1_099"
                x="50.5"
                y="528.8"
                :class="P1occupyList.includes('BM01L1_099') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场157-->
              <rect
                id="BM01L1_157"
                x="58.1"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_157') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场158-->
              <rect
                id="BM01L1_158"
                x="50.5"
                y="549.1"
                :class="P1occupyList.includes('BM01L1_158') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path
                class="st4"
                d="M51.1,510.7l-1.4-0.1c-4-0.6-6.8-3.8-6.8-7.5v-20.3l0.1-1.3c0.5-3.2,3.2-5.7,6.7-6.2l1.4-0.1h66.1l1.4,0.1
	c3.9,0.6,6.8,3.8,6.8,7.5v20.3l-0.1,1.3c-0.5,3.2-3.2,5.6-6.7,6.2l-1.4,0.1H51.1z"
              />
              <!--公共停车场062-->
              <rect
                id="BM01L1_062"
                x="73.4"
                y="475.2"
                :class="P1occupyList.includes('BM01L1_062') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M73.4,490.4" />
              <!--公共停车场063-->
              <rect
                id="BM01L1_063"
                x="81"
                y="475.2"
                :class="P1occupyList.includes('BM01L1_063') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M81,490.4" />
              <!--公共停车场064-->
              <rect
                id="BM01L1_064"
                x="88.7"
                y="475.2"
                :class="P1occupyList.includes('BM01L1_064') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M88.7,490.4" />
              <!--公共停车场065-->
              <rect
                id="BM01L1_065"
                x="96.3"
                y="475.2"
                :class="P1occupyList.includes('BM01L1_065') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M96.3,490.4" />
              <!--公共停车场066-->
              <rect
                id="BM01L1_066"
                x="104"
                y="475.2"
                :class="P1occupyList.includes('BM01L1_066') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M104,490.4" />
              <!--公共停车场061-->
              <rect
                id="BM01L1_061"
                x="65.7"
                y="475.2"
                :class="P1occupyList.includes('BM01L1_061') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M65.7,490.4" />
              <!--公共停车场095-->
              <rect
                id="BM01L1_095"
                x="73.4"
                y="495.5"
                :class="P1occupyList.includes('BM01L1_095') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M73.4,510.7" />
              <!--公共停车场094-->
              <rect
                id="BM01L1_094"
                x="81"
                y="495.5"
                :class="P1occupyList.includes('BM01L1_094') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M81,510.7" />
              <!--公共停车场093-->
              <rect
                id="BM01L1_093"
                x="88.7"
                y="495.5"
                :class="P1occupyList.includes('BM01L1_093') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M88.7,510.7" />
              <!--公共停车场092-->
              <rect
                id="BM01L1_092"
                x="96.3"
                y="495.5"
                :class="P1occupyList.includes('BM01L1_092') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M96.3,510.7" />
              <!--公共停车场-->
              <rect
                id="BM01L1_091"
                x="104"
                y="495.5"
                :class="P1occupyList.includes('BM01L1_091') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场067-->
              <rect
                id="BM01L1_067"
                x="111.6"
                y="475.2"
                :class="P1occupyList.includes('BM01L1_067') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场090-->
              <rect
                id="BM01L1_090"
                x="111.6"
                y="495.5"
                :class="P1occupyList.includes('BM01L1_090') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M104,510.7" />
              <!--公共停车场096-->
              <rect
                id="BM01L1_096"
                x="65.7"
                y="495.5"
                :class="P1occupyList.includes('BM01L1_096') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M65.7,510.7" />
              <!--公共停车场060-->
              <rect
                id="BM01L1_060"
                x="58.1"
                y="475.2"
                :class="P1occupyList.includes('BM01L1_060') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场059-->
              <rect
                id="BM01L1_059"
                x="50.5"
                y="475.2"
                :class="P1occupyList.includes('BM01L1_059') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场097-->
              <rect
                id="BM01L1_097"
                x="58.1"
                y="495.5"
                :class="P1occupyList.includes('BM01L1_097') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场098-->
              <rect
                id="BM01L1_098"
                x="50.5"
                y="495.5"
                :class="P1occupyList.includes('BM01L1_098') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path
                class="st4"
                d="M50.5,457.4l-1.3-0.1c-3.7-0.6-6.3-3.8-6.3-7.5v-20.4l0.1-1.3c0.5-3.2,3-5.7,6.2-6.2l1.3-0.1h61.1l1.3,0.1
	c3.6,0.6,6.3,3.8,6.3,7.5v20.3l-0.1,1.3c-0.5,3.2-3,5.6-6.2,6.2l-1.3,0.1H50.5V457.4z"
              />
              <!--公共停车场017-->
              <rect
                id="BM01L1_017"
                x="73.4"
                y="421.8"
                :class="P1occupyList.includes('BM01L1_017') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M73.4,437" />
              <!--公共停车场018-->
              <rect
                id="BM01L1_018"
                x="81"
                y="421.8"
                :class="P1occupyList.includes('BM01L1_018') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M81,437" />
              <!--公共停车场019-->
              <rect
                id="BM01L1_019"
                x="88.7"
                y="421.8"
                :class="P1occupyList.includes('BM01L1_019') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M88.7,437" />
              <!--公共停车场020-->
              <rect
                id="BM01L1_020"
                x="96.3"
                y="421.8"
                :class="P1occupyList.includes('BM01L1_020') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M96.3,437" />
              <!--公共停车场021-->
              <rect
                id="BM01L1_021"
                x="104"
                y="421.8"
                :class="P1occupyList.includes('BM01L1_021') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M104,437" />
              <!--公共停车场016-->
              <rect
                id="BM01L1_016"
                x="65.7"
                y="421.8"
                :class="P1occupyList.includes('BM01L1_016') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M65.7,437" />
              <!--公共停车场055-->
              <rect
                id="BM01L1_055"
                x="73.4"
                y="442.2"
                :class="P1occupyList.includes('BM01L1_055') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M73.4,457.4" />
              <!--公共停车场054-->
              <rect
                id="BM01L1_054"
                x="81"
                y="442.2"
                :class="P1occupyList.includes('BM01L1_054') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M81,457.4" />
              <!--公共停车场053-->
              <rect
                id="BM01L1_053"
                x="88.7"
                y="442.2"
                :class="P1occupyList.includes('BM01L1_053') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M88.7,457.4" />
              <!--公共停车场-->
              <rect
                id="BM01L1_052"
                x="96.3"
                y="442.2"
                :class="P1occupyList.includes('BM01L1_052') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M96.3,457.4" />
              <!--公共停车场051-->
              <rect
                id="BM01L1_051"
                x="104"
                y="442.2"
                :class="P1occupyList.includes('BM01L1_051') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M104,457.4" />
              <!--公共停车场056-->
              <rect
                id="BM01L1_056"
                x="65.7"
                y="442.2"
                :class="P1occupyList.includes('BM01L1_056') ? 'st10' : 'st7'"
                width="7.7"
                height="15.2"
              />
              <path class="st1" d="M65.7,457.4" />
              <!--公共停车场015-->
              <rect
                id="BM01L1_015"
                x="58.1"
                y="421.8"
                :class="P1occupyList.includes('BM01L1_015') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场057-->
              <rect
                id="BM01L1_057"
                x="58.1"
                y="442.2"
                :class="P1occupyList.includes('BM01L1_057') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <!--公共停车场058-->
              <rect
                id="BM01L1_058"
                x="50.5"
                y="442.2"
                :class="P1occupyList.includes('BM01L1_058') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <g>
                <rect
                  x="96.3"
                  y="344.9"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -266.3131 361.5424)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />

                <rect
                  x="98.2"
                  y="337.7"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -257.8701 357.9315)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />

                <rect
                  x="100.1"
                  y="330.2"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -249.2143 354.1794)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />
                <polygon
                  class="st4"
                  points="112.3,336.1 114.2,328.7 99.4,324.9 97.5,332.2 	"
                />

                <rect
                  x="103.9"
                  y="315.5"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -232.1132 346.8704)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />
                <polygon
                  class="st4"
                  points="116.1,321.3 118,313.9 103.2,310.1 101.3,317.5 	"
                />
                <polygon
                  class="st4"
                  points="118,313.9 119.9,306.5 105.2,302.7 103.2,310.1 	"
                />

                <rect
                  x="88.7"
                  y="374.3"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -300.4178 376.2326)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />
                <polygon
                  class="st4"
                  points="100.9,380.4 102.8,373 88,369.2 86.1,376.6 	"
                />
                <polygon
                  class="st4"
                  points="102.8,372.9 104.7,365.5 90,361.7 88,369.1 	"
                />
                <polygon
                  class="st4"
                  points="104.7,365.5 106.6,358.1 91.8,354.3 90,361.7 	"
                />

                <rect
                  x="71.9"
                  y="306.3"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -247.2305 308.9273)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />

                <rect
                  x="73.8"
                  y="299"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -238.6962 305.3042)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />

                <rect
                  x="75.9"
                  y="291.6"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -229.9764 301.6802)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />

                <rect
                  x="64.1"
                  y="336.4"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -282.2254 323.9977)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />

                <rect
                  x="66.2"
                  y="329"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -273.3957 320.4211)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />
                <polygon
                  class="st4"
                  points="78.4,334.9 80.3,327.4 65.6,323.7 63.6,331 	"
                />
                <polygon
                  class="st4"
                  points="80.2,327 82.1,319.7 67.4,315.8 65.5,323.3 	"
                />

                <rect
                  x="109.6"
                  y="293.3"
                  transform="matrix(0.2496 -0.9684 0.9684 0.2496 -206.3529 335.6992)"
                  class="st4"
                  width="7.6"
                  height="15.3"
                />
              </g>
              <!--公共停车场001-->
              <rect
                id="BM01L1_001"
                x="124.3"
                y="388.9"
                :class="P1occupyList.includes('BM01L1_001') ? 'st10' : 'st7'"
                width="7.6"
                height="15.2"
              />
              <path class="st1" d="M124.3,404" />
              <path
                class="st4"
                d="M266.5,243.1l1.8,0.1c7,0.8,12.5,6.3,13.3,13.3l0.1,1.9v130.8l-3.2-0.5l-3.3-0.2H272l-3.3,0.2l-3.2,0.4h-2.1
	c-13.7-0.5-24-12.5-20.8-26.2l0.6-2l1.1-3.7l0.8-3.7l0.5-3.8l0.3-3.8v-3.8l-0.2-3.8l-0.3-4c-4-39.4-39.3-68.1-78.7-64
	c-6.1,0.6-12.2,2-17.9,4.2L145,276l0,0l-4.9,2c-8.2,3.2-16.7,5.6-25.4,7.1l-5.2,0.9v-1.4c-0.2-2.8-1.9-5.2-4.4-6.4l-1.3-0.4
	l-15.1-3.9l0,0l-1.3-0.5c-3-1.4-4.8-4.6-4.4-7.9l0.3-1.3l5-15.9l0.5-1.3c1.1-2,3.1-3.5,5.4-3.9l1.3-0.1L266.5,243.1z"
              />
              <!--公共停车场039-->
              <rect
                id="BM01L1_039"
                x="254"
                y="462.2"
                :class="P1occupyList.includes('BM01L1_039') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场038-->
              <rect
                id="BM01L1_038"
                x="254"
                y="454.5"
                :class="P1occupyList.includes('BM01L1_038') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场0.7-->
              <rect
                id="BM01L1_037"
                x="254"
                y="446.9"
                :class="P1occupyList.includes('BM01L1_037') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场036-->
              <rect
                id="BM01L1_036"
                x="254"
                y="439.2"
                :class="P1occupyList.includes('BM01L1_036') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场035-->
              <rect
                id="BM01L1_035"
                x="254"
                y="431.6"
                :class="P1occupyList.includes('BM01L1_035') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场034-->
              <rect
                id="BM01L1_034"
                x="254"
                y="424"
                :class="P1occupyList.includes('BM01L1_034') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <!--公共停车场033-->
              <rect
                id="BM01L1_033"
                x="254"
                y="416.3"
                :class="P1occupyList.includes('BM01L1_033') ? 'st10' : 'st7'"
                width="15.2"
                height="7.6"
              />
              <g id="专用停车场">
                <path
                  class="st4"
                  d="M711.2,485.5H533.5l-1.8-0.1c-7-0.8-12.5-6.3-13.3-13.3l-0.1-1.9V258.4l0.1-1.9c0.8-7,6.3-12.5,13.3-13.3
		l1.8-0.1h339.7l1.9,0.1c7,0.8,12.5,6.3,13.4,13.3l0.1,1.9v28.2l-0.1,1.3c-0.6,3.6-3.7,6.3-7.3,6.4h-24.5v15.2h24.5l1.3,0.1
		c3.1,0.5,5.6,3,6.1,6.2l0.1,1.3v153l-0.1,1.9c-0.8,7-6.3,12.5-13.3,13.3l-1.9,0.1H698.7"
                />
                <polyline
                  class="st2"
                  points="862.5,302 866.4,296.9 866.4,307.1 	"
                />
                <line class="st1" x1="546" y1="385.6" x2="546" y2="303.4" />
                <line class="st1" x1="834.1" y1="450.4" x2="669.2" y2="450.4" />
                <line class="st1" x1="856.6" y1="418.6" x2="856.6" y2="406.6" />
                <line class="st3" x1="541.2" y1="266.3" x2="541.2" y2="243.1" />
                <polyline
                  class="st3"
                  points="578.4,459.6 599,459.6 599,442.9 	"
                />
                <line class="st3" x1="578.4" y1="471.9" x2="578.4" y2="459.6" />
                <line class="st3" x1="584" y1="243.1" x2="584" y2="267.7" />
                <line class="st1" x1="698.9" y1="275.6" x2="816.1" y2="275.6" />
                <polyline
                  class="st3"
                  points="518.3,465 556.2,465 556.2,471.9 578.4,471.9 556.5,471.9 556.5,485.5 	"
                />
                <!--专用停车场008-->
                <rect
                  id="SJDA01L1_008"
                  x="650.8"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_008') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M650.8,258.4" />
                <!--专用停车场009-->
                <rect
                  id="SJDA01L1_009"
                  x="658.4"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_009') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M658.4,258.4" />
                <!--专用停车场010-->
                <rect
                  id="SJDA01L1_010"
                  x="666"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_010') ? 'st10' : 'st7'
                  "
                  width="7.7"
                  height="15.3"
                />
                <path class="st1" d="M666,258.4" />
                <!--专用停车场011-->
                <rect
                  id="SJDA01L1_011"
                  x="673.7"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_011') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M673.7,258.4" />
                <!--专用停车场012-->
                <rect
                  id="SJDA01L1_012"
                  x="681.3"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_012') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M681.3,258.4" />
                <!--专用停车场013-->
                <rect
                  id="SJDA01L1_013"
                  x="689"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_013') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M689,258.4" />
                <!--专用停车场014-->
                <rect
                  id="SJDA01L1_014"
                  x="696.6"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_014') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M696.6,258.4" />
                <!--专用停车场003-->
                <rect
                  id="SJDA01L1_003"
                  x="612.6"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_003') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M612.6,258.4" />
                <!--专用停车场004-->
                <rect
                  id="SJDA01L1_004"
                  x="620.3"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_004') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M620.3,258.4" />
                <!--专用停车场005-->
                <rect
                  id="SJDA01L1_005"
                  x="627.9"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_005') ? 'st10' : 'st7'
                  "
                  width="7.7"
                  height="15.3"
                />
                <path class="st1" d="M627.9,258.4" />
                <!--专用停车场006-->
                <rect
                  id="SJDA01L1_006"
                  x="635.6"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_006') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M635.6,258.4" />
                <!--专用停车场007-->
                <rect
                  id="SJDA01L1_007"
                  x="643.2"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_007') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M643.2,258.4" />
                <!--专用停车场001-->
                <rect
                  id="SJDA01L1_001"
                  x="597.4"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_001') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M597.4,258.4" />
                <!--专用停车场002-->
                <rect
                  id="SJDA01L1_002"
                  x="605"
                  y="243.1"
                  :class="
                    P5occupyList.includes('SJDA01L1_002') ? 'st10' : 'st7'
                  "
                  width="7.6"
                  height="15.3"
                />
                <path class="st1" d="M605,258.4" />
                <rect
                  x="720.3"
                  y="247.1"
                  class="st1"
                  width="12.7"
                  height="12.7"
                />
                <path class="st1" d="M720.3,247" />
                <rect
                  x="733.1"
                  y="247.1"
                  class="st1"
                  width="12.7"
                  height="12.7"
                />
                <path class="st1" d="M733.1,247" />
                <polyline
                  class="st3"
                  points="669.2,450.4 669.2,459.6 689.8,459.6 689.8,471.9 711.2,471.9 711.2,485.5 	"
                />
                <path
                  class="st6"
                  d="M836.9,323.3v30.8h4.9v19.1h-4.9v26.6h4.5v6.8h15.1v43.8H669.2v-7.5h-70.3v-2h-7.6l0,0l-3.9,2.3l-4.1,2.1
		c-15,7.2-36.7,9.6-50.2-2.2l-2.2-2.3l-1.9-2.6c-8-13.5-0.2-29.5,10.1-39.2l3.3-2.9l3.5-2.7v-89.9h-5.5v-7h-11.6v-30.2h13.5v1.4
		h130.3v3.1h2v4.9h141.5v5.1h19.5v5.1h8.2v-4h12.8v44.4H855v-1h-6.6v1h-1.8v-2.9L836.9,323.3"
                />
              </g>
              <g id="新能源停车场">
                <path
                  class="st4"
                  d="M888.5,22.9v202.5H804l0,0H580.3V28.1l0.2-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1L888.5,22.9"
                />
                <polygon
                  class="st6"
                  points="590,54.5 590,172.8 691.9,172.8 691.9,180.3 714.3,180.3 714.3,177.7 728,177.7 728,172.8
		805.4,172.8 805.4,180.3 856.9,180.3 856.9,54.5 	"
                />
                <line class="st3" x1="607.7" y1="217.7" x2="607.7" y2="225.4" />
                <line class="st3" x1="606.2" y1="217.7" x2="606.2" y2="225.4" />
                <line class="st3" x1="629" y1="217.7" x2="629" y2="225.4" />
                <line class="st3" x1="627.5" y1="217.7" x2="627.5" y2="225.4" />
                <line class="st3" x1="650.4" y1="217.7" x2="650.4" y2="225.4" />
                <line class="st3" x1="648.9" y1="217.7" x2="648.9" y2="225.4" />
                <line class="st3" x1="671.8" y1="217.7" x2="671.8" y2="225.4" />
                <line class="st3" x1="670.2" y1="217.7" x2="670.2" y2="225.4" />
                <line class="st3" x1="691.7" y1="219.3" x2="691.7" y2="225.4" />
                <line class="st3" x1="693.2" y1="219.3" x2="693.2" y2="225.4" />
                <line class="st3" x1="714.5" y1="217.7" x2="714.5" y2="225.4" />
                <line class="st3" x1="713" y1="217.7" x2="713" y2="225.4" />
                <line class="st3" x1="735.9" y1="217.7" x2="735.9" y2="225.4" />
                <line class="st3" x1="734.4" y1="217.7" x2="734.4" y2="225.4" />
                <line class="st3" x1="757.3" y1="217.7" x2="757.3" y2="225.4" />
                <line class="st3" x1="755.7" y1="217.7" x2="755.7" y2="225.4" />
                <line class="st3" x1="778.7" y1="217.7" x2="778.7" y2="225.4" />
                <line class="st3" x1="777.1" y1="217.7" x2="777.1" y2="225.4" />
                <!--新能源停车场011-->
                <rect
                  id="JQ01L1_011"
                  x="659.9"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_011') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M659.9,217.7" />
                <!--新能源停车场012-->
                <rect
                  id="JQ01L1_012"
                  x="667.5"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_012') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M667.4,217.7" />
                <!--新能源停车场013-->
                <rect
                  id="JQ01L1_013"
                  x="675.1"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_013') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M675.1,217.7" />
                <!--新能源停车场014-->
                <rect
                  id="JQ01L1_014"
                  x="682.7"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_014') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <!--新能源停车场015-->
                <rect
                  id="JQ01L1_015"
                  x="690.3"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_015') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M682.7,217.7" />
                <path class="st1" d="M694.4,217.7" />
                <!--新能源停车场016-->
                <rect
                  id="JQ01L1_016"
                  x="702"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_016') ? 'st10' : 'st7'"
                  width="7.7"
                  height="15.2"
                />
                <path class="st1" d="M702,217.7" />
                <!--新能源停车场017-->
                <rect
                  id="JQ01L1_017"
                  x="709.7"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_017') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M709.7,217.7" />
                <!--新能源停车场006-->
                <rect
                  id="JQ01L1_006"
                  x="621.7"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_006') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M621.7,217.7" />
                <!--新能源停车场007-->
                <rect
                  id="JQ01L1_007"
                  x="629.3"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_007') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M629.3,217.7" />
                <!--新能源停车场008-->
                <rect
                  id="JQ01L1_008"
                  x="636.9"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_008') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M636.9,217.7" />
                <!--新能源停车场009-->
                <rect
                  id="JQ01L1_009"
                  x="644.6"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_009') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M644.6,217.7" />
                <!--新能源停车场010-->
                <rect
                  id="JQ01L1_010"
                  x="652.2"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_010') ? 'st10' : 'st7'"
                  width="7.7"
                  height="15.2"
                />
                <path class="st1" d="M652.2,217.7" />
                <!--新能源停车场004-->
                <rect
                  id="JQ01L1_004"
                  x="606.4"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_004') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M606.4,217.7" />
                <!--新能源停车场005-->
                <rect
                  id="JQ01L1_005"
                  x="614"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_005') ? 'st10' : 'st7'"
                  width="7.7"
                  height="15.2"
                />
                <path class="st1" d="M614,217.7" />
                <!--新能源停车场025-->
                <rect
                  id="JQ01L1_025"
                  x="770.7"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_025') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M770.7,217.7" />
                <!--新能源停车场026-->
                <rect
                  id="JQ01L1_026"
                  x="778.4"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_026') ? 'st10' : 'st7'"
                  width="7.7"
                  height="15.2"
                />
                <path class="st1" d="M778.4,217.7" />
                <!--新能源停车场027-->
                <rect
                  id="JQ01L1_027"
                  x="786"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_027') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M786,217.7" />
                <!--新能源停车场028-->
                <rect
                  id="JQ01L1_028"
                  x="793.7"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_028') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M793.7,217.7" />
                <!--新能源停车场020-->
                <rect
                  id="JQ01L1_020"
                  x="732.6"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_020') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M732.6,217.7" />
                <!--新能源停车场021-->
                <rect
                  id="JQ01L1_021"
                  x="740.2"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_021') ? 'st10' : 'st7'"
                  width="7.7"
                  height="15.2"
                />
                <path class="st1" d="M740.2,217.7" />
                <!--新能源停车场022-->
                <rect
                  id="JQ01L1_022"
                  x="747.9"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_022') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M747.9,217.7" />
                <!--新能源停车场023-->
                <rect
                  id="JQ01L1_023"
                  x="755.5"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_023') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M755.5,217.7" />
                <!--新能源停车场024-->
                <rect
                  id="JQ01L1_024"
                  x="763.1"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_024') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M763.1,217.7" />
                <!--新能源停车场018-->
                <rect
                  id="JQ01L1_018"
                  x="717.3"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_018') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M717.3,217.7" />
                <!--新能源停车场019-->
                <rect
                  id="JQ01L1_019"
                  x="725"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_019') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <path class="st1" d="M725,217.7" />
                <!--新能源停车场003-->
                <rect
                  id="JQ01L1_003"
                  x="598.8"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_003') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <!--新能源停车场002-->
                <rect
                  id="JQ01L1_002"
                  x="591.2"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_002') ? 'st10' : 'st7'"
                  width="7.6"
                  height="15.2"
                />
                <!--新能源停车场001-->
                <rect
                  id="JQ01L1_001"
                  x="583.5"
                  y="202.5"
                  :class="P4occupyList.includes('JQ01L1_001') ? 'st10' : 'st7'"
                  width="7.7"
                  height="15.2"
                />
                <line class="st3" x1="580.4" y1="219.3" x2="580.3" y2="219.3" />
                <polyline
                  class="st3"
                  points="580.4,219.3 804,219.3 804,225.4 	"
                />
              </g>
              <g id="员工停车场">
                <path
                  class="st4"
                  d="M927.9,176.7v50.9l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.2l-0.5,0.1V281l0.5,0.1l0.4,0.2
		l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1v50.9l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.2l-0.5,0.1
		v50.9l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1v50.9l0.5,0.1l0.4,0.2l0.3,0.4l0.1,0.5l-0.1,0.5
		l-0.3,0.4l-0.4,0.3l-0.5,0.1v50.9l0.5,0.1l0.4,0.3l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.2l-0.5,0.1v50.9l0.5,0.1l0.4,0.2
		l0.3,0.4l0.1,0.5l-0.1,0.5l-0.3,0.4l-0.4,0.3l-0.5,0.1v59.5l-0.1,0.8l-0.4,0.7l-0.6,0.6l-0.7,0.4l-0.8,0.1l0,0h-14l-1.1-0.1l-1-0.4
		l-1-0.6l-0.8-0.8l-0.6-1l-0.4-1.1l-0.1-1.1V176.8l0.1-1.1l0.4-1.1l0.6-1l0.8-0.8l1-0.6l1-0.4l1.1-0.1h11.4l1.1,0.1l1.1,0.4l1,0.6
		l0.8,0.8l0.7,1l0.4,1.1L927.9,176.7"
                />
                <g>
                  <line
                    class="st3"
                    x1="959.7"
                    y1="275.5"
                    x2="945.8"
                    y2="275.5"
                  />
                  <line
                    class="st3"
                    x1="945.8"
                    y1="278.1"
                    x2="959.7"
                    y2="278.1"
                  />
                  <line
                    class="st3"
                    x1="959.7"
                    y1="328.9"
                    x2="945.8"
                    y2="328.9"
                  />
                  <line
                    class="st3"
                    x1="959.7"
                    y1="369.3"
                    x2="945.8"
                    y2="369.3"
                  />
                  <line
                    class="st3"
                    x1="959.7"
                    y1="409.8"
                    x2="945.8"
                    y2="409.8"
                  />
                  <line
                    class="st3"
                    x1="959.7"
                    y1="450.2"
                    x2="945.8"
                    y2="450.2"
                  />
                  <line
                    class="st3"
                    x1="945.8"
                    y1="452.8"
                    x2="959.7"
                    y2="452.8"
                  />
                  <line
                    class="st3"
                    x1="959.7"
                    y1="503.7"
                    x2="945.8"
                    y2="503.7"
                  />
                  <line
                    class="st3"
                    x1="959.7"
                    y1="538.1"
                    x2="945.8"
                    y2="538.1"
                  />
                  <!--员工停车场065-->
                  <rect
                    id="BMK01L1_065"
                    x="945.9"
                    y="250.2"
                    :class="
                      P2occupyList.includes('BMK01L1_065') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场066-->
                  <rect
                    id="BMK01L1_066"
                    x="945.9"
                    y="256.5"
                    :class="
                      P2occupyList.includes('BMK01L1_066') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场067-->
                  <rect
                    id="BMK01L1_067"
                    x="945.9"
                    y="262.9"
                    :class="
                      P2occupyList.includes('BMK01L1_067') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场068-->
                  <rect
                    id="BMK01L1_068"
                    x="945.9"
                    y="269.3"
                    :class="
                      P2occupyList.includes('BMK01L1_068') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场059-->
                  <!--                  <rect-->
                  <!--                    id="BMK01L1_058"-->
                  <!--                    x="945.9"-->
                  <!--                    y="203.1"-->
                  <!--                    :class="-->
                  <!--                      P2occupyList.includes('BMK01L1_058') ? 'st10' : 'st7'-->
                  <!--                    "-->
                  <!--                    width="14"-->
                  <!--                    height="6.4"-->
                  <!--                  />-->
                  <!--员工停车场059-->
                  <rect
                    id="BMK01L1_059"
                    x="945.9"
                    y="209.5"
                    :class="
                      P2occupyList.includes('BMK01L1_059') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场060-->
                  <rect
                    id="BMK01L1_060"
                    x="945.9"
                    y="215.9"
                    :class="
                      P2occupyList.includes('BMK01L1_060') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场061-->
                  <rect
                    id="BMK01L1_061"
                    x="945.9"
                    y="222.3"
                    :class="
                      P2occupyList.includes('BMK01L1_061') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场062-->
                  <rect
                    id="BMK01L1_062"
                    x="945.9"
                    y="228.6"
                    :class="
                      P2occupyList.includes('BMK01L1_062') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场063-->
                  <rect
                    id="BMK01L1_063"
                    x="945.9"
                    y="235"
                    :class="
                      P2occupyList.includes('BMK01L1_063') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场064-->
                  <rect
                    id="BMK01L1_064"
                    x="945.9"
                    y="241.4"
                    :class="
                      P2occupyList.includes('BMK01L1_064') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场069-->
                  <rect
                    id="BMK01L1_069"
                    x="945.9"
                    y="278.1"
                    :class="
                      P2occupyList.includes('BMK01L1_069') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场070-->
                  <rect
                    id="BMK01L1_070"
                    x="945.9"
                    y="284.4"
                    :class="
                      P2occupyList.includes('BMK01L1_070') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场071-->
                  <rect
                    id="BMK01L1_071"
                    x="945.9"
                    y="290.8"
                    :class="
                      P2occupyList.includes('BMK01L1_071') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场072-->
                  <rect
                    id="BMK01L1_072"
                    x="945.9"
                    y="297.1"
                    :class="
                      P2occupyList.includes('BMK01L1_072') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场073-->
                  <rect
                    id="BMK01L1_073"
                    x="945.9"
                    y="303.4"
                    :class="
                      P2occupyList.includes('BMK01L1_073') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场074-->
                  <rect
                    id="BMK01L1_074"
                    x="945.9"
                    y="309.7"
                    :class="
                      P2occupyList.includes('BMK01L1_074') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场075-->
                  <rect
                    id="BMK01L1_075"
                    x="945.9"
                    y="316"
                    :class="
                      P2occupyList.includes('BMK01L1_075') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场076-->
                  <rect
                    id="BMK01L1_076"
                    x="945.9"
                    y="322.3"
                    :class="
                      P2occupyList.includes('BMK01L1_076') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场077-->
                  <rect
                    id="BMK01L1_077"
                    x="945.9"
                    y="331.1"
                    :class="
                      P2occupyList.includes('BMK01L1_077') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场078-->
                  <rect
                    id="BMK01L1_078"
                    x="945.9"
                    y="337.4"
                    :class="
                      P2occupyList.includes('BMK01L1_078') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场079-->
                  <rect
                    id="BMK01L1_079"
                    x="945.9"
                    y="343.8"
                    :class="
                      P2occupyList.includes('BMK01L1_079') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场080-->
                  <rect
                    id="BMK01L1_080"
                    x="945.9"
                    y="350.1"
                    :class="
                      P2occupyList.includes('BMK01L1_080') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场081-->
                  <rect
                    id="BMK01L1_081"
                    x="945.9"
                    y="356.4"
                    :class="
                      P2occupyList.includes('BMK01L1_081') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场082-->
                  <rect
                    id="BMK01L1_082"
                    x="945.9"
                    y="362.7"
                    :class="
                      P2occupyList.includes('BMK01L1_082') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场083-->
                  <rect
                    id="BMK01L1_083"
                    x="945.9"
                    y="371.5"
                    :class="
                      P2occupyList.includes('BMK01L1_083') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场084-->
                  <rect
                    id="BMK01L1_084"
                    x="945.9"
                    y="377.9"
                    :class="
                      P2occupyList.includes('BMK01L1_084') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场085-->
                  <rect
                    id="BMK01L1_085"
                    x="945.9"
                    y="384.2"
                    :class="
                      P2occupyList.includes('BMK01L1_085') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场086-->
                  <rect
                    id="BMK01L1_086"
                    x="945.9"
                    y="390.5"
                    :class="
                      P2occupyList.includes('BMK01L1_086') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场087-->
                  <rect
                    id="BMK01L1_087"
                    x="945.9"
                    y="396.9"
                    :class="
                      P2occupyList.includes('BMK01L1_087') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场088-->
                  <rect
                    id="BMK01L1_088"
                    x="945.9"
                    y="403.2"
                    :class="
                      P2occupyList.includes('BMK01L1_088') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场089-->
                  <rect
                    id="BMK01L1_089"
                    x="945.9"
                    y="412"
                    :class="
                      P2occupyList.includes('BMK01L1_089') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场090-->
                  <rect
                    id="BMK01L1_090"
                    x="945.9"
                    y="418.3"
                    :class="
                      P2occupyList.includes('BMK01L1_090') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场091-->
                  <rect
                    id="BMK01L1_091"
                    x="945.9"
                    y="424.7"
                    :class="
                      P2occupyList.includes('BMK01L1_091') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场092-->
                  <rect
                    id="BMK01L1_092"
                    x="945.9"
                    y="431"
                    :class="
                      P2occupyList.includes('BMK01L1_092') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场-->
                  <rect
                    id="BMK01L1_093"
                    x="945.9"
                    y="437.4"
                    :class="
                      P2occupyList.includes('BMK01L1_093') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场094-->
                  <rect
                    id="BMK01L1_094"
                    x="945.9"
                    y="443.7"
                    :class="
                      P2occupyList.includes('BMK01L1_094') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场095-->
                  <rect
                    id="BMK01L1_095"
                    x="945.9"
                    y="452.7"
                    :class="
                      P2occupyList.includes('BMK01L1_095') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场096-->
                  <rect
                    id="BMK01L1_096"
                    x="945.9"
                    y="459.1"
                    :class="
                      P2occupyList.includes('BMK01L1_096') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场097-->
                  <rect
                    id="BMK01L1_097"
                    x="945.9"
                    y="465.5"
                    :class="
                      P2occupyList.includes('BMK01L1_097') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场098-->
                  <rect
                    id="BMK01L1_098"
                    x="945.9"
                    y="471.9"
                    :class="
                      P2occupyList.includes('BMK01L1_098') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场099-->
                  <rect
                    id="BMK01L1_099"
                    x="945.9"
                    y="478.2"
                    :class="
                      P2occupyList.includes('BMK01L1_099') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场100-->
                  <rect
                    id="BMK01L1_100"
                    x="945.9"
                    y="484.6"
                    :class="
                      P2occupyList.includes('BMK01L1_100') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场101-->
                  <rect
                    id="BMK01L1_101"
                    x="945.9"
                    y="491"
                    :class="
                      P2occupyList.includes('BMK01L1_101') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场102-->
                  <rect
                    id="BMK01L1_102"
                    x="945.9"
                    y="497.4"
                    :class="
                      P2occupyList.includes('BMK01L1_102') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场103-->
                  <rect
                    id="BMK01L1_103"
                    x="945.9"
                    y="503.8"
                    :class="
                      P2occupyList.includes('BMK01L1_103') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场104-->
                  <rect
                    id="BMK01L1_104"
                    x="945.9"
                    y="512.4"
                    :class="
                      P2occupyList.includes('BMK01L1_104') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场105-->
                  <rect
                    id="BMK01L1_105"
                    x="945.9"
                    y="518.7"
                    :class="
                      P2occupyList.includes('BMK01L1_105') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场106-->
                  <rect
                    id="BMK01L1_106"
                    x="945.9"
                    y="525.1"
                    :class="
                      P2occupyList.includes('BMK01L1_106') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场107-->
                  <rect
                    id="BMK01L1_107"
                    x="945.9"
                    y="531.4"
                    :class="
                      P2occupyList.includes('BMK01L1_107') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场108-->
                  <rect
                    id="BMK01L1_108"
                    x="945.9"
                    y="540.3"
                    :class="
                      P2occupyList.includes('BMK01L1_108') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场109-->
                  <rect
                    id="BMK01L1_109"
                    x="945.9"
                    y="546.6"
                    :class="
                      P2occupyList.includes('BMK01L1_109') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场110-->
                  <rect
                    id="BMK01L1_110"
                    x="945.9"
                    y="553"
                    :class="
                      P2occupyList.includes('BMK01L1_110') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场111-->
                  <rect
                    id="BMK01L1_111"
                    x="945.9"
                    y="559.3"
                    :class="
                      P2occupyList.includes('BMK01L1_111') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场112-->
                  <rect
                    id="BMK01L1_112"
                    x="945.9"
                    y="565.7"
                    :class="
                      P2occupyList.includes('BMK01L1_112') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场113-->
                  <rect
                    id="BMK01L1_113"
                    x="945.9"
                    y="572.1"
                    :class="
                      P2occupyList.includes('BMK01L1_113') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场114-->
                  <!--                  <rect-->
                  <!--                    id="BMK01L1_114"-->
                  <!--                    x="945.9"-->
                  <!--                    y="578.4"-->
                  <!--                    :class="-->
                  <!--                      P2occupyList.includes('BMK01L1_114') ? 'st10' : 'st7'-->
                  <!--                    "-->
                  <!--                    width="14"-->
                  <!--                    height="6.4"-->
                  <!--                  />-->
                </g>
                <g>
                  <line
                    class="st3"
                    x1="927.7"
                    y1="275.5"
                    x2="913.8"
                    y2="275.5"
                  />
                  <line
                    class="st3"
                    x1="913.8"
                    y1="278.1"
                    x2="927.7"
                    y2="278.1"
                  />
                  <line
                    class="st3"
                    x1="927.7"
                    y1="328.9"
                    x2="913.8"
                    y2="328.9"
                  />
                  <line
                    class="st3"
                    x1="927.7"
                    y1="369.3"
                    x2="913.8"
                    y2="369.3"
                  />
                  <line
                    class="st3"
                    x1="927.7"
                    y1="409.8"
                    x2="913.8"
                    y2="409.8"
                  />
                  <line
                    class="st3"
                    x1="927.7"
                    y1="450.2"
                    x2="913.8"
                    y2="450.2"
                  />
                  <line
                    class="st3"
                    x1="913.8"
                    y1="452.8"
                    x2="927.7"
                    y2="452.8"
                  />
                  <line
                    class="st3"
                    x1="927.7"
                    y1="503.7"
                    x2="913.8"
                    y2="503.7"
                  />
                  <line
                    class="st3"
                    x1="927.7"
                    y1="538.1"
                    x2="913.8"
                    y2="538.1"
                  />
                  <!--员工停车场050-->
                  <rect
                    id="BMK01L1_050"
                    x="913.9"
                    y="250.2"
                    :class="
                      P2occupyList.includes('BMK01L1_050') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场049-->
                  <rect
                    id="BMK01L1_049"
                    x="913.9"
                    y="256.5"
                    :class="
                      P2occupyList.includes('BMK01L1_049') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场048-->
                  <rect
                    id="BMK01L1_048"
                    x="913.9"
                    y="262.9"
                    :class="
                      P2occupyList.includes('BMK01L1_048') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场047-->
                  <rect
                    id="BMK01L1_047"
                    x="913.9"
                    y="269.3"
                    :class="
                      P2occupyList.includes('BMK01L1_047') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场057-->
                  <!--                  <rect-->
                  <!--                    id="BMK01L1_057"-->
                  <!--                    x="913.9"-->
                  <!--                    y="203.1"-->
                  <!--                    :class="-->
                  <!--                      P2occupyList.includes('BMK01L1_057') ? 'st10' : 'st7'-->
                  <!--                    "-->
                  <!--                    width="14"-->
                  <!--                    height="6.4"-->
                  <!--                  />-->
                  <!--员工停车场056-->
                  <rect
                    id="BMK01L1_056"
                    x="913.9"
                    y="209.5"
                    :class="
                      P2occupyList.includes('BMK01L1_056') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场055-->
                  <rect
                    id="BMK01L1_055"
                    x="913.9"
                    y="215.9"
                    :class="
                      P2occupyList.includes('BMK01L1_055') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场054-->
                  <rect
                    id="BMK01L1_054"
                    x="913.9"
                    y="222.3"
                    :class="
                      P2occupyList.includes('BMK01L1_054') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场053-->
                  <rect
                    id="BMK01L1_053"
                    x="913.9"
                    y="228.6"
                    :class="
                      P2occupyList.includes('BMK01L1_053') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场052-->
                  <rect
                    id="BMK01L1_052"
                    x="913.9"
                    y="235"
                    :class="
                      P2occupyList.includes('BMK01L1_052') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场051-->
                  <rect
                    id="BMK01L1_051"
                    x="913.9"
                    y="241.4"
                    :class="
                      P2occupyList.includes('BMK01L1_051') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场046-->
                  <rect
                    id="BMK01L1_046"
                    x="913.9"
                    y="278.1"
                    :class="
                      P2occupyList.includes('BMK01L1_046') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场045-->
                  <rect
                    id="BMK01L1_045"
                    x="913.9"
                    y="284.4"
                    :class="
                      P2occupyList.includes('BMK01L1_045') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场044-->
                  <rect
                    id="BMK01L1_044"
                    x="913.9"
                    y="290.8"
                    :class="
                      P2occupyList.includes('BMK01L1_044') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场043-->
                  <rect
                    id="BMK01L1_043"
                    x="913.9"
                    y="297.1"
                    :class="
                      P2occupyList.includes('BMK01L1_043') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场042-->
                  <rect
                    id="BMK01L1_042"
                    x="913.9"
                    y="303.4"
                    :class="
                      P2occupyList.includes('BMK01L1_042') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场041-->
                  <rect
                    id="BMK01L1_041"
                    x="913.9"
                    y="309.7"
                    :class="
                      P2occupyList.includes('BMK01L1_041') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场040-->
                  <rect
                    id="BMK01L1_040"
                    x="913.9"
                    y="316"
                    :class="
                      P2occupyList.includes('BMK01L1_040') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场039-->
                  <rect
                    id="BMK01L1_039"
                    x="913.9"
                    y="322.3"
                    :class="
                      P2occupyList.includes('BMK01L1_039') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场038-->
                  <rect
                    id="BMK01L1_038"
                    x="913.9"
                    y="331.1"
                    :class="
                      P2occupyList.includes('BMK01L1_038') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场037-->
                  <rect
                    id="BMK01L1_037"
                    x="913.9"
                    y="337.4"
                    :class="
                      P2occupyList.includes('BMK01L1_037') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场036-->
                  <rect
                    id="BMK01L1_036"
                    x="913.9"
                    y="343.8"
                    :class="
                      P2occupyList.includes('BMK01L1_036') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场035-->
                  <rect
                    id="BMK01L1_035"
                    x="913.9"
                    y="350.1"
                    :class="
                      P2occupyList.includes('BMK01L1_035') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场034-->
                  <rect
                    id="BMK01L1_034"
                    x="913.9"
                    y="356.4"
                    :class="
                      P2occupyList.includes('BMK01L1_034') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场033-->
                  <rect
                    id="BMK01L1_033"
                    x="913.9"
                    y="362.7"
                    :class="
                      P2occupyList.includes('BMK01L1_033') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场032-->
                  <rect
                    id="BMK01L1_032"
                    x="913.9"
                    y="371.5"
                    :class="
                      P2occupyList.includes('BMK01L1_032') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场031-->
                  <rect
                    id="BMK01L1_031"
                    x="913.9"
                    y="377.9"
                    :class="
                      P2occupyList.includes('BMK01L1_031') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场030-->
                  <rect
                    id="BMK01L1_030"
                    x="913.9"
                    y="384.2"
                    :class="
                      P2occupyList.includes('BMK01L1_030') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场029-->
                  <rect
                    id="BMK01L1_029"
                    x="913.9"
                    y="390.5"
                    :class="
                      P2occupyList.includes('BMK01L1_029') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场028-->
                  <rect
                    id="BMK01L1_028"
                    x="913.9"
                    y="396.9"
                    :class="
                      P2occupyList.includes('BMK01L1_028') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场027-->
                  <rect
                    id="BMK01L1_027"
                    x="913.9"
                    y="403.2"
                    :class="
                      P2occupyList.includes('BMK01L1_027') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场026-->
                  <rect
                    id="BMK01L1_026"
                    x="913.9"
                    y="412"
                    :class="
                      P2occupyList.includes('BMK01L1_026') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场025-->
                  <rect
                    id="BMK01L1_025"
                    x="913.9"
                    y="418.3"
                    :class="
                      P2occupyList.includes('BMK01L1_025') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场024-->
                  <rect
                    id="BMK01L1_024"
                    x="913.9"
                    y="424.7"
                    :class="
                      P2occupyList.includes('BMK01L1_024') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场023-->
                  <rect
                    id="BMK01L1_023"
                    x="913.9"
                    y="431"
                    :class="
                      P2occupyList.includes('BMK01L1_023') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场022-->
                  <rect
                    id="BMK01L1_022"
                    x="913.9"
                    y="437.4"
                    :class="
                      P2occupyList.includes('BMK01L1_022') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场021-->
                  <rect
                    id="BMK01L1_021"
                    x="913.9"
                    y="443.7"
                    :class="
                      P2occupyList.includes('BMK01L1_021') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场020-->
                  <rect
                    id="BMK01L1_020"
                    x="913.9"
                    y="452.7"
                    :class="
                      P2occupyList.includes('BMK01L1_020') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场019-->
                  <rect
                    id="BMK01L1_019"
                    x="913.9"
                    y="459.1"
                    :class="
                      P2occupyList.includes('BMK01L1_019') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场018-->
                  <rect
                    id="BMK01L1_018"
                    x="913.9"
                    y="465.5"
                    :class="
                      P2occupyList.includes('BMK01L1_018') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场017-->
                  <rect
                    id="BMK01L1_017"
                    x="913.9"
                    y="471.9"
                    :class="
                      P2occupyList.includes('BMK01L1_017') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场016-->
                  <rect
                    id="BMK01L1_016"
                    x="913.9"
                    y="478.2"
                    :class="
                      P2occupyList.includes('BMK01L1_016') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场015-->
                  <rect
                    id="BMK01L1_015"
                    x="913.9"
                    y="484.6"
                    :class="
                      P2occupyList.includes('BMK01L1_015') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场014-->
                  <rect
                    id="BMK01L1_014"
                    x="913.9"
                    y="491"
                    :class="
                      P2occupyList.includes('BMK01L1_014') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场013-->
                  <rect
                    id="BMK01L1_013"
                    x="913.9"
                    y="497.4"
                    :class="
                      P2occupyList.includes('BMK01L1_013') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场012-->
                  <rect
                    id="BMK01L1_012"
                    x="913.9"
                    y="503.8"
                    :class="
                      P2occupyList.includes('BMK01L1_012') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场011-->
                  <rect
                    id="BMK01L1_011"
                    x="913.9"
                    y="512.4"
                    :class="
                      P2occupyList.includes('BMK01L1_011') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场010-->
                  <rect
                    id="BMK01L1_010"
                    x="913.9"
                    y="518.7"
                    :class="
                      P2occupyList.includes('BMK01L1_010') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场009-->
                  <rect
                    id="BMK01L1_009"
                    x="913.9"
                    y="525.1"
                    :class="
                      P2occupyList.includes('BMK01L1_009') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场008-->
                  <rect
                    id="BMK01L1_008"
                    x="913.9"
                    y="531.4"
                    :class="
                      P2occupyList.includes('BMK01L1_008') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场007-->
                  <rect
                    id="BMK01L1_007"
                    x="913.9"
                    y="540.3"
                    :class="
                      P2occupyList.includes('BMK01L1_007') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场006-->
                  <rect
                    id="BMK01L1_006"
                    x="913.9"
                    y="546.6"
                    :class="
                      P2occupyList.includes('BMK01L1_006') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场005-->
                  <rect
                    id="BMK01L1_005"
                    x="913.9"
                    y="553"
                    :class="
                      P2occupyList.includes('BMK01L1_005') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场004-->
                  <rect
                    id="BMK01L1_004"
                    x="913.9"
                    y="559.3"
                    :class="
                      P2occupyList.includes('BMK01L1_004') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场003-->
                  <rect
                    id="BMK01L1_003"
                    x="913.9"
                    y="565.7"
                    :class="
                      P2occupyList.includes('BMK01L1_003') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场002-->
                  <rect
                    id="BMK01L1_002"
                    x="913.9"
                    y="572.1"
                    :class="
                      P2occupyList.includes('BMK01L1_002') ? 'st10' : 'st7'
                    "
                    width="14"
                    height="6.4"
                  />
                  <!--员工停车场001-->
                  <!--                  <rect-->
                  <!--                    id="BMK01L1_001"-->
                  <!--                    x="913.9"-->
                  <!--                    y="578.4"-->
                  <!--                    :class="-->
                  <!--                      P2occupyList.includes('BMK01L1_001') ? 'st10' : 'st7'-->
                  <!--                    "-->
                  <!--                    width="14"-->
                  <!--                    height="6.4"-->
                  <!--                  />-->
                </g>
              </g>
              <g id="临时停车场">
                <!--                &lt;!&ndash;临时停车场034&ndash;&gt;-->
                <!--                <path-->
                <!--                  id="HZH01L1_034"-->
                <!--                  style="fill: red"-->
                <!--                  :class="P3occupyList.includes('HZH01L1_034') ? 'st10' : 'st7'"-->
                <!--                  d="M950.9,82V68h6.4v14H950.9z"-->
                <!--                />-->
                <!--临时停车场035-->
                <path
                  id="HZH01L1_035"
                  :class="P3occupyList.includes('HZH01L1_035') ? 'st10' : 'st7'"
                  d="M957.2,82V68h6.4v14H957.2z"
                />
                <!--临时停车场036-->
                <path
                  id="HZH01L1_036"
                  :class="P3occupyList.includes('HZH01L1_036') ? 'st10' : 'st7'"
                  d="M963.5,82V68h6.4v14H963.5z"
                />
                <!--临时停车场037-->
                <path
                  id="HZH01L1_037"
                  :class="P3occupyList.includes('HZH01L1_037') ? 'st10' : 'st7'"
                  d="M969.9,82V68h6.4v14H969.9z"
                />
                <!--临时停车场038-->
                <path
                  id="HZH01L1_038"
                  :class="P3occupyList.includes('HZH01L1_038') ? 'st10' : 'st7'"
                  d="M976.2,82V68h6.4v14H976.2z"
                />
                <!--临时停车场039-->
                <path
                  id="HZH01L1_039"
                  :class="P3occupyList.includes('HZH01L1_039') ? 'st10' : 'st7'"
                  d="M982.5,82V68h6.4v14H982.5z"
                />
                <!--临时停车场040-->
                <path
                  id="HZH01L1_040"
                  :class="P3occupyList.includes('HZH01L1_040') ? 'st10' : 'st7'"
                  d="M988.9,82V68h6.4v14H988.9z"
                />
                <!--临时停车场041-->
                <path
                  id="HZH01L1_041"
                  :class="P3occupyList.includes('HZH01L1_041') ? 'st10' : 'st7'"
                  d="M995.2,82V68h6.4v14H995.2z"
                />
                <!--临时停车场042-->
                <path
                  id="HZH01L1_042"
                  :class="P3occupyList.includes('HZH01L1_042') ? 'st10' : 'st7'"
                  d="M1001.6,82V68h6.4v14H1001.6z"
                />
                <!--临时停车场043-->
                <path
                  id="HZH01L1_043"
                  :class="P3occupyList.includes('HZH01L1_043') ? 'st10' : 'st7'"
                  d="M1007.9,82V68h6.4v14H1007.9z"
                />
                <!--临时停车场044-->
                <path
                  id="HZH01L1_044"
                  :class="P3occupyList.includes('HZH01L1_044') ? 'st10' : 'st7'"
                  d="M1014.2,82V68h6.4v14H1014.2z"
                />
                <!--临时停车场045-->
                <path
                  id="HZH01L1_045"
                  :class="P3occupyList.includes('HZH01L1_045') ? 'st10' : 'st7'"
                  d="M1020.6,82V68h6.4v14H1020.6z"
                />
                <!--临时停车场046-->
                <path
                  id="HZH01L1_046"
                  :class="P3occupyList.includes('HZH01L1_046') ? 'st10' : 'st7'"
                  d="M1026.9,82V68h6.4v14H1026.9z"
                />
                <!--临时停车场047-->
                <path
                  id="HZH01L1_047"
                  :class="P3occupyList.includes('HZH01L1_047') ? 'st10' : 'st7'"
                  d="M1033.3,82V68h6.4v14H1033.3z"
                />
                <!--临时停车场048-->
                <path
                  id="HZH01L1_048"
                  :class="P3occupyList.includes('HZH01L1_048') ? 'st10' : 'st7'"
                  d="M1039.7,82V68h6.4v14H1039.7z"
                />
                <!--临时停车场023-->
                <rect
                  id="HZH01L1_023"
                  x="1057.6"
                  y="94.1"
                  :class="P3occupyList.includes('HZH01L1_023') ? 'st10' : 'st7'"
                  width="14"
                  height="6.4"
                />
                <!--临时停车场022-->
                <rect
                  id="HZH01L1_022"
                  x="1057.6"
                  y="100.4"
                  :class="P3occupyList.includes('HZH01L1_022') ? 'st10' : 'st7'"
                  width="14"
                  height="6.4"
                />
                <!--临时停车场021-->
                <rect
                  id="HZH01L1_021"
                  x="1057.6"
                  y="106.8"
                  :class="P3occupyList.includes('HZH01L1_021') ? 'st10' : 'st7'"
                  width="14"
                  height="6.4"
                />
                <!--临时停车场020-->
                <rect
                  id="HZH01L1_020"
                  x="1057.6"
                  y="113.1"
                  :class="P3occupyList.includes('HZH01L1_020') ? 'st10' : 'st7'"
                  width="14"
                  height="6.4"
                />
                <!--临时停车场019-->
                <rect
                  id="HZH01L1_019"
                  x="1057.6"
                  y="119.5"
                  :class="P3occupyList.includes('HZH01L1_019') ? 'st10' : 'st7'"
                  width="14"
                  height="6.4"
                />
                <!--临时停车场018-->
                <rect
                  id="HZH01L1_018"
                  x="1057.6"
                  y="125.9"
                  :class="P3occupyList.includes('HZH01L1_018') ? 'st10' : 'st7'"
                  width="14"
                  height="6.4"
                />
                <!--临时停车场017-->
                <rect
                  id="HZH01L1_017"
                  x="1057.6"
                  y="132.2"
                  :class="P3occupyList.includes('HZH01L1_017') ? 'st10' : 'st7'"
                  width="14"
                  height="6.4"
                />
                <!--临时停车场016-->
                <rect
                  id="HZH01L1_016"
                  x="1057.6"
                  y="138.6"
                  :class="P3occupyList.includes('HZH01L1_016') ? 'st10' : 'st7'"
                  width="14"
                  height="6.4"
                />
                <!--临时停车场015-->
                <rect
                  id="HZH01L1_015"
                  x="1057.6"
                  y="145"
                  :class="P3occupyList.includes('HZH01L1_015') ? 'st10' : 'st7'"
                  width="14"
                  height="6.4"
                />
                <path
                  class="st8"
                  d="M945.8,157.6v-20.4l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1h89l1.1,0.1c2.3,0.5,4,2.5,4,4.9v20.4l-0.1,1.1
		c-0.4,1.9-1.9,3.4-3.8,3.8l-1.1,0.1h-89l-1.1-0.1c-1.9-0.4-3.4-1.9-3.8-3.8L945.8,157.6z"
                />
                <line
                  class="st3"
                  x1="1033.5"
                  y1="146.1"
                  x2="1033.5"
                  y2="132.1"
                />
                <path
                  class="st3"
                  d="M945.8,157.6v-20.4l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1h89l1.1,0.1c2.3,0.5,4,2.5,4,4.9v20.4l-0.1,1.1
		c-0.4,1.9-1.9,3.4-3.8,3.8l-1.1,0.1h-89l-1.1-0.1c-1.9-0.4-3.4-1.9-3.8-3.8L945.8,157.6z"
                />
                <path
                  class="st4"
                  d="M945.8,105.4l0.1-1.1c0.4-1.9,1.9-3.4,3.8-3.8l1.1-0.1h89l1.1,0.1c2.3,0.5,4,2.5,4,4.9v3.8l-0.1,1.1
		c-0.4,1.9-1.9,3.4-3.8,3.8l-1.1,0.1h-89l-1.1-0.1c-1.9-0.4-3.4-1.9-3.8-3.8l-0.1-1.1L945.8,105.4z"
                />
                <!--临时停车场033-->
                <path
                  id="HZH01L1_033"
                  :class="P3occupyList.includes('HZH01L1_033') ? 'st10' : 'st7'"
                  d="M963.6,114.3v-14h6.4v14H963.6z"
                />
                <!--临时停车场032-->
                <path
                  id="HZH01L1_032"
                  :class="P3occupyList.includes('HZH01L1_032') ? 'st10' : 'st7'"
                  d="M969.9,114.3v-14h6.4v14H969.9z"
                />
                <!--临时停车场031-->
                <path
                  id="HZH01L1_031"
                  :class="P3occupyList.includes('HZH01L1_031') ? 'st10' : 'st7'"
                  d="M976.2,114.3v-14h6.4v14H976.2z"
                />
                <!--临时停车场030-->
                <path
                  id="HZH01L1_030"
                  :class="P3occupyList.includes('HZH01L1_030') ? 'st10' : 'st7'"
                  d="M982.6,114.3v-14h6.4v14H982.6z"
                />
                <!--临时停车场029-->
                <path
                  id="HZH01L1_029"
                  :class="P3occupyList.includes('HZH01L1_029') ? 'st10' : 'st7'"
                  d="M988.9,114.3v-14h6.4v14H988.9z"
                />
                <!--临时停车场028-->
                <path
                  id="HZH01L1_028"
                  :class="P3occupyList.includes('HZH01L1_028') ? 'st10' : 'st7'"
                  d="M995.2,114.3v-14h6.4v14H995.2z"
                />
                <!--临时停车场027-->
                <path
                  id="HZH01L1_027"
                  :class="P3occupyList.includes('HZH01L1_027') ? 'st10' : 'st7'"
                  d="M1001.6,114.3v-14h6.4v14H1001.6z"
                />
                <!--临时停车场026-->
                <path
                  id="HZH01L1_026"
                  :class="P3occupyList.includes('HZH01L1_026') ? 'st10' : 'st7'"
                  d="M1007.9,114.3v-14h6.4v14H1007.9z"
                />
                <!--临时停车场025-->
                <path
                  id="HZH01L1_025"
                  :class="P3occupyList.includes('HZH01L1_025') ? 'st10' : 'st7'"
                  d="M1014.2,114.3v-14h6.4v14H1014.2z"
                />
                <!--临时停车场024-->
                <path
                  id="HZH01L1_024"
                  :class="P3occupyList.includes('HZH01L1_024') ? 'st10' : 'st7'"
                  d="M1020.6,114.3v-14h6.4v14H1020.6z"
                />
                <!--临时停车场001-->
                <polygon
                  id="HZH01L1_001"
                  :class="P3occupyList.includes('HZH01L1_001') ? 'st10' : 'st7'"
                  points="950.9,132.1 950.9,146.1 950.9,146.1 957.2,146.1 957.2,132.1 	"
                />
                <!--临时停车场002-->
                <polygon
                  id="HZH01L1_002"
                  :class="P3occupyList.includes('HZH01L1_002') ? 'st10' : 'st7'"
                  points="957.2,132.1 957.2,146.1 957.2,146.1 963.6,146.1 963.6,132.1 	"
                />
                <!--临时停车场003-->
                <polygon
                  id="HZH01L1_003"
                  :class="P3occupyList.includes('HZH01L1_003') ? 'st10' : 'st7'"
                  points="963.6,132.1 963.6,146.1 963.6,146.1 969.9,146.1 969.9,132.1 	"
                />
                <!--临时停车场004-->
                <polygon
                  id="HZH01L1_004"
                  :class="P3occupyList.includes('HZH01L1_004') ? 'st10' : 'st7'"
                  points="969.9,132.1 969.9,146.1 969.9,146.1 976.3,146.1 976.3,132.1 	"
                />
                <!--临时停车场005-->
                <polygon
                  id="HZH01L1_005"
                  :class="P3occupyList.includes('HZH01L1_005') ? 'st10' : 'st7'"
                  points="976.3,132.1 976.3,146.1 976.3,146.1 982.6,146.1 982.6,132.1 	"
                />
                <!--临时停车场006-->
                <polygon
                  id="HZH01L1_006"
                  :class="P3occupyList.includes('HZH01L1_006') ? 'st10' : 'st7'"
                  points="982.6,132.1 982.6,146.1 982.6,146.1 989,146.1 989,132.1 	"
                />
                <!--临时停车场007-->
                <polygon
                  id="HZH01L1_007"
                  :class="P3occupyList.includes('HZH01L1_007') ? 'st10' : 'st7'"
                  points="989,132.1 989,146.1 989,146.1 995.3,146.1 995.3,132.1 	"
                />
                <!--临时停车场008-->
                <polygon
                  id="HZH01L1_008"
                  :class="P3occupyList.includes('HZH01L1_008') ? 'st10' : 'st7'"
                  points="995.3,132.1 995.3,146.1 995.3,146.1 1001.7,146.1 1001.7,132.1 	"
                />
                <!--临时停车场009-->
                <polygon
                  id="HZH01L1_009"
                  :class="P3occupyList.includes('HZH01L1_009') ? 'st10' : 'st7'"
                  points="1001.7,132.1 1001.7,146.1 1001.7,146.1 1008.1,146.1 1008.1,132.1 	"
                />
                <!--临时停车场013-->
                <polygon
                  id="HZH01L1_013"
                  :class="P3occupyList.includes('HZH01L1_013') ? 'st10' : 'st7'"
                  points="1027.1,132.1 1027.1,146.1 1027.1,146.1 1033.5,146.1 1033.5,132.1 	"
                />
                <!--临时停车场014-->
                <polygon
                  id="HZH01L1_014"
                  :class="P3occupyList.includes('HZH01L1_014') ? 'st10' : 'st7'"
                  points="1033.5,132.1 1033.5,146.1 1033.5,146.1 1039.9,146.1 1039.9,132.1 	"
                />
                <!--临时停车场010-->
                <polygon
                  id="HZH01L1_010"
                  :class="P3occupyList.includes('HZH01L1_010') ? 'st10' : 'st7'"
                  points="1008.1,132.1 1008.1,146.1 1008.1,146.1 1014.4,146.1 1014.4,132.1 	"
                />
                <!--临时停车场011-->
                <polygon
                  id="HZH01L1_011"
                  :class="P3occupyList.includes('HZH01L1_011') ? 'st10' : 'st7'"
                  points="1014.4,132.1 1014.4,146.1 1014.4,146.1 1020.8,146.1 1020.8,132.1 	"
                />
                <!--临时停车场012-->
                <polygon
                  id="HZH01L1_012"
                  :class="P3occupyList.includes('HZH01L1_012') ? 'st10' : 'st7'"
                  points="1020.8,132.1 1020.8,146.1 1020.8,146.1 1027.1,146.1 1027.1,132.1 	"
                />
              </g>
              <g id="外围线条">
                <path
                  class="st9"
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
              <title></title>
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
            <span class="spanStyle">自助洗车收入本月分析</span>
          </div>
          <div class="leftChartCenter" id="revenueCarWashingAnalysisID">
            <Xchart
              id="revenueCarWashingAnalysisID"
              :option="revenueCarWashingAnalysisOption"
            ></Xchart>
          </div>
          <div class="rightChartDown">
            <svg
              viewBox="0 0 358 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title></title>
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
              <span class="spanStyle">洗车机近七日次数分析</span>
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
              <title></title>
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
            <span class="spanStyle">近七日洗车收费金额</span>
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
              <title></title>
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
      P1LeftPort: 0,
      P2LeftPort: 0,
      P3LeftPort: 0,
      P4LeftPort: 0,
      P5LeftPort: 0,
      parkingLotList: [
        {
          name: "",
          code: ""
        },
        {
          name: "",
          code: ""
        },
        {
          name: "",
          code: ""
        },
        {
          name: "",
          code: ""
        },
        {
          name: "",
          code: ""
        }
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

      // 左侧近七日图表查询条件
      currentDay: new Date().Format("yyyy-MM-dd"),
      currentHour: new Date().Format("hh"),
      currentToday: new Date().Format("dd"),
      // 总停车数量
      numberOfParking: "",
      numberOfParkingOptions: {},
      numberOfParkingData: [],
      numberOfParkingXz: [],
      //总停车数量图表数字
      // numberOfParkingTotal: 0,

      // 平均停车时长
      averageParkingTime: "",
      averageParkingTimeOptions: {},
      averageParkingTimeData: [],
      averageParkingTimeXz: [],
      //平均停车时长图表数字
      // averageParkingTimeTotal: 0,
      // averageParkingTimeNumber: 0,

      // 车位利用率
      parkingSpaceUtilization: "",
      parkingSpaceUtilizationOptions: {},
      parkingSpaceUtilizationData: [],
      parkingSpaceUtilizationXz: [],
      //车位利用率图表数字
      // parkingSpaceUsedRateTotal: 0,
      // parkingSpaceUsedRateNumber: 0,

      // 车位周转率
      parkingSpaceTurnoverRate: "",
      parkingSpaceTurnoverRateOptions: {},
      parkingSpaceTurnoverRateData: [],
      parkingSpaceTurnoverRateXz: [],
      //车位周转率图表上的数字
      // parkingSpaceTurnoverRateTotal: 0,
      // parkingSpaceTurnoverRateNumber: 0,

      // 洗车机近七日报警趋势分析
      washCarSevenDaysAnalysisOption: {},
      washCarSevenDaysAnalysisXz: [],
      washCarSevenDaysAnalysisDataJINGList: [],
      washCarSevenDaysAnalysisDataPUList: [],
      washCarSevenDaysAnalysisDataKUAIList: [],
      washCarSevenDaysAnalysisDataJING: [],
      washCarSevenDaysAnalysisDataPU: [],
      washCarSevenDaysAnalysisDataKUAI: [],

      //近七日洗车收费金额
      washChargeInSevenDaysOption: {},
      washChargeInSevenDaysXz: [],
      washChargeInSevenDaysJINGWashList: [],
      washChargeInSevenDaysPUWashList: [],
      washChargeInSevenDaysKUAIWashList: [],
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
      publicLeftPort: 158,
      //员工停车场剩余车位数
      // staffLeftPort: 120,

      //精洗 普洗 快洗
      poacherWash: 10,
      garmentWash: 20,
      fastWash: 30,

      //中间总收入停车收入
      totalIncome: 1300,
      parkIncome: 1000,
      washIncome: 300,

      //自助洗车收入本月分析
      revenueCarWashingAnalysisOption: {},
      revenueCarWashingAnalysisName: "洗车收入统计分析",
      revenueCarWashingAnalysisXz: [],
      revenueCarWashingAnalysisY: [],
      //存放已占用车位ID
      P1occupyList: [],
      P2occupyList: [],
      P3occupyList: [],
      P4occupyList: [],
      P5occupyList: [],

      //定时任务
      countDownTime: 0
    };
  },
  created() {
    // 实现轮询
    window.setInterval(() => {
      setTimeout(this.getNewMessage(), 0);
    }, 300000);
  },
  mounted() {
    this.userName = localStorage.getItem("userName");
    //查询车位状态
    this.queryParkSpaceStatus();
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
    //洗车机近七日报警趋势分析lo
    this.handleWashCarSevenDaysAnalysis();
    //近七日洗车收费金额
    this.handleWashCarIncomeSevenDays();
  },
  computed: {
    //顶部员工停车场剩余车位数
    staffLeftPort: function() {
      return (
        this.P2LeftPort + this.P3LeftPort + this.P4LeftPort + this.P5LeftPort
      );
    },
    //近七日停车总次数
    numberOfParkingTotal: function() {
      let sum = 0;
      for (let i = 0; i < this.numberOfParkingData.length; i++) {
        sum += this.numberOfParkingData[i];
      }
      // return (s / this.numberOfParkingData.length).toFixed(2);
      return sum;
    },
    //近七日车位利用率
    parkingSpaceUsedRateNumber: function() {
      let total = 0;
      let dat = 0;
      for (let i = 0; i < this.parkingSpaceUtilizationData.length; i++) {
        total += this.parkingSpaceUtilizationData[i];
      }
      dat = Number(total / this.parkingSpaceUtilizationXz.length).toFixed(2);
      return dat;
    },
    //近七日车位周转率
    parkingSpaceTurnoverRateNumber: function() {
      let total = 0;
      let dat = 0;
      for (let i = 0; i < this.parkingSpaceTurnoverRateData.length; i++) {
        total += this.parkingSpaceTurnoverRateData[i];
      }
      dat = Number(total / this.parkingSpaceTurnoverRateXz.length).toFixed(2);
      return dat;
    },
    //近七日平均停车时长
    averageParkingTimeNumber: function() {
      let total = 0;
      let dat = 0;
      for (let i = 0; i < this.averageParkingTimeData.length; i++) {
        total += this.averageParkingTimeData[i];
      }
      dat = Number(total / this.averageParkingTimeXz.length).toFixed(2);
      return dat;
    }
  },
  methods: {
    // 定时任务重新渲染页面请求是否有新消息
    getNewMessage() {
      this.currentHour = new Date().Format("hh");
      //查询车位状态
      this.queryParkSpaceStatus();
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
    },
    //查询停车场车位占用状态
    queryParkSpaceStatus() {
      // 公共停车场车位状态
      const param1 = ["BM01"];
      this.$homePage.queryParkSpaceStatus(param1).then(res => {
        this.P1occupyList = res.resultEntity;
      });
      //员工停车场车位状态
      const param2 = ["BMK01"];
      this.$homePage.queryParkSpaceStatus(param2).then(res => {
        this.P2occupyList = res.resultEntity;
      });
      //临时停车场车位状态
      const param3 = ["HZH01"];
      this.$homePage.queryParkSpaceStatus(param3).then(res => {
        this.P3occupyList = res.resultEntity;
      });
      //新能源停车场车位状态
      const param4 = ["JQ01"];
      this.$homePage.queryParkSpaceStatus(param4).then(res => {
        this.P4occupyList = res.resultEntity;
      });
      //专用停车场车位状态
      const param5 = ["SJDA01"];
      this.$homePage.queryParkSpaceStatus(param5).then(res => {
        this.P5occupyList = res.resultEntity;
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
    //剩余车位数查询
    queryParkSpace() {
      // 公共停车场剩余车位数
      const param1 = "BM01";
      this.$homePage.queryEmptySpace(param1).then(res => {
        this.P1LeftPort = res.resultEntity;
        //公共停车场中间顶部数据
        this.publicLeftPort = res.resultEntity;
      });
      //  员工停车场剩余车位数
      const param2 = "BMK01";
      this.$homePage.queryEmptySpace(param2).then(res => {
        this.P2LeftPort = res.resultEntity;
      });
      //临时停车场剩余车位数
      const param3 = "HZH01";
      this.$homePage.queryEmptySpace(param3).then(res => {
        this.P3LeftPort = res.resultEntity;
      });
      //新能源停车场剩余车位数
      const param4 = "JQ01";
      this.$homePage.queryEmptySpace(param4).then(res => {
        this.P4LeftPort = res.resultEntity;
      });
      //专用停车场剩余车位数
      const param5 = "SJDA01";
      this.$homePage.queryEmptySpace(param5).then(res => {
        this.P5LeftPort = res.resultEntity;
      });
    },

    //获取中间部分总收入、停车场总收入、洗车总收入
    queryFees() {
      this.$homePage.queryFees({}).then(res => {
        this.totalIncome = Number(res.resultEntity["总收入"]);
        this.parkIncome = Number(res.resultEntity["停车场收入"]);
        this.washIncome = Number(res.resultEntity["洗车收入"]);
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
    // 总停车数量
    queryParkOptByParkCount() {
      let that = this;
      this.$homePage.queryPark7Days({}).then(res => {
        this.numberOfParkingXz = [];
        this.numberOfParkingData = [];
        res.resultEntity.forEach(item => {
          this.numberOfParkingXz.push(item.X.slice(5, 10));
          this.numberOfParkingData.push(Number(item.dataY));
        });
        that.chartData = {
          xCategories: this.numberOfParkingXz,
          seriesData: this.numberOfParkingData
        };
      });
    },
    // 平均停车时长
    queryParkOptByAvgParkDuration() {
      this.$homePage.avgParkDuration7Days({}).then(res => {
        this.averageParkingTimeXz = [];
        this.averageParkingTimeData = [];
        // for (let i = 0; i < Number(this.currentHour) + 1; i++) {
        //   this.averageParkingTimeXz.push(res.resultEntity[i].X);
        //   this.averageParkingTimeData.push(
        //     Number(Math.round(res.resultEntity[i].dataY))
        //   );
        // }
        res.resultEntity.forEach(item => {
          this.averageParkingTimeXz.push(item.X.slice(5, 10));
          this.averageParkingTimeData.push(Number(item.dataY.toFixed(2)));
        });
        this.averageParkingTimeOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "averageParkingTime",
            marginBottom: 35
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
            //X轴间隔显示
            // tickInterval: 1,
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
              format: "{value}",
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
          tooltip: { pointFormat: "{series.name}: <b>{point.y}</b>分钟" },
          plotOptions: {
            //  静态渲染
            series: {
              animation: false
            },
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
      this.$homePage.usageRate7Days({}).then(res => {
        this.parkingSpaceUtilizationXz = [];
        this.parkingSpaceUtilizationData = [];
        // for (let i = 0; i < Number(this.currentHour) + 1; i++) {
        //   this.parkingSpaceUtilizationXz.push(res.resultEntity[i].X);
        //   //%后小数点后两位
        //   this.parkingSpaceUtilizationData.push(
        //     Number(Number(res.resultEntity[i].dataY).toFixed(2))
        //   );
        // }
        res.resultEntity.forEach(item => {
          this.parkingSpaceUtilizationXz.push(item.X.slice(5, 10));
          this.parkingSpaceUtilizationData.push(
            Number(Number(item.dataY).toFixed(2))
          );
        });
        this.parkingSpaceUtilizationOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "parkingSpaceUtilization",
            marginBottom: 35
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
            //X轴间隔显示
            // tickInterval: 4,
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
              format: "{value}",
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
          tooltip: { pointFormat: "{series.name}: <b>{point.y}</b>分钟/车位" },
          plotOptions: {
            //  静态渲染
            series: {
              animation: false
            },
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
      this.$homePage.turnoverRate7Days({}).then(res => {
        this.parkingSpaceTurnoverRateXz = [];
        this.parkingSpaceTurnoverRateData = [];
        // for (let i = 0; i < Number(this.currentHour) + 1; i++) {
        //   this.parkingSpaceTurnoverRateXz.push(res.resultEntity[i].X);
        //   this.parkingSpaceTurnoverRateData.push(
        //     Number((Number(res.resultEntity[i].dataY) * 100).toFixed(2))
        //   );
        // }
        res.resultEntity.forEach(item => {
          this.parkingSpaceTurnoverRateXz.push(item.X.slice(5, 10));
          this.parkingSpaceTurnoverRateData.push(Number(item.dataY.toFixed(2)));
        });

        this.parkingSpaceTurnoverRateOptions = {
          chart: {
            type: "spline",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "parkingSpaceTurnoverRate",
            marginBottom: 35
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
            //X轴间隔显示
            // tickInterval: 4,
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
              format: "{value}",
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
          tooltip: { pointFormat: "{series.name}: <b>{point.y}</b>次/车位" },
          plotOptions: {
            //  静态渲染
            series: {
              animation: false
            },
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
            //  静态渲染
            series: {
              animation: false
            },
            pie: {
              borderWidth: 0,
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
              color: "#cccccc"
            }
          },
          series: [
            {
              name: "支付占比",
              data: [
                {
                  name: "ETC",
                  y: Number(res.resultEntity[0].percent)
                },
                {
                  name: "其他",
                  y: Number(res.resultEntity[1].percent)
                },
                {
                  name: "微信",
                  y: Number(res.resultEntity[2].percent)
                },
                {
                  name: "支付宝",
                  y: Number(res.resultEntity[3].percent)
                },
                {
                  name: "现金",
                  y: Number(res.resultEntity[4].percent)
                }
              ]
            }
          ]
        };
        new HighCharts.chart(this.paymentIncomeAnalysisOption);
      });
    },

    //自助洗车收入本月分析
    querychargeAmountTimes() {
      const param = { queryDate: "currentMonth" };
      this.$realTimeMonitor.queryCarWashIncomeAnalysis(param).then(res => {
        for (let i = 0; i < this.currentToday; i++) {
          this.revenueCarWashingAnalysisXz.push(
            res.resultEntity[i].time.slice(8, 10)
          ),
            this.revenueCarWashingAnalysisY.push(
              Number(res.resultEntity[i].amount)
            );
        }
        this.revenueCarWashingAnalysisOption = {
          chart: {
            type: "column",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "revenueCarWashingAnalysisID",
            marginBottom: 35
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
            categories: this.revenueCarWashingAnalysisXz,
            // tickInterval: 4,
            //x轴坐标颜色
            lineColor: "#104DA1",
            labels: {
              style: {
                color: "rgba(90,142,227,1)",
                fontSize: "10px"
              }
            }
          },
          colors: ["#0D64F4"],
          yAxis: {
            title: {
              text: ""
            },
            labels: {
              format: "{value}元",
              style: {
                color: "rgba(90,142,227,1)",
                fontSize: "10px"
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
              color: "#cccccc"
            }
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.y}</b>元"
          },
          plotOptions: {
            //  静态渲染
            series: {
              animation: false
            },
            column: {
              borderWidth: 0,
              pointWidth: 15, //柱子宽度
              // color: "#00AEFF",
              dataLabels: {
                style: {
                  fontSize: 11
                },
                enabled: false
              }
            }
          },
          series: [
            {
              name: "营收金额",
              data: this.revenueCarWashingAnalysisY
            }
          ]
        };
        new HighCharts.chart(this.revenueCarWashingAnalysisOption);
      });
    },

    //洗车机近七日次数分析
    handleWashCarSevenDaysAnalysis() {
      this.$homePage.queryCarWashTiemsRecentDays({}).then(res => {
        this.washCarSevenDaysAnalysisXz = [];
        this.washCarSevenDaysAnalysisDataJINGList = [];
        this.washCarSevenDaysAnalysisDataPUList = [];
        this.washCarSevenDaysAnalysisDataKUAIList = [];
        this.washCarSevenDaysAnalysisDataJING = [];
        this.washCarSevenDaysAnalysisDataPU = [];
        this.washCarSevenDaysAnalysisDataKUAI = [];
        res.resultEntity.forEach(item => {
          if (item.type == "精洗") {
            this.washCarSevenDaysAnalysisDataJINGList.push(item);
          } else if (item.type == "普洗") {
            this.washCarSevenDaysAnalysisDataPUList.push(item);
          } else if (item.type == "快洗") {
            this.washCarSevenDaysAnalysisDataKUAIList.push(item);
          }
          // console.log(this.washCarSevenDaysAnalysisDataPUList);
          // console.log(this.washCarSevenDaysAnalysisDataKUAIList);
        });
        this.washCarSevenDaysAnalysisDataJINGList.forEach(item => {
          this.washCarSevenDaysAnalysisXz.push(item.time.slice(5, 10));
          this.washCarSevenDaysAnalysisDataJING.push(item.times);
        });
        this.washCarSevenDaysAnalysisDataPUList.forEach(item => {
          this.washCarSevenDaysAnalysisDataPU.push(item.times);
        });
        this.washCarSevenDaysAnalysisDataKUAIList.forEach(item => {
          this.washCarSevenDaysAnalysisDataKUAI.push(item.times);
        });
        this.washCarSevenDaysAnalysisOption = {
          chart: {
            type: "column",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "washCarSevenDaysAnalysis",
            marginBottom: 35
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
            // tickInterval: 2,
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
              color: "#cccccc "
            }
          },
          tooltip: {
            pointFormat: "{series.name}<b>{point.y}</b>次"
          },
          plotOptions: {
            //  静态渲染
            series: {
              animation: false
            },
            column: {
              pointPadding: 0,
              //调整每个组的柱形图的间隔
              borderWidth: 0,
              // groupPadding: 0,
              shadow: false
            }
          },
          series: [
            {
              name: "精洗次数",
              data: this.washCarSevenDaysAnalysisDataJING
            },
            {
              name: "普洗次数",
              data: this.washCarSevenDaysAnalysisDataPU
            },
            {
              name: "快洗次数",
              data: this.washCarSevenDaysAnalysisDataKUAI
            }
          ]
        };
        new HighCharts.chart(this.washCarSevenDaysAnalysisOption);
      });
    },

    //近七日洗车收费金额
    handleWashCarIncomeSevenDays() {
      this.$homePage.queryCarWashAmountRecentDays({}).then(res => {
        res.resultEntity.forEach(item => {
          if (item.type == "精洗") {
            this.washChargeInSevenDaysJINGWashList.push(item);
          } else if (item.type == "普洗") {
            this.washChargeInSevenDaysPUWashList.push(item);
          } else if (item.type == "快洗") {
            this.washChargeInSevenDaysKUAIWashList.push(item);
          }
        });
        this.washChargeInSevenDaysJINGWashList.forEach(item => {
          this.washChargeInSevenDaysXz.push(item.X.slice(5, 10));
          this.washChargeInSevenDaysJINGWash.push(Number(item.dataY) / 100);
        });
        this.washChargeInSevenDaysPUWashList.forEach(item => {
          this.washChargeInSevenDaysPUWash.push(Number(item.dataY) / 100);
        });
        this.washChargeInSevenDaysKUAIWashList.forEach(item => {
          this.washChargeInSevenDaysKUAIWash.push(Number(item.dataY) / 100);
        });
        this.washChargeInSevenDaysOption = {
          chart: {
            type: "column",
            backgroundColor: "rgba(0,0,0,0)",
            renderTo: "washChargeInSevenDays",
            marginBottom: 35
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
            // tickInterval: 2,
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
            align: "right",
            verticalAlign: "top",
            floating: true,
            y: -15,
            itemStyle: {
              color: "white",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "white"
            },
            itemHoverStyle: {
              color: "#cccccc"
            },
            itemHiddenStyle: {
              color: "#cccccc"
            }
          },
          tooltip: {
            pointFormat: "{series.name}<b>{point.y}</b>元"
          },
          plotOptions: {
            //  静态渲染
            series: {
              animation: false
            },
            column: {
              pointPadding: 0,
              //调整每个组的柱形图的间隔
              borderWidth: 0,
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
    // handleClickP1Dialog() {
    //   this.$router.push("/publicParking");
    // },
    // handleClickP2Dialog() {
    //   this.$router.push("/staffParking");
    // },
    // handleClickP3Dialog() {
    //   this.$router.push("/temporaryParking");
    // },
    // handleClickP4Dialog() {
    //   this.$router.push("/newEnergyParking");
    // },
    // handleClickP5Dialog() {
    //   this.$router.push("/dedicatedParking");
    // },
  }
};
</script>
<style lang="scss">
.st0 {
  opacity: 0.5;
  fill: #098d97;
  enable-background: new;
}
.st1 {
  fill: none;
  stroke: #000000;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st2 {
  fill: #3cd5e5;
}
.st3 {
  fill: none;
  stroke: #3cd5e5;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st4 {
  fill: #07172f;
  stroke: #3cd5e5;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st5 {
  fill: #095263;
}
.st6 {
  fill: #095263;
  stroke: #3cd5e5;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st7 {
  fill: #0c7454;
  stroke: #3cd5e5;
  stroke-width: 0.72;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st8 {
  fill: #091830;
}
.st9 {
  fill: none;
  stroke: #3cd5e5;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.st10 {
  fill: red;
  stroke: #3cd5e5;
  stroke-width: 0.72;
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
  width: 12%;
  height: 64px;
  margin-left: 19%;
  margin-top: 12px;
  line-height: 72px;
  color: white;
  font-size: 18px;
}
.top-loginName-Text {
  width: 80%;
  height: 64px;
  line-height: 72px;
  text-align: right;
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
  height: 98%;
  margin-top: 0.8%;
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
  margin-left: 3px;
}
/* 每个表格上面的标题名左边小图片样式 */
.leftChartUpImage {
  color: #1398ff;
  margin-left: 3%;
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
  display: flex;
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
  height: 98%;
  margin-top: 0.8%;
  margin-left: 1.4%;
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
  width: 53.6%;
  height: 94%;
  margin-top: 0.7%;
  margin-left: 1.4%;
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
  height: 81%;
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
  width: 92%;
  height: 90%;
  margin-left: 4%;
  margin-top: 4.5%;
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
  margin-top: 20%;
}
.parkListDivP2 {
  width: 100px;
  font-family: PingFangSC-Medium;
  font-size: 9px;
  color: #ecedef;
  letter-spacing: 0.32px;
  text-align: center;
  position: absolute;
  margin-left: 40.5%;
  margin-top: 18%;
}
.parkListDivP3 {
  width: 100px;
  font-family: PingFangSC-Medium;
  font-size: 9px;
  color: #ecedef;
  letter-spacing: 0.32px;
  text-align: center;
  position: absolute;
  margin-left: 45.5%;
  margin-top: 5.5%;
}
.parkListDivP4 {
  width: 100px;
  font-family: PingFangSC-Medium;
  font-size: 9px;
  color: #ecedef;
  letter-spacing: 0.32px;
  text-align: center;
  position: absolute;
  margin-left: 31%;
  margin-top: 12%;
}
.parkListDivP5 {
  width: 100px;
  font-family: PingFangSC-Medium;
  font-size: 9px;
  color: #ecedef;
  letter-spacing: 0.32px;
  text-align: center;
  position: absolute;
  margin-left: 30%;
  margin-top: 14.1%;
}
.parkListDialogP1 {
  display: flex;
  position: absolute;
}
.parkListDialogP1-leftSvg {
  margin-top: 6px;
  margin-left: 6px;
}
.parkListDialogP1-text {
  margin-top: 7px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.39px;
  margin-left: 4px;
}
.parkListDialogP1-text-leftPort {
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #b3b3b3;
  letter-spacing: 0.36px;
}
.parkListDialogP1-text-leftPortNumber {
  font-family: HelveticaNeue-Bold;
  font-size: 16px;
  color: #fd4a4a;
  letter-spacing: 0.43px;
}
.parkListDialogP1-shuxian {
  width: 1px;
  height: 30px;
  margin-top: 6px;
  opacity: 0.2;
  background: #ececec;
  margin-left: 10px;
}
.parkListDialogP1-rightSvg {
  line-height: 47px;
  margin-left: 9px;
}
.popperClass {
  padding: 0;
  min-width: 120px;
  line-height: normal;
  background-color: rgba(4, 61, 135, 0.8) !important;
  border: solid 1px rgba(19, 152, 255, 0.6);
}
.el-tooltip__popper.is-light {
  background: #3d71c1 !important;
  color: white;
}
</style>
