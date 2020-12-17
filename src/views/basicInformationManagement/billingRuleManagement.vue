<!--
    计费规则管理
 * @Author: 郝晶
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-19 19:31:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="about">
    <div class="up">
      <!--顶部查询-->
      <el-form
        :inline="true"
        :model="formInline"
        size="small"
        class="demo-form-inline"
      >
        <el-form-item label="计费规则名称：">
          <el-input
            size="small"
            style="width: 160px"
            v-model="formInline.billingRuleDefName"
            placeholder="计费规则名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="停车场：">
          <el-select
            size="small"
            style="width: 160px"
            v-model="formInline.parkId"
            placeholder="请选择停车场"
          >
            <el-option
              v-for="(item, index) in parkLotNameList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryBillingRuleList"
            >查询</el-button
          >
          <el-button @click="resetQuery" type="primary" size="small"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addRule"
          >新增规则</el-button
        >
        <el-button type="primary" size="small" @click="handleExport"
          >导出</el-button
        >
        <el-button type="danger" size="small" @click="onBatch"
          >批量删除</el-button
        >
      </el-row>
    </div>
    <!-- 初始化页面表格表格 -->
    <div class="down">
      <el-table
        :data="accountRules"
        stripe
        :header-cell-style="{
          fontfamily: 'PingFangSC-Medium',
          background: '#FFFFFF',
          color: '#333333',
          border: 'none',
          padding: 'none',
          fontSize: '14px',
          letterSpacing: '0.56px',
          'text-align': 'center'
        }"
        :cell-style="{
          fontfamily: 'PingFangSC-Regular',
          letterSpacing: '0.56px',
          fontSize: '14px',
          color: '#333333',
          'text-align': 'center'
        }"
        style="width: 98%;margin-left: 1%"
      >
        <el-table-column type="selection" />
        <el-table-column
          prop="billingRuleDefId"
          :show-overflow-tooltip="true"
          label="计费规则编号"
        ></el-table-column>
        <el-table-column
          prop="billingRuleDefName"
          :show-overflow-tooltip="true"
          label="计费规则名称"
        ></el-table-column>
        <el-table-column
          prop="billingRuleTypeName"
          :show-overflow-tooltip="true"
          label="计费规则类型"
        ></el-table-column>
        <el-table-column
          prop="remark"
          :show-overflow-tooltip="true"
          label="描述"
        ></el-table-column>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleCheck(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button @click="handleAlter(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button @click="handleDelete(scope.row)" type="text" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right">
        <!--分页条-->
        <el-pagination
          @current-change="handleCurrentModify"
          layout="total, prev, pager, next, jumper"
          :current-page="pageNum"
          :page-size="pageSize"
          :total="pageTotal"
        >
        </el-pagination>
      </div>
    </div>
    <!-- 新增计费弹框 -->
    <el-dialog
      title="新增计费信息"
      :visible.sync="addChargeListDialog"
      width="50%"
      destroy-on-close
    >
      <el-form
        :model="addChargeList"
        label-width="150px"
        :rules="addChargeListRules"
        ref="addChargeList"
      >
        <!--        <span>停车场信息</span>-->
        <!--        <el-form-item label="归属停车场:">-->
        <!--          <el-select v-model="addChargeList.parkId" placeholder="请选择停车场">-->
        <!--            <el-option v-for="(item, index) in parkLotNameList" :label="item.name"-->
        <!--                       :value="item.code" :key="index"></el-option>-->
        <!--          </el-select>-->
        <!--        </el-form-item>-->
        <span>计费规则信息</span>
        <el-form-item
          label="计费规则类型:"
          label-width="150px"
          prop="billingRuleTypeCode"
        >
          <el-select
            style="width: 200px"
            v-model="addChargeList.billingRuleTypeCode"
            placeholder="请选择计费规则"
          >
            <el-option
              v-for="(item, index) in chargeTypeList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="计费规则名称:"
          label-width="150px"
          prop="billingRuleDefName"
        >
          <el-input
            v-model="addChargeList.billingRuleDefName"
            placeholder="请输入"
            style="width: 200px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="计费规则描述:" label-width="150px">
          <el-input
            v-model="addChargeList.remark"
            placeholder="请输入"
            style="width: 200px;"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 按次计费弹出表格 -->
      <el-row v-if="addChargeList.billingRuleTypeCode != 1">
        <span>按次计费</span>
        <el-row style="display: flex">
          <div style="width: 16%"><div>车辆类型</div></div>
          <div style="width: 60%">
            <div><span>收费标准</span></div>
            <div style="display: flex">
              <div>
                <span>白天时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.dayBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.dayEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
              <div style="margin-left: 7%">
                <span>夜间时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.nightBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.nightEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
            </div>
          </div>
          <div style="width: 12%"><div>免费时长</div></div>
          <div style="width: 12%"><div>重新计费时长</div></div>
        </el-row>
        <!--    获取的小型车辆数据-->
        <el-row style="width: 100%;height:50px;margin-top:1%;display:flex">
          <div style="width: 16%;height:50px">
            小型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smalldayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smallnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallrebillingDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
        </el-row>
        <!--    大型车辆计费规则-->
        <el-row style="width: 100%;height:50px;display:flex">
          <div style="width: 16%;height:50px">
            大型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxdayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxrebillingDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
        </el-row>
      </el-row>
      <!-- 按时计费弹出表格 -->
      <el-row v-if="addChargeList.billingRuleTypeCode == 1">
        <span>按照时长计费</span>
        <el-form>
          <el-form-item label="最短计费时长:" label-width="150px">
            <el-select
              style="width: 200px;"
              v-model="billingRuleDetailList.minBillingDurationCode"
            >
              <el-option
                v-for="(item, index) in minTimeList"
                :label="item.name"
                :value="item.code"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-row style="display: flex">
          <div style="width: 16%"><div>车辆类型</div></div>
          <div style="width: 60%">
            <div><span>收费标准</span></div>
            <div style="display: flex">
              <div>
                <span>白天时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.dayBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.dayEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
              <div style="margin-left: 7%">
                <span>夜间时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.nightBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.nightEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
            </div>
          </div>
          <div style="width: 12%">
            <div>免费时长</div>
          </div>
          <div style="width: 12%">
            <el-radio v-model="billingRuleDetailList.ceilingFlag" label="0"
              >24小时是否封顶</el-radio
            >
          </div>
        </el-row>
        <!--    获取的小型车辆数据-->
        <el-row style="width: 100%;height:50px;margin-top:1%;display:flex">
          <div style="width: 16%;height:50px">
            小型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smalldayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smallnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallceilingMoneyAmount"
              size="small"
              style="width: 80px"
            ></el-input
            >元
          </div>
        </el-row>
        <!--    大型车辆计费规则-->
        <el-row style="width: 100%;height:50px;display:flex">
          <div style="width: 16%;height:50px">
            大型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxdayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxceilingMoneyAmount"
              size="small"
              style="width: 80px"
            ></el-input
            >元
          </div>
        </el-row>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <!--        <el-button @click="addChargeListDialog = false">取 消</el-button>-->
        <el-button type="primary" @click="onCommitAdd">确 定</el-button>
      </div>
    </el-dialog>
    <!--查看计费弹窗-->
    <el-dialog
      title="查看计费信息"
      :visible.sync="checkChargeListDialog"
      width="50%"
    >
      <el-form :model="checkChargeList" label-width="150px">
        <!--        <span>停车场信息</span>-->
        <!--        <el-form-item label="归属停车场:">-->
        <!--          <el-select v-model="checkChargeList.parkId" placeholder="请选择停车场">-->
        <!--            <el-option v-for="(item, index) in parkLotNameList" :label="item.name"-->
        <!--                       :value="item.code" :key="index"></el-option>-->
        <!--          </el-select>-->
        <!--        </el-form-item>-->
        <span>计费规则信息</span>
        <el-form-item label="计费规则类型:" label-width="150px">
          <el-select
            style="width:200px"
            v-model="checkChargeList.billingRuleTypeCode"
            placeholder="请选择计费规则"
          >
            <el-option
              v-for="(item, index) in chargeTypeList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="计费规则名称:" label-width="150px">
          <el-input
            v-model="checkChargeList.billingRuleDefName"
            placeholder="请输入"
            style="width:200px"
          ></el-input>
        </el-form-item>
        <el-form-item label="计费规则描述:" label-width="150px">
          <el-input
            v-model="checkChargeList.remark"
            placeholder="请输入"
            style="width:200px"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 按次计费弹出表格 -->
      <el-row v-if="checkChargeList.billingRuleTypeCode != 1">
        <span>按次计费</span>
        <el-row style="display: flex">
          <div style="width: 16%"><div>车辆类型</div></div>
          <div style="width: 60%">
            <div><span>收费标准</span></div>
            <div style="display: flex">
              <div>
                <span>白天时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.dayBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.dayEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
              <div style="margin-left: 7%">
                <span>夜间时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.nightBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.nightEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
            </div>
          </div>
          <div style="width: 12%"><div>免费时长</div></div>
          <div style="width: 12%"><div>重新计费时长</div></div>
        </el-row>
        <!--    获取的小型车辆数据-->
        <el-row style="width: 100%;height:50px;margin-top:1%;display:flex">
          <div style="width: 16%;height:50px">
            小型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smalldayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smallnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallrebillingDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
        </el-row>
        <!--    大型车辆计费规则-->
        <el-row style="width: 100%;height:50px;display:flex">
          <div style="width: 16%;height:50px">
            大型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxdayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxrebillingDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
        </el-row>
      </el-row>
      <!-- 按时计费弹出表格 -->
      <el-row v-if="checkChargeList.billingRuleTypeCode == 1">
        <span>按照时长计费</span>
        <el-form>
          <el-form-item label="最短计费时长:" label-width="150px">
            <el-select style="200px" v-model="billingRuleDetailList.minBillingDurationCode">
              <el-option
                v-for="(item, index) in minTimeList"
                :label="item.name"
                :value="item.code"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-row style="display: flex">
          <div style="width: 16%"><div>车辆类型</div></div>
          <div style="width: 60%">
            <div><span>收费标准</span></div>
            <div style="display: flex">
              <div>
                <span>白天时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.dayBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.dayEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
              <div style="margin-left: 7%">
                <span>夜间时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.nightBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.nightEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
            </div>
          </div>
          <div style="width: 12%">
            <div>免费时长</div>
          </div>
          <div style="width: 12%">
            <el-radio v-model="billingRuleDetailList.ceilingFlag" label="0"
              >24小时是否封顶</el-radio
            >
          </div>
        </el-row>
        <!--    获取的小型车辆数据-->
        <el-row style="width: 100%;height:50px;margin-top:1%;display:flex">
          <div style="width: 16%;height:50px">
            小型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smalldayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smallnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallceilingMoneyAmount"
              size="small"
              style="width: 80px"
            ></el-input
            >元
          </div>
        </el-row>
        <!--    大型车辆计费规则-->
        <el-row style="width: 100%;height:50px;display:flex">
          <div style="width: 16%;height:50px">
            大型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxdayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxceilingMoneyAmount"
              size="small"
              style="width: 80px"
            ></el-input
            >元
          </div>
        </el-row>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="checkChargeListDialog = false">返回</el-button>
        <!--        <el-button type="primary" @click="onCommitAdd">确 定</el-button>-->
      </div>
    </el-dialog>
    <!--修改计费弹窗-->
    <el-dialog
      title="修改计费信息"
      :visible.sync="alterChargeListDialog"
      width="50%"
    >
      <el-form :model="checkChargeList" label-width="150px">
        <!--        <span>停车场信息</span>-->
        <!--        <el-form-item label="归属停车场:">-->
        <!--          <el-select v-model="checkChargeList.parkId" placeholder="请选择停车场">-->
        <!--            <el-option v-for="(item, index) in parkLotNameList" :label="item.name"-->
        <!--                       :value="item.code" :key="index"></el-option>-->
        <!--          </el-select>-->
        <!--        </el-form-item>-->
        <span>计费规则信息</span>
        <el-form-item label="计费规则类型:"label-width="150px">
          <el-select
            style="width: 200px"
            v-model="checkChargeList.billingRuleTypeCode"
            placeholder="请选择计费规则"
          >
            <el-option
              v-for="(item, index) in chargeTypeList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="计费规则名称:"label-width="150px">
          <el-input
            v-model="checkChargeList.billingRuleDefName"
            placeholder="请输入"
            style="width: 200px"

          ></el-input>
        </el-form-item>
        <el-form-item label="计费规则描述:"label-width="150px">
          <el-input
            v-model="checkChargeList.remark"
            placeholder="请输入"
            style="width: 200px"

          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 按次计费弹出表格 -->
      <el-row v-if="checkChargeList.billingRuleTypeCode != 1">
        <span>按次计费</span>
        <el-row style="display: flex">
          <div style="width: 16%"><div>车辆类型</div></div>
          <div style="width: 60%">
            <div><span>收费标准</span></div>
            <div style="display: flex">
              <div>
                <span>白天时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.dayBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.dayEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
              <div style="margin-left: 7%">
                <span>夜间时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.nightBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.nightEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
            </div>
          </div>
          <div style="width: 12%"><div>免费时长</div></div>
          <div style="width: 12%"><div>重新计费时长</div></div>
        </el-row>
        <!--    获取的小型车辆数据-->
        <el-row style="width: 100%;height:50px;margin-top:1%;display:flex">
          <div style="width: 16%;height:50px">
            小型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smalldayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smallnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallrebillingDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
        </el-row>
        <!--    大型车辆计费规则-->
        <el-row style="width: 100%;height:50px;display:flex">
          <div style="width: 16%;height:50px">
            大型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxdayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/次
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxrebillingDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
        </el-row>
      </el-row>
      <!-- 按时计费弹出表格 -->
      <el-row v-if="checkChargeList.billingRuleTypeCode == 1">
        <span>按照时长计费</span>
        <el-form>
          <el-form-item label="最短计费时长:"label-width="150px">
            <el-select             style="width: 200px"
                                   v-model="billingRuleDetailList.minBillingDurationCode">
              <el-option
                v-for="(item, index) in minTimeList"
                :label="item.name"
                :value="item.code"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-row style="display: flex">
          <div style="width: 16%"><div>车辆类型</div></div>
          <div style="width: 60%">
            <div><span>收费标准</span></div>
            <div style="display: flex">
              <div>
                <span>白天时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.dayBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.dayEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '00:00',
                    end: '12:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
              <div style="margin-left: 7%">
                <span>夜间时段</span>
                <br />
                <el-time-select
                  v-model="billingRuleDetailList.nightBeginTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
                <span>~</span>
                <el-time-select
                  v-model="billingRuleDetailList.nightEndTime"
                  size="small"
                  style="width: 115px;"
                  :picker-options="{
                    step: '00:15',
                    start: '12:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>
              </div>
            </div>
          </div>
          <div style="width: 12%">
            <div>免费时长</div>
          </div>
          <div style="width: 12%">
            <el-radio v-model="billingRuleDetailList.ceilingFlag" label="0"
              >24小时是否封顶</el-radio
            >
          </div>
        </el-row>
        <!--    获取的小型车辆数据-->
        <el-row style="width: 100%;height:50px;margin-top:1%;display:flex">
          <div style="width: 16%;height:50px">
            小型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smalldayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.smallnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.smallceilingMoneyAmount"
              size="small"
              style="width: 80px"
            ></el-input
            >元
          </div>
        </el-row>
        <!--    大型车辆计费规则-->
        <el-row style="width: 100%;height:50px;display:flex">
          <div style="width: 16%;height:50px">
            大型车辆
          </div>
          <div style="width: 60%;height:50px;display:flex">
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxdayBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
            <div style="width: 50%;height:50px">
              <el-input
                v-model="billingRuleDetailList.maxnightBillingPrice"
                size="small"
                style="width: 115px"
              ></el-input
              >元/15分钟
            </div>
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxfreeDuration"
              size="small"
              style="width: 80px"
            ></el-input
            >分钟
          </div>
          <div style="width: 12%;height:50px">
            <el-input
              v-model="billingRuleDetailList.maxceilingMoneyAmount"
              size="small"
              style="width: 80px"
            ></el-input
            >元
          </div>
        </el-row>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="alterChargeListDialog = false">返回</el-button>
        <el-button type="primary" @click="onCommitAlter">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addChargeListRules: {
        billingRuleTypeCode: [
          {
            required: true,
            message: "请选择计费规则类型",
            trigger: "change"
          }
        ],
        billingRuleDefName: [
          {
            required: true,
            message: "请输入计费规则名称",
            trigger: "blur"
          }
        ]
      },
      //停车场下拉
      parkLotNameList: [],
      //计费规则下拉
      chargeTypeList: [],
      //最短时间下拉
      minTimeList: [],
      // 搜索条件
      formInline: {},
      // 表格数据
      accountRules: [],
      //初始化分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 2,
      //新增计费弹窗
      addChargeListDialog: false,
      //新增停车场数据绑定
      addChargeList: [
        {
          parkId: "",
          billingRuleTypeCode: 0,
          billingRuleDefName: "",
          remark: ""
        }
      ],
      //按次计费
      billingRuleDetailList: [
        {
          vehicleTypeCode: "1",
          smallfreeDuration: "",
          smallrebillingDuration: "",
          dayBeginTime: "",
          dayEndTime: "",
          nightBeginTime: "",
          nightEndTime: "",
          smalldayBillingPrice: "",
          smallnightBillingPrice: "",
          ceilingFlag: 0,
          smallceilingMoneyAmount: "",
          minBillingDurationCode: ""
        },
        {
          vehicleTypeCode: "2",
          maxfreeDuration: "",
          maxrebillingDuration: "",
          dayBeginTime: "",
          dayEndTime: "",
          nightBeginTime: "",
          nightEndTime: "",
          maxdayBillingPrice: "",
          maxnightBillingPrice: "",
          ceilingFlag: 0,
          maxceilingMoneyAmount: "",
          minBillingDurationCode: ""
        }
      ],
      //查看弹窗
      checkChargeListDialog: false,
      //查看数据绑定
      checkChargeList: [
        {
          parkId: "",
          billingRuleTypeCode: 0,
          billingRuleDefName: "",
          remark: "",
          minBillingDurationCode: ""
        }
      ],
      //修改计费弹窗
      alterChargeListDialog: false,
      //删除一行数据暂存
      delChargeList: []
    };
  },
  mounted() {
    //列表查询
    this.queryBillingRuleList();
    // 停车场下拉查询
    this.queryPark();
    //  计费规则下拉查询
    this.queryChargeType();
    //最短计费时长
    this.queryMinTime();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.formInline = {};
    },
    //查询停车场下拉
    queryPark() {
      this.parkLotNameList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = '321302'"
      };
      this.$basicInformationManagement.queryDictData(param).then(response => {
        this.parkLotNameList = response.data.dataList;
      });
    },
    //最短计费时长
    queryMinTime() {
      this.minTimeList = [];
      const param = {
        columnName: ["min_billing_duration_code", "min_billing_duration_name"],
        tableName: "t_d_min_billing_duration",
        whereStr: ""
      };
      this.$basicInformationManagement.queryDictData(param).then(response => {
        this.minTimeList = response.data.dataList;
      });
    },
    //计费规则类型按次还是按时
    queryChargeType() {
      this.chargeTypeList = [];
      const param = {
        columnName: ["billing_rule_type_code", "billing_rule_type_name"],
        tableName: "t_d_billing_rule_type",
        whereStr: "",
        sortStr: "billing_rule_type_code"
      };
      this.$basicInformationManagement.queryDictData(param).then(response => {
        this.chargeTypeList = response.data.dataList;
      });
    },
    //顶部查询按钮获取参数
    queryBillingRuleList() {
      var that = this;
      const params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        billingRuleDefName: this.formInline.billingRuleDefName
      };
      // console.log('查询传入的参数',params)
      this.$basicInformationManagement
        .queryBillingRuleList(params)
        .then(response => {
          // console.log("查询表格数据", response)
          //分页
          that.pageTotal = response.data.totalRecord;
          //查询
          that.accountRules = response.data.dataList;
        });
    },
    //分页条
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryBillingRuleList();
    },
    //点击新增规则
    addRule() {
      this.addChargeListDialog = true;
      this.addChargeList = [];
      this.billingRuleDetailList = [];
    },
    //新增计费规则提交
    onCommitAdd() {
      this.$refs["addChargeList"].validate(valid => {
        if (valid) {
          this.addChargeListDialog = false;
          const param = {
            billingRuleDefName: this.addChargeList.billingRuleDefName,
            billingRuleTypeCode: this.addChargeList.billingRuleTypeCode,
            remark: this.addChargeList.remark,
            minBillingDurationCode: this.addChargeList.minBillingDurationCode,
            billingRuleDetailList: [
              {
                //小型车辆
                vehicleTypeCode: "1",
                freeDuration: this.billingRuleDetailList.smallfreeDuration,
                rebillingDuration: this.billingRuleDetailList
                  .smallrebillingDuration,
                dayBeginTime: this.billingRuleDetailList.dayBeginTime,
                dayEndTime: this.billingRuleDetailList.dayEndTime,
                nightBeginTime: this.billingRuleDetailList.nightBeginTime,
                nightEndTime: this.billingRuleDetailList.nightEndTime,
                dayBillingPrice: this.billingRuleDetailList
                  .smalldayBillingPrice,
                nightBillingPrice: this.billingRuleDetailList
                  .smallnightBillingPrice,
                ceilingFlag: this.billingRuleDetailList.ceilingFlag,
                ceilingMoneyAmount: this.billingRuleDetailList
                  .smallceilingMoneyAmount,
                minBillingDurationCode: this.billingRuleDetailList
                  .minBillingDurationCode
              },
              {
                // 大型车辆
                vehicleTypeCode: "2",
                freeDuration: this.billingRuleDetailList.maxfreeDuration,
                rebillingDuration: this.billingRuleDetailList
                  .maxrebillingDuration,
                dayBeginTime: this.billingRuleDetailList.dayBeginTime,
                dayEndTime: this.billingRuleDetailList.dayEndTime,
                nightBeginTime: this.billingRuleDetailList.nightBeginTime,
                nightEndTime: this.billingRuleDetailList.nightEndTime,
                dayBillingPrice: this.billingRuleDetailList.maxdayBillingPrice,
                nightBillingPrice: this.billingRuleDetailList
                  .maxnightBillingPrice,
                ceilingFlag: this.billingRuleDetailList.ceilingFlag,
                ceilingMoneyAmount: this.billingRuleDetailList
                  .maxceilingMoneyAmount,
                minBillingDurationCode: this.billingRuleDetailList
                  .minBillingDurationCode
              }
            ]
          };
          this.$basicInformationManagement
            .insertBillingRule(param)
            .then(response => {
              //添加成功弹出
              this.$message({ type: "success", message: "添加成功!" });
              //添加成功 刷新页面 调用查询方法
              this.queryBillingRuleList();
            });
        } else {
          return false;
        }
      });
    },

    //表中的查看
    handleCheck(row) {
      this.checkChargeListDialog = true;
      this.checkChargeList = row;
      this.billingRuleDetailList.smallfreeDuration =
        row.billingRuleDetailList[0].freeDuration;
      this.billingRuleDetailList.smallrebillingDuration =
        row.billingRuleDetailList[0].rebillingDuration;
      this.billingRuleDetailList.dayBeginTime =
        row.billingRuleDetailList[0].dayBeginTime;
      this.billingRuleDetailList.dayEndTime =
        row.billingRuleDetailList[0].dayEndTime;
      this.billingRuleDetailList.nightBeginTime =
        row.billingRuleDetailList[0].nightBeginTime;
      this.billingRuleDetailList.nightEndTime =
        row.billingRuleDetailList[0].nightEndTime;
      this.billingRuleDetailList.smalldayBillingPrice =
        row.billingRuleDetailList[0].dayBillingPrice;
      this.billingRuleDetailList.smallnightBillingPrice =
        row.billingRuleDetailList[0].nightBillingPrice;
      (this.billingRuleDetailList.ceilingFlag =
        row.billingRuleDetailList[0].ceilingFlag),
        (this.billingRuleDetailList.smallceilingMoneyAmount =
          row.billingRuleDetailList[0].ceilingMoneyAmount);
      this.billingRuleDetailList.minBillingDurationCode =
        row.billingRuleDetailList[0].minBillingDurationCode;
      this.billingRuleDetailList.maxfreeDuration =
        row.billingRuleDetailList[1].freeDuration;
      this.billingRuleDetailList.maxrebillingDuration =
        row.billingRuleDetailList[1].rebillingDuration;
      this.billingRuleDetailList.dayBeginTime =
        row.billingRuleDetailList[1].dayBeginTime;
      this.billingRuleDetailList.dayEndTime =
        row.billingRuleDetailList[1].dayEndTime;
      this.billingRuleDetailList.nightBeginTime =
        row.billingRuleDetailList[1].nightBeginTime;
      this.billingRuleDetailList.nightEndTime =
        row.billingRuleDetailList[1].nightEndTime;
      this.billingRuleDetailList.maxdayBillingPrice =
        row.billingRuleDetailList[1].dayBillingPrice;
      this.billingRuleDetailList.maxnightBillingPrice =
        row.billingRuleDetailList[1].nightBillingPrice;
      (this.billingRuleDetailList.ceilingFlag =
        row.billingRuleDetailList[1].ceilingFlag),
        (this.billingRuleDetailList.maxceilingMoneyAmount =
          row.billingRuleDetailList[1].ceilingMoneyAmount);
      this.billingRuleDetailList.minBillingDurationCode =
        row.billingRuleDetailList[1].minBillingDurationCode;
    },
    //点击修改按钮
    handleAlter(row) {
      this.alterChargeListDialog = true;
      this.checkChargeList = row;
      this.billingRuleDetailList.smallfreeDuration =
        row.billingRuleDetailList[0].freeDuration;
      this.billingRuleDetailList.smallrebillingDuration =
        row.billingRuleDetailList[0].rebillingDuration;
      this.billingRuleDetailList.dayBeginTime =
        row.billingRuleDetailList[0].dayBeginTime;
      this.billingRuleDetailList.dayEndTime =
        row.billingRuleDetailList[0].dayEndTime;
      this.billingRuleDetailList.nightBeginTime =
        row.billingRuleDetailList[0].nightBeginTime;
      this.billingRuleDetailList.nightEndTime =
        row.billingRuleDetailList[0].nightEndTime;
      this.billingRuleDetailList.smalldayBillingPrice =
        row.billingRuleDetailList[0].dayBillingPrice;
      this.billingRuleDetailList.smallnightBillingPrice =
        row.billingRuleDetailList[0].nightBillingPrice;
      (this.billingRuleDetailList.ceilingFlag =
        row.billingRuleDetailList[0].ceilingFlag),
        (this.billingRuleDetailList.smallceilingMoneyAmount =
          row.billingRuleDetailList[0].ceilingMoneyAmount);
      this.billingRuleDetailList.minBillingDurationCode =
        row.billingRuleDetailList[0].minBillingDurationCode;
      this.billingRuleDetailList.maxfreeDuration =
        row.billingRuleDetailList[1].freeDuration;
      this.billingRuleDetailList.maxrebillingDuration =
        row.billingRuleDetailList[1].rebillingDuration;
      this.billingRuleDetailList.dayBeginTime =
        row.billingRuleDetailList[1].dayBeginTime;
      this.billingRuleDetailList.dayEndTime =
        row.billingRuleDetailList[1].dayEndTime;
      this.billingRuleDetailList.nightBeginTime =
        row.billingRuleDetailList[1].nightBeginTime;
      this.billingRuleDetailList.nightEndTime =
        row.billingRuleDetailList[1].nightEndTime;
      this.billingRuleDetailList.maxdayBillingPrice =
        row.billingRuleDetailList[1].dayBillingPrice;
      this.billingRuleDetailList.maxnightBillingPrice =
        row.billingRuleDetailList[1].nightBillingPrice;
      (this.billingRuleDetailList.ceilingFlag =
        row.billingRuleDetailList[1].ceilingFlag),
        (this.billingRuleDetailList.maxceilingMoneyAmount =
          row.billingRuleDetailList[1].ceilingMoneyAmount);
      this.billingRuleDetailList.minBillingDurationCode =
        row.billingRuleDetailList[1].minBillingDurationCode;
    },
    //修改确认提交按钮
    onCommitAlter() {
      this.alterChargeListDialog = false;
      const param = {
        billingRuleDefId: this.billingRuleDefId.billingRuleDefId,
        billingRuleDefName: this.checkChargeList.billingRuleDefName,
        billingRuleTypeCode: this.checkChargeList.billingRuleTypeCode,
        remark: this.checkChargeList.remark,
        minBillingDurationCode: this.checkChargeList.minBillingDurationCode,
        billingRuleDetailList: [
          {
            //小型车辆
            vehicleTypeCode: "1",
            freeDuration: this.billingRuleDetailList.smallfreeDuration,
            rebillingDuration: this.billingRuleDetailList
              .smallrebillingDuration,
            dayBeginTime: this.billingRuleDetailList.dayBeginTime,
            dayEndTime: this.billingRuleDetailList.dayEndTime,
            nightBeginTime: this.billingRuleDetailList.nightBeginTime,
            nightEndTime: this.billingRuleDetailList.nightEndTime,
            dayBillingPrice: this.billingRuleDetailList.smalldayBillingPrice,
            nightBillingPrice: this.billingRuleDetailList
              .smallnightBillingPrice,
            ceilingFlag: this.billingRuleDetailList.ceilingFlag,
            ceilingMoneyAmount: this.billingRuleDetailList
              .smallceilingMoneyAmount,
            minBillingDurationCode: this.billingRuleDetailList
              .minBillingDurationCode
          },
          {
            // 大型车辆
            vehicleTypeCode: "2",
            freeDuration: this.billingRuleDetailList.maxfreeDuration,
            rebillingDuration: this.billingRuleDetailList.maxrebillingDuration,
            dayBeginTime: this.billingRuleDetailList.dayBeginTime,
            dayEndTime: this.billingRuleDetailList.dayEndTime,
            nightBeginTime: this.billingRuleDetailList.nightBeginTime,
            nightEndTime: this.billingRuleDetailList.nightEndTime,
            dayBillingPrice: this.billingRuleDetailList.maxdayBillingPrice,
            nightBillingPrice: this.billingRuleDetailList.maxnightBillingPrice,
            ceilingFlag: this.billingRuleDetailList.ceilingFlag,
            ceilingMoneyAmount: this.billingRuleDetailList
              .maxceilingMoneyAmount,
            minBillingDurationCode: this.billingRuleDetailList
              .minBillingDurationCode
          }
        ]
      };
      this.$basicInformationManagement
        .updateBillingRule(param)
        .then(response => {
          console.log("打印修改传入数据", response);
          this.$message({ type: "success", message: "修改成功!" });
          this.queryBillingRuleList();
        });
    },

    //删除一行
    handleDelete(row) {
      //点击删除按钮出现的提示框
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //清空删除
          this.delChargeList = [];
          //设定传入行数据
          const param = {
            billingRuleDefId: [row.billingRuleDefId]
          };
          console.log(param, "listlistlistlistlistlist");
          this.delChargeList = param;
          this.$basicInformationManagement.deleteBillingRule(
            this.delChargeList
          );
          this.$message({ type: "success", message: "删除成功!" });
          this.queryBillingRuleList();
        })
        .catch(() => {
          //取消删除按钮
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //导出
    handleExport() {},
    //批量删除
    onBatch() {},
    // 斑马纹样式
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "successRow11";
      } else if (rowIndex % 2 == 0) {
        return "successSecond";
      }
      return "";
    }
  }
};
</script>
<style scoped>
/**/
.about {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
/*查询*/
.up {
  width: 98%;
  height: 10%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}
/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 84.5%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}
/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 40px;
  padding-left: 1%;
  padding-top: 0.5%;
}
.line-2 {
  width: 98%;
  height: 40px;
  margin-left: 1%;
}
/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #f8f9fa !important;
}

/deep/ .el-table .successSecond {
  background: white !important;
}
</style>
