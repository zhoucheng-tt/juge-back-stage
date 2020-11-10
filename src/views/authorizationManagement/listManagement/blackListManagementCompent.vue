<!--
 * @Author:邵青阳
 * @Date: 2020-11-07 13:55:30
 * @LastEditTime: 2020-11-07 17:00:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\views\authorizationManagement\listManagement\blackListManagementCompent.vue
-->
<template>
    <div>
        <!--        顶部车牌号一栏-->
        <div class="plate">
            <el-form :inline="true" class="demo-form-inline">
                <!--        车牌号输入框-->
                <el-col :span="6">
                    <el-form-item label="车牌号">
                        <el-input v-model="plateNumber" ></el-input>
                    </el-form-item>
                </el-col>
                <!--         停车场下拉框       -->
                <el-col :span="6">
                    <el-form-item label="停车场">
                        <el-select v-model="parkName" placeholder="请选择停车场"
                                   @change="parkingName(parkName)">
                            <el-option v-for="(item, index) in parkLotNameList" :label="item.name" :value="item.code"
                                       :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <!--                查询按钮-->
                <el-form-item>
                    <el-button type="primary"
                               @click="select">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!--        第二行新增黑名单，批量处理-->
        <div class="add" style="display: flex">
            <el-form>
                <!--            新增黑名单-->
                <el-form-item>
                    <el-button type="primary"
                               @click="addBlackList">新增黑名单</el-button>
                    <!--            批量删除-->
                    <el-button type="primary"
                               @click="deleteInBatches">批量删除</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!--        表格内容-->
        <div class="table">
            <el-table :data="parkingLotInformation"
                      :header-cell-style="{ 'text-align': 'center',background: '#24314A', color: '#FFF', border: 'none', padding: 'none', fontSize: '12px', fontWeight: '100' }"
                      :cell-style="{ 'text-align': 'center' }"
                      style="width: 100%;"
                      ref="selectionRow"
                      @selection-change="handleSelectionChange">
                <el-table-column type="selection"/>
                <el-table-column fixed prop="parkId" label="停车场编号"/>
                <el-table-column prop="parkName" :show-overflow-tooltip="true" label="停车场名称"/>
                <el-table-column prop="plateNumber" :show-overflow-tooltip="true" label="车牌号码"/>
                <el-table-column prop="plateColor" :show-overflow-tooltip="true" label="车牌颜色"/>
                <el-table-column prop="carOwnerName" :show-overflow-tooltip="true" label="车主姓名"/>
                <el-table-column prop="phoneNumber" :show-overflow-tooltip="true" label="手机号"/>
                <el-table-column prop="addTime" :show-overflow-tooltip="true" label="加入黑名单时间"/>
                <el-table-column prop="addCause" :show-overflow-tooltip="true" label="加入黑名单原因"/>
                <el-table-column prop="remark" :show-overflow-tooltip="true" label="备注"/>
                <el-table-column prop="BlacklistStatus" :show-overflow-tooltip="true" label="黑名单状态"/>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="200">
                    <template slot-scope="scope">
                        <el-button @click="endUse(scope.row)" type="text" size="small">停用</el-button>
                        <el-button @click="enAble(scope.row)" type="text" size="small">启用</el-button>
                        <el-button @click="aMend(scope.row)" type="text" size="small">修改</el-button>
                        <el-button @click="reMove(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!--分页条-->
            <el-pagination
                    style="position: relative;left: 78%"
                    @current-change="handleCurrentModify"
                    layout="total, prev, pager, next, jumper"
                    :current-page="pageNum"
                    :page-size="pageSize"
                    :total="pageTotal">
            </el-pagination>
        </div>
        <!--        新增黑名单弹窗-->
        <el-dialog
                title="新增黑名单"
                :visible.sync="addBlackListDialog"
                width="70%"
                overflow="hidden">
            <el-row>
                <!--          归属停车场信息-->
                <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px" v-model="addBlackData">
                    <!--                    归属停车场信息-->
                    <el-row>
                        <p>归属停车场信息</p>
                        <el-col :span="12" style="display: flex;margin-left: 6%">
                            <div>
                                <p>归属停车场:</p>
                            </div>
                            <el-form-item style="margin-left: 1%">
                                <el-select v-model="addBlackData.parkName" placeholder="请选择停车场">
                                    <el-option v-for="(item, index) in parkLotNameList" :label="item.name" :value="item.code"
                                               :key="index"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!--                黑名单信息-->
                    <el-row>
                        <p>黑名单信息</p>
                        <el-row>
                            <!--                黑名单信息第一行车牌号码-->
                            <el-col :span="12">
                                <el-form-item label="车牌号码:" label-width="150px">
                                    <el-input v-model="addBlackData.carNumber"></el-input>
                                </el-form-item>
                            </el-col>
                            <!--                黑名单信息第一行车主姓名-->
                            <el-col :span="12">
                                <el-form-item label="车主姓名:" label-width="150px">
                                    <el-input v-model="addBlackData.carOwnerName"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!--                        黑名单信息第二行手机号身份证信息-->
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="手机号:" label-width="150px">
                                    <el-input v-model="addBlackData.phoneNumber"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="身份证信息:" label-width="150px">
                                    <el-input v-model="addBlackData.idCardInformation"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!--                        黑名单第三行车主联系地址-->
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="车主联系地址:" label-width="150px">
                                    <el-input style="width: 400px"
                                              v-model="addBlackData.carOwnerAddress"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!--                        黑名单第四行车牌颜色-->
                        <el-row>
                            <el-col :span="12" style="display: flex;margin-left: 6%">
                                <div>
                                    <p>车牌颜色:</p>
                                </div>
                                <el-form-item style="margin-left: 1%">
                                    <el-select v-model="plateColorList.plateColor" placeholder="请选择车牌颜色"
                                    >
                                        <el-option v-for="(item, index) in plateColorList" :label="item.name" :value="item.code"
                                                   :key="index"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!--                        黑名单第五行加入黑名单原因-->
                        <el-row class="addBlackListDate">
                            <el-col :span="12">
                                <el-form-item label="备注:" label-width="150px">
                                    <el-input v-model="addBlackData.addCause"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!--                        黑名单最后一行备注-->
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="备注:" label-width="150px">
                                    <el-input v-model="addBlackData.remark"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-row>
                </el-form>
            </el-row>
            <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitAdd()">确 定</el-button>
                    <el-button @click="addBlackListDialog = false">取 消</el-button>
                </span>
        </el-dialog>
        <!--        修改黑名单弹窗-->
        <el-dialog
                title="修改黑名单"
                :visible.sync="ModifyBlackListDialog"
                width="70%"
                overflow="hidden">
            <el-row>
                <!--          归属停车场信息-->
                <el-form :inline="true" class="demo-form-inline" label-position=right label-width="100px" v-model="modifyBlackList">
                    <!--                    归属停车场信息-->
                    <el-row>
                        <p>归属停车场信息</p>
                        <el-col :span="12" style="display: flex;margin-left: 6%">
                            <div>
                                <p>归属停车场:</p>
                            </div>
                            <el-form-item style="margin-left: 1%">
                                <el-select v-model="modifyBlackList.parkName" placeholder="请选择停车场">
                                    <el-option v-for="(item, index) in parkLotNameList" :label="item.name" :value="item.code"
                                               :key="index"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!--                黑名单信息-->
                    <el-row>
                        <p>黑名单信息</p>
                        <!--                黑名单信息第一行车牌号 车主姓名-->
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="车牌号码:" label-width="150px">
                                    <el-input v-model="modifyBlackList.carNumber"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="车主姓名:" label-width="150px">
                                    <el-input v-model="modifyBlackList.carOwnerName"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!--                        黑名单第二行手机号身份证信息-->
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="手机号:" label-width="150px">
                                    <el-input v-model="modifyBlackList.phoneNumber"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="身份证信息:" label-width="150px">
                                    <el-input v-model="modifyBlackList.idCardInformation"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!--                        黑名单第三行车主联系地址-->
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="车主联系地址:" label-width="150px">
                                    <el-input style="width: 400px"
                                              v-model="modifyBlackList.carOwnerAddress"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!--                        黑名单第四行车牌颜色-->
                        <el-row>
                            <el-col :span="12" style="display: flex;margin-left: 6%">
                                <div>
                                    <p>车牌颜色:</p>
                                </div>
                                <el-form-item style="margin-left: 1%">
                                    <el-select v-model="modifyBlackList.plateColor" placeholder="请选择车牌颜色">
                                        <el-option v-for="(item, index) in plateColorList" :label="item.name" :value="item.code"
                                                   :key="index"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <!--                        黑名单第五行黑名单加入时间-->
                        <el-row class="addBlackListDate">
                            <!--                     黑名单加入时间-->
                            <el-row class="addTime" style="display:flex;margin-left: 6%;margin-bottom: 20px">
                                <el-row>
                                    <p>黑名单加入时间:</p>
                                </el-row>
                                <el-date-picker
                                        v-model="modifyBlackList.addTime"
                                        type="datetime"
                                        placeholder="请选择生效时间">
                                </el-date-picker>
                            </el-row>
                        </el-row>
                        <!--                        黑名单最后一行备注-->
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="备注:" label-width="150px">
                                    <el-input v-model="modifyBlackList.remark"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-row>
                </el-form>
            </el-row>
            <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitModify()">确 定</el-button>
                    <el-button @click="ModifyBlackListDialog = false">取 消</el-button>
                </span>
        </el-dialog>
        <!--        操作中的删除按钮弹窗-->
        <el-dialog
                title="提示信息"
                :visible.sync="delRowDialog"
                top="30vh"
                width="20%">
            <span style="margin-left:25%;font-size: 20px ">你确定要删除吗？</span>
            <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmitDel()">确 定</el-button>
                    <el-button @click="delRowDialog = false">取 消</el-button>
                    </span>
        </el-dialog>
        <!--        操作中停用弹窗-->
        <el-dialog
                title="提示信息"
                :visible.sync="startUpDialog"
                top="30vh"
                width="20%">
            <span style="margin-left:25%;font-size: 20px ">你确定要启用吗？</span>
            <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="startUp()">确 定</el-button>
                    <el-button @click="startUpDialog = false">取 消</el-button>
                    </span>
        </el-dialog>
        <!--        操作中启用弹窗-->
        <el-dialog
                title="提示信息"
                :visible.sync="blockUpDialog"
                top="30vh"
                width="20%">
            <span style="margin-left:25%;font-size: 20px ">你确定要停用吗？</span>
            <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="blockUp()">确 定</el-button>
                    <el-button @click="blockUpDialog = false">取 消</el-button>
                    </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                //初始化分页
                pageNum:1,
                pageSize:10,
                pageTotal:2,
                //顶部车牌号绑定
                plateNumber:"",
                //顶部停车场名称绑定
                parkName:"",
                //顶部停车场下拉数据存放
                parkLotNameList:[
                    {
                        name: "新能源停车场",
                        code: "1"
                    },
                    {
                        name: "公共停车场",
                        code: "2"
                    },
                    {
                        name: "员工停车场",
                        code: "3"
                    }],
                //车牌颜色下拉数据存放
                plateColorList:[
                    {
                        name:"蓝色",
                        code:"蓝色"
                    },
                    {
                        name:"黑色",
                        code:"黑色"
                    },
                    {
                        name:"紫色",
                        code:"紫色"
                    },],
                //表格数据存放
                parkingLotInformation:[{
                    parkId:"1",
                    parkName:"新能源停车场",
                    plateNumber:"苏A000000",
                    plateColor:"蓝色",
                    carOwnerName:"小黑",
                    phoneNumber:"123456789",
                    addTime:"2020-06-06",
                    addCause:"违规停车",
                    remark:"违规",
                    BlacklistStatus:"启用",
                    carNumber:"苏A000000",
                    carOwnerAddress: "江苏南京",
                    idCardInformation:"1234567891",
                }],
                //新增黑名单的弹窗
                addBlackListDialog:false,
                //新增黑名单数据暂存
                addBlackData:{},
                //操作中修改按钮弹窗
                ModifyBlackListDialog:false,
                //修改数据暂存
                modifyBlackList:[],
                //操作中的删除按钮弹窗
                delRowDialog:false,
                //多选数据暂存
                selectionRow: [],
                //多选数据id暂存
                idList: [],
                //操作中停用数据暂存

                //操作中停用弹窗
                blockUpDialog:false,
                //修改中启用数据暂存

                //操作中启用弹窗
                startUpDialog:false,
            }
        },
        mounted() {},
        methods:{
            //顶部停车场下拉
            parkingName(parkName){},
            //顶部查询按钮获取参数
            select(){
                console.log("打印查询车牌号结果",this.plateNumber);
                console.log("打印查询停车场结果",this.parkName);
            },
            //新增黑名单
            addBlackList(){
                //点击新增黑名单弹出未输入的空黑框
                this.addBlackData=[];
                //显示新增黑名单弹窗
                this.addBlackListDialog=true;
            },
            //新增黑名单确认提交
            onSubmitAdd(){
                //点击提交隐藏弹窗
                this.addBlackListDialog=false;
                console.log("黑名单新增数据",this.addBlackData);
            },
            //分页条
            handleCurrentModify(val){
                this.pageNum = val;
            },
            //操作中的启用按钮
            enAble(row){
                this.startUpDialog=true;
            },
            //启用按钮弹窗
            startUp(){
                this.startUpDialog=false;
            },
            //停用按钮
            endUse(row){
                this.blockUpDialog=true;
            },
            //停用按钮弹窗
            blockUp(){
                this.blockUpDialog=false;
            },
            //操作中的修改按钮
            aMend(row){
                //修改黑名单显示弹窗
                this.modifyBlackList = row;
                this.ModifyBlackListDialog=true;
                console.log("查询修改表格数据",this.modifyBlackList)
            },
            //操作中的修改按钮的提交
            onSubmitModify(){
                this.ModifyBlackListDialog=false;
                console.log("查询修改之后的表格数据",this.modifyBlackList);
            },
            //操作中的删除按钮
            reMove(row){
                console.log("获取删除行数据",this.parkingLotInformation);
                //显示删除弹窗
                this.delRowDialog=true;
            },
            //操作中的删除按钮提交
            onSubmitDel(row){
                //确认删除提交隐藏
                this.delRowDialog=false;
            },
            //删除监听
            handleSelectionChange(val){
                this.selectionRow = val;
                this.idList = [];
                val.forEach(item => {
                    this.idList.push(item.parkId);
                    console.log("多选id暂存",this.idList);
                })
            },
            //批量删除
            deleteInBatches(){
                console.log("批量删除", this.idList);
                this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.$message({type: "success", message: "删除成功!"});
                })
                    .catch(() => {
                        this.$message({type: "info", message: "已取消删除"});
                    });
            },
        }
    }
</script>
<style scoped>
    /*新增黑名单弹窗中的失效时间生效时间样式*/
    .addBlackListDate{
        display:flex;
    }
</style>
