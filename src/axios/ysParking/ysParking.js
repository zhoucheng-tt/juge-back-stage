/*
 * @Author: your name
 * @Date: 2020-09-27 09:18:13
 * @LastEditTime: 2020-10-27 20:59:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\company Environment\tcxt-web\src\axios\ysParking\ysParking.js
 */
import request from '@/utils/request'

// 接口详情
export function echats (params) {
    return request({
      url: '/api/main/ad/getList',
      method: 'post',
      data: params,
    })
  }

  export function queryList (params) {
    return request({
      url: 'http://paks.jitunet.cn:83/parkingspace/parking/space/queryAllSpace.action?parkingId=28&start=0&limit=100',
      method: 'post',
      data: params,
      flag: 'out'
    })
  }

  export function queryImgUrl (params) {
    return request({
      url: 'http://paks.jitunet.cn:83/parkingspace/parking/record/queryRecordByCameraId.action?cameraId=47',
      method: 'post',
      data: params,
      flag: 'out'
    })
  }

  export function trendAnalysis (params) {
    return request({
      url: '/realtimeMonitorFunc/queryAlarmMonitorTodayList',
      method: 'post',
      data: params,
    })
  }

  //停车场管理-停车场管理-列表查询
  export function queryParkList (param) {
    return request({
      url: '/parkFunc/queryParkList',
      method: 'post',
      data: param
    })
  }


