<!--
    洗车机管理
 * @Author: 邵青阳
 * @Date: 2020-11-02 17:21:33
 * @LastEditTime: 2020-11-02 17:22:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\deviceManagement\carWashingMachineManagement.VUE
-->
<template>
  <div class="all">
    <!--上半部分表单-->
    <div class="up">
      <el-form :inline="true" class="demo-form-inline">
        <el-row>
          <el-col :span="6">
            <el-form-item label="洗车机名称">
              <el-select v-model="carWashingMachineNameList.carWashingMachineName" placeholder="请选择">
                <el-option v-for="(item, index) in carWashingMachineNameList" :label="item.carWashingMachineName"
                           :value="item.carWashingMachineName" :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="洗车机状态状态">
              <el-select v-model="washerStatusList.washerStatus" placeholder="请选择">
                <el-option v-for="(item, index) in washerStatusList" :label="item.washerStatus"
                           :value="item.washerStatus"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="addWasher()">新增洗车机</el-button>
            <el-button type="primary" @click="bulkImport()">批量导入</el-button>
            <el-button type="primary" @click="batchDelete()">批量删除</el-button>
            <el-button type="primary" @click="queryWasher()">查 询</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-dialog id="import" title="批量导入" :visible.sync="importDialog">
        <el-form>
          <el-container>
            <el-header style="text-align: center">
              <el-button type="primary" size="medium" @click=imgbtn()>导 入<i class="el-icon-upload el-icon--right"></i></el-button>
            </el-header>
            <el-main style="text-align: center">
              <el-button type="primary" size="medium" @click=downModel()>下载模版<i class="el-icon-download el-icon--right"></i></el-button>

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
      <el-table :data="washerList" ref="selectList"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"/>
        <el-table-column prop="washerId" :show-overflow-tooltip="true" label="洗车机编号"/>
        <el-table-column prop="washerName" :show-overflow-tooltip="true" label="洗车机名称"/>
        <el-table-column prop="washerDesc" :show-overflow-tooltip="true" label="洗车机描述"/>
        <el-table-column prop="washerStatus" :show-overflow-tooltip="true" label="洗车机状态"/>
        <el-table-column prop="addDate" :show-overflow-tooltip="true" label="添加时间"/>
        <el-table-column prop="addUser" :show-overflow-tooltip="true" label="添加人"/>
        <el-table-column prop="updateDate" :show-overflow-tooltip="true" label="修改时间"/>
        <el-table-column prop="updateUser" :show-overflow-tooltip="true" label="修改人"/>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="editDialog(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteWasher(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          style="position: relative;left: 78%"
          layout="total, prev, pager, next, jumper"
          :page-size="pageSize"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal">
      </el-pagination>
    </div>

    <!--新增表单弹框-->
    <el-dialog id="add" title="新增洗车机" :visible.sync="addListDialog">
      <el-form :inline="true"
               :rules="rules"
               ref="addWasher"
               :model="newWasher"
               class="demo-form-inline" label-position=right label-width="100px">
        <div style="font-size: 20px">基本信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="洗车机编号:" label-width="150px">
              <el-input v-model="newWasher.washerId"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="洗车机名称:" label-width="150px">
              <el-input v-model="newWasher.washerName"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-form-item label="洗车机描述:" label-width="150px">
            <el-input type="textarea" style="width: 655px;" v-model="newWasher.washerDesc"/>
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addListDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitAdd()">确定</el-button>
      </div>
    </el-dialog>
    <!--修改表单弹框-->
    <el-dialog id="edit" title="修改洗车机" :visible.sync="editListDialog">
      <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
        <div style="font-size: 20px">基本信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="洗车机编号:" label-width="150px">
              <el-input v-model="editWasher.washerId"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="洗车机名称:" label-width="150px">
              <el-input v-model="editWasher.washerName"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-form-item label="洗车机描述:" label-width="150px">
            <el-input type="textarea" style="width: 655px;" v-model="editWasher.washerDesc"/>
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editListDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //充电桩编号列表
      carWashingMachineNameList: [
        {
          carWashingMachineName: "1号",
          id: "1"
        },
        {
          carWashingMachineName: "2号",
          id: "2"
        },
        {
          carWashingMachineName: "3号",
          id: "3"
        },
        {
          carWashingMachineName: "4号",
          id: "4"
        }
      ],
      //设备状态
      washerStatusList: [
        {
          washerStatus: "全部",
          id: "1"
        },
        {
          washerStatus: "完好",
          id: "2"
        },
        {
          washerStatus: "损坏",
          id: "3"
        }
      ],
      //洗车机列表
      washerList: [],
      //新增表单弹框
      addListDialog: false,
      //新增洗车机数据暂存
      newWasher: {},
      //修改表单弹框
      editListDialog: false,
      //修改洗车机数据暂存
      editWasher: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectList: [],
      //分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      // 表单校验
      rules: {
        washerId: [
          {required: true, message: "洗车机编号不能为空", trigger: "blur"}
        ],
        washerName: [
          {required: true, message: "洗车机名称不能为空", trigger: "blur"}
        ]
      },
      // 导入弹框
      importDialog: false
    };
  },
  methods: {
    //查询
    queryWasher() {
      this.washerList = [];
      const param = {
        washerName: this.washerName,
        washerStatus: this.washerStatus,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$deviceManagement.queryCarWashingMachineList(param).then(res => {
        this.washerList = res.resultEntity.list;
        this.pageTotal = res.resultEntity.total;
      })
    },
    //新增洗车机
    addWasher() {
      console.log("新增弹框弹出");
      this.newWasher = {};
      this.addListDialog = true;
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
      }).then(() => {
        this.$deviceManagement.delCarWashingMachine(this.idList).then(res => {
          console.log("删除成功", res)
          this.$message({type: "success", message: "删除成功!"});
          this.queryWasher();
        })
      })
          .catch(() => {
            this.$message({type: "info", message: "已取消删除"});
          });
    },
    //修改
    editDialog(row) {
      this.editWasher = row;
      this.editListDialog = true;
      console.log("修改弹窗弹出");
    },
    //删除
    deleteWasher(row) {
      console.log("删除的洗车机Id", row.washerId);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        const param = [
          {washerId: row.washerId}
        ];
        this.$deviceManagement.delCarWashingMachine(param).then(res => {
          console.log("删除成功", res);
        });
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.queryWasher();
      })
          .catch(() => {
            this.$message({type: "info", message: "已取消删除"});
          });
    },
    //新增表单提交
    onSubmitAdd() {
      this.$refs["addWasher"].validate(valid => {
        if (valid) {
          console.log("保存后打印出来的数据", this.newWasher);
          this.$deviceManagement
              .addCarWashingMachine(this.newWasher)
              .then(res => {
                // console.log("打印相应", res);
                this.$message({type: "success", message: "添加成功!"});
                this.queryWasher();
              });
          this.addListDialog = false;
        }
      });
    },
    //修改表单提交
    onSubmitEdit() {
      this.$deviceManagement.updateCarWashingMachine(this.editWasher).then(res => {
        console.log("打印更新数据", res);
        this.$message({type: "success", message: "修改成功!"});
        this.queryWasher();
      })
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectList = val;
      this.idList = [];
      //获取批量删除id
      val.forEach((item) => {
        const param = {
          washerId: item.washerId
        };
        this.idList.push(param);
      });
      console.log(this.selectList);
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
    }
  },
  mounted() {
    this.queryWasher();
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
</style>
