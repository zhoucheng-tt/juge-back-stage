<!--
    地锁
 * @Author: 邵青阳
 * @Date: 2020-10-29 09:32:31
 * @LastEditTime: 2020-10-30 13:57:38
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
          <el-col :span="5">
            <el-form-item label="地市">
              <el-select v-model="query.cityName" placeholder="请选择">
                <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="区县">
              <el-select v-model="query.districtName" placeholder="请选择">
                <el-option v-for="(item, index) in districtList" :label="item.name"
                           :value="item.name"
                           :key="index">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="停车场">
              <el-select v-model="query.parkName" placeholder="请选择">
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
          <el-col :span="3">
            <el-button type="primary" @click="queryGroundLock()">查 询</el-button>
            <el-button type="info" @click="exportList()">导 出</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-button type="primary" @click="addNewLock()">新增地锁</el-button>
            <el-button type="primary" @click="bulkImport()">批量导入</el-button>
            <el-button type="danger" @click="batchDelete()">批量删除</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!--下半部分列表-->
    <div class="down" style="padding-top: 20px;">
      <el-table :data="floorLockList" ref="selectLockList"
                :row-class-name="tableRowClassName"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;" @selection-change="handleSelectionChange">
        <el-table-column type="selection"/>
        <el-table-column prop="parkId" label="停车场编号"/>
        <el-table-column prop="parkName" :show-overflow-tooltip="true" label="停车场名称"/>
        <el-table-column prop="groundLockId" :show-overflow-tooltip="true" label="地锁编号"/>
        <el-table-column prop="groundLockName" :show-overflow-tooltip="true" label="地锁名称"/>
        <el-table-column prop="macAddress" :show-overflow-tooltip="true" label="mac地址"/>
        <el-table-column prop="gatewayId" :show-overflow-tooltip="true" label="网关ID"/>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="editLockDialog(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteLock(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页条-->
      <el-pagination
          style="position: relative;left: 78%"
          background
          layout="total, prev, pager, next, jumper"
          :page-size="pageSize"
          @current-change="handleCurrentModify"
          :current-page="pageNum"
          :total="pageTotal"/>
    </div>
    <!--新增表单弹框-->
    <el-dialog id="add" title="新增地锁" :visible.sync="addListDialog">
      <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
        <div style="font-size: 20px">归属停车场信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="归属地市:" label-width="150px">
              <el-select v-model="newLock.cityName" placeholder="请选择">
                <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-form-item label="归属区县:" label-width="150px">
            <el-select v-model="newLock.districtName" placeholder="请选择">
              <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.name"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="归属停车场:" label-width="150px">
              <el-select v-model="newLock.parkName" placeholder="请选择">
                <el-option v-for="(item, index) in parkingLotNameList" :label="item.name" :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">地锁信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="地锁编号:" label-width="150px">
              <el-input v-model="newLock.groundLockId"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地锁名称:" label-width="150px">
              <el-input v-model="newLock.groundLockName"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="mac地址:" label-width="150px">
              <el-input v-model="newLock.macAddress"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="网关Id:" label-width="150px">
              <el-input v-model="newLock.gatewayId"></el-input>
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
    <el-dialog id="edit" title="修改地锁" :visible.sync="editListDialog">
      <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
        <div style="font-size: 20px">归属停车场信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="归属地市:" label-width="150px">
              <el-select v-model="editLock.cityName" placeholder="请选择">
                <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-form-item label="归属区县:" label-width="150px">
            <el-select v-model="editLock.districtName" placeholder="请选择">
              <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.name"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="归属停车场:" label-width="150px">
              <el-select v-model="editLock.parkName" placeholder="请选择">
                <el-option v-for="(item, index) in parkingLotNameList" :label="item.name" :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="font-size: 20px">地锁信息</div>
        <el-row style="padding-top: 20px">
          <el-col :span="12">
            <el-form-item label="地锁编号:" label-width="150px">
              <el-input v-model="editLock.groundLockId"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地锁名称:" label-width="150px">
              <el-input v-model="editLock.groundLockName"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="mac地址:" label-width="150px">
              <el-input v-model="editLock.macAddress"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="网关Id:" label-width="150px">
              <el-input v-model="editLock.gatewayId"></el-input>
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
</template>
<script>

export default {
  data() {
    return {
      //停车场名称列表
      parkingLotNameList: [],
      //设备状态
      eqStatusList: [],
      //地锁列表
      floorLockList: [],
      //新增表单弹框
      addListDialog: false,
      //新增地锁数据暂存
      newLock: {},
      //修改表单弹框
      editListDialog: false,
      //修改地锁数据暂存
      editLock: {},
      //批量删除暂存id
      idList: [],
      //多选后数据暂存
      selectLockList: [],
      //分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      //条件查询
      query: {},
      //归属地市下拉菜单
      cityList: [],
      //归属区县下拉菜单
      districtList: []
    };
  },
  methods: {
    //斑马纹样式
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 == 1) {
        return "successRow11";
      } else if (rowIndex % 2 == 0) {
        return "successSecond";
      }
      return "";
    },
    //新增地锁
    addNewLock() {
      // console.log("新增弹框弹出");
      this.newLock = {};
      this.districtList = [];
      this.parkingLotNameList = [];
      this.addListDialog = true;
    },
    //批量导入
    bulkImport() {
      // console.log("批量导入");
    },
    //批量删除
    batchDelete() {
      // console.log("批量删除", this.idList);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$homePage.delGroundLock(this.idList).then(res => {
          this.$message({type: "success", message: "删除成功!"});
          this.queryGroundLock();
        })
      })
          .catch(() => {
            this.$message({type: "info", message: "已取消删除"});
          });
    },
    //修改
    editLockDialog(row) {
      this.editLock = row;
      this.editListDialog = true;
      // console.log("修改弹窗弹出");
    },
    //删除
    deleteLock(row) {
      // console.log("删除的地锁Id", row.groundLockId);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.idList = [];
        const params = {
          groundLockId: row.groundLockId,
          parkId: row.parkId
        };
        this.idList.push(params);
        this.$homePage.delGroundLock(this.idList).then(res => {
          this.$message({type: "success", message: "删除成功!"});
          this.queryGroundLock();
        })
      }).catch(() => {
        this.$message({type: "info", message: "已取消删除"});
      });
    },
    //新增表单提交
    onSubmitAdd() {
      // console.log("新增数据", this.newLock);
      this.$homePage.addGroundLock(this.newLock).then(res => {
        // console.log(res)
      });
      this.queryGroundLock();
      this.addListDialog = false;
    },
    //修改表单提交
    onSubmitEdit() {
      // console.log("修改数据", this.editLock);
      this.$homePage.updateGroundLock(this.editLock).then(res=>{
        // console.log("打印响应",res);
        this.queryGroundLock();
      });
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectLockList = val;
      this.idList = [];
      val.forEach((item) => {
        const param = {
          groundLockId: item.groundLockId,
          parkId: item.parkId
        };
        this.idList.push(param);
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      this.queryGroundLock();
    },
    //列表查询
    queryGroundLock() {
      const param = {
        "cityCode": this.query.cityCode,
        "districtCode": this.query.districtCode,
        "parkId": this.query.parkId,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$homePage.queryGroundLock(param).then(res => {
        this.floorLockList = res.data.dataList;
        this.pageTotal = res.data.totalRecord;
      });
    },
    //查询地市数据
    queryCityList() {
      const cityParam = {
        "columnName": ["city_code", "city_name"],
        "tableName": "t_d_city",
        "whereStr": ""
      };
      this.$homePage.queryDictData(cityParam).then(res => {
        this.cityList = res.data.dataList;
      });
    }
  },
  mounted() {
    this.queryGroundLock();
    this.queryCityList();
  },
  watch: {
    //查询条件监听
    query: {
      handler(newVal) {
        this.parkingLotNameList.forEach((item) => {
          if (newVal.parkName == item.name) {
            newVal.parkId = item.code;
          }
        });
        this.cityList.forEach((item) => {
          if (item.name == newVal.cityName) {
            newVal.cityCode = item.code;
            const params = {
              "columnName": ["district_code", "district_name"],
              "tableName": "t_d_district",
              "whereStr": "city_code = " + item.code
            };
            //初始化区县下拉菜单
            this.$homePage.queryDictData(params).then(res => {
              this.districtList = res.data.dataList;
            });
          }
        });
        this.districtList.forEach((item) => {
          if (item.name == newVal.districtName) {
            newVal.districtCode = item.code;
            const param = {
              "columnName": ["park_id", "park_name"],
              "tableName": "t_bim_park",
              "whereStr": "district_code = " + item.code
            };
            //停车场名称下拉菜单
            this.$homePage.queryDictData(param).then(res => {
              this.parkingLotNameList = res.data.dataList;
            });
          }
        })

      },
      deep: true
    },
    //新增监听
    newLock: {
      handler(newVal) {

        this.cityList.forEach((item) => {
          if (item.name == newVal.cityName) {
            newVal.cityCode = item.code;
            const params = {
              "columnName": ["district_code", "district_name"],
              "tableName": "t_d_district",
              "whereStr": "city_code = " + item.code
            };
            //初始化区县下拉菜单
            this.$homePage.queryDictData(params).then(res => {
              this.districtList = res.data.dataList;
            });
          }
        });
        this.districtList.forEach((item) => {
          if (item.name == newVal.districtName) {
            newVal.districtCode = item.code;
            const param = {
              "columnName": ["park_id", "park_name"],
              "tableName": "t_bim_park",
              "whereStr": "district_code = " + item.code
            };
            //停车场名称下拉菜单
            this.$homePage.queryDictData(param).then(res => {
              this.parkingLotNameList = res.data.dataList;
            });
          }
        });
        this.parkingLotNameList.forEach((item) => {
          if (newVal.parkName == item.name) {
            newVal.parkId = item.code;
          }
        });
      },
      deep: true
    },
    //修改监听
    editLock: {
      handler(newVal) {
        this.parkingLotNameList.forEach((item) => {
          if (newVal.parkName == item.name) {
            newVal.parkId = item.code;
          }
        });
        this.cityList.forEach((item) => {
          if (item.name == newVal.cityName) {
            newVal.cityCode = item.code;
            const params = {
              "columnName": ["district_code", "district_name"],
              "tableName": "t_d_district",
              "whereStr": "city_code = " + item.code
            };
            //初始化区县下拉菜单
            this.$homePage.queryDictData(params).then(res => {
              this.districtList = res.data.dataList;
            });
          }
        });
        this.districtList.forEach((item) => {
          if (item.name == newVal.districtName) {
            newVal.districtCode = item.code;
            const param = {
              "columnName": ["park_id", "park_name"],
              "tableName": "t_bim_park",
              "whereStr": "district_code = " + item.code
            };
            //停车场名称下拉菜单
            this.$homePage.queryDictData(param).then(res => {
              this.parkingLotNameList = res.data.dataList;
            });
          }
        })

      },
      deep: true
    },
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
