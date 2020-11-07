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
        <p>用户管理</p>
<!--上边部分-->
      <div class="top">
          <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="用户账号">
                  <el-input v-model="userId" ></el-input>
              </el-form-item>
              <el-form-item label="用户姓名">
                  <el-input v-model="userName" ></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" class="top-select"
                             @click="select">查询</el-button>
                  <el-button type="primary" class="top-exPort"
                             @click="exPort">导出</el-button>
              </el-form-item>
          </el-form>
      </div>
<!--新增用户-->
        <div class="middle" >
            <el-button type="primary" class="middle-add"
                       @click="addUser">新增用户</el-button>
        </div>
<!--表格部分-->
        <div class="table">
            <el-table
                    :data="tableData"
                    :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                    :cell-style="{ 'text-align': 'center' }">
                <el-table-column
                        fixed
                        prop="userId"
                        label="用户账号">
                </el-table-column>
                <el-table-column
                        prop="userName"
                        label="用户姓名">
                </el-table-column>
                <el-table-column
                        prop="phoneNum"
                        label="手机号">
                </el-table-column>
                <el-table-column
                        prop="mailBox"
                        label="邮箱">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <el-button @click="check(scope.row)" type="text" size="small">查看</el-button>
                        <el-button @click="alter(scope.row)" type="text" size="small">修改</el-button>
                        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
                        <el-button @click="retPassword(scope.row)" type="text" size="small">密码重置</el-button>
                    </template>
                </el-table-column>
            </el-table>
<!--分页条-->
            <el-pagination
                    @current-change="handleCurrentModify"
                    layout=" prev, pager, next,total, jumper"
                    :current-page="pageNum"
                    :page-size="pageSize"
                    :total="pageTotal">
            </el-pagination>
<!--新增用户弹窗-->
            <el-dialog
                    title="新增用户"
                    :visible.sync="addListDialog"
                    width="70%"
                    overflow="hidden">
<!--                基本信息-->
                <div class="table-add">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">基本信息</p>
                        <el-row style="padding-top: 20px">
                            <el-col :span="12">
                                <el-form-item label="用户账号:" label-width="150px">
                                    <el-input v-model="addList.userId"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="姓名:" label-width="150px">
                                    <el-input v-model="addList.userName"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="手机号:" label-width="150px">
                                    <el-input v-model="addList.phoneNum"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="邮箱:" label-width="150px">
                                    <el-input v-model="addList.mailBox"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div >
<!--                选择角色-->
                <div class="table-sel" style="">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">选择角色</p>
                        <div class="table-sel-1">
                            <template>
                                <el-checkbox label="角色1"></el-checkbox>
                                <el-checkbox label="角色2"></el-checkbox>
                                <el-checkbox label="角色3"></el-checkbox>
                                <el-checkbox label="角色4"></el-checkbox>
                            </template>
                        </div>
                        <div class="table-sel-2">
                            <template>
                                <el-checkbox label="角色1"></el-checkbox>
                                <el-checkbox label="角色2"></el-checkbox>
                                <el-checkbox label="角色3"></el-checkbox>
                                <el-checkbox label="角色4"></el-checkbox>
                            </template>
                        </div>
                        <div class="table-sel-3">
                            <template>
                                <el-checkbox label="角色1"></el-checkbox>
                                <el-checkbox label="角色2"></el-checkbox>
                                <el-checkbox label="角色3"></el-checkbox>
                                <el-checkbox label="角色4"></el-checkbox>
                            </template>
                        </div>
                        <div class="table-sel-4">
                            <template>
                                <el-checkbox label="角色1"></el-checkbox>
                                <el-checkbox label="角色2"></el-checkbox>
                                <el-checkbox label="角色3"></el-checkbox>
                                <el-checkbox label="角色4"></el-checkbox>
                            </template>
                        </div>
                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
                    <el-button @click="addListDialog = false">取 消</el-button>
                </span>
            </el-dialog>
<!--查看用户弹窗-->
            <el-dialog
                    title="查看"
                    :visible.sync="selectListDialog"
                    width="70%"
                    top="8vh"
            >
<!-- 基础信息表单-->
                <div class="table-basic">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                            <p style="font-size: 20px">基本信息</p>
                            <el-row style="padding-top: 20px">
                                <el-col :span="12">
                                    <el-form-item label="用户账号:" label-width="150px">
                                        <el-input v-model="addList.userId"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="姓名:" label-width="150px">
                                        <el-input v-model="addList.userName"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="手机号:" label-width="150px">
                                        <el-input v-model="addList.phoneNum"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="邮箱:" label-width="150px">
                                        <el-input v-model="addList.mailBox"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                </div>
<!--                        归属角色-->
                <div class="table-belong">
                            <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                                <p style="font-size: 20px">归属角色</p>
                                <div class="table-belong-1">
                                    <template>
                                        <el-checkbox label="角色1"></el-checkbox>
                                        <el-checkbox label="角色2"></el-checkbox>
                                        <el-checkbox label="角色3"></el-checkbox>
                                        <el-checkbox label="角色4"></el-checkbox>
                                    </template>
                                </div>
                            </el-form>
                        </div>
<!--                        赋予的权限-->
                <div class="table-give">
                            <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                                <div style="font-size: 20px">赋予的权限</div>
<!--                                功能权限-->
                                <div class="table-function">功能权限</div>
                                <el-row class="table-function-1">
                                    <el-row class="table-function-scr">
                                        <el-scrollbar style="height: 100%">
                                            <el-tree
                                                    :data="treeData"
                                                    show-checkbox
                                                    node-key="id"
                                                    ref="treeList"
                                                    :default-expanded-keys="[2, 3]"
                                                    :default-checked-keys="[5]"
                                                    @check-change = "checkChange"
                                            >
                                            </el-tree>
                                        </el-scrollbar>
                                    </el-row>
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
                    :visible.sync="modLisDialog"
                    width="70%"
                    overflow="hidden">
                <!--基本信息-->
                <div class="table-mod">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">基本信息</p>
                        <el-row style="padding-top: 20px">
                            <el-col :span="12">
                                <el-form-item label="用户账号:" label-width="150px">
                                    <el-input v-model="modList.userId"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="姓名:" label-width="150px">
                                    <el-input v-model="modList.userName"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="手机号:" label-width="150px">
                                    <el-input v-model="modList.phoneNum"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="邮箱:" label-width="150px">
                                    <el-input v-model="modList.mailBox"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div >
                <!--选择角色-->
                <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                    <div class="table-mod-sel">
                    <p style="font-size: 20px">选择角色</p>
                        <div class="table-mod-sel-temp">
                        <template>
                            <el-checkbox label="角色1"></el-checkbox>
                            <el-checkbox label="角色2"></el-checkbox>
                            <el-checkbox label="角色3"></el-checkbox>
                            <el-checkbox label="角色4"></el-checkbox>
                        </template>
                        </div>
                    </div>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitMod()">确 定</el-button>
                    <el-button @click="modLisDialog = false">取 消</el-button>
                </span>
            </el-dialog>
<!--            删除弹窗-->
            <el-dialog
                    title="提示信息"
                    :visible.sync="delListDialog"
                    top="30vh"
                    width="20%">
                    <span style="margin-left:25%;font-size: 20px ">你确定要删除吗？</span>
                    <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitDel()">确 定</el-button>
                    <el-button @click="delListDialog = false">取 消</el-button>
                    </span>
            </el-dialog>
<!--            密码重置弹框-->
            <el-dialog
                    title="提示信息"
                    :visible.sync="retListDialog"
                    top="30vh"
                    width="20%">
                <span style="margin-left:25%;font-size: 20px ">你确定要重置密码吗？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitRet()">确 定</el-button>
                    <el-button @click="retListDialog = false">取 消</el-button>
                    </span>
            </el-dialog>
        </div>

    </div>
  </template>
<script>
    export default {
        data() {
            return {
                //初始化分页
                pageNum:1,
                pageSize:10,
                pageTotal:2,
                //用户账号
                userId: "",
                //用户密码
                userName:"",
                //表格数据
                tableData: [{
                    userId: '2016-05-02',
                    userName: '王小虎',
                    phoneNum: '上海',
                    mailBox: '普陀区',
                }],
                //新增用户暂存
                addList:{},
                //新增用户弹窗
                addListDialog: false,
                //新增用户弹窗中的复选框
                checkList: [],
                //查看用户弹窗
                selectListDialog:false,
                //修改用户弹窗
                modLisDialog:false,
                //删除弹窗
                delListDialog:false,
                //密码重置弹窗
                retListDialog:false,
                //树形下拉获取数据暂存
                treeList:[],
                //查看按钮中的树形下拉
                treeData: [{
                    id: 1,
                    label: '溧水经济开发区管委会智慧停车管理平台',
                    children: [
                        {
                        id: 11,
                        label: '首页',
                        },
                        {
                        id: 12,
                        label: '报表分析',
                        children: [
                           {
                            id: 21,
                            label: '停车场运营指标分析',
                        },
                           {
                            id: 22,
                            label: '停车场运营收入分析',
                        },
                           {
                            id: 23,
                            label: '运营日报/月报',
                            },
                           {
                            id: 24,
                            label: '支付台账统计',
                        }
                        ]
                        },
                        {
                            id: 13,
                            label: '订单管理',
                        },
                        {
                            id: 14,
                            label: '基础信息管理',
                        },
                        {
                            id: 15,
                            label: '授权管理',
                        }
                    ]
                }],
                //查看按钮中的树形下拉
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                //修改数据暂存
                modList:[],
                //删除数据暂存
                delList:[],
                //密码重置数据暂存
                retList:[],
            }
        },
        mounted() {

        },
        methods: {
            //上边按钮查询功能
            select() {
                console.log('select!');
            },
            //上边部分按钮导出功能
            exPort(){
                console.log('export');
            },
            //分页方法
            handleCurrentModify(val){
                this.pageNum = val;
            },
            //新增用户弹窗
            addUser(){
                this.addListDialog=true;
                this.checkList=[];
                console.log('新增');
            },
            //新增用户确认提交
            onSubmitAdd(){
                this.addListDialog=false;
            },
            //表格操作中的查看方法
            //查看用户弹窗
            check(row) {
                this.selectListDialog=true;
                console.log(row);
            },
            //表格操作中修改方法
            alter(row){
                this.modLisDialog=true;
                console.log(row);
            },
            //修改确认按钮
            onSubmitMod(){
                this.modLisDialog=false;
                console.log("修改成功");
            },
            //删除按钮
            del(){
                this.delListDialog=true;
            },
            //表格操作中的删除方法
            onSubmitDel() {
                this.delListDialog=false;
                this.confirm();
                },
            //表格操作中密码重置方法
            retPassword(row){
                this.retListDialog=true;
                const params = {
                    //row.password  = "888888"传入行中用户的密码
                    password: row.password
                };
                this.retList.push(params);
            },
            //密码重置方法
            onSubmitRet(){
                this.retListDialog=false;
            },
            //树形下拉获取参数
            checkChange(data1, data2, data3){
                console.log(data1)
                console.log(data2)
                console.log(data3)
                console.log("获取树形下拉参数",this.treeList);
            },


        }
    }
</script>
<style>
    .about {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    /* 上半部分输入框查询导出 */
    .top {
        width: 100%;
        height: 7.5%;
        float: left;
        /*background-color: rebeccapurple;*/
    }
    /*上半部输入框样式*/
    .demo-form-inline{
        margin-top: 0.75%;
        /*margin-left: 5%;*/
    }
    /*上半部查询按钮*/
    .top-select{
    }
    /*上半部导出按钮*/
    .top-exPort{
    }
    /*middle中新增用户按钮样式*/
    .middle-add{
        margin-top: 0.75%;
        margin-left: 4%;
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
    .el-pagination{
        position: relative;
        left: 78%
    }
    /*新增弹窗样式*/
    /*基本信息*/
    .table .table-add{
    }
    /*选择角色*/
    .table .table-sel{
        margin-top: 10px
    }
    /*选择角色第一行*/
    .table .table-sel .table-sel-1{
        margin-left: 5%;
        display: flex;
        justify-content: space-around
    }
    /*选择角色第二行*/
    .table .table-sel .table-sel-2 {
        margin-left: 5%;
        margin-top:5px;
        display: flex;
        justify-content: space-around
    }
    /*选择角色第三行*/
    .table .table-sel .table-sel-3 {
        margin-left: 5%;
        margin-top:5px;
        display: flex;
        justify-content: space-around
    }
    /*选择角色第四行*/
    .table .table-sel .table-sel-4 {
        margin-left: 5%;
        margin-top:5px;
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px
    }
    /*用户查看弹出样式*/
    /*弹出查看基础信息*/
    .table-basic{
    }
    /*归属角色*/
    .table-belong{
        margin-top: 10px
    }
    /*归属角色选择*/
    .table-belong-1{
        width: 100%;
        margin-bottom: 10px;
        margin-left: 5%
    }
    .table-give{
        margin-top: 10px;
    }
    /*权限功能*/
    .table-function{
        font-size: 18px;
        margin-left: 5%;
        background-color: #007aff;
        width: 85px
    }
    .table-function-1{
        width: 90%;
        margin-left: 5%;
        margin-bottom: 20px
    }
    .table-function-scr{
        font-fsize: 20px;
        margin-bottom: 10px;
        margin-left: 5%;
        height: 25vh
    }
    /*查询下拉横轴滚动条隐藏*/
    .el-scrollbar .el-scrollbar__wrap {
        overflow-x: hidden;
    }
/*    按钮修改样式*/
/*    修改基本信息样式*/
    .table-mod{
    }
/*    修改选择角色样式*/
    .table-mod-sel{
    }
    /*修改选择角色中的选择按钮*/
    .table-mod-sel-temp{
        margin-top: 10px;
        margin-left: 5%;
        margin-bottom: 20px;
    }
</style>
