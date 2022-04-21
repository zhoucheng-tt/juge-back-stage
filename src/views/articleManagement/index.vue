<!--
 * @Description: 文章管理
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng-tt
 * @Date: 2022-03-21 15:53:22
 * @LastEditors: zhoucheng
-->
<template>
  <div class="mainbody">

    <el-row class="tableRow">
      <el-row class="tableTitle">
        <span>文章列表</span>
        <span class="tableTitleButton">
          <el-button type="success"
                     @click="handleClickAdd">新 增</el-button>
        </span>
      </el-row>
      <el-row class="tableContent">
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
                  'text-align': 'center'
                  }"
                  :cell-style="{
                  fontfamily: 'PingFangSC-Regular',
                  letterSpacing: '0.56px',
                  fontSize: '14px',
                  color: '#333333',
                  'text-align': 'center'
                  }">
          <!-- <el-table-column prop="id"
                           :show-overflow-tooltip="true"
                           label="编号" /> -->
          <el-table-column prop="title"
                           :show-overflow-tooltip="true"
                           label="文章名称" />
          <el-table-column prop="weight"
                           :show-overflow-tooltip="true"
                           label="权重" />
          <el-table-column prop="categoryName"
                           :show-overflow-tooltip="true"
                           label="文章分类" />
          <!-- <el-table-column prop="demodata1"
                           :show-overflow-tooltip="true"
                           label="状态" /> -->
          <el-table-column prop="image"
                           :show-overflow-tooltip="true"
                           label="图片" />
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
        <div style="float: right;">
          <el-pagination layout="total, prev, pager, next, jumper"
                         @current-change="handleCurrentModify"
                         :page-size="pageSize"
                         :current-page="pageNum"
                         :total="pageTotal">
          </el-pagination>
        </div>
      </el-row>
    </el-row>
    <!-- 新增 -->
    <el-dialog title="新增"
               :visible.sync="addDialogVisible"
               :close-on-click-modal="false"
               append-to-body
               @close="queryTableList">
      <el-form :model="addFormList"
               :rules="rules"
               :inline="true"
               ref="addFormList"
               label-width="150px"
               size="small">
        <el-row justify="space-around">
          <el-col :span="12">
            <el-form-item label="标题"
                          prop="title">
              <el-input v-model="addFormList.title"
                        class="dt-form-width"
                        placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文章分类"
                          prop="categoryId">
              <el-select clearable
                         filterable
                         v-model="addFormList.categoryId"
                         placeholder="请选择"
                         class="dt-form-width">
                <el-option label="无"
                           :value="0"></el-option>
                <el-option v-for="(item, index) in categoryIdList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row justify="space-around">
          <el-col :span="12">
            <el-form-item label="简介"
                          prop="description">
              <el-input v-model="addFormList.description"
                        class="dt-form-width"
                        type="textarea"
                        placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-row>图片上传</el-row>
          <el-upload class="avatar-uploader"
                     action=""
                     :show-file-list="false"
                     accept="image/*"
                     :limit="1"
                     :http-request="upLoadPic"
                     style="border:1px solid gray;width:178px;height:178px">
            <img v-if="addFormList.image"
                 :src="addFormList.image"
                 class="avatar">
            <i v-else
               class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-row>
        <el-row>
          <mavon-editor ref="md"
                        v-model="addFormList.content"
                        @imgAdd="$imgAdd"
                        @change="change"
                        style="min-height: 600px" />
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
               :visible.sync="editDialogVisible"
               :close-on-click-modal="false"
               append-to-body
               @close="queryTableList">
      <el-form :model="editFormList"
               :rules="rules"
               :inline="true"
               ref="editFormList"
               label-width="150px"
               size="small">
        <el-row justify="space-around">
          <el-col :span="12">
            <el-form-item label="标题"
                          prop="title">
              <el-input v-model="editFormList.title"
                        class="dt-form-width"
                        placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文章分类"
                          prop="categoryId">
              <el-select clearable
                         filterable
                         v-model="editFormList.categoryId"
                         placeholder="请选择"
                         class="dt-form-width">
                <el-option label="无"
                           :value="0"></el-option>
                <el-option v-for="(item, index) in categoryIdList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row justify="space-around">
          <el-col :span="12">
            <el-form-item label="简介"
                          prop="description">
              <el-input v-model="editFormList.description"
                        class="dt-form-width"
                        type="textarea"
                        placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button @click="handleClickRemove">清空图片</el-button>
        <el-upload class="avatar-uploader"
                   action=""
                   :show-file-list="false"
                   accept="image/*"
                   :limit="1"
                   :http-request="upLoadPicEdit"
                   style="border:1px solid gray;width:178px;height:178px">
          <img v-if="editFormList.image"
               :src="editFormList.image"
               class="avatar">
          <i v-else
             class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-row>
          <mavon-editor ref="md"
                        v-model="editFormList.content"
                        @imgAdd="$imgAdd"
                        @change="change"
                        style="min-height: 600px" />
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
               :visible.sync="detailDialogVisible"
               :close-on-click-modal="false"
               append-to-body
               @close="queryTableList">
      <el-form :model="detailFormList"
               :rules="rules"
               :inline="true"
               ref="detailFormList"
               label-width="150px"
               size="small">
        <el-row justify="space-around">
          <el-col :span="12">
            <el-form-item label="标题"
                          prop="title">
              <el-input v-model="detailFormList.title"
                        class="dt-form-width"
                        readonly
                        placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文章分类"
                          prop="categoryId">
              <el-select clearable
                         v-model="detailFormList.categoryId"
                         placeholder="请选择"
                         class="dt-form-width"
                         disabled>
                <el-option label="无"
                           :value="0"></el-option>
                <el-option v-for="(item, index) in categoryIdList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row justify="space-around">
          <el-col :span="12">
            <el-form-item label="简介"
                          prop="description">
              <el-input v-model="detailFormList.description"
                        readonly
                        type="textarea"
                        class="dt-form-width"
                        placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="border:1px solid gray;width:178px;height:178px"
                v-if="detailFormList.image">
          <img :src=detailFormList.image
               style="width:100%;height:100%"
               alt="">
        </el-row>
        <el-row>
          <mavon-editor ref="md"
                        v-model="detailFormList.content"
                        @imgAdd="$imgAdd"
                        @change="change"
                        style="min-height: 600px" />
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
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Compressor from 'compressorjs'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    mavonEditor
  },
  //监听属性 类似于data概念
  computed: {
  },
  data () {
    //这里存放数据
    return {
      datalist: [{ demodata1: '1' }],
      searchForm: {},  // 顶部查询表单
      pageNum: 1,
      pageSize: 1000, // 每页的数据条数
      pageTotal: 15,

      addFormList: {},// 新增表单
      addDialogVisible: false, // 新增弹窗

      detailFormList: {},// 详情表单
      detailDialogVisible: false, // 详情弹窗

      editFormList: {},// 详情表单
      editDialogVisible: false, //修改弹窗

      rules: {
        title: [{ required: true, message: '请输入', trigger: 'blur' }],
        categoryId: [{ required: true, message: '请选择', trigger: 'change' }],
        description: [{ required: true, message: '请输入', trigger: 'blur' }],
      },

      categoryIdList: [],// 文章分类
      html: '',// mk文章内容
      configs: {},

      image: "",
      option: [],
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.queryCategoryIdList()
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
    //上传图片
    upLoadPic (file) {
      const self = this
      new Compressor(file.file, {
        quality: 1,
        success (result) {
          result = new window.File([result], result.name, { type: result.type })
          const formData = new FormData()
          formData.append('file', result)
          self.$axios.post('api/file/upload',
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          ).then((res) => {
            self.addFormList.image = "/api" + res.data.result
            self.$forceUpdate()
          })
        }, error (err) {
          console.log('压缩失败', err)
        }
      })
    },
    // 修改图片
    handleClickRemove () {
      this.editFormList.image = ""
    },
    // 修改上传图片
    upLoadPicEdit (file) {
      const self = this
      new Compressor(file.file, {
        quality: 1,
        success (result) {
          result = new window.File([result], result.name, { type: result.type })
          const formData = new FormData()
          formData.append('file', result)
          self.$axios.post('api/file/upload',
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          ).then((res) => {
            self.editFormList.image = "/api" + res.data.result
            self.$forceUpdate()
          })
        }, error (err) {
          console.log('压缩失败', err)
        }
      })
    },
    // 获取文章分类
    queryCategoryIdList () {
      let info = {
        companyId: '001',
        pageNum: 1,
        pageSize: 1000,
      }
      this.$directoryManagement.categoryList(info).then(res => {
        this.categoryIdList = res.result
      })
    },
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd (pos, $file) {
      var formdata = new FormData();
      formdata.append('file', $file);
      this.$axios.post('api/file/upload',
        formdata,
        {
          headers: {
            // 'userToken': localStorage.getItem("userToken"),
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then((res) => {
        this.$refs.md.$img2Url(pos, "/api" + res.data.result);
      })
    },
    // 所有操作都会被解析重新渲染   render 为 markdown 解析后的结果[html]
    change (value, render) {
      this.html = render;
    },
    // 默认渲染
    queryTableList () {
      this.searchForm['pageNum'] = this.pageNum;
      this.searchForm['pageSize'] = this.pageSize;
      this.$articleManagement.articleList(this.searchForm).then(res => {
        this.datalist = res.result.list
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addFormList['contentHtml'] = this.html
          this.$articleManagement.articleAddList(this.addFormList).then((response) => {
            this.$message({ message: '新增成功', type: 'success' });
            this.addDialogVisible = false
            this.queryTableList()
            window.location.reload()
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
      this.editFormList['contentHtml'] = this.html
      this.$articleManagement.articleEditList(this.editFormList).then(() => {
        this.$message({ message: '修改成功', type: 'success' });
        this.editDialogVisible = false
        this.queryTableList()
        window.location.reload()
      })
    },
    handleClicDelete (row) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        let info = { id: row.id };
        this.$articleManagement.articleDeleteList(info).then(res => {
          this.$message({ type: "success", message: "删除成功!" });
          this.queryTableList();
        });
      }).catch(() => {
        this.$message({ type: "info", message: "已取消删除" });
      });
    }
  },
}
</script>
<style lang='scss' scoped>
.mainbody {
  height: 100%;
  // 顶部查询条件
  .selectLine {
    width: 100%;
    height: 135px;
    padding-top: 24px;
    padding-left: 21px;
    display: flex;
    flex-direction: column;
    background-color: #8bc6ec;
    background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
    .firstLine {
      display: flex;
      flex-direction: row;
    }
    .topButton {
      display: flex;
      padding-left: 91px;
    }
  }
  .tableRow {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    background-color: #8bc6ec;
    background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
    .tableTitle {
      margin-top: 16px;
      height: 32px;
      line-height: 32px;
      .topButton {
        display: flex;
        padding-left: 30px;
      }
      .tableTitleButton {
        float: right;
      }
    }
    .tableContent {
      margin-top: 20px;
    }
  }
}
.dt-button-box {
  display: flex;
  justify-content: flex-end;
}
.dt-form-width {
  width: 230px;
}
.avatar-uploader .el-upload {
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
