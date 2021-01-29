<!--
   地磁车位检测器
 * @Author: 王思远
 * @Date: 2020-10-22 09:26:58
 * @LastEditTime: 2020-11-05 19:44:41
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
        <!--          <el-col :span="5">
                      <el-form-item label="地市">
                        <el-select v-model="query.cityCode" placeholder="请选择" @change="queryDisList(query.cityCode)">
                          <el-option label="全部" value="0"></el-option>
                          <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.code" :key="index">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="5">
                      <el-form-item label="区县">
                        <el-select v-model="query.districtCode" placeholder="请选择" @change="queryParkList(query.districtCode)">
                          <el-option label="全部" value="0"></el-option>
                          <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.code" :key="index">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>-->

        <el-form-item label="停车场">
          <el-select
              size="small"
              style="width: 160px"
              v-model="upQueryList.parkId"
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

        <!--            <el-form-item label="设备状态">-->
        <!--              <el-select v-model="eqStatusList.eqStatus" placeholder="请选择">-->
        <!--                <el-option v-for="(item, index) in eqStatusList" :label="item.eqStatus" :value="item.eqStatus"-->
        <!--                           :key="index"/>-->
        <!--              </el-select>-->
        <!--            </el-form-item>-->
        <el-form-item>
          <el-button
              type="primary"
              size="small"
              @click="queryButton()"
          >查 询
          </el-button>
          <el-button type="primary" size="small" @click="resetQuery"
          >重置
          </el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addNewGeo()"
        >新增地磁车检测器
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
          :data="geoList"
          ref="selectGeoList"
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
        <el-table-column type="selection"/>
        <!--        <el-table-column prop="parkId" label="停车场编号" />-->
        <el-table-column
            prop="parkName"
            :show-overflow-tooltip="true"
            label="停车场名称"
        />
        <!--        <el-table-column-->
        <!--          prop="magneticDetecterId"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="地磁车位检测器编号"-->
        <!--        />-->
        <el-table-column
            prop="magneticDetecterName"
            :show-overflow-tooltip="true"
            label="地磁车位检测器名称"
        />
        <el-table-column
            prop="sensorId"
            :show-overflow-tooltip="true"
            label="传感器ID"
        />
        <el-table-column
            prop="producer"
            :show-overflow-tooltip="true"
            label="制造商"
        />
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
                @click="editGeoDialog(scope.row)"
                type="text"
                size="small"
            >修改
            </el-button>
            <el-button @click="deleteGeo(scope.row)" type="text" size="small"
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
      <!--新增表单弹框-->
      <el-dialog
          id="add"
          width="50%"
          title="新增地磁车位检测器"
          :visible.sync="addListDialog"
          destroy-on-close
      >
        <el-form
            :inline="true"
            label-position="right"
            label-width="100px"
            :model="newGeo"
            :rules="addListRules"
            ref="newGeoR"
        >
          <div style="font-size: 20px">归属停车场信息</div>
          <!--          <el-row style="padding-top: 20px">
                      <el-col :span="12">
                        <el-form-item label="归属地市:" label-width="150px">
                          <el-select v-model="newGeo.cityCode" placeholder="请选择" @change="queryDisList(newGeo.cityCode)">
                            <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.code" :key="index">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-form-item label="归属区县:" label-width="150px">
                        <el-select v-model="newGeo.districtCode" placeholder="请选择" @change="queryParkList(newGeo.districtCode)">
                          <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.code" :key="index">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-row>-->
          <el-row style="padding-top: 20px">
            <el-form-item label="归属停车场:" label-width="150px" prop="parkId">
              <el-select
                  width="200px"
                  v-model="newGeo.parkId"
                  placeholder="请选择"
              >
                <el-option
                    v-for="(item, index) in parkingLotNameList"
                    :label="item.name"
                    :value="item.code"
                    :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <div style="font-size: 20px">检测器信息</div>
          <el-row style="padding-top: 20px">
            <!--              <el-form-item label="地磁车位检测器编号:" label-width="150px">-->
            <!--                <el-input v-model="newGeo.magneticDetecterId" />-->
            <!--              </el-form-item>-->
            <el-col :span="12">
              <el-form-item
                  label="地磁车位检测器名称:"
                  label-width="160px"
                  prop="magneticDetecterName"
              >
                <el-input v-model="newGeo.magneticDetecterName"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                  label="传感器ID:"
                  label-width="160px  "
                  prop="sensorId"
              >
                <el-input v-model="newGeo.sensorId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12"></el-col>

            <el-form-item label="制造商:" label-width="160px" prop="producer">
              <el-input v-model="newGeo.producer"></el-input>
            </el-form-item>
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
          width="50%"
          title="修改地磁车位检测器"
          :visible.sync="editListDialog"
      >
        <el-form :inline="true" label-position="right" label-width="100px">
          <div style="font-size: 20px">归属停车场信息</div>
          <!--          <el-row style="padding-top: 20px">
                      <el-col :span="12">
                        <el-form-item label="归属地市:" label-width="150px">
                          <el-select v-model="editGeo.cityCode" placeholder="请选择" @change="queryDisList(editGeo.cityCode)">
                            <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.code" :key="index"/>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-form-item label="归属区县:" label-width="150px">
                        <el-select v-model="editGeo.districtCode" placeholder="请选择" @change="queryParkList(editGeo.districtCode)">
                          <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.code" :key="index"/>
                        </el-select>
                      </el-form-item>
                    </el-row>-->
          <el-row style="padding-top: 20px">
            <el-form-item label="归属停车场:" label-width="150px">
              <el-select v-model="editGeo.parkId" placeholder="请选择" disabled>
                <el-option
                    v-for="(item, index) in parkingLotNameList"
                    :label="item.name"
                    :value="item.code"
                    :key="index"
                />
              </el-select>
            </el-form-item>
          </el-row>
          <div style="font-size: 20px">检测器信息</div>
          <el-row style="padding-top: 20px">
            <!--            <el-col :span="12">-->
            <!--              <el-form-item label="地磁车位检测器编号:" label-width="150px">-->
            <!--                <el-input v-model="editGeo.magneticDetecterId" />-->
            <!--              </el-form-item>-->
            <!--            </el-col>-->
            <el-col :span="12">
              <el-form-item label="地磁车位检测器名称:" label-width="160px">
                <el-input v-model="editGeo.magneticDetecterName"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="传感器ID:" label-width="160px">
                <el-input v-model="editGeo.sensorId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="制造商:" label-width="160px">
                <el-input v-model="editGeo.producer"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--          <el-button @click="editListDialog = false">取 消</el-button>-->
          <el-button type="primary" @click="onSubmitEdit()">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog :visible.sync="importDialog" title="导入数据" width="40%">
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
              style="font-size:10px;color:#ff0000;margin-top:30px;"
          >
            请先下载模板！
          </div>
        </el-upload>

        <span slot="footer" class="dialog-footer">
          <el-button @click="importDataOff = false">取 消</el-button>
          <el-button type="primary" @click="confimImportBatch">导 入</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import {BASE_API} from "@/utils/config";

export default {
  data() {
    return {
      fileList: [],
      addListRules: {
        parkId: [
          {
            required: true,
            message: "归属停车场不能为空",
            trigger: "change"
          }
        ],
        magneticDetecterName: [
          {
            required: true,
            message: "地磁车位检测器名称不能为空",
            trigger: "blur"
          }
        ],
        sensorId: [
          {
            required: true,
            message: "传感器ID不能为空",
            trigger: "blur"
          }
        ],
        producer: [
          {
            required: true,
            message: "制造商不能为空",
            trigger: "blur"
          }
        ]
      },
      //查询按钮重置按钮数据存放
      upQueryList: {
        parkId: ""
      },
      //停车场名称列表
      parkingLotNameList: [],
      //设备状态
      eqStatusList: [],
      //地磁车列表
      geoList: [],
      //新增表单弹框
      addListDialog: false,
      //新增地磁车数据暂存
      newGeo: {},
      //修改表单弹框
      editListDialog: false,
      //修改地磁车数据暂存
      editGeo: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectGeoList: [],
      //初始化分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      /*      //归属地市下拉菜单
            cityList: [],
            //归属区县下拉菜单
            districtList: [],*/
      //修改前停车场Id暂存
      oldParkId: "",
      //修改前地磁车Id暂存
      oldMagneticDetecterId: "",
      //查询暂存
      query: {
        parkId: ""
      },
      //批量导入会话
      importDialog: false,
      templateDl: ""
    };
  },
  mounted() {
    const param = {
      template: "dici"
    };
    this.templateDl =
        BASE_API +
        "CommonController/downloadResource?jsonStr=" +
        encodeURIComponent(JSON.stringify(param));
    //初始化列表
    this.queryMagneticDetecter();
    //初始化停车场下拉菜单
    this.queryParkList();
  },
  computed: {
    exportFile: function () {
      return BASE_API + "MagneticDetecterController/download";
    }
  },
  methods: {
    queryButton(){
      this.pageNum =1;
      this.queryMagneticDetecter();
    },
    //处理导入
    addFile(file, fileList) {
      console.log(file, fileList);

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
      FileController = BASE_API + "MagneticDetecterController/upload";
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
            _self.queryMagneticDetecter();
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
      this.upQueryList = {};
    },

    //斑马纹样式
    tableRowClassName({rowIndex}) {
      if (rowIndex % 2 === 1) {
        return "successRow11";
      } else if (rowIndex % 2 === 0) {
        return "successSecond";
      }
      return "";
    },
    //新增地磁车弹框弹出
    addNewGeo() {
      console.log("新增地磁车弹框弹出");
      this.newGeo = {};
      /*      //初始化下拉菜单
            this.districtList = [];*/
      this.parkingLotNameList = [];
      this.addListDialog = true;
      this.queryParkList();
    },
    //批量导入
    bulkImport() {
      this.importDialog = true;
    },
    //批量删除
    batchDelete() {
      if (this.idList === [] || this.idList.length === 0) {
        this.$confirm("请选中至少一个!", "提示", {
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
              this.$deviceManagement
                  .delMagneticDetecter(this.idList)
                  .then(res => {
                    this.$message({type: "success", message: "删除成功!"});
                    this.queryMagneticDetecter();
                  });
            })
            .catch(() => {
              this.$message({type: "info", message: "已取消删除"});
            });
      }
    },
    //修改弹框弹出
    editGeoDialog(row) {
      this.editGeo = row;
      this.oldParkId = row.parkId;
      this.oldMagneticDetecterId = row.magneticDetecterId;
      //初始化下拉菜单
      //     this.queryDisList(row.cityCode);
      // this.queryParkList();
      this.editListDialog = true;
      console.log("修改弹窗弹出");
    },
    //删除
    deleteGeo(row) {
      console.log("删除的地磁车Id", row.magneticDetecterId);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
          .then(() => {
            this.idList = [];
            this.idList.push(row.magneticDetecterId);
            this.$deviceManagement.delMagneticDetecter(this.idList).then(res => {
              this.$message({type: "success", message: "删除成功!"});
              this.queryMagneticDetecter();
            });
          })
          .catch(() => {
            this.$message({type: "info", message: "已取消删除"});
          });
    },
    //新增表单提交
    onSubmitAdd() {
      this.$refs["newGeoR"].validate(valid => {
        if (valid) {
          console.log("新增数据", this.newGeo);
          const param = {
            parkId: this.newGeo.parkId,
            magneticDetecterId: this.newGeo.magneticDetecterId,
            magneticDetecterName: this.newGeo.magneticDetecterName,
            sensorId: this.newGeo.sensorId,
            producer: this.newGeo.producer
          };
          this.$deviceManagement.addMagneticDetecter(param).then(res => {
            console.log("打印响应", res);
            this.queryMagneticDetecter();
            this.addListDialog = false;
          });
        }
      });
    },
    //修改表单提交
    onSubmitEdit() {
      const param = {
        parkId: this.editGeo.parkId,
        magneticDetecterId: this.editGeo.magneticDetecterId,
        magneticDetecterName: this.editGeo.magneticDetecterName,
        sensorId: this.editGeo.sensorId,
        producer: this.editGeo.producer
      };
      this.$deviceManagement.updateMagneticDetecter(param).then(res => {
        this.queryMagneticDetecter();
        this.editListDialog = false;
      });
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectGeoList = val;
      this.idList = [];
      //获取批量删除的停车场Id和地磁车Id对象加入批量删除的列表
      val.forEach(item => {
        this.idList.push(item.magneticDetecterId);
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      // 查询列表方法
      this.queryMagneticDetecter();
    },
    //列表查询
    queryMagneticDetecter() {
      const param = {
        parkId: this.upQueryList.parkId,
        pageNumber: this.pageNum,
        pageSize: this.pageSize
      };
      this.$deviceManagement.queryMagneticDetecter(param).then(res => {
        this.geoList = res.resultEntity.list;
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
