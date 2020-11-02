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
    <!--上半部分表单-->
    <div class="up">
      <el-form :inline="true" class="demo-form-inline">
        <el-row>
          <el-col span="6">
            <el-form-item label="停车场">
              <el-select v-model="parkingLotNameList.pkName" placeholder="请选择">
                <el-option v-for="(item, index) in parkingLotNameList" :label="item.pkName" :value="item.pkName"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="6">
            <el-form-item label="设备状态">
              <el-select v-model="eqStatusList.eqStatus" placeholder="请选择">
                <el-option v-for="(item, index) in eqStatusList" :label="item.eqStatus" :value="item.eqStatus"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-button type="primary" @click="addNewGate()">新增道闸机</el-button>
            <el-button type="primary" @click="bulkImport()">批量导入</el-button>
            <el-button type="primary" @click="batchDelete()">批量删除</el-button>
            <el-button type="primary" @click="queryPkLot()">查 询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!--下半部分列表-->
    <div class="down" style="padding-top: 20px;">
      <el-table :data="gateList" ref="selectGateList"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"/>
        <el-table-column fixed prop="pkLotNum" label="停车场编号"/>
        <el-table-column prop="pkLotName" :show-overflow-tooltip="true" label="停车场名称"/>
        <el-table-column prop="entryAndExit" :show-overflow-tooltip="true" label="归属出入口"/>
        <el-table-column prop="gateNum" :show-overflow-tooltip="true" label="道闸机编号"/>
        <el-table-column prop="gateName" :show-overflow-tooltip="true" label="道闸机名称"/>
        <el-table-column prop="ipAddress" :show-overflow-tooltip="true" label="Ip地址"/>
        <el-table-column prop="serialNum" :show-overflow-tooltip="true" label="串口号"/>
        <el-table-column prop="producer" :show-overflow-tooltip="true" label="制造商"/>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="editGateDialog(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteGate(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页条-->
      <el-pagination
          style="position: relative;left: 78%"
          layout="total, prev, pager, next, jumper"
          :page-size="pageSize"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal">
      </el-pagination>
      <!--新增表单弹框-->
      <el-dialog id="add" title="新增道闸机" :visible.sync="addListDialog">
        <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
          <div style="font-size: 20px">归属停车场信息</div>
          <el-row style="padding-top: 20px">
            <el-col span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select v-model="newGate.pkLotName" placeholder="请选择">
                  <el-option v-for="(item, index) in parkingLotNameList" :label="item.pkName" :value="item.pkName"
                             :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="停车场编号:" label-width="150px">
                <el-input v-model="newGate.pkLotNum"/>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="font-size: 20px">道闸机信息</div>
          <el-row style="padding-top: 20px">
            <el-col span="12">
              <el-form-item label="道闸机编号:" label-width="150px">
                <el-input v-model="newGate.gateNum"/>
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="道闸机名称:" label-width="150px">
                <el-input v-model="newGate.gateName"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col span="12">
              <el-form-item label="IP地址:" label-width="150px">
                <el-input v-model="newGate.ipAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="串口号:" label-width="150px">
                <el-input v-model="newGate.serialNum"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col span="12">
              <el-form-item label="制造商:" label-width="150px">
                <el-input v-model="newGate.producer"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addListDialog = false">取 消</el-button>
          <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
        </div>
      </el-dialog>
      <!--修改表单弹框-->
      <el-dialog id="edit" title="修改道闸机" :visible.sync="editListDialog">
        <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
          <div style="font-size: 20px">归属停车场信息</div>
          <el-row style="padding-top: 20px">
            <el-col span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select v-model="editGate.pkLotName" placeholder="请选择">
                  <el-option v-for="(item, index) in parkingLotNameList" :label="item.pkName" :value="item.pkName"
                             :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="停车场编号:" label-width="150px">
                <el-input v-model="editGate.pkLotNum"/>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="font-size: 20px">道闸机信息</div>
          <el-row style="padding-top: 20px">
            <el-col span="12">
              <el-form-item label="道闸机编号:" label-width="150px">
                <el-input v-model="editGate.gateNum"/>
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="道闸机名称:" label-width="150px">
                <el-input v-model="editGate.gateName"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col span="12">
              <el-form-item label="传感器ID:" label-width="150px">
                <el-input v-model="editGate.sensorId"></el-input>
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="制造商:" label-width="150px">
                <el-input v-model="editGate.producer"></el-input>
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
      //停车场名称列表
      parkingLotNameList: [
        {
          pkName: "新能源停车场",
          id: "1"
        },
        {
          pkName: "免费停车场",
          id: "2"
        },
        {
          pkName: "新能源停车场",
          id: "3"
        },
        {
          pkName: "新能源停车场",
          id: "4"
        }
      ],
      //初始化分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
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
      //道闸机列表
      gateList: [],
      //新增表单弹框
      addListDialog: false,
      //新增道闸机数据暂存
      newGate: {},
      //修改表单弹框
      editListDialog: false,
      //修改道闸机数据暂存
      editGate: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectGateList: []
    };
  },
  methods: {
    //查询
    queryPkLot() {
      console.log("查询的停车场名称", this.parkingLotNameList.pkName);
    },
    //新增道闸机
    addNewGate() {
      console.log("新增道闸机弹框弹出");
      this.newGate = {};
      this.addListDialog = true;
    },
    //批量导入
    bulkImport() {
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
        this.$message({type: "success", message: "删除成功!"});
      })
          .catch(() => {
            this.$message({type: "info", message: "已取消删除"});
          });
    },
    //修改
    editGateDialog(row) {
      this.editGate = row;
      this.editListDialog = true;
      console.log("修改弹窗弹出");
    },
    //删除
    deleteGate(row) {
      console.log("删除的道闸机Id", row.gateNum);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message({type: "success", message: "删除成功!"});
      })
          .catch(() => {
            this.$message({type: "info", message: "已取消删除"});
          });
    },
    //新增表单提交
    onSubmitAdd() {
      console.log("新增数据", this.newGate);
      this.gateList.push(this.newGate);
      this.addListDialog = false;
    },
    //修改表单提交
    onSubmitEdit() {
      console.log("修改数据", this.editGate);
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectGateList = val;
      this.idList = [];
      //获取批量删除id
      val.forEach((item) => {
        this.idList.push(item.gateNum);
      });
      console.log(this.selectGateList);
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
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
