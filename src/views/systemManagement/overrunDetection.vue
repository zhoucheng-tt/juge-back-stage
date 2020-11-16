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
        <p>角色管理</p>
        <!--上边部分-->
        <div class="top">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="角色名">
                    <el-input v-model="roleName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="top-select"
                               @click="queryRoleList">查询
                    </el-button>
                </el-form-item>
                <el-button type="primary"
                           @click="addRole">新增角色
                </el-button>
            </el-form>
        </div>
        <!--新增角色-->
        <!--        <div class="middle">-->
        <!--            <el-button type="primary" class="middle-add"-->
        <!--                       @click="addRole">新增角色-->
        <!--            </el-button>-->
        <!--        </div>-->
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
                        prop="roleDesc"
                        label="角色描述">
                </el-table-column>
                <el-table-column
                        prop="creater"
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
            <!--按钮新增角色弹窗-->
            <el-dialog
                    title="新增角色"
                    :visible.sync="addRoleListDialog"
                    width="80%"
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
                                    <el-input v-model="addRoleList.roleDesc"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <!--选择权限-->
                <div class="table-give">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">选择权限</p>
                        <!--功能权限-->
                        <div class="table-function">
                            <p>功能权限</p>
                            <!--                        tabs标签页-->
                            <el-tabs v-model="activeName" @tab-click="handleTabClick">
                                <el-tab-pane label="城市智能停车管理与服务平台" name="10">
                                    <!--                        功能权限 城市智能停车管理与服务平台-->
                                    <div v-for="(item,index) in cityOptions1"
                                         :key="index">
                                        <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.check"
                                                     @change="(val) => handleCheckAllChange1(val, item)">{{item.name }}</el-checkbox>
                                        <el-checkbox-group v-model="item.idList1" @change="handleCheckedCitiesChange1">
                                            <el-checkbox @change="(val) => handleCheckChange(val, item, innerItem)" v-for="(innerItem, innerIndex) in item.children"
                                                         :label="innerItem.id"
                                                         :key="innerIndex">{{innerItem.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>

                                </el-tab-pane>


                                <el-tab-pane label="采集与发布平台" name="20">
                                    <div v-for="(item,index) in cityOptions2"
                                         :key="index">
                                        <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.check"
                                                     @change="(val) => handleCheckAllChange1(val, item)">{{item.name }}</el-checkbox>
                                        <el-checkbox-group v-model="item.idList1" @change="handleCheckedCitiesChange1">
                                            <el-checkbox @change="(val) => handleCheckChange(val, item, innerItem)" v-for="(innerItem, innerIndex) in item.children"
                                                         :label="innerItem.id"
                                                         :key="innerIndex">{{innerItem.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="手持终端(PDA)平台" name="30">
                                    <div v-for="(item,index) in cityOptions3"
                                         :key="index">
                                        <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.check"
                                                     @change="(val) => handleCheckAllChange1(val, item)">{{item.name }}</el-checkbox>
                                        <el-checkbox-group v-model="item.idList1" @change="handleCheckedCitiesChange1">
                                            <el-checkbox @change="(val) => handleCheckChange(val, item, innerItem)" v-for="(innerItem, innerIndex) in item.children"
                                                         :label="innerItem.id"
                                                         :key="innerIndex">{{innerItem.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-form>
                </div>
                <!--选择用户-->
                <div class="table-sel">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">选择用户</p>
                        <el-checkbox-group v-model="addChooseUser" @change="handleCheckedUserChoose">
                            <el-checkbox v-for="item  in addChooseList"
                                         :label="item.userId"
                                         :key="item.userId">
                                {{item.name}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
                    <el-button @click="addRoleListDialog = false">取 消</el-button>
                </span>
            </el-dialog>
            <!--操作中的查看弹窗-->
            <el-dialog
                    title="新增角色"
                    :visible.sync="viewListDialog"
                    width="80%"
                    top="2vh">
                <!--基本信息-->
                <div class="table-add">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">基本信息</p>
                        <el-row style="padding-top: 20px">
                            <el-col :span="12">
                                <el-form-item label="角色名称:" label-width="150px">
                                    <el-input v-model="viewList.roleName"/>
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
                <!--选择权限-->
                <div class="table-give">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">选择权限</p>
                        <!--功能权限-->
                        <div class="table-function">
                            <p>功能权限</p>
                            <!--                        tabs标签页-->
                            <el-tabs v-model="activeName" @tab-click="handleTabClick">
                                <el-tab-pane label="城市智能停车管理与服务平台" name="10">
                                    <!--                        功能权限 城市智能停车管理与服务平台-->
                                    <div v-for="(item,index) in cityOptions1"
                                         :key="index">
                                        <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.check"
                                                     @change="(val) => handleCheckAllChange1(val, item)">{{item.name }}</el-checkbox>
                                        <el-checkbox-group v-model="item.idList1" @change="handleCheckedCitiesChange1">
                                            <el-checkbox @change="(val) => handleCheckChange(val, item, innerItem)" v-for="(innerItem, innerIndex) in item.children"
                                                         :label="innerItem.id"
                                                         :key="innerIndex">{{innerItem.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>

                                </el-tab-pane>


                                <el-tab-pane label="采集与发布平台" name="20">
                                    <div v-for="(item,index) in cityOptions2"
                                         :key="index">
                                        <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.check"
                                                     @change="(val) => handleCheckAllChange1(val, item)">{{item.name }}</el-checkbox>
                                        <el-checkbox-group v-model="item.idList1" @change="handleCheckedCitiesChange1">
                                            <el-checkbox @change="(val) => handleCheckChange(val, item, innerItem)" v-for="(innerItem, innerIndex) in item.children"
                                                         :label="innerItem.id"
                                                         :key="innerIndex">{{innerItem.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="手持终端(PDA)平台" name="30">
                                    <div v-for="(item,index) in cityOptions3"
                                         :key="index">
                                        <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.check"
                                                     @change="(val) => handleCheckAllChange1(val, item)">{{item.name }}</el-checkbox>
                                        <el-checkbox-group v-model="item.idList1" @change="handleCheckedCitiesChange1">
                                            <el-checkbox @change="(val) => handleCheckChange(val, item, innerItem)" v-for="(innerItem, innerIndex) in item.children"
                                                         :label="innerItem.id"
                                                         :key="innerIndex">{{innerItem.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-form>
                </div>
                <!--选择用户-->
                <div class="table-sel">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">选择用户</p>
                        <el-checkbox-group v-model="addChooseUser" @change="handleCheckedUserChoose">
                            <el-checkbox v-for="item  in addChooseList"
                                         :label="item.userId"
                                         :key="item.userId">
                                {{item.name}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="viewListDialog = false">返回</el-button>
                </span>
            </el-dialog>
            <!--修改弹框-->
            <el-dialog
                    title="新增角色"
                    :visible.sync="modRoleLisDialog"
                    width="80%"
                    top="2vh">
                <!--基本信息-->
                <div class="table-add">
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
                                    <el-input v-model="alterRoleList.roleDesc"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <!--选择权限-->
                <div class="table-give">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">选择权限</p>
                        <!--功能权限-->
                        <div class="table-function">
                            <p>功能权限</p>
                            <!--                        tabs标签页-->
                            <el-tabs v-model="activeName" @tab-click="handleTabClick">
                                <el-tab-pane label="城市智能停车管理与服务平台" name="10">
                                    <!--                        功能权限 城市智能停车管理与服务平台-->
                                    <div v-for="(item,index) in cityOptions1"
                                         :key="index">
                                        <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.check"
                                                     @change="(val) => handleCheckAllChange1(val, item)">{{item.name }}</el-checkbox>
                                        <el-checkbox-group v-model="item.idList1" @change="handleCheckedCitiesChange1">
                                            <el-checkbox @change="(val) => handleCheckChange(val, item, innerItem)" v-for="(innerItem, innerIndex) in item.children"
                                                         :label="innerItem.id"
                                                         :key="innerIndex">{{innerItem.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>

                                </el-tab-pane>


                                <el-tab-pane label="采集与发布平台" name="20">
                                    <div v-for="(item,index) in cityOptions2"
                                         :key="index">
                                        <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.check"
                                                     @change="(val) => handleCheckAllChange1(val, item)">{{item.name }}</el-checkbox>
                                        <el-checkbox-group v-model="item.idList1" @change="handleCheckedCitiesChange1">
                                            <el-checkbox @change="(val) => handleCheckChange(val, item, innerItem)" v-for="(innerItem, innerIndex) in item.children"
                                                         :label="innerItem.id"
                                                         :key="innerIndex">{{innerItem.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="手持终端(PDA)平台" name="30">
                                    <div v-for="(item,index) in cityOptions3"
                                         :key="index">
                                        <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.check"
                                                     @change="(val) => handleCheckAllChange1(val, item)">{{item.name }}</el-checkbox>
                                        <el-checkbox-group v-model="item.idList1" @change="handleCheckedCitiesChange1">
                                            <el-checkbox @change="(val) => handleCheckChange(val, item, innerItem)" v-for="(innerItem, innerIndex) in item.children"
                                                         :label="innerItem.id"
                                                         :key="innerIndex">{{innerItem.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-form>
                </div>
                <!--选择用户-->
                <div class="table-sel">
                    <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px">
                        <p style="font-size: 20px">选择用户</p>
                        <el-checkbox-group v-model="addChooseUser" @change="handleCheckedUserChoose">
                            <el-checkbox v-for="item  in addChooseList"
                                         :label="item.userId"
                                         :key="item.userId">
                                {{item.name}}
                            </el-checkbox>
                        </el-checkbox-group>
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
                //按钮新增角色弹窗
                addRoleListDialog: false,
                //新增角色暂存
                addRoleList: {},
                //新增功能权限
                checkAll1: false,
                checkedCities: [],
                // cities: cityOptions,
                isIndeterminate: true,
                //新增选择用户暂存数据
                addSelectUserList: [],
                //标签页数据暂存
                tabs: [],
                //新增权限功能
                activeName:'10',
                //绑定新增选择用户
                addChooseUser: [],
                //新增选择用户的数据暂存
                addChooseList:[],
                //存放新增userId
                userId:[],
                //创建者
                creater:"admin",
                //新增功能权限父级选择框暂存
                cityOptions1: [],
                cityOptions2: [],
                cityOptions3: [],
                //新增权限管理children暂存
                idList1: [],
                //存放新增funcId
                funcIdList:[],
                //新增存放的分离后的funcid
                funcIdSplit:[],
                //顶部输入框角色名
                roleName: "",
                //数据表格数据
                roleManagementData: [],
                //初始化分页
                pageNum: 1,
                pageSize: 10,
                pageTotal: 1,
                //查看角色弹窗
                viewListDialog: false,
                //查看角色暂存
                viewList: [],
                //表格操作中修改弹窗
                modRoleLisDialog: false,
                //表格修改弹窗中传入的数据暂存
                alterRoleList: [],
            }
        },
        mounted() {
            //调用查询列表
            this.queryRoleList();
            //新增权限功能
            this.queryFuncListByRole('10');
            //新增选择用户功能
            this.queryUserListByRole();
        },
        methods: {
            //操作中的删除按钮(删除一行)
            del(row) {
                //点击删除按钮出现的提示框
                this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //设定传入行数据
                    const param = {
                        roleId: [row.roleId]
                    }
                    console.log("打印删除行id", param)
                    //调用接口中的删除方法
                    this.$systemUser.deleteRole(param).then(() => {
                        //提示删除成功
                        this.$message({type: 'success', message: '删除成功!'});
                        //重新执行查询 （重新加载页面）
                        this.queryRoleList();
                    });
                }).catch(() => {
                    //取消删除按钮
                    this.$message({type: 'info', message: '已取消删除'});
                });
            },
            //顶部查询按钮
            queryRoleList() {
                var that = this;
                const param = {
                    //传入查询要用的参数
                    roleName: this.roleName,
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                };
                //引用deviceManagement中的查询接口方法
                this.$systemUser.queryRoleList(param).then(response => {
                    //分页
                    that.pageTotal = response.data.totalRecord;
                    //查询
                    that.roleManagementData = response.data.dataList;
                })
            },
            //分页查询
            handleCurrentModify(val) {
                //查询分页
                this.pageNum = val;
                this.queryRoleList();
            },
            //新增角色按钮
            addRole() {
                this.addRoleListDialog = true;
                console.log("角色管理新增弹框弹出");
                //清空弹出框
                this.addRoleList = {};
                this.funcIdList=[];
                this.userId=[];
                this.queryFuncListByRole();
            },
            //新增标签页的tabs事件
            handleTabClick(tab, event) {
                console.log(tab, event);
            },
            //新增角色按钮确认提交
            onSubmitAdd() {
                this.addRoleListDialog = false;
                console.log("打印新增角色列表", this.addRoleList);
                const param = {
                    //角色管理新增要传入参数
                    roleName: this.addRoleList.roleName,
                    roleDesc: this.addRoleList.roleDesc,
                    creater: this.creater,
                    funcId:this.funcIdList,
                    userId: this.addChooseUser
                }
                console.log("新增全部参数",param)
                this.$systemUser.addRole(param).then(response => {
                    console.log("打印新增响应数据", response);
                    //添加成功弹出
                    this.$message({type: "success", message: "添加成功!"});
                    //添加成功 弹出框隐藏
                    this.addRoleListDialog = false;
                    //添加成功 刷新页面 调用查询方法
                    this.queryRoleList();
                });
            },
            //新增页面中功能权限，城市智能停车管理与服务平台
            queryFuncListByRole() {
                const param1 = {
                    funcId: "10"
                }
                this.$systemUser.queryFuncListByRole(param1).then(res => {
                    let list= res.data.dataList
                    for(var i = 0; i < list.length; i++) {
                        let item=list[i]
                        item.check=false
                        if(item.children != undefined) {
                            for (var j = 0; j < item.children.length; j++) {
                                let data = item.children[j]
                                data.check = false
                            }
                        }
                    }
                    console.log('处理完成后的新增权限',list)
                    for(let i = 0 ; i < list.length ; i++){
                        list[i].idList1 = []
                    }
                    this.cityOptions1=list
                });
                const param2 = {
                    funcId: "20"
                }
                this.$systemUser.queryFuncListByRole(param2).then(res => {
                    // console.log("打印新增功能权限获取到的参数2", res)
                    let list= res.data.dataList
                    for(var i = 0; i < list.length; i++) {
                        let item=list[i]
                        item.check=false
                        if(item.children != undefined) {
                            for (var j = 0; j < item.children.length; j++) {
                                let data = item.children[j]
                                data.check = false
                            }
                        }
                    }
                    console.log(list,'处理完成后的')
                    for(let i = 0 ; i < list.length ; i++){
                        list[i].idList1 = []
                    }
                    this.cityOptions2 = res.data.dataList;

                });
                const param3 = {
                    funcId: "30"
                }
                this.$systemUser.queryFuncListByRole(param3).then(res => {
                    // console.log("打印新增功能权限获取到的参数3", res)
                    let list= res.data.dataList
                    for(var i = 0; i < list.length; i++) {
                        let item=list[i]
                        item.check=false
                        if(item.children != undefined){
                            for (var j = 0; j < item.children.length; j++) {
                                let data=item.children[j]
                                data.check=false
                            }
                        }
                    }
                    console.log(list,'处理完成后的')
                    for(let i = 0 ; i < list.length ; i++){
                        list[i].idList1 = []
                    }
                    this.cityOptions3 = res.data.dataList;

                })
            },
            //调用接口方法获取新增选择用户数据
            queryUserListByRole() {
                const param={
                };
                this.$systemUser.queryUserListByRole(param).then(res => {
                    //将选择的用户存到addChooseList中
                    this.addChooseList = res.data.dataList;
                    console.log("打印出userId参数",this.addChooseList);
                })
            },
            //新增子集
            handleCheckChange(val, item, innerItem) {

                item.isIndeterminate = item.idList1.length > 0 && item.idList1.length < item.children.length;

                if(item.idList1.length == item.children.length){
                    item.check = true
                }else{
                    item.check = false
                }

                if(val == true){
                    if(this.funcIdList.indexOf(item.id) == -1){
                        this.funcIdList.push(item.id)
                    }

                    if(this.funcIdList.indexOf(innerItem.id) == -1){
                        this.funcIdList.push(innerItem.id)
                    }
                }else{
                    if(this.funcIdList.indexOf(innerItem.id) != -1){
                        this.funcIdList.splice(this.funcIdList.indexOf(innerItem.id),1)
                    }

                    if(item.check == false && item.isIndeterminate == false){
                        if(this.funcIdList.indexOf(item.id) != -1){
                            this.funcIdList.splice(this.funcIdList.indexOf(item.id),1)
                        }
                    }
                }

                console.log("this.funcIdList",this.funcIdList);
            },
            //新增中的权限功能多选框 全选 和 全不选
            handleCheckAllChange1(val, item) {
                item.isIndeterminate = false
                if (val === true) {
                    for (let i = 0; i < item.children.length; i++) {
                        item.idList1.push(item.children[i].id)
                    }

                    if (this.funcIdList.indexOf(item.id) == -1) {
                        this.funcIdList.push(item.id)
                    }

                    for (let i = 0; i < item.idList1.length; i++) {
                        if (this.funcIdList.indexOf(item.idList1[i]) == -1) {
                            this.funcIdList.push(item.idList1[i])
                        }
                    }

                } else {
                    item.idList1 = []

                    if (this.funcIdList.indexOf(item.id) != -1) {
                        this.funcIdList.splice(this.funcIdList.indexOf(item.id), 1)
                    }

                    for (let i = 0; i < item.children.length; i++) {
                        if (this.funcIdList.indexOf(item.children[i].id) != -1) {
                            this.funcIdList.splice(this.funcIdList.indexOf(item.children[i].id), 1)
                        }
                    }
                }
                console.log("存放要传入的funcId未分离的最终结果", this.funcIdList)


            },
            handleCheckedCitiesChange1(value) {
                let checkedCount = value.length;
                this.checkAll1 = checkedCount === this.idList1.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.idList1.length;
            },
            //新增中的权限功能选择用户多选框
            handleCheckedUserChoose(val) {
                this.addChooseUser=val;
                console.log('打印传入选择用户的userId',this.addChooseUser)
            },
            //操作中的查看按钮
            check(row) {
                // this.addChooseUser = [],
                //     this.funcIdList=[],
                //     this.viewList = row;
                // const param = {
                //     // roleId: row.roleId
                // };
                // this.$systemUser.queryFuncListByRole(param).then(res => {
                //     res.data.dataList.forEach(item => {
                //         if (item.permission == true) {
                //             this.addChooseUser.push(item.roleId)
                //         }
                //     });
                //     console.log("打印存储的id", this.addChooseUser)
                // });
                // this.$systemUser.queryUserListByRole(param).then(res => {
                //     res.data.dataList.forEach(item => {
                //         if (item.permission == true) {
                //             this.addChooseUser.push(item.roleId)
                //         }
                //     });
                //     console.log("打印存储的id", this.addChooseUser)
                // });
                this.viewListDialog = true;
            },
            //操作中的修改按钮
            alter(row) {
                this.modRoleLisDialog = true;
            },
            //操作中修改按钮弹窗的确认修改
            onSubmitMod() {
                this.modRoleLisDialog = false;
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
    .demo-form-inline {
        margin-top: 0.75%;
        /*margin-left: 5%;*/
    }

    /*上半部查询按钮*/
    .top-select {
    }

    /*上半部导出按钮*/
    .top-exPort {
    }

    /*middle中新增用户按钮样式*/
    .middle-add {
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
    .el-pagination {
        position: relative;
        left: 78%
    }

    /*新增弹窗样式*/
    /*基本信息*/
    .table .table-add {
    }

    /*选择角色*/
    .table .table-sel {
        margin-top: 280px
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
        /*margin-left: 5%;*/
        /*background-color: #007aff;*/
    }

    .table-function-scr {
        font-fsize: 20px;
        margin-bottom: 10px;
        /*margin-left: 5%;*/
        overflow-x: hidden;
        height: 25vh
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

</style>
