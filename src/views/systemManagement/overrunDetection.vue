<!--
    角色管理
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:35:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template class="template">
  <div class="about">
    <!--上边部分-->
    <div class="top">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="角色名">
          <el-input
            v-model="upQueryList.roleName"
            placeholder="请输入角色名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="top-select" @click="queryRoleList"
            >查询
          </el-button>
          <el-button type="primary" @click="resetQuery">重置</el-button>
        </el-form-item>
        <el-row style="height: 45px">
          <el-form-item>
            <el-button type="primary" @click="addRole">新增角色</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <!--表格部分-->
    <div class="table">
      <!--数据表格-->
      <el-table
        :row-class-name="tableRowClassName"
        :data="roleManagementData"
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
      >
        <el-table-column fixed prop="roleName" label="角色名称">
        </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column prop="creater" label="创建人"> </el-table-column>
        <el-table-column prop="createTime" label="创建时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button @click="alter(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button @click="del(scope.row)" type="text" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!--分页条-->
      <el-pagination
        @current-change="handleCurrentModify"
        layout=" prev, pager, next,total, jumper"
        :current-page="pageNum"
        :page-size="pageSize"
        :total="pageTotal"
      >
      </el-pagination>
      <!--按钮新增角色弹窗-->
      <el-dialog
        title="新增角色"
        :visible.sync="addRoleListDialog"
        width="80%"
        top="2vh"
      >
        <!--基本信息-->
        <div class="table-add">
          <el-form
            :inline="true"
            class="demo-form-inline"
            label-position="right"
            label-width="100px"
          >
            <p style="font-size: 20px">基本信息</p>
            <el-row style="padding-top: 20px">
              <el-col :span="12">
                <el-form-item label="角色名称:" label-width="150px">
                  <el-input v-model="addRoleList.roleName" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="角色描述:" label-width="150px">
                  <el-input v-model="addRoleList.roleDesc"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <!--选择权限-->
        <div class="table-give">
          <el-form
            :inline="true"
            class="demo-form-inline"
            label-position="right"
            label-width="100px"
          >
            <p style="font-size: 20px">选择权限</p>
            <!--功能权限-->
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
          <el-button @click="addRoleListDialog = false">取 消</el-button>
        </span>
      </el-dialog>
      <!--操作中的查看弹窗-->
      <el-dialog
        title="查看角色"
        :visible.sync="viewListDialog"
        width="80%"
        top="2vh"
      >
        <!--基本信息-->
        <div class="table-add">
          <el-form
            :inline="true"
            class="demo-form-inline"
            label-position="right"
            label-width="100px"
          >
            <p style="font-size: 20px">基本信息</p>
            <el-row style="padding-top: 20px">
              <el-col :span="12">
                <el-form-item label="角色名称:" label-width="150px">
                  <el-input v-model="viewList.roleName" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="角色描述:" label-width="150px">
                  <el-input v-model="viewList.roleDesc"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="viewListDialog = false">返回</el-button>
        </span>
      </el-dialog>
      <!--修改弹框-->
      <el-dialog
        title="修改角色"
        :visible.sync="modRoleLisDialog"
        width="80%"
        top="2vh"
      >
        <!--基本信息-->
        <div class="table-add">
          <el-form
            :inline="true"
            class="demo-form-inline"
            label-position="right"
            label-width="100px"
          >
            <p style="font-size: 20px">基本信息</p>
            <el-row style="padding-top: 20px">
              <el-col :span="12">
                <el-form-item label="角色名称:" label-width="150px">
                  <el-input v-model="alterRoleList.roleName" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="角色描述:" label-width="150px">
                  <el-input v-model="alterRoleList.roleDesc"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSubmitMod()">确 定</el-button>
          <el-button @click="modRoleLisDialog = false">取 消</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
//按钮新增多选数据据暂存
export default {
  data() {
    return {
      //顶部查询条件数据存放
      upQueryList: { roleName: "" },
      //初始化分页
      pageNum: 1,
      pageSize: 10,
      pageTotal: 1,
      //创建者
      creater: "admin",
      //按钮新增角色弹窗
      addRoleListDialog: false,
      //新增角色暂存
      addRoleList: {},

      //查看角色弹窗
      viewListDialog: false,
      //查看角色暂存
      viewList: {},

      //表格操作中修改弹窗
      modRoleLisDialog: false,
      //表格修改弹窗中传入的数据暂存
      alterRoleList: {}
    };
  },
  mounted() {
    //调用查询列表
    this.queryRoleList();
  },
  methods: {
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    //操作中的删除按钮(删除一行)
    del(row) {
      //点击删除按钮出现的提示框
      this.$confirm("此操作将永久删除该角色, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //设定传入行数据
          const param = {
            roleId: [row.roleId]
          };
          console.log("打印删除行id", param);
          //调用接口中的删除方法
          this.$systemUser.deleteRole(param).then(() => {
            //提示删除成功
            this.$message({ type: "success", message: "删除成功!" });
            //重新执行查询 （重新加载页面）
            this.queryRoleList();
          });
        })
        .catch(() => {
          //取消删除按钮
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //顶部查询按钮
    queryRoleList() {
      var that = this;
      const param = {
        //传入查询要用的参数
        roleName: this.upQueryList.roleName,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      //引用deviceManagement中的查询接口方法
      this.$systemUser.queryRoleList(param).then(response => {
        //分页
        that.pageTotal = response.data.totalRecord;
        //查询
        that.roleManagementData = response.data.dataList;
      });
    },
    //分页查询
    handleCurrentModify(val) {
      //查询分页
      this.pageNum = val;
      this.queryRoleList();
    },

    //新增角色按钮
    addRole() {},
    //新增角色按钮确认提交
    onSubmitAdd() {
      this.addRoleListDialog = false;

      //角色管理新增要传入参数
      const param = {
        roleName: this.addRoleList.roleName,
        roleDesc: this.addRoleList.roleDesc,
        creater: this.creater,
        funcId: "",
        userId: ""
      };
      console.log("新增全部参数", param);
      this.$systemUser.addRole(param).then(response => {
        console.log("打印新增响应数据", response);
        //添加成功弹出
        this.$message({ type: "success", message: "添加成功!" });
        //添加成功 弹出框隐藏
        this.addRoleListDialog = false;
        //添加成功 刷新页面 调用查询方法
        this.queryRoleList();
      });
    },
    //新增页面中功能权限，城市智能停车管理与服务平台
    queryFuncListByRole() {
      //tabs第一个页面
      const param1 = {
        funcId: "10"
      };
    },

    //操作中的查看按钮
    check(row) {},
    //操作中的修改按钮
    alter(row) {},
    //操作中修改按钮弹窗的确认修改
    onSubmitMod() {},
    // 斑马纹样式
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "successRow11";
      } else if (rowIndex % 2 == 0) {
        return "successSecond";
      }
      return "";
    }
  }
};
</script>
<style scoped>
.about {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 上半部分输入框查询导出 */
.top {
  width: 100%;
  height: 15%;
  float: left;
  /*background-color: rebeccapurple;*/
}

/*上半部输入框样式*/
.demo-form-inline {
  width: 100%;
  height: 80%;
  margin-top: 0.5%;
  padding-left: 2%;
}

/*上半部查询按钮*/
.top-select {
}

/*上半部导出按钮*/
.top-exPort {
}

/*middle中新增用户按钮样式*/
.middle-add {
}

/* 中间部分新增用户 */
.middle {
  width: 100%;
  height: 7.5%;
  float: left;
  /*background-color: red*/
}

/*数据表格样式*/
/*分页*/
.el-pagination {
  position: relative;
  left: 78%;
}

/*新增弹窗样式*/
/*基本信息*/
.table .table-add {
}

/*选择角色*/
.table .table-sel {
  margin-top: 280px;
}

/*用户查看弹出样式*/
/*弹出查看基础信息*/
.table-basic {
}
.table-give {
  margin-top: 10px;
  height: 355px;
}

/*权限功能*/
.table-function {
  font-size: 18px;
  height: 800px;
}

.table-function-scr {
  font-fsize: 20px;
  margin-bottom: 10px;
  overflow-x: hidden;
  height: 25vh;
}

/*查询下拉横轴滚动条隐藏*/
/deep/ .el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}

/*    按钮修改样式*/
/*    修改基本信息样式*/
.table-mod {
}

/*    修改选择角色样式*/
.table-mod-sel {
}

/*修改选择角色中的选择按钮*/
.table-mod-sel-temp {
  margin-top: 10px;
  margin-left: 5%;
  margin-bottom: 20px;
}

/*    设置弹出框的样式*/
/deep/ .el-dialog {
  margin-top: 2vh;
  width: 50%;
  /*height: 700px;*/
  overflow-y: scroll;
  overflow-x: hidden;
}
/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #7de6f8 !important;
}
/deep/ .el-table .successSecond {
  background: #8ed3e7 !important;
}
</style>
