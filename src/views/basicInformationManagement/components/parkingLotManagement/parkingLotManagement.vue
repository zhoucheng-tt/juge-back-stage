<!--
    停车场运营收入分析
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="all">
    <!--上半部分查询-->
    <div class="up">
      <el-form :inline="true" class="demo-form-inline">
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <el-button type="primary" @click="addInletAndOutlet()">新增停车场</el-button>
              <el-button type="danger" @click="deleteSelect()">批量删除</el-button>
              <el-button type="info" @click="exportExcel()">导出</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-scrollbar style="height:100%;">
        <el-table :data="parkList" ref="selectParkingLotList"
                  :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                  :cell-style="{ 'text-align': 'center' }" style="width: 100%;"
                  @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"/>
          <el-table-column width="120" prop="parkId" :show-overflow-tooltip="true" label="停车场编号"/>
          <el-table-column width="120" prop="parkName" :show-overflow-tooltip="true" label="停车场名称"/>
          <el-table-column width="120" prop="parkTypeCode" :show-overflow-tooltip="true" label="停车场类型编码"/>
          <el-table-column width="120" prop="parkTypeName" :show-overflow-tooltip="true" label="停车场类型名称"/>
          <el-table-column width="120" prop="parkOptIntegratorCode" :show-overflow-tooltip="true" label="运营商编码"/>
          <el-table-column width="120" prop="companyId" :show-overflow-tooltip="true" label="归属企业id"/>
          <el-table-column width="120" prop="companyName" :show-overflow-tooltip="true" label="归属企业名称"/>
          <el-table-column width="120" prop="cityCode" :show-overflow-tooltip="true" label="归属地市id"/>
          <el-table-column width="120" prop="cityName" :show-overflow-tooltip="true" label="归属地市名称"/>
          <el-table-column width="120" prop="districtCode" :show-overflow-tooltip="true" label="归属区县id"/>
          <el-table-column width="120" prop="districtName" :show-overflow-tooltip="true" label="归属区县名称"/>
          <el-table-column width="120" prop="address" :show-overflow-tooltip="true" label="地址"/>
          <el-table-column width="120" prop="longitude" :show-overflow-tooltip="true" label="经度"/>
          <el-table-column width="120" prop="latitude" :show-overflow-tooltip="true" label="纬度"/>
          <el-table-column width="120" prop="parkSpaceNum" :show-overflow-tooltip="true" label="规划总车位数"/>
          <el-table-column width="120" prop="billingRuleDesc" :show-overflow-tooltip="true" label="计费规则"/>
          <el-table-column width="120" prop="contact" :show-overflow-tooltip="true" label="联系人"/>
          <el-table-column width="120" prop="contactPhoneNumber" :show-overflow-tooltip="true" label="联系人电话"/>
          <el-table-column width="120" prop="parkPictureFile" :show-overflow-tooltip="true" label="停车场图片"/>
          <el-table-column width="120" :show-overflow-tooltip="true" label="操作">
            <template slot-scope="scope">
              <el-button @click="editListDialogue(scope.row)" type="text" size="small">修改</el-button>
              <el-button @click="deleteListDialogue(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
      <!--分页条-->
      <el-pagination style="position: relative;left: 78%" layout="total, prev, pager, next, jumper"
                     :page-size="pageSize" @current-change="handleCurrentModify" :current-page="pageNum"
                     :total="pageTotal"/>
    </div>
    <!--新增表单弹框-->
    <el-dialog id="add" title="新增停车场信息" :visible.sync="addListDialogueandoff">
      <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
        <div style="font-size: 20px">基础信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="停车场名称:" label-width="150px">
              <el-input v-model="newParkingLot.parkName" placeholder="请输入停车场名称"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="停车场编号:" label-width="150px" placeholder="请输入停车场编号">
              <el-input v-model="newParkingLot.parkId"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="停车场类型名称:" label-width="150px">
              <el-select v-model="newParkingLot.parkTypeName" placeholder="请选择">
                <el-option v-for="(item, index) in parkingLotType" :label="item.name" :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="归属企业名称:" label-width="150px">
              <el-select v-model="newParkingLot.companyName" placeholder="请选择">
                <el-option v-for="(item, index) in enterprises" :label="item.name"
                           :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="规划总车位数:" label-width="150px">
              <el-input v-model="newParkingLot.parkSpaceNum" placeholder="请输入规划总车位数"/>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">位置信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="归属地市:" label-width="150px">
              <el-select v-model="newParkingLot.cityName" placeholder="请选择">
                <el-option v-for="(item, index) in cityList" :label="item.name"
                           :value="item.name"
                           :key="index">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="归属区县:" label-width="150px">
              <el-select v-model="newParkingLot.districtName" placeholder="请选择">
                <el-option v-for="(item, index) in districtList" :label="item.name"
                           :value="item.name"
                           :key="index">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="地址:" label-width="150px">
              <el-input v-model="newParkingLot.address" style="width: 300px" placeholder="请输入地址"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="经度:" label-width="150px">
              <el-input v-model="newParkingLot.longitude" placeholder="请输入经度"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="纬度:" label-width="150px">
              <el-input v-model="newParkingLot.latitude" placeholder="请输入纬度"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">计费规则信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="计费规则:" label-width="150px">
              <el-select v-model="newParkingLot.billingRuleDesc" placeholder="请选择">
                <el-option v-for="(item, index) in chargingRules" :label="item.ruleName" :value="item.ruleName"
                           :key="index"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">其他</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="联系人:" label-width="150px">
              <el-input v-model="newParkingLot.contact" placeholder="请输入联系人"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人电话:" label-width="150px">
              <el-input v-model="newParkingLot.contactPhoneNumber" placeholder="请输入联系人电话"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="停车场图片:" label-width="150px">
              <el-input v-model="newParkingLot.parkPictureFile"/>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button type="info" @click="choosePicture()" size="small">选择</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="info" @click="uploadPicture()" size="small">上传</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="info" @click="viewPicture()" size="small">预览</el-button>
          </el-col>
        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addListDialogueandoff = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitAdd()">保 存</el-button>
      </div>
    </el-dialog>
    <!--修改表单弹框-->
    <el-dialog id="edit" title="修改停车场信息" :visible.sync="editListDialogueandoff">
      <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
        <div style="font-size: 20px">基础信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="停车场名称:" label-width="150px">
              <el-input v-model="editParkingLot.parkName" placeholder="请输入停车场名称"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="停车场编号:" label-width="150px" placeholder="请输入停车场编号">
              <el-input v-model="editParkingLot.parkId" disabled/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="停车场类型名称:" label-width="150px">
              <el-select v-model="editParkingLot.parkTypeName" placeholder="请选择">
                <el-option v-for="(item, index) in parkingLotType" :label="item.name" :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="归属企业名称:" label-width="150px">
              <el-select v-model="editParkingLot.companyName" placeholder="请选择">
                <el-option v-for="(item, index) in enterprises" :label="item.name"
                           :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="规划总车位数:" label-width="150px">
              <el-input v-model="editParkingLot.parkSpaceNum" placeholder="请输入规划总车位数"/>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">位置信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="归属地市:" label-width="150px">
              <el-select v-model="editParkingLot.cityName" placeholder="请选择" @change="chooseCity()">
                <el-option v-for="(item, index) in cityList" :label="item.name"
                           :value="item.name"
                           :key="index"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="归属区县:" label-width="150px">
              <el-select v-model="editParkingLot.districtName" placeholder="请选择">
                <el-option v-for="(item, index) in districtList" :label="item.name"
                           :value="item.name"
                           :key="index">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="地址:" label-width="150px">
              <el-input v-model="editParkingLot.address" style="width: 300px" placeholder="请输入地址"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="经度:" label-width="150px">
              <el-input v-model="editParkingLot.longitude" placeholder="请输入经度"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="纬度:" label-width="150px">
              <el-input v-model="editParkingLot.latitude" placeholder="请输入纬度"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">计费规则信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="计费规则:" label-width="150px">
              <el-select v-model="editParkingLot.billingRuleDesc" placeholder="请选择">
                <el-option v-for="(item, index) in chargingRules" :label="item.ruleName" :value="item.ruleName"
                           :key="index"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">其他</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="联系人:" label-width="150px">
              <el-input v-model="editParkingLot.contact" placeholder="请输入联系人"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人电话:" label-width="150px">
              <el-input v-model="editParkingLot.contactPhoneNumber" placeholder="请输入联系人电话"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="停车场图片:" label-width="150px">
              <el-input v-model="editParkingLot.parkPictureFile"/>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button type="info" @click="choosePicture()" size="small">选择</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="info" @click="uploadPicture()" size="small">上传</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="info" @click="viewPicture()" size="small">预览</el-button>
          </el-col>
        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editListDialogueandoff = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit()">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      pageTotal: "",
      //前端暂时数据
      parkList: [],
      //新增表单弹框属性：false:不显露
      addListDialogueandoff: false,
      //修改表单弹框属性：false:不显露
      editListDialogueandoff: false,
      //修改停车场数据暂存
      editParkingLot: {},
      //批量删除暂存id
      idList: [],
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
    //批量删除
    deleteSelect() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        console.log(this.idList)
        const param = {
          parkId: this.idList
        };
        this.$ysParking.deletePark(param).then(res => {
          this.$message({
            type: "success", message: "删除成功!"
          });
          this.queryParkList();
        });
      }).catch(() => {
        this.$message({type: "info", message: "已取消删除"});
      });
      console.log(this.selectParkingLotList);
    },
    //单个删除
    deleteListDialogue(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        console.log("你要删除的id是" + row.parkId);
        this.idList = [];
        this.idList.push(row.parkId);
        const param = {
          parkId: this.idList
        };
        this.$ysParking.deletePark(param).then(res => {
          console.log("打印响应", res)
          this.$message({
            type: "success", message: "删除成功!"
          });
          this.queryParkList();
        });
      }).catch(() => {
        this.$message({type: "info", message: "已取消删除"});
      });
    },
    // 点击新增
    addInletAndOutlet() {
      this.newParkingLot = {};
      this.districtList = [],
          this.addListDialogueandoff = true;
    },
    //选择停车场图片
    choosePicture() {
      console.log("选择图片");
    },
    //上传图片
    uploadPicture() {
      console.log("上传图片");
    },
    //预览图片
    viewPicture() {
      console.log("预览图片");
    },
    //提交表单
    onSubmitAdd() {
      console.log(this.newParkingLot);
      //将新增数据展示到页面（仅做展示用）
      // this.parkList.push(this.newParkingLot);
      this.$ysParking.insertPark(this.newParkingLot).then(res => {
        console.log("打印响应", res);
      });
      this.queryParkList();
      this.addListDialogueandoff = false;
    },
    //修改弹框弹出
    editListDialogue(row) {
      console.log(row);
      this.districtList = [],
          this.editListDialogueandoff = true;
      this.editParkingLot = row;
    },
    //修改表单提交
    onSubmitEdit() {
      console.log(this.editParkingLot);
      this.$ysParking.updatePark(this.editParkingLot).then(res => {
        console.log("打印响应", res);
      });
      this.queryParkList();
      this.editListDialogueandoff = false;
    },
    handleSelectionChange(val) {
      this.selectParkingLotList = val;
      this.idList = [];
      val.forEach((item) => {
        this.idList.push(item.parkId);
      });
      console.log("批量删除ID", this.idList);
      console.log(this.selectParkingLotList);
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
        pageNum: this.pageNum
      };
      this.$ysParking.queryParkList(param).then(res => {
        console.log("打印出来res", res);
        this.pageTotal = res.data.totalRecord;
        this.parkList = res.data.dataList;
      });
    },
    //查询地市数据
    queryCityList() {
      const cityParam = {
        "columnName": ["city_code", "city_name"],
        "tableName": "t_d_city",
        "whereStr": ""
      };
      this.$homePage.queryDictData(cityParam).then(res => {
        this.cityList = res.data.dataList;
      });
    },
    //查询停车场类型
    queryTypeList() {
      var that = this;
      const paramTypes = {
        "columnName": ["park_type_code", "park_type_name"],
        "tableName": "t_d_park_type",
        "whereStr": ""
      }
      this.$homePage.queryDictData(paramTypes).then(res => {
        that.parkingLotType = res.data.dataList;
        console.log("that.parkingLotType", that.parkingLotType)
      });
    },
    //查询归属企业下拉菜单数据
    queryCompanyList() {
      var that = this;
      const companyParam = {
        "columnName": ["company_id", "company_name"],
        "tableName": "t_bim_company",
        "whereStr": ""
      };
      this.$homePage.queryDictData(companyParam).then(res => {
        that.enterprises = res.data.dataList;
      });
    },
    //计费规则下拉菜单数据查询
    queryBillList() {
      const billParam = {
        "columnName": ["billing_rule_def_id", "billing_rule_def_name"],
        "tableName": "t_bm_billing_rule_def",
        "whereStr": ""
      };
      this.$homePage.queryDictData(billParam).then(res => {
        this.chargingRules = res.data.dataList;
      });
    },
    //导出Excel
    exportExcel() {

    }
  },
  mounted() {
    // 查询列表方法
    this.queryParkList();
    this.queryBillList();
    this.queryCityList();
    this.queryCompanyList();
    this.queryTypeList();
  },
  watch: {
    newParkingLot: {
      handler(newVal) {
        this.parkingLotType.forEach((item) => {
          if (item.name == newVal.parkTypeName) {
            newVal.parkTypeCode = item.code;
          }
        });
        this.cityList.forEach((item) => {
          if (item.name == newVal.cityName) {
            newVal.cityCode = item.code;
            const params = {
              "columnName": ["district_code", "district_name"],
              "tableName": "t_d_district",
              "whereStr": "city_code = " + item.code
            };
            this.$homePage.queryDictData(params).then(res => {
              this.districtList = res.data.dataList;
            });
          }
        });
        this.enterprises.forEach((item) => {
          if (item.name == newVal.companyName) {
            newVal.companyId = item.code;
          }
        });
        this.districtList.forEach((item) => {
          if (item.name == newVal.districtName) {
            newVal.districtCode = item.code;
          }
        });
      },
      deep: true
    },
    editParkingLot: {
      handler(newVal) {
        this.parkingLotType.forEach((item) => {
          if (item.name == newVal.parkTypeName) {
            newVal.parkTypeCode = item.code;
          }
        });
        this.cityList.forEach((item) => {
          if (item.name == newVal.cityName) {
            newVal.cityCode = item.code;
            const params = {
              "columnName": ["district_code", "district_name"],
              "tableName": "t_d_district",
              "whereStr": "city_code = " + item.code
            };
            this.$homePage.queryDictData(params).then(res => {
              this.districtList = res.data.dataList;
            });
          }
        });
        this.enterprises.forEach((item) => {
          if (item.name == newVal.companyName) {
            newVal.companyId = item.code;
          }
        });
        this.districtList.forEach((item) => {
          if (item.name == newVal.districtName) {
            newVal.districtCode = item.code;
          }
        });
      },
      deep: true
    },
  }
};
</script>
<style scoped>
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 上半部分查询部分 */
.up {
  width: 100%;
  height: 15%;
  float: left;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 80%;
  margin-top: 3%;
  padding-left: 2%;
}

/* 下班部分列表部分 */
.down {
  width: 100%;
  height: 85%;
  float: left;
}

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #7de6f8 !important;
}

/deep/ .el-table .successSecond {
  background: #8ed3e7 !important;
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

#add {
  height: auto;
}
</style>
