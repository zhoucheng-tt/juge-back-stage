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
          logo: "el-icon-odometer",
          name: "首页",
          routeName: "homePage",
          children: []
        },
        {
          code: "3",
          logo: "el-icon-s-grid",
          name: "demo",
          children: [
            {
              code: "3-1",
              logo: "el-icon-menu",
              name: "demo",
              routeName: "demo"
            },
          ]
        },
      ],
      menuValue1: "homePage",
      routes1: [
        {
          code: "1",
          logo: "el-icon-odometer",
          name: "首页",
          routeName: "homePage",
          children: []
        },
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
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
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
