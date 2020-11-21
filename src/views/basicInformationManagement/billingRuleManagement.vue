<!--
    计费规则管理
 * @Author: 郝晶
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-11-19 19:31:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="about">
    <el-form :inline="true" :model="formInline" class="form">
      <el-form-item label="计费规则名称">
        <el-input v-model="formInline.user" placeholder="计费规则名称"></el-input>
      </el-form-item>
      <el-form-item label="停车场">
        <el-select v-model="formInline.region" placeholder="请选择" clearable>
          <el-option v-for="item in parkingSelections" :key="item.objId" :label="item.dicText" :value="item.dicCode">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="btn">
      <el-button @click="dialogAdd = true">新增规则</el-button>
      <el-button type="info" @click="onBatch">批量删除</el-button>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="date" label="计费规则编号" width="220" align="center">
        </el-table-column>
        <el-table-column prop="name" label="计费规则名称" width="220" align="center">
        </el-table-column>
        <el-table-column prop="address" label="计费规则类型" width="220" align="center">
        </el-table-column>
        <el-table-column prop="describ" label="描述" width="180" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="onHandle(scope.$index, scope.row) == true">查看</el-button>
            <el-button type="text" @click="onUpdate">修改</el-button>
            <el-button type="text" @click="onDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 新增计费弹框 -->
    <el-dialog title="新增计费信息" :visible.sync="dialogAdd">
      <el-form :model="charging" label-width="150px">
        <span class="dialogFormTitle">停车场信息</span>
        <el-form-item label="归属停车场：">
          <el-select v-model="charging.name" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <span class="dialogFormTitle">计费规则信息</span>
        <el-form-item label="计费规则类型：">
          <el-select v-model="charging.sex" placeholder="请选择">
            <el-option v-for="item in charingSelections" :key="item.objId" :label="item.dicText" :value="item.dicCode">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="计费规则名称：">
          <el-input v-model="charging.names" placeholder="请输入" style="width:225px"></el-input>
        </el-form-item>
      </el-form>
      <!-- 按时计费弹出表格 -->
      <div>
        <el-table :data="tableDataHour" style="width: 100%">
          <el-table-column prop="type" label="车辆类型" align="center">
          </el-table-column>
          <el-table-column label="收费标准" align="center">
            <el-table-column prop="sun" label="白天时段" align="center">
            </el-table-column>
            <el-table-column prop="moon" label="夜间时段" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column prop="free" label="免费时长" align="center">
          </el-table-column>
          <el-table-column prop="top" label="封顶" align="center">
          </el-table-column>
        </el-table>
      </div>
      <!-- 按次计费弹出表格 -->
      <div>
        <el-table :data="tableDataNum" style="width: 100%">
          <el-table-column prop="type" label="车辆类型" align="center">
          </el-table-column>
          <el-table-column label="收费标准" align="center">
            <el-table-column prop="sun" label="白天时段" align="center">
            </el-table-column>
            <el-table-column prop="moon" label="夜间时段" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column prop="free" label="免费时长" align="center">
          </el-table-column>
          <el-table-column prop="top" label="重新计费时长" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAdd = false">取 消</el-button>
        <el-button type="primary" @click="dialogAdd = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //新增计费弹窗
        dialogAdd: false,
        // 弹窗-新增计费
        charging: {
          name: "",
          sex: ""
        },
        //计费类型选择
        charingSelections: [
          { dicText: "按时计费", objId: "111", dicCode: "diedj" },
          { dicText: "按次计费", objId: "222", dicCode: "jwidnx" }
        ],
        // 搜索条件
        formInline: {
          use: "",
          region: "",
          names: ""
        },
        // 表格数据
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            describ: "123"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            describ: "123"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            describ: "123"
          }
        ],
        //按时计费数据
        tableDataHour: [{
          type: "客车",
          sun: "2",
          moon: "3",
          free: "4",
          top: "100"
        }, {
          type: "汽车",
          sun: "2",
          moon: "3",
          free: "4",
          top: "100"
        },
        ],
        //按次计费数据
        tableDataNum: [{
          type: "客车",
          sun: "2",
          moon: "3",
          free: "4",
          top: "100"
        }, {
          type: "汽车",
          sun: "2",
          moon: "3",
          free: "4",
          top: "100"
        },
        ],
        // 停车场选项
        parkingSelections: [
          { dicText: "公共停车场", objId: "1", dicCode: "111" },
          { dicText: "临时停车场", objId: "2", dicCode: "222" }
        ]
      };
    },
    mounted() {
      this.searchParking(); //停车场选择
    },
    methods: {
      // 搜索条件-停车场
      searchParking() {
        this.$axios
          .post(this.$api.getDictionaries, {
            pcode: "deviceType"
          })
          .then(response => {
            this.parking = response.data.data;
            console.log("停车场类型打印", this.parking);
          });
      },
      // 搜索
      onSubmit() {
        console.log("搜索数据打印", "");
      },
      //批量删除
      onBatch() {
        console.log("批量删除", "");
      },
      //表格操作
      onHandle() { },
      onUpdate() { },
      onDelete() { }
    }
  };
</script>
<style scoped>
  .form {
    padding: 20px 0 0 40px;
  }

  .btn {
    text-align: right;
    padding: 0 40px;
  }

  .table {
    padding: 20px 40px 0 40px;
  }

  /* 弹窗信息标题 */
  .dialogFormTitle {
    font-size: 16px;
  }
</style>