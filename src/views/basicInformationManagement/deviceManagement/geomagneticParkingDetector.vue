<!--
   地磁车位检测器
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
            <el-form-item label="停车场">
              <el-select v-model="query" placeholder="请选择">
                <el-option v-for="(item, index) in parkingLotNameList" :label="item.name" :value="item.name"
                           :key="index"></el-option>
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
            <el-button type="primary" @click="addNewGeo()">新增地磁车检测器</el-button>
            <el-button type="primary" @click="bulkImport()">批量导入</el-button>
            <el-button type="primary" @click="batchDelete()">批量删除</el-button>
            <el-button type="primary" @click="queryByName()">查 询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!--下半部分列表-->
    <div class="down" style="padding-top: 20px;">
      <el-table :data="geoList" ref="selectGeoList"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"/>
        <el-table-column prop="parkId" label="停车场编号"/>
        <el-table-column prop="parkName" :show-overflow-tooltip="true" label="停车场名称"/>
        <el-table-column prop="magneticDetecterId" :show-overflow-tooltip="true" label="地磁车位检测器编号"/>
        <el-table-column prop="magneticDetecterName" :show-overflow-tooltip="true" label="地磁车位检测器名称"/>
        <el-table-column prop="sensorId" :show-overflow-tooltip="true" label="传感器ID"/>
        <el-table-column prop="" manufacturer
        " :show-overflow-tooltip="true" label="制造商"/>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="editGeoDialog(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteGeo(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页条-->
      <el-pagination
          style="position: relative;left: 60%"
          layout="total, prev, pager, next, jumper"
          :page-size="pageSize"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal">
      </el-pagination>
      <!--新增表单弹框-->
      <el-dialog id="add" title="新增地磁车位检测器" :visible.sync="addListDialog">
        <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
          <div style="font-size: 20px">归属停车场信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select v-model="newGeo.parkName" placeholder="请选择">
                  <el-option v-for="(item, index) in parkingLotNameList" :label="item.pkName" :value="item.pkName"
                             :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="停车场编号:" label-width="150px">
                <el-input v-model="newGeo.pkLotNum"/>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="font-size: 20px">检测器信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="地磁车位检测器编号:" label-width="150px">
                <el-input v-model="newGeo.magneticDetecterId"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="地磁车位检测器名称:" label-width="150px">
                <el-input v-model="newGeo.magneticDetecterName"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="传感器ID:" label-width="150px">
                <el-input v-model="newGeo.sensorId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="制造商:" label-width="150px">
                <el-input v-model="newGeo.manufacturer"></el-input>
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
      <el-dialog id="edit" title="修改地磁车位检测器" :visible.sync="editListDialog">
        <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
          <div style="font-size: 20px">归属停车场信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select v-model="editGeo.parkName" placeholder="请选择">
                  <el-option v-for="(item, index) in parkingLotNameList" :label="item.pkName" :value="item.pkName"
                             :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="停车场编号:" label-width="150px">
                <el-input v-model="editGeo.pkLotNum"/>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="font-size: 20px">检测器信息</div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="地磁车位检测器编号:" label-width="150px">
                <el-input v-model="editGeo.magneticDetecterId"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="地磁车位检测器名称:" label-width="150px">
                <el-input v-model="editGeo.magneticDetecterName"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="传感器ID:" label-width="150px">
                <el-input v-model="editGeo.sensorId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="制造商:" label-width="150px">
                <el-input v-model="editGeo.manufacturer"></el-input>
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
      parkingLotNameList: [],
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
      geoList: [],
      //新增表单弹框
      addListDialog: false,
      //新增地磁车数据暂存
      newGeo: {},
      //修改表单弹框
      editListDialog: false,
      //修改地磁车数据暂存
      editGeo: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectGeoList: [],
      //初始化分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      //条件查询
      query: {}
    };
  },
  methods: {
    //新增地磁车
    addNewGeo() {
      console.log("新增地磁车弹框弹出");
      this.newGeo = {};
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
    editGeoDialog(row) {
      this.editGeo = row;
      this.editListDialog = true;
      console.log("修改弹窗弹出");
    },
    //删除
    deleteGeo(row) {
      console.log("删除的地磁车Id", row.geoNum);
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
      console.log("新增数据", this.newGeo);
      this.geoList.push(this.newGeo);
      this.addListDialog = false;
    },
    //修改表单提交
    onSubmitEdit() {
      console.log("修改数据", this.editGeo);
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectGeoList = val;
      this.idList = [];
      //获取批量删除id
      val.forEach((item) => {
        this.idList.push(item.geoNum);
      });
      console.log(this.selectGeoList);
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      // 查询列表方法
      this.queryParkList();
    },
    //列表查询
    queryMagneticDetecter() {
      const param = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$homePage.queryMagneticDetecter(param).then(res => {
        this.geoList = res.data.dataList;
        this.pageTotal = res.data.totalRecord;
      });
    },
    //归属停车场下拉菜单
    queryParkList() {
      const param =
          {
            "columnName": ["park_id", "park_name"],
            "tableName": "t_bim_park",
            "whereStr": "district_code = '321302'"
          };
      this.$homePage.queryDictData(param).then(res => {
        this.parkingLotNameList = res.data.dataList;
      });
    },
    //根据停车场名称查询
    queryByName() {
      const param = {
        "cityCode": "321300",
        "districtCode": "321302",
        "parkId": this.query.parkId,
        "pageNum": this.pageNum,
        "pageSize": this.pageSize
      };
      this.$homePage.queryMagneticDetecter(param).then(res => {
        this.parkingLotNameList = res.data.dataList;
      })
    }
  },
  mounted() {
    this.queryMagneticDetecter();
    this.queryParkList();
  },
  watch: {
    query: {
      handler(newVal) {
        this.parkingLotNameList.forEach((item) => {
          if (newVal.parkName == item.name) {
            newVal.parkId = item.code;
          }
        })
      },
      deep: true
    }
  }
}
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
