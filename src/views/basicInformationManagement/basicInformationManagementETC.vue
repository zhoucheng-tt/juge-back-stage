<!--
    基础信息管理ETC
 * @Author: 王思远
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-22 09:10:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="all">
    <!--上半部分查询-->
    <div class="up">
      <el-row>
        <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
          <el-form-item label="ETC名称:">
            <el-input v-model="upQueryList.ETCName" placeholder="请输入ETC名称"></el-input>
          </el-form-item>
          <el-form-item label="停车场：">
            <el-select v-model="upQueryList.TingNum" placeholder="请选择停车场">
              <el-option v-for="(item, index) in parkingLotList" :label="item.parkingName" :value="item.parkingName"
                :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="SelectQueryList">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addETC">新增ETC</el-button>
            <el-button type="primary" @click="deleteETC">批量删除</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
    <!--下半部分列表-->
    <div class="down">
      <el-table :data="ETCInformationManagement" :row-class-name="tableRowClassName"
        :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
        :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="ETCNumber" label="ETC编号" width="80"></el-table-column>
        <el-table-column prop="nameOfParkingLot" :show-overflow-tooltip="true" label="所属停车场" width="">
        </el-table-column>
        <el-table-column prop="type" :show-overflow-tooltip="true" label="类型" width="">
        </el-table-column>
        <el-table-column prop="description" :show-overflow-tooltip="true" label="描述"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" label="操作">
          <template slot-scope="scope">
            <el-button @click="showListDialogue(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="editListDialogue(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteListDialogue(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="position: absolute;right:4%;margin-top:20px" background
        layout="total, prev, pager, next, jumper" @current-change="handleCurrentModify" :current-page="pageNum"
        :total="pageTotal" :page-size="pageSize">
      </el-pagination>
    </div>
    <!-- 信息详情点击弹出框 -->
    <el-dialog title="ETC详情" :visible.sync="showListdialogueandoff">
      <el-form :inline="true" :model="showListdialogueandoffList" class="demo-form-inline">
        <el-form-item label="ETC编号:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.ETCNumber"></el-input>
        </el-form-item>
        <el-form-item label="所属停车场:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.nameOfParkingLot"></el-input>
        </el-form-item>
        <el-form-item label="类型:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.type"></el-input>
        </el-form-item>
        <el-form-item label="描述:" class="el-form-item-dialog">
          <el-input v-model="showListdialogueandoffList.description"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 信息修改点击弹出框 -->
    <el-dialog title="ETC详情" :visible.sync="editListDialogueandoff">
      <el-form :inline="true" :model="editListDialogueandoffList" class="demo-form-inline">
        <el-form-item label="ETC编号:" class="el-form-item-dialog">
          <el-input v-model="editListDialogueandoffList.ETCNumber"></el-input>
        </el-form-item>
        <el-form-item label="所属停车场:" class="el-form-item-dialog">
          <el-input v-model="editListDialogueandoffList.nameOfParkingLot"></el-input>
        </el-form-item>
        <el-form-item label="类型:" class="el-form-item-dialog">
          <el-input v-model="editListDialogueandoffList.type"></el-input>
        </el-form-item>
        <el-form-item label="描述:" class="el-form-item-dialog">
          <el-input v-model="editListDialogueandoffList.description"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editListDialogueandoff = false">取 消</el-button>
        <el-button type="primary" @click="ETCInfoInsert">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 顶部查询数据暂存处
        upQueryList: {
          ETCName: '',
          TingNum: '',
        },
        // 停车场下拉框数据暂存处
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
        // 分页
        pageNum: 1,
        pageSize: 10,
        pageTotal: 4,
        ETCInformationManagement: [
          {
            ETCNumber: '1',
            nameOfParkingLot: '一号停车场',
            type: '员工停车场',
            description: '无'
          },
          {
            ETCNumber: '2',
            nameOfParkingLot: '二号停车场',
            type: '员工停车场',
            description: '无'
          },
          {
            ETCNumber: '2',
            nameOfParkingLot: '三号停车场',
            type: '员工停车场',
            description: '无'
          }
        ],
        // 控制订单详情弹出框展示和隐藏属性
        showListdialogueandoff: false,
        // 弹出框展示订单详情数据暂存
        showListdialogueandoffList: [],

        editListDialogueandoff: false,

        editListDialogueandoffList: [],
      }
    },
    methods: {
      // 点击查询调用的方法
      SelectQueryList() {
        console.log("打印出来点击查询后所产生的值", this.upQueryList)
      },
      // 点击新增
      addETC() {

      },
      deleteETC() {

      },
      // 斑马纹样式
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex % 2 == 1) {
          return 'successRow11';
        } else if (rowIndex % 2 == 0) {
          return 'successSecond';
        }
        return '';
      },
      // 分页查询方法
      handleCurrentModify(val) {
        this.pageNum = val;
      },
      // 点击查看调用的方法
      showListDialogue(row) {
        this.showListdialogueandoff = true;
        this.showListdialogueandoffList = row;
      },
      // 点击修改调用的方法
      editListDialogue(row) {
        console.log(row);
        this.editListDialogueandoff = true;
        this.editListDialogueandoffList = row;
      },
      // 点击确定提交修改信息
      ETCInfoInsert(row) {
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
</style>