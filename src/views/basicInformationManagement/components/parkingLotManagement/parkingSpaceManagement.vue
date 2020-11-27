<!--
    停车场管理车位管理
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
        <el-form :inline="true" class="demo-form-inline">
          <div style="display: flex">
            <div class="top-p">请选择停车场:</div>
            <el-form-item>
              <el-select
                      v-model="queryParkId"
                      style="margin-left: 10px"
                      placeholder="请选择停车场"
              >
                <el-option label="全部" value="0"></el-option>
                <el-option
                        v-for="(item, index) in parkingLotList"
                        :label="item.name"
                        :value="item.code"
                        :key="index"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="selectQueryList"
              >查询</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addInletAndOutlet"
              >新增停车场平面(层)</el-button
              >
            </el-form-item>
          </div>
        </el-form>
        <!--        -->
        <el-dialog
                id="add"
                title="新增停车场平面(层)"
                :visible.sync="addListDialogueandoff"
                width="60%"
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
                          v-model="addListDialogueandoffList.parkId"
                          placeholder="请选择停车场"
                  >
                    <el-option
                            v-for="(item, index) in parkingLotList"
                            :label="item.name"
                            :value="item.code"
                            :key="index"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车位数:" class="form-all">
                  <el-input
                          v-model="addListDialogueandoffList.parkSpaceNum"
                          placeholder="请输入车位数"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div><h3>停车场平面（层）信息</h3></div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="停车场平面（层）编号:" class="form-all">
                  <el-input
                          v-model="addListDialogueandoffList.parkLayerId"
                          placeholder="请输入停车场平面（层）编号"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="停车场平面（层）名称:" class="form-all">
                  <el-input
                          v-model="addListDialogueandoffList.parkLayerName"
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
                          v-model="addListDialogueandoffList.remark"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="2">
                <span>停车场图片</span>
              </el-col>
              <el-col :span="8">
                <el-upload
                        class="upload-demo"
                        action="CommonController/uploadFile"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :before-upload="onBeforeUpload"
                        :on-exceed="handleExceed"
                        :data="Cert"
                        :file-list="fileList">
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item label="图片尺寸（像素）:">
                  <el-input
                          v-model="addListDialogueandoffList.imageWidth"
                          placeholder="请输入图片宽度"
                  >
                    <template slot="append">px</template>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                          v-model="addListDialogueandoffList.imageHeight"
                          placeholder="请输入图片高度"
                  >
                    <template slot="append">px</template>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="2">
                <span>车位配置文件</span>
              </el-col>
              <el-col :span="2">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="text"
                >
                  <el-button size="small" type="primary"
                  >点击上传配置文件</el-button
                  >
                </el-upload>
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
                :data="parkLayerList"
                :row-class-name="tableRowClassName"
                ref="selectParkLayerList"
                @selection-change="handleSelectParkLayerList"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }"
                style="width: 100%;"
        >
          <el-table-column type="index" label="选择" align="center" width="80">
            <template slot-scope="scope">
              <el-radio
                      v-model="currentRowId"
                      :label="scope.row.parkLayerId"
                      @change="changeRedio($event, scope.row)"
              >
                <span></span>
              </el-radio>
            </template>
          </el-table-column>
          <el-table-column
                  prop="parkId"
                  label="停车场编号"
                  width="100"
          ></el-table-column>
          <el-table-column
                  prop="parkName"
                  :show-overflow-tooltip="true"
                  label="停车场名称"
          ></el-table-column>
          <el-table-column
                  prop="parkLayerId"
                  :show-overflow-tooltip="true"
                  label="停车场平面(层)编号"
          ></el-table-column>
          <el-table-column
                  prop="parkLayerName"
                  :show-overflow-tooltip="true"
                  label="停车场平面(层)名称"
          ></el-table-column>
          <el-table-column
                  prop="remark"
                  :show-overflow-tooltip="true"
                  label="描述"
          ></el-table-column>
          <el-table-column
                  prop="parkSpaceNum"
                  :show-overflow-tooltip="true"
                  label="车位数"
          ></el-table-column>
          <el-table-column
                  prop="layerMapFile"
                  :show-overflow-tooltip="true"
                  label="平面(层)图文件"
          ></el-table-column>
          <el-table-column
                  prop="parkSpaceLocationFile"
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
                          v-model="editListDialogueandoffList.parkId"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="停车场名称:" class="el-form-item-dialog">
                  <el-input
                          v-model="editListDialogueandoffList.parkName"
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
                          v-model="editListDialogueandoffList.parkLayerId"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                        label="停车场平面(层)名称:"
                        class="el-form-item-dialog"
                >
                  <el-input
                          v-model="editListDialogueandoffList.parkLayerName"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="描述:" class="el-form-item-dialog">
                  <el-input
                          v-model="editListDialogueandoffList.remark"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车位数:" class="el-form-item-dialog">
                  <el-input
                          v-model="editListDialogueandoffList.parkSpaceNum"
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
                          v-model="editListDialogueandoffList.layerMapFile"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                        label="车位位置配置文件:"
                        class="el-form-item-dialog"
                >
                  <el-input
                          v-model="editListDialogueandoffList.parkSpaceLocationFile"
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
        <h2>停车场平面（层）车位配置</h2>
        <el-button type="primary" @click="importData"
        >批量导入车位配置数据</el-button
        >
        <el-table
                :data="parkSpaceList"
                :row-class-name="tableRowClassName"
                ref="selectParkSpaceList"
                @selection-change="handleSelectParkSpaceList"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }"
                style="width: 100%;"
        >
          <el-table-column width="55"></el-table-column>
          <el-table-column
                  prop="parkSpaceId"
                  label="车位号"
                  width="100"
          ></el-table-column>
          <el-table-column
                  prop="belongRegion"
                  :show-overflow-tooltip="true"
                  label="归属区域"
          ></el-table-column>
          <el-table-column
                  prop="parkSpaceDetecterTypeName"
                  :show-overflow-tooltip="true"
                  label="车位检测器类型"
          >
          </el-table-column>
          <el-table-column
                  prop="parkSpaceDetecterId"
                  :show-overflow-tooltip="true"
                  label="车位检测器编号"
          ></el-table-column>
          <el-table-column
                  prop="groundLock"
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
                      v-model="configurationDialogueandoffList.parkSpaceId"
              ></el-input>
            </el-form-item>
            <el-form-item label="归属停车场名称:" class="el-form-item-dialog">
              <el-input
                      v-model="configurationDialogueandoffList.parkName"
              ></el-input>
            </el-form-item>
            <el-form-item
                    label="归属停车场平面（层）编号:"
                    class="el-form-item-dialog"
            >
              <el-input
                      v-model="configurationDialogueandoffList.parkLayerId"
              ></el-input>
            </el-form-item>
            <el-form-item
                    label="归属停车场平面（层）名称:"
                    class="el-form-item-dialog"
            >
              <el-input
                      v-model="configurationDialogueandoffList.parkLayerName"
              ></el-input>
            </el-form-item>
            <el-form-item label="归属区域:" class="el-form-item-dialog">
              <el-input
                      v-model="configurationDialogueandoffList.belongRegion"
              ></el-input>
            </el-form-item>
            <div><h3>配置信息</h3></div>
            <el-form-item label="车位检测器类型:" class="el-form-item-dialog">
              <el-input
                      v-model="
                  configurationDialogueandoffList.parkSpaceDetecterTypeName
                "
              ></el-input>
            </el-form-item>
            <el-form-item label="车位检测器编号:" class="el-form-item-dialog">
              <el-input
                      v-model="configurationDialogueandoffList.parkSpaceDetecterId"
              ></el-input>
            </el-form-item>
            <el-form-item label="地锁编号:" class="el-form-item-dialog">
              <el-input
                      v-model="configurationDialogueandoffList.groundLock"
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
        Cert: {
          upload: 1,
          dir: 'park',
          file:''
        },
        headers: {
          token: localStorage.getItem("token")
        },
        //上传图片
        pictureList: [],
        fileList: [],
        uploadPictureList: [],
        // 查询数据暂存处
        queryParkId: "0",
        //多选后数据暂存
        selectParkLayerList: [],
        // 停车场下拉框数据暂存
        parkingLotList: [],
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
        // 分页
        pageNum: 1,
        pageSize: 10,
        pageTotal: 4,
        // 停车场平面(层)配置列表数据暂存处
        parkLayerList: [],
        // 上列表单选id
        currentRowId: [],
        // XXX停车场平面（层）车位配置列表数据暂存处
        parkSpaceList: [],
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
        addListDialogueandoffList: []
      };
    },
    mounted() {
      this.queryParking();
      this.queryParkLayerList();
      this.queryParkSpaceList();
    },
    methods: {
      onBeforeUpload(file)
      {
        this.Cert.upfile = file
      },
      handleAvatarSuccess() {
        this.fileImgList();
      },
      //删除上传文件
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      //文件上传预览
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(){},
      handleExceed(){},
      // //删除上传图片
      // handleRemovePicture(picture, pictureList) {
      //   console.log(picture, pictureList);
      // },
      // //图片上传预览
      // handlePreviewPicture(picture) {
      //   console.log(picture);
      // },
      //上传图片接口
      uploadPicture(picture) {
        const param = {
          upload: 1,
          dir: "park",
          upfile:picture
        };
        this.$ysParking.uploadFile(param).then(res => {
          this.addListDialogueandoffList.uploadPictureList.push(res.data);
        });
      },
      // 点击新增
      addInletAndOutlet() {
        //提前清空表单中数据
        this.addListDialogueandoffList = {};
        this.addListDialogueandoff = true;
      },
      // 点击保存
      addInfoInsert() {
        console.log("this.pictureList", this.pictureList);
        // return;

        for (let i = 0; i < this.pictureList.length; i++) {
          this.uploadFile(this.pictureList[i]);
        }

        const param = {
          parkId: this.addListDialogueandoffList.parkId,
          parkLayerId: this.addListDialogueandoffList.parkLayerId,
          parkLayerName: this.addListDialogueandoffList.parkLayerName,
          remark: this.addListDialogueandoffList.remark,
          parkSpaceNum: this.addListDialogueandoffList.parkSpaceNum,
          imageHeight: this.addListDialogueandoffList.imageHeight,
          imageWidth: this.addListDialogueandoffList.imageWidth,
          // layerMapFile: this.addListDialogueandoffList.layerMapFile,
          parkSpaceLocationFile: this.addListDialogueandoffList.uploadPictureList
        };
        console.log("上传参数", param);
        console.log("保存后打印出来的数据", this.addListDialogueandoffList);
        this.$ysParking.insertParkLayer(param).then(res => {
          console.log("打印保存的数据", res);
        });
        this.$message({ type: "success", message: "添加成功!" });
        this.queryParkLayerList();
        this.addListDialogueandoff = false;
      },
      // 查询停车场下拉表单
      queryParking() {
        var that =this;
        const param = {
          columnName: ["park_id", "park_name"],
          tableName: "t_bim_park",
          whereStr: "district_code = '321302'"
        };
        this.$ysParking.queryDictData(param).then(res => {
          console.log("下拉表单查询数据显示", res);
          that.parkingLotList = res.data.dataList;
          // res.data.dataList.forEach(item => this.parkingLotList.push(item));
          // console.log("下拉菜单", this.parkingLotList);
        });
      },
      // 上表列表查询
      queryParkLayerList() {
        this.parkLayerList = [];
        const param = {
          pageSize: this.pageSize,
          pageNum: this.pageNum
        };
        this.$ysParking.queryParkLayerList(param).then(res => {
          // console.log("上表接口数据", res);
          this.parkLayerList = res.data.dataList;
          // console.log("上表列表数据", this.parkLayerList);
        });
      },
      // 删除
      deleteListDialogue(row) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
                .then(() => {
                  const param = {
                    parkLayerId: [row.parkLayerId]
                  };
                  console.log(row, row.parkLayerId);
                  this.$ysParking.deleteParkLayer(param).then(res => {
                    // console.log("打印响应", res)
                    this.$message({
                      type: "success",
                      message: "删除成功!"
                    });
                    this.queryParkLayerList();
                  });
                })
                .catch(() => {
                  this.$message({ type: "info", message: "已取消删除" });
                });
      },
      // 切换单选框查询下表列表数据
      changeRedio(event, row) {
        // console.log("event,row:", event, row);
        this.currentRowId = event;
        this.parkSpaceList = [];
        const param = {
          parkId: row.parkId,
          parkLayerId: row.parkLayerId,
          pageNum: this.pageNum,
          pageSize: 5
        };
        this.$ysParking.queryParkSpaceList(param).then(res => {
          // console.log("下表接口数据", res);
          this.parkSpaceList = res.data.dataList;
          // console.log("下表列表数据", this.parkSpaceList);
        });
      },
      // 下表列表查询
      queryParkSpaceList() {
        this.parkSpaceList = [];
        const param = {
          parkId: this.parkId,
          parkLayerId: this.parkLayerId,
          pageNum: this.pageNum,
          pageSize: 5
        };
        this.$ysParking.queryParkSpaceList(param).then(res => {
          // console.log("下表接口数据", res);
          this.parkSpaceList = res.data.dataList;
          // console.log("下表列表数据", this.parkSpaceList);
        });
      },

      // 拿到上表多选数据
      handleSelectParkLayerList(val) {
        this.selectParkLayerList = val;
      },

      //拿到下表多选数据
      handleSelectParkSpaceList(val) {
        this.selectParkSpaceList = val;
      },
      // 分页
      handleCurrentModify(val) {
        this.pageNum = val;
      },
      // 斑马纹样式
      // eslint-disable-next-line no-unused-vars
      tableRowClassName({ rowIndex }) {
        if (rowIndex % 2 === 1) {
          return "successRow11";
        } else if (rowIndex % 2 === 0) {
          return "successSecond";
        }
        return "";
      },
      // 点击查询调用的方法
      selectQueryList() {
        console.log("打印出来点击查询后所产生的值", this.queryParkId);
        if (this.queryParkId != 0) {
          this.parkLayerList = [];
          const param = {
            parkId: this.queryParkId,
            pageSize: this.pageSize,
            pageNum: this.pageNum
          };
          this.$ysParking.queryParkLayerList(param).then(res => {
            this.parkLayerList = res.data.dataList;
          });
        } else {
          this.queryParkLayerList();
        }
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
      // 点击导入调用的方法
      importData() {
        console.log("点击导入的方法");
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
    /*display: flex;*/
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
  .top-p {
    width: 100px;
    height: 30px;
    /*background-color: red;*/
    margin-top: 10px;
  }
  .avatar-uploader {
  }
</style>
