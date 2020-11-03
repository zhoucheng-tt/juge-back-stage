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
          <el-col span="5">
            <el-form-item label="停车场">
              <el-select v-model="query.parkName" placeholder="请选择">
                <el-option v-for="(item, index) in parkingLotNameList" :label="item.name" :value="item.name"
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
          <el-col :span="3">
            <el-button type="primary" @click="queryMagneticDetecter()">查 询</el-button>
            <el-button type="info" @click="exportList()">导 出</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="12">
            <el-button type="primary" @click="addNewGeo()">新增地磁车检测器</el-button>
            <el-button type="primary" @click="bulkImport()">批量导入</el-button>
            <el-button type="danger" @click="batchDelete()">批量删除</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!--下半部分列表-->
    <div class="down" style="padding-top: 20px;">
      <el-table :data="geoList" ref="selectGeoList"
                :row-class-name="tableRowClassName"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"/>
        <el-table-column prop="parkId" label="停车场编号"/>
        <el-table-column prop="parkName" :show-overflow-tooltip="true" label="停车场名称"/>
        <el-table-column prop="magneticDetecterId" :show-overflow-tooltip="true" label="地磁车位检测器编号"/>
        <el-table-column prop="magneticDetecterName" :show-overflow-tooltip="true" label="地磁车位检测器名称"/>
        <el-table-column prop="sensorId" :show-overflow-tooltip="true" label="传感器ID"/>
        <el-table-column prop="manufacturer" :show-overflow-tooltip="true" label="制造商"/>
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
          background
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
              <el-form-item label="归属地市:" label-width="150px">
                <el-select v-model="newGeo.cityName" placeholder="请选择">
                  <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.name"
                             :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-form-item label="归属区县:" label-width="150px">
              <el-select v-model="newGeo.districtName" placeholder="请选择">
                <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select v-model="newGeo.parkName" placeholder="请选择">
                  <el-option v-for="(item, index) in parkingLotNameList" :label="item.name" :value="item.name"
                             :key="index"></el-option>
                </el-select>
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
              <el-form-item label="归属地市:" label-width="150px">
                <el-select v-model="editGeo.cityName" placeholder="请选择">
                  <el-option v-for="(item, index) in cityList" :label="item.name" :value="item.name"
                             :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-form-item label="归属区县:" label-width="150px">
              <el-select v-model="editGeo.districtName" placeholder="请选择">
                <el-option v-for="(item, index) in districtList" :label="item.name" :value="item.name"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select v-model="editGeo.parkName" placeholder="请选择">
                  <el-option v-for="(item, index) in parkingLotNameList" :label="item.name" :value="item.name"
                             :key="index"></el-option>
                </el-select>
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
      parkingLotNameList: [
        {
          name: "全部",
          code: ""
        }
      ],
      //设备状态
      eqStatusList: [],
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
      query: {},
      //归属地市下拉菜单
      cityList: [
        {
          name: "全部",
          code: ""
        }
      ],
      //归属区县下拉菜单
      districtList: [
        {
          name: "全部",
          code: ""
        }
      ],
      //修改前停车场Id暂存
      oldParkId: ''
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
    //新增地磁车弹框弹出
    addNewGeo() {
      console.log("新增地磁车弹框弹出");
      this.newGeo = {};
      //初始化下拉菜单
      this.cityList = [];
      this.queryCityList();
      this.districtList = [];
      this.parkingLotNameList = [];
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
        this.$homePage.delMagneticDetecter(this.idList).then(res => {
          this.$message({type: "success", message: "删除成功!"});
          this.queryMagneticDetecter();
        })
      }).catch(() => {
        this.$message({type: "info", message: "已取消删除"});
      });
    },
    //修改弹框弹出
    editGeoDialog(row) {
      this.editGeo = row;
      this.oldParkId = row.parkId;
      //初始化下拉菜单
      this.cityList = [];
      this.queryCityList();
      const disParams = {
        "columnName": ["district_code", "district_name"],
        "tableName": "t_d_district",
        "whereStr": "city_code = " + this.editGeo.cityCode
      };
      this.$homePage.queryDictData(disParams).then(res => {
        this.districtList = res.data.dataList;
      });
      const parkParams = {
        "columnName": ["park_id", "park_name"],
        "tableName": "t_bim_park",
        "whereStr": "district_code = " + this.editGeo.districtCode
      };
      this.$homePage.queryDictData(parkParams).then(res => {
        this.parkingLotNameList = res.data.dataList;
      });
      this.editListDialog = true;
      console.log("修改弹窗弹出");
    },
    //删除
    deleteGeo(row) {
      console.log("删除的地磁车Id", row.magneticDetecterId);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.idList = [];
        const params =
            {
              magneticDetecterId: row.magneticDetecterId,
              parkId: row.parkId
            };
        this.idList.push(params);
        this.$homePage.delMagneticDetecter(this.idList).then(res => {
          this.$message({type: "success", message: "删除成功!"});
          this.queryMagneticDetecter();
        })
      }).catch(() => {
        this.$message({type: "info", message: "已取消删除"});
      });
    },
    //新增表单提交
    onSubmitAdd() {
      console.log("新增数据", this.newGeo);
      const param = {
        parkId: this.newGeo.parkId,
        magneticDetecterId: this.newGeo.magneticDetecterId,
        magneticDetecterName: this.newGeo.magneticDetecterName,
        sensorId: this.newGeo.sensorId,
        manufacturer: this.newGeo.manufacturer
      }
      this.$homePage.addMagneticDetecter(param).then(res => {
        console.log("打印响应", res);
      });
      this.queryMagneticDetecter();
      this.addListDialog = false;
    },
    //修改表单提交
    onSubmitEdit() {
      console.log("修改数据", this.editGeo);
      const param = {
        parkId: this.editGeo.parkId,
        magneticDetecterId: this.editGeo.magneticDetecterId,
        //原来的停车场ID
        parkCode: this.oldParkId,
        magneticDetecterCode: this.editGeo.magneticDetecterId,
        magneticDetecterName: this.editGeo.magneticDetecterName,
        sensorId: this.editGeo.sensorId,
        manufacturer: this.editGeo.manufacturer
      };
      this.$homePage.updateMagneticDetecter(param).then(res => {
        console.log("打印响应", res);
        this.queryMagneticDetecter();
      });
      this.editListDialog = false;
    },
    //批量删除监听
    handleSelectionChange(val) {
      this.selectGeoList = val;
      this.idList = [];
      //获取批量删除的停车场Id和地磁车Id对象加入批量删除的列表
      val.forEach((item) => {
        const param = {
          magneticDetecterId: item.magneticDetecterId,
          parkId: item.parkId
        };
        this.idList.push(param);
      });
    },
    // 分页查询方法
    handleCurrentModify(val) {
      this.pageNum = val;
      // 查询列表方法
      this.queryMagneticDetecter();
    },
    //列表查询
    queryMagneticDetecter() {
      const param = {
        "cityCode": this.query.cityCode,
        "districtCode": this.query.districtCode,
        "parkId": this.query.parkId,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$homePage.queryMagneticDetecter(param).then(res => {
        this.geoList = res.data.dataList;
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
        res.data.dataList.forEach((item) => this.cityList.push(item))
      });
    }
  },
  mounted() {
    //初始化列表
    this.queryMagneticDetecter();
    //初始化地市下拉菜单
    this.queryCityList();
  },
  watch: {
    //查询条件监听
    query: {
      handler(newVal) {
        this.cityList.forEach((item) => {
          if (item.name == newVal.cityName) {
            newVal.cityCode = item.code;
            if (item.name != "全部") {
              const params = {
                "columnName": ["district_code", "district_name"],
                "tableName": "t_d_district",
                "whereStr": "city_code = " + item.code
              };
              //初始化区县下拉菜单
              this.$homePage.queryDictData(params).then(res => {
                this.districtList = [
                  {
                    name: "全部",
                    code: ""
                  }
                ]
                res.data.dataList.forEach((item) => this.districtList.push(item))
              });
            } else {
              this.districtList = [
                {
                  name: "全部",
                  code: ""
                }
              ]
            }
          }
        });
        this.districtList.forEach((item) => {
          if (item.name == newVal.districtName) {
            newVal.districtCode = item.code;
            if (item.name != "全部") {
              const param = {
                "columnName": ["park_id", "park_name"],
                "tableName": "t_bim_park",
                "whereStr": "district_code = " + item.code
              };
              //停车场名称下拉菜单
              this.$homePage.queryDictData(param).then(res => {
                this.parkingLotNameList = [
                  {
                    name: "全部",
                    code: ""
                  }
                ]
                res.data.dataList.forEach((item) => this.parkingLotNameList.push(item))
              });
            } else {
              this.parkingLotNameList = [
                {
                  name: "全部",
                  code: ""
                }
              ]
            }
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
    //新增监听
    newGeo: {
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
              this.districtList = []
              res.data.dataList.forEach((item) => this.districtList.push(item))
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
              this.parkingLotNameList = []
              res.data.dataList.forEach((item) => this.parkingLotNameList.push(item))
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
    editGeo: {
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
              this.districtList = []
              res.data.dataList.forEach((item) => this.districtList.push(item))
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
              this.parkingLotNameList = []
              res.data.dataList.forEach((item) => this.parkingLotNameList.push(item))
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
