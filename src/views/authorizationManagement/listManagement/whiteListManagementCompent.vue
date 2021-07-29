<!--
    白名单管理
 * @Author: 邵青阳
 * @Date: 2020-11-07 13:53:33
 * @LastEditTime: 2020-11-07 13:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\authorizationManagement\listManagement\whiteListManagementCompent.vue
-->
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <!--        顶部车牌号一栏-->
    <div class="up">
      <el-form
        :inline="true"
        :model="whiteManagementList"
        class="demo-form-inline"
      >
        <!--        车牌号输入框-->
        <el-form-item label="车牌号">
          <el-input
            size="small"
            style="width: 160px"
            v-model="whiteManagementList.plateNumber"
            placeholder="请输入车牌号"
          ></el-input>
        </el-form-item>
        <!--         停车场下拉框       -->
        <el-form-item label="停车场">
          <el-select
            size="small"
            style="width: 160px"
            v-model="whiteManagementList.parkId"
            placeholder="请选择停车场"
          >
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="(item, index) in parkLotNameList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <!--                查询按钮-->
        <el-form-item>
          <el-button type="primary" size="small" @click="queryFormList"
          >查询
          </el-button>
          <el-button size="small" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <!--            新增白名单-->
        <el-button type="primary" size="small" @click="addWhiteList"
        >新增白名单
        </el-button>
        <!--            批量删除-->
        <el-button type="danger" size="small" @click="deleteInBatches"
        >批量删除
        </el-button>
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <div class="down">
      <el-table
        :data="parkingLotInformation"
        ref="selectionRow"
        @selection-change="handleSelectionChange"
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
        <el-table-column type="selection" />
        <!--        <el-table-column fixed prop="parkId" label="停车场编号" />-->
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        />
        <el-table-column
          prop="plateNumber"
          :show-overflow-tooltip="true"
          label="车牌号"
        />
        <el-table-column
          prop="plateColorName"
          :show-overflow-tooltip="true"
          label="车牌颜色"
        />
        <!--        <el-table-column-->
        <!--          prop="effectiveTime"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="生效时间"-->
        <!--        />-->
        <!--        <el-table-column-->
        <!--          prop="expirationTime"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="失效时间"-->
        <!--        />-->
        <el-table-column
          prop="remark"
          :show-overflow-tooltip="true"
          label="备注"
        />
        <el-table-column
          prop="statusName"
          :show-overflow-tooltip="true"
          label="白名单状态"
        />
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="endUse(scope.row)" type="text" size="small"
            >停用
            </el-button>
            <el-button @click="enAble(scope.row)" type="text" size="small"
            >启用
            </el-button>
            <el-button @click="aMend(scope.row)" type="text" size="small"
            >修改
            </el-button>
            <el-button @click="reMove(scope.row)" type="text" size="small"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div
        style="background-color: white;width: 98%;margin-left: 1%;height: 35px"
      >
        <div style="float: right;">
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
      <!--        新增白名单弹窗-->
      <el-dialog
        title="新增白名单"
        :visible.sync="addWhiteListDialog"
        width="50%"
        overflow="hidden"
        destroy-on-close
      >
        <!--          归属停车场信息-->
        <el-form
          :inline="true"
          label-position="right"
          label-width="100px"
          :model="addWhiteData"
          :rules="addListRules"
          ref="addWhiteDataR"
        >
          <!--                    归属停车场信息-->
          <p>归属停车场</p>
          <el-row>
            <el-col :span="12" style="display: flex;margin-left: 6%">
              <el-form-item
                style="margin-left: 1%"
              >
                <el-checkbox-group v-model="whiteCheckList">
                  <el-checkbox  v-for="item in parkLotNameList" :label="item.name" :value="item.code"></el-checkbox>
                </el-checkbox-group>

              </el-form-item>
            </el-col>
          </el-row>
          <p>白名单信息</p>
          <el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="车牌号码:"
                  label-width="150px"
                  prop="plateNumber"
                >
                  <el-input onkeyup="this.value=this.value.replace(/[, ]/g,'')" v-model="addWhiteData.plateNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="车牌颜色:"
                  label-width="150px"
                  prop="numberPlateColorCode"
                >
                  <el-select
                    style="width: 200px"
                    v-model="addWhiteData.plateColor"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="(item, index) in plateColorList"
                      :label="item.name"
                      :value="item.code"
                      :key="index"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-form-item label="备注:" label-width="150px">
                <el-input
                  style="width: 665px"
                  v-model="addWhiteData.remark"
                ></el-input>
              </el-form-item>
            </el-row>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
        </span>
      </el-dialog>
      <!--        修改白名单弹窗-->
      <el-dialog
        title="修改白名单"
        :visible.sync="ModifyWhiteListDialog"
        width="50%"
        overflow="hidden"
        @close="queryWhiteList"
      >
        <el-row>
          <el-form
            :inline="true"
            label-position="right"
            label-width="100px"
            v-model="modifyWhiteList"
          >
            <el-row>
              <p>归属停车场信息</p>
              <el-col :span="12" style="display: flex;margin-left: 7.5%">
                <div>
                  <p>归属停车场:</p>
                </div>
                <el-form-item style="margin-left: 1%" label-width="150px">
                  <el-select
                    style="width: 200px"
                    v-model="modifyWhiteList.parkId"
                    placeholder="请选择停车场"
                    disabled
                  >
                    <el-option
                      v-for="(item, index) in parkLotNameList"
                      :label="item.name"
                      :value="item.code"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <p>白名单信息</p>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="车牌号码:" label-width="150px">
                    <el-input onkeyup="this.value=this.value.replace(/[, ]/g,'')"
                      v-model="modifyWhiteList.plateNumber"
                              readonly
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="车牌颜色:" label-width="150px">
                    <el-select
                      style="width: 200px"
                      v-model="modifyWhiteList.plateColor"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="(item, index) in plateColorList"
                        :label="item.name"
                        :value="item.code"
                        :key="index"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-form-item label="备注:" label-width="150px">
                  <el-input
                    style="width: 665px"
                    v-model="modifyWhiteList.remark"
                  ></el-input>
                </el-form-item>
              </el-row>
            </el-row>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSubmitModify()">保 存</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>

    export default {
        data() {
            return {
                //新增字段约束
                addListRules: {
                    plateNumber: [
                        {
                            required: true,
                            message: "请输入车牌号码",
                            trigger: "blur"
                        },
                        {pattern: /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/
                            , message: '请输入正确的车牌'}
                    ],
                    plateColor: [
                        {
                            required: true,
                            message: "请选择车牌颜色",
                            trigger: "blur"
                        }
                    ],
                },

                whiteCheckList:["公共停车场", "员工停车场1"],
                // 顶部查询数据暂存处
                whiteManagementList: { parkId: "" },
                //顶部停车场下拉数据存放
                parkLotNameList: [],
                //车牌颜色下拉数据存放
                plateColorList: [],
                //表格数据存放
                parkingLotInformation: [],
                //初始化分页
                pageNum: 1,
                pageSize: 10,
                pageTotal: 2,
                //新增白名单的弹窗
                addWhiteListDialog: false,
                //新增白名单数据暂存
                addWhiteData: {parkIds:[],plateColor:1},
                //多选数据id暂存
                idList: [],
                //多选后数据暂存
                selectGateList: [],
                //操作中修改按钮弹窗
                ModifyWhiteListDialog: false,
                //修改数据暂存
                modifyWhiteList: {}
            };
        },
        mounted() {
            //停车场下拉
            this.queryPark();
            //白名单列表查询
            this.queryWhiteList();
            //白名单车牌颜色
            this.queryPlate();
        },
        methods: {
            //查询按钮
            queryFormList() {
                this.pageNum = 1;
                this.queryWhiteList();
            },
            //查询重置按钮
            resetQuery() {
                this.whiteManagementList = {
                    parkId: ""
                };
            },
            //车牌颜色
            queryPlate() {
                var that = this;
                this.plateColorList = [];
                const param = {
                    columnName: ["number_plate_color_code", "number_plate_color_name"],
                    tableName: "t_d_number_plate_color",
                    whereStr: []
                };
                this.$homePage.queryDict(param).then(response => {
                    that.plateColorList = response.resultEntity;
                });
            },
            //查询停车场下拉
            queryPark() {
                var that = this;
                this.parkLotNameList = [];
                const param = {
                    columnName: ["park_id", "park_name"],
                    tableName: "t_bim_park",
                    whereStr: []
                };
                this.$homePage.queryDict(param).then(response => {
                    this.parkLotNameList = response.resultEntity;
                    this.parkLotNameList.splice(2,1)
                    // this.parkLotNameList.splice(3,1)
                });
            },
            //顶部查询按钮获取参数
            queryWhiteList() {
                var that = this;
                const params = {
                    parkId: this.whiteManagementList.parkId,
                    plateNumber: this.whiteManagementList.plateNumber,
                    pageNumber: this.pageNum,
                    pageSize: this.pageSize
                };
                this.$listManagement.queryWhiteList(params).then(response => {
                    //分页
                    that.pageTotal = response.resultEntity.total;
                    //查询
                    that.parkingLotInformation = response.resultEntity.list;
                });
            },
            //分页条
            handleCurrentModify(val) {
                this.pageNum = val;
                this.queryWhiteList();
            },
            //新增白名单
            addWhiteList() {
                //显示新增白名单弹窗
                this.addWhiteListDialog = true;
                //点击新增白名单弹出未输入的空白框
                this.addWhiteData = {plateColor:1};
                this.whiteCheckList=["公共停车场", "员工停车场1"];

            },
            //新增白名单确认提交
            onSubmitAdd() {
                let parkIdList=[]
                this.whiteCheckList.forEach(item=>{
                    if(item==="公共停车场"){
                        parkIdList.push("BM01")
                    }
                    else if(item==="员工停车场1"){
                        parkIdList.push("BMK01")
                    }
                    else if(item==="新能源停车场"){
                        parkIdList.push("JQ01")
                    }
                    else if(item==="专用停车场"){
                        parkIdList.push("SJDA01")
                    }
                })
                this.$refs["addWhiteDataR"].validate(valid => {
                    if (valid) {
                        if(parkIdList.length===0||parkIdList===null){
                            this.$message({ type: "info", message: "请选择停车场!" });
                        }
                            else {
                            parkIdList.forEach(item=>{
                                const param = {
                                    plateNumber: this.addWhiteData.plateNumber,
                                    remark: this.addWhiteData.remark,
                                    parkId:item ,
                                    plateColor: this.addWhiteData.plateColor
                                };
                                this.$listManagement.insertWhiteList(param).then(response => {
                                    //添加成功弹出
                                    this.$message({ type: "success", message: "添加成功!" });
                                    this.addWhiteListDialog = false;
                                    //添加成功 刷新页面 调用查询方法
                                    this.queryWhiteList();
                                });
                            })
                        }
                    }
                });
            },
            //删除一行
            reMove(row) {
                //点击删除按钮出现的提示框
                this.$confirm("此操作将永久删除该白名单人员，是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                    .then(() => {
                        this.idList = [];
                        this.idList.push(row.whiteListId);
                        this.$listManagement.deleteWhiteList(this.idList).then(res => {
                            //提示删除成功
                            this.$message({ type: "success", message: "删除成功!" });
                            //重新执行查询 （重新加载页面）
                            this.queryWhiteList();
                        });
                    })
                    .catch(() => {
                        //取消删除按钮
                        this.$message({ type: "info", message: "已取消删除" });
                    });
            },
            //批量删除监听
            handleSelectionChange(val) {
                this.selectGateList = val;
                this.idList = [];
                //获取批量删除id
                val.forEach(item => {
                    this.idList.push(item.whiteListId);
                    // this.selectGateList = this.idList;
                });
            },
            //批量删除
            deleteInBatches() {
                if (this.idList === [] || this.idList.length === 0) {
                    this.$confirm("请选中!", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    });
                } else {
                    this.$confirm(
                        "此操作将永久删除选中的全部白名单人员, 是否继续?",
                        "提示",
                        {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }
                    )
                        .then(() => {
                            this.$listManagement.deleteWhiteList(this.idList).then(res => {
                                this.$message({ type: "success", message: "删除成功!" });
                                this.queryWhiteList();
                            });
                        })
                        .catch(() => {
                            this.$message({ type: "info", message: "已取消删除" });
                        });
                }
            },
            //操作中的修改按钮
            aMend(row) {
                //修改黑名单显示弹窗
                this.modifyWhiteList = row;
                this.ModifyWhiteListDialog = true;
            },
            //操作中的修改按钮的提交
            onSubmitModify() {
                this.ModifyWhiteListDialog = false;
                        const param = {
                            whiteListId: this.modifyWhiteList.whiteListId,
                            plateColor: this.modifyWhiteList.plateColor,
                            effectiveTime: this.modifyWhiteList.effectiveTime,
                            expirationTime: this.modifyWhiteList.expirationTime,
                            remark: this.modifyWhiteList.remark
                        };
                        this.$listManagement.updateWhiteList(param).then(res => {
                            if (res.resultCode == "2000") {
                                this.$message({ type: "success", message: "修改成功!" });
                                this.queryWhiteList();
                            } else {
                                this.$message({ type: "fail", message: "修改失败!" });
                                this.queryWhiteList();
                            }
                        });
            },
            //操作中的启用按钮
            enAble(row) {
                this.$confirm("您确定要启用吗?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                    .then(() => {
                        this.$listManagement.enableWhite(row.whiteListId).then(response => {
                            this.$message({ type: "success", message: "启用成功!" });
                            this.queryWhiteList();
                        });
                    })
                    .catch(() => {
                        this.$message({ type: "info", message: "已取消启用" });
                    });
            },
            //停用按钮
            endUse(row) {
                this.$confirm("您确定要停用吗?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                    .then(() => {
                        this.$listManagement.disableWhite(row.whiteListId).then(response => {
                            this.$message({ type: "success", message: "停用成功!" });
                            this.queryWhiteList();
                        });
                    })
                    .catch(() => {
                        this.$message({ type: "info", message: "已取消停用" });
                    });
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
        }
    };
</script>
<style scoped>
  .all {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /*查询*/
  .up {
    width: 98%;
    height: 12%;
    background-color: white;
    margin-left: 1%;
    /*margin-top: 0.5%;*/
  }

  /* 下班部分列表部分 */
  .down {
    width: 98%;
    height: 84%;
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
    margin-top: 0.5%;
  }

  .backgroundLine {
    background-color: #eaf0f6;
    width: 100%;
    height: 15px;
  }
</style>
