/**
* @author 白名单管理 专车配置
* @since 2021-05-15
* @data 2021-05-15
*/
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <el-table
      :data="configurationCarList"
      ref="selectionRow"
      :row-class-name="tableRowClassName"
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
      <el-table-column
        prop="parkSpaceId"
        :show-overflow-tooltip="true"
        label="车位编号"
      />
      <el-table-column
        prop="plateNumber"
        :show-overflow-tooltip="true"
        label="放行车辆"
      />
      <el-table-column
        prop="remark"
        :show-overflow-tooltip="true"
        label="是否面向新能源车辆"
      />
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="aMend(scope.row)" type="text" size="small"
          >修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>
<!--    <div-->
<!--      style="background-color: white;width: 98%;margin-left: 1%;height: 35px"-->
<!--    >-->
<!--      <div style="float: right;">-->
<!--        &lt;!&ndash;分页条&ndash;&gt;-->
<!--        <el-pagination-->
<!--          @current-change="handleCurrentModify"-->
<!--          layout="total, prev, pager, next, jumper"-->
<!--          :current-page="pageNum"-->
<!--          :page-size="pageSize"-->
<!--          :total="pageTotal"-->
<!--        >-->
<!--        </el-pagination>-->
<!--      </div>-->
<!--    </div>-->
    <!--        修改白名单弹窗-->
    <el-dialog
      :title="dialogName"
      top:1vh
      :visible.sync="aMendDialog"
      width="30%"
      overflow="hidden"
      @close="queryConfigurateList"
    >
      <el-row>
        <el-col :span="6" style="line-height: 40px">新增白名单车牌：</el-col>
        <el-col :span="12"><el-input placeholder="请输入车牌" v-model="addPlateNumber"></el-input></el-col>
        <el-col :span="4" style="margin-left: 2%">
          <el-button type="primary"  @click="handleClickAdd">确认添加</el-button>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <el-table
          :data="amendList"
          ref="selectionRow"
          :row-class-name="tableRowClassName"
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
          <el-table-column
            prop="plateNumber"
            :show-overflow-tooltip="true"
            label="车牌号"
          />
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteCar(scope.$index, amendList)" type="text" size="small"
              >删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="6">是否开放新能源车:</el-col>
        <el-col :span="18">
          <el-switch
          v-model="switchOpen"
          active-color="#13ce66"
          inactive-color="#999999">
          </el-switch>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSubmitAmend()">保 存</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
    export default {
        name: "configurationCar",
        components: {},
        data() {
            return {
                //初始化分页
                pageNum: 1,
                pageSize: 14,
                pageTotal: 1,
                configurationCarList: [],
                aMendDialog:false,
                amendList:[],
                switchOpen:true,
                dialogName:"",
                dialogNameId:"",
                addPlateNumber:""
            };
        },
        computed: {},
        watch: {},
        mounted() {
            this.queryConfigurateList()
        },
        methods: {
            // 默认查看列表
            queryConfigurateList(){
                let param ={
                    pageNumber: 1,
                    pageSize: 14
                }
                this.$listManagement.specialParkWhiteList(param).then(res=>{
                    res.resultEntity.list.forEach(item=>{
                        if(item.remark==="1"){
                            item.remark="是"
                        }
                        else if(item.remark==="0"){
                            item.remark="否"
                        }
                    })
                    this.configurationCarList=res.resultEntity.list
                })
            },
            handleCurrentModify(val){
                    this.pageNum = val;
                    this.queryConfigurateList();
            },
            // 修改按钮
            aMend(row){
                this.amendList=[]
                this.aMendDialog=true
                this.dialogNameId=row.parkSpaceId
                this.dialogName=row.parkSpaceId.split("_")[1]+"号车位配置"
                console.log( row.plateNumber.split(","))
                row.plateNumber.split(",").forEach(item=>{
                    let param ={
                        plateNumber:item
                    }
                    this.amendList.push(param)
                })
                if(row.remark==="是"){
                    this.switchOpen=true
                }
                else if(row.remark==="否"){
                    this.switchOpen=false
                }
            },
            //修改中的添加按钮
            handleClickAdd(){
                if(this.addPlateNumber==null || this.addPlateNumber.length==0){
                    this.$message({ type: "info", message: "请输入车牌!" });
                    return;
                }
                let flag =true
                this.amendList.forEach(item=>{
                    if(item.plateNumber===this.addPlateNumber){
                        flag = false
                    }
                });
                if(!flag){
                    this.$message({ type: "info", message: "请勿输入重复车牌!" });
                    return;
                }
                let param ={
                    plateNumber:this.addPlateNumber
                };
                this.amendList.push(param);
            },
            // 修改中的删除按钮
                deleteCar (index, rows) {
                    rows.splice(index, 1);
                },
            //修改确认按钮
            onSubmitAmend(){
                let remark =1
                if ( this.switchOpen=true ){
                    remark=1
                }
                else if( this.switchOpen=false){
                    remark =0
                }
                let plate= this.amendList.map(item=>{return item.plateNumber}).join();
                let param ={
                    parkSpaceId:this.dialogNameId,
                    plateNumber:plate,
                    remark:remark
                }
                this.$listManagement.updateSpecialParkWhiteList(param).then(res=>{
                    this.aMendDialog=false
                })
            },

            // 斑马纹样式
            tableRowClassName({ row, rowIndex }) {
                if (rowIndex % 2 == 1) {
                    return "successRow11";
                } else if (rowIndex % 2 == 0) {
                    return "successSecond";
                }
                return "";
            }
        },
    }
</script>
<style scoped>
  .all {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .backgroundLine {
    background-color: #eaf0f6;
    width: 100%;
    height: 15px;
  }
</style>
