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
    <div class="backgroundLine"></div>
    <!--上半部分表单-->
    <div class="up">
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <el-form-item label="停车场">
          <el-select
            size="small"
            style="width: 160px"
            v-model="query.parkId"
            placeholder="请选择"
          >
            <el-option label="全部" value=""></el-option>
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
        <el-form-item>
          <el-button type="primary" size="small" @click="queryFormList()"
            >查询
          </el-button>
          <el-button size="small" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addNewLock()"
          >新增地锁
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
        <!--        <el-table-column prop="parkId" label="停车场编号" />-->
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        />
        <!--        <el-table-column-->
        <!--          prop="groundLockId"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="地锁编号"-->
        <!--        />-->
        <el-table-column
          prop="groundLockName"
          :show-overflow-tooltip="true"
          label="地锁名称"
        />
        <el-table-column
          prop="macAddress"
          :show-overflow-tooltip="true"
          label="MAC地址"
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
              >修改
            </el-button>
            <el-button @click="deleteLock(scope.row)" type="text" size="small"
              >删除
            </el-button>
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
    <el-dialog
      id="add"
      title="新增地锁"
      width="50%"
      :visible.sync="addListDialog"
      destroy-on-close
    >
      <el-form
        :inline="true"
        label-position="right"
        label-width="100px"
        :model="newLock"
        :rules="addListRules"
        ref="newLockR"
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
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="归属停车场:" label-width="150px" prop="parkId">
              <el-select
                style="width: 200px"
                v-model="newLock.parkId"
                placeholder="请选择"
              >
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
              label="MAC地址:"
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
        <!--        <el-button @click="addListDialog = false">取 消</el-button>-->
        <el-button type="primary" @click="onSubmitAdd()">确定</el-button>
      </div>
    </el-dialog>
    <!--修改表单弹框-->
    <el-dialog
      id="edit"
      width="50%"
      title="修改地锁"
      :visible.sync="editListDialog"
    >
      <el-form :inline="true" label-position="right" label-width="100px">
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
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="归属停车场:" label-width="150px">
              <el-select
                style="width: 200px;"
                v-model="editLock.parkId"
                placeholder="请选择"
              >
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
        <!--        <el-button @click="editListDialog = false">取 消</el-button>-->
        <el-button type="primary" @click="onSubmitEdit()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="importDialog" title="导入数据" width="40%">
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

      <span slot="footer" class="dialog-footer">
        <el-button @click="importDialog = false">取 消</el-button>
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
      templateDl: "",
      fileList: [],
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
      pageSize: 11,
      pageTotal: 2,
      //条件查询
      query: {
        parkId: ""
      },
      // 导入弹框
      importDialog: false
    };
  },
  computed: {
    exportFile: function() {
      return BASE_API + "GroundLockController/download";
    }
  },
  methods: {
    //查询按钮
    queryFormList() {
      this.pageNum = 1;
      this.queryGroundLock();
    },
    //处理导入
    addFile(file, fileList) {
      console.log(file, fileList);

      if (!(file.name.endsWith("xls") || file.name.endsWith("xlsx"))) {
        this.fileList = [];
        this.$message.warning(`文件格式有误,请选择正确的Excel文件!`);
      }
    },
    handleExceed() {
      this.$message.warning(`对不起,一次仅限上传一个文件!`);
    },
    myUpload(content) {
      let _self = this;
      // 1.导入
      var FileController = "";
      FileController = BASE_API + "GroundLockController/upload";
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
            _self.importDialog = false;
            _self.queryGroundLock();
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
    //重置按钮
    resetQuery() {
      this.query = {
        parkId: ""
      };
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
      this.newLock = {};
      this.addListDialog = true;
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
        console.log("批量删除", this.idList);
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$deviceManagement.delGroundLock(this.idList).then(res => {
              this.$message({ type: "success", message: "删除成功!" });
              this.queryGroundLock();
            });
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

          this.idList.push(row.groundLockId);
          this.$deviceManagement.delGroundLock(this.idList).then(res => {
            this.$message({ type: "success", message: "删除成功!" });
            this.queryGroundLock();
          });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //新增表单提交
    onSubmitAdd() {
      this.$refs["newLockR"].validate(valid => {
        if (valid) {
          const param = {
            parkId: this.newLock.parkId,
            groundLockId: this.newLock.groundLockId,
            groundLockName: this.newLock.groundLockName,
            macAddress: this.newLock.macAddress,
            gatewayId: this.newLock.gatewayId
          };
          this.$deviceManagement.addGroundLock(param).then(res => {
            this.$message({ type: "success", message: "新增成功!" });
            this.queryGroundLock();
            this.addListDialog = false;
          });
        }
      });
    },
    //修改表单提交
    onSubmitEdit() {
      const param = {
        parkId: this.editLock.parkId,
        groundLockId: this.editLock.groundLockId,
        groundLockName: this.editLock.groundLockName,
        macAddress: this.editLock.macAddress,
        gatewayId: this.editLock.gatewayId
      };
      this.$deviceManagement.updateGroundLock(param).then(res => {
        this.$message({ type: "success", message: "修改成功!" });
        this.queryGroundLock();
      });
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectLockList = val;
      this.idList = [];
      val.forEach(item => {
        this.idList.push(item.groundLockId);
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryGroundLock();
    },
    //列表查询
    queryGroundLock() {
      const param = {
        parkId: this.query.parkId,
        pageNumber: this.pageNum,
        pageSize: this.pageSize
      };
      this.$deviceManagement.queryGroundLock(param).then(res => {
        this.floorLockList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      });
    },
    //查询停车场列表数据
    queryParkList() {
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
        this.parkingLotNameList = response.resultEntity;
      });
    }
  },
  mounted() {
    const param = {
      template: "disuo"
    };
    this.templateDl =
      BASE_API +
      "CommonController/downloadResource?jsonStr=" +
      encodeURIComponent(JSON.stringify(param));
    //初始化列表
    this.queryGroundLock();
    //初始化下拉菜单
    this.queryParkList();
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

.line-2 {
  width: 98%;
  height: 40px;
  margin-left: 1%;
  margin-top: 0.5%;
}

#add {
  height: auto;
}

.backgroundLine {
  background-color: #eaf0f6;
  width: 100%;
  height: 15px;
}
</style>
