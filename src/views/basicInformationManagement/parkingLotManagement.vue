<!--
    停车场管理
 * @Author: 王思远
 * @Date: 2020-10-22 09:26:58
 * @LastEditTime: 2020-10-22 09:29:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\basicInformationManagement\carWashingMachineManagement.vue
-->
<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="停车场管理" name="first"/>
      <el-tab-pane label="车位管理" name="second"/>
      <el-tab-pane label="出入口管理" name="third"/>
    </el-tabs>
    <!--上半部分查询-->
    <div class="up">
      <el-row>
        <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
          <el-form-item label="停车场：">
            <el-select v-model="upQueryList.TingNum" placeholder="请选择停车场">
              <el-option v-for="(item, index) in parkingLotList" :label="item.parkingName"
                         :value="item.parkingName" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="selectQueryList">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addInletAndOutlet">新增出入口</el-button>
            <el-button type="primary" @click="deleteSelect()">批量删除</el-button>
          </el-form-item>
        </el-form>
        <el-dialog id="add" title="新增洗出入口信息" :visible.sync="addListDialogueandoff">
          <el-form :inline="true" :model="addListDialogueandoffList" class="demo-form-inline">
            <div style="font-size: 20px">归属停车场信息</div>
            <el-col offset="1">
              <el-form-item label="归属停车场:">
                <el-select v-model="upQueryList.TingNum" placeholder="请选择停车场">
                  <el-option v-for="(item, index) in parkingLotList" :label="item.parkingName"
                             :value="item.parkingName" :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <div style="font-size: 20px">出入口信息</div>
            <el-col offset="1">
              <el-form-item label="出入口编号:">
                <el-input v-model="upQueryList.entryAndExitNumber" placeholder="请输入出入口编号"></el-input>
              </el-form-item>
              <el-form-item label="出入口名称:">
                <el-input v-model="upQueryList.entryAndExitName" placeholder="请输入出入口名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col offset="1">
              <el-form-item label="出入口类型:">
                <el-select v-model="upQueryList.entryAndExitType" placeholder="请选择出入口类型">
                  <el-option v-for="(item, index) in entryAndExitList" :label="item.entryAndExit"
                             :value="item.entryAndExit" :key="index"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col offset="1">
              <el-form-item label="出入口描述:">
                <el-input
                    type="textarea" style="width: 500px"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea">
                </el-input>
              </el-form-item>
            </el-col>
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
      <div class="down">
        <el-table :data="manageEntryAndExit" :row-class-name="tableRowClassName" ref="selectManageEntryAndExit"
                  @selection-change="handleSelectionChange"
                  :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                  :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
          <el-table-column
              type="selection"
              width="55">
          </el-table-column>
          <el-table-column prop="parkingLotNumber" label="停车场编号" width="100"></el-table-column>
          <el-table-column prop="parkingLotName" :show-overflow-tooltip="true" label="停车场名称" width="">
          </el-table-column>
          <el-table-column prop="parkingLotType" :show-overflow-tooltip="true" label="停车场类型" width="">
          </el-table-column>
          <el-table-column prop="entryAndExitType" :show-overflow-tooltip="true" label="出入口类型"></el-table-column>
          <el-table-column prop="entryAndExitNumber" :show-overflow-tooltip="true" label="出入口编号"></el-table-column>
          <el-table-column prop="entryAndExitName" :show-overflow-tooltip="true" label="出入口名称"></el-table-column>
          <el-table-column prop="entryAndExitdescribe" :show-overflow-tooltip="true" label="出入口描述"></el-table-column>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'first',
      upQueryList: {TingNum: ''},
      //多选后数据暂存
      selectManageEntryAndExit: [],
      parkingLotList: [
        {
          parkingName: '公共停车场',
          id: 1
        },
        {
          parkingName: '员工停车场',
          id: 2
        },
        {
          parkingName: '临时停车场',
          id: 3
        },
        {
          parkingName: '新能源停车场',
          id: 4
        },
        {
          parkingName: '路侧临停泊位',
          id: 5
        },
        {
          parkingName: '专用停车场',
          id: 6
        }
      ],
      entryAndExitList: [
        {
          entryAndExit: '入口',
          id: '1'
        },
        {
          entryAndExit: '出口',
          id: '2'
        }
      ],
      // 分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 4,
      manageEntryAndExit: [
        {
          parkingLotNumber: '1',
          parkingLotName: '停车场',
          parkingLotType: '不知道',
          entryAndExitType: "入口",
          entryAndExitNumber: "02",
          entryAndExitName: "不知道",
          entryAndExitdescribe: "无"
        },
        {
          parkingLotNumber: '1',
          parkingLotName: '停车场',
          parkingLotType: '不知道',
          entryAndExitType: "入口",
          entryAndExitNumber: "02",
          entryAndExitName: "不知道",
          entryAndExitdescribe: "无"
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
      console.log("selectManageEntryAndExit", this.selectManageEntryAndExit)
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
