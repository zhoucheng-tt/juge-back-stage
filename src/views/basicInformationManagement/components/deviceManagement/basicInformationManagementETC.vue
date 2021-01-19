<!--
    基础信息管理ETC
 * @Author: 王思远
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-30 13:57:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="all">
    <div class="backgroundLine"></div>
    <!--上半部分查询-->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="ETC名称:">
          <el-input
            v-model="upQueryList.etcName"
            placeholder="请输入ETC名称"
            size="small"
            style="width: 160px"
          ></el-input>
        </el-form-item>
        <el-form-item label="停车场：">
          <el-select
            v-model="upQueryList.queryParkId"
            placeholder="请选择停车场"
            size="small"
            style="width: 160px"
          >
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="(item, index) in parkingLotList"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="queryETCList"
            >查询
          </el-button>
          <el-button size="small" type="primary" @click="resetQuery"
            >重置
          </el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button size="small" type="primary" @click="addETC"
          >新增ETC
        </el-button>
        <el-button
          size="small"
          type="primary"
          @click="importContainerDia = true"
          >批量导入
        </el-button>
        <el-button size="small" style="margin-left: 15px" type="primary">
          <a
            :href="exportFile"
            class="download"
            download=""
            style="color: #ffffff;text-decoration:none"
            >导出</a
          >
        </el-button>

        <el-button size="small" type="danger" @click="deleteETC"
          >批量删除</el-button
        >
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        ref="selectETC"
        :cell-style="{
          fontfamily: 'PingFangSC-Regular',
          letterSpacing: '0.56px',
          fontSize: '14px',
          color: '#333333',
          'text-align': 'center'
        }"
        :data="ETCInformationManagement"
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
        stripe
        style="width: 98%;margin-left: 1%"
        @selection-change="handleSelectETC"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <!--        <el-table-column prop="etcNumber" label="ETC编号"></el-table-column>-->
        <el-table-column label="ETC名称" prop="etcName"></el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          label="所属停车场"
          prop="parkName"
          width=""
        >
        </el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          label="类型"
          prop="type"
          width=""
        >
        </el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          label="描述"
          prop="description"
        ></el-table-column>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="text"
              @click="showListDialogue(scope.row)"
              >查看
            </el-button>
            <el-button
              size="small"
              type="text"
              @click="editListDialogue(scope.row)"
              >修改
            </el-button>
            <el-button
              size="small"
              type="text"
              @click="deleteListDialogue(scope.row)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right;">
        <el-pagination
          :current-page="pageNum"
          :page-size="pageSize"
          :total="pageTotal"
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentModify"
        >
        </el-pagination>
      </div>
    </div>
    <!--      导入弹框-->
    <el-dialog :visible.sync="importContainerDia" title="导入数据" width="40%">
      <!-- style="text-align: center;" -->
      <el-upload
        ref="upload"
        :auto-upload="false"
        :file-list="fileList"
        :http-request="myUpload"
        :limit="1"
        :on-change="addFile"
        :on-exceed="handleExceed"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
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
          请下载模板文件后上传。
        </div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="importContainerDia = false">取 消</el-button>
        <el-button type="primary" @click="confimImportBatch">导 入</el-button>
      </span>
    </el-dialog>
    <!-- 新增ETC弹框 -->
    <el-dialog
      :visible.sync="dialogAdd"
      destroy-on-close
      title="新增ETC信息"
      width="50%"
    >
      <el-form
        ref="addETC"
        :inline="true"
        :model="addETCForm"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="归属停车场:" label-width="150px" prop="parkName">
          <el-select
            v-model="addETCForm.parkName"
            placeholder="请选择停车场"
            style="width:200px"
          >
            <el-option
              v-for="(item, index) in parkingLotList"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="ETC编号:" label-width="150px" prop="etcNumber">
          <el-input
            v-model="addETCForm.etcNumber"
            placeholder="请输入ETC编号"
          />
        </el-form-item>
        <el-form-item label="ETC名称:" label-width="150px" prop="etcName">
          <el-input v-model="addETCForm.etcName" placeholder="请输入ETC名称" />
        </el-form-item>
        <el-form-item label="类型:" label-width="150px" prop="type">
          <el-input v-model="addETCForm.type" placeholder="请输入类型" />
        </el-form-item>
        <el-form-item label="描述:" label-width="150px" prop="description">
          <el-input v-model="addETCForm.description" placeholder="请输入描述" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!--        <el-button @click="dialogAdd = false">取 消</el-button>-->
        <el-button type="primary" @click="addInfoInsert">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 信息详情点击弹出框 -->
    <el-dialog
      :visible.sync="showListdialogueandoff"
      title="ETC详情"
      width="50%"
    >
      <el-form
        :inline="true"
        :model="showListdialogueandoffList"
        label-width="100px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="ETC编号:" label-width="150px">
              <el-input
                v-model="showListdialogueandoffList.etcNumber"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="ETC名称:" label-width="150px">
              <el-input v-model="showListdialogueandoffList.etcName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所属停车场:" label-width="150px">
              <el-input
                v-model="showListdialogueandoffList.parkName"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="类型:" label-width="150px">
              <el-input v-model="showListdialogueandoffList.type"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="描述:" label-width="150px">
              <el-input
                v-model="showListdialogueandoffList.description"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!-- 信息修改点击弹出框 -->
    <el-dialog
      :visible.sync="editListDialogueandoff"
      title="修改ETC"
      width="50%"
    >
      <el-form
        :inline="true"
        :model="editListDialogueandoffList"
        label-width="100px"
      >
        <el-col :span="12">
          <el-form-item label="ETC编号:" label-width="150px">
            <el-input v-model="editListDialogueandoffList.etcNumber"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="ETC名称:" label-width="150px">
            <el-input v-model="editListDialogueandoffList.etcName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属停车场:" label-width="150px">
            <el-input v-model="editListDialogueandoffList.parkName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="类型:" label-width="150px">
            <el-input v-model="editListDialogueandoffList.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="描述:" label-width="150px">
            <el-input
              v-model="editListDialogueandoffList.description"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!--        <el-button @click="editListDialogueandoff = false">取 消</el-button>-->
        <el-button type="primary" @click="ETCInfoInsert">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { BASE_API } from "@/utils/config";
export default {
  data() {
    return {
      //模板下载
      importContainerDia: false,
      templateDl: BASE_API + "FileController/dlTemplate/基础信息管理ETC",
      //导出
      exportFile: BASE_API + "ETCFunc/download",
      fileList: [],
      // 顶部查询数据暂存处
      upQueryList: {
        etcName: "",
        // 查询数据暂存处
        queryParkId: ""
      },
      // 停车场下拉框数据暂存处
      parkingLotList: [],
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      ETCInformationManagement: [],
      // 控制订单详情弹出框展示和隐藏属性
      showListdialogueandoff: false,
      // 弹出框展示订单详情数据暂存
      showListdialogueandoffList: [],

      editListDialogueandoff: false,

      editListDialogueandoffList: [],
      // 新增弹框
      dialogAdd: false,
      // 新增数据暂存
      addETCForm: [],
      // 多选后数据暂存
      selectETC: [],
      // 批量删除暂存id
      idList: [],
      // 表单校验
      rules: {
        parkName: [
          { required: true, message: "停车场名称不能为空", trigger: "blur" }
        ],
        etcNumber: [
          { required: true, message: "ETC编号不能为空", trigger: "blur" }
        ],
        etcName: [
          { required: true, message: "ETC名称不能为空", trigger: "blur" }
        ],
        type: [{ required: true, message: "类型不能为空", trigger: "blur" }]
      }
    };
  },
  created() {
    this.queryETCList();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },

    // 查询停车场下拉表单
    queryParking() {
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = '321302'"
      };
      this.$ysParking.queryDictData(param).then(res => {
        console.log("下拉表单查询数据显示", res);
        this.parkingLotList = res.data.dataList;
        // console.log("下拉菜单", this.parkingLotList);
      });
    },
    // 查询列表信息
    queryETCList() {
      this.manageEntryAndExit = [];
      const param = {
        etcName: this.upQueryList.etcName,
        parkName: this.upQueryList.queryParkId,
        pageSize: this.pageSize,
        pageNum: this.pageNum
      };
      this.$deviceManagement.queryETCList(param).then(res => {
        this.ETCInformationManagement = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
        console.log("etc列表信息", this.ETCInformationManagement);
      });
    },
    // 点击新增
    addETC() {
      //提前清空表单中数据
      this.addETCForm = {};
      this.dialogAdd = true;
    },
    // 提交新增信息
    addInfoInsert() {
      this.$refs["addETC"].validate(valid => {
        if (valid) {
          console.log("保存后打印出来的数据", this.addETCForm);
          this.$deviceManagement.addETC(this.addETCForm).then(res => {
            // console.log("打印相应", res);
            this.$message({ type: "success", message: "添加成功!" });
            this.queryETCList();
          });
          this.dialogAdd = false;
        }
      });
    },
    // 拿到多选数据
    handleSelectETC(val) {
      this.selectETC = val;
      this.idList = [];
      val.forEach(item => {
        const param = {
          etcNumber: item.etcNumber
        };
        this.idList.push(param);
      });
      console.log("批量删除ID", this.idList);
      console.log(this.selectETC);
    },
    // 批量删除
    deleteETC() {
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
            console.log("你要批量删除的id是" + this.idList);
            this.$deviceManagement.delETC(this.idList).then(res => {
              console.log("批量删除成功", res);
              this.$message({ type: "success", message: "删除成功!" });
              this.queryETCList();
            });
          })
          .catch(() => {
            this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    // 单个删除
    deleteListDialogue(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log("你要删除的id是" + row.etcNumber);
          const param = [
            {
              etcNumber: row.etcNumber
            }
          ];
          this.$deviceManagement.delETC(param).then(res => {
            console.log("删除成功", res);
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.queryETCList();
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
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
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      // 查询列表方法
      this.queryETCList();
    },
    // 点击查看调用的方法
    showListDialogue(row) {
      this.showListdialogueandoff = true;
      this.showListdialogueandoffList = row;
    },

    // 点击修改调用的方法
    editListDialogue(row) {
      console.log(row);
      this.editListDialogueandoff = true;
      this.editListDialogueandoffList = row;
    },
    // 点击确定提交修改信息
    ETCInfoInsert() {
      console.log("确定后打印出来的数据", this.editListDialogueandoffList);
      this.$deviceManagement
        .updateETC(this.editListDialogueandoffList)
        .then(res => {
          console.log("打印更新数据", res);
          this.$message({ type: "success", message: "修改成功!" });
          this.queryETCList();
        });
      this.editListDialogueandoff = false;
    },
    //处理导入
    addFile(file, fileList) {
      console.log(file, fileList);
      var index = file.name.split(".").slice(-1);
      if (!(index == "xlsx" || index == "XLSX")) {
        this.fileList = [];
        this.$message.warning(`文件格式有误,请选择xls文件`);
      }
      console.log(index);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`对不起,一次仅限上传一个文件！`);
    },
    confimImportBatch() {
      this.$refs.upload.submit();
    },
    myUpload(content) {
      let _self = this;
      // 1.导入
      var FileController = "";
      FileController = BASE_API + "ETCFunc/upload";
      console.log(FileController);
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
          console.log(resText);
          if (resText.resultCode === "2000") {
            _self.fileList = [];
            _self.$message({
              message: "导入成功",
              type: "success"
            });
            _self.importContainerDia = false;
            _self.queryETCList();
          } else {
            _self.$message.error({
              message: "对不起！文件上传失败",
              type: "error"
            });
          }
          // loading.close();
        }
      }
    }
  },
  mounted() {
    this.queryETCList();
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
.backgroundLine {
  background-color: #eaf0f6;
  width: 100%;
  height: 15px;
}
</style>
