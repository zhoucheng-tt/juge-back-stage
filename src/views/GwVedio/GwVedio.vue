<!--
 * @Author: your name
 * @Date: 2020-10-17 10:24:37
 * @LastEditTime: 2020-10-20 09:42:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sac-tpms-webe:\TingCar\src\views\Home\Home.vue
-->
<template>
	<div class="home" style="height:100%">
	  <main></main>
  
	  <div
		style="background-color:rgb(3, 18, 41); overflow: hidden; height: 100%;"
	  >
		<!-- <el-row class="header">
				  <el-col :span="6">
					  <img src="../../assets/images/Top2.png" class="header-img-left">
				  </el-col>
				  <el-col :span="12" class="header-img">
					  <div class="header-title">AI机器视觉的露天停车场余位检测及引导系统</div>
				  </el-col>
				  <el-col :span="6">
					  <img src="../../assets/images/Top2.png" class="header-img-left">
					  <div class="msg">
						  <span class="header-msg-sj">9:51:21</span>
						  <span class="header-msg">多云</span>
						  <span class="header-msg-wd">25℃/17℃</span>
					  </div>
				  </el-col>
			  </el-row> -->
		<!-- 两侧装饰条 -->
		<div class="arrows-left">
		  <img
			src="../../assets/images/Right.png"
			style="width:20px;height:280px;"
		  />
		</div>
		<!-- <div class="up-Image">
				  <img src="../../assets/images/Line1.png">
			  </div>
			  <div class="down-Image">
				  <img src="../../assets/images/Line2.png">
			  </div> -->
		<!-- 右侧箭头 -->
		<div class="arrows-right">
				  <img src="../../assets/images/Right.png" style="width:20px;height:280px">
			  </div>
		<!-- <div class="up-Image-right">
				  <img src="../../assets/images/Line1.png">
			  </div>
			  <div class="down-Image-right">
				  <img src="../../assets/images/Line2.png">
			  </div> -->
  
		<el-row class="content">
		  <el-col :span="7" class="left">
			<el-row style="height: 24%;padding-bottom:15px">
			  <div class="left-title">
				<span class="left-title-qnsk">车源地统计</span>
			  </div>
			  <el-row style="height: 75%; ">
				<pie-Lable height="100%" class="pie" />
				<div class="pie-statistics">
				  <li style="color: rgb(0,122,255)">
					<span style="color:white">省内</span>
				  </li>
				  <span
					style="padding:0px 10px; color: rgb(0,122,255);position: relative;top: -16px;left: 122%"
					>62%</span
				  >
				  <li style="color:rgb(3,215,233)">
					<span style="color:white">省外</span>
				  </li>
				  <span
					style="padding:0 10px;color:rgb(3,215,233);position: relative;top: -15px;left: 121%;"
					>38%</span
				  >
				</div>
			  </el-row>
			</el-row>
  
			<el-row style="height: 24%;padding-bottom:15px">
			  <div class="left-title">
				<span class="left-title-qnsk">客货比分析</span>
			  </div>
			  <el-row style="height: 75%; ">
				<threeDpie height="100%" class="threeDpie" />
				<div class="pie-statistics">
				  <li style="color:red">
					<span style="color:white">客车</span>
				  </li>
				  <span
					style="padding:0px 10px; color: rgb(0,122,255);
				position: relative;top: -16px;left: 122%"
					>72%</span
				  >
				  <li style="color:rgb(156,64,255)">
					<span style="color:white">货车</span>
				  </li>
				  <span
					style="padding:0 10px;color:rgb(3,215,233);position: relative;
				top: -15px;left: 121%;"
					>28%</span
				  >
				</div>
			  </el-row>
			</el-row>
  
			<el-row style="height: 23%;padding-bottom:15px">
			  <div class="left-title">
				<span class="left-title-qnsk">区内实况</span>
			  </div>
			  <el-row style="height: 70%; ">
				<img :src="imgUrl" class="show" />
			  </el-row>
			</el-row>
			<el-row style="height: 23%;">
			  <div class="left-title">
				<span class="left-title-qnsk">区内实况</span>
			  </div>
			  <el-row style="height: 70%; ">
				<img :src="imgUrl" class="show" />
			  </el-row>
			</el-row>
		  </el-col>
  
		  <el-col :span="10" class="mid">
			<div style="height:100%; border: 1px solid #66e3fb">
			  <div style="height:97%;border: 1px solid #66e3fb;margin:11px">
				<!-- 中间内容开始 -->
				<el-row style="padding:29px 0 0 49px;text-align: left;">
				  <div class="mid-bjt">
					<span class="mid-title">停车场实时布局图</span>
					<div class="mid-word">Parking Lot Layout Map</div>
				  </div>
  
				  <div class="index-show-tcsc">
					<span class="mid-title-small">停车时长</span>
					<div style="">
					  <span class="mid-per-red" style="color:rgb(126,0,252)"
						>60</span
					  >
					  <span class="mid-title-index">
						<img src="../../assets/images/Icon-uparrow.png" />
					  </span>
					  <span class="mid-index">5%</span>
					</div>
				  </div>
  
				  <div class="index-show-lyl">
					<span class="mid-title-small">利用率</span>
					<div style="">
					  <span class="mid-per-red">{{ zouzhuanLv }}%</span>
					  <span class="mid-title-index">
						<img src="../../assets/images/Icon-uparrow.png" />
					  </span>
					  <span class="mid-index">5%</span>
					</div>
				  </div>
				  <div class="index-show-zzl">
					<span class="mid-title-small">周转率</span>
					<div>
					  <span class="mid-per-blue">70%</span>
					  <span class="mid-title-index">
						<img src="../../assets/images/Icon-uparrow.png" />
					  </span>
					  <span class="mid-index">7%</span>
					</div>
				  </div>
				</el-row>
  
				<el-row style="padding:29px 0 0 49px;text-align: left;">
				  <div class="tc-about">
					<div class="cheweishu">总车位数</div>
					<div class="cheweishu-num">{{ zongNum }}</div>
				  </div>
				  <div class="tc-about">
					<div class="cheweishu">剩余车位数</div>
					<div class="cheweishu-num">{{ shengNum }}</div>
				  </div>
				</el-row>
				<el-row style="padding:29px 0 0 49px;text-align: left;">
				  <el-col :span="5" style="margin-top:400px">
					<div style="position:relative;left: -2%;top: -51px;">
					  <el-row style="margin:5px 0">
						<span
						  class="marking-border"
						  style="background:red;color:red;border: 1px solid #79f4fc;"
						  >marking</span
						>
						<span class="mid-marking">已占用</span>
					  </el-row>
					  <el-row style="margin:5px 0 5px 0">
						<span
						  class="marking-border"
						  style="background:#009245;color:#009245;border: 1px solid #79f4fc;"
						  >marking</span
						>
						<span class="mid-marking">停车位</span>
					  </el-row>
					  <el-row style="margin:5px 0 5px 0">
						<span class="marking-border-Greenbelt">marking</span>
						<span class="mid-marking">绿化带</span>
					  </el-row>
					  <el-row style="margin:5px 0 5px 0">
						<span class="marking-border-Basketball">marking</span>
						<span class="mid-marking">篮球场</span>
					  </el-row>
					  <el-row style="margin:5px 0 5px 0">
						<span class="marking-border-Football">marking</span>
						<span class="mid-marking">足球场</span>
					  </el-row>
					</div>
				  </el-col>
				  <el-col :span="19">
					<!-- 图片部分 -->
					<AIparking class="guize-img" />
				  </el-col>
				</el-row>
			  </div>
			</div>
		  </el-col>
  
		  <el-col :span="7" class="right">
			<el-row style="height: 33%; margin-bottom: 12px;">
			  <div class="left-title">
				<span class="left-title-qnsk">实时车位统计</span>
			  </div>
			  <el-row style="height: 80%; ">
				<el-row style="margin:0px 0 5px 0">
				  <el-col :span="8" class="table-header">车型</el-col>
				  <el-col :span="8" class="table-header">总车位</el-col>
				  <el-col :span="8" class="table-header">剩余车位</el-col>
				</el-row>
				<el-row class="table-data">
				  <el-col :span="8" class="table-list">P2员工停车场</el-col>
				  <el-col :span="8" class="table-line">{{ zongNum }}</el-col>
				  <el-col :span="8" class="table-line" style="color: #05C700;">{{
					shengNum
				  }}</el-col>
				</el-row>
				<el-row class="table-data">
				  <el-col :span="8" class="table-list">P1公共停车场</el-col>
				  <el-col :span="8" class="table-line">{{ zongNum }}</el-col>
				  <el-col :span="8" class="table-line" style="color: #05C700;">{{
					shengNum
				  }}</el-col>
				</el-row>
				<el-row class="table-data">
				  <el-col :span="8" class="table-list">P4新能源停车场</el-col>
				  <el-col :span="8" class="table-line">{{ zongNum }}</el-col>
				  <el-col :span="8" class="table-line" style="color: #05C700;">{{
					shengNum
				  }}</el-col>
				</el-row>
				<el-row class="table-data">
				  <el-col :span="8" class="table-list">P3临时停车场</el-col>
				  <el-col :span="8" class="table-line">{{ zongNum }}</el-col>
				  <el-col :span="8" class="table-line" style="color: #05C700;">{{
					shengNum
				  }}</el-col>
				</el-row>
				<el-row class="table-data">
				  <el-col :span="8" class="table-list">P5专用停车场</el-col>
				  <el-col :span="8" class="table-line">{{ zongNum }}</el-col>
				  <el-col :span="8" class="table-line" style="color: #05C700;">{{
					shengNum
				  }}</el-col>
				</el-row>
			  </el-row>
			</el-row>
  
			<el-row style="height: 33%; ">
			  <div class="left-title">
				<span class="left-title-qnsk">单日车辆平均停车时长</span>
			  </div>
			  <el-row style="height: 75%; ">
				<!-- 引进柱图 -->
				<bar-chart class="barChart" />
			  </el-row>
			</el-row>
  
			<el-row style="height: 33%; ">
			  <div class="left-title">
				<span class="left-title-qnsk">当日车流量</span>
			  </div>
			  <el-row style="height: 75%; ">
				<line-chart height="100%" class="lineChart" />
			  </el-row>
			</el-row>
		  </el-col>
		  <!-- footer -->
		  <!-- <el-row class="footer">1</el-row> -->
		</el-row>
	  </div>
	</div>
  </template>
  
  <script>
  // @ is an alias to /src
  import main from "@/components/main.vue";
  import threeDpie from "@/components/threeDpie";
  import PieLable from "@/components/PieLable";
  import LineChart from "@/components/LineChart";
  import BarChart from "@/components/BarChart";
  import AIparking from "@/components/AIparking";
  // import resize from '@/components/mixins/resize'
  
  export default {
	// name: "Home",
	// mixins: [resize],
	components: {
	  main,
	  threeDpie,
	  LineChart,
	  AIparking,
	  BarChart,
	  PieLable
	},
	data() {
	  return {
		dialogVisible: false,
		imgUrl: require("../../assets/images/show.png"),
		// 总车位数
		zongNum: "",
		// 剩余车位数
		shengNum: "",
		// 周转率
		zouzhuanLv: ""
	  };
	},
	computed: {},
	mounted() {
		// 暂时关闭
	//   this.queryImgUrl();
	//   this.queryNum();
	  this.timer = setInterval(() => {
		// this.queryImgUrl();
		// this.queryNum();
	  }, 50000);
	},
	methods: {
	  queryNum() {
		var that = this;
		var shengList = [];
		queryList()
		  .then(response => {
			that.TcarList = response.data.list;
			that.zongNum = that.TcarList.length;
			for (let i = 0; i < that.TcarList.length; i++) {
			  if (that.TcarList[i].isUsed == 0) {
				shengList.push(that.TcarList[i]);
			  }
			}
			that.shengNum = shengList.length;
			that.zouzhuanLv = parseInt((that.shengNum / that.zongNum) * 100);
  
			// console.log("res11111", that.TcarList);
			// console.log("that.zongNum", that.zongNum);
			// console.log("that.shengNum ", that.shengNum);
		  })
		  .catch(err => {});
	  },
	  handleClose(done) {
		this.$confirm("确认关闭？")
		  .then(_ => {
			done();
		  })
		  .catch(_ => {});
	  },
	  queryImgUrl() {
		var that = this;
		queryImgUrl()
		  .then(response => {
			console.log("res", response);
			that.imgUrl =
			  "http://paks.jitunet.cn:83/parkingspace/parking/record/imgInfo.action?name=" +
			  response.data.fileAddr;
			console.log("that.imgUrl", that.imgUrl);
		  })
		  .catch(err => {});
	  },
	  goto: function() {
		this.$router.push("home");
	  }
	}
  };
  </script>
  <style scope>
  .header {
	height: 64px;
	width: 100%;
  }
  
  .content {
	height: 100%;
  }
  
  .header-title {
	font-family: PingFangSC-Medium;
	font-size: 32px;
	letter-spacing: 1px !important;
	padding: 5px 0;
	background-image: linear-gradient(to top, #9cddfa, #eeeeee);
	-webkit-background-clip: text;
	color: transparent;
	display: inline-block;
  }
  
  .msg {
	display: inline-block;
	position: absolute;
	right: 25px;
	bottom: 23px;
  }
  
  .header-msg {
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #d0cccc;
	padding: 0 3px 0 6px;
  }
  
  .header-msg-wd {
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #d0cccc;
	padding-left: 1px;
  }
  
  .header-msg-sj {
	background-image: linear-gradient(to top, #9cddfa, #eeeeee);
	-webkit-background-clip: text;
	color: transparent;
  }
  
  .run {
	position: absolute;
	top: 26%;
	right: 31%;
	cursor: pointer;
  }
  
  .left {
	height: 100%;
	padding: 5px 24px 0 30px;
  }
  
  .right {
	height: 100%;
	padding: 5px 24px 0 24px;
  }
  
  .mid {
	height: 100%;
	padding: 0 0 40px 0;
	/* border: aliceblue solid 1px; */
  }
  
  .left-title {
	background-color: #103657;
	text-align: left;
	margin-bottom: 14px;
	padding: 5px;
	border-left: solid 4px #6ae8ff;
	height: 24px;
	line-height: 24px;
  }
  
  .left-title-qnsk {
	font-family: PingFangSC-Medium;
	font-size: 16px;
	color: #ffffff;
  }
  
  .show {
	height: 100%;
	width: 93%;
	padding-left: 18px;
  }
  
  .show-small {
	height: 100%;
	width: 100%;
  }
  
  .mid-title {
	font-family: PingFangSC-Medium;
	font-size: 24px;
	color: #79f4fc;
	letter-spacing: 0.54px;
	text-align: left;
	border-bottom: 2px solid #1f80a4;
	padding-bottom: 20px;
  }
  
  .mid-word {
	font-family: Helvetica;
	font-size: 14px;
	color: #1f80a4;
	letter-spacing: 0.32px;
  }
  
  .mid-bjt {
	display: inline-block;
	text-align: left;
  }
  
  .mid-title-small {
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #2ea3cf;
	letter-spacing: 0.12px;
  }
  
  .mid-per-red {
	font-family: HelveticaNeue-Bold;
	font-size: 36px;
	color: #e8385d;
	letter-spacing: 0.81px;
  }
  
  .mid-per-blue {
	font-family: HelveticaNeue-Bold;
	font-size: 36px;
	color: #03d7e9;
	letter-spacing: 0.81px;
  }
  
  .mid-index {
	font-family: PingFangSC-Medium;
	font-size: 18px;
	color: #10d96f;
	letter-spacing: 0.41px;
  }
  
  .index-show-tcsc {
	display: inline-block;
	/* margin-left: 130px;
	  padding-top: 10px; */
	position: relative;
	left: 7%;
	border-right: 1px solid rgb(12, 81, 132);
	padding-right: 31px;
  }
  
  .index-show-lyl {
	display: inline-block;
	/* margin-left: 130px;
	  padding-top: 10px; */
	position: relative;
	left: 10%;
	border-right: 1px solid rgb(12, 81, 132);
	padding-right: 20px;
  }
  
  .index-show-zzl {
	display: inline-block;
	/* margin-left: 130px;
	  padding-top: 10px; */
	position: relative;
	left: 13%;
  }
  
  .mid-title-index {
	margin: 0 2px 0 2px;
  }
  
  .cheweishu {
	font-family: PingFangSC-Regular;
	text-align: left;
	top: 0;
	font-size: 16px;
	color: #4fcfd7;
	letter-spacing: 0.57px;
	padding-bottom: 10px;
	margin-right: 50px;
  }
  
  .cheweishu-num {
	background-image: url(../../assets/images/Bg.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	width: 185px;
	height: 51px;
	font-size: 37px;
	color: white;
	display: inline-block;
	text-align: center;
	line-height: 53px;
	letter-spacing: 12px;
  }
  
  .tc-about {
	display: inline-block;
	margin-right: 64px;
  }
  
  .marking-border-Greenbelt {
	/* border: 0.3px solid #79f4fc; */
	/* background-color: red; */
	background-image: url(../../assets/images/Greenbelt.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
  }
  
  .marking-border-Basketball {
	/* border: 1px solid #79f4fc; */
	/* background-color: red; */
	background-image: url(../../assets/images/Basketball.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
  }
  
  .marking-border-Football {
	/* border: 1px solid #79f4fc; */
	/* background-color: red; */
	background-image: url(../../assets/images/Football.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
  }
  
  .mid-marking {
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #4fcfd7;
	letter-spacing: 0.12px;
	margin-left: 5px;
  }
  
  .table-header {
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #ffffff;
	letter-spacing: 0.27px;
  }
  
  .guize-img {
	width: 100%;
	position: relative;
	left: 1%;
	top:91px
  }
  
  .footer {
	background-image: url(../../assets/images/footer.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 24px;
	position: relative !important;
	bottom: 97%;
	color: rgb(20, 84, 114);
  }
  
  /* 表格设置 */
  .table-data {
	background-color: rgb(11, 37, 61);
	padding: 2px;
	border: 1px solid rgb(12, 81, 132);
	margin: 1px 0;
  }
  
  .table-list {
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #ffffff;
	letter-spacing: 0.27px;
	padding: 2px;
  }
  
  .table-line {
	background-color: rgb(16, 53, 87);
	padding: 3px;
	border-right: 1px solid rgb(11, 37, 61);
	color: #007aff;
	font-family: PingFangSC-Medium;
	font-size: 14px;
	letter-spacing: 0.32px;
  }
  
  /* 装饰设置 */
  .header-img {
	/* width: 10; */
	background: url(../../assets/images/Top1.png) no-repeat;
	background-size: 100% 100%;
  }
  
  .header-img-left {
	height: 52px;
	width: 100%;
  }
  
  .arrows-left {
	position: absolute;
	top: 37%;
  }
  
  .arrows-right {
	position: absolute;
	top: 37%;
	right: 0%;
	transform: rotateY(180deg);
  }
  
  .up-Image {
	padding: 20px 0px;
	display: inline-block;
  }
  
  .down-Image {
	padding: 20px 0px;
	display: inline-block;
  }
  
  .up-Image-right {
	margin: 0px;
	transform: rotateY(180deg);
  }
  
  .down-Image-right {
	position: absolute;
	right: 0.4%;
	bottom: 3%;
	transform: rotateY(180deg);
  }
  
  /* 柱图设计 */
  .barChart {
	height: 247px !important;
	width: 460px !important;
  }
  .lineChart {
	height: 247px !important;
	width: 460px !important;
  }
  
  /* 视频展示弹出框设计 */
  .el-dialog,
  .el-pager li {
	background: #fff;
	-webkit-box-sizing: border-box;
	padding-bottom: 56px;
	position: relative;
	top: 16%;
  }
  
  .state {
	position: absolute;
	bottom: -17%;
  }
  
  /* 饼图设计 */
  .pie {
	/* position: absolute;
	left: 39px;
	top: 4px; */
	width: 150px;
	height: 200px;
  }
  
  .threeDpie {
	/* position: absolute !important;
	left: 40px;
	top: 22px; */
	width: 150px;
	height: 200px;
  }
  
  .pie-statistics {
	display: inline-block;
	color: white;
	/* position: absolute;
	right: 82%;
	bottom: 27%; */
  }
  </style>
  