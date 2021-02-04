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
            v-model="upQueryList.parkId"
            placeholder="请选择停车场"
          >
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="(item, index) in parkingLotList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="queryFormList()"
            >查 询
          </el-button>
          <el-button type="primary" size="small" @click="resetQuery"
            >重置
          </el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addNewCamera()"
          >新增摄像头
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
        <el-button type="primary" size="small" @click="bulkImport()"
          >批量导入
        </el-button>
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
          prop="passagewayName"
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
                prop="passagewayId"
              >
                <el-select
                  style="width:200px"
                  v-model="newCamera.passagewayId"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(item, index) in importExportNameList"
                    :label="item.name"
                    :value="item.code"
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
        @close="queryPassagewayCamera"
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
                  v-model="editCamera.passagewayId"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(item, index) in importExportNameList"
                    :label="item.name"
                    :value="item.code"
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
          <el-button type="primary" @click="onSubmitEdit()">保 存</el-button>
        </div>
      </el-dialog>
      <el-dialog id="import" title="批量导入" :visible.sync="importDialog">
        <el-upload
          ref="upload"
          :auto-upload="false"
          :file-list="fileList"
          :http-request="myUpload"
          :limit="1"
          :on-change="addFile"
          :on-exceed="handleExceed"
          :show-file-list="true"
          accept=".xls, .xlsx"
          action=""
          class="upload-demo"
          style="text-align: center;"
        >
          <el-button slot="trigger" size="small" type="primary"
            >选择文件
          </el-button>
          <el-button size="small" style="margin-left: 15px" type="primary">
            <a
              :href="templateDl"
              class="download"
              download=""
              style="color: #ffffff;text-decoration:none"
              >模板下载</a
            >
          </el-button>
          <div
            slot="tip"
            class="el-upload__tip"
            style="font-size:10px;color:#ff0000;margin-top:30px;"
          >
            请先下载模板！
          </div>
        </el-upload>

        <div slot="footer" class="dialog-footer">
          <el-button @click="importDialog = false">取 消</el-button>
          <el-button type="primary" @click="confimImportBatch()"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { BASE_API } from "@/utils/config";

export default {
  data() {
    return {
      fileList: [],
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
        passagewayId: [
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
      upQueryList: {
        parkId: ""
      },
      //停车场名称列表
      parkingLotList: [],
      //出入口名称列表
      importExportNameList: [],

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
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 2,
      // 导入弹框
      importDialog: false,
      templateDl: ""
    };
  },
  methods: {
    queryFormList() {
      this.pageNum = 1;
      this.queryPkLot();
    },
    //处理导入
    addFile(file, fileList) {
      if (!(file.name.endsWith("xls") || file.name.endsWith("xlsx"))) {
        this.fileList = [];
        this.$message.warning(`文件格式有误,请选择正确的Excel文件`);
      }
    },
    handleExceed() {
      this.$message.warning(`对不起,一次仅限上传一个文件！`);
    },
    myUpload(content) {
      let _self = this;
      // 1.导入
      var FileController = "";
      FileController = BASE_API + "PassagewayCameraController/upload";
      //创建空对象，通过append方法添加数据
      var form = new FormData();
      form.append("file", content.file);
      var xhr = new XMLHttpRequest();
      //状态改变回调方法
      xhr.onreadystatechange = onloadFun;
      //使用open()方法启动一个请求以备发送,请求类型，请求的URL,第三个参数是否为异步请求
      xhr.open("POST", FileController, true);
      xhr.send(form);

      function onloadFun() {
        // 0 － （未初始化）还没有调用send()方法
        // 1 － （载入）已调用send()方法，正在发送请求
        // 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
        // 3 － （交互）正在解析响应内容
        // 4 － （完成）响应内容解析完成，可以在客户端调用了
        if (xhr.readyState == 4 && xhr.status == 200) {
          //  请求结束后，执行将响应主体返回的文本赋给资源基本信息
          var resText = JSON.parse(xhr.responseText);
          if (resText.resultCode === "2000") {
            _self.fileList = [];
            _self.$message({
              message: "导入成功",
              type: "success"
            });
            _self.importDialog = false;
            _self.queryPassagewayCamera();
          } else {
            _self.$message.error({
              message: "对不起！文件上传失败",
              type: "error"
            });
          }
          // loading.close();
        }
      }
    },
    confimImportBatch() {
      this.$refs.upload.submit();
      this.importDialog = false;
    },
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {
        parkId: ""
      };
    },
    //查询
    queryPkLot() {
      this.pageNum = 1;
      this.queryPassagewayCamera();
    },
    // 查询停车场下拉表单
    queryParking() {
      var that = this;
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
      const param = {
        pageSize: this.pageSize,
        pageNumber: this.pageNum,
        parkId: this.upQueryList.parkId
      };
      this.$deviceManagement.queryPassagewayCamera(param).then(res => {
        this.cameraList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      });
    },

    //批量导入
    bulkImport() {
      this.importDialog = true;
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
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$deviceManagement
              .delPassagewayCamera(this.idList)
              .then(res => {
                this.$message({ type: "success", message: "删除成功!" });
                this.queryPassagewayCamera();
              });
          })
          .catch(() => {
            this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    // 分页
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryPassagewayCamera();
    },

    //删除
    deleteCamera(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.idList = [];
          this.idList.push(row.passagewayCameraId);
          this.$deviceManagement.delPassagewayCamera(this.idList).then(res => {
            this.$message({ type: "success", message: "删除成功!" });
            this.queryPassagewayCamera();
          });
        })
        .catch(err => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //新增摄像头
    addNewCamera() {
      this.newCamera = {};
      this.addListDialog = true;
    },
    //新增表单提交
    onSubmitAdd() {
      this.$refs["newCameraR"].validate(valid => {
        if (valid) {
          const param = {
            passagewayCameraId: this.newCamera.passagewayCameraId,
            passagewayCameraName: this.newCamera.passagewayCameraName,
            ipAddress: this.newCamera.ipAddress,
            portNumber: this.newCamera.portNumber,
            userName: this.newCamera.userName,
            manufacturer: this.newCamera.manufacturer,
            parkId: this.newCamera.parkId,
            passagewayId: this.newCamera.passagewayId
          };
          this.$deviceManagement
            .addPassagewayCamera(param)
            .then(res => {
              this.$message({ type: "success", type: "新增成功" });
              this.queryPassagewayCamera();
              this.addListDialog = false;
            })
            .catch(err => {});
        }
      });
    },
    //修改
    editCameraDialog(row) {
      this.editCamera = row;
      this.editListDialog = true;
    },
    //修改表单提交
    onSubmitEdit() {
      this.editListDialog = false;
      const param = {
        passagewayCameraId: this.editCamera.passagewayCameraId,
        passagewayCameraName: this.editCamera.passagewayCameraName,
        ipAddress: this.editCamera.ipAddress,
        portNumber: this.editCamera.portNumber,
        userName: this.editCamera.userName,
        manufacturer: this.editCamera.manufacturer,
        parkId: this.editCamera.parkId,
        passagewayId: this.editCamera.passagewayId
      };
      this.$deviceManagement.updatePassagewayCamera(param).then(res => {
        if (res.resultCode == "2000") {
          this.$message({ type: "success", message: "修改成功" });
          this.queryPassagewayCamera();
        } else {
          this.$message({ type: "fail", message: "修改失败" });
          this.queryPassagewayCamera();
        }
      });
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.idList = [];
      //获取批量删除id
      val.forEach(item => {
        this.idList.push(item.passagewayCameraId);
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
    },
    queryInAndOut(parkId) {
      const param = {
        columnName: ["passageway_id", "passageway_name"],
        tableName: "t_bim_passageway",
        whereStr: [
          {
            colName: "park_id",
            value: parkId
          }
        ]
      };
      this.$homePage.queryDict(param).then(res => {
        this.importExportNameList = res.resultEntity;
      });
    }
  },
  computed: {
    exportFile: function() {
      return BASE_API + "PassagewayCameraController/download";
    }
  },
  mounted() {
    const param = {
      template: "jinchukou"
    };
    this.templateDl =
      BASE_API +
      "CommonController/downloadResource?jsonStr=" +
      encodeURIComponent(JSON.stringify(param));
    this.queryPassagewayCamera();
    this.queryParking();
  },
  watch: {
    newCamera: {
      handler(newVal) {
        this.queryInAndOut(newVal.parkId);
      },
      deep: true
    },
    editCamera: {
      handler(newVal) {
        this.queryInAndOut(newVal.parkId);
      },
      deep: true
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
