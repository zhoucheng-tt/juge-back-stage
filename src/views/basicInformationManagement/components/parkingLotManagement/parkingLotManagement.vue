<!--
    停车场运营收入分析
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="all">
    <!--上半部分查询-->
    <div class="up">
      <el-row>
        <el-form :inline="true"  class="demo-form-inline" >
          <el-form-item label="停车场名称">
            <el-input style="width: 300px;" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addInletAndOutlet()">新增停车场</el-button>
            <el-button type="primary" @click="deleteSelect()">批量删除</el-button>
          </el-form-item>
        </el-form>
        <el-dialog id="add" title="新增停车场信息" :visible.sync="addListDialogueandoff">
          <el-form :inline="true" :model="addListDialogueandoffList" class="demo-form-inline" :label-position="right" label-width="100px" >
            <div style="font-size: 20px">基础信息</div>
            <el-col offset="1">
              <el-form-item label="停车场名称:">
                <el-select v-model="newParkingLot.parkingLotName" placeholder="请选择" style="width: 300px;">
                  <el-option v-for="(item, index) in parkingLotList" :label="item.parkingName"
                             :value="item.parkingName" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="停车场编号:">
                <el-input style="width: 300px;" v-model="newParkingLot.parkingLotNumber"/>
              </el-form-item>
            </el-col>
            <el-col offset="1">
              <el-form-item label="停车场类型:">
                <el-select v-model="newParkingLot.parkingLotType" placeholder="请选择" style="width: 300px;">
                  <el-option v-for="(item, index) in parkingLotType" :label="item.parkingType"
                             :value="item.parkingType" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="归属企业:">
                <el-select v-model="newParkingLot.enterprises" placeholder="请选择" style="width: 300px;">
                  <el-option v-for="(item, index) in enterprises" :label="item.enterprisesName"
                             :value="item.enterprisesName" :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col offset="1">
              <el-form-item label="规划总车位数:">
                <el-input v-model="newParkingLot.totalNumberOfParkingSpacesPlanned" style="width: 300px;"/>
              </el-form-item>
            </el-col>
            <div style="font-size: 20px">位置信息</div>
            <el-col offset="1">
              <el-form-item label="地址:" >
                <el-input v-model="newParkingLot.address" style="width: 300px;" />
              </el-form-item>
            </el-col>
            <el-col offset="1">
              <el-form-item label="经度:">
                <el-input v-model="newParkingLot.longitude" style="width: 300px;"></el-input>
              </el-form-item>
              <el-form-item label="纬度:">
                <el-input v-model="newParkingLot.latitude"  style="width: 300px;"></el-input>
              </el-form-item>
            </el-col>
            <div style="font-size: 20px">计费规则信息</div>
            <el-col offset="1">
              <el-form-item label="计费规则:">
                <el-select v-model="newParkingLot.accountingRules" placeholder="请选择" style="width: 300px;">
                  <el-option v-for="(item, index) in chargingRules" :label="item.ruleName"
                             :value="item.ruleName" :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <div style="font-size: 20px">其他</div>
            <el-col offset="1">
              <el-form-item label="联系人:">
                <el-input  v-model="newParkingLot.contact" style="width: 300px;"></el-input>
              </el-form-item>
              <el-form-item label="联系人电话:">
                <el-input  v-model="newParkingLot.telephone" style="width: 300px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col offset="1">
              <el-form-item label="停车场图片:">
                <el-input v-model="newParkingLot.picture" style="width: 300px;"></el-input>
              </el-form-item>
              <el-button type="info" @click="choosePicture()">选择</el-button>
              <el-button type="info" @click="uploadPicture()">上传</el-button>
              <el-button type="info" @click="viewPicture()">预览</el-button>
            </el-col>

          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addListDialogueandoff = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit()">保 存</el-button>
          </div>
        </el-dialog>
      </el-row>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-table :data="manageParking" :row-class-name="tableRowClassName" ref="selectManageEntryAndExit"
                @selection-change="handleSelectionChange"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column fixed prop="parkingLotNumber" label="停车场编号"/>
        <el-table-column prop="parkingLotName" :show-overflow-tooltip="true" label="停车场名称"/>
        <el-table-column prop="parkingLotType" :show-overflow-tooltip="true" label="停车场类型"/>
        <el-table-column prop="enterprises" :show-overflow-tooltip="true" label="所属企业"/>
        <el-table-column prop="address" :show-overflow-tooltip="true" label="地址"/>
        <el-table-column prop="longitude" :show-overflow-tooltip="true" label="经度"/>
        <el-table-column prop="latitude" :show-overflow-tooltip="true" label="纬度"/>
        <el-table-column prop="totalNumberOfParkingSpacesPlanned" :show-overflow-tooltip="true" label="规划总车位数"/>
        <el-table-column prop="accountingRules" :show-overflow-tooltip="true" label="计费规则"/>
        <el-table-column prop="contact" :show-overflow-tooltip="true" label="联系人"/>
        <el-table-column prop="telephone" :show-overflow-tooltip="true" label="联系人电话"/>
        <el-table-column prop="picture" :show-overflow-tooltip="true" label="停车场图片"/>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="editListDialogue(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteListDialogue(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="position: absolute;right:4%;margin-top:20px" background
                     layout="total, prev, pager, next, jumper" @current-change="handleCurrentModify"
                     :current-page="pageNum"
                     :total="pageTotal" :page-size="pageSize">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      uoQueryList:{
        TingNum:''
      },
      //新增停车场数据暂存
      newParkingLot: {
        parkingLotNumber:'',
        parkingLotName:'',
        parkingLotType: '',
        enterprises:'',
        address: "",
        longitude: "",
        latitude: "",
        totalNumberOfParkingSpacesPlanned:'',
        accountingRules: "",
        contact: "",
        telephone:"",
        picture:""
      },
      //多选后数据暂存
      selectManageEntryAndExit: [],
      parkingLotList: [
        {
          parkingName: '新能源停车场',
          id: 1
        }
      ],
      parkingLotType: [
        {
          parkingType: '地上停车场',
          id: '1'
        },
        {
          parkingType: '地下停车场',
          id: '2'
        }
      ],
      //归属企业
      enterprises: [
        {
          enterprisesName:'',
          id:'1'
        }
      ],
      chargingRules: [
        {
          ruleName:'',
          id:"1"
        }
      ],
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      manageParking: [
        {
          parkingLotNumber: '1',
          parkingLotName: '停车场',
          parkingLotType: '地上停车场',
          enterprises:'阿里',
          address: "东门",
          longitude: "137度",
          latitude: "28度",
          totalNumberOfParkingSpacesPlanned: "100",
          accountingRules: "全费",
          contact: "王小二",
          telephone:"13911111111",
          picture:"无"
        },
        {
          parkingLotNumber: '1',
          parkingLotName: '停车场',
          parkingLotType: '地上停车场',
          enterprises:'腾讯',
          address: "东门",
          longitude: "137度",
          latitude: "28度",
          totalNumberOfParkingSpacesPlanned: "100",
          accountingRules: "全费",
          contact: "王小二",
          telephone:"13911111111",
          picture:"无"
        }
      ],
      editListDialogueandoff: false,

      editListDialogueandoffList: [],

      addListDialogueandoff: false,

      addListDialogueandoffList: [],

    };
  },
  methods: {
    //批量删除
    deleteSelect() {
      console.log(this.selectManageEntryAndExit)
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCurrentModify(val) {
      this.pageNum = val;
    },
    // 点击查询调用的方法
    selectQueryList() {
      console.log("打印出来点击查询后所产生的值", this.chargeModeManagement)
    },
    // 点击新增
    addInletAndOutlet(row) {
      this.addListDialogueandoff = true;
      this.addListDialogueandoffList = row
    },
    //选择停车场图片
    choosePicture() {
      console.log("选择图片");
    },
    //上传图片
    uploadPicture() {
      console.log("上传图片")
    },
    //预览图片
    viewPicture() {
      console.log("预览图片")
    },
    onSubmit() {
      console.log(this.newParkingLot);
      this.manageParking.push(this.newParkingLot);
      this.addListDialogueandoff=false;
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
