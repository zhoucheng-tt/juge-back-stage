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
          <el-button type="primary" size="small" @click="queryWhiteList"
            >查询</el-button
          >
          <el-button type="primary" size="small" @click="resetQuery"
            >重置</el-button
          >
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
          prop="idCardNumber"
          :show-overflow-tooltip="true"
          label="身份证信息"
        />
        <el-table-column
          prop="carOwnerContactAddress"
          :show-overflow-tooltip="true"
          label="车主联系地址"
        />
        <el-table-column
          prop="numberPlateColorName"
          :show-overflow-tooltip="true"
          label="车牌颜色"
        />
        <el-table-column
          prop="effectiveTime"
          :show-overflow-tooltip="true"
          label="生效时间"
        />
        <el-table-column
          prop="expirationTime"
          :show-overflow-tooltip="true"
          label="失效时间"
        />
        <!--        <el-table-column-->
        <!--          prop="parkSpaceId"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="车位编号"-->
        <!--        />-->
        <el-table-column
          prop="remark"
          :show-overflow-tooltip="true"
          label="备注"
        />
        <el-table-column
          prop="blackWhiteListStatusName"
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
      </el-table>
    </div>
    <!--        新增白名单弹窗-->
    <el-dialog
      title="新增白名单"
      :visible.sync="addWhiteListDialog"
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
          :model="addWhiteData"
          :rules="addListRules"
        >
          <!--                    归属停车场信息-->
          <el-row>
            <p>归属停车场信息</p>
            <el-col :span="12" style="display: flex;margin-left: 6%">
              <el-form-item
                style="margin-left: 1%"
                label="归属停车场"
                prop="parkId"
              >
                <el-select
                  v-model="addWhiteData.parkId"
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
          <!--                白名单信息-->
          <el-row>
            <p>白名单信息</p>
            <!--                白名单信息第一行车牌号 车主姓名-->
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="车牌号码:"
                  label-width="150px"
                  prop="plateNumber"
                >
                  <el-input v-model="addWhiteData.plateNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="车主姓名:"
                  label-width="150px"
                  prop="carOwnerName"
                >
                  <el-input v-model="addWhiteData.carOwnerName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--                        白名单第二行手机号身份证信息-->
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="手机号:"
                  label-width="150px"
                  prop="phoneNumber"
                >
                  <el-input v-model="addWhiteData.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="身份证信息:"
                  label-width="150px"
                  prop="idCardNumber"
                >
                  <el-input v-model="addWhiteData.idCardNumber"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--                        白名单第三行车主联系地址-->
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="车主联系地址:"
                  label-width="150px"
                  prop="carOwnerContactAddress"
                >
                  <el-input
                    style="width: 400px"
                    v-model="addWhiteData.carOwnerContactAddress"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--                        白名单第四行车牌颜色-->
            <el-row>
              <el-form-item
                label="车牌颜色:"
                label-width="150px"
                prop="numberPlateColorCode"
              >
                <el-select
                  v-model="addWhiteData.numberPlateColorCode"
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
            </el-row>
            <!--                        白名单第五行生效失效时间-->
            <el-row class="addWhiteListDate">
              <!--                        生效时间-->
              <el-row
                class="effectTime"
                style="display:flex;margin-left: 6%;margin-bottom: 20px"
              >
                <el-col :span="12">
                  <el-form-item label="生效时间:" prop="effectiveTime">
                    <el-date-picker
                      v-model="addWhiteData.effectiveTime"
                      type="datetime"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      placeholder="请选择生效时间"
                    >
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="失效时间：" prop="expirationTime">
                    <el-date-picker
                      v-model="addWhiteData.expirationTime"
                      type="datetime"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      placeholder="请选择失效时间"
                    >
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-row>
            <!--                        白名单最后一行备注-->
            <el-row>
              <!--                        车位编号-->
              <el-col :span="12">
                <el-form-item
                  label="车位编号:"
                  label-width="150px"
                  prop="parkSpaceId"
                >
                  <el-input v-model="addWhiteData.parkSpaceId"></el-input>
                </el-form-item>
              </el-col>
              <!--                        备注-->
              <el-col :span="12">
                <el-form-item label="备注:" label-width="150px">
                  <el-input v-model="addWhiteData.remark"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-row>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
        <el-button @click="addWhiteListDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!--        修改白名单弹窗-->
    <el-dialog
      title="修改白名单"
      :visible.sync="ModifyWhiteListDialog"
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
          v-model="modifyWhiteList"
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
                  v-model="modifyWhiteList.parkId"
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
          <!--                白名单信息-->
          <el-row>
            <p>白名单信息</p>
            <!--                白名单信息第一行车牌号 车主姓名-->
            <el-row>
              <el-col :span="12">
                <el-form-item label="车牌号码:" label-width="150px">
                  <el-input
                    v-model="modifyWhiteList.plateNumber"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车主姓名:" label-width="150px">
                  <el-input v-model="modifyWhiteList.carOwnerName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--                        白名单第二行手机号身份证信息-->
            <el-row>
              <el-col :span="12">
                <el-form-item label="手机号:" label-width="150px">
                  <el-input v-model="modifyWhiteList.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="身份证信息:" label-width="150px">
                  <el-input v-model="modifyWhiteList.idCardNumber"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--                        白名单第三行车主联系地址-->
            <el-row>
              <el-col :span="12">
                <el-form-item label="车主联系地址:" label-width="150px">
                  <el-input
                    style="width: 400px"
                    v-model="modifyWhiteList.carOwnerContactAddress"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--                        白名单第四行车牌颜色-->
            <el-row>
              <el-form-item label="车牌颜色:" label-width="150px">
                <el-select
                  v-model="modifyWhiteList.numberPlateColorCode"
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
            </el-row>
            <!--                        白名单第五行生效失效时间-->
            <el-row class="addWhiteListDate">
              <!--                        生效时间-->
              <el-row
                class="effectTime"
                style="display:flex;margin-left: 6%;margin-bottom: 20px"
              >
                <el-row>
                  <p>生效时间:</p>
                </el-row>
                <el-date-picker
                  v-model="modifyWhiteList.effectiveTime"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="请选择生效时间"
                >
                </el-date-picker>
              </el-row>
              <!--                         失效时间-->
              <div class="finishTime" style="margin-left: 29%">
                <span>失效时间:</span>
                <el-date-picker
                  v-model="modifyWhiteList.expirationTime"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="请选择失效时间"
                >
                </el-date-picker>
              </div>
            </el-row>
            <!--                        白名单最后一行备注-->
            <el-row>
              <!--                        车位编号-->
              <el-col :span="12">
                <el-form-item label="车位编号:" label-width="150px">
                  <el-input v-model="modifyWhiteList.parkSpaceId"></el-input>
                </el-form-item>
              </el-col>
              <!--                        备注-->
              <el-col :span="12">
                <el-form-item label="备注:" label-width="150px">
                  <el-input v-model="modifyWhiteList.remark"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-row>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmitModify()">确 定</el-button>
        <el-button @click="ModifyWhiteListDialog = false">取 消</el-button>
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
      //新增字段约束
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
            message: "请选择车牌颜色",
            trigger: "blur"
          }
        ],
        parkSpaceId: [
          {
            required: true,
            message: "请输入车位编号",
            trigger: "blur"
          }
        ],
        effectiveTime: [
          {
            required: true,
            message: "请选择生效时间",
            trigger: "blur"
          }
        ],
        expirationTime: [
          {
            required: true,
            message: "请选择失效时间",
            trigger: "blur"
          }
        ]
      },
      // 顶部查询数据暂存处
      whiteManagementList: {},
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
      //顶部车牌号绑定
      plateNumber: "",
      //顶部停车场名称绑定
      parkName: "",
      //新增白名单的弹窗
      addWhiteListDialog: false,
      //新增白名单数据暂存
      addWhiteData: {},
      //删除数据暂存
      delWhiteList: [],
      //多选数据暂存
      selectionRow: [],
      //多选数据id暂存
      idList: [],
      //多选后数据暂存
      selectGateList: [],
      //操作中修改按钮弹窗
      ModifyWhiteListDialog: false,
      //修改数据暂存
      modifyWhiteList: [],
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
    //停车场下拉
    this.queryPark();
    //白名单列表查询
    this.queryWhiteList();
    //白名单车牌颜色
    this.queryPlate();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.whiteManagementList = {};
    },

    //车牌颜色
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
        this.parkLotNameList = response.data.dataList;
        // console.log("白名单停车场下拉名称", that.parkLotNameList);
      });
    },
    //顶部查询按钮获取参数
    queryWhiteList() {
      var that = this;
      const params = {
        cityCode: "",
        districtCode: "",
        parkId: this.whiteManagementList.parkId,
        plateNumber: this.whiteManagementList.plateNumber,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      // console.log('白名单查询传入的参数',params)
      this.$listManagement.queryWhiteList(params).then(response => {
        // console.log("查询白名单表格数据", response)
        //分页
        that.pageTotal = response.data.totalRecord;
        //查询
        that.parkingLotInformation = response.data.dataList;
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
      this.addWhiteData = [];
    },
    //新增白名单确认提交
    onSubmitAdd() {
      //点击提交隐藏弹窗
      this.addWhiteListDialog = false;
      const param = {
        plateNumber: this.addWhiteData.plateNumber,
        carOwnerName: this.addWhiteData.carOwnerName,
        phoneNumber: this.addWhiteData.phoneNumber,
        idCardNumber: this.addWhiteData.idCardNumber,
        carOwnerContactAddress: this.addWhiteData.carOwnerContactAddress,
        effectiveTime: this.addWhiteData.effectiveTime,
        expirationTime: this.addWhiteData.expirationTime,
        parkSpaceId: this.addWhiteData.parkSpaceId,
        remark: this.addWhiteData.remark,
        //停车场编号 停车场名称
        parkId: this.addWhiteData.parkId,
        //车牌颜色
        numberPlateColorCode: this.addWhiteData.numberPlateColorCode
      };
      console.log("新增白名单传入的参数", param);
      this.$listManagement.insertWhiteList(param).then(response => {
        console.log("打印新增白名单数据", response);
        //添加成功弹出
        this.$message({ type: "success", message: "添加成功!" });
        //添加成功 刷新页面 调用查询方法
        this.queryWhiteList();
      });
    },
    //删除一行
    reMove(row) {
      //点击删除按钮出现的提示框
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //清空删除
          this.delWhiteList = [];
          //设定传入行数据
          const param = {
            whiteListId: [row.whiteListId]
          };
          console.log("白名单删除传入的参数", param);
          //将参数传到delWhiteList中
          this.delWhiteList = param;
          //调用接口中的删除方法 delWhiteList
          this.$listManagement.deleteWhiteList(this.delWhiteList);
          //提示删除成功
          this.$message({ type: "success", message: "删除成功!" });
          //重新执行查询 （重新加载页面）
          this.queryWhiteList();
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
        // console.log("批量删除id存放", this.idList);
        const param = {
          whiteListId: this.idList
        };
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$listManagement.deleteWhiteList(param).then(res => {
              console.log("批量删除成功", res);
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
      // console.log("查询修改表格数据",this.modifyWhiteList)
    },
    //操作中的修改按钮的提交
    onSubmitModify() {
      const param = {
        whiteListId: this.modifyWhiteList.whiteListId,
        parkId: this.modifyWhiteList.parkId,
        plateNumber: this.modifyWhiteList.plateNumber,
        carOwnerName: this.modifyWhiteList.carOwnerName,
        phoneNumber: this.modifyWhiteList.phoneNumber,
        idCardNumber: this.modifyWhiteList.idCardNumber,
        carOwnerContactAddress: this.modifyWhiteList.carOwnerContactAddress,
        numberPlateColorCode: this.modifyWhiteList.numberPlateColorCode,
        effectiveTime: this.modifyWhiteList.effectiveTime,
        expirationTime: this.modifyWhiteList.expirationTime,
        parkSpaceId: this.modifyWhiteList.parkSpaceId,
        remark: this.modifyWhiteList.remark,
        blackWhiteListStatusCode: this.modifyWhiteList.blackWhiteListStatusCode
      };
      console.log("传入的参数", param);
      this.$listManagement.updateWhiteList(param).then(response => {
        console.log("打印修改传入数据", response);
        this.$message({ type: "success", message: "修改成功!" });
        this.queryWhiteList();
        console.log("修改后的数据", this.modifyBlackList);
      });
      this.ModifyWhiteListDialog = false;
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
        whiteListId: this.startUpList.whiteListId,
        blackWhiteListStatusCode: "0"
      };
      console.log("传入的参数", param);
      this.$listManagement.updateWhiteListStatus(param).then(response => {
        console.log("打印修改传入数据", response);
        this.$message({ type: "success", message: "修改成功!" });
        this.queryWhiteList();
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
        whiteListId: this.blockUpList.whiteListId,
        blackWhiteListStatusCode: "1"
      };
      console.log("传入的参数", param);
      this.$listManagement.updateWhiteListStatus(param).then(response => {
        console.log("打印修改传入数据", response);
        this.$message({ type: "success", message: "修改成功!" });
        this.queryWhiteList();
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
/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #f8f9fa !important;
}

/deep/ .el-table .successSecond {
  background: white !important;
}

.line-2 {
  width: 98%;
  height: 40px;
  margin-left: 1%;
  margin-top: 0.5%;
}
</style>
