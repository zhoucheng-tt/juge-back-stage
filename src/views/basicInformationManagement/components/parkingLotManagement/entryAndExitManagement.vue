<!--
   出入口管理
 * @Author: 王思远
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-12 20:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <!--上半部分查询-->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="停车场：">
          <el-select
              size="small"
              style="width: 160px"
              v-model="upQueryList.queryParkId"
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
          <el-button type="primary" size="small" @click="selectQueryList"
          >查询
          </el-button
          >
          <el-button type="primary" size="small" @click="resetQuery"
          >重置
          </el-button
          >
        </el-form-item>
      </el-form
      >
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addInletAndOutlet"
        >新增出入口
        </el-button
        >
        <el-button type="primary" size="small"
        ><a
            :href="exportFile"
            class="download"
            download=""
            style="color: #ffffff;text-decoration:none"
        >导出</a
        >
        </el-button
        >
        <el-button type="danger" size="small" @click="deleteSelect()"
        >批量删除
        </el-button
        >
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
          :data="manageEntryAndExit"
          ref="selectManageEntryAndExit"
          @selection-change="handleSelectManageEntryAndExit"
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
        <el-table-column type="selection" width="55"></el-table-column>
        <!--          <el-table-column-->
        <!--              prop="passagewayId"-->
        <!--              :show-overflow-tooltip="true"-->
        <!--              label="出入口编号"-->
        <!--              width="100"-->
        <!--          ></el-table-column>-->
        <!--          <el-table-column-->
        <!--              prop="parkId"-->
        <!--              :show-overflow-tooltip="true"-->
        <!--              label="停车场编号"-->
        <!--              width="100"-->
        <!--          ></el-table-column>-->
        <el-table-column
            prop="parkName"
            :show-overflow-tooltip="true"
            label="停车场名称"
        >
        </el-table-column>
        <!--          <el-table-column-->
        <!--              prop="parkTypeCode"-->
        <!--              :show-overflow-tooltip="true"-->
        <!--              label="停车场类型编码"-->
        <!--              width="120"-->
        <!--          >-->
        <!--          </el-table-column>-->
        <el-table-column
            prop="parkTypeName"
            :show-overflow-tooltip="true"
            label="停车场类型名称"
        >
        </el-table-column>
        <!--          <el-table-column-->
        <!--              width="120"-->
        <!--              prop="passagewayTypeCode"-->
        <!--              :show-overflow-tooltip="true"-->
        <!--              label="出入口类型编码"-->
        <!--          ></el-table-column>-->
        <el-table-column
            prop="passagewayTypeName"
            :show-overflow-tooltip="true"
            label="出入口类型名称"
        ></el-table-column>
        <el-table-column
            prop="passagewayName"
            :show-overflow-tooltip="true"
            label="出入口名称"
        ></el-table-column>
        <el-table-column
            prop="passagewayDesc"
            :show-overflow-tooltip="true"
            label="出入口描述"
        ></el-table-column>
        <!--          <el-table-column-->
        <!--              width="120"-->
        <!--              prop="cityCode"-->
        <!--              :show-overflow-tooltip="true"-->
        <!--              label="地市编码"-->
        <!--          ></el-table-column>-->
        <!--        <el-table-column-->
        <!--          prop="cityName"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="地市名称"-->
        <!--        ></el-table-column>-->
        <!--          <el-table-column-->
        <!--              width="120"-->
        <!--              prop="districtCode"-->
        <!--              :show-overflow-tooltip="true"-->
        <!--              label="区县编码"-->
        <!--          ></el-table-column>-->
        <!--        <el-table-column-->
        <!--          prop="districtName"-->
        <!--          :show-overflow-tooltip="true"-->
        <!--          label="区县名称"-->
        <!--        ></el-table-column>-->
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
                @click="editListDialogue(scope.row)"
                type="text"
                size="small"
            >修改
            </el-button>
            <el-button
                @click="deleteListDialogue(scope.row)"
                type="text"
                size="small"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div
          style="background-color: white;width: 98%;margin-left: 1%;height: 35px"
      >
        <div style="float: right">
          <el-pagination
              layout="total, prev, pager, next, jumper"
              @current-change="handleCurrentModify"
              :current-page="pageNum"
              :total="pageTotal"
              :page-size="pageSize"
          >
          </el-pagination>
        </div>
      </div>
      <!--新增-->
      <el-dialog
          id="add"
          width="50%"
          title="新增出入口信息"
          :visible.sync="addListDialogueandoff"
          destroy-on-close
      >
        <el-form
            :inline="true"
            :rules="rules"
            ref="addPassageWay"
            :model="addListDialogueandoffList"
        >
          <div><h3>归属停车场信息</h3></div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item
                  label="归属停车场:"
                  prop="parkId"
                  label-width="150px"
              >
                <el-select
                    style="width: 200px"
                    v-model="addListDialogueandoffList.parkId"
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
            </el-col>
          </el-row>

          <div><h3>出入口信息</h3></div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item
                  label="出入口名称:"
                  label-width="150px"
                  prop="passagewayName"
              >
                <el-input
                    v-model="addListDialogueandoffList.passagewayName"
                    placeholder="请输入出入口名称"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                  label="出入口类型:"
                  label-width="150px"
                  prop="passagewayTypeCode"
              >
                <el-select
                    style="width: 200px;"
                    v-model="addListDialogueandoffList.passagewayTypeCode"
                    placeholder="请选择出入口类型"
                >
                  <el-option
                      v-for="(item, index) in entryAndExitList"
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
              <el-form-item label="出入口描述:" label-width="150px">
                <el-input
                    placeholder="请输入内容"
                    v-model="addListDialogueandoffList.passagewayDesc"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--          <el-button @click="addListDialogueandoff = false">取 消</el-button>-->
          <el-button type="primary" @click="addInfoInsert">保 存</el-button>
        </div>
      </el-dialog>
      <!-- 信息修改点击弹出框 -->
      <el-dialog
          title="修改出入口管理"
          width="50%"
          :visible.sync="editListDialogueandoff"
      >
        <el-form
            :inline="true"
            ref="editPassageway"
            rules="rules"
            :model="editListDialogueandoffList"
            width="50%"
            label-width="100px"
        >
          <div><h3>归属停车场信息</h3></div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select
                    style="width: 200px"
                    disabled
                    v-model="editListDialogueandoffList.parkId"
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
            </el-col>
          </el-row>
          <div><h3>出入口信息</h3></div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <!--            <el-form-item label="出入口编号:">-->
              <!--              <el-input-->
              <!--                  disabled-->
              <!--                  v-model="editListDialogueandoffList.passagewayId"-->
              <!--                  placeholder="请输入出入口编号"-->
              <!--                  style="width: 300px"-->
              <!--              ></el-input>-->
              <!--            </el-form-item>-->
              <el-form-item
                  label="出入口名称:"
                  prop="passagewayName"
                  label-width="150px"
              >
                <el-input
                    v-model="editListDialogueandoffList.passagewayName"
                    placeholder="请输入出入口名称"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="出入口类型:" label-width="150px">
                <el-select
                    style="width: 200px"
                    v-model="editListDialogueandoffList.passagewayTypeCode"
                    placeholder="请选择出入口类型"
                >
                  <el-option
                      v-for="(item, index) in entryAndExitList"
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
              <el-form-item label="出入口描述:" label-width="150px">
                <el-input
                    placeholder="请输入内容"
                    v-model="editListDialogueandoffList.passagewayDesc"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--          <el-button @click="editListDialogueandoff = false">取 消</el-button>-->
          <el-button type="primary" @click="InfoInsert">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// import {queryPassagewayList} from "@/axios/ysParking/ysParking.js";

import {BASE_API} from "@/utils/config";

export default {
  data() {
    return {
      //查询条件存放
      upQueryList: {
        queryParkId: ""
      },
      // 查询数据暂存处
      queryParkId: "0",
      //多选后数据暂存
      selectManageEntryAndExit: undefined,
      // 停车场下拉框数据暂存
      parkingLotList: [],
      // 出入口下拉框数据暂存
      entryAndExitList: [],
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 2,
      // 列表数据暂存处
      manageEntryAndExit: [],
      // 修改弹窗显示和隐藏属性
      editListDialogueandoff: false,
      // 修改弹窗数据暂存
      editListDialogueandoffList: {},
      // 新增弹窗显示和隐藏属性
      addListDialogueandoff: false,
      // 新增数据暂存数组
      addListDialogueandoffList: {},
      // 批量删除暂存id
      idList: [],
      // 表单校验
      rules: {
        parkId: [
          {required: true, message: "停车场名称不能为空", trigger: "blur"}
        ],
        passagewayId: [
          {required: true, message: "出入口编号不能为空", trigger: "blur"}
        ],
        passagewayName: [
          {required: true, message: "出入口名称不能为空", trigger: "blur"}
        ]
      }
    };
  },
  computed: {
    exportFile: function () {
      return BASE_API +
          "PassagewayController/download?jsonStr=" +
          encodeURIComponent(JSON.stringify(this.upQueryList));
    }
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    // 拿到多选数据
    handleSelectManageEntryAndExit(val) {
      this.selectManageEntryAndExit = val;
      this.idList = [];
      val.forEach(item => {
        this.idList.push(item.passagewayId);
      });

    },
    //批量删除
    deleteSelect: function () {
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
              const param = {
                passagewayId: this.idList
              };
              this.$ysParking.deletePassagewayList(param).then(res => {
                this.$message({type: "success", message: "删除成功!"});
                this.queryPassagewayList();
              });

            })
            .catch(() => {
              this.$message({type: "info", message: "已取消删除"});
            });
      }
    },

    //单个删除
    deleteListDialogue(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
          .then(() => {
            this.idList = [];
            this.idList.push(row.passagewayId);
            const param = {
              passagewayId: this.idList
            };
            this.$ysParking.deletePassagewayList(param).then(res => {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.queryPassagewayList();
            });

          })
          .catch(() => {
            this.$message({type: "info", message: "已取消删除"});
          });
    },
    // 分页
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryPassagewayList();
      //查询列表方法
    },
    // 斑马纹样式
    tableRowClassName({rowIndex}) {
      if (rowIndex % 2 == 1) {
        return "successRow11";
      } else if (rowIndex % 2 == 0) {
        return "successSecond";
      }
      return "";
    },
    // 点击查询调用的方法
    selectQueryList() {
      if (this.queryParkId != 0) {
        this.manageEntryAndExit = [];
        const param = {
          parkId: this.queryParkId,
          pageSize: this.pageSize,
          pageNum: this.pageNum
        };
        this.$ysParking.queryPassagewayList(param).then(res => {
          this.manageEntryAndExit = res.data.dataList;
        });
      } else {
        this.queryPassagewayList();
      }
    },
    // 点击新增
    addInletAndOutlet() {
      //提前清空表单中数据
      this.addListDialogueandoffList = {};
      this.addListDialogueandoff = true;
      // this.addListDialogueandoffList = row
    },
    // 点击保存
    addInfoInsert() {
      this.$refs["addPassageWay"].validate(valid => {
        if (valid) {
          const param = {
            parkId: this.addListDialogueandoffList.parkId,
            passagewayTypeCode: this.addListDialogueandoffList.passagewayTypeCode,
            passagewayName: this.addListDialogueandoffList.passagewayName,
            passagewayDesc: this.addListDialogueandoffList.passagewayDesc,
            creater: localStorage.getItem("userName")
          }
          this.$ysParking
              .insertPassagewayList(param)
              .then(res => {
                this.$message({type: "success", message: "添加成功!"});
                this.queryPassagewayList();
              });
          this.addListDialogueandoff = false;
        }
      });
    },
    // 点击修改按钮执行的操作
    editListDialogue(row) {
      this.editListDialogueandoff = true;
      this.editListDialogueandoffList = row;
    },
    // 保存修改信息
    InfoInsert() {
      const param = {
        passagewayId: this.editListDialogueandoffList.passagewayId,
        passagewayTypeCode: this.editListDialogueandoffList.passagewayTypeCode,
        passagewayName: this.editListDialogueandoffList.passagewayName,
        passagewayDesc: this.editListDialogueandoffList.passagewayDesc
      }
      this.$ysParking
          .updatePassagewayList(param)
          .then(res => {
            this.$message({type: "success", message: "修改成功!"});
            this.queryPassagewayList();
          });
      this.editListDialogueandoff = false;
    },
    //查询列表方法
    queryPassagewayList() {
      var that = this;
      const param = {
        pageSize: this.pageSize,
        pageNumber: this.pageNum,
        parkId: this.upQueryList.queryParkId
      };
      this.$ysParking.queryPassagewayList(param).then(res => {
        this.pageTotal = res.resultEntity.total;
        that.manageEntryAndExit = res.resultEntity.list;
      });
    },
    // 查询停车场下拉表单
    queryParking() {
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
        this.parkingLotList = response.resultEntity;
      });
    },
    // 出入口下拉表单
    queryPassageway() {
      var that = this;
      this.entryAndExitList = [];
      const param = {
        columnName: ["passageway_type_code", "passageway_type_name"],
        tableName: "t_d_passageway_type",
        whereStr: []
      };
      this.$homePage.queryDict(param).then(res => {
        that.entryAndExitList = res.resultEntity;
      });
    }
  },
  mounted() {
    this.queryPassagewayList();
    //下拉表单查询接口
    this.queryParking();
    this.queryPassageway();
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
