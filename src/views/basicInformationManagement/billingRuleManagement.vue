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
    <el-row class="up">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="计费规则名称">
          <el-input v-model="formInline.billingRuleDefName" placeholder="计费规则名称"></el-input>
        </el-form-item>
        <el-form-item label="停车场：">
          <el-select v-model="formInline.parkId" placeholder="请选择停车场">
            <el-option v-for="(item, index) in parkLotNameList" :label="item.name"
                       :value="item.code" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryBillingRuleList">查询</el-button>
          <el-button type="primary" @click="dialogAdd = true">新增规则</el-button>
          <el-button type="primary" @click="onBatch">批量删除</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="accountRules"
                :row-class-name="tableRowClassName"
                :header-cell-style="{ 'text-align': 'center',background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }"
                style="width: 100%;"
                ref="selectionRow">
        <el-table-column type="selection"/>
        <el-table-column prop="billingRuleDefId" :show-overflow-tooltip="true" label="计费规则编号"></el-table-column>
        <el-table-column prop="billingRuleDefName" :show-overflow-tooltip="true" label="计费规则名称"></el-table-column>
        <el-table-column prop="billingRuleTypeName" :show-overflow-tooltip="true" label="计费规则类型"></el-table-column>
        <el-table-column prop="remark" :show-overflow-tooltip="true" label="描述"></el-table-column>
        <el-table-column  :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="onHandle(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="onUpdate(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="onDelete(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页条-->
      <el-pagination
        style="position: relative;left: 78%"
        @current-change="handleCurrentModify"
        layout="total, prev, pager, next, jumper"
        :current-page="pageNum"
        :page-size="pageSize"
        :total="pageTotal">
      </el-pagination>
    </div>
    <!-- 新增计费弹框 -->
    <el-dialog title="新增计费信息" :visible.sync="dialogAdd">
      <el-form :model="charging" label-width="150px">
        <span class="dialogFormTitle">停车场信息</span>
        <el-form-item label="归属停车场：">
          <el-select v-model="charging.name" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <span class="dialogFormTitle">计费规则信息</span>
        <el-form-item label="计费规则类型：">
          <el-select v-model="charging.sex" placeholder="请选择">
            <el-option v-for="item in charingSelections" :key="item.objId" :label="item.dicText" :value="item.dicCode">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="计费规则名称：">
          <el-input v-model="charging.names" placeholder="请输入" style="width:225px"></el-input>
        </el-form-item>
      </el-form>
      <!-- 按时计费弹出表格 -->
      <div>
        <el-table :data="tableDataHour" style="width: 100%">
          <el-table-column prop="type" label="车辆类型" align="center">
          </el-table-column>
          <el-table-column label="收费标准" align="center">
            <el-table-column prop="sun" label="白天时段" align="center">
            </el-table-column>
            <el-table-column prop="moon" label="夜间时段" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column prop="free" label="免费时长" align="center">
          </el-table-column>
          <el-table-column prop="top" label="封顶" align="center">
          </el-table-column>
        </el-table>
      </div>
      <!-- 按次计费弹出表格 -->
      <div>
        <el-table :data="tableDataNum" style="width: 100%">
          <el-table-column prop="type" label="车辆类型" align="center">
          </el-table-column>
          <el-table-column label="收费标准" align="center">
            <el-table-column prop="sun" label="白天时段" align="center">
            </el-table-column>
            <el-table-column prop="moon" label="夜间时段" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column prop="free" label="免费时长" align="center">
          </el-table-column>
          <el-table-column prop="top" label="重新计费时长" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAdd = false">取 消</el-button>
        <el-button type="primary" @click="dialogAdd = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          //停车场下拉
          parkLotNameList:[],
          // 搜索条件
          formInline: {
              parkId:'',
              billingRuleDefName:''
          },
          // 表格数据
          accountRules: [],
          //初始化分页
          pageNum:1,
          pageSize:10,
          pageTotal:2,
        //新增计费弹窗
        dialogAdd: false,
        // 弹窗-新增计费
        charging: {
          name: "",
          sex: ""
        },
        //计费类型选择
        charingSelections: [
          { dicText: "按时计费", objId: "111", dicCode: "diedj" },
          { dicText: "按次计费", objId: "222", dicCode: "jwidnx" }
        ],

        //按时计费数据
        tableDataHour: [],
        //按次计费数据
        tableDataNum: [],
      };
    },
    mounted() {
      //停车场下拉查询
        this.queryPark();
      //列表查询
        this.queryBillingRuleList();
    },
    methods: {
        //查询停车场下拉
        queryPark(){
            var that=this;
            this.parkLotNameList=[];
            const param={
                "columnName":["park_id","park_name"],
                "tableName":"t_bim_park",
                "whereStr":"district_code = '321302'"
            }
            this.$basicInformationManagement.queryDictData(param).then(response=>{
                this.parkLotNameList = response.data.dataList;
            })
        },
        //顶部查询按钮获取参数
        queryBillingRuleList(){
            var that =this;
            const params={
                pageNum:this.pageNum,
                pageSize:this.pageSize,
                billingRuleDefName:this.formInline.billingRuleDefName,
            }
            console.log('查询传入的参数',params)
            this.$basicInformationManagement.queryBillingRuleList(params).then(response => {
                // console.log("查询表格数据", response)
                //分页
                that.pageTotal = response.data.totalRecord;
                //查询
                that.accountRules=response.data.dataList;
            })
        },
        //分页条
        handleCurrentModify(val){
            this.pageNum = val;
            this.queryBillingRuleList();
        },
      // 搜索
      onSubmit() {},
      //批量删除
      onBatch() { },
      //表格操作
      onHandle() { },
      onUpdate() { },
      onDelete() { },
      // 斑马纹样式
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex % 2 == 1) {
          return 'successRow11';
        } else if (rowIndex % 2 == 0) {
          return 'successSecond';
        }
        return '';
      },
    }
  };
</script>
<style scoped>
  /*顶部查询*/
  .up{
    width: 100%;
    height: 7%;
    float: left;
  }
  /* 查询条件部分样式 */
  .demo-form-inline {
    width: 100%;
    height: 85%;
    margin-top: 0.5%;
    padding-left: 2%;
  }
  /* 弹窗信息标题 */
  .dialogFormTitle {
    font-size: 16px;
  }
  /* 斑马纹样式 */
  /deep/ .el-table .successRow11 {
    background: #7de6f8 !important;
  }
  /deep/ .el-table .successSecond {
    background: #8ed3e7 !important;
  }
</style>
