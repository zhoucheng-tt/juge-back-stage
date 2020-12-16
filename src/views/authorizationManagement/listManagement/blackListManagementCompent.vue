<!--
 * @Author:邵青阳
 * @Date: 2020-11-07 13:55:30
 * @LastEditTime: 2020-11-07 17:00:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\authorizationManagement\listManagement\blackListManagementCompent.vue
-->
<template>
  <div>
    <!--        顶部车牌号一栏-->
    <div class="plate">
      <el-form
          :inline="true"
          :model="blackManagementList"
          class="demo-form-inline"
      >
        <!--        车牌号输入框-->

        <el-form-item label="车牌号">
          <el-input
              v-model="blackManagementList.plateNumber"
              placeholder="请输入车牌号"
          ></el-input>
        </el-form-item>

        <!--         停车场下拉框       -->

        <el-form-item label="停车场">
          <el-select
              v-model="blackManagementList.parkId"
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

        <!--                查询按钮-->
        <el-form-item>
          <el-button type="primary" @click="queryBlackList">查询</el-button>
          <el-button type="primary" @click="resetQuery">重置</el-button>
        </el-form-item>
        <el-row style="height: 45px">
          <el-form-item>
            <!--            新增黑名单-->
            <el-button type="primary" @click="addBlackList"
            >新增黑名单
            </el-button
            >
            <!--            批量删除-->
            <el-button type="danger" @click="deleteInBatches"
            >批量删除
            </el-button
            >
          </el-form-item
          >
        </el-row>
      </el-form>
    </div>
    <!--        表格内容-->
    <div class="table" style="padding:0 24px">
      <el-table
          :data="parkingLotInformation"
          stripe
          :header-cell-style="{
          fontSize: '14px',
        }"
          style="width: 100%;"
          ref="selectionRow"
          @selection-change="handleSelectionChange"
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
            label="车牌号码"
        />
        <el-table-column
            prop="arrearageMoneyAmount"
            :show-overflow-tooltip="true"
            label="欠费金额"
        />
        <el-table-column
            prop="carOwnerName"
            :show-overflow-tooltip="true"
            label="车主姓名"
        />
        <el-table-column
            prop="phoneNumber"
            :show-overflow-tooltip="true"
            label="手机号"
        />
        <el-table-column
            prop="joinBlackListTime"
            :show-overflow-tooltip="true"
            label="加入黑名单时间"
        />
        <el-table-column
            prop="joinBlackListReasonName"
            :show-overflow-tooltip="true"
            label="加入黑名单原因"
        />
        <el-table-column
            prop="remark"
            :show-overflow-tooltip="true"
            label="备注"
        />
        <el-table-column
            prop="blackWhiteListStatusName"
            :show-overflow-tooltip="true"
            label="黑名单状态"
        />
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="endUse(scope.row)" type="text" size="small"
            >停用
            </el-button
            >
            <el-button @click="enAble(scope.row)" type="text" size="small"
            >启用
            </el-button
            >
            <el-button @click="aMend(scope.row)" type="text" size="small"
            >修改
            </el-button
            >
            <el-button @click="reMove(scope.row)" type="text" size="small"
            >删除
            </el-button
            >
          </template>
        </el-table-column>
        <!--分页条-->
        <el-pagination
            style="position: relative;left: 78%"
            @current-change="handleCurrentModify"
            layout="total, prev, pager, next, jumper"
            :current-page="pageNum"
            :page-size="pageSize"
            :total="pageTotal"
        >
        </el-pagination>
      </el-table>

    </div>
    <!--        新增黑名单弹窗-->
    <el-dialog
        title="新增黑名单"
        :visible.sync="addBlackListDialog"
        width="70%"
        overflow="hidden"
        destroy-on-close
    >

      <!--          归属停车场信息-->
      <el-form
          :inline="true"
          class="demo-form-inline"
          label-position="right"
          label-width="150px"
          :model="addBlackData"
          :rules="addListRules"
      >
        <!--                    归属停车场信息-->
        <el-row>
          <p>归属停车场信息</p>
          <el-form-item label="归属停车场：" prop="parkId">
            <el-select
                v-model="addBlackData.parkId"
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

        </el-row>
        <!--      黑名单信息-->
        <el-row>
          <p>黑名单信息</p>
          <el-row>
            <!--                黑名单信息第一行车牌号码-->
            <el-col :span="12">
              <el-form-item label="车牌号码:" label-width="150px" prop="plateNumber">
                <el-input v-model="addBlackData.plateNumber"></el-input>
              </el-form-item>
            </el-col>
            <!--                黑名单信息第一行车主姓名-->
            <el-col :span="12">
              <el-form-item label="车主姓名:" label-width="150px" prop="carOwnerName">
                <el-input v-model="addBlackData.carOwnerName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--                        黑名单信息第二行手机号身份证信息-->
          <el-row>
            <el-col :span="12">
              <el-form-item label="手机号:" label-width="150px" prop="phoneNumber">
                <el-input v-model="addBlackData.phoneNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="身份证信息:" label-width="150px" prop="idCardNumber">
                <el-input v-model="addBlackData.idCardNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--                        黑名单第三行车主联系地址-->
          <el-row>
            <el-col :span="12">
              <el-form-item label="车主联系地址:" label-width="150px" prop="carOwnerContactAddress">
                <el-input
                    style="width: 400px"
                    v-model="addBlackData.carOwnerContactAddress"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--                        黑名单第四行车牌颜色-->
          <el-row>
            <el-col :span="12">
              <!--                                <div>-->
              <!--                                    <p>车牌颜色:</p>-->
              <!--                                </div>-->
              <!--                                <el-form-item style="margin-left: 1%">-->
              <!--                                    <el-select v-model="plateColorList.numberPlateColorName" placeholder="请选择车牌颜色">-->
              <!--                                        <el-option v-for="(item, index) in plateColorList" :label="item.name" :value="item.code"-->
              <!--                                                   :key="index"></el-option>-->
              <!--                                    </el-select>-->
              <!--                                </el-form-item>-->
              <!--                                欠费金额-->
              <el-form-item label="欠费金额:" label-width="150px" prop="arrearageMoneyAmount">
                <el-input
                    style="width: 200px"
                    v-model="addBlackData.arrearageMoneyAmount"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--                        黑名单第五行加入黑名单原因-->
          <el-row class="addBlackListDate">
            <el-form-item label="加入黑名单原因：" style="margin-left: 1%" prop="joinBlackListReasonCode">
              <el-select
                  v-model="addBlackData.joinBlackListReasonCode"
                  placeholder="请选择"
              >
                <el-option
                    v-for="(item, index) in addBlackListReason"
                    :label="item.name"
                    :value="item.code"
                    :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <!--                        黑名单最后一行备注-->
          <el-row>
            <el-col :span="12">
              <el-form-item label="备注:" label-width="150px" prop="remark">
                <el-input v-model="addBlackData.remark"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
        <el-button @click="addBlackListDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!--        修改黑名单弹窗-->
    <el-dialog
        title="新增黑名单"
        :visible.sync="ModifyBlackListDialog"
        width="70%"
        overflow="hidden"
    >
      <el-row>
        <!--          归属停车场信息-->
        <el-form
            :inline="true"
            class="demo-form-inline"
            label-position="right"
            label-width="100px"
            v-model="modifyBlackList"
        >
          <!--                    归属停车场信息-->
          <el-row>
            <p>归属停车场信息</p>
            <el-col :span="12" style="display: flex;margin-left: 6%">
              <div>
                <p>归属停车场:</p>
              </div>
              <el-form-item style="margin-left: 1%">
                <el-select
                    v-model="modifyBlackList.parkId"
                    :disabled="true"
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
            </el-col>
          </el-row>
          <!--                黑名单信息-->
          <el-row>
            <p>黑名单信息</p>
            <el-row>
              <!--                黑名单信息第一行车牌号码-->
              <el-col :span="12">
                <el-form-item label="车牌号码:" label-width="150px">
                  <el-input
                      v-model="modifyBlackList.plateNumber"
                      :disabled="true"
                  ></el-input>
                </el-form-item>
              </el-col>
              <!--                黑名单信息第一行车主姓名-->
              <el-col :span="12">
                <el-form-item label="车主姓名:" label-width="150px">
                  <el-input v-model="modifyBlackList.carOwnerName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--                        黑名单信息第二行手机号身份证信息-->
            <el-row>
              <el-form-item label="手机号:" label-width="150px">
                <el-input v-model="modifyBlackList.phoneNumber"></el-input>
              </el-form-item>
            </el-row>
            <!--                        黑名单第四行车牌颜色-->
            <el-row>
              <el-form-item label="欠费金额:" label-width="150px">
                <el-input
                    style="width: 200px"
                    v-model="modifyBlackList.arrearageMoneyAmount"
                ></el-input>
              </el-form-item>
            </el-row>
            <!--                        黑名单第五行加入黑名单原因-->
            <el-row class="addBlackListDate">
              <div>
                <p>加入黑名单原因:</p>
              </div>
              <el-form-item style="margin-left: 1%">
                <el-select
                    v-model="modifyBlackList.joinBlackListReasonCode"
                    placeholder="请选择"
                >
                  <el-option
                      v-for="(item, index) in addBlackListReason"
                      :label="item.name"
                      :value="item.code"
                      :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-row>
            <!--                        黑名单最后一行备注-->
            <el-row>
              <el-form-item label="备注:" label-width="150px">
                <el-input v-model="modifyBlackList.remark"></el-input>
              </el-form-item>
            </el-row>
          </el-row>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmitModify()">确 定</el-button>
        <el-button @click="ModifyBlackListDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!--        操作中停用弹窗-->
    <el-dialog
        title="提示信息"
        :visible.sync="startUpDialog"
        top="30vh"
        width="20%"
    >
      <span style="margin-left:25%;font-size: 20px ">你确定要启用吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="startUp()">确 定</el-button>
        <el-button @click="startUpDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!--        操作中启用弹窗-->
    <el-dialog
        title="提示信息"
        :visible.sync="blockUpDialog"
        top="30vh"
        width="20%"
    >
      <span style="margin-left:25%;font-size: 20px ">你确定要停用吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="blockUp()">确 定</el-button>
        <el-button @click="blockUpDialog = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //新增校验
      addListRules: {
        parkId: [
          {
            required: true,
            message: "请选择归属停车场",
            trigger: "change"
          }
        ],
        plateNumber: [
          {
            required: true,
            message: "请输入车牌号码",
            trigger: "blur"
          }
        ],
        carOwnerName: [
          {
            required: true,
            message: "请输入车主姓名",
            trigger: "blur"
          }
        ],
        phoneNumber: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          }
        ],
        idCardNumber: [
          {
            required: true,
            message: "请输入身份证信息",
            trigger: "blur"
          }
        ],
        carOwnerContactAddress: [
          {
            required: true,
            message: "请输入车主联系地址",
            trigger: "blur"
          }
        ],
        numberPlateColorCode: [
          {
            required: true,
            message: "请输入车牌颜色",
            trigger: "blur"
          }
        ],
        joinBlackListReasonCode: [
          {
            required: true,
            message: "请选择加入黑名单原因",
            trigger: "change"
          }
        ],
        arrearageMoneyAmount: [
          {
            required: true,
            message: "请输入欠费金额",
            trigger: "blur"
          }
        ],
      },
      //顶部数据绑定
      blackManagementList: {},
      //顶部停车场下拉数据存放
      parkLotNameList: [],
      //车牌颜色下拉数据存放
      plateColorList: [],
      //加入黑名单原因下拉
      addBlackListReason: [],
      //表格数据存放
      parkingLotInformation: [],
      //初始化分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 2,
      //顶部车牌号绑定
      plateNumber: "",
      //顶部停车场名称绑定
      parkName: "",
      //新增黑名单的弹窗
      addBlackListDialog: false,
      //新增黑名单数据暂存
      addBlackData: {},
      // //删除黑名单接口id存放
      // delBlackList:[],
      //多选数据暂存
      selectionRow: [],
      //多选数据id暂存
      idList: [],
      selectGateList: [],
      //操作中修改按钮弹窗
      ModifyBlackListDialog: false,
      //修改数据暂存
      modifyBlackList: [],
      //操作中停用弹窗
      blockUpDialog: false,
      //修改中停用用数据暂存
      blockUpList: [],
      //操作中启用弹窗
      startUpDialog: false,
      //修改中启用数据暂存
      startUpList: []
    };
  },
  mounted() {
    //调用查询黑名单停车场下拉
    this.queryPark();
    //查询车牌颜色
    this.queryPlate();
    //黑名单列表查询接口
    this.queryBlackList();
    //查询黑名单下拉原因
    this.queryAddBlack();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.blackManagementList = {};
    },
    //加入黑名单原因下拉
    queryAddBlack() {
      var that = this;
      this.addBlackListReason = [];
      const param = {
        columnName: [
          "join_black_list_reason_code",
          "join_black_list_reason_name"
        ],
        tableName: "t_d_join_black_list_reason",
        whereStr: ""
      };
      this.$listManagement.queryDictData(param).then(response => {
        // console.log("下拉停车场名称", response);
        that.addBlackListReason = response.data.dataList;
        // console.log("黑名单停车场下拉名称", that.parkLotNameList);
      });
    },
    //查询车牌颜色
    queryPlate() {
      var that = this;
      this.plateColorList = [];
      const param = {
        columnName: ["number_plate_color_code", "number_plate_color_name"],
        tableName: "t_d_number_plate_color",
        whereStr: ""
      };
      this.$listManagement.queryDictData(param).then(response => {
        // console.log("下拉停车场名称", response);
        that.plateColorList = response.data.dataList;
        // console.log("黑名单停车场下拉名称", that.parkLotNameList);
      });
    },
    //查询停车场下拉
    queryPark() {
      var that = this;
      this.parkLotNameList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = '321302'"
      };
      this.$listManagement.queryDictData(param).then(response => {
        // console.log("下拉停车场名称", response);
        that.parkLotNameList = response.data.dataList;
        // console.log("黑名单停车场下拉名称", that.parkLotNameList);
      });
    },
    //顶部查询按钮获取参数
    queryBlackList() {
      var that = this;
      const params = {
        cityCode: "",
        districtCode: "",
        parkId: this.blackManagementList.parkId,
        plateNumber: this.blackManagementList.plateNumber,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      // console.log('黑名单查询传入的参数',params)
      this.$listManagement.queryBlackList(params).then(response => {
        // console.log("查询黑名单表格数据", response)
        //分页
        that.pageTotal = response.data.totalRecord;
        //查询
        that.parkingLotInformation = response.data.dataList;
      });
    },
    //分页条
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryBlackList();
    },
    //新增黑名单
    addBlackList() {
      //点击新增黑名单弹出未输入的空黑框
      this.addBlackData = [];
      //显示新增黑名单弹窗
      this.addBlackListDialog = true;
    },
    //新增黑名单确认提交
    onSubmitAdd() {
      this.$refs["addBlackData"].validate(valid=>{
      if(valid){
      console.log(new Date().Format("yyyy-MM-dd hh:mm:ss"), new Date());
      //点击提交隐藏弹窗
      this.addBlackListDialog = false;
      const param = {
        //停车场编号 停车场名称
        parkId: this.addBlackData.parkId,
        plateNumber: this.addBlackData.plateNumber,
        remark: this.addBlackData.remark,
        carOwnerName: this.addBlackData.carOwnerName,
        phoneNumber: this.addBlackData.phoneNumber,
        //欠费金额
        arrearageMoneyAmount: this.addBlackData.arrearageMoneyAmount,
        //加入黑名单时间 加入黑名单原因
        joinBlackListTime: new Date().Format("yyyy-MM-dd hh:mm:ss"),
        joinBlackListReasonCode: this.addBlackData.joinBlackListReasonCode
      };
      console.log("新增黑名单传入的参数", param);
      this.$listManagement.insertBlackList(param).then(response => {
        console.log("打印新增黑名单数据", response);
        //添加成功弹出
        this.$message({ type: "success", message: "添加成功!" });
        //添加成功 刷新页面 调用查询方法
        this.queryBlackList();
      });
        }
      })
    },
    //操作中的删除按钮
    reMove(row) {
      //点击删除按钮出现的提示框
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
          .then(() => {
            //清空删除
            this.idList = [];
            //设定传入行数据
            const param = {
              blackListId: [row.blackListId]
            };
            // console.log('黑名单删除传入的参数',param)
            //将参数传到delWhiteList中
            this.idList = param;
            //调用接口中的删除方法
            this.$listManagement.deleteBlackList(this.idList);
            //提示删除成功
            this.$message({ type: "success", message: "删除成功!" });
            //重新执行查询 （重新加载页面）
            this.queryBlackList();
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
        this.idList.push(item.blackListId);
        // console.log('打印批量删除选择框',param)
        // console.log("1111111111",this.idList)
        // this.selectGateList = this.idList;
      });
      // console.log('批量删除存放ID',this.selectGateList);
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
        // console.log("批量删除id存放", this.idList.blackListId);
        const param = {
          blackListId: this.idList
        };
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
            .then(() => {
              this.$listManagement.deleteBlackList(param).then(res => {
                console.log("批量删除成功", res);
                this.$message({ type: "success", message: "删除成功!" });
                this.queryBlackList();
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
      this.modifyBlackList = row;
      this.ModifyBlackListDialog = true;
      // console.log("查询修改表格数据",this.modifyBlackList)
    },
    //操作中的修改按钮的提交
    onSubmitModify() {
      // console.log("修改数据", this.modifyBlackList);
      const param = {
        blackListId: this.modifyBlackList.blackListId,
        parkId: this.modifyBlackList.parkId,
        plateNumber: this.modifyBlackList.plateNumber,
        joinBlackListReasonCode: this.modifyBlackList.joinBlackListReasonCode,
        arrearageMoneyAmount: this.modifyBlackList.arrearageMoneyAmount,
        remark: this.modifyBlackList.remark,
        carOwnerName: this.modifyBlackList.carOwnerName,
        phoneNumber: this.modifyBlackList.phoneNumber,
        joinBlackListTime: this.modifyBlackList.joinBlackListTime
      };
      console.log("传入的参数", param);
      this.$listManagement.updateBlackList(param).then(response => {
        console.log("打印修改传入数据", response);
        this.$message({ type: "success", message: "修改成功!" });
        this.queryBlackList();
        console.log("修改后的数据", this.modifyBlackList);
      });
      this.ModifyBlackListDialog = false;
    },
    //操作中的启用按钮
    enAble(row) {
      // console.log('一行。。。。。。。。。。。。。',row)
      this.startUpList = row;
      // console.log('22222222222222',this.startUpList)
      this.startUpDialog = true;
    },
    //启用按钮弹窗
    startUp() {
      this.startUpDialog = false;
      const param = {
        blackListId: this.startUpList.blackListId,
        blackWhiteListStatusCode: "0"
      };
      console.log("传入的参数", param);
      this.$listManagement.updateBlackListStatus(param).then(response => {
        console.log("打印修改传入数据", response);
        this.$message({ type: "success", message: "修改成功!" });
        this.queryBlackList();
        console.log("修改后的数据", this.startUpList);
      });
    },
    //停用按钮
    endUse(row) {
      this.blockUpList = row;
      this.blockUpDialog = true;
    },
    //停用按钮弹窗
    blockUp() {
      this.blockUpDialog = false;
      const param = {
        blackListId: this.blockUpList.blackListId,
        blackBlackListStatusCode: "1"
      };
      console.log("传入的参数", param);
      this.$listManagement.updateBlackListStatus(param).then(response => {
        console.log("打印修改传入数据", response);
        this.$message({ type: "success", message: "修改成功!" });
        this.queryBlackList();
        console.log("修改后的数据", this.blockUpList);
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
/*新增黑名单弹窗中的失效时间生效时间样式*/
.addBlackListDate {
  display: flex;
}

.demo-form-inline {
  width: 100%;
  height: 80%;
  padding-left: 2%;
}

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #7de6f8 !important;
}

/deep/ .el-table .successSecond {
  background: #8ed3e7 !important;
}
</style>
