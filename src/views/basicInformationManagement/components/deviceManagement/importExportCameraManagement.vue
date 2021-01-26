<!--
   进出口摄像头管理
 * @Author: 王思远
 * @Date: 2020-10-22 09:26:58
 * @LastEditTime: 2020-10-30 13:57:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\carWashingMachineManagement.vue
-->
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <!--上半部分表单-->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="停车场：">
          <el-select
            size="small"
            style="width: 160px"
            v-model="upQueryList.queryParkId"
            placeholder="请选择停车场"
          >
            <el-option
              v-for="(item, index) in parkingLotList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <!--            <el-form-item label="设备状态">-->
        <!--              <el-select v-model="eqStatusList.eqStatus" placeholder="请选择">-->
        <!--                <el-option-->
        <!--                  v-for="(item, index) in eqStatusList"-->
        <!--                  :label="item.eqStatus"-->
        <!--                  :value="item.eqStatus"-->
        <!--                  :key="index"-->
        <!--                ></el-option>-->
        <!--              </el-select>-->
        <!--            </el-form-item>-->
        <el-form-item>
          <el-button type="primary" size="small" @click="queryPkLot()"
            >查 询</el-button
          >
          <el-button type="primary" size="small" @click="resetQuery"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addNewCamera()"
          >新增摄像头</el-button
        >
        <el-button type="primary" size="small" @click="exportExcel()"
          >导出</el-button
        >
        <el-button type="primary" size="small" @click="bulkImport()"
          >批量导入</el-button
        >

        <el-button type="danger" size="small" @click="batchDelete()"
          >批量删除
        </el-button>
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="cameraList"
        ref="selectCameraList"
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
        <!--        <el-table-column fixed prop="parkId" label="停车场编号" />-->
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        />
        <el-table-column
          prop="importExport"
          :show-overflow-tooltip="true"
          label="归属出入口"
        />
        <!--        <el-table-column-->
        <!--          prop="passagewayCameraId"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="进出口摄像头编号"-->
        <!--        />-->
        <el-table-column
          prop="passagewayCameraName"
          :show-overflow-tooltip="true"
          label="进出口摄像头名称"
        />
        <el-table-column
          prop="ipAddress"
          :show-overflow-tooltip="true"
          label="IP地址"
        />
        <el-table-column
          prop="portNumber"
          :show-overflow-tooltip="true"
          label="端口"
        />
        <el-table-column
          prop="workstationId"
          :show-overflow-tooltip="true"
          label="所属工作站"
        />
        <el-table-column
          prop="userName"
          :show-overflow-tooltip="true"
          label="用户名"
        />
        <el-table-column
          prop="manufacturer"
          :show-overflow-tooltip="true"
          label="制造商"
        />
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="editCameraDialog(scope.row)"
              type="text"
              size="small"
              >修改
            </el-button>
            <el-button @click="deleteCamera(scope.row)" type="text" size="small"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right;">
        <el-pagination
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal"
          :page-size="pageSize"
        >
        </el-pagination>
      </div>
      <!--新增表单弹框-->
      <el-dialog
        id="add"
        width="50%"
        title="新增出入口摄像头"
        :visible.sync="addListDialog"
      >
        <el-form
          :inline="true"
          label-position="right"
          label-width="100px"
          :model="newCamera"
          :rules="addListRules"
          ref="newCameraR"
        >
          <div style="font-size: 20px">归属停车场信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item
                label="归属停车场:"
                label-width="150px"
                prop="parkId"
              >
                <el-select
                  style="width:200px"
                  v-model="newCamera.parkId"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(item, index) in parkingLotList"
                    :label="item.name"
                    :value="item.code"
                    :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="归属出入口:"
                label-width="150px"
                prop="importExport"
              >
                <el-select
                  style="width:200px"
                  v-model="newCamera.importExport"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(item, index) in importExportNameList"
                    :label="item.importExportName"
                    :value="item.importExportName"
                    :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="font-size: 20px">摄像头信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item
                label="进出口摄像头编号:"
                label-width="150px"
                prop="passagewayCameraId"
              >
                <el-input v-model="newCamera.passagewayCameraId" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="进出口摄像头名称:"
                label-width="150px"
                prop="passagewayCameraName"
              >
                <el-input v-model="newCamera.passagewayCameraName" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="IP地址:"
                label-width="150px"
                prop="ipAddress"
              >
                <el-input v-model="newCamera.ipAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="端口:" label-width="150px" prop="portNumber">
                <el-input v-model="newCamera.portNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名:" label-width="150px" prop="userName">
                <el-input v-model="newCamera.userName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="所属工作站:"
                label-width="150px"
                prop="workstationId"
              >
                <el-input v-model="newCamera.workstationId"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="制造商:"
                label-width="150px"
                prop="manufacturer"
              >
                <el-input v-model="newCamera.manufacturer"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--          <el-button @click="addListDialog = false">取 消</el-button>-->
          <el-button type="primary" @click="onSubmitAdd()">确定</el-button>
        </div>
      </el-dialog>
      <!--修改表单弹框-->
      <el-dialog
        id="edit"
        title="修改出入口摄像头"
        width="50%"
        :visible.sync="editListDialog"
      >
        <el-form :inline="true" label-position="right" label-width="100px">
          <div style="font-size: 20px">归属停车场信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select
                  style="width:200px"
                  v-model="editCamera.parkId"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(item, index) in parkingLotList"
                    :label="item.name"
                    :value="item.code"
                    :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="归属出入口:" label-width="150px">
                <el-select
                  style="width:200px"
                  v-model="editCamera.importExport"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(item, index) in importExportNameList"
                    :label="item.importExportName"
                    :value="item.importExportName"
                    :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="font-size: 20px">摄像头信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="进出口摄像头编号:" label-width="150px">
                <el-input v-model="editCamera.passagewayCameraId" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="进出口摄像头名称:" label-width="150px">
                <el-input v-model="editCamera.passagewayCameraName" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="IP地址:" label-width="150px">
                <el-input v-model="editCamera.ipAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="端口:" label-width="150px">
                <el-input v-model="editCamera.portNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名:" label-width="150px">
                <el-input v-model="editCamera.userName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="所属工作站:" label-width="150px">
                <el-input v-model="editCamera.workstationId"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="制造商:" label-width="150px">
                <el-input v-model="editCamera.manufacturer"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--          <el-button @click="addListDialog = false">取 消</el-button>-->
          <el-button type="primary" @click="onSubmitEdit()">确定</el-button>
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
          <!--          <el-button @click="importDialog = false">取 消</el-button>-->
          <el-button type="primary" @click="commitImport()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //新增表单约束
      addListRules: {
        parkId: [
          {
            required: true,
            message: "归属停车场不能为空",
            trigger: "change"
          }
        ],
        passagewayCameraId: [
          {
            required: true,
            message: "进出口摄像头编号不能为空",
            trigger: "blur"
          }
        ],
        importExport: [
          {
            required: true,
            message: "归属出入口不能为空",
            trigger: "blur"
          }
        ],
        passagewayCameraName: [
          {
            required: true,
            message: "进出口摄像头名称不能为空",
            trigger: "blur"
          }
        ],
        ipAddress: [
          {
            required: true,
            message: "IP地址不能为空",
            trigger: "blur"
          }
        ],
        portNumber: [
          {
            required: true,
            message: "端口不能为空",
            trigger: "blur"
          }
        ],
        userName: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        workstationId: [
          {
            required: true,
            message: "所属工作站不能为空",
            trigger: "blur"
          }
        ],
        manufacturer: [
          {
            required: true,
            message: "制造商不能为空",
            trigger: "blur"
          }
        ]
      },
      //查询数据
      upQueryList: [],
      // 查询数据暂存处
      queryParkId: "",
      //停车场名称列表
      parkingLotList: [],
      //出入口名称列表
      importExportNameList: [
        {
          importExportName: "1号出口",
          id: "1"
        },
        {
          importExportName: "2号出口",
          id: "2"
        }
      ],
      //设备状态
      eqStatusList: [
        {
          eqStatus: "全部",
          id: "1"
        },
        {
          eqStatus: "完好",
          id: "2"
        },
        {
          eqStatus: "损坏",
          id: "3"
        }
      ],
      //地磁车列表
      cameraList: [],
      //新增表单弹框
      addListDialog: false,
      //新增摄像头数据暂存
      newCamera: {},
      //修改表单弹框
      editListDialog: false,
      //修改摄像头数据暂存
      editCamera: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectCameraList: [],
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 2,
      // 导入弹框
      importDialog: false
    };
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    //查询
    queryPkLot() {
      console.log("查询的停车场名称");
    },
    //导出
    exportExcel() {
      var date = new Date();
      var param = {
        column_zh: [
          "停车场编号",
          "停车场名称",
          "归属出入口",
          "进出口摄像头编号",
          "进出口摄像头名称",
          "IP地址",
          "端口",
          "所属工作站",
          "用户名",
          "制造商"
        ],
        column_en: [
          "parkId",
          "parkName",
          "passagewayName",
          "passagewayCameraId",
          "passagewayCameraName",
          "ipAddress",
          "portNumber",
          "workstationName",
          "userName",
          "manufacturer"
        ],
        fileName: "进出口摄像头管理" + date.toLocaleString(),
        cityCode: this.city,
        districtCode: this.districtCode,
        parkId: this.parking,
        pageNum: "",
        pageSize: ""
      };
      this.$deviceManagement.exportPassagewayCamera(param).then(res => {
        const aLink = document.createElement("a");
        let blob = new Blob([res], { type: "application/vnd.ms-excel" });
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", param.fileName + ".xlsx"); // 设置下载文件名称
        aLink.click();
        // document.body.appendChild(aLink)
        // this.$refs.loadElement.appendChild(aLink);
      });
    },
    // 查询停车场下拉表单
    queryParking() {
      var that = this;
      this.parkingLotList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: [
          {
            colName: "district_code",
            value: "321302"
          }
        ]
      };
      this.$homePage.queryDict(param).then(response => {
        that.parkingLotList = response.resultEntity;
      });
    },
    //摄像头列表
    queryPassagewayCamera() {
      this.cameraList = [];
      const param = {
        pageSize: this.pageSize,
        pageNum: this.pageNum
      };
      this.$deviceManagement.queryPassagewayCamera(param).then(res => {
        console.log("摄像头列表接口数据", res);
        this.cameraList = res.data.dataList;
        console.log("摄像头列表数据", res);
      });
    },
    //新增摄像头
    addNewCamera() {
      console.log("新增地磁车弹框弹出");
      this.newCamera = {};
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
            this.$message({ type: "success", message: "删除成功!" });
          })
          .catch(() => {
            this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    // 分页
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryVideoDetecter();
    },
    //修改
    editCameraDialog(row) {
      this.editCamera = row;
      this.editListDialog = true;
      console.log("修改弹窗弹出");
    },
    //删除
    deleteCamera(row) {
      console.log("删除的地磁车Id", row.cameraNum);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({ type: "success", message: "删除成功!" });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //新增表单提交
    onSubmitAdd() {
      console.log("新增数据", this.newCamera);
      this.CameraList.push(this.newCamera);
      this.addListDialog = false;
    },
    //修改表单提交
    onSubmitEdit() {
      console.log("修改数据", this.editCamera);
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectCameraList = val;
      this.idList = [];
      //获取批量删除id
      val.forEach(item => {
        this.idList.push(item.cameraNum);
      });
      console.log(this.selectCameraList);
    },
    //下载模版
    downModel() {
      const param = "进出口摄像头管理.xls";
      let reqInfo = {
        template: param
      };
      this.$homePage.downloadResource(reqInfo).then(res => {
        const aLink = document.createElement("a");
        let blob = new Blob([res], { type: "application/vnd.ms-excel" });
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", "进出口摄像头管理" + ".xls"); // 设置下载文件名称
        aLink.click();
        document.body.appendChild(aLink);
        this.$refs.loadElement.appendChild(aLink);
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
  },
  mounted() {
    this.queryPassagewayCamera();
    this.queryParking();
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
