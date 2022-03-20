<template>
  <el-container class="sidebar-style">
    <side-nav class="tac"
              :routes="routes"
              :active-menu="menuValue"></side-nav>
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
          code: "1",
          logo: "el-icon-s-grid",
          name: "demo",
          children: [
            {
              code: "3-1",
              logo: "el-icon-menu",
              name: "demo",
              routeName: "deo"
            },
          ]
        },
      ]
    };
  },
  methods: {
  },
  watch: {},
  created () { },
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
    background: #0f2c54;
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
