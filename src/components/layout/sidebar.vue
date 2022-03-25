<template>
  <el-container class="sidebar-style">
    <side-nav class="tac"
              v-if="id==1"
              :routes="routes"
              :active-menu="menuValue"></side-nav>
    <side-nav class="tac"
              v-if="id==2"
              :routes="routes1"
              :active-menu="menuValue1"></side-nav>
  </el-container>
</template>
<script>
import SideNav from "@/components/SideNav";

export default {
  components: {
    SideNav
  },
  data () {
    return {
      id: 0,
      menuValue: "homePage",
      routes: [
        {
          code: "1",
          logo: "el-icon-s-grid",
          name: "目录管理",
          routeName: "directoryManagement",
        },
        {
          code: "2",
          logo: "el-icon-s-grid",
          name: "文章管理",
          routeName: "articleManagement",
        },
        {
          code: "3",
          logo: "el-icon-s-grid",
          name: "轮播管理",
          routeName: "carouselPic",
        },
      ],
      menuValue1: "homePage",
      routes1: [
      ]
    };
  },
  methods: {
  },
  watch: {},
  created () {
    this.id = localStorage.getItem("id")
  },
  mounted () {
    this.menuValue = this.$route.path.split("/")[1];
  }
};
</script>

<style lang="scss" scoped>
.sidebar-style {
  width: 100%;
  height: 100%;

  .tac {
    width: 100%;
    background-color: #0093e9;
  }
}

.el-menu {
  border-right: solid 0px #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #fff;
}
/deep/.el-scrollbar__wrap {
  overflow-x: hidden;
}
/deep/ .tac el-scrollbar {
  height: 100%;
  background-color: white !important;
}
</style>
