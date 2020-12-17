<!--
    地锁
 * @Author: 邵青阳
 * @Date: 2020-10-29 09:32:31
 * @LastEditTime: 2020-10-30 13:57:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\deviceManagement\floorLock.vue
-->
<template>
  <div class="all">
    <!--上半部分表单-->
    <div class="up">
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <!--          <el-col :span="5">
                      <el-form-item label="地市">
                        <el-select v-model="query.cityCode" placeholder="请选择" @change="queryDisList(query.cityCode)">
                          <el-option label="全部" value="0"></el-option>
                          <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.code" :key="index"/>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="5">
                      <el-form-item label="区县">
                        <el-select v-model="query.districtCode" placeholder="请选择" @change="queryParkList(query.districtCode)">
                          <el-option label="全部" value="0"></el-option>
                          <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.code" :key="index"/>
                        </el-select>
                      </el-form-item>
                    </el-col>-->

        <el-form-item label="停车场">
          <el-select
            size="small"
            style="width: 160px"
            v-model="query.parkId"
            placeholder="请选择"
          >
            <el-option label="全部" value="0"></el-option>
            <el-option
              v-for="(item, index) in parkingLotNameList"
              :label="item.name"
              :value="item.code"
              :key="index"
            />
          </el-select>
        </el-form-item>

        <!--          <el-form-item label="设备状态">-->
        <!--            <el-select v-model="eqStatusList.eqStatus" placeholder="请选择">-->
        <!--              <el-option-->
        <!--                v-for="(item, index) in eqStatusList"-->
        <!--                :label="item.eqStatus"-->
        <!--                :value="item.eqStatus"-->
        <!--                :key="index"-->
        <!--              />-->
        <!--            </el-select>-->
        <!--          </el-form-item>-->

        <el-button type="primary" size="small" @click="queryGroundLock()"
          >查 询</el-button
        >
        <el-button type="primary" size="small" @click="resetQuery"
          >重置</el-button
        >
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addNewLock()"
          >新增地锁</el-button
        >
        <el-button type="primary" size="small" @click="bulkImport()"
          >批量导入</el-button
        >
        <el-button type="primary" size="small" @click="exportList()"
          >导 出</el-button
        >
        <el-button type="danger" size="small" @click="batchDelete()"
          >批量删除</el-button
        >
      </el-row>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="floorLockList"
        ref="selectLockList"
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
        <el-table-column type="selection" />
        <el-table-column prop="parkId" label="停车场编号" />
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        />
        <el-table-column
          prop="groundLockId"
          :show-overflow-tooltip="true"
          label="地锁编号"
        />
        <el-table-column
          prop="groundLockName"
          :show-overflow-tooltip="true"
          label="地锁名称"
        />
        <el-table-column
          prop="macAddress"
          :show-overflow-tooltip="true"
          label="mac地址"
        />
        <el-table-column
          prop="gatewayId"
          :show-overflow-tooltip="true"
          label="网关ID"
        />
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="editLockDialog(scope.row)"
              type="text"
              size="small"
              >修改</el-button
            >
            <el-button @click="deleteLock(scope.row)" type="text" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right;">
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
    <!--新增表单弹框-->
    <el-dialog id="add" title="新增地锁" :visible.sync="addListDialog">
      <el-form
        :inline="true"
        class="demo-form-inline"
        label-position="right"
        label-width="100px"
        :model="newLock"
        :rules="addListRules"
      >
        <div style="font-size: 20px">归属停车场信息</div>
        <!--        <el-row style="padding-top: 20px">
                  <el-col :span="12">
                    <el-form-item label="归属地市:" label-width="150px">
                      <el-select v-model="newLock.cityCode" placeholder="请选择" @change="queryDisList(newLock.cityCode)">
                      <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.code" :key="index"/>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-form-item label="归属区县:" label-width="150px">
                    <el-select v-model="newLock.districtCode" placeholder="请选择" @change="queryParkList(newLock.districtCode)">
                    <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.code" :key="index"/>
                    </el-select>
                  </el-form-item>
                </el-row>-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="归属停车场:" label-width="150px" prop="parkId">
              <el-select v-model="newLock.parkId" placeholder="请选择">
                <el-option
                  v-for="(item, index) in parkingLotNameList"
                  :label="item.name"
                  :value="item.code"
                  :key="index"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">地锁信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item
              label="地锁编号:"
              label-width="150px"
              prop="groundLockId"
            >
              <el-input v-model="newLock.groundLockId" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="地锁名称:"
              label-width="150px"
              prop="groundLockName"
            >
              <el-input v-model="newLock.groundLockName" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="mac地址:"
              label-width="150px"
              prop="macAddress"
            >
              <el-input v-model="newLock.macAddress"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="网关Id:" label-width="150px" prop="gatewayId">
              <el-input v-model="newLock.gatewayId"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addListDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitAdd()">确定</el-button>
      </div>
    </el-dialog>
    <!--修改表单弹框-->
    <el-dialog id="edit" title="修改地锁" :visible.sync="editListDialog">
      <el-form
        :inline="true"
        class="demo-form-inline"
        label-position="right"
        label-width="100px"
      >
        <div style="font-size: 20px">归属停车场信息</div>
        <!--        <el-row style="padding-top: 20px">
                  <el-col :span="12">
                    <el-form-item label="归属地市:" label-width="150px">
                      <el-select v-model="editLock.cityCode" placeholder="请选择" @change="queryDisList(editLock.cityCode)">
                        <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.code" :key="index"/>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-form-item label="归属区县:" label-width="150px">
                    <el-select v-model="editLock.districtCode" placeholder="请选择" @change="queryParkList(editLock.districtCode)">
                      <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.code" :key="index"/>
                    </el-select>
                  </el-form-item>
                </el-row>-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="归属停车场:" label-width="150px">
              <el-select v-model="editLock.parkId" placeholder="请选择">
                <el-option
                  v-for="(item, index) in parkingLotNameList"
                  :label="item.name"
                  :value="item.code"
                  :key="index"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">地锁信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="地锁编号:" label-width="150px">
              <el-input v-model="editLock.groundLockId" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地锁名称:" label-width="150px">
              <el-input v-model="editLock.groundLockName" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="mac地址:" label-width="150px">
              <el-input v-model="editLock.macAddress"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="网关Id:" label-width="150px">
              <el-input v-model="editLock.gatewayId"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editListDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog id="import" title="批量导入" :visible.sync="importDialog">
      <el-form>
        <el-container>
          <el-header style="text-align: center">
            <el-button type="primary" size="medium" @click="imgbtn()"
              >导 入<i class="el-icon-upload el-icon--right"></i>
            </el-button>
          </el-header>
          <el-main style="text-align: center">
            <el-button type="primary" size="medium" @click="downModel()"
              >下载模版<i class="el-icon-download el-icon--right"></i
            ></el-button>
          </el-main>
        </el-container>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="importDialog = false">取 消</el-button>
        <el-button type="primary" @click="commitImport()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //新增约束规则
      addListRules: {
        parkId: [
          {
            required: true,
            message: "归属停车场不能为空",
            trigger: "change"
          }
        ],
        groundLockId: [
          {
            required: true,
            message: "地锁编号不能为空",
            trigger: "blur"
          }
        ],
        groundLockName: [
          {
            required: true,
            message: "地锁名称不能为空",
            trigger: "blur"
          }
        ],
        macAddress: [
          {
            required: true,
            message: "mac地址不能为空",
            trigger: "blur"
          }
        ],
        gatewayId: [
          {
            required: true,
            message: "网关Id不能为空",
            trigger: "blur"
          }
        ]
      },
      //停车场名称列表
      parkingLotNameList: [],
      //设备状态
      eqStatusList: [],
      //地锁列表
      floorLockList: [],
      //新增表单弹框
      addListDialog: false,
      //新增地锁数据暂存
      newLock: {},
      //修改表单弹框
      editListDialog: false,
      //修改地锁数据暂存
      editLock: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectLockList: [],
      //分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      //条件查询
      query: {
        cityCode: "0",
        districtCode: "0",
        parkId: "0"
      },
      //修改前停车场Id暂存
      oldParkId: "",
      //修改前地磁车Id暂存
      oldGroundLockCode: " ",
      /*      //归属地市下拉菜单
            cityList: [],
            //归属区县下拉菜单
            districtList: [],*/
      // 导入弹框
      importDialog: false
    };
  },
  methods: {
    //重置按钮
    resetQuery() {
      this.query = {};
    },
    //导出
    exportList() {
      var date = new Date();
      var param = {
        column_zh: [
          "停车场编号",
          "停车场名称",
          "地锁编号",
          "地锁名称",
          "mac地址",
          "网关id"
        ],
        column_en: [
          "parkId",
          "parkName",
          "groundLockId",
          "groundLockName",
          "macAddress",
          "gatewayId"
        ],
        fileName: "地锁" + date.toLocaleString(),
        cityCode: this.city,
        districtCode: this.districtCode,
        parkId: this.parking,
        pageNum: "",
        pageSize: ""
      };
      this.$deviceManagement.exportGroundLock(param).then(res => {
        const aLink = document.createElement("a");
        let blob = new Blob([res], { type: "application/vnd.ms-excel" });
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", param.fileName + ".xlsx"); // 设置下载文件名称
        aLink.click();
        // document.body.appendChild(aLink)
        // this.$refs.loadElement.appendChild(aLink);
      });
    },
    //斑马纹样式
    // eslint-disable-next-line no-unused-vars
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "successRow11";
      } else if (rowIndex % 2 === 0) {
        return "successSecond";
      }
      return "";
    },
    //新增地锁
    addNewLock() {
      console.log("新增弹框弹出");
      this.newLock = {};
      /*      this.districtList = [];
            this.parkingLotNameList = [];*/
      this.addListDialog = true;
    },
    //批量导入
    bulkImport() {
      this.importDialog = true;
      console.log("批量导入");
    },
    //批量删除
    batchDelete() {
      if (this.idList === [] || this.idList.length === 0) {
        this.$confirm("请选中!", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
      } else {
        console.log("批量删除", this.idList);
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$deviceManagement.delGroundLock(this.idList);
            this.$message({ type: "success", message: "删除成功!" });
            this.queryGroundLock();
          })
          .catch(() => {
            this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    //修改
    editLockDialog(row) {
      this.editLock = row;
      this.editListDialog = true;
      this.oldParkId = row.parkId;
      this.oldGroundLockCode = row.groundLockId;
      //初始化下拉菜单
      /*      this.queryDisList(row.cityCode);
            this.queryParkList(row.districtCode);*/
      console.log("修改弹窗弹出");
    },
    //删除
    deleteLock(row) {
      console.log("删除的地锁Id", row.groundLockId);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.idList = [];
          const params = {
            groundLockId: row.groundLockId,
            parkId: row.parkId
          };
          this.idList.push(params);
          this.$deviceManagement.delGroundLock(this.idList);
          this.$message({ type: "success", message: "删除成功!" });
          this.queryGroundLock();
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //新增表单提交
    onSubmitAdd() {
      console.log("新增数据", this.newLock);
      const param = {
        parkId: this.newLock.parkId,
        groundLockId: this.newLock.groundLockId,
        groundLockName: this.newLock.groundLockName,
        macAddress: this.newLock.macAddress,
        gatewayId: this.newLock.gatewayId
      };
      this.$deviceManagement.addGroundLock(param).then(res => {
        console.log(res);
      });
      this.queryGroundLock();
      this.addListDialog = false;
    },
    //修改表单提交
    onSubmitEdit() {
      console.log("修改数据", this.editLock);
      const param = {
        parkId: this.editLock.parkId,
        groundLockId: this.editLock.groundLockId,
        //修改前ID
        parkCode: this.oldParkId,
        groundLockCode: this.oldGroundLockCode,
        groundLockName: this.editLock.groundLockName,
        macAddress: this.editLock.macAddress,
        gatewayId: this.editLock.gatewayId
      };
      this.$deviceManagement.updateGroundLock(param).then(res => {
        console.log("打印响应", res);
        this.queryGroundLock();
      });
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectLockList = val;
      this.idList = [];
      val.forEach(item => {
        const param = {
          groundLockId: item.groundLockId,
          parkId: item.parkId
        };
        this.idList.push(param);
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryGroundLock();
    },
    //列表查询
    queryGroundLock() {
      if (
        /* this.query.cityCode === "0" ||
           this.query.districtCode === "0" ||*/
        this.query.parkId === "0"
      ) {
        const param = {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        };
        this.$deviceManagement.queryGroundLock(param).then(res => {
          this.floorLockList = res.data.dataList;
          this.pageTotal = res.data.totalRecord;
        });
      } else {
        const param = {
          /*          cityCode: this.query.cityCode,
                    districtCode: this.query.districtCode,*/
          parkId: this.query.parkId,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        };
        this.$deviceManagement.queryGroundLock(param).then(res => {
          this.floorLockList = res.data.dataList;
          this.pageTotal = res.data.totalRecord;
        });
      }
    },
    /*    //查询地市数据
        queryCityList() {
          const cityParam = {
            columnName: ["city_code", "city_name"],
            tableName: "t_d_city",
            whereStr: ""
          };
          this.$deviceManagement.queryDictData(cityParam).then(res => {
            this.cityList = res.data.dataList;
          });
        },
        //查询区县数据
        queryDisList(code) {
          this.parkingLotNameList = [];
          const params = {
            columnName: ["district_code", "district_name"],
            tableName: "t_d_district",
            whereStr: "city_code = " + code
          };
          this.$deviceManagement.queryDictData(params).then(res => {
            this.districtList = res.data.dataList;
          });
        },*/
    //查询停车场列表数据
    queryParkList(code) {
      const params = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = '321302'"
      };
      this.$deviceManagement.queryDictData(params).then(res => {
        this.parkingLotNameList = res.data.dataList;
      });
    },

    //下载模版
    downModel() {
      const param = "地锁.xls";
      let reqInfo = {
        template: param
      };
      this.$homePage.downloadResource(reqInfo).then(res => {
        const aLink = document.createElement("a");
        let blob = new Blob([res], { type: "application/vnd.ms-excel" });
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", "地锁" + ".xls"); // 设置下载文件名称
        aLink.click();
        document.body.appendChild(aLink);
        this.$refs.loadElement.appendChild(aLink);
      });
    }
  },
  mounted() {
    //初始化列表
    this.queryGroundLock();
    //初始化下拉菜单
    this.queryParkList();
  }
  /*  watch: {
      //监听弹框，弹框关闭时清空区县和停车场下拉菜单
      addListDialog: {
        handler(newVal) {
          if (!newVal) {
            this.districtList = [];
            this.parkingLotNameList = [];
          }
        }
      },
      editListDialog: {
        handler(newVal) {
          if (!newVal) {
            this.districtList = [];
            this.parkingLotNameList = [];
          }
        }
      },
      //监听高级下拉菜单变动时，低级下拉菜单的值改变为全部
      query: {
        handler(newVal) {
          if (newVal.cityCode === "0") {
            this.query.districtCode = "0";
          }
          if (newVal.districtCode === "0") {
            this.query.parkId = "0";
          }
        },
        deep: true
      }
    }*/
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

/* 斑马纹样式 */

/* 表格表头样式 */

/* 设置弹出框样式 */

/* 弹出框内表单样式控制 */

#add {
  height: auto;
}
</style>
