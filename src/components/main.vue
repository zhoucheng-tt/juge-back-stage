<template>
  <el-container class="main-container">
    <el-header class="header-box"
               style="height: 64px">
      <Header></Header>
    </el-header>
    <el-container class="inner-container">
      <el-aside width="13%"
                style="background-color: #FFFFFF;">
        <sidebar></sidebar>
      </el-aside>
      <el-container style="width: 100%; height: 100%">
        <el-main style="width: 100%; height: 100%">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./layout/header.vue"
import sidebar from "./layout/sidebar.vue"
export default {
  components: {
    Header,
    sidebar
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  .el-header {
    padding: 0px !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .inner-container {
    height: calc(100% - 10vh);
  }
  .el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px !important;
  }
  .print-hidden-style {
    opacity: 0;
  }
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
