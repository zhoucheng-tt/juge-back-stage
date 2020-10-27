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
<!--新增表单弹框-->
        <el-dialog id="add" title="新增停车场信息" :visible.sync="addListDialogueandoff">
          <el-form :inline="true"  class="demo-form-inline" label-position=right label-width="100px" >
              <div style="font-size: 20px">基础信息</div>
            <el-row style="padding-top: 20px">
              <el-col span="12" >
                <el-form-item label="停车场名称:">
                  <el-select v-model="newParkingLot.parkingLotName" placeholder="请选择" >
                    <el-option v-for="(item, index) in parkingNameList" :label="item.parkingName"
                               :value="item.parkingName" :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col span="12">
                <el-form-item label="停车场编号:">
                  <el-input  v-model="newParkingLot.parkingLotNumber"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="12">
                <el-form-item label="停车场类型:">
                  <el-select v-model="newParkingLot.parkingLotType" placeholder="请选择" >
                    <el-option v-for="(item, index) in parkingLotType" :label="item.parkingType"
                               :value="item.parkingType" :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col span="12">
                <el-form-item label="归属企业:">
                  <el-select v-model="newParkingLot.enterprises" placeholder="请选择" >
                    <el-option v-for="(item, index) in enterprises" :label="item.enterprisesName"
                               :value="item.enterprisesName" :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="12">
                  <el-form-item label="规划总车位数:">
                    <el-input v-model="newParkingLot.totalNumberOfParkingSpacesPlanned" />
                  </el-form-item>
              </el-col>
            </el-row>
            <div style="font-size: 20px">位置信息</div>
            <el-row style="padding-top: 20px">
              <el-col span="24">
                <el-form-item label="地址:" >
                  <el-input v-model="newParkingLot.address"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="12">
                <el-form-item label="经度:">
                  <el-input v-model="newParkingLot.longitude"></el-input>
                </el-form-item>
              </el-col>
              <el-col span="12">
                <el-form-item label="纬度:">
                  <el-input v-model="newParkingLot.latitude"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div style="font-size: 20px">计费规则信息</div>
            <el-row style="padding-top: 20px">
              <el-col span="12">
                <el-form-item label="计费规则:">
                  <el-select v-model="newParkingLot.accountingRules" placeholder="请选择" >
                    <el-option v-for="(item, index) in chargingRules" :label="item.ruleName"
                               :value="item.ruleName" :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <div style="font-size: 20px">其他</div>
            <el-row style="padding-top: 20px">
              <el-col span="12">
                <el-form-item label="联系人:">
                  <el-input  v-model="newParkingLot.contact"></el-input>
                </el-form-item>
              </el-col>
              <el-col span="12">
                <el-form-item label="联系人电话:">
                  <el-input  v-model="newParkingLot.telephone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="12">
                <el-form-item label="停车场图片:">
                  <el-input v-model="newParkingLot.picture" ></el-input>
                </el-form-item>
              </el-col>
              <el-col span="2"><el-button type="info" @click="choosePicture()" size="small">选择</el-button></el-col>
              <el-col span="2"><el-button type="info" @click="uploadPicture()" size="small">上传</el-button></el-col>
              <el-col span="2"><el-button type="info" @click="viewPicture()" size="small">预览</el-button></el-col>
            </el-row>

          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addListDialogueandoff = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit01()">保 存</el-button>
          </div>
        </el-dialog>
<!--修改表单弹框-->
        <el-dialog id="change" title="修改停车场信息" :visible.sync="changeListDialogueandoff">
          <el-form :inline="true"  class="demo-form-inline" label-position=right label-width="100px" >
            <div style="font-size: 20px">基础信息</div>
            <el-row style="padding-top: 20px">
              <el-col span="12" >
                <el-form-item label="停车场名称:">
                  <el-select v-model="changeParkingLot.parkingLotName" placeholder="请选择" >
                    <el-option v-for="(item, index) in parkingNameList" :label="item.parkingName"
                               :value="item.parkingName" :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col span="12">
                <el-form-item label="停车场编号:">
                  <el-input  v-model="changeParkingLot.parkingLotNumber"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="12">
                <el-form-item label="停车场类型:">
                  <el-select v-model="changeParkingLot.parkingLotType" placeholder="请选择" >
                    <el-option v-for="(item, index) in parkingLotType" :label="item.parkingType"
                               :value="item.parkingType" :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col span="12">
                <el-form-item label="归属企业:">
                  <el-select v-model="changeParkingLot.enterprises" placeholder="请选择" >
                    <el-option v-for="(item, index) in enterprises" :label="item.enterprisesName"
                               :value="item.enterprisesName" :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="12">
                <el-form-item label="规划总车位数:">
                  <el-input v-model="changeParkingLot.totalNumberOfParkingSpacesPlanned" />
                </el-form-item>
              </el-col>
            </el-row>
            <div style="font-size: 20px">位置信息</div>
            <el-row style="padding-top: 20px">
              <el-col span="24">
                <el-form-item label="地址:" >
                  <el-input v-model="changeParkingLot.address"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="12">
                <el-form-item label="经度:">
                  <el-input v-model="changeParkingLot.longitude"></el-input>
                </el-form-item>
              </el-col>
              <el-col span="12">
                <el-form-item label="纬度:">
                  <el-input v-model="changeParkingLot.latitude"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div style="font-size: 20px">计费规则信息</div>
            <el-row style="padding-top: 20px">
              <el-col span="12">
                <el-form-item label="计费规则:">
                  <el-select v-model="changeParkingLot.accountingRules" placeholder="请选择" >
                    <el-option v-for="(item, index) in chargingRules" :label="item.ruleName"
                               :value="item.ruleName" :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <div style="font-size: 20px">其他</div>
            <el-row style="padding-top: 20px">
              <el-col span="12">
                <el-form-item label="联系人:">
                  <el-input  v-model="changeParkingLot.contact"></el-input>
                </el-form-item>
              </el-col>
              <el-col span="12">
                <el-form-item label="联系人电话:">
                  <el-input  v-model="changeParkingLot.telephone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="12">
                <el-form-item label="停车场图片:">
                  <el-input v-model="changeParkingLot.picture" ></el-input>
                </el-form-item>
              </el-col>
              <el-col span="2"><el-button type="info" @click="choosePicture()" size="small">选择</el-button></el-col>
              <el-col span="2"><el-button type="info" @click="uploadPicture()" size="small">上传</el-button></el-col>
              <el-col span="2"><el-button type="info" @click="viewPicture()" size="small">预览</el-button></el-col>
            </el-row>

          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addListDialogueandoff = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit02()">保 存</el-button>
          </div>
        </el-dialog>
      </el-row>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-table :data="manageParking"  ref="selectParkingLotList"
                :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                :cell-style="{ 'text-align': 'center' }" style="width: 100%;"
                @selection-change="handleSelectionChange">
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


    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
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
      selectParkingLotList: [],
      //停车场名称下拉菜单数据
      parkingNameList: [
        {
          parkingName: '新能源停车场',
          id: '1'
        },
        {
          parkingName: '新能源停车场',
          id: '2'
        },
        {
          parkingName: '新能源停车场',
          id: '3'
        },
        {
          parkingName: '新能源停车场',
          id: '4'
        },
        {
          parkingName: '新能源停车场',
          id: '5'
        },
        {
          parkingName: '新能源停车场',
          id: '6'
        }
      ],
      //停车场类型下拉菜单数据
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
      //归属企业下拉菜单数据
      enterprises: [
        {
          enterprisesName:'阿里巴巴',
          id:'1'
        },
        {
          enterprisesName:'腾讯',
          id:'2'
        },
        {
          enterprisesName:'华为',
          id:'3'
        },
        {
          enterprisesName:'小米',
          id:'4'
        }
      ],
      //计费规则下拉菜单
      chargingRules: [
        {
          ruleName:'非会员(全费)',
          id:"1"
        },
        {
          ruleName:'会员(9折)',
          id:"2"
        },
        {
          ruleName:'VIP(8折)',
          id:"3"
        }
      ],
      //前端暂时数据
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
      //新增表单弹框属性：false:不显露
      addListDialogueandoff: false,
      //修改表单弹框属性：false:不显露
      changeListDialogueandoff:false,
      //修改停车场数据暂存
      changeParkingLot: {
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
    };
  },
  methods: {
    //批量删除
    deleteSelect() {
      confirm("确认删除？")
      console.log(this.selectParkingLotList)
    },
    // 点击新增
    addInletAndOutlet() {
      this.newParkingLot={
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
      };
      this.addListDialogueandoff = true;
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
    //提交表单
    onSubmit01() {
      console.log(this.newParkingLot);
      //将新增数据展示到页面（仅做展示用）
      this.manageParking.push(this.newParkingLot);
      this.addListDialogueandoff=false;
    },
    //修改
    editListDialogue(row){
      console.log(row);
      this.changeListDialogueandoff=true;
      this.changeParkingLot=row;
    },
    //单个删除
    deleteListDialogue(row) {
      confirm("确认删除吗？");
      console.log("你要删除的id是"+row.parkingLotNumber);
    },
    //修改表单提交
    onSubmit02(){
      console.log(this.changeParkingLot);
      this.changeListDialogueandoff=false;
    },
    handleSelectionChange(val){
      this.selectParkingLotList = val;
      console.log(this.selectParkingLotList);
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
