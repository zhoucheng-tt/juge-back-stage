<!--
    充电桩
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
      <el-form :inline="true" class="demo-form-inline">
        <el-row>
          <el-col :span="6">
            <el-form-item label="充电桩编号">
              <el-select v-model="chargingPointNumList.chargingPointNum" placeholder="请选择">
                <el-option v-for="(item, index) in chargingPointNumList" :label="item.chargingPointNum"
                           :value="item.chargingPointNum" :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="设备状态">
              <el-select v-model="eqStatusList.eqStatus" placeholder="请选择">
                <el-option v-for="(item, index) in eqStatusList" :label="item.eqStatus" :value="item.eqStatus"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="addChargingPoint()">新增充电桩</el-button>
            <el-button type="primary" @click="bulkImport()">批量导入</el-button>
            <el-button type="primary" @click="batchDelete()">批量删除</el-button>
            <el-button type="primary" @click="queryChargingPoint()">查 询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!--下半部分列表-->
    <div class="down" style="padding-top: 20px;">
      <el-table :data="chargingPointList" ref="selectList"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"/>
        <el-table-column fixed prop="chargingPointNum" label="充电桩编号"/>
        <el-table-column prop="chargingPointName" :show-overflow-tooltip="true" label="充电桩名称"/>
        <el-table-column prop="chargingPointDescribe" :show-overflow-tooltip="true" label="充电桩描述"/>
        <el-table-column prop="addTime" :show-overflow-tooltip="true" label="添加时间"/>
        <el-table-column prop="addName" :show-overflow-tooltip="true" label="添加人"/>
        <el-table-column prop="editTime" :show-overflow-tooltip="true" label="修改时间"/>
        <el-table-column prop="editName" :show-overflow-tooltip="true" label="修改人"/>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="editDialog(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteChargingPoint(scope.row)" type="text" size="small">删除</el-button>
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
    <el-dialog id="add" title="新增充电桩" :visible.sync="addListDialog">
      <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
        <div style="font-size: 20px">基本信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="充电桩编号:" label-width="150px">
              <el-input v-model="newChargingPoint.chargingPointNum"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="充电桩名称:" label-width="150px">
              <el-input v-model="newChargingPoint.chargingPointName"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-form-item label="充电桩描述:" label-width="150px">
            <el-input type="textarea" style="width: 655px;" v-model="newChargingPoint.chargingPointDescribe"/>
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
      <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
        <div style="font-size: 20px">基本信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="充电桩编号:" label-width="150px">
              <el-input v-model="editChargingPoint.chargingPointNum"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="充电桩名称:" label-width="150px">
              <el-input v-model="editChargingPoint.chargingPointName"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-form-item label="充电桩描述:" label-width="150px">
            <el-input type="textarea" style="width: 655px;" v-model="editChargingPoint.chargingPointDescribe"/>
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
      chargingPointNumList: [
        {
          chargingPointNum: "1号",
          id: "1"
        },
        {
          chargingPointNum: "2号",
          id: "2"
        },
        {
          chargingPointNum: "3号",
          id: "3"
        },
        {
          chargingPointNum: "4号",
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
      chargingPointList: [
          {
        chargingPointNum: "1",
        chargingPointName: "啊",
        chargingPointDescribe: "啊是第哈切夫你去偶的弄请问你都去",
        addTime: "2020-10-30",
        addName: "小王",
        editTime: "2020-10-30",
        editName: "小王",
      }, {
        chargingPointNum: "1",
        chargingPointName: "啊",
        chargingPointDescribe: "啊是第哈切夫你去偶的弄请问你都去",
        addTime: "2020-10-30",
        addName: "小王",
        editTime: "2020-10-30",
        editName: "小王",
      }, {
        chargingPointNum: "1",
        chargingPointName: "啊",
        chargingPointDescribe: "啊是第哈切夫你去偶的弄请问你都去",
        addTime: "2020-10-30",
        addName: "小王",
        editTime: "2020-10-30",
        editName: "小王",
      },
      ],
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
      pageTotal: 4
    };
  },
  methods: {
    //查询
    queryChargingPoint() {
      console.log("查询的停车场名称", this.parkingLotNameList.pkName);
    },
    //新增充电桩
    addChargingPoint() {
      console.log("新增弹框弹出");
      this.newChargingPoint = {};
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
    editDialog(row) {
      this.editChargingPoint = row;
      this.editListDialog = true;
      console.log("修改弹窗弹出");
    },
    //删除
    deleteChargingPoint(row) {
      console.log("删除的充电桩Id", row.chargingPointNum);
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
      console.log("新增数据", this.newChargingPoint);
      this.chargingPointList.push(this.newChargingPoint);
      this.addListDialog = false;
    },
    //修改表单提交
    onSubmitEdit() {
      console.log("修改数据", this.editLock);
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectList = val;
      this.idList = [];
      //获取批量删除id
      val.forEach((item) => {
        this.idList.push(item.LockNum);
      });
      console.log(this.selectList);
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
