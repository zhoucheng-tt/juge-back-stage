<!--
    用户管理
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:35:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
  <div class="about">
    <!--上边部分-->
    <div class="up">
      <el-form :inline="true" :model="upQueryList" class="demo-form-inline">
        <el-form-item label="用户账号：">
          <el-input
            size="small"
            style="width: 160px"
            v-model="upQueryList.userAccount"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户姓名：">
          <el-input
            size="small"
            style="width: 160px"
            v-model="upQueryList.name"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="top-select"
            @click="select"
            size="small"
            >查询
          </el-button>
          <el-button @click="resetQuery" size="small">重置</el-button>
        </el-form-item>
      </el-form>
      <el-row class="line-2">
        <!--新增用户-->
        <el-button type="primary" @click="addUser" size="small"
          >新增用户
        </el-button>
        <el-button type="primary" @click="exPort" size="small">
          导出
        </el-button>
      </el-row>
    </div>
    <!--表格部分-->
    <div class="down">
      <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
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
        <el-table-column
          fixed
          prop="userAccount"
          label="用户账号"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户姓名"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="phoneNumber"
          label="手机号"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text">查看</el-button>
            <el-button @click="alter(scope.row)" type="text">修改</el-button>
            <el-button @click="del(scope.row)" type="text">删除</el-button>
            <el-button @click="retPassword(scope.row)" type="text"
              >密码重置</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="float: right">
        <!--分页条-->
        <el-pagination
          @current-change="handleCurrentModify"
          layout=" total,prev, pager, next, jumper"
          :current-page="pageNum"
          :page-size="pageSize"
          :total="pageTotal"
        >
        </el-pagination>
      </div>
      <!--新增用户弹窗-->
      <el-dialog
        title="新增用户"
        :visible.sync="addListDialog"
        width="50%"
        overflow="hidden"
      >
        <!--基本信息-->
        <div class="table-add">
          <el-form
            :inline="true"
            ref="addUser"
            :model="addUserForm"
            label-position="right"
            label-width="100px"
            :rules="addListRules"
          >
            <p style="font-size: 20px">基本信息</p>
            <el-row style="padding-top: 20px">
              <el-col :span="12">
                <el-form-item
                  label="用户账号:"
                  label-width="150px"
                  prop="userAccount"
                >
                  <el-input v-model="addUserForm.userAccount" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="姓名:" label-width="150px" prop="name">
                  <el-input v-model="addUserForm.name" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="手机号:"
                  label-width="150px"
                  prop="phoneNumber"
                >
                  <el-input v-model="addUserForm.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="邮箱:" label-width="150px" prop="email">
                  <el-input v-model="addUserForm.email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <p style="font-size: 20px">选择角色</p>
            <el-row>
              <el-checkbox-group
                v-model="checkRoles"
                @change="handleCheckRolesChange"
              >
                <el-checkbox
                  v-for="(item, index) in roleList"
                  :label="item.roleId"
                  :key="index"
                  >{{ item.roleName }}
                </el-checkbox>
              </el-checkbox-group>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
        </span>
      </el-dialog>
      <!--查看用户弹窗-->
      <el-dialog title="查看" :visible.sync="selectListDialog" width="50%">
        <!-- 基础信息表单-->
        <div class="table-basic">
          <el-form
            :inline="true"
            v-model="showForm"
            label-position="right"
            label-width="100px"
          >
            <p style="font-size: 20px">基本信息</p>
            <el-row style="padding-top: 20px">
              <el-col :span="12">
                <el-form-item label="用户账号:" label-width="150px">
                  <el-input v-model="showForm.userAccount" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="姓名:" label-width="150px">
                  <el-input v-model="showForm.name" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="手机号:" label-width="150px">
                  <el-input v-model="showForm.phoneNumber" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="邮箱:" label-width="150px">
                  <el-input v-model="showForm.email" disabled />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <!--归属角色-->
        <div class="table-belong">
          <el-form
            :inline="true"
            class="demo-form-inline"
            label-position="right"
            label-width="100px"
          >
            <p style="font-size: 20px">归属角色</p>
            <el-row>
              <el-col>
                <el-checkbox-group
                  v-model="checkRoles"
                  @change="handleCheckRolesChange"
                  disabled
                >
                  <el-checkbox
                    v-for="(item, index) in roleList"
                    :label="item.roleId"
                    :key="index"
                    >{{ item.roleName }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="selectListDialog = false">返回</el-button>
        </span>
      </el-dialog>
      <!--            修改弹框-->
      <el-dialog
        title="修改"
        :visible.sync="modFormDialog"
        width="50%"
        overflow="hidden"
      >
        <!--基本信息-->
        <div class="table-mod">
          <el-form
            :inline="true"
            v-model="modForm"
            label-position="right"
            label-width="100px"
          >
            <p style="font-size: 20px">基本信息</p>
            <el-row style="padding-top: 20px">
              <el-col :span="12">
                <el-form-item label="用户账号:" label-width="150px">
                  <el-input v-model="modForm.userAccount" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="姓名:" label-width="150px">
                  <el-input v-model="modForm.name" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="手机号:" label-width="150px">
                  <el-input v-model="modForm.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="邮箱:" label-width="150px">
                  <el-input v-model="modForm.email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <!--选择角色-->
        <el-form :inline="true" label-position="right" label-width="100px">
          <div class="table-mod-sel">
            <p style="font-size: 20px">选择角色</p>
            <el-row>
              <el-col>
                <el-checkbox-group
                  v-model="checkRoles"
                  @change="handleCheckRolesChange"
                >
                  <el-checkbox
                    v-for="(item, index) in roleList"
                    :label="item.roleId"
                    :key="index"
                    >{{ item.roleName }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </div>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-form
            :inline="true"
            label-position="right"
            label-width="100px"
          ></el-form>
          <el-button type="primary" @click="onSubmitMod()">确 定</el-button>
        </span>
      </el-dialog>
      <!--            密码重置弹框-->
      <el-dialog title="提示信息" :visible.sync="retListDialog" width="70%">
        <el-form :inline="true" label-position="right" label-width="100px">
          <el-form-item label="原密码:" label-width="150px">
            <el-input v-model="oldPassword" />
          </el-form-item>
          <el-row>
            <el-form-item label="新密码:" label-width="150px">
              <el-input v-model="newPassword" />
            </el-form-item>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSubmitRet()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //新增约束
      addListRules: {
        userAccount: [
          {
            required: true,
            message: "请输入用户账号",
            trigger: "blur"
          }
        ],
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur"
          }
        ],
        phoneNumber: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          }
        ]
      },
      //初始化分页
      pageNum: 1,
      pageSize: 9,
      pageTotal: 2,
      //顶部查询条件
      upQueryList: {},
      //用户账号
      userAccount: "",
      //用户密码
      name: "",
      //表格数据
      tableData: [],
      //新增用户暂存
      addUserForm: {},
      //查看用户暂存
      showForm: {},
      //新增用户弹窗
      addListDialog: false,
      //查看用户弹窗
      selectListDialog: false,
      //修改用户弹窗
      modFormDialog: false,
      //密码重置弹窗
      retListDialog: false,
      //树形下拉获取数据暂存
      treeList: [],
      //修改数据暂存
      modForm: {},
      //删除数据暂存
      delList: [],
      //密码重置数据暂存
      retList: [],
      //角色数据暂存
      roleList: [],
      //角色多选暂存
      checkRoles: [],
      //角色暂存id
      roleIdList: [],
      oldPassword: "",
      newPassword: ""
    };
  },
  mounted() {
    this.select();
    this.queryRoleListByUser();
  },
  methods: {
    //上边部分按钮导出功能
    exPort() {
      console.log("export");
    },
    //查询重置按钮
    resetQuery() {
      this.upQueryList = {};
    },
    //上边按钮查询功能
    select() {
      this.tableData = [];
      const param = {
        userAccount: this.upQueryList.userAccount,
        name: this.upQueryList.name,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.$systemUser.queryUserList(param).then(res => {
        this.pageTotal = res.data.totalRecord;
        this.tableData = res.data.dataList;
      });
    },
    //角色数据暂存
    queryRoleListByUser() {
      this.roleList = [];
      const param = {
        userId: ""
      };
      this.$systemUser.queryRoleListByUser(param).then(res => {
        this.roleList = res.data.dataList;
        // console.log("角色列表", this.roleList);
      });
    },
    //拿到角色数据多选数据
    handleCheckRolesChange(val) {
      this.checkRoles = val;
      // this.roleIdList = [];
      // val.forEach(item => {
      //   this.roleIdList.push(item.roleId);
      // // })
      // console.log("角色暂存id", this.roleIdList);
      // console.log("checkbox数据", this.checkRoles);
    },

    //分页方法
    handleCurrentModify(val) {
      this.pageNum = val;
      this.select();
    },
    //新增用户弹窗
    addUser() {
      this.addListDialog = true;
      this.checkRoles = [];
      this.addUserForm = {};
      // console.log("新增");
    },
    //新增用户确认提交
    onSubmitAdd() {
      const param = {
        phoneNumber: this.addUserForm.phoneNumber,
        email: this.addUserForm.email,
        name: this.addUserForm.name,
        password: "",
        userAccount: this.addUserForm.userAccount,
        roleId: this.checkRoles
      };
      this.$systemUser.addUser(param).then(res => {
        // console.log("打印新增的数据", res);
        this.select();
      });
      this.addListDialog = false;
    },
    //表格操作中的查看方法
    //查看用户弹窗
    check(row) {
      (this.checkRoles = []), (this.showForm = row);
      const param = {
        userId: row.userId
      };
      this.$systemUser.queryFuncListByUser(param);
      this.$systemUser.queryRoleListByUser(param).then(res => {
        res.data.dataList.forEach(item => {
          if (item.permission == true) {
            this.checkRoles.push(item.roleId);
          }
        });
        // console.log("打印存储的id", this.checkRoles);
      });
      this.selectListDialog = true;
      console.log(row);
    },
    //表格操作中修改方法
    alter(row) {
      this.checkRoles = [];
      const param = {
        userId: row.userId
      };
      this.$systemUser.queryRoleListByUser(param).then(res => {
        res.data.dataList.forEach(item => {
          if (item.permission == true) {
            this.checkRoles.push(item.roleId);
          }
        });
        console.log("打印存储的id", this.checkRoles);
      });
      this.modForm = row;
      this.modFormDialog = true;
      console.log(row);
    },
    //修改确认按钮
    onSubmitMod() {
      const param = {
        userId: this.modForm.userId,
        phoneNumber: this.modForm.phoneNumber,
        email: this.modForm.email,
        name: this.modForm.name,
        userAccount: this.modForm.userAccount,
        roleId: this.checkRoles
      };
      this.$systemUser.updateUser(param).then(() => {
        this.$message({ type: "success", message: "修改成功!" });
        this.select();
      });
      this.modFormDialog = false;
    },
    //删除按钮
    del(row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const param = {
            userId: [row.userId]
          };
          this.delList.push(param);
          this.$systemUser.deleteUser(param).then(res => {
            this.select();
          });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },

    //表格操作中密码重置方法
    retPassword(row) {
      this.$confirm("此操作将重置密码, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.retListDialog = true;
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消重置" });
        });
    },
    //密码重置方法
    onSubmitRet() {
      this.retListDialog = false;
    },
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
/*查询*/
.up {
  width: 98%;
  height: 12%;
  background-color: white;
  margin-left: 1%;
  margin-top: 0.5%;
}
/* 下班部分列表部分 */
.down {
  width: 98%;
  height: 83%;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}
/* 查询条件部分样式 */
.demo-form-inline {
  width: 100%;
  height: 40px;
  padding-left: 1%;
  padding-top: 0.5%;
}
/* 斑马纹样式 */
/deep/ .el-table .successRow11 {
  background: #f8f9fa !important;
}

/deep/ .el-table .successSecond {
  background: white !important;
}

.line-2 {
  width: 98%;
  height: 40px;
  margin-left: 1%;
  margin-top: 0.5%;
}

/*新增弹窗样式*/
/*选择角色*/
.table .table-sel {
  margin-top: 10px;
}

/*选择角色第一行*/
.table .table-sel .table-sel-1 {
  margin-left: 5%;
  display: flex;
  justify-content: space-around;
}

/*归属角色*/
.table-belong {
  margin-top: 10px;
}

/*归属角色选择*/
.table-belong-1 {
  width: 100%;
  margin-bottom: 10px;
  margin-left: 5%;
}

.table-give {
  margin-top: 10px;
}

/*权限功能*/
.table-function {
  font-size: 18px;
  margin-left: 5%;
  background-color: #007aff;
  width: 85px;
}

.table-function-1 {
  width: 90%;
  margin-left: 5%;
  margin-bottom: 20px;
}

.table-function-scr {
  font-fsize: 20px;
  margin-bottom: 10px;
  margin-left: 5%;
  height: 25vh;
}

/*查询下拉横轴滚动条隐藏*/
.el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}

/*修改选择角色中的选择按钮*/
.table-mod-sel-temp {
  margin-top: 10px;
  margin-left: 5%;
  margin-bottom: 20px;
}
</style>
