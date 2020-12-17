<!--
    洗车机计费规则管理
 * @Author: your name
 * @Date: 2020-10-22 09:26:58
 * @LastEditTime: 2020-10-29 10:20:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\carWashingMachineManagement.vue
-->
<template>
  <div class="all">
    <!--上半部分查询-->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="计费规则名称:">
          <el-input
            size="small"
            style="width: 160px"
            v-model="upQueryList.chargeModeName"
            placeholder="计费规则名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="停车场:">
          <el-select
            size="small"
            style="width: 160px"
            v-model="upQueryList.TingNum"
            placeholder="请选择停车场"
          >
            <el-option
              v-for="(item, index) in parkingLotList"
              :label="item.parkingName"
              :value="item.parkingName"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="selectQueryList"
            >查询</el-button
          >
          <el-button type="primary" size="small" @click="resetQuery"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addChargeMode"
          >新增规则</el-button
        >
        <el-button type="danger" size="small" @click="batchDelete()"
          >批量删除</el-button
        >
      </el-row>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="chargeModeManagement"
        ref="selectChargeModeManagement"
        @selection-change="handleSelectionChange"
        :row-class-name="tableRowClassName"
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
        <el-table-column
          prop="chargeModeNumber"
          label="计费规则编号"
        ></el-table-column>
        <el-table-column
          prop="chargeModeName"
          :show-overflow-tooltip="true"
          label="计费规则名称"
        >
        </el-table-column>
        <el-table-column
          prop="chargeModeType"
          :show-overflow-tooltip="true"
          label="计费规则类型"
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
              >查看
            </el-button>
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
    <el-dialog title="新增洗车机计费规则" :visible.sync="addListDialogueandoff" destroy-on-close>
      <el-form
        :inline="true"
        :model="upQueryList"
        class="demo-form-inline"
        :rules="addListDiaRules"
        ref="upQueryListR"
      >
        <div style="font-size: 20px">停车场信息</div>
        <el-col offset="1">
          <el-form-item label="归属停车场" prop="TingNum">
            <el-select v-model="upQueryList.TingNum" placeholder="请选择停车场">
              <el-option
                v-for="(item, index) in parkingLotList"
                :label="item.parkingName"
                :value="item.parkingName"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <div style="font-size: 20px">计费规则信息</div>
        <el-col offset="1">
          <el-form-item label="计费规则类型" prop="chargeMode">
            <el-select
              v-model="upQueryList.chargeMode"
              placeholder="请选择计费类型"
            >
              <el-option
                v-for="(item, index) in chargeModeList"
                :label="item.chargeMode"
                :value="item.chargeMode"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col offset="1">
          <el-form-item label="计费规则名称" prop="chargeModeName">
            <el-input
              v-model="upQueryList.chargeModeName"
              placeholder="请输入计费规则名称"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col offset="1">
          <el-form-item label="收费标准"></el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addListDialogueandoff = false">取 消</el-button>
        <el-button type="primary" @click="addInfoInsert">保 存</el-button>
      </div>
    </el-dialog>
    <!-- 信息详情点击弹出框 -->
    <el-dialog title="计费规则详情" :visible.sync="showListdialogueandoff">
      <el-form
        :inline="true"
        :model="showListdialogueandoffList"
        class="demo-form-inline"
      >
        <el-form-item label="计费规则编号:" class="el-form-item-dialog">
          <el-input
            v-model="showListdialogueandoffList.chargeModeNumber"
          ></el-input>
        </el-form-item>
        <el-form-item label="计费规则名称:" class="el-form-item-dialog">
          <el-input
            v-model="showListdialogueandoffList.chargeModeName"
          ></el-input>
        </el-form-item>
        <el-form-item label="计费规则类型:" class="el-form-item-dialog">
          <el-input
            v-model="showListdialogueandoffList.chargeModeType"
          ></el-input>
        </el-form-item>
        <el-form-item label="描述:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.description"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showListdialogueandoff = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 信息修改点击弹出框 -->
    <el-dialog title="修改计费规则" :visible.sync="editListDialogueandoff">
      <el-form
        :inline="true"
        :model="editListDialogueandoffList"
        class="demo-form-inline"
      >
        <el-form-item label="计费规则编号:" class="el-form-item-dialog">
          <el-input
            v-model="editListDialogueandoffList.chargeModeNumber"
          ></el-input>
        </el-form-item>
        <el-form-item label="计费规则名称:" class="el-form-item-dialog">
          <el-input
            v-model="editListDialogueandoffList.chargeModeName"
          ></el-input>
        </el-form-item>
        <el-form-item label="计费规则类型:" class="el-form-item-dialog">
          <el-input
            v-model="editListDialogueandoffList.chargeModeType"
          ></el-input>
        </el-form-item>
        <el-form-item label="描述:" class="el-form-item-dialog">
          <el-input v-model="editListDialogueandoffList.description"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editListDialogueandoff = false">取 消</el-button>
        <el-button type="primary" @click="InfoInsert">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //新增规则
      addListDiaRules: {
        TingNum: [
          {
            required: true,
            message: "请选择归属停车场",
            trigger: "change"
          }
        ],
        chargeMode: [
          {
            required: true,
            message: "请选择计费规则类型",
            trigger: "change"
          }
        ],
        chargeModeName: [
          {
            required: true,
            message: "请输入计费规则名称",
            trigger: "blur"
          }
        ]
      },
      // 顶部查询数据暂存处
      upQueryList: {
        chargeModeName: "",
        TingNum: "",
        chargeMode: ""
      },
      //多选后数据暂存
      selectChargeModeManagement: [],
      //批量删除暂存id
      idList: [],
      // 停车场下拉框数据暂存处
      parkingLotList: [
        {
          parkingName: "公共停车场",
          id: 1
        },
        {
          parkingName: "员工停车场",
          id: 2
        },
        {
          parkingName: "临时停车场",
          id: 3
        },
        {
          parkingName: "新能源停车场",
          id: 4
        },
        {
          parkingName: "路侧临停泊位",
          id: 5
        },
        {
          parkingName: "专用停车场",
          id: 6
        }
      ],
      //计费类型下拉框
      chargeModeList: [
        {
          chargeMode: "按次计费",
          id: 1
        },
        {
          chargeMode: "按时计费",
          id: 2
        }
      ],
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      chargeModeManagement: [
        {
          chargeModeNumber: "J001",
          chargeModeName: "洗车机按次计费规则1",
          chargeModeType: "按次",
          description: "无"
        },
        {
          chargeModeNumber: "J002",
          chargeModeName: "洗车机按次计费规则2",
          chargeModeType: "按次",
          description: "无"
        },
        {
          chargeModeNumber: "J003",
          chargeModeName: "洗车机按次计费规则3",
          chargeModeType: "按次",
          description: "无"
        },
        {
          chargeModeNumber: "J004",
          chargeModeName: "洗车机按次计费规则4",
          chargeModeType: "按次",
          description: "无"
        }
      ],
      // 控制订单详情弹出框展示和隐藏属性
      showListdialogueandoff: false,
      // 弹出框展示订单详情数据暂存
      showListdialogueandoffList: [],

      editListDialogueandoff: false,

      editListDialogueandoffList: [],

      addListDialogueandoff: false,

      addListDialogueandoffList: []
    };
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
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
          this.$message({ type: "success", message: "删除成功!" });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //确定方法
    addInfoInsert() {
      this.$refs["upQueryListR"].validate(valid => {
        if (valid) {
          console.log("确定后打印出来的数据", this.addListDialogueandoffList);
          this.addListDialogueandoff = false;
        }
      })
    },
    // 点击查询调用的方法
    selectQueryList() {
      console.log("打印出来点击查询后所产生的值", this.chargeModeManagement);
    },
    // 点击新增
    addChargeMode(row) {
      this.addListDialogueandoff = true;
      this.addListDialogueandoffList = row;
    },
    deleteETC() {},
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
    InfoInsert() {
      console.log("点击修改后提交的数据", this.editListDialogueandoffList);
      this.editListDialogueandoff = false;
    },
    //删除
    deleteListDialogue(row) {
      console.log("删除的计费规则编号", row.chargeModeNumber);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({ type: "success", message: "删除成功!" });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectChargeModeManagement = val;
      this.idList = [];
      //获取批量删除id
      val.forEach(item => {
        this.idList.push(item.chargeModeNumber);
      });
      console.log(this.selectChargeModeManagement);
    },
    //停车场下拉菜单数据
    queryParkList() {
      const params = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: "district_code = '321302'"
      };
      this.$deviceManagement.queryDictData(params).then(res => {
        this.parkingLotNameList = res.data.dataList;
      });
    }
  },
  mounted() {
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
  height: 11%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
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

/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #f8f9fa !important;
}

/deep/ .el-table .successSecond {
  background: white !important;
}
</style>
