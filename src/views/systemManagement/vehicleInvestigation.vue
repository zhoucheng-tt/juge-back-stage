<!--
    日志管理
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:36:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
    <div class="about">
        <p>日志管理</p>
<!--       日志时间-->
      <div class="top">
          <el-form :inline="true" class="demo-form-inline">
          <span class="demonstration">日志时间:</span>
          <el-date-picker
                  v-model="minLogTime"
                  format="yyyy-MM-dd HH:mm:ss"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  type="datetime"
                  placeholder="选择日期时间">
          </el-date-picker>
          <span>~</span>
          <el-date-picker
                  v-model="maxLogTime"
                  format="yyyy-MM-dd HH:mm:ss"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  type="datetime"
                  placeholder="选择日期时间">
          </el-date-picker>
            <el-form-item>
              <el-button type="primary" @click="queryLogList">
                    查询
              </el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="exportLogList">
                    导出
                </el-button>
            </el-form-item>
          </el-form>
      </div>
<!--        日志管理表格-->
        <div class="table">
            <!--数据表格-->
            <el-table
                    :data="logManagementData"
                    :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                    :cell-style="{ 'text-align': 'center' }">
                <el-table-column
                        fixed
                        prop="logTime"
                        label="日志时间">
                </el-table-column>
                <el-table-column
                        prop="operator"
                        label="操作人">
                </el-table-column>
                <el-table-column
                        prop="sysOperationTypeName"
                        label="操作类型">
                </el-table-column>
                <el-table-column
                        prop="operateObject"
                        label="操作对象">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="operateResult"
                        label="操作结果">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="logDetail"
                        label="日志详情">
                </el-table-column>
            </el-table>
            <!--分页条-->
            <el-pagination
                    style="position: relative;left: 65%"
                    @current-change="handleCurrentModify"
                    layout=" prev, pager, next,total, jumper"
                    :current-page="pageNum"
                    :page-size="pageSize"
                    :total="pageTotal">
            </el-pagination>
        </div>
    </div>
  </template>
<script>
   export default {
       data(){
           return{
               //顶部开始时间
               minLogTime:"",
               //顶部结束时间
               maxLogTime:"",
               //初始化分页
               pageNum: 1,
               pageSize: 10,
               pageTotal: 1,
                //日志管理表格数据存放
               logManagementData:[],
           }
       },
       mounted() {
           //查询日志管理列表
           this.queryLogList();

       },
       methods:{
           //顶部导出按钮
           exportLogList(){},
           //顶部查询按钮
           queryLogList() {
               var that = this;
               const param = {
                   //传入查询要用的参数
                   minLogTime:this.minLogTime,
                   maxLogTime:this.maxLogTime,
                   pageSize:this.pageSize,
                   pageNum:this.pageNum
               };
               console.log("param",param)
               //引用deviceManagement中的查询接口方法
               this.$systemUser.queryLogList(param).then(response => {
                   console.log("打印查询response", response)
                   //分页
                   that.pageTotal = response.data.totalRecord;
                   //查询
                   that.logManagementData = response.data.dataList;
                   console.log("查询日志管理表格数据", that.logManagementData)
               })
           },
           //分页方法
           handleCurrentModify(val){
               //查询
               this.pageNum = val;
               this.queryLogList();
           },

       }
   }
</script>
<style scoped>

</style>
