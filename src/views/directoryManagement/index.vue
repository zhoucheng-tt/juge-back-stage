<!--
 * @Description: 目录管理
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-21 15:54:00
 * @LastEditors: zhoucheng
-->
<template>
  <div class="mainbody">
    <el-row class="tableTitle">
      <span>目录管理</span>
      <span class="tableTitleButton">
        <el-button type="success"
                   @click="handleClickAdd">新 增</el-button>
      </span>
    </el-row>
    <el-row class="tableContent">
      <el-scrollbar>
        <el-table :data="datalist"
                  ref="formName"
                  stripe
                  :header-cell-style="{
                  fontfamily: 'PingFangSC-Medium',
                  background: '#FFFFFF',
                  color: '#333333',
                  border: 'none',
                  padding: 'none',
                  fontSize: '14px',
                  letterSpacing: '0.56px',
                  }"
                  :cell-style="{
                  fontfamily: 'PingFangSC-Regular',
                  letterSpacing: '0.56px',
                  fontSize: '14px',
                  color: '#333333',
                  }"
                  row-key="menuId"
                  default-expand-all
                  :tree-props="{children: 'children', hasChildren: 'hasChildren'}">>
          <el-table-column prop="menuTitle"
                           :show-overflow-tooltip="true"
                           label="菜单名称" />
          <el-table-column prop="menuSort"
                           :show-overflow-tooltip="true"
                           label="菜单权重" />

          <el-table-column :show-overflow-tooltip="true"
                           label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClickDetail(scope.row)"
                         type="text"
                         size="small">详情</el-button>
              <el-button @click="handleClickEdit(scope.row)"
                         type="text"
                         size="small">修改</el-button>
              <el-button @click="handleClicDelete(scope.row)"
                         type="text"
                         size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
      <!-- <div style="float: right;">
          <el-pagination layout="total, prev, pager, next, jumper"
                         :page-size="pageSize"
                         @current-change="handleCurrentModify"
                         :current-page="pageNum"
                         :total="pageTotal">
          </el-pagination>
        </div> -->
    </el-row>
    <!-- 新增 -->
    <el-dialog title="新增"
               width="60%"
               :visible.sync="addDialogVisible"
               :close-on-click-modal="false"
               append-to-body
               @close="queryTableList">
      <el-form :model="addFormList"
               :rules="rules"
               :inline="true"
               ref="addFormList"
               size="small">
        <el-row>
          <el-col :span="12">
            <el-form-item label="菜单名称"
                          prop="name">
              <el-input v-model="addFormList.name"
                        class="dt-form-width"
                        placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="父级Id"
                          prop="parentId">
              <el-select v-model="addFormList.parentId"
                         clearable
                         placeholder="请选择"
                         class="dt-form-width">
                <el-option label="无"
                           value="0"></el-option>
                <el-option v-for="(item, index) in parentIdList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row type="flex"
              justify="end">
        <el-col :span="12"
                class="dt-button-box">
          <el-button type="primary"
                     @click="handleClickAddConfirm('addFormList')">确 定</el-button>
          <el-button type="info"
                     @click="addDialogVisible = false">取 消</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog title="修改"
               width="60%"
               :visible.sync="editDialogVisible"
               :close-on-click-modal="false"
               append-to-body
               @close="queryTableList">
      <el-form :model="editFormList"
               :rules="rules"
               :inline="true"
               ref="editFormList"
               size="small">
        <el-row>
          <el-col :span="12">
            <el-form-item label="菜单名称"
                          prop="menuTitle">
              <el-input v-model="editFormList.menuTitle"
                        class="dt-form-width"
                        placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="父级菜单"
                          prop="parentId">
              <el-select clearable
                         v-model="editFormList.parentId"
                         placeholder="请选择"
                         class="dt-form-width">
                <el-option label="无"
                           :value="0"></el-option>
                <el-option v-for="(item, index) in parentIdList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row type="flex"
              justify="end">
        <el-col :span="12"
                class="dt-button-box">
          <el-button type="primary"
                     @click="handleClickEditConfirm('editFormList')">确 定</el-button>
          <el-button type="info"
                     @click="editDialogVisible = false">取 消</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 详情 -->
    <el-dialog title="详情"
               width="60%"
               :visible.sync="detailDialogVisible"
               :close-on-click-modal="false"
               append-to-body
               @close="queryTableList">
      <el-form :model="detailFormList"
               :rules="rules"
               :inline="true"
               ref="detailFormList"
               size="small">
        <el-row>
          <el-col :span="12">
            <el-form-item label="菜单名称">
              <el-input v-model="detailFormList.menuTitle"
                        class="dt-form-width"
                        readonly
                        placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="父级菜单">
              <el-select clearable
                         v-model="detailFormList.parentId"
                         placeholder="请选择"
                         class="dt-form-width"
                         disabled>
                <el-option label="无"
                           :value="0"></el-option>
                <el-option v-for="(item, index) in parentIdList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row type="flex"
              justify="end">
        <el-col :span="12"
                class="dt-button-box">
          <el-button type="info"
                     @click="detailDialogVisible = false">取 消</el-button>
        </el-col>
      </el-row>
    </el-dialog>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
  },
  //监听属性 类似于data概念
  computed: {
  },
  data () {
    //这里存放数据
    return {
      datalist: [],
      searchForm: {},  // 顶部查询表单
      pageNum: 1,
      pageSize: 15, // 每页的数据条数
      pageTotal: 15,

      addFormList: {},// 新增表单
      addDialogVisible: false, // 新增弹窗

      detailFormList: {},// 详情表单
      detailDialogVisible: false, // 详情弹窗

      editFormList: {},// 详情表单
      editDialogVisible: false, //修改弹窗

      rules: {
        name: [{ required: true, message: '请输入', trigger: 'blur' }],
        menuTitle: [{ required: true, message: '请输入', trigger: 'blur' }],
        parentId: [{ required: true, message: '请选择', trigger: 'change' }],
      },

      parentIdList: [],// 停车场列表
      option: []
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.queryParentIdList()
    this.queryTableList()
  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {
    // 获取父级id
    queryParentIdList () {
      let info = {
        pageNum: 1,
        pageSize: 1000
      }
      this.$directoryManagement.categoryList(info).then(res => {
        this.parentIdList = res.result
      })
    },
    // 默认渲染
    queryTableList () {
      this.searchForm['pageNum'] = this.pageNum;
      this.searchForm['pageSize'] = this.pageSize;
      this.searchForm['companyId'] = '001'
      this.$directoryManagement.categoryTreeList(this.searchForm).then(res => {
        this.datalist = res.result
        this.pageTotal = res.result.total
      })
    },
    // 分页
    handleCurrentModify (val) {
      this.pageNum = val;
      this.queryTableList()
    },
    // 查询
    queryButton () {
      this.pageNum = 1
      this.queryTableList()
    },
    // 重置
    resetForm () {
      this.searchForm = {}
      this.pageNum = 1
      this.queryTableList()
    },
    //查看详情
    handleClickDetail (row) {
      this.detailFormList = row
      this.detailDialogVisible = true
    },
    // 新增弹窗
    handleClickAdd () {
      this.addDialogVisible = true
      this.addFormList = {}
    },
    // 新增确认提交
    handleClickAddConfirm (formName) {
      this.addFormList['companyId'] = "001";
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$directoryManagement.categoryAddList(this.addFormList).then((response) => {
            this.$message({ message: '新增成功', type: 'success' });
            this.addDialogVisible = false
            this.queryTableList()
          })
        }
      })
    },
    //查看详情
    handleClickDetail (row) {
      this.detailFormList = row
      this.detailDialogVisible = true
    },
    //修改
    handleClickEdit (row) {
      this.editFormList = {}
      this.editFormList = row
      this.editDialogVisible = true
    },
    // 修改
    handleClickEditConfirm () {
      let info = {
        id: this.editFormList.menuId,
        parentId: this.editFormList.parentId,
        name: this.editFormList.menuTitle
      }
      this.$directoryManagement.categoryEditList(info).then((response) => {
        this.$message({ message: '修改成功', type: 'success' });
        this.editDialogVisible = false
        this.queryTableList()
      })
    },
    handleClicDelete (row) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        let info = { id: row.menuId }
        this.$directoryManagement.categoryDeleteList(info).then(() => {
          this.$message({ type: "success", message: "删除成功!" });
          this.queryTableList();
        });
      }).catch(err => {
        this.$message({ type: "info", message: "已取消删除" });
      });
    }
  },
}
</script>
<style lang='scss' scoped>
.mainbody {
  width: 100%;
  height: 100%;
  background-color: #f5f6f7;
  overflow: hidden;
  .tableTitle {
    width: 100%;
    height: 54px;
    line-height: 54px;
    padding: 0 20px;
    background: #ffffff;
    .tableTitleButton {
      float: right;
    }
  }
  .tableContent {
    width: 100%;
    height: calc(100% - 74px);
    margin-top: 10px;
    overflow-y: auto;
  }
}
.dt-button-box {
  display: flex;
  justify-content: flex-end;
}
.dt-form-width {
  width: 230px;
}
</style>
