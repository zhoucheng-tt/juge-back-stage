<!--
    道闸机管理
 * @Author: 邵青阳
 * @Date: 2020-10-30 09:10:36
 * @LastEditTime: 2020-10-30 09:11:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\deviceManagement\gateMachineManagement.vue
-->
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <!--上半部分表单-->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="停车场:">
          <el-select
              size="small"
              style="width: 160px"
              v-model="upQueryList.parkId"
              placeholder="请选择停车场"
              @change="queryExit(parkId)"
          >
            <el-option
                v-for="(item, index) in parkingLotNameList"
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
          <el-button type="primary" size="small" @click="queryPassagewayGate()"
          >查 询
          </el-button
          >
          <el-button type="primary" size="small" @click="resetQuery()"
          >重置
          </el-button
          >
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addNewGate()"
        >新增道闸机
        </el-button
        >
        <el-button type="primary" size="small" @click="exportExcel()"
        >导 出
        </el-button
        >
        <el-button type="primary" size="small" @click="bulkImport()"
        >批量导入
        </el-button
        >
        <el-button type="danger" size="small" @click="batchDelete()"
        >批量删除
        </el-button
        >
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
          :data="gateList"
          ref="selectGateList"
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
        <!--          prop="passagewayGateId"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="道闸机编号"-->
        <!--        />-->
        <el-table-column
            prop="passagewayGateName"
            :show-overflow-tooltip="true"
            label="道闸机名称"
        />
        <el-table-column
            prop="ipAddress"
            :show-overflow-tooltip="true"
            label="Ip地址"
        />
        <el-table-column
            prop="serialNumber"
            :show-overflow-tooltip="true"
            label="串口号"
        />
        <el-table-column
            prop="manufacturer"
            :show-overflow-tooltip="true"
            label="制造商"
        />
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
                @click="editGateDialog(scope.row)"
                type="text"
                size="small"
            >修改
            </el-button
            >
            <el-button @click="deleteGate(scope.row)" type="text" size="small"
            >删除
            </el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right;">
        <!--分页条-->
        <el-pagination
            @current-change="handleCurrentModify"
            layout="total, prev, pager, next, jumper"
            :current-page="pageNum"
            :page-size="pageSize"
            :total="pageTotal"
        >
        </el-pagination>
      </div>
      <!--新增表单弹框-->
      <el-dialog
          id="add"
          title="新增道闸机"
          :visible.sync="addListDialog"
          destroy-on-close
      >
        <el-form
            :inline="true"
            label-position="right"
            label-width="100px"
            :model="newGate"
            :rules="addListRules"
            ref="newGateR"
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
                    style="width: 200px;"
                    v-model="newGate.parkId"
                    placeholder="请选择"
                    @change="queryExit(newGate.parkId)"
                >
                  <el-option
                      v-for="(item, index) in parkingLotNameList"
                      :label="item.name"
                      :value="item.code"
                      :key="index"
                  >
                  </el-option>
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
                    style="width: 200px;"
                    v-model="newGate.passagewayId"
                    placeholder="请选择"
                >
                  <el-option
                      v-for="(item, index) in passagesList"
                      :label="item.name"
                      :value="item.code"
                      :key="index"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="font-size: 20px">道闸机信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item
                  label="道闸机编号:"
                  label-width="150px"
                  prop="passagewayGateId"
              >
                <el-input v-model="newGate.passagewayGateId"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                  label="道闸机名称:"
                  label-width="150px"
                  prop="passagewayGateName"
              >
                <el-input v-model="newGate.passagewayGateName"/>
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
                <el-input v-model="newGate.ipAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                  label="串口号:"
                  label-width="150px"
                  prop="serialNumber"
              >
                <el-input v-model="newGate.serialNumber"></el-input>
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
                <el-input v-model="newGate.manufacturer"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--          <el-button @click="addListDialog = false">取 消</el-button>-->
          <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
        </div>
      </el-dialog>
      <!--修改表单弹框-->
      <el-dialog
          id="edit"
          width="50%"
          title="修改道闸机"
          :visible.sync="editListDialog"
      >
        <el-form :inline="true" label-position="right" label-width="100px">
          <div style="font-size: 20px">归属停车场信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select
                    style="width: 200px;"
                    v-model="editGate.parkId"
                    placeholder="请选择"
                    @change="queryExit(editGate.parkId)"
                >
                  <el-option
                      v-for="(item, index) in parkingLotNameList"
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
                    style="width: 200px;"
                    v-model="editGate.passagewayName"
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
            </el-col>
          </el-row>
          <div style="font-size: 20px">道闸机信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="道闸机编号:" label-width="150px">
                <el-input v-model="editGate.passagewayGateId"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="道闸机名称:" label-width="150px">
                <el-input v-model="editGate.passagewayGateName"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="ip地址:" label-width="150px">
                <el-input v-model="editGate.ipAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="串口号:" label-width="150px">
                <el-input v-model="editGate.serialNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="制造商:" label-width="150px">
                <el-input v-model="editGate.manufacturer"></el-input>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      //新增规则约束
      addListRules: {
        parkId: [
          {
            required: true,
            message: "请选择归属停车场",
            trigger: "change"
          }
        ],
        passagewayId: [
          {
            required: true,
            message: "请选择归属出入口",
            trigger: "change"
          }
        ],
        passagewayGateId: [
          {
            required: true,
            message: "请输入道闸机编号",
            trigger: "blur"
          }
        ],
        passagewayGateName: [
          {
            required: true,
            message: "请输入道闸机名称",
            trigger: "blur"
          }
        ],
        ipAddress: [
          {
            required: true,
            message: "请输入IP地址",
            trigger: "blur"
          }
        ],
        serialNumber: [
          {
            required: true,
            message: "请输入串口号",
            trigger: "blur"
          }
        ],
        manufacturer: [
          {
            required: true,
            message: "请输入制造商",
            trigger: "blur"
          }
        ]
      },
      //查询数据
      upQueryList: [],
      //查询数据暂留处
      parkId: "",
      //header param
      cityCode: "",
      districtCode: "",
      //表格数据
      gateList: [],
      //停车场名称列表
      parkingLotNameList: [],
      //出入口名称列表
      passagesList: [],
      //初始化分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 2,
      //新增表单弹框
      addListDialog: false,
      //新增道闸机数据暂存
      newGate: {},
      //删除一行暂存
      delList: [],
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
      //修改表单弹框
      editListDialog: false,
      //修改道闸机数据暂存
      editGate: [],
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectGateList: [],
      //旧停车场id
      oldParkId: [],
      //旧的出口id
      oldpassagewayGateId: [],
      // 导入弹框
      importDialog: false
    };
  },
  //加载一级页面时候调用
  mounted() {
    //调用查询表格
    this.queryPassagewayGate();
    //查询停车场名称下拉
    this.queryParking();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    //导出
    exportExcel() {
      var date = new Date();
      var param = {
        column_zh: [
          "停车场编号",
          "停车场名称",
          "归属出入口",
          "道闸机编号",
          "道闸机名称",
          "IP地址",
          "串口号",
          "制造商"
        ],
        column_en: [
          "parkId",
          "parkName",
          "passagewayName",
          "passagewayGateId",
          "passagewayGateName",
          "ipAddress",
          "serialNumber",
          "manufacturer"
        ],
        fileName: "道闸机管理" + date.toLocaleString(),
        cityCode: this.city,
        districtCode: this.districtCode,
        parkId: this.parking,
        pageNum: "",
        pageSize: ""
      };
      this.$deviceManagement.exportPassagewayGate(param).then(res => {
        const aLink = document.createElement("a");
        let blob = new Blob([res], {type: "application/vnd.ms-excel"});
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", param.fileName + ".xlsx"); // 设置下载文件名称
        aLink.click();
        // document.body.appendChild(aLink)
        // this.$refs.loadElement.appendChild(aLink);
      });
    },
    //查询表格数据
    queryPassagewayGate() {
      //指代this
      var that = this;
      const param = {
        //传入查询要用的参数
        cityCode: this.cityCode,
        districtCode: this.districtCode,
        parkId: this.upQueryList.parkId,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      //引用deviceManagement中的查询接口方法
      this.$deviceManagement.queryPassagewayGate(param).then(response => {
        console.log("查询表格数据", response);
        console.log("that.gateList", that.gateList);
        //分页
        that.pageTotal = response.data.totalRecord;
        //查询
        that.gateList = response.data.dataList;
      });
    },
    //分页（跳转页面）//val选中的所有行
    handleCurrentModify(val) {
      //查询
      this.pageNum = val;
      this.queryPassagewayGate();
    },
    //归属停车场名称下拉查询
    queryParking() {
      var that = this;
      this.parkingLotNameList = [];
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: [{
          colName: "district_code",
          value: "321302"
        }]
      };
      this.$homePage.queryDict(param).then(response => {
        that.parkLotNameList = response.resultEntity;
      });
    },
    //归属出入口下拉查询
    queryExit(code) {
      var that = this;
      this.passagesList = [];
      const param = {
        //出入口下拉的参数
        columnName: ["passageway_id", "passageway_name"],
        tableName: "t_bim_passageway",
        //park_id=''通过拼接
        whereStr: [{
          colName: "park_id",
          value: code
        }]
      };
      this.$homePage.queryDict(param).then(response => {
        //响应中的数据传给出入口
        this.passagesList = response.resultEntity;
      });
    },
    //新增道闸机
    addNewGate() {
      console.log("新增道闸机弹框弹出");
      //清空弹出框
      this.newGate = {};
      //弹出框显示
      this.addListDialog = true;
    },
    //新增表单提交
    onSubmitAdd() {
      this.$refs["newGateR"].validate(valid => {
        if (valid) {
          console.log("新增数据", this.newGate);
          const param = {
            //道闸机需要传入的参数
            parkId: this.newGate.parkId,
            passagewayId: this.newGate.passagewayId,
            passagewayGateId: this.newGate.passagewayGateId,
            passagewayGateName: this.newGate.passagewayGateName,
            ipAddress: this.newGate.ipAddress,
            serialNumber: this.newGate.serialNumber,
            manufacturer: this.newGate.manufacturer
          };
          this.$deviceManagement.addPassagewayGate(param).then(response => {
            console.log("打印新增响应数据", response);
            //添加成功弹出
            this.$message({type: "success", message: "添加成功!"});
            //添加成功 弹出框隐藏
            this.addListDialog = false;
            //添加成功 刷新页面 调用查询方法
            this.queryPassagewayGate();
          });
        }
      });
    },
    //删除一行
    deleteGate(row) {
      //点击删除按钮出现的提示框
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
          .then(() => {
            //清空删除
            this.delList = [];
            //设定传入行数据
            const param = {
              passagewayGateId: row.passagewayGateId,
              parkId: row.parkId
            };
            //将参数传到delList中
            this.delList.push(param);
            //调用接口中的删除方法 删除要删除的delList
            this.$deviceManagement.delPassagewayGate(this.delList);
            //提示删除成功
            this.$message({type: "success", message: "删除成功!"});
            //重新执行查询 （重新加载页面）
            this.queryPassagewayGate();
          })
          .catch(() => {
            //取消删除按钮
            this.$message({type: "info", message: "已取消删除"});
          });
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectGateList = val;
      this.idList = [];
      //获取批量删除id
      val.forEach(item => {
        const param = {
          passagewayGateId: item.passagewayGateId,
          parkId: item.parkId
        };
        this.idList.push(param);
      });
      console.log(this.selectGateList);
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
              this.$deviceManagement.delPassagewayGate(this.idList).then(res => {
                console.log("批量删除成功", res);
              });
              this.$message({type: "success", message: "删除成功!"});
              this.queryPassagewayGate();
            })
            .catch(() => {
              this.$message({type: "info", message: "已取消删除"});
            });
      }
    },

    //修改
    editGateDialog(row) {
      this.editGate = row;
      this.editListDialog = true;
      // console.log("打印修改的参数",row);
      this.oldParkId = row.parkId;
      this.oldpassagewayGateId = row.passagewayGateId;
    },

    //修改表单提交
    onSubmitEdit() {
      console.log("修改数据", this.editGate);
      const param = {
        parkId: this.editGate.parkId,
        passagewayId: this.editGate.passagewayId,
        parkCode: this.oldParkId,
        passagewayGateCode: this.oldpassagewayGateId,
        passagewayGateId: this.editGate.passagewayGateId,
        passagewayGateName: this.editGate.passagewayGateName,
        ipAddress: this.editGate.ipAddress,
        serialNumber: this.editGate.serialNumber,
        manufacturer: this.editGate.manufacturer
      };
      this.$deviceManagement.updatePassagewayGate(param).then(response => {
        console.log("打印修改传入数据", response);
        this.$message({type: "success", message: "修改成功!"});
        this.queryPassagewayGate();
        console.log("修改后的数据", this.editGate);
      });
      this.editListDialog = false;
    },

    //批量导入
    bulkImport() {
      this.importDialog = true;
      console.log("批量导入");
    },

    //下载模版
    downModel() {
      const param = "道闸机管理.xls";
      let reqInfo = {
        template: param
      };
      this.$homePage.downloadResource(reqInfo).then(res => {
        const aLink = document.createElement("a");
        let blob = new Blob([res], {type: "application/vnd.ms-excel"});
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", "道闸机管理" + ".xls"); // 设置下载文件名称
        aLink.click();
        document.body.appendChild(aLink);
        this.$refs.loadElement.appendChild(aLink);
      });
    },
    // 斑马纹样式
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 == 1) {
        return "successRow11";
      } else if (rowIndex % 2 == 0) {
        return "successSecond";
      }
      return "";
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

#add {
  height: auto;
}

.backgroundLine {
  background-color: #eaf0f6;
  width: 100%;
  height: 15px;
}
</style>
