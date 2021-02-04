<!--
    洗车机管理
 * @Author: 邵青阳
 * @Date: 2020-11-02 17:21:33
 * @LastEditTime: 2020-11-02 17:22:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\deviceManagement\carWashingMachineManagement.VUE
-->
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <!--上半部分表单-->
    <div class="up">
      <el-form
        :inline="true"
        :model="carWashingMachineNameList"
        class="demo-form-inline"
      >
        <el-form-item label="洗车机名称">
          <el-select
            size="small"
            style="width: 160px"
            v-model="carWashingMachineNameList.carWashingMachineName"
            placeholder="请选择"
          >
            <el-option
              v-for="(item, index) in carWashingMachineNameList"
              :label="item.carWashingMachineName"
              :value="item.carWashingMachineName"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>

        <!--            <el-form-item label="洗车机状态状态">-->
        <!--              <el-select-->
        <!--                v-model="washerStatusList.washerStatus"-->
        <!--                placeholder="请选择"-->
        <!--              >-->
        <!--                <el-option-->
        <!--                  v-for="(item, index) in washerStatusList"-->
        <!--                  :label="item.washerStatus"-->
        <!--                  :value="item.washerStatus"-->
        <!--                  :key="index"-->
        <!--                ></el-option>-->
        <!--              </el-select>-->
        <!--            </el-form-item>-->
        <el-form-item>
          <el-button type="primary" size="small" @click="queryWasher()"
            >查 询</el-button
          >
          <el-button size="small" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addWasher()"
          >新增洗车机</el-button
        >
        <el-button size="small" type="primary" @click="importBatchDia = true"
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
        <el-button type="danger" size="small" @click="batchDelete()"
          >批量删除</el-button
        >
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="washerList"
        ref="selectList"
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
        <!--        <el-table-column-->
        <!--          prop="washerId"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="洗车机编号"-->
        <!--        />-->
        <el-table-column
          prop="washerName"
          :show-overflow-tooltip="true"
          label="洗车机名称"
        />
        <el-table-column
          prop="washerDesc"
          :show-overflow-tooltip="true"
          label="洗车机描述"
        />
        <el-table-column
          prop="washerStatus"
          :show-overflow-tooltip="true"
          label="洗车机状态"
        />
        <el-table-column
          prop="addDate"
          :show-overflow-tooltip="true"
          label="添加时间"
        />
        <el-table-column
          prop="addUser"
          :show-overflow-tooltip="true"
          label="添加人"
        />
        <el-table-column
          prop="updateDate"
          :show-overflow-tooltip="true"
          label="修改时间"
        />
        <el-table-column
          prop="updateUser"
          :show-overflow-tooltip="true"
          label="修改人"
        />
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="editDialog(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button @click="deleteWasher(scope.row)" type="text" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right;">
        <el-pagination
          layout="total, prev, pager, next, jumper"
          :page-size="pageSize"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal"
        >
        </el-pagination>
      </div>
    </div>

    <!--新增表单弹框-->
    <el-dialog
      id="add"
      title="新增洗车机"
      width="50%"
      :visible.sync="addListDialog"
      destroy-on-close
    >
      <el-form
        :inline="true"
        :rules="rules"
        ref="addWasher"
        :model="newWasher"
        label-position="right"
        label-width="100px"
      >
        <div style="font-size: 20px">基本信息</div>
        <el-row style="padding-top: 20px">
          <el-form-item label="洗车机编号:" label-width="150px">
            <el-input v-model="newWasher.washerId" />
          </el-form-item>
          <el-form-item
            label="洗车机名称:"
            label-width="150px"
            prop="washerName"
          >
            <el-input v-model="newWasher.washerName" />
          </el-form-item>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-form-item label="洗车机描述:" label-width="150px">
            <el-input
              type="textarea"
              style="width: 655px;"
              v-model="newWasher.washerDesc"
            />
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!--        <el-button @click="addListDialog = false">取 消</el-button>-->
        <el-button type="primary" @click="onSubmitAdd()">确定</el-button>
      </div>
    </el-dialog>
    <!--修改表单弹框-->
    <el-dialog
      id="edit"
      width="50%"
      title="修改洗车机"
      :visible.sync="editListDialog"
      @close="queryWasher"
    >
      <el-form :inline="true" label-position="right" label-width="100px">
        <div style="font-size: 20px">基本信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="洗车机编号:" label-width="150px">
              <el-input v-model="editWasher.washerId" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="洗车机名称:" label-width="150px">
              <el-input v-model="editWasher.washerName" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-form-item label="洗车机描述:" label-width="150px">
            <el-input
              type="textarea"
              style="width: 655px;"
              v-model="editWasher.washerDesc"
            />
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!--        <el-button @click="editListDialog = false">取 消</el-button>-->
        <el-button type="primary" @click="onSubmitEdit()">保 存</el-button>
      </div>
    </el-dialog>
    <!--      导入弹框-->
    <el-dialog :visible.sync="importBatchDia" title="导入数据" width="40%">
      <!-- style="text-align: center;" -->
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
          style="font-size:10px;color:red;margin-top:30px;"
        >
          请下载模板文件后上传。
        </div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="importBatchDia = false">取 消</el-button>
        <el-button type="primary" @click="confimImportBatch">导 入</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { BASE_API } from "@/utils/config";
export default {
  data() {
    return {
      //批量导入弹框
      importBatchDia: false,
      //模板下载
      templateDl: BASE_API + "FileController/dlTemplate/洗车机管理",
      //导出
      exportFile: BASE_API + "carWashingMachineFunc/download",
      fileList: [],
      //洗车机编号列表
      carWashingMachineNameList: [
        {
          carWashingMachineName: "龙门洗车机",
          id: "1"
        }
      ],
      //设备状态
      washerStatusList: [
        {
          washerStatus: "全部",
          id: "1"
        },
        {
          washerStatus: "完好",
          id: "2"
        },
        {
          washerStatus: "损坏",
          id: "3"
        }
      ],
      //洗车机列表
      washerList: [],
      //新增表单弹框
      addListDialog: false,
      //新增洗车机数据暂存
      newWasher: {},
      //修改表单弹框
      editListDialog: false,
      //修改洗车机数据暂存
      editWasher: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectList: [],
      //分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      // 表单校验
      rules: {
        washerId: [
          { required: true, message: "洗车机编号不能为空", trigger: "blur" }
        ],
        washerName: [
          {
            required: true,
            message: "洗车机名称不能为空",
            trigger: "blur"
          }
        ]
      },
      // 导入弹框
      importDialog: false
    };
  },
  created() {
    this.queryWasher();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.carWashingMachineNameList = {};
    },

    //查询
    queryWasher() {
      this.washerList = [];
      const param = {
        washerName: this.washerName,
        washerStatus: this.washerStatus,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$deviceManagement.queryCarWashingMachineList(param).then(res => {
        this.washerList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      });
    },
    //新增洗车机
    addWasher() {
      this.newWasher = {};
      this.addListDialog = true;
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
              .delCarWashingMachine(this.idList)
              .then(res => {
                this.$message({ type: "success", message: "删除成功!" });
                this.queryWasher();
              });
          })
          .catch(() => {
            this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    //修改
    editDialog(row) {
      this.editWasher = row;
      this.editListDialog = true;
    },
    //删除
    deleteWasher(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const param = [{ washerId: row.washerId }];
          this.$deviceManagement.delCarWashingMachine(param).then(res => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.queryWasher();
          });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //新增表单提交
    onSubmitAdd() {
      this.$refs["addWasher"].validate(valid => {
        if (valid) {
          this.$deviceManagement
            .addCarWashingMachine(this.newWasher)
            .then(res => {
              this.$message({ type: "success", message: "添加成功!" });
              this.queryWasher();
            });
          this.addListDialog = false;
        }
      });
    },
    //修改表单提交
    onSubmitEdit() {
      this.editListDialog = false;
      this.$deviceManagement
        .updateCarWashingMachine(this.editWasher)
        .then(res => {
          if (res.resultCode == "2000") {
            this.$message({ type: "success", message: "修改成功!" });
            this.queryWasher();
          }
        });
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectList = val;
      this.idList = [];
      //获取批量删除id
      val.forEach(item => {
        const param = {
          washerId: item.washerId
        };
        this.idList.push(param);
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
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
    //处理导入
    addFile(file, fileList) {
      var index = file.name.split(".").slice(-1);
      if (!(index == "xlsx" || index == "XLSX")) {
        this.fileList = [];
        this.$message.warning(`文件格式有误,请选择xls文件`);
      }
    },
    handleExceed() {
      this.$message.warning(`对不起,一次仅限上传一个文件！`);
    },
    myUpload(content) {
      let _self = this;
      // 1.导入
      var FileController = "";
      FileController = BASE_API + "carWashingMachineFunc/upload"; //请求接口
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
            _self.importBatchDia = false;
            _self.queryWasher();
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
    }
  },
  mounted() {
    this.queryWasher();
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
