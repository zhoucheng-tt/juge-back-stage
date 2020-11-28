<!--
   视频车位检测器
 * @Author: 王思远
 * @Date: 2020-10-22 09:26:58
 * @LastEditTime: 2020-10-28 09:39:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\carWashingMachineManagement.vue
-->
<template>
  <div class="all">
    <!--上半部分表单-->
    <div class="up">
      <el-form :inline="true" class="demo-form-inline">
        <el-row>
          <el-col :span="6">
            <el-form-item label="停车场：">
              <el-select v-model="queryParkId" placeholder="请选择停车场">
                <el-option
                    v-for="(item, index) in parkingLotList"
                    :label="item.name"
                    :value="item.code"
                    :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="设备状态">
              <el-select v-model="eqStatusList.eqStatus" placeholder="请选择">
                <el-option
                    v-for="(item, index) in eqStatusList"
                    :label="item.eqStatus"
                    :value="item.eqStatus"
                    :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="addNewVideoParking()">新增视频车位检测器</el-button>
            <el-button type="info" @click="exportExcel()">导出</el-button>
            <el-button type="primary" @click="bulkImport()">批量导入</el-button>
            <el-button type="primary" @click="batchDelete()">批量删除</el-button>
            <el-button type="primary" @click="queryPkLot()">查 询</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-dialog id="import" title="批量导入" :visible.sync="importDialog">
        <el-form>
          <el-container>
            <el-header style="text-align: center">
              <el-upload
                  class="upload-demo"
                  ref="upload"
                  enctype="multipart/form-data"
                  action=""
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :http-request="uploadFile"
                  multiple
                  :limit="1"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                <el-button type="primary" size="medium" @click=handlePreview()>导 入<i class="el-icon-upload el-icon--right"></i>
                </el-button>
                <div slot="tip" class="el-upload__tip">只能上传Excel文件</div>
              </el-upload>
            </el-header>
            <el-main style="text-align: center">
              <el-button type="primary" size="medium" @click=downModel()>下载模版<i
                  class="el-icon-download el-icon--right"></i></el-button>
            </el-main>
          </el-container>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="importDialog = false">取 消</el-button>
          <el-button type="primary" @click="commitImport()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <!--下半部分列表-->
    <div class="down" style="padding-top: 20px;">
      <el-table
          :row-class-name="tableRowClassName"
          :data="videoList"
          ref="selectVideoList"
          :header-cell-style="{
          'text-align': 'center',
          background: '#24314A',
          color: '#FFF',
          border: 'none',
          padding: 'none',
          fontSize: '12px',
          fontWeight: '100'
        }"
          :cell-style="{ 'text-align': 'center' }"
          style="width: 100%;"
          @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection"/>
        <el-table-column fixed prop="parkId" label="停车场编号"/>
        <el-table-column
            prop="parkName"
            :show-overflow-tooltip="true"
            label="停车场名称"
        />
        <el-table-column
            prop="videoDetecterId"
            :show-overflow-tooltip="true"
            label="视频车位检测器编号"
        />
        <el-table-column
            prop="videoDetecterName"
            :show-overflow-tooltip="true"
            label="视频车位检测器名称"
        />
        <el-table-column
            prop="videoDetecterMntrTypeName"
            :show-overflow-tooltip="true"
            label="监控类型"
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
            prop="address"
            :show-overflow-tooltip="true"
            label="地址"
        />
        <el-table-column
            prop="manufacturer"
            :show-overflow-tooltip="true"
            label="制造商"
        />
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
                @click="editVideoDialog(scope.row)"
                type="text"
                size="small"
            >修改
            </el-button
            >
            <el-button
                @click="deleteVideoParking(scope.row)"
                type="text"
                size="small"
            >删除
            </el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          style="position: relative;right:-60%;margin-top:20px;"
          background
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal"
          :page-size="pageSize"
      >
      </el-pagination>
      <!--新增表单弹框-->
      <el-dialog
          id="add"
          title="新增视频车位检测器"
          :visible.sync="addListDialog"
      >
        <el-form
            :inline="true"
            class="demo-form-inline"
            label-position="right"
            label-width="100px"
        >
          <div style="font-size: 20px">归属停车场信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select v-model="newVideo.parkId" placeholder="请选择">
                  <el-option
                      v-for="(item, index) in parkingLotList"
                      :label="item.name"
                      :value="item.code"
                      :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="font-size: 20px">检测器信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="视频车位检测器编号:" label-width="150px">
                <el-input v-model="newVideo.videoDetecterId"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="视频车位检测器名称:" label-width="150px">
                <el-input v-model="newVideo.videoDetecterName"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="监控类型:" label-width="150px">
                <el-select
                    v-model="newVideo.videoDetecterMntrTypeCode"
                    placeholder="请选择"
                >
                  <el-option
                      v-for="(item, index) in monitoringTypeList"
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
              <el-form-item label="IP地址:" label-width="150px">
                <el-input v-model="newVideo.ipAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="端口:" label-width="150px">
                <el-input v-model="newVideo.portNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名:" label-width="150px">
                <el-input v-model="newVideo.userName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="地址:" label-width="150px">
                <el-input v-model="newVideo.address"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="制造商:" label-width="150px">
                <el-input v-model="newVideo.manufacturer"></el-input>
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
      <el-dialog
          id="edit"
          title="修改视频车位检测器"
          :visible.sync="editListDialog"
      >
        <el-form
            :inline="true"
            class="demo-form-inline"
            label-position="right"
            label-width="100px"
        >
          <div style="font-size: 20px">归属停车场信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select v-model="editVideo.parkId" placeholder="请选择">
                  <el-option
                      v-for="(item, index) in parkingLotList"
                      :label="item.name"
                      :value="item.code"
                      :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="font-size: 20px">检测器信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="视频车位检测器编号:" label-width="150px">
                <el-input v-model="editVideo.videoDetecterId"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="视频车位检测器名称:" label-width="150px">
                <el-input v-model="editVideo.videoDetecterName"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="监控类型:" label-width="150px">
                <el-select
                    v-model="editVideo.videoDetecterMntrTypeCode"
                    placeholder="请选择"
                >
                  <el-option
                      v-for="(item, index) in monitoringTypeList"
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
              <el-form-item label="IP地址:" label-width="150px">
                <el-input v-model="editVideo.ipAddress"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="端口:" label-width="150px">
                <el-input v-model="editVideo.portNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="用户名:" label-width="150px">
                <el-input v-model="editVideo.userName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="地址:" label-width="150px">
                <el-input v-model="editVideo.address"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="制造商:" label-width="150px">
                <el-input v-model="editVideo.manufacturer"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editListDialog = false">取 消</el-button>
          <el-button type="primary" @click="onSubmitEdit()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 查询数据暂存处
      queryParkId: "",
      // 停车场下拉框数据暂存
      parkingLotList: [],
      // 监控类型列表
      monitoringTypeList: [],
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
      videoList: [],
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 2,
      //新增表单弹框
      addListDialog: false,
      //新增地磁车数据暂存
      newVideo: {},
      //修改表单弹框
      editListDialog: false,
      //修改视频车数据暂存
      editVideo: [],
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectVideoList: [],
      //旧停车场id
      oldParkId: [],
      //旧视频车位检测器编号
      oldvideoDetecterId: [],
      //导入弹框
      importDialog: false
    };
  },
  methods: {
    // 查询停车场下拉表单
    queryParking() {
      var that = this;
      this.parkingLotList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = '321302'"
      };
      this.$ysParking.queryDictData(param).then(res => {
        console.log("下拉表单查询数据显示", res);
        that.parkingLotList = res.data.dataList;
        console.log("下拉菜单", this.parkingLotList);
      });
    },
    // 查询监控类型列表
    queryMonitoringType() {
      var that = this;
      this.monitoringTypeList = [];
      const param = {
        columnName: [
          "video_detecter_mntr_type_code",
          "video_detecter_mntr_type_name"
        ],
        tableName: "t_d_video_detecter_mntr_type",
        whereStr: ""
      };
      this.$ysParking.queryDictData(param).then(res => {
        console.log("监控类型下拉接口数据", res);
        that.monitoringTypeList = res.data.dataList;
        console.log("监控类型下拉菜单数据", that.monitoringTypeList);
      });
    },
    //查询
    queryPkLot() {
      console.log("查询的停车场名称", this.queryParkId);
      this.videoList = [];
      const param = {
        parkId: this.queryParkId,
        pageSize: this.pageSize,
        pageNum: this.pageNum
      };
      this.$deviceManagement.queryVideoDetecter(param).then(res => {
        console.log("查询打印", res);
        this.videoList = res.data.dataList;
        console.log("查询列表信息", this.videoList);
      })
    },
    //新增视频车
    addNewVideoParking() {
      console.log("新增视频车弹框弹出");
      this.newVideo = {};
      this.addListDialog = true;
    },
    //视频桩列表查询
    queryVideoDetecter() {
      var that = this;
      this.videoList = [];
      const param = {
        pageSize: this.pageSize,
        pageNum: this.pageNum
      };
      this.$deviceManagement.queryVideoDetecter(param).then(res => {
        console.log("视频桩列表接口数据", res);
        this.pageTotal = res.data.totalRecord;
        that.videoList = res.data.dataList;
        console.log("视频桩列表数据", that.videoList);
      });
    },
    // 分页
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryVideoDetecter();
    },
    //导出
    exportExcel() {
      var date = new Date();
      var fileName = "视频车位检测器";
      var adcColumnTitleArry = ['停车场编号', '停车场名称', '视频车位检测器编号', '视频车位检测器名称', '监控类型', 'IP地址', '端口', '用户名', '地址', '制造商'];

      var param = {
        column_zh: adcColumnTitleArry,
        column_en: ["parkId", "parkName", "videoDetecterId", "videoDetecterName", "videoDetecterMntrTypeName", "ipAddress", "portNumber", "userName", "address", "manufacturer"],
        fileName: fileName + date.toLocaleString(),
        cityCode: this.city,
        districtCode: this.county,
        parkId: this.parking,
        pageNum: "",
        pageSize: ""
      };
      this.$deviceManagement.exportVideoDetecter(param).then(res => {
        const aLink = document.createElement("a");
        let blob = new Blob([res], {type: "application/vnd.ms-excel"})
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute('download', param.fileName + '.xlsx') // 设置下载文件名称
        aLink.click();
      });
    },
    //批量导入
    bulkImport() {
      this.importDialog = true;
      console.log("批量导入");
    },
    //批量删除
    batchDelete() {
      console.log("批量删除", this.idList);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
          .then(() => {
            this.$deviceManagement.delVideoDetecter(this.idList).then(res => {
              console.log("批量删除成功", res)
            })
            this.$message({type: "success", message: "删除成功!"});
            this.queryVideoDetecter();
          }).catch(() => {
        this.$message({type: "info", message: "已取消删除"});
      });
    },
    //修改
    editVideoDialog(row) {
      this.editVideo = row;
      this.editListDialog = true;
      console.log("修改弹窗弹出");
      this.oldParkId = row.parkId;
      this.oldvideoDetecterId = row.videoDetecterId
    },
    //删除
    deleteVideoParking(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        console.log("你要删除的id是", row.videoDetecterId)
        this.idList = [];
        this.idList.push(row.videoDetecterId);
        const param = [
          {
            videoDetecterId: row.videoDetecterId,
            parkId: row.parkId
          }];
        this.$deviceManagement.delVideoDetecter(param).then(res => {
          console.log("删除成功", res);
        });
        this.$message({type: "success", message: "删除成功!"});
        this.queryVideoDetecter();
      }).catch(() => {
        this.$message({type: "info", message: "已取消删除"});
      });
    },
    //新增表单提交
    onSubmitAdd() {
      console.log("新增数据", this.newVideo);
      this.$deviceManagement.addVideoDetecter(this.newVideo).then(res => {
        console.log("打印新增响应数据", res);
      });
      this.$message({type: "success", message: "添加成功!"});
      this.queryVideoDetecter();
      this.addListDialog = false;
    },
    //修改表单提交
    onSubmitEdit() {
      console.log("修改数据", this.editVideo);
      const param = {
        parkId: this.editVideo.parkId,
        parkCode: this.oldParkId,
        videoDetecterCode: this.oldvideoDetecterId,
        videoDetecterId: this.editVideo.videoDetecterId,
        videoDetecterName: this.editVideo.videoDetecterName,
        videoDetecterMntrTypeCode: this.editVideo.videoDetecterMntrTypeCode,
        ipAddress: this.editVideo.ipAddress,
        portNumber: this.editVideo.portNumber,
        userName: this.editVideo.userName,
        address: this.editVideo.address,
        manufacturer: this.editVideo.manufacturer
      };
      this.$deviceManagement.updateVideoDetecter(param).then(res => {
        console.log("打印修改传入数据", res);
      });
      this.$message({type: "success", message: "修改成功!"});
      this.queryVideoDetecter();
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectVideoList = val;
      this.idList = [];
      //获取批量删除id
      val.forEach(item => {
        const param = {
          videoDetecterId: item.videoDetecterId,
          parkId: item.parkId
        };
        this.idList.push(param);
      });
      console.log(this.selectVideoList);
    },
    //下载模版
    downModel() {
      const param = "视频车位检测器.xls";
      let reqInfo = {
        template: param
      }
      /*      let reqInfo = {
              template: param,//对象转json
            }
            let req = qs.stringify(reqInfo)//json转表单
            axios.post('http://120.26.146.64:8052/e-parking-web/CommonController/downloadResource', req)
            .then(res => {
              const aLink = document.createElement("a");
                let blob = new Blob([res], {type: "application/vnd.ms-excel"})
                aLink.href = URL.createObjectURL(blob)
                aLink.setAttribute('download', "视频车位检测器" + '.xlsx') // 设置下载文件名称
                aLink.click()
                document.body.appendChild(aLink)
                this.$refs.loadElement.appendChild(aLink);
            }).catch( err => {
              console.log(err)
            })*/
      this.$homePage.downloadResource(reqInfo).then(res => {
        const aLink = document.createElement("a");
        let blob = new Blob([res], {type: "application/vnd.ms-excel"});
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute('download', "视频车位检测器" + '.xls'); // 设置下载文件名称
        aLink.click();
        document.body.appendChild(aLink);
        this.$refs.loadElement.appendChild(aLink);
      });
    },

    // 自定义上传 导入数据
    uploadFile(item) {
      const form = new FormData();
      const columnEn = ["videoDetecterId", "videoDetecterName", "parkId", "videoDetecterMntrTypeCode", "ipAddress", "portNumber", "userName", "address", "manufacturer"];
      form.append("column_en", columnEn);
      //form.append('token', this.token);
      form.append('file1', item.file);
      this.$deviceManagement.batchInsertVideoDetecter(form).then(res => {
        let data = res.data;
        if (data.code == 200) {
          this.$message({
            type: 'success',
            message: '导入成功!'
          });
          this.queryVideoDetecter(); //导入成功刷新列表
          this.importDialog = false;
        } else {
          this.$message({
            type: 'error',
            message: data.msg
          });
        }
      }).catch(err => {
      })
    },
    // 斑马纹样式
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return 'successRow11';
      } else if (rowIndex % 2 == 0) {
        return 'successSecond';
      }
      return '';
    },
  },
  mounted() {
    this.queryParking();
    this.queryVideoDetecter();
    this.queryMonitoringType();
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
  height: 0;
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

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #7de6f8 !important;
}
/deep/ .el-table .successSecond {
  background: #8ed3e7 !important;
}
</style>
