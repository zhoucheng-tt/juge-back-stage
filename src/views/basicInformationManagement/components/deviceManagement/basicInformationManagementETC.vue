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
    <!--上半部分查询-->
    <div class="up">
      <el-row>
        <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
          <el-form-item label="ETC名称:">
            <el-input
              v-model="upQueryList.etcName"
              placeholder="请输入ETC名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="停车场：">
            <el-select
              v-model="upQueryList.queryParkId"
              placeholder="请选择停车场"
            >
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="(item, index) in parkingLotList"
                :label="item.name"
                :value="item.name"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="queryETCList">查询</el-button>
            <el-button type="primary" @click="resetQuery">重置</el-button>
          </el-form-item>
          <el-row>
            <el-form-item>
              <el-button type="primary" @click="addETC">新增ETC</el-button>
              <el-button type="primary" @click="exportExcel()">导出</el-button>
              <el-button type="danger" @click="deleteETC">批量删除</el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </el-row>
      <!-- 新增ETC弹框 -->
      <el-dialog title="新增ETC信息" :visible.sync="dialogAdd">
        <el-form
          :inline="true"
          :rules="rules"
          ref="addETC"
          :model="addETCForm"
          class="demo-form-inline"
          label-width="150px"
        >
          <el-form-item label="归属停车场:">
            <el-select v-model="addETCForm.parkName" placeholder="请选择停车场">
              <el-option
                v-for="(item, index) in parkingLotList"
                :label="item.name"
                :value="item.name"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="ETC编号:" prop="etcNumber">
            <el-input
              v-model="addETCForm.etcNumber"
              placeholder="请输入ETC编号"
            />
          </el-form-item>
          <el-form-item label="ETC名称:" prop="etcName">
            <el-input
              v-model="addETCForm.etcName"
              placeholder="请输入ETC名称"
            />
          </el-form-item>
          <el-form-item label="类型:" prop="type">
            <el-input v-model="addETCForm.type" placeholder="请输入类型" />
          </el-form-item>
          <el-form-item label="描述:" prop="description">
            <el-input
              v-model="addETCForm.description"
              placeholder="请输入描述"
            />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAdd = false">取 消</el-button>
          <el-button type="primary" @click="addInfoInsert">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="ETCInformationManagement"
        :row-class-name="tableRowClassName"
        ref="selectETC"
        @selection-change="handleSelectETC"
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
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <!--        <el-table-column prop="etcNumber" label="ETC编号"></el-table-column>-->
        <el-table-column prop="etcName" label="ETC名称"></el-table-column>
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="所属停车场"
          width=""
        >
        </el-table-column>
        <el-table-column
          prop="type"
          :show-overflow-tooltip="true"
          label="类型"
          width=""
        >
        </el-table-column>
        <el-table-column
          prop="description"
          :show-overflow-tooltip="true"
          label="描述"
        ></el-table-column>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="showListDialogue(scope.row)"
              type="text"
              size="small"
              >查看</el-button
            >
            <el-button
              @click="editListDialogue(scope.row)"
              type="text"
              size="small"
              >修改</el-button
            >
            <el-button
              @click="deleteListDialogue(scope.row)"
              type="text"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="position: absolute;right:4%;margin-top:20px"
        background
        layout="total, prev, pager, next, jumper"
        @current-change="handleCurrentModify"
        :current-page="pageNum"
        :total="pageTotal"
        :page-size="pageSize"
      >
      </el-pagination>
    </div>
    <!-- 信息详情点击弹出框 -->
    <el-dialog title="ETC详情" :visible.sync="showListdialogueandoff">
      <el-form
        :inline="true"
        :model="showListdialogueandoffList"
        class="demo-form-inline"
      >
        <el-form-item label="ETC编号:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.etcNumber"></el-input>
        </el-form-item>
        <el-form-item label="ETC名称:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.etcName"></el-input>
        </el-form-item>
        <el-form-item label="所属停车场:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.parkName"></el-input>
        </el-form-item>
        <el-form-item label="类型:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.type"></el-input>
        </el-form-item>
        <el-form-item label="描述:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.description"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 信息修改点击弹出框 -->
    <el-dialog title="修改ETC" :visible.sync="editListDialogueandoff">
      <el-form
        :inline="true"
        :model="editListDialogueandoffList"
        class="demo-form-inline"
      >
        <el-form-item label="ETC编号:" class="el-form-item-dialog">
          <el-input v-model="editListDialogueandoffList.etcNumber"></el-input>
        </el-form-item>
        <el-form-item label="所属停车场:" class="el-form-item-dialog">
          <el-input v-model="editListDialogueandoffList.parkName"></el-input>
        </el-form-item>
        <el-form-item label="类型:" class="el-form-item-dialog">
          <el-input v-model="editListDialogueandoffList.type"></el-input>
        </el-form-item>
        <el-form-item label="描述:" class="el-form-item-dialog">
          <el-input v-model="editListDialogueandoffList.description"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editListDialogueandoff = false">取 消</el-button>
        <el-button type="primary" @click="ETCInfoInsert">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        ]
      }
    };
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
    // 导出Excel
    exportExcel() {
      const param = {
        etcName: this.upQueryList.etcName,
        parkName: this.upQueryList.queryParkId,
        pageSize: this.pageSize,
        pageNum: this.pageNum
      };
      this.$deviceManagement.exportETC(param).then(res => {});
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

/* 上半部分查询部分 */
.up {
  width: 100%;
  height: 7%;
  float: left;
}

/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 85%;
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
</style>
