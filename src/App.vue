<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return{

			}
		},
		mounted(){

		},
		methods:{

		}
	}
</script>

<style>
html {
	width: 100%;
	height: 100%;
	background-color: #f5f6f7;
	min-width: 1080px;
	overflow: hidden;
}
body {
	/*display: block;*/
	width: 100%;
	height: 100%;
	margin: 0px;
  background: #EAF0F6 100%;
	/* background: url("./assets/images/frontpage/bg.png") no-repeat 100% 100%;
	background-size: cover; */
	/*overflow: hidden;*/
}
#app {
	width: 100%;
	height: 100%;

}
</style>
