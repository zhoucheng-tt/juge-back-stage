<!--
    停车场管理
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <!--上半部分查询-->
    <div class="up">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-button type="primary" size="small" @click="addInletAndOutlet()"
            >新增停车场
          </el-button>
          <el-button type="primary" size="small"
            ><a
              :href="exportFile"
              class="download"
              download=""
              style="color: #ffffff;text-decoration:none"
              >导出</a
            >
          </el-button>
          <el-button type="danger" size="small" @click="deleteSelect()"
            >批量删除
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="parkList"
        ref="selectParkingLotList"
        @selection-change="handleSelectionChange"
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
        <el-table-column type="selection" width="55" />
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        />
        <el-table-column
          prop="parkTypeName"
          :show-overflow-tooltip="true"
          label="停车场类型"
        />
        <!--        <el-table-column prop="parkOptIntegratorCode" :show-overflow-tooltip="true" label="运营商编码"/>-->
        <el-table-column
          prop="companyName"
          :show-overflow-tooltip="true"
          label="归属企业名称"
        />
        <!--        <el-table-column-->
        <!--            prop="cityName"-->
        <!--            :show-overflow-tooltip="true"-->
        <!--            label="归属地市名称"-->
        <!--        />-->
        <!--        <el-table-column-->
        <!--            prop="districtName"-->
        <!--            :show-overflow-tooltip="true"-->
        <!--            label="归属区县名称"-->
        <!--        />-->
        <el-table-column
          prop="address"
          :show-overflow-tooltip="true"
          label="地址"
        />
        <el-table-column
          prop="parkSpaceNum"
          :show-overflow-tooltip="true"
          label="规划总车位数"
        />
        <el-table-column
          prop="billingRuleDesc"
          :show-overflow-tooltip="true"
          label="计费规则"
        />
        <el-table-column
          prop="contact"
          :show-overflow-tooltip="true"
          label="联系人"
        />
        <el-table-column
          prop="contactPhoneNumber"
          :show-overflow-tooltip="true"
          label="联系人电话"
        />
        <!--        <el-table-column-->
        <!--          prop="parkPictureFile"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="停车场图片"-->
        <!--        />-->
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="handleEditListDialogue(scope.row)"
              type="text"
              size="small"
              >修改
            </el-button>
            <el-button
              @click="HandleDeleteListDialogue(scope.row)"
              type="text"
              size="small"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div
        style="background-color: white;width: 98%;margin-left: 1%;height: 35px"
      >
        <div style="float: right">
          <!--分页条-->
          <el-pagination
            layout="total, prev, pager, next, jumper"
            :page-size="pageSize"
            @current-change="handleCurrentModify"
            :current-page="pageNum"
            :total="pageTotal"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!--新增表单弹框-->
    <el-dialog
      id="add"
      title="新增停车场信息"
      :visible.sync="addListDialogueandoff"
      width="50%"
      destroy-on-close
    >
      <el-form
        :inline="true"
        :model="newParkingLot"
        :rules="addListDiaRules"
        ref="newParkingLotR"
      >
        <div style="font-size: 20px">基础信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item
              label="停车场名称:"
              label-width="150px"
              prop="parkName"
            >
              <el-input
                v-model="newParkingLot.parkName"
                placeholder="请输入停车场名称"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="停车场类型:"
              label-width="150px"
              prop="parkTypeCode"
            >
              <el-select
                style="width: 200px"
                v-model="newParkingLot.parkTypeCode"
                placeholder="请选择"
              >
                <el-option
                  v-for="(item, index) in parkingLotType"
                  :label="item.name"
                  :value="item.code"
                  :key="index"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="归属企业名称:"
              label-width="150px"
              prop="companyId"
            >
              <el-select
                style="width: 200px"
                v-model="newParkingLot.companyId"
                placeholder="请选择"
              >
                <el-option
                  v-for="(item, index) in enterprises"
                  :label="item.name"
                  :value="item.code"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="规划总车位数:"
              label-width="150px"
              prop="parkSpaceNum"
            >
              <el-input
                v-model="newParkingLot.parkSpaceNum"
                placeholder="请输入规划总车位数"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">位置信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="地址:" label-width="150px" prop="address">
              <el-input
                v-model="newParkingLot.address"
                placeholder="请输入地址"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!--        <el-row>-->
        <!--          <el-col :span="12">-->
        <!--            <el-form-item label="经度:" label-width="150px">-->
        <!--              <el-input v-model="newParkingLot.longitude" placeholder="请输入经度"/>-->
        <!--            </el-form-item>-->
        <!--          </el-col>-->
        <!--          <el-col :span="12">-->
        <!--            <el-form-item label="纬度:" label-width="150px">-->
        <!--              <el-input v-model="newParkingLot.latitude" placeholder="请输入纬度"></el-input>-->
        <!--            </el-form-item>-->
        <!--          </el-col>-->
        <!--        </el-row>-->
        <div style="font-size: 20px">计费规则信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item
              label="计费规则:"
              label-width="150px"
              prop="billingRuleDefId"
            >
              <el-select
                style="width: 200px"
                v-model="newParkingLot.billingRuleDefId"
                placeholder="请选择"
              >
                <el-option
                  v-for="(item, index) in chargingRules"
                  :key="index"
                  :label="item.name"
                  :value="item.code"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">其他</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="联系人:" label-width="150px" prop="contact">
              <el-input
                v-model="newParkingLot.contact"
                placeholder="请输入联系人"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="联系人电话:"
              label-width="150px"
              prop="contactPhoneNumber"
            >
              <el-input
                v-model="newParkingLot.contactPhoneNumber"
                placeholder="请输入联系人电话"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!--        <el-row>-->
        <!--          <el-col :span="12">-->
        <!--            &lt;!&ndash;            <el-form-item&ndash;&gt;-->
        <!--            &lt;!&ndash;              label="停车场图片:"&ndash;&gt;-->
        <!--            &lt;!&ndash;              label-width="150px"&ndash;&gt;-->
        <!--            &lt;!&ndash;              prop="parkPictureFile"&ndash;&gt;-->
        <!--            &lt;!&ndash;            >&ndash;&gt;-->
        <!--            &lt;!&ndash;              <el-input v-model="newParkingLot.parkPictureFile" />&ndash;&gt;-->
        <!--            &lt;!&ndash;            </el-form-item>&ndash;&gt;-->
        <!--            <p style="font-size: 20px">停车场图片</p>-->
        <!--            <el-upload-->
        <!--                class="upload-demo"-->
        <!--                action="https://jsonplaceholder.typicode.com/posts/"-->
        <!--                :file-list="fileList"-->
        <!--                list-type="picture"-->
        <!--            >-->
        <!--              <el-button size="small" type="primary"-->
        <!--              >点击上传停车场图片-->
        <!--              </el-button-->
        <!--              >-->
        <!--              &lt;!&ndash;              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>&ndash;&gt;-->
        <!--            </el-upload>-->
        <!--          </el-col>-->
        <!--          &lt;!&ndash;          <el-col :span="2">&ndash;&gt;-->
        <!--          &lt;!&ndash;            <el-button type="info" @click="choosePicture()" size="small"&ndash;&gt;-->
        <!--          &lt;!&ndash;              >选择</el-button&ndash;&gt;-->
        <!--          &lt;!&ndash;            >&ndash;&gt;-->
        <!--          &lt;!&ndash;          </el-col>&ndash;&gt;-->
        <!--          &lt;!&ndash;          <el-col :span="2">&ndash;&gt;-->
        <!--          &lt;!&ndash;            <el-button type="info" @click="uploadPicture()" size="small"&ndash;&gt;-->
        <!--          &lt;!&ndash;              >上传</el-button&ndash;&gt;-->
        <!--          &lt;!&ndash;            >&ndash;&gt;-->
        <!--          &lt;!&ndash;          </el-col>&ndash;&gt;-->
        <!--          &lt;!&ndash;          <el-col :span="2">&ndash;&gt;-->
        <!--          &lt;!&ndash;            <el-button type="info" @click="viewPicture()" size="small"&ndash;&gt;-->
        <!--          &lt;!&ndash;              >预览</el-button&ndash;&gt;-->
        <!--          &lt;!&ndash;            >&ndash;&gt;-->
        <!--          &lt;!&ndash;          </el-col>&ndash;&gt;-->
        <!--        </el-row>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!--        <el-button @click="addListDialogueandoff = false">取 消</el-button>-->
        <el-button type="primary" @click="onSubmitAdd()">保 存</el-button>
      </div>
    </el-dialog>
    <!--修改表单弹框-->
    <el-dialog id="edit" :visible.sync="editListDialogueandoff">
      <el-form :inline="true" label-position="right" label-width="100px">
        <div style="font-size: 20px">基础信息</div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="停车场名称:" label-width="150px">
              <el-input
                v-model="editParkingLot.parkName"
                placeholder="请输入停车场名称"
              />
            </el-form-item>
          </el-col>
          <!--          <el-col :span="12">-->
          <!--            <el-form-item-->
          <!--              label="停车场编号:"-->
          <!--              label-width="150px"-->
          <!--              placeholder="请输入停车场编号"-->
          <!--            >-->
          <!--              <el-input v-model="editParkingLot.parkId" disabled />-->
          <!--            </el-form-item>-->
          <!--          </el-col>-->
          <el-col :span="12">
            <el-form-item label="停车场类型名称:" label-width="150px">
              <el-select
                v-model="editParkingLot.parkTypeCode"
                placeholder="请选择"
                style="width: 200px"
              >
                <el-option
                  v-for="(item, index) in parkingLotType"
                  :label="item.name"
                  :value="item.code"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="归属企业名称:" label-width="150px">
              <el-select
                style="width: 200px"
                v-model="editParkingLot.companyId"
                placeholder="请选择"
              >
                <el-option
                  v-for="(item, index) in enterprises"
                  :label="item.name"
                  :value="item.code"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="规划总车位数:" label-width="150px">
              <el-input
                v-model="editParkingLot.parkSpaceNum"
                placeholder="请输入规划总车位数"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">位置信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="地址:" label-width="150px">
              <el-input
                v-model="editParkingLot.address"
                placeholder="请输入地址"
              />
            </el-form-item>
          </el-col>
          <!--          <el-col :span="12">-->
          <!--            <el-form-item label="经度:" label-width="150px">-->
          <!--              <el-input-->
          <!--                v-model="editParkingLot.longitude"-->
          <!--                placeholder="请输入经度"-->
          <!--              />-->
          <!--            </el-form-item>-->
          <!--          </el-col>-->
          <!--          <el-col :span="12">-->
          <!--            <el-form-item label="纬度:" label-width="150px">-->
          <!--              <el-input-->
          <!--                v-model="editParkingLot.latitude"-->
          <!--                placeholder="请输入纬度"-->
          <!--              ></el-input>-->
          <!--            </el-form-item>-->
          <!--          </el-col>-->
        </el-row>
        <div style="font-size: 20px">计费规则信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="计费规则:" label-width="150px">
              <el-select
                style="width: 200px"
                v-model="editParkingLot.billingRuleDefId"
                placeholder="请选择"
              >
                <el-option
                  v-for="(item, index) in chargingRules"
                  :label="item.name"
                  :value="item.code"
                  :key="index"
                />
                >
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">其他</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="联系人:" label-width="150px">
              <el-input
                v-model="editParkingLot.contact"
                placeholder="请输入联系人"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人电话:" label-width="150px">
              <el-input
                v-model="editParkingLot.contactPhoneNumber"
                placeholder="请输入联系人电话"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!--        <el-row>-->
        <!--          <el-col :span="12">-->
        <!--            <el-form-item label="停车场图片:" label-width="150px">-->
        <!--              <el-input v-model="editParkingLot.parkPictureFile"/>-->
        <!--            </el-form-item>-->
        <!--          </el-col>-->
        <!--          <el-col :span="2">-->
        <!--            <el-button type="info" @click="choosePicture()" size="small"-->
        <!--            >选择-->
        <!--            </el-button-->
        <!--            >-->
        <!--          </el-col>-->
        <!--&lt;!&ndash;          <el-col :span="2">&ndash;&gt;-->
        <!--&lt;!&ndash;            <el-button type="info" @click="uploadPicture()" size="small"&ndash;&gt;-->
        <!--&lt;!&ndash;            >上传&ndash;&gt;-->
        <!--&lt;!&ndash;            </el-button&ndash;&gt;-->
        <!--&lt;!&ndash;            >&ndash;&gt;-->
        <!--&lt;!&ndash;          </el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;          <el-col :span="2">&ndash;&gt;-->
        <!--&lt;!&ndash;            <el-button type="info" @click="viewPicture()" size="small"&ndash;&gt;-->
        <!--&lt;!&ndash;            >预览&ndash;&gt;-->
        <!--&lt;!&ndash;            </el-button&ndash;&gt;-->
        <!--&lt;!&ndash;            >&ndash;&gt;-->
        <!--&lt;!&ndash;          </el-col>&ndash;&gt;-->
        <!--        </el-row>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!--        <el-button @click="editListDialogueandoff = false">取 消</el-button>-->
        <el-button type="primary" @click="onSubmitEdit()">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { BASE_API } from "@/utils/config";

export default {
  data() {
    return {
      //导出
      exportFile: BASE_API + "ParkingLotController/download",
      //上传图片列表
      fileList: [],
      addListDiaRules: {
        parkName: [
          {
            required: true,
            message: "请输入停车场名称",
            trigger: "blur"
          }
        ],
        parkTypeCode: [
          {
            required: true,
            message: "请输入停车场名称",
            trigger: "blur"
          }
        ],
        companyId: [
          {
            required: true,
            message: "请输入停车场名称",
            trigger: "blur"
          }
        ],
        parkSpaceNum: [
          {
            required: true,
            message: "请输入规划总车位数",
            trigger: "blur"
          }
        ],
        // cityCode: [
        //   {
        //     required: "true",
        //     message: "请选择归属地市",
        //     trigger: "blur"
        //   }
        // ],
        address: [
          {
            required: "true",
            message: "请输入地址",
            trigger: "blur"
          }
        ],
        billingRuleDefId: [
          {
            required: "true",
            message: "请选择计费规则",
            trigger: "blur"
          }
        ],
        contact: [
          {
            required: "true",
            message: "请输入联系人",
            trigger: "blur"
          }
        ],
        contactPhoneNumber: [
          {
            required: "true",
            message: "请输入联系电话",
            trigger: "blur"
          }
        ]
      },
      //新增停车场数据暂存
      newParkingLot: {},
      //多选后数据暂存
      selectParkingLotList: [],
      //停车场类型下拉菜单数据
      parkingLotType: [],
      //归属企业下拉菜单数据
      enterprises: [],
      //归属地市下拉菜单
      cityList: [],
      //归属区县下拉菜单
      districtList: [],
      //计费规则下拉菜单
      chargingRules: [],
      //初始化分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      //前端暂时数据
      parkList: [],
      //新增表单弹框属性：false:不显露
      addListDialogueandoff: false,
      //修改表单弹框属性：false:不显露
      editListDialogueandoff: false,
      //修改停车场数据暂存
      editParkingLot: {},
      //批量删除暂存id
      idList: []
      //表单验证规则
      // rules: {
      //   parkId: [
      //     {required: true, message: '请输入ID', trigger: 'blur'},
      //     {max: 5, min: 3, message: "3到5位数", trigger: 'blur'}
      //   ]
      // }
    };
  },
  methods: {
    //斑马纹样式
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "successRow11";
      } else if (rowIndex % 2 == 0) {
        return "successSecond";
      }
      return "";
    },
    //批量删除
    deleteSelect() {
      if (this.idList === [] || this.idList.length === 0) {
        this.$confirm("请选中!", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
      } else {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            // console.log(this.idList)
            const param = {
              parkId: this.idList
            };
            this.$ysParking.deletePark(param).then(res => {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.queryParkList();
            });
          })
          .catch(() => {
            this.$message({ type: "info", message: "已取消删除" });
          });
        //  console.log(this.selectParkingLotList);
      }
    },
    //单个删除
    HandleDeleteListDialogue(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // console.log("你要删除的id是" + row.parkId);
          this.idList = [];
          this.idList.push(row.parkId);
          const param = {
            parkId: this.idList
          };
          this.$ysParking.deletePark(param).then(res => {
            // console.log("打印响应", res)
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.queryParkList();
          });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    // 点击新增
    addInletAndOutlet() {
      this.newParkingLot = {};
      this.districtList = [];
      this.addListDialogueandoff = true;
    },
    //选择停车场图片
    choosePicture() {
      // console.log("选择图片");
    },
    //上传图片
    uploadPicture() {
      // console.log("上传图片");
    },
    //预览图片
    viewPicture() {
      // console.log("预览图片");
    },
    //提交表单
    onSubmitAdd() {
      this.$refs["newParkingLotR"].validate(valid => {
        if (valid) {
          // console.log(this.newParkingLot);
          //将新增数据展示到页面（仅做展示用）
          // this.parkList.push(this.newParkingLot);
          const param = {
            parkName: this.newParkingLot.parkName,
            parkTypeCode: this.newParkingLot.parkTypeCode,
            companyId: this.newParkingLot.companyId,
            address: this.newParkingLot.address,
            parkSpaceNum: this.newParkingLot.parkSpaceNum,
            billingRuleDefId: this.newParkingLot.billingRuleDefId,
            contact: this.newParkingLot.contact,
            contactPhoneNumber: this.newParkingLot.contactPhoneNumber,
            creater: localStorage.getItem("userName")
          };
          this.$ysParking.insertPark(param).then(res => {
            this.$message({
              message: "添加成功",
              type: "success"
            });
            this.queryParkList();
            this.addListDialogueandoff = false;
          });
        }
      });
    },
    //修改弹框弹出
    handleEditListDialogue(row) {
      this.editListDialogueandoff = true;
      this.editParkingLot = row;
      console.log(this.editParkingLot);
      // this.queryDisList(row.cityCode);
    },
    //修改表单提交
    onSubmitEdit() {
      // console.log(this.editParkingLot);
      const param = {
        parkId: this.editParkingLot.parkId,
        parkName: this.editParkingLot.parkName,
        parkTypeCode: this.editParkingLot.parkTypeCode,
        companyId: this.editParkingLot.companyId,
        address: this.editParkingLot.address,
        parkSpaceNum: this.editParkingLot.parkSpaceNum,
        billingRuleDefId: this.editParkingLot.billingRuleDefId,
        contact: this.editParkingLot.contact,
        contactPhoneNumber: this.editParkingLot.contactPhoneNumber
      };
      this.$ysParking.updatePark(param).then(res => {
        // console.log("打印响应", res);
        this.queryParkList();
      });
      this.editListDialogueandoff = false;
    },
    //多选监听
    handleSelectionChange(val) {
      this.selectParkingLotList = val;
      this.idList = [];
      val.forEach(item => {
        this.idList.push(item.parkId);
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      // 查询列表方法
      this.queryParkList();
    },
    // 查询列表方法
    queryParkList() {
      this.parkList = [];
      const param = {
        pageSize: this.pageSize,
        pageNumber: this.pageNum
      };
      this.$ysParking.queryParkList(param).then(res => {
        // console.log("打印出来res", res);
        this.pageTotal = res.resultEntity.total;
        this.parkList = res.resultEntity.list;
      });
    },
    //查询停车场类型
    queryTypeList() {
      var that = this;
      const paramTypes = {
        columnName: ["park_type_code", "park_type_name"],
        tableName: "t_d_park_type",
        whereStr: []
      };
      this.$homePage.queryDict(paramTypes).then(res => {
        that.parkingLotType = res.resultEntity;
      });
    },
    //查询归属企业下拉菜单数据
    queryCompanyList() {
      var that = this;
      const companyParam = {
        columnName: ["company_id", "company_name"],
        tableName: "t_bim_company",
        whereStr: []
      };
      this.$homePage.queryDict(companyParam).then(res => {
        that.enterprises = res.resultEntity;
      });
    },
    //计费规则下拉菜单数据查询
    queryBillingRuleList() {
      const param = {
        columnName: ["billing_rule_def_id", "billing_rule_def_name"],
        tableName: "t_bm_billing_rule_def",
        whereStr: []
      };
      this.$homePage.queryDict(param).then(res => {
        this.chargingRules = res.resultEntity;
      });
    }
  },
  mounted() {
    //初始化列表
    this.queryParkList();
    //初始化计费规则下拉菜单
    this.queryBillingRuleList();
    //初始化所属公司下拉菜单
    this.queryCompanyList();
    //初始化停车场类型下拉菜单
    this.queryTypeList();
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
  height: 7%;
  background-color: white;
  margin-left: 1%;
  /*margin-top: 0.5%;*/
}

/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 88%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 45px;
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

/* 表格表头样式 */
.el-table__header-wrapper {
  width: 100%;
  height: 0px;
}

/* 设置弹出框样式 */
/deep/ .el-dialog {
  width: 50%;
}

/* 弹出框内表单样式控制 */
.el-form-item-dialog {
  width: 32%;
}

.backgroundLine {
  background-color: #eaf0f6;
  width: 100%;
  height: 15px;
}

#add {
  height: auto;
}
</style>
