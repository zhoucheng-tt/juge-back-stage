<!--
    停车场运营收入分析
 * @Author: 王思远
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-02 20:06:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="all">
    <!--上半部分查询-->
    <div class="up">
      <el-row>
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="停车场：">
            <el-select v-model="queryParkId" placeholder="请选择停车场">
              <el-option v-for="(item, index) in parkingLotList" :label="item.name" :value="item.code" :key="index">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="selectQueryList">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addInletAndOutlet">新增出入口
            </el-button>
            <el-button type="primary" @click="deleteSelect()">批量删除
            </el-button>
          </el-form-item>
        </el-form>
        <!--新增-->
        <el-dialog id="add" title="新增出入口信息" :visible.sync="addListDialogueandoff">
          <el-form :inline="true" :model="addListDialogueandoffList" class="demo-form-inline">
            <div>
              <h3>归属停车场信息</h3>
            </div>
            <el-col offset="1">
              <el-form-item label="归属停车场:">
                <el-select v-model="addListDialogueandoffList.parkId" placeholder="请选择停车场" style="width: 300px">
                  <el-option v-for="(item, index) in parkingLotList" :label="item.name" :value="item.code" :key="index">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <div>
              <h3>出入口信息</h3>
            </div>
            <el-col offset="1">
              <el-form-item label="出入口编号:">
                <el-input v-model="addListDialogueandoffList.passagewayId" placeholder="请输入出入口编号" style="width: 300px">
                </el-input>
              </el-form-item>
              <el-form-item label="出入口名称:">
                <el-input v-model="addListDialogueandoffList.passagewayName" placeholder="请输入出入口名称"
                  style="width: 300px"></el-input>
              </el-form-item>
            </el-col>
            <el-col offset="1">
              <el-form-item label="出入口类型:">
                <el-select v-model="addListDialogueandoffList.passagewayTypeCode" placeholder="请选择出入口类型"
                  style="width: 300px">
                  <el-option v-for="(item, index) in entryAndExitList" :label="item.name" :value="item.code"
                    :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col offset="1">
              <el-form-item label="出入口描述:">
                <el-input type="textarea" style="width: 700px" :rows="2" placeholder="请输入内容"
                  v-model="addListDialogueandoffList.passagewayDesc">
                </el-input>
              </el-form-item>
            </el-col>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addListDialogueandoff = false">取 消</el-button>
            <el-button type="primary" @click="addInfoInsert">保 存</el-button>
          </div>
        </el-dialog>
      </el-row>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-scrollbar style="height: 100%">
        <el-table :data="manageEntryAndExit" :row-class-name="tableRowClassName" ref="selectManageEntryAndExit"
          @selection-change="handleSelectManageEntryAndExit" :header-cell-style="{
            'text-align': 'center',
            background: '#24314A',
            color: '#FFF',
            border: 'none',
            padding: 'none',
            fontSize: '12px',
            fontWeight: '100'
          }" :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="passagewayId" :show-overflow-tooltip="true" label="出入口编号" width="100">
          </el-table-column>
          <el-table-column prop="parkId" :show-overflow-tooltip="true" label="停车场编号" width="100"></el-table-column>
          <el-table-column prop="parkName" :show-overflow-tooltip="true" label="停车场名称" width="120">
          </el-table-column>
          <el-table-column prop="parkTypeCode" :show-overflow-tooltip="true" label="停车场类型编码" width="120">
          </el-table-column>
          <el-table-column prop="parkTypeName" :show-overflow-tooltip="true" label="停车场类型名称" width="120">
          </el-table-column>
          <el-table-column width="120" prop="passagewayTypeCode" :show-overflow-tooltip="true" label="出入口类型编码">
          </el-table-column>
          <el-table-column width="120" prop="passagewayTypeName" :show-overflow-tooltip="true" label="出入口类型名称">
          </el-table-column>
          <el-table-column width="120" prop="passagewayName" :show-overflow-tooltip="true" label="出入口名称">
          </el-table-column>
          <el-table-column width="120" prop="passagewayDesc" :show-overflow-tooltip="true" label="出入口描述">
          </el-table-column>
          <!--          <el-table-column-->
          <!--              width="120"-->
          <!--              prop="passagewayCameraId"-->
          <!--              :show-overflow-tooltip="true"-->
          <!--              label="摄像头编号"-->
          <!--          ></el-table-column>-->
          <!--          <el-table-column-->
          <!--              width="120"-->
          <!--              prop="passagewayCameraName"-->
          <!--              :show-overflow-tooltip="true"-->
          <!--              label="摄像头名称"-->
          <!--          ></el-table-column>-->
          <!--          <el-table-column-->
          <!--              width="120"-->
          <!--              prop="passagewayGateId"-->
          <!--              :show-overflow-tooltip="true"-->
          <!--              label="道闸机编号"-->
          <!--          ></el-table-column>-->
          <!--          <el-table-column-->
          <!--              width="120"-->
          <!--              prop="passagewayGateName"-->
          <!--              :show-overflow-tooltip="true"-->
          <!--              label="道闸机名称"-->
          <!--          ></el-table-column>-->
          <el-table-column width="120" prop="cityCode" :show-overflow-tooltip="true" label="地市编码"></el-table-column>
          <el-table-column width="120" prop="cityName" :show-overflow-tooltip="true" label="地市名称"></el-table-column>
          <el-table-column width="120" prop="districtCode" :show-overflow-tooltip="true" label="区县编码"></el-table-column>
          <el-table-column width="120" prop="districtName" :show-overflow-tooltip="true" label="区县名称"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" label="操作">
            <template slot-scope="scope">
              <el-button @click="editListDialogue(scope.row)" type="text" size="small">修改
              </el-button>
              <el-button @click="deleteListDialogue(scope.row)" type="text" size="small">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
      <el-pagination style="position: relative;right:-80%;margin-top:20px" background
        layout="total, prev, pager, next, jumper" @current-change="handleCurrentModify" :current-page="pageNum"
        :total="pageTotal" :page-size="pageSize">
      </el-pagination>
      <!-- 信息修改点击弹出框 -->
      <el-dialog title="修改出入口管理" :visible.sync="editListDialogueandoff">
        <el-form :inline="true" :model="editListDialogueandoffList" class="demo-form-inline">
          <div>
            <h3>归属停车场信息</h3>
          </div>
          <el-col offset="1">
            <el-form-item label="归属停车场:">
              <el-select disabled v-model="editListDialogueandoffList.parkId" placeholder="请选择停车场" style="width: 300px">
                <el-option v-for="(item, index) in parkingLotList" :label="item.name" :value="item.code" :key="index">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <div>
            <h3>出入口信息</h3>
          </div>
          <el-col offset="1">
            <el-form-item label="出入口编号:">
              <el-input disabled v-model="editListDialogueandoffList.passagewayId" placeholder="请输入出入口编号"
                style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="出入口名称:">
              <el-input v-model="editListDialogueandoffList.passagewayName" placeholder="请输入出入口名称" style="width: 300px">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col offset="1">
            <el-form-item label="出入口类型:">
              <el-select v-model="editListDialogueandoffList.passagewayTypeCode" placeholder="请选择出入口类型"
                style="width: 300px">
                <el-option v-for="(item, index) in entryAndExitList" :label="item.name" :value="item.code" :key="index">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col offset="1">
            <el-form-item label="出入口描述:">
              <el-input type="textarea" style="width: 700px" :rows="2" placeholder="请输入内容"
                v-model="editListDialogueandoffList.passagewayDesc">
              </el-input>
            </el-form-item>
          </el-col>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editListDialogueandoff = false">取 消</el-button>
          <el-button type="primary" @click="InfoInsert">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  // import {queryPassagewayList} from "@/axios/ysParking/ysParking.js";

export default {
  data() {
    return {
      // 查询数据暂存处
      queryParkId: "",
      //多选后数据暂存
      selectManageEntryAndExit: [],
      // 停车场下拉框数据暂存
      parkingLotList: [],
      // 出入口下拉框数据暂存
      entryAndExitList: [],
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 1,
      // 列表数据暂存处
      manageEntryAndExit: [],
      // 修改弹窗显示和隐藏属性
      editListDialogueandoff: false,
      // 修改弹窗数据暂存
      editListDialogueandoffList: [],
      // 新增弹窗显示和隐藏属性
      addListDialogueandoff: false,
      // 新增数据暂存数组
      addListDialogueandoffList: [],
      // 批量删除暂存id
      idList: []
    };
  },
  methods: {
    // 拿到多选数据
    handleSelectManageEntryAndExit(val) {
      this.selectManageEntryAndExit = val;
      this.idList = [];
      val.forEach(item => {
        this.idList.push(item.passagewayId);
      });
      console.log("批量删除ID", this.idList);
      console.log(this.selectManageEntryAndExit);
    },
    methods: {
      // 拿到多选数据
      handleSelectManageEntryAndExit(val) {
        this.selectManageEntryAndExit = val;
        this.idList = [];
        val.forEach(item => {
          this.idList.push(item.passagewayId);
        });
        console.log("批量删除ID", this.idList);
        console.log(this.selectManageEntryAndExit);
      },
      //批量删除
      deleteSelect() {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          console.log("你要批量删除的id是" + this.idList);
          const param = {
            passagewayId: this.idList
          };
          this.$ysParking.deletePassagewayList(param).then(res => {
            console.log("批量删除成功", res);
          });
          this.$message({ type: "success", message: "删除成功!" });
          this.queryPassagewayList();
        }).catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
      },
      //单个删除
      deleteListDialogue(row) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            console.log("你要删除的id是" + row.passagewayId);
            this.idList = [];
            this.idList.push(row.passagewayId);
            const param = {
              passagewayId: this.idList
            };
            this.$ysParking.deletePassagewayList(param).then(res => {
              console.log("删除成功", res);
            });
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.queryPassagewayList();
          })
          .catch(() => {
            this.$message({ type: "info", message: "已取消删除" });
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
      console.log("打印出来点击查询后所产生的值", this.queryParkId);
      this.manageEntryAndExit = [];
      const param = {
        parkId: this.queryParkId,
        pageSize: this.pageSize,
        pageNum: this.pageNum
      };
      this.$ysParking.queryPassagewayList(param).then(res => {
            console.log("查询打印", res);
            this.manageEntryAndExit = res.data.dataList;
            console.log("查询数据,", this.manageEntryAndExit);
          }
      )
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
      console.log("保存后打印出来的数据", this.addListDialogueandoffList);
      this.$ysParking
          .insertPassagewayList(this.addListDialogueandoffList)
          .then(res => {
            console.log("打印相应", res);
          });
        this.queryPassagewayList();
        this.addListDialogueandoff = false;
      },
      // 点击修改按钮执行的操作
      editListDialogue(row) {
        console.log(row);
        this.editListDialogueandoff = true;
        this.editListDialogueandoffList = row;
      },
      // 保存修改信息
      InfoInsert() {
        console.log("确定后打印出来的数据", this.editListDialogueandoffList);
        this.$ysParking
          .updatePassagewayList(this.editListDialogueandoffList)
          .then(res => {
            console.log("打印更新数据", res);
          });
        this.queryPassagewayList();
        this.editListDialogueandoff = false;
      },
      //查询列表方法
      queryPassagewayList() {
        var that = this;
        this.manageEntryAndExit = [];
        const param = {
          pageSize: this.pageSize,
          pageNum: this.pageNum
        };
        this.$ysParking.queryPassagewayList(param).then(res => {
          console.log("打印出来res", res);
          this.pageTotal = res.data.totalRecord;
          that.manageEntryAndExit = res.data.dataList;
          console.log("列表数据,", that.manageEntryAndExit);
        });
      },
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
      // 出入口下拉表单
      queryPassageway() {
        var that = this;
        this.entryAndExitList = [];
        const param = {
          columnName: ["passageway_type_code", "passageway_type_name"],
          tableName: "t_d_passageway_type",
          whereStr: ""
        };
        this.$ysParking.queryDictData(param).then(res => {
          console.log("出入口下拉数据查询", res);
          that.entryAndExitList = res.data.dataList;
          console.log("出入口下拉菜单", this.entryAndExitList);
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

  /*/deep/.el-scrollbar__wrap {*/
  /*  overflow-x: scroll;*/
  /*}*/
</style>