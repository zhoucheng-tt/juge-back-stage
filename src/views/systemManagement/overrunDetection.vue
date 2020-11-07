<!--
    角色管理
 * @Author: 邵青阳
 * @Date: 2020-10-20 09:41:41
 * @LastEditTime: 2020-10-20 10:35:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\realTimeMonitoringCarWaring\realTimeMonitoringCarWaring.vue
-->
<template>
    <div class="about">
        <p>角色管理</p>
        <!--上边部分-->
        <div class="top">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="角色名">
                    <el-input v-model="role" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="top-select"
                               @click="select">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!--新增角色-->
        <div class="middle" >
            <el-button type="primary" class="middle-add"
                       @click="addRole">新增角色</el-button>
        </div>
        <!--表格部分-->
        <div class="table">
            <!--数据表格-->
            <el-table
                    :data="roleManagementData"
                    :header-cell-style="{ 'text-align': 'center', background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                    :cell-style="{ 'text-align': 'center' }">
                <el-table-column
                        fixed
                        prop="roleName"
                        label="角色名称">
                </el-table-column>
                <el-table-column
                        prop="roleDescribe"
                        label="角色描述">
                </el-table-column>
                <el-table-column
                        prop="creator"
                        label="创建人">
                </el-table-column>
                <el-table-column
                        prop="createTime"
                        label="创建时间">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <el-button @click="check(scope.row)" type="text" size="small">查看</el-button>
                        <el-button @click="alter(scope.row)" type="text" size="small">修改</el-button>
                        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
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
            <!--操作中的查看弹窗-->
            <el-dialog
                    title="查看"
                    :visible.sync="viewListDialog"
                    width="70%"
                    top="2vh">
                <!-- 基本信息表单-->
                <div class="table-basic">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">基本信息</p>
                        <el-row style="padding-top: 20px">
                            <el-col :span="12">
                                <el-form-item label="角色名称:" label-width="150px">
                                    <el-input v-model="addRoleList.roleName"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="角色描述:" label-width="150px">
                                    <el-input v-model="addRoleList.roleDescribe"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <!--赋予的权限-->
                <div class="table-give">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">赋予的权限</p>
                        <!--功能权限-->
                        <div class="table-function">功能权限</div>
                        <el-row class="table-function-1">
<!--                            滚动下拉-->
                            <el-row class="table-function-scr">
                                <el-scrollbar style="height: 100%">
                                    <el-tree
                                            :data="viewTreeData"
                                            show-checkbox
                                            node-key="id"
                                            ref="viewTree"
                                            :default-expanded-keys="[2, 3]"
                                            :default-checked-keys="[5]"
                                            @check-change = "viewCheckChange">
                                    </el-tree>
                                </el-scrollbar>
                            </el-row>
                        </el-row>
                    </el-form>
                </div>
                <div>
<!--                    包含的用户-->
                    <p style="font-size: 20px">包含的用户</p>
<!--                    包含的用户中第一行-->
                    <div class="table-belong-1">
                        <template>
                            <el-checkbox label="用户1"></el-checkbox>
                            <el-checkbox label="用户2"></el-checkbox>
                            <el-checkbox label="用户3"></el-checkbox>
                            <el-checkbox label="用户4"></el-checkbox>
                        </template>
                    </div>
<!--                    包含的用户中的第二行-->
                    <div class="table-belong-1">
                        <template>
                            <el-checkbox label="用户1"></el-checkbox>
                            <el-checkbox label="用户2"></el-checkbox>
                            <el-checkbox label="用户3"></el-checkbox>
                            <el-checkbox label="用户4"></el-checkbox>
                        </template>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="viewListDialog = false">返回</el-button>
                </span>
            </el-dialog>
            <!--按钮新增角色弹窗-->
            <el-dialog
                    title="新增角色"
                    :visible.sync="addRoleListDialog"
                    width="70%"
                    top="2vh">
                <!--基本信息-->
                <div class="table-add">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">基本信息</p>
                        <el-row style="padding-top: 20px">
                            <el-col :span="12">
                                <el-form-item label="角色名称:" label-width="150px">
                                    <el-input v-model="addRoleList.roleName"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="角色描述:" label-width="150px">
                                    <el-input v-model="addRoleList.roleDescribe"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div >
                <!--选择权限-->
                <div class="table-give">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">选择权限</p>
                        <!--功能权限-->
                        <div class="table-function">功能权限</div>
                        <el-row class="table-function-1">
                            <!--滚动下拉-->
                            <el-row class="table-function-scr">
                                <el-scrollbar style="height: 100%">
                                    <el-tree
                                            :data="addButtonTreeData"
                                            show-checkbox
                                            node-key="id"
                                            ref="addButtonTree"
                                            :default-expanded-keys="[2, 3]"
                                            :default-checked-keys="[5]"
                                            @check-change = "addCheckChange">
                                    </el-tree>
                                </el-scrollbar>
                            </el-row>
                        </el-row>
                    </el-form>
                </div>
                <!--选择用户-->
                <div class="table-sel" style="">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">选择用户</p>
                        <div class="table-sel-1">
                            <template>
                                <el-checkbox label="用户1"></el-checkbox>
                                <el-checkbox label="用户2"></el-checkbox>
                                <el-checkbox label="用户3"></el-checkbox>
                                <el-checkbox label="用户4"></el-checkbox>
                            </template>
                        </div>
                        <div class="table-sel-2">
                            <template>
                                <el-checkbox label="用户1"></el-checkbox>
                                <el-checkbox label="用户2"></el-checkbox>
                                <el-checkbox label="用户3"></el-checkbox>
                                <el-checkbox label="用户4"></el-checkbox>
                            </template>
                        </div>
                        <div class="table-sel-3">
                            <template>
                                <el-checkbox label="用户1"></el-checkbox>
                                <el-checkbox label="用户2"></el-checkbox>
                                <el-checkbox label="用户3"></el-checkbox>
                                <el-checkbox label="用户4"></el-checkbox>
                            </template>
                        </div>
                        <div class="table-sel-4">
                            <template>
                                <el-checkbox label="用户1"></el-checkbox>
                                <el-checkbox label="用户2"></el-checkbox>
                                <el-checkbox label="用户3"></el-checkbox>
                                <el-checkbox label="用户4"></el-checkbox>
                            </template>
                        </div>
                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
                    <el-button @click="addRoleListDialog = false">取 消</el-button>
                </span>
            </el-dialog>
            <!--修改弹框-->
            <el-dialog
                    title="修改"
                    :visible.sync="modRoleLisDialog"
                    width="70%"
                    top="2vh"
                    overflow="hidden">
                <!--基本信息-->
                <div class="table-mod">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">基本信息</p>
                        <el-row style="padding-top: 20px">
                            <el-col :span="12">
                                <el-form-item label="角色名称:" label-width="150px">
                                    <el-input v-model="alterRoleList.roleName"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="角色描述:" label-width="150px">
                                    <el-input v-model="alterRoleList.roleDescribe"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div >
                <!--赋予的权限-->
                <div class="table-give">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">赋予的权限</p>
                        <!--功能权限-->
                        <div class="table-function">功能权限</div>
                        <el-row class="table-function-1">
                            <!--滚动下拉-->
                            <el-row class="table-function-scr">
                                <el-scrollbar style="height: 100%">
                                    <el-tree
                                            :data="alterTreeData"
                                            show-checkbox
                                            node-key="id"
                                            ref="alterTree"
                                            :default-expanded-keys="[2, 3]"
                                            :default-checked-keys="[5]"
                                            @check-change = "modCheckChange">
                                    </el-tree>
                                </el-scrollbar>
                            </el-row>
                        </el-row>
                    </el-form>
                </div>
                <!-- 选择角色-->
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
                    <el-button @click="modRoleLisDialog = false">取 消</el-button>
                </span>
            </el-dialog>
            <!--删除弹窗-->
            <el-dialog
                    title="提示信息"
                    :visible.sync="delRoleListDialog"
                    height="100px"
                    top="30vh"
                    width="20%">
                <span style="margin-left:25%;font-size: 20px ">你确定要删除吗？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitDel()">确 定</el-button>
                    <el-button @click="delRoleListDialog = false">取 消</el-button>
                    </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                //顶部输入框角色名
                role:"",
                //数据表格数据
                roleManagementData: [{
                    roleName: '小丑',
                    roleDescribe: '搞笑',
                    creator: '创建者',
                    createTime: '2020-06-20',
                }],
                //初始化分页
                pageNum:1,
                pageSize:10,
                pageTotal:2,
                //查看角色弹窗
                viewListDialog:false,
                //查看角色暂存
                viewList:{},
                //查看弹窗中树形下拉的数据暂存
                viewTree:[],
                //查看弹框中的树形下拉
                viewTreeData: [{
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
                //按钮新增角色弹窗
                addRoleListDialog:false,
                //新增角色暂存
                addRoleList: {},
                //按钮新增树形下拉数据暂存
                addButtonTree:[],
                //按钮新增弹框中的树形下拉
                addButtonTreeData: [{
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
                //表格修改弹窗中传入的数据暂存
                alterRoleList:{},
                //表格操作中修改弹窗
                modRoleLisDialog:false,
                //修改弹窗中的树形下拉
                alterTree:[],
                alterTreeData:[{
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
                //表格操作中的删除弹窗
                delRoleListDialog:false,
            }
        },
            mounted() {
            },
        methods:{
        //顶部查询按钮
            select(){

            },
        //新增角色按钮
            addRole(){
                this.addRoleListDialog=true;
            },
        //新增角色按钮确认提交
            onSubmitAdd(){
                this.addRoleListDialog=false;
            },
        //操作中的查看按钮
            check(){
                this.viewListDialog=true;
            },
        //操作中的修改按钮
            alter(){
                this.modRoleLisDialog=true;
            },
        //操作中修改按钮弹窗的确认修改
            onSubmitMod(){
                this.modRoleLisDialog=false;
            },
        //操作中的删除按钮
            del(){
                this.delRoleListDialog=true;
            },
        //操作按钮中的删除按钮的确认删除
            onSubmitDel(){
                this.delRoleListDialog=false;
            },
        //分页方法
            handleCurrentModify(val){
                this.pageNum = val;
            },
        //查看弹窗中的树形下拉获取参数
            viewCheckChange(data1, data2, data3){
                console.log(data1)
                console.log(data2)
                console.log(data3)
                console.log("获取查看中树形下拉参数",this.viewTree);
            },
        //    新增弹窗中的树形下拉获取参数
            addCheckChange(data4, data5, data6){
                console.log(data4)
                console.log(data5)
                console.log(data6)
                console.log("获取新增中树形下拉参数",this.addButtonTree);
            },
            modCheckChange(data7, data8, data9){
                console.log(data7)
                console.log(data8)
                console.log(data9)
                console.log("获取新增中树形下拉参数",this.alterTree);
            },
        }
    }
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
        height: 270px;
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
/*    设置弹出框的样式*/
/*    /deep/ .el-dialog{*/
/*        margin-top: 2vh;*/
/*        width: 50%;*/
/*        !*height: 700px;*!*/
/*        overflow-y: scroll;*/
/*        overflow-x: hidden;*/
/*    }*/
</style>

