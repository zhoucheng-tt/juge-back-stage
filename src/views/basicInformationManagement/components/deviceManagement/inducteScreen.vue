/** 设备管理 诱导屏管理 * @author admin * @since 2021-08-03 * @data 2021-08-03
*/
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <div class="up">
      <el-form :inline="true"
               :model="upQueryList"
               class="demo-form-inline">
        <el-form-item label="诱导屏名称">
          <el-input size="small"
                    style="width: 160px"
                    v-model="upQueryList.guidanceScreenName"
                    placeholder="请输入诱导屏名称">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     size="small"
                     @click="queryButton()">
            查询
          </el-button>
          <el-button size="small"
                     @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary"
                   size="small"
                   @click="addNewScreen()">
          新增诱导屏
        </el-button>
        <el-button type="primary"
                   size="small">
          <a :href="exportFile"
             class="download"
             download=""
             style="color: #ffffff;text-decoration:none">导出</a>
        </el-button>
        <el-button type="primary"
                   size="small"
                   @click="bulkImport()">
          批量导入
        </el-button>
        <el-button type="danger"
                   size="small"
                   @click="batchDelete()">
          批量删除
        </el-button>
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table :data="screenList"
                ref="selectNewScreenList"
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
                style="width: 98%;margin-left: 1%">
        <el-table-column type="selection" />
        <el-table-column prop="guidanceScreenId"
                         :show-overflow-tooltip="true"
                         label="诱导屏编号" />
        <el-table-column prop="guidanceScreenName"
                         :show-overflow-tooltip="true"
                         label="诱导屏名称" />
        <el-table-column prop="ipAddress"
                         :show-overflow-tooltip="true"
                         label="Ip地址" />
        <el-table-column prop="port"
                         :show-overflow-tooltip="true"
                         label="端口号" />
        <el-table-column prop="status"
                         :show-overflow-tooltip="true"
                         label="状态" />
        <el-table-column prop="offlineTime"
                         :show-overflow-tooltip="true"
                         label="最新离线推送时间" />
        <el-table-column prop="remark"
                         :show-overflow-tooltip="true"
                         label="备注" />
        <el-table-column :show-overflow-tooltip="true"
                         label="操作">
          <template slot-scope="scope">
            <!--            <el-button @click="editGeoDialog(scope.row)"-->
            <!--                       type="text"-->
            <!--                       size="small">-->
            <!--              配置-->
            <!--            </el-button>-->
            <el-button @click="editNewScreenDialog(scope.row)"
                       type="text"
                       size="small">
              修改
            </el-button>
            <el-button @click="deleteNewScreen(scope.row)"
                       type="text"
                       size="small">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right;">
        <!--分页条-->
        <el-pagination layout="total, prev, pager, next, jumper"
                       :page-size="pageSize"
                       @current-change="handleCurrentModify"
                       :current-page="pageNum"
                       :total="pageTotal">
        </el-pagination>
      </div>
      <!--新增表单弹框-->
      <el-dialog id="add"
                 width="50%"
                 title="新增诱导屏"
                 :visible.sync="addListDialog"
                 destroy-on-close>
        <el-form :inline="true"
                 label-position="right"
                 label-width="100px"
                 :model="addNewScreenList"
                 :rules="addListRules"
                 ref="newScreen">
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="诱导屏名称:"
                            label-width="160px"
                            prop="guidanceScreenName">
                <el-input v-model="addNewScreenList.guidanceScreenName" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="IP地址:"
                            label-width="160px  "
                            prop="ipAddress">
                <el-input v-model="addNewScreenList.ipAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="端口号:"
                            label-width="160px"
                            prop="port">
                <el-input v-model="addNewScreenList.port"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="备注:"
                            label-width="160px"
                            prop="producer">
                <el-input v-model="addNewScreenList.remark"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <el-button type="primary"
                     @click="onSubmitAdd()">确定</el-button>
        </div>
      </el-dialog>
      <!--修改表单弹框-->
      <el-dialog id="edit"
                 width="50%"
                 title="修改诱导屏"
                 :visible.sync="editListDialog"
                 @close="queryGuideScreenList">
        <el-form :inline="true"
                 label-position="right"
                 label-width="100px">
          <div style="font-size: 20px">诱导屏信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="诱导屏名称:"
                            label-width="160px">
                <el-input v-model="editScreen.guidanceScreenName" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="IP地址:"
                            label-width="160px">
                <el-input v-model="editScreen.ipAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="端口号:"
                            label-width="160px">
                <el-input v-model="editScreen.port"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="备注:"
                            label-width="160px">
                <el-input v-model="editScreen.remark"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <el-button type="primary"
                     @click="onSubmitEdit()">保 存</el-button>
        </div>
      </el-dialog>
      <!-- 导入-->
      <el-dialog :visible.sync="importDialog"
                 title="导入数据"
                 width="40%">
        <el-upload ref="upload"
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
                   style="text-align: center;">
          <el-button slot="trigger"
                     size="small"
                     type="primary">选择文件
          </el-button>
          <el-button size="small"
                     style="margin-left: 15px"
                     type="primary">
            <a :href="templateDl"
               class="download"
               download=""
               style="color: #ffffff;text-decoration:none">模板下载</a>
          </el-button>
          <div slot="tip"
               class="el-upload__tip"
               style="font-size:10px;color:#ff0000;margin-top:30px;">
            请先下载模板！
          </div>
        </el-upload>

        <span slot="footer"
              class="dialog-footer">
          <el-button @click="importDialog = false">取 消</el-button>
          <el-button type="primary"
                     @click="confimImportBatch">导 入</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { BASE_API } from "@/utils/config";

export default {
  data () {
    return {
      // 顶部查询条件
      upQueryList: {
        guidanceScreenName: ""
      },
      // 诱导屏列表
      screenList: [],
      //初始化分页
      pageNum: 1,
      pageSize: 11,
      pageTotal: 2,
      //新增表单弹框
      addListDialog: false,
      //新增地磁车数据暂存
      addNewScreenList: {},
      addListRules: {
        guidanceScreenName: [
          {
            required: true,
            message: "诱导屏名称不能为空",
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
        port: [
          {
            required: true,
            message: "端口号不能为空",
            trigger: "blur"
          }
        ]
      },
      //修改表单弹框
      editListDialog: false,
      //修改地磁车数据暂存
      editScreen: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectNewScreenList: [],
      // 导入
      fileList: [],
      //批量导入会话
      importDialog: false,
      templateDl: ""
    };
  },
  mounted () {
    // 初始化诱导屏列表
    this.queryGuideScreenList();

    const param = {
      template: "youdaoping"
    };
    this.templateDl =
      BASE_API +
      "CommonController/downloadResource?jsonStr=" +
      encodeURIComponent(JSON.stringify(param));
  },
  computed: {
    //  上传文件
    exportFile: function () {
      return BASE_API + "guideScreen/download";
    }
  },
  methods: {
    //列表查询
    queryGuideScreenList () {
      const param = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        guidanceScreenName: this.upQueryList.guidanceScreenName
      };
      this.$deviceManagement.queryGuideScreenList(param).then(res => {
        this.screenList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      });
    },
    // 分页查询方法
    handleCurrentModify (val) {
      this.pageNum = val;
      this.queryGuideScreenList();
    },
    // 查询按钮
    queryButton () {
      this.pageNum = 1;
      this.queryGuideScreenList();
    },
    //查询重置按钮
    resetQuery () {
      this.pageNum = 1;
      this.upQueryList = {};
      this.queryGuideScreenList()
    },
    //新增诱导屏弹框弹出
    addNewScreen () {
      this.addNewScreenList = {};
      this.addListDialog = true;
    },
    // 新增表单提交
    onSubmitAdd () {
      this.$refs["newScreen"].validate(valid => {
        if (valid) {
          const param = {
            guidanceScreenName: this.addNewScreenList.guidanceScreenName,
            ipAddress: this.addNewScreenList.ipAddress,
            port: this.addNewScreenList.port,
            remark: this.addNewScreenList.remark
          };
          this.$deviceManagement.addGuideScreen(param).then(() => {
            this.$message({ type: "success", message: "新增成功!" });
            this.addListDialog = false;
            this.queryGuideScreenList();
          });
        }
      });
    },
    //修改弹框弹出
    editNewScreenDialog (row) {
      this.editScreen = row;
      this.editListDialog = true;
    },
    //修改表单提交
    onSubmitEdit () {
      this.editListDialog = false;
      const param = {
        guidanceScreenId: this.editScreen.guidanceScreenId,
        guidanceScreenName: this.editScreen.guidanceScreenName,
        ipAddress: this.editScreen.ipAddress,
        port: this.editScreen.port,
        remark: this.editScreen.remark
      };
      this.$deviceManagement.updateGuideScreen(param).then(res => {
        if (res.resultCode == "2000") {
          this.$message({ type: "success", message: "修改成功" });
          this.queryGuideScreenList();
        } else {
          this.$message({ type: "error", message: "修改失败" });
          this.queryGuideScreenList();
        }
      });
    },
    //删除
    deleteNewScreen (row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.idList = [];
          let info = [{ guidanceScreenId: row.guidanceScreenId }]
          this.$deviceManagement.delGuideScreen(info).then(res => {
            this.$message({ type: "success", message: "删除成功!" });
            this.queryGuideScreenList();
          });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //批量删除监听
    handleSelectionChange (val) {
      this.selectNewScreenList = val;
      this.idList = [];
      //获取批量删除的停车场Id和地磁车Id对象加入批量删除的列表
      val.forEach(item => {
        this.idList.push({ guidanceScreenId: item.guidanceScreenId });
      });
    },
    //批量删除
    batchDelete () {
      if (this.idList === [] || this.idList.length === 0) {
        this.$confirm("请选中至少一个!", "提示", {
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
              .delGuideScreen(this.idList)
              .then(res => {
                this.$message({ type: "success", message: "删除成功!" });
                this.queryGuideScreenList();
              });
          })
          .catch(() => {
            this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    //处理导入
    addFile (file, fileList) {
      if (!(file.name.endsWith("xls") || file.name.endsWith("xlsx"))) {
        this.fileList = [];
        this.$message.warning(`文件格式有误,请选择正确的Excel文件`);
      }
    },
    handleExceed () {
      this.$message.warning(`对不起,一次仅限上传一个文件！`);
    },
    myUpload (content) {
      let _self = this;
      // 1.导入
      var FileController = "";
      FileController = BASE_API + "guideScreen/upload";
      //创建空对象，通过append方法添加数据
      var form = new FormData();
      form.append("file", content.file);
      var xhr = new XMLHttpRequest();
      //状态改变回调方法
      xhr.onreadystatechange = onloadFun;
      //使用open()方法启动一个请求以备发送,请求类型，请求的URL,第三个参数是否为异步请求
      xhr.open("POST", FileController, true);
      xhr.send(form);
      function onloadFun () {
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
            _self.queryGuideScreenList();
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
    confimImportBatch () {
      this.$refs.upload.submit();
      this.importDialog = false;
    },
    //批量导入
    bulkImport () {
      this.importDialog = true;
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

.backgroundLine {
  background-color: #eaf0f6;
  width: 100%;
  height: 15px;
}
</style>
