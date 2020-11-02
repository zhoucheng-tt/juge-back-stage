<!--
    停车场运营收入分析
 * @Author: 王思远
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="all">
    <h2 class="h2">停车场平面(层)配置</h2>
    <!--上半部分查询-->
    <div class="up">
      <el-row>
        <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
          <el-col :span="5">
            <el-form-item label="停车场：" class="el-form-item-dialog1">
              <el-select
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
          </el-col>
          <el-form-item>
            <el-button type="primary" @click="selectQueryList">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addInletAndOutlet"
              >新增停车场平面(层)</el-button
            >
          </el-form-item>
        </el-form>
        <el-dialog
          id="add"
          title="新增停车场平面(层)"
          :visible.sync="addListDialogueandoff"
        >
          <el-form
            label-width="170px"
            :inline="true"
            :model="addListDialogueandoffList"
            class="demo-form-inline"
          >
            <div><h3>归属停车场信息</h3></div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="归属停车场:" class="form-all">
                  <el-select
                    v-model="addListDialogueandoffList.TingNum"
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
              </el-col>
            </el-row>
            <div><h3>停车场平面（层）信息</h3></div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="停车场平面（层）编号:" class="form-all">
                  <el-input
                    v-model="addListDialogueandoffList.parkingLotLayerNumber"
                    placeholder="请输入停车场平面（层）编号"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="停车场平面（层）名称:" class="form-all">
                  <el-input
                    v-model="addListDialogueandoffList.parkingLotLayerName"
                    placeholder="请输入停车场平面（层）名称"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item label="停车场平面（层）描述:">
                  <el-input
                    type="textarea"
                    style="width: 720px"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="addListDialogueandoffList.describe"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="14">
                <el-form-item label="停车场图片:">
                  <el-input
                    v-model="addListDialogueandoffList.layerPicture"
                    style="width: 400px"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-button type="info" @click="choosePicture()" size="small"
                  >选择</el-button
                >
              </el-col>
              <el-col :span="2">
                <el-button type="info" @click="uploadPicture()" size="small"
                  >上传</el-button
                >
              </el-col>
              <el-col :span="2">
                <el-button type="info" @click="viewPicture()" size="small"
                  >预览</el-button
                >
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item label="图片尺寸（像素）:">
                  <el-input
                    v-model="addListDialogueandoffList.pictureWidth"
                    placeholder="请输入图片宽度"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    v-model="addListDialogueandoffList.pictureHight"
                    placeholder="请输入图片高度"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="14">
                <el-form-item label="车位位置配置文件:">
                  <el-input
                    v-model="
                      addListDialogueandoffList.parkingSpaceConfigurationDocument
                    "
                    style="width: 400px"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-button type="info" @click="chooseDocument()" size="small"
                  >选择</el-button
                >
              </el-col>
              <el-col :span="2">
                <el-button type="info" @click="uploadDocument()" size="small"
                  >上传</el-button
                >
              </el-col>
              <el-col :span="2">
                <el-button type="info" @click="viewDocument()" size="small"
                  >预览</el-button
                >
              </el-col>
            </el-row>
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
      <div>
        <el-table
          :data="parkingLotLayout"
          :row-class-name="tableRowClassName"
          ref="selectParkingLotLayout"
          @selection-change="handleSelectParkingLotLayout"
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
          <el-table-column
            prop="parkingLotNumber"
            label="停车场编号"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="parkingLotName"
            :show-overflow-tooltip="true"
            label="停车场名称"
          >
          </el-table-column>
          <el-table-column
            prop="parkingLotLayerNumber"
            :show-overflow-tooltip="true"
            label="停车场平面(层)编号"
          >
          </el-table-column>
          <el-table-column
            prop="parkingLotLayerName"
            :show-overflow-tooltip="true"
            label="停车场平面(层)名称"
          ></el-table-column>
          <el-table-column
            prop="describe"
            :show-overflow-tooltip="true"
            label="描述"
          ></el-table-column>
          <el-table-column
            prop="parkingSpaceNumber"
            :show-overflow-tooltip="true"
            label="车位数"
          ></el-table-column>
          <el-table-column
            prop="layerPicture"
            :show-overflow-tooltip="true"
            label="平面(层)图文件"
          ></el-table-column>
          <el-table-column
            prop="parkingSpaceConfigurationDocument"
            :show-overflow-tooltip="true"
            label="车位位置配置文件"
          ></el-table-column>
          <el-table-column :show-overflow-tooltip="true" label="操作">
            <template slot-scope="scope">
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
        <!--<el-pagination style="position: absolute;right:4%;margin-top:20px" background
                       layout="total, prev, pager, next, jumper" @current-change="handleCurrentModify"
                       :current-page="pageNum"
                       :total="pageTotal" :page-size="pageSize">
        </el-pagination>-->
        <!-- 信息修改点击弹出框 -->
        <el-dialog
          title="修改停车场平面(层)配置管理"
          :visible.sync="editListDialogueandoff"
        >
          <el-form
            :inline="true"
            :model="editListDialogueandoffList"
            class="demo-form-inline"
            label-position="left"
          >
            <el-row>
              <el-col :span="12">
                <el-form-item label="停车场编号:" class="el-form-item-dialog">
                  <el-input
                    v-model="editListDialogueandoffList.parkingLotNumber"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="停车场名称:" class="el-form-item-dialog">
                  <el-input
                    v-model="editListDialogueandoffList.parkingLotName"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="停车场平面(层)编号:"
                  class="el-form-item-dialog"
                >
                  <el-input
                    v-model="editListDialogueandoffList.parkingLotLayerNumber"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="停车场平面(层)名称:"
                  class="el-form-item-dialog"
                >
                  <el-input
                    v-model="editListDialogueandoffList.parkingLotLayerName"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="描述:" class="el-form-item-dialog">
                  <el-input
                    v-model="editListDialogueandoffList.describe"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车位数:" class="el-form-item-dialog">
                  <el-input
                    v-model="editListDialogueandoffList.parkingSpaceNumber"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="平面(层)图文件:"
                  class="el-form-item-dialog"
                >
                  <el-input
                    v-model="editListDialogueandoffList.layerPicture"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="车位位置配置文件:"
                  class="el-form-item-dialog"
                >
                  <el-input
                    v-model="
                      editListDialogueandoffList.parkingSpaceConfigurationDocument
                    "
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="editListDialogueandoff = false">取 消</el-button>
            <el-button type="primary" @click="InfoInsert">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div>
        <h2>XXX停车场平面（层）车位配置</h2>
        <el-form-item>
          <el-button type="primary" @click="importData"
            >批量导入车位配置数据</el-button
          >
        </el-form-item>
        <el-table
          :data="parkingSpaceConfiguration"
          :row-class-name="tableRowClassName"
          ref="selectParkingSpaceConfiguration"
          @selection-change="handleSelectParkingSpaceConfiguration"
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
          <el-table-column width="55"> </el-table-column>
          <el-table-column
            prop="parkingSpaceNumber"
            label="车位号"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="attributionArea"
            :show-overflow-tooltip="true"
            label="归属区域"
            width=""
          >
          </el-table-column>
          <el-table-column
            prop="parkingDetectorType"
            :show-overflow-tooltip="true"
            label="车位检测器类型"
            width=""
          >
          </el-table-column>
          <el-table-column
            prop="parkingDetectorNumber"
            :show-overflow-tooltip="true"
            label="车位检测器编号"
          ></el-table-column>
          <el-table-column
            prop="parkingLockNumber"
            :show-overflow-tooltip="true"
            label="地锁编号"
          ></el-table-column>
          <el-table-column :show-overflow-tooltip="true" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="configurationDialogue(scope.row)"
                type="text"
                size="small"
                >配置</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- <el-pagination style="position: absolute;right:4%;margin-top:20px" background
                        layout="total, prev, pager, next, jumper" @current-change="handleCurrentModify"
                        :current-page="pageNum"
                        :total="pageTotal" :page-size="pageSize">
         </el-pagination>-->
        <!-- 信息配置点击弹出框 -->
        <el-dialog title="配置车位" :visible.sync="configurationDialogueandoff">
          <el-form
            :inline="true"
            :model="configurationDialogueandoffList"
            class="demo-form-inline"
          >
            <div><h3>车位信息</h3></div>
            <el-form-item label="车位号:" class="el-form-item-dialog">
              <el-input
                v-model="configurationDialogueandoffList.parkingSpaceNumber"
              ></el-input>
            </el-form-item>
            <el-form-item label="归属停车场名称:" class="el-form-item-dialog">
              <el-input
                v-model="configurationDialogueandoffList.parkingLotName"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="归属停车场平面（层）编号:"
              class="el-form-item-dialog"
            >
              <el-input
                v-model="configurationDialogueandoffList.parkingLotLayerNumber"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="归属停车场平面（层）名称:"
              class="el-form-item-dialog"
            >
              <el-input
                v-model="configurationDialogueandoffList.parkingLotLayerName"
              ></el-input>
            </el-form-item>
            <el-form-item label="归属区域:" class="el-form-item-dialog">
              <el-input
                v-model="configurationDialogueandoffList.attributionArea"
              ></el-input>
            </el-form-item>
            <div><h3>配置信息</h3></div>
            <el-form-item label="车位检测器类型:" class="el-form-item-dialog">
              <el-input
                v-model="configurationDialogueandoffList.parkingDetectorType"
              ></el-input>
            </el-form-item>
            <el-form-item label="车位检测器编号:" class="el-form-item-dialog">
              <el-input
                v-model="configurationDialogueandoffList.parkingDetectorNumber"
              ></el-input>
            </el-form-item>
            <el-form-item label="地锁编号:" class="el-form-item-dialog">
              <el-input
                v-model="configurationDialogueandoffList.parkingLockNumber"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="configurationDialogueandoff = false"
              >取 消</el-button
            >
            <el-button type="primary" @click="InfoInsert">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 查询数据暂存处
      upQueryList: { TingNum: "" },
      //多选后数据暂存
      selectParkingLotLayout: [],
      // 停车场下拉框数据暂存
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
      // 出入口下拉框数据暂存
      entryAndExitList: [
        {
          entryAndExit: "入口",
          id: "1"
        },
        {
          entryAndExit: "出口",
          id: "2"
        }
      ],
      /*      // 分页
            pageNum: 1,
            pageSize: 10,
            pageTotal: 4,*/
      // 停车场平面(层)配置列表数据暂存处
      parkingLotLayout: [
        {
          parkingLotNumber: "1",
          parkingLotName: "停车场",
          parkingLotLayerNumber: "不知道",
          parkingLotLayerName: "入口",
          describe: "02",
          parkingSpaceNumber: "不知道",
          layerPicture: "无",
          parkingSpaceConfigurationDocument: "不知"
        },
        {
          parkingLotNumber: "1",
          parkingLotName: "停车场",
          parkingLotLayerNumber: "不知道",
          parkingLotLayerName: "入口",
          describe: "02",
          parkingSpaceNumber: "不知道",
          layerPicture: "无",
          parkingSpaceConfigurationDocument: "不知"
        }
      ],
      // XXX停车场平面（层）车位配置列表数据暂存处
      parkingSpaceConfiguration: [
        {
          parkingSpaceNumber: "01",
          attributionArea: "不知",
          parkingDetectorType: "不知",
          parkingDetectorNumber: "02",
          parkingLockNumber: "03"
        },
        {
          parkingSpaceNumber: "01",
          attributionArea: "不知",
          parkingDetectorType: "不知",
          parkingDetectorNumber: "02",
          parkingLockNumber: "03"
        }
      ],
      // 修改弹窗显示和隐藏属性
      editListDialogueandoff: false,
      // 修改弹窗数据暂存
      editListDialogueandoffList: [],
      // 配置信息显示和隐藏属性
      configurationDialogueandoff: false,
      // 配置信息数据暂存
      configurationDialogueandoffList: [],
      // 新增弹窗显示和隐藏属性
      addListDialogueandoff: false,
      // 新增数据暂存数组
      addListDialogueandoffList: {
        TingNum: "",
        parkingLotLayerNumber: "",
        parkingLotLayerName: "",
        describe: "",
        layerPicture: "",
        pictureWidth: "",
        pictureHeight: "",
        parkingSpaceConfigurationDocument: ""
      }
    };
  },
  methods: {
    // 拿到多选数据
    handleSelectParkingLotLayout(val) {
      this.selectParkingLotLayout = val;
    },
    // 分页
    handleCurrentModify(val) {
      this.pageNum = val;
    },
    //选择停车场图片
    choosePicture() {
      console.log("选择图片");
    },
    //上传图片
    uploadPicture() {
      console.log("上传图片");
    },
    //预览图片
    viewPicture() {
      console.log("预览图片");
    },
    //选择停车场图片
    chooseDocument() {
      console.log("选择文件");
    },
    //上传图片
    uploadDocument() {
      console.log("上传文件");
    },
    //预览图片
    viewDocument() {
      console.log("预览文件");
    },
   /* // 斑马纹样式
    // eslint-disable-next-line no-unused-vars
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "successRow11";
      } else if (rowIndex % 2 === 0) {
        return "successSecond";
      }
      return "";
    },*/
    // 点击查询调用的方法
    selectQueryList() {
      console.log("打印出来点击查询后所产生的值", this.upQueryList);
    },
    // 点击新增
    addInletAndOutlet() {
      //提前清空表单中数据
      this.addListDialogueandoffList = {
        TingNum: "",
        parkingLotLayerNumber: "",
        parkingLotLayerName: "",
        describe: "",
        layerPicture: "",
        pictureWidth: "",
        pictureHeight: "",
        parkingSpaceConfigurationDocument: ""
      };
      this.addListDialogueandoff = true;
      // this.addListDialogueandoffList = row
    },
    // 点击保存
    addInfoInsert() {
      console.log("保存后打印出来的数据", this.addListDialogueandoffList);
      this.addListDialogueandoff = false;
    },
    // 点击修改按钮执行的操作
    editListDialogue(row) {
      console.log(row);
      this.editListDialogueandoff = true;
      this.editListDialogueandoffList = row;
    },
    // 点击确定
    InfoInsert() {
      console.log("确定后打印出来的数据", this.editListDialogueandoffList);
      this.editListDialogueandoff = false;
    },
    // 点击配置
    configurationDialogue(row) {
      console.log(row);
      this.configurationDialogueandoff = true;
      this.configurationDialogueandoffList = row;
    }
  }
};
</script>
<style lang="scss" scoped>
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* 上半部分查询部分 */
  .up {
    width: 100%;
    height: 15%;
    float: left;
  }
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
  height: 0;
}

/* 设置弹出框样式 */
/deep/ .el-dialog {
  width: 50%;
}

/* 弹出框内表单样式控制 */
.el-form-item-dialog {
  width: 100%;
}

.el-form-item-dialog1 {
  width: 100%;
  margin-left: -10%;
}

/*设置修改表单内文字*/
/deep/ .el-form-item__label {
  width: 30%;
}

#add {
  height: auto;
}

.h2 {
  padding: 0;
  margin: 0;
}

.form-all {
  width: 100%;
}
</style>
