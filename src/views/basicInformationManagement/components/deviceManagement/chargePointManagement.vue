<!--
    充电桩管理
 * @Author: 邵青阳
 * @Date: 2020-10-29 09:32:31
 * @LastEditTime: 2020-10-29 09:33:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\deviceManagement\floorLock.vue
-->
<template>
  <div class="all">
    <!--上半部分表单-->
    <div class="up">
      <el-form :inline="true" :model="chargPileIdList" class="demo-form-inline">
        <el-form-item label="充电桩编号">
          <el-select
            size="small"
            style="width: 160px"
            v-model="chargPileIdList.chargPileId"
            placeholder="请选择"
          >
            <el-option
              v-for="(item, index) in chargPileIdList"
              :label="item.chargPileId"
              :value="item.chargPileId"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>

        <!--          <el-form-item label="设备状态">-->
        <!--            <el-select v-model="eqStatusList.eqStatus" placeholder="请选择">-->
        <!--              <el-option-->
        <!--                v-for="(item, index) in eqStatusList"-->
        <!--                :label="item.eqStatus"-->
        <!--                :value="item.eqStatus"-->
        <!--                :key="index"-->
        <!--              ></el-option>-->
        <!--            </el-select>-->
        <!--          </el-form-item>-->
        <el-form-item
          ><el-button type="primary" size="small" @click="queryChargingPoint()"
            >查 询</el-button
          >
          <el-button type="primary" size="small" @click="resetQuery"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addChargingPoint()"
          >新增充电桩</el-button
        >
        <el-button type="primary" size="small" @click="bulkImport()"
          >批量导入</el-button
        >
        <el-button type="danger" size="small" @click="batchDelete()"
          >批量删除</el-button
        >
      </el-row>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="chargingPointList"
        ref="selectList"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" />
        <el-table-column fixed prop="chargPileId" label="充电桩编号" />
        <el-table-column
          prop="chargPileName"
          :show-overflow-tooltip="true"
          label="充电桩名称"
        />
        <el-table-column
          prop="chargPileDesc"
          :show-overflow-tooltip="true"
          label="充电桩描述"
        />
        <el-table-column
          prop="addTime"
          :show-overflow-tooltip="true"
          label="添加时间"
        />
        <el-table-column
          prop="addPerson"
          :show-overflow-tooltip="true"
          label="添加人"
        />
        <el-table-column
          prop="changeTime"
          :show-overflow-tooltip="true"
          label="修改时间"
        />
        <el-table-column
          prop="modifier"
          :show-overflow-tooltip="true"
          label="修改人"
        />
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="editDialog(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button
              @click="deleteChargingPoint(scope.row)"
              type="text"
              size="small"
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
    <el-dialog id="add" title="新增充电桩" :visible.sync="addListDialog">
      <el-form
        :inline="true"
        class="demo-form-inline"
        label-position="right"
        label-width="100px"
        :model="newChargingPoint"
        :rules="addListRules"
      >
        <div style="font-size: 20px">基本信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item
              label="充电桩编号:"
              label-width="150px"
              prop="chargPileId"
            >
              <el-input v-model="newChargingPoint.chargPileId" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="充电桩名称:"
              label-width="150px"
              prop="chargPileName"
            >
              <el-input v-model="newChargingPoint.chargPileName" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-form-item label="充电桩描述:" label-width="150px">
            <el-input
              type="textarea"
              style="width: 655px;"
              v-model="newChargingPoint.chargPileDesc"
            />
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addListDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitAdd()">确定</el-button>
      </div>
    </el-dialog>
    <!--修改表单弹框-->
    <el-dialog id="edit" title="修改充电桩" :visible.sync="editListDialog">
      <el-form
        :inline="true"
        class="demo-form-inline"
        label-position="right"
        label-width="100px"
      >
        <div style="font-size: 20px">基本信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="充电桩编号:" label-width="150px">
              <el-input v-model="editChargingPoint.chargPileId" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="充电桩名称:" label-width="150px">
              <el-input v-model="editChargingPoint.chargPileName" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-form-item label="充电桩描述:" label-width="150px">
            <el-input
              type="textarea"
              style="width: 655px;"
              v-model="editChargingPoint.chargPileDesc"
            />
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editListDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit()">确定</el-button>
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
</template>
<script>
export default {
  data() {
    return {
      //新增约束字段
      addListRules: {
        chargPileId: [
          {
            required: true,
            message: "请输入充电桩编号",
            trigger: "blur"
          }
        ],
        chargPileName: [
          {
            required: true,
            message: "请输入充电桩名称",
            trigger: "blur"
          }
        ]
      },
      //充电桩编号列表
      chargPileIdList: [
        {
          chargPileId: "1号",
          id: "1"
        },
        {
          chargPileId: "2号",
          id: "2"
        },
        {
          chargPileId: "3号",
          id: "3"
        },
        {
          chargPileId: "4号",
          id: "4"
        }
      ],
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
      //地锁列表
      chargingPointList: [],
      //新增表单弹框
      addListDialog: false,
      //新增充电桩数据暂存
      newChargingPoint: {},
      //修改表单弹框
      editListDialog: false,
      //修改充电桩数据暂存
      editChargingPoint: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectList: [],
      //分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      // 导入弹框
      importDialog: false
    };
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.chargPileIdList = [];
    },
    //查询
    queryChargingPoint() {
      this.chargingPointList = [];
      const param = {
        chargPileId: this.chargPileId,
        chargStatus: this.chargStatus,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$deviceManagement.queryChargePileList(param).then(res => {
        this.chargingPointList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      });
    },
    //新增充电桩
    addChargingPoint() {
      console.log("新增弹框弹出");
      this.newChargingPoint = {};
      this.addListDialog = true;
    },
    //批量导入
    bulkImport() {
      this.importDialog = true;
      console.log("批量导入");
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
            this.$deviceManagement.delChargePile(this.idList).then(() => {
              this.$message({ type: "success", message: "删除成功!" });
              this.queryChargingPoint();
            });
          })
          .catch(() => {
            this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    //修改
    editDialog(row) {
      this.editChargingPoint = row;
      this.editListDialog = true;
      console.log("修改弹窗弹出");
    },
    //删除
    deleteChargingPoint(row) {
      console.log("删除的充电桩Id", row.chargPileId);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const param = [
            {
              chargPileId: row.chargPileId
            }
          ];
          this.$deviceManagement.delChargePile(param).then(() => {
            this.$message({ type: "success", message: "删除成功!" });
            this.queryChargingPoint();
          });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //新增表单提交
    onSubmitAdd() {
      this.$deviceManagement.addChargePile(this.newChargingPoint).then(res => {
        this.$message({ type: "success", message: "添加成功!" });
        this.queryChargingPoint();
      });
      this.addListDialog = false;
    },
    //修改表单提交
    onSubmitEdit() {
      this.$deviceManagement
        .updateChargePile(this.editChargingPoint)
        .then(res => {
          this.$message({ type: "success", message: "修改成功!" });
          this.queryChargingPoint();
        });
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectList = val;
      this.idList = [];
      //获取批量删除id
      val.forEach(item => {
        const param = {
          chargPileId: item.chargPileId
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
    }
  },
  mounted() {
    this.queryChargingPoint();
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
</style>
