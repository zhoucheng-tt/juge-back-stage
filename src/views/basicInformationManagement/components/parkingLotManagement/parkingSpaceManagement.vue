<!--
    停车场管理车位管理
 * @Author: 周成
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="all">
    <div class="backgroundLine"></div>
    <b style="font-size: 18px">停车场平面(层)配置</b>
    <!--上半部分查询-->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="停车场：">
          <el-select
            size="small"
            style="width: 160px"
            v-model="upQueryList.queryParkId"
            placeholder="请选择停车场"
          >
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="(item, index) in parkingLotList"
              :label="item.name"
              :value="item.code"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="queryFormList"
            >查询
          </el-button>
          <el-button size="small" @click="resetQuery">重置 </el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <el-button type="primary" size="small" @click="addInletAndOutlet"
          >新增停车场平面(层)
        </el-button>
      </el-row>
    </div>
    <div class="backgroundLine"></div>
    <!--下半部分列表-->
    <div class="down">
      <el-table
        :data="parkLayerList"
        ref="selectParkLayerList"
        stripe
        @row-click="handleSelection"
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
        <!--        <el-table-column type="index" label="选择" align="center" width="80">-->
        <!--          <template slot-scope="scope">-->
        <!--            <el-radio-->
        <!--                v-model="currentRowId"-->
        <!--                :label="scope.row.parkLayerId"-->
        <!--                @change="changeRedio($event, scope.row)"-->
        <!--            >-->
        <!--              <span></span>-->
        <!--            </el-radio>-->
        <!--          </template>-->
        <!--        </el-table-column>-->
        <!--          <el-table-column-->
        <!--                  prop="parkId"-->
        <!--                  label="停车场编号"-->
        <!--                  width="100"-->
        <!--          ></el-table-column>-->
        <el-table-column
          prop="parkName"
          :show-overflow-tooltip="true"
          label="停车场名称"
        ></el-table-column>
        <!--          <el-table-column-->
        <!--                  prop="parkLayerId"-->
        <!--                  :show-overflow-tooltip="true"-->
        <!--                  label="停车场平面(层)编号"-->
        <!--          ></el-table-column>-->
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
          label="车位数(个)"
        ></el-table-column>
        <!--        <el-table-column-->
        <!--            prop="layerMapFile"-->
        <!--            :show-overflow-tooltip="true"-->
        <!--            label="平面(层)图文件"-->
        <!--        ></el-table-column>-->
        <!--        <el-table-column-->
        <!--            prop="parkSpaceLocationFile"-->
        <!--            :show-overflow-tooltip="true"-->
        <!--            label="车位位置配置文件"-->
        <!--        ></el-table-column>-->
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
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
      <div style="float: right;background-color: white">
        <el-pagination
          :current-page="pageNumUp"
          :page-size="pageSizeUp"
          :total="pageTotalUp"
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentModifyUp"
        >
        </el-pagination>
      </div>
    </div>
    <div class="backgroundLine"></div>
    <div style=";margin-top: 1%">
      <b style="font-size: 18px">停车场平面(层)车位配置</b>
    </div>
    <div class="up-1">
      <el-button
        type="primary"
        size="small"
        style="margin-left: 1%;margin-top: 0.5%"
        @click="importData"
        >批量导入车位配置数据
      </el-button>
    </div>
    <div class="backgroundLine"></div>
    <div class="down-2">
      <el-table
        :data="parkSpaceList"
        ref="selectParkSpaceList"
        stripe
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
        <el-table-column width="55"></el-table-column>
        <el-table-column prop="parkSpaceId" label="车位号"></el-table-column>
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
        <!--          <el-table-column-->
        <!--                  prop="parkSpaceDetecterId"-->
        <!--                  :show-overflow-tooltip="true"-->
        <!--                  label="车位检测器编号"-->
        <!--          ></el-table-column>-->
        <!--          <el-table-column-->
        <!--                  prop="groundLock"-->
        <!--                  :show-overflow-tooltip="true"-->
        <!--                  label="地锁编号"-->
        <!--          ></el-table-column>-->
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="configurationDialogue(scope.row)"
              type="text"
              size="small"
              >查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right;">
        <el-pagination
          :current-page="pageNumDown"
          :page-size="pageSizeDown"
          :total="pageTotalDown"
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentModifyDown"
        >
        </el-pagination>
      </div>
      <!--     新增停车场平面弹窗   -->
      <el-dialog
        id="add"
        title="新增停车场平面(层)"
        :visible.sync="addListDialogueandoff"
        width="50%"
      >
        <el-form
          label-width="170px"
          :inline="true"
          :model="addListDialogueandoffList"
          :rules="addListDiaRules"
        >
          <div><h3>归属停车场信息</h3></div>
          <el-row>
            <el-col :span="12">
              <el-form-item label="归属停车场:" class="form-all" prop="parkId">
                <el-select
                  style="width: 200px"
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
              <el-form-item
                label="车位数:"
                class="form-all"
                prop="parkSpaceNum"
              >
                <el-input
                  v-model="addListDialogueandoffList.parkSpaceNum"
                  placeholder="请输入车位数"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <div><h3>停车场平面（层）信息</h3></div>
          <el-row>
            <!--            <el-col :span="12">-->
            <!--              <el-form-item-->
            <!--                  label="停车场平面（层）编号:"-->
            <!--                  class="form-all"-->
            <!--                  prop="parkLayerId"-->
            <!--              >-->
            <!--                <el-input-->
            <!--                    v-model="addListDialogueandoffList.parkLayerId"-->
            <!--                    placeholder="请输入停车场平面（层）编号"-->
            <!--                ></el-input>-->
            <!--              </el-form-item>-->
            <!--            </el-col>-->
            <el-col :span="12">
              <el-form-item
                label="停车场平面（层）名称:"
                class="form-all"
                prop="parkLayerName"
              >
                <el-input
                  v-model="addListDialogueandoffList.parkLayerName"
                  placeholder="请输入停车场平面（层）名称"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="停车场平面（层）描述:">
                <el-input
                  placeholder="请输入内容"
                  v-model="addListDialogueandoffList.remark"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--          <el-row>-->
          <!--            <el-col>-->
          <!--              <el-form-item label="停车场平面（层）描述:">-->
          <!--                <el-input-->
          <!--                    style="width: 670px"-->
          <!--                    placeholder="请输入内容"-->
          <!--                    v-model="addListDialogueandoffList.remark"-->
          <!--                >-->
          <!--                </el-input>-->
          <!--              </el-form-item>-->
          <!--            </el-col>-->
          <!--          </el-row>-->
          <!--          <el-row>-->
          <!--            <el-col :span="2">-->
          <!--              <span>停车场图片</span>-->
          <!--            </el-col>-->
          <!--            <el-col :span="8">-->
          <!--              <el-upload-->
          <!--                  class="upload-demo"-->
          <!--                  action="/e-parking-web/CommonController/uploadFile"-->
          <!--                  :on-preview="handlePreview"-->
          <!--                  :on-remove="handleRemove"-->
          <!--                  :before-remove="beforeRemove"-->
          <!--                   multiple-->
          <!--                  :limit="3"-->
          <!--                  :before-upload="onBeforeUpload"-->
          <!--                  :on-exceed="handleExceed"-->
          <!--                  :data="Cert"-->
          <!--                  :file-list="fileList"-->
          <!--              >-->
          <!--                <el-button size="small" type="primary">点击上传</el-button>-->
          <!--              </el-upload>-->
          <!--            </el-col>-->
          <!--          </el-row>-->
          <!--          <el-row>-->
          <!--            <el-col>-->
          <!--              <el-form-item label="图片尺寸（像素）:">-->
          <!--                <el-input-->
          <!--                    v-model="addListDialogueandoffList.imageWidth"-->
          <!--                    placeholder="请输入图片宽度"-->
          <!--                >-->
          <!--                  <template slot="append">px</template>-->
          <!--                </el-input>-->
          <!--              </el-form-item>-->
          <!--              <el-form-item>-->
          <!--                <el-input-->
          <!--                    v-model="addListDialogueandoffList.imageHeight"-->
          <!--                    placeholder="请输入图片高度"-->
          <!--                >-->
          <!--                  <template slot="append">px</template>-->
          <!--                </el-input>-->
          <!--              </el-form-item>-->
          <!--            </el-col>-->
          <!--          </el-row>-->
          <el-row>
            <!--            <el-col :span="3">-->
            <!--              <span>车位配置文件</span>-->
            <!--            </el-col>-->
            <!--            <el-col :span="2">-->
            <!--              <el-upload-->
            <!--                  class="upload-demo"-->
            <!--                  action="https://jsonplaceholder.typicode.com/posts/"-->
            <!--                  :on-preview="handlePreview"-->
            <!--                  :on-remove="handleRemove"-->
            <!--                  :file-list="fileList"-->
            <!--                  list-type="text"-->
            <!--              >-->
            <!--                <el-button size="small" type="primary"-->
            <!--                >点击上传配置文件-->
            <!--                </el-button-->
            <!--                >-->
            <!--              </el-upload>-->
            <!--            </el-col>-->
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--            <el-button @click="addListDialogueandoff = false">取 消</el-button>-->
          <el-button type="primary" @click="addInfoInsert">保 存</el-button>
        </div>
      </el-dialog>
      <!-- 信息修改点击弹出框 -->
      <el-dialog
        title="修改停车场平面(层)配置管理"
        :visible.sync="editListDialogueandoff"
        width="50%"
        @close="queryParkLayerList"
      >
        <el-form
          :inline="true"
          :model="editListDialogueandoffList"
          label-position="right"
        >
          <el-row>
            <!--              <el-col :span="12">-->
            <!--                <el-form-item label="停车场编号:" >-->
            <!--                  <el-input-->
            <!--                          v-model="editListDialogueandoffList.parkId"-->
            <!--                  ></el-input>-->
            <!--                </el-form-item>-->
            <!--              </el-col>-->
            <el-col :span="12">
              <el-form-item label="归属停车场:" label-width="150px">
                <el-select
                  style="width: 200px"
                  v-model="editListDialogueandoffList.parkId"
                  placeholder="请选择停车场"
                  disabled
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

            <!--              <el-col :span="12">-->
            <!--                <el-form-item-->
            <!--                        label="停车场平面(层)编号:"-->
            <!--                        -->
            <!--                >-->
            <!--                  <el-input-->
            <!--                          v-model="editListDialogueandoffList.parkLayerId"-->
            <!--                  ></el-input>-->
            <!--                </el-form-item>-->
            <!--              </el-col>-->
            <el-col :span="12">
              <el-form-item label="停车场平面(层)名称:" label-width="150px">
                <el-input
                  v-model="editListDialogueandoffList.parkLayerName"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-col :span="12">
            <el-form-item label="描述:" label-width="150px">
              <el-input v-model="editListDialogueandoffList.remark"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车位数:" label-width="150px">
              <el-input
                v-model="editListDialogueandoffList.parkSpaceNum"
              ></el-input>
            </el-form-item>
          </el-col>
          <!--            <el-col :span="12">-->
          <!--              <el-form-item label="平面(层)图文件:" label-width="150px">-->
          <!--                <el-input-->
          <!--                    v-model="editListDialogueandoffList.layerMapFile"-->
          <!--                ></el-input>-->
          <!--              </el-form-item>-->
          <!--            </el-col>-->
          <!--            <el-col :span="12">-->
          <!--              <el-form-item label="车位位置配置文件:" label-width="150px">-->
          <!--                <el-input-->
          <!--                    v-model="editListDialogueandoffList.parkSpaceLocationFile"-->
          <!--                ></el-input>-->
          <!--              </el-form-item>-->
          <!--            </el-col>-->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--            <el-button @click="editListDialogueandoff = false">取 消</el-button>-->
          <el-button type="primary" @click="InfoInsert">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 信息配置点击弹出框 -->
      <el-dialog title="配置车位" :visible.sync="configurationDialogueandoff">
        <el-form
          :inline="true"
          :model="configurationDialogueandoffList"
          width="50%"
        >
          <div><h3>车位信息</h3></div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="车位号:" label-width="150px">
                <el-input
                  v-model="configurationDialogueandoffList.parkSpaceId"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="归属停车场名称:" label-width="150px">
                <el-input
                  v-model="configurationDialogueandoffList.parkName"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="归属区域:" label-width="150px">
                <el-input
                  v-model="configurationDialogueandoffList.belongRegion"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--            <el-form-item-->
          <!--                    label="归属停车场平面（层）编号:"-->
          <!--                    -->
          <!--            >-->
          <!--              <el-input-->
          <!--                      v-model="configurationDialogueandoffList.parkLayerId"-->
          <!--              ></el-input>-->
          <!--            </el-form-item>-->
          <div><h3>配置信息</h3></div>
          <el-row style="padding-top: 20px">
            <el-col :span="12">
              <el-form-item label="车位检测器类型:" label-width="150px">
                <el-input
                  v-model="
                    configurationDialogueandoffList.parkSpaceDetecterTypeName
                  "
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--            <el-form-item label="车位检测器编号:" >-->
          <!--              <el-input-->
          <!--                      v-model="configurationDialogueandoffList.parkSpaceDetecterId"-->
          <!--              ></el-input>-->
          <!--            </el-form-item>-->
          <!--            <el-form-item label="地锁编号:">-->
          <!--              <el-input-->
          <!--                      v-model="configurationDialogueandoffList.groundLock"-->
          <!--              ></el-input>-->
          <!--            </el-form-item>-->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--            <el-button @click="configurationDialogueandoff = false"-->
          <!--              >取 消</el-button-->
          <!--            >-->
          <el-button @click="InfoInsert">返 回</el-button>
        </div>
      </el-dialog>
      <!--      导入弹框-->
      <el-dialog :visible.sync="importDataOff" title="导入数据" width="40%">
        <!-- style="text-align: center;" -->
        <el-upload
          ref="upload"
          :auto-upload="false"
          :file-list="fileList"
          :http-request="myUpload"
          :limit="1"
          :on-change="addFile"
          :on-exceed="handleExceed"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :show-file-list="true"
          accept=".xls, .xlsx"
          action=""
          class="upload-demo"
          style="text-align: center;"
        >
          <el-row
            slot="tip"
            class="el-upload__tip"
            style="font-size:10px;color:#ff0000;margin-top:30px;"
          >
            请下载模板文件后上传!
          </el-row>
          <el-button size="small" style="margin-left: 15px" type="primary">
            <a
              :href="templateDl"
              class="download"
              download=""
              style="color: #ffffff;text-decoration:none"
              >模板下载</a
            >
          </el-button>

          <el-button slot="trigger" size="small" type="primary"
            >选择文件
          </el-button>
        </el-upload>

        <span slot="footer" class="dialog-footer">
          <el-button @click="importDataOff = false">取 消</el-button>
          <el-button type="primary" @click="confimImportBatch">导 入</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { BASE_API } from "@/utils/config";

export default {
  data() {
    return {
      selectedLayerId: "",
      templateDl: "",
      importDataOff: false,
      addListDiaRules: {
        parkId: [
          {
            required: true,
            message: "请输入归属停车场",
            trigger: "change"
          }
        ],
        parkSpaceNum: [
          {
            required: true,
            message: "请输入车位数",
            trigger: "blur"
          }
        ],
        parkLayerId: [
          {
            required: true,
            message: "请输入停车场平面（层）编号",
            trigger: "blur"
          }
        ],
        parkLayerName: [
          {
            required: true,
            message: "请输入停车场平面（层）名称",
            trigger: "blur"
          }
        ]
      },
      //查询绑定
      upQueryList: { queryParkId: "" },
      // Cert: {
      //   upload: 1,
      //   dir: "park"
      // },
      // headers: {
      //   token: localStorage.getItem("token")
      // },
      //上传图片
      // pictureList: [],
      fileList: [],
      // uploadPictureList: [],
      // 查询数据暂存处
      queryParkId: "0",
      //多选后数据暂存
      selectParkLayerList: [],
      // 停车场下拉框数据暂存
      parkingLotList: [],
      // 分页
      pageNumUp: 1,
      pageSizeUp: 5,
      pageTotalUp: 1,
      pageNumDown: 1,
      pageSizeDown: 5,
      pageTotalDown: 4,
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
      addListDialogueandoffList: [],
      selectedParkId: ""
    };
  },
  mounted() {
    const param = {
      template: "chewei"
    };
    this.templateDl =
      BASE_API +
      "CommonController/downloadResource?jsonStr=" +
      encodeURIComponent(JSON.stringify(param));
    this.queryParking();
    this.queryParkLayerList();
    this.queryParkSpaceList();
  },
  watch: {
    selectedLayerId: {
      handler(newVal) {
        this.queryParkSpaceList(newVal);
      }
    }
  },

  methods: {
    //查询按钮
    queryFormList() {
      this.pageNum = 1;
      this.queryParkLayerList();
    },
    handleSelection(row) {
      this.selectedLayerId = row.parkLayerId;
      this.selectedParkId = row.parkId;
    },
    //处理导入
    addFile(file, fileList) {
      console.log(file, fileList);

      if (!(file.name.endsWith("xls") || file.name.endsWith("xlsx"))) {
        this.fileList = [];
        this.$message.warning(`文件格式有误,请选择正确的Excel文件`);
      }
    },
    confimImportBatch() {
      this.$refs.upload.submit();
      this.importDataOff = false;

      this.queryParkSpaceList(this.selectedLayerId);
    },
    myUpload(content) {
      let _self = this;
      // 1.导入
      var FileController = "";
      const param = {
        parkId: this.selectedParkId,
        parkLayerId: this.selectedLayerId
      };
      FileController =
        BASE_API +
        "ParkingSpaceController/upload?jsonStr=" +
        encodeURIComponent(JSON.stringify(param));
      console.log(FileController);
      //创建空对象，通过append方法添加数据
      var form = new FormData();
      form.append("file", content.file);
      var xhr = new XMLHttpRequest();
      //状态改变回调方法
      xhr.onreadystatechange = onloadFun;
      //使用open()方法启动一个请求以备发送,请求类型，请求的URL,第三个参数是否为异步请求
      xhr.open("POST", FileController, true);
      xhr.send(form);
      function onloadFun() {
        // 0 － （未初始化）还没有调用send()方法
        // 1 － （载入）已调用send()方法，正在发送请求
        // 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
        // 3 － （交互）正在解析响应内容
        // 4 － （完成）响应内容解析完成，可以在客户端调用了
        if (xhr.readyState == 4 && xhr.status == 200) {
          //  请求结束后，执行将响应主体返回的文本赋给资源基本信息
          var resText = JSON.parse(xhr.responseText);
          console.log(resText);
          if (resText.resultCode === "2000") {
            _self.fileList = [];
            _self.$message({
              message: "导入成功",
              type: "success"
            });
            _self.importContainerDia = false;
            _self.queryParkLayerList();
          } else {
            _self.$message.error({
              message: "对不起！文件上传失败",
              type: "error"
            });
          }
          // loading.close();
        }
      }
    },
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    // onBeforeUpload(file) {
    //   this.Cert.upfile = file;
    // },
    // handleAvatarSuccess() {
    //   this.fileImgList();
    // },
    //删除上传文件
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    //文件上传预览
    handlePreview(file) {
      console.log(file);
    },
    // beforeRemove() {
    // },
    handleExceed() {
      this.$message.warning(`对不起,一次仅限上传一个文件！`);
    },
    // //删除上传图片
    // handleRemovePicture(picture, pictureList) {
    //   console.log(picture, pictureList);
    // },
    // //图片上传预览
    // handlePreviewPicture(picture) {
    //   console.log(picture);
    // },
    // //上传图片接口
    // uploadPicture(picture) {
    //   const param = {
    //     upload: 1,
    //     dir: "park",
    //     upfile: picture
    //   };
    //   this.$ysParking.uploadFile(param).then(res => {
    //     this.addListDialogueandoffList.uploadPictureList.push(res.data);
    //   });
    // },
    // 点击新增
    addInletAndOutlet() {
      //提前清空表单中数据
      this.addListDialogueandoffList = {};
      this.addListDialogueandoff = true;
    },
    // 点击保存
    addInfoInsert() {
      // console.log("this.pictureList", this.pictureList);
      // return;
      // for (let i = 0; i < this.pictureList.length; i++) {
      //   this.uploadFile(this.pictureList[i]);
      // }
      const param = {
        parkId: this.addListDialogueandoffList.parkId,
        parkLayerName: this.addListDialogueandoffList.parkLayerName,
        remark: this.addListDialogueandoffList.remark,
        parkSpaceNum: this.addListDialogueandoffList.parkSpaceNum,
        // imageHeight: this.addListDialogueandoffList.imageHeight,
        // imageWidth: this.addListDialogueandoffList.imageWidth,
        // layerMapFile: this.addListDialogueandoffList.layerMapFile,
        // parkSpaceLocationFile: this.addListDialogueandoffList.uploadPictureList
        creater: localStorage.getItem("userName")
      };
      console.log("上传参数", param);
      console.log("保存后打印出来的数据", this.addListDialogueandoffList);
      this.$ysParking.insertParkLayer(param).then(res => {
        this.$message({ type: "success", message: "添加成功!" });
        this.queryParkLayerList();
        this.addListDialogueandoff = false;
      });
    },
    // 查询停车场下拉表单
    queryParking() {
      var that = this;
      const param = {
        columnName: ["park_id", "park_name"],
        tableName: "t_bim_park",
        whereStr: []
      };
      this.$homePage.queryDict(param).then(response => {
        that.parkingLotList = response.resultEntity;
      });
    },
    // 上表列表查询
    queryParkLayerList() {
      const param = {
        parkId: this.upQueryList.queryParkId,
        pageSize: this.pageSizeUp,
        pageNumber: this.pageNumUp
      };
      this.$ysParking.queryParkLayerList(param).then(res => {
        // console.log("上表接口数据", res);
        this.parkLayerList = res.resultEntity.list;
        this.pageTotalUp = res.resultEntity.total;
        this.selectedLayerId = this.parkLayerList[0].parkLayerId;
        this.selectedParkId = this.parkLayerList[0].parkId;
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
            parkLayerId: row.parkLayerId
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
    // changeRedio(event, row) {
    //   // console.log("event,row:", event, row);
    //   this.currentRowId = event;
    //   this.parkSpaceList = [];
    //   const param = {
    //     parkId: row.parkId,
    //     parkLayerId: row.parkLayerId,
    //     pageNum: this.pageNum,
    //     pageSize: 5
    //   };
    //   this.$ysParking.queryParkSpaceList(param).then(res => {
    //     // console.log("下表接口数据", res);
    //     this.parkSpaceList = res.data.dataList;
    //     // console.log("下表列表数据", this.parkSpaceList);
    //   });
    // },
    // 下表列表查询
    queryParkSpaceList(layerId) {
      const param = {
        parkLayerId: layerId,
        pageNumber: this.pageNumDown,
        pageSize: this.pageSizeDown
      };
      this.$ysParking.queryParkSpaceList(param).then(res => {
        // console.log("下表接口数据", res);
        this.parkSpaceList = res.resultEntity.list;
        this.pageTotalDown = res.resultEntity.total;
        // console.log("下表列表数据", this.parkSpaceList);
      });
    },

    // 拿到上表多选数据
    // handleSelectParkLayerList(val) {
    //   this.selectParkLayerList = val;
    // },

    //拿到下表多选数据
    // handleSelectParkSpaceList(val) {
    //   this.selectParkSpaceList = val;
    // },
    // 分页
    handleCurrentModifyUp(val) {
      this.pageNumUp = val;
      this.queryParkLayerList();
    },
    handleCurrentModifyDown(val) {
      this.pageNumDown = val;
      this.queryParkSpaceList(this.selectedLayerId);
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
      this.editListDialogueandoff = true;
      this.editListDialogueandoffList = row;
    },
    // 点击确定
    InfoInsert() {
      this.editListDialogueandoff = false;
      const param = {
        parkLayerName: this.editListDialogueandoffList.parkLayerName,
        parkLayerId: this.editListDialogueandoffList.parkLayerId,
        remark: this.editListDialogueandoffList.remark,
        parkSpaceNum: this.editListDialogueandoffList.parkSpaceNum
      };
      this.$ysParking.updateParkLayer(param).then(res => {
        if (res.resultCode == "2000") {
          this.$message({ type: "success", message: "修改成功" });
          this.queryParkLayerList();
        } else {
          this.$message({ type: "fail", message: "修改失败" });
          this.queryParkLayerList();
        }
      });
    },
    // 点击导入调用的方法
    importData() {
      this.importDataOff = true;
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
}

/*查询*/
.up {
  width: 98%;
  height: 13%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

.up-1 {
  width: 98%;
  height: 50px;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}

/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 380px;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}

.down-2 {
  width: 100%;
  height: 380px;
  background-color: white;
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

/*!* 表格表头样式 *!*/
/*.el-table__header-wrapper {*/
/*  width: 100%;*/
/*  height: 0;*/
/*}*/

/* 设置弹出框样式 */
/*/deep/ .el-dialog {*/
/*  width: 50%;*/
/*}*/

/*<!--!* 弹出框内表单样式控制 *!-->*/
/*<!--.el-form-item-dialog {-->*/
/*<!--  width: 100%;-->*/
/*<!--}-->*/

/*<!--.el-form-item-dialog1 {-->*/
/*<!--  width: 100%;-->*/
/*<!--  margin-left: -10%;-->*/
/*<!--}-->*/

/*<!--!*设置修改表单内文字*!-->*/
/*<!--/deep/ .el-form-item__label {-->*/
/*<!--  width: 30%;-->*/
/*<!--}-->*/

#add {
  height: auto;
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

.backgroundLine {
  background-color: #eaf0f6;
  width: 100%;
  height: 15px;
}

.avatar-uploader {
}
</style>
