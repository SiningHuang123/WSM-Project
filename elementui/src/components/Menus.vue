<template>
  <div class="menu">
    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-aside class="aside-menu" width="250px" style="background-color: rgb(238, 241, 246);">
      <el-menu router>
<!--avatar:-->
      <el-row class="demo-avatar demo-basic">
      <el-col :span="12">
        <div class="sub-title"></div>
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="50" :src="circleUrl" style="margin-bottom: 20px;
                        margin-left: 30px; margin-top: 5px">
            </el-avatar></div>
          <div class="block" v-for="size in sizeList" :key="size">
            <el-avatar :size="size" :src="circleUrl"></el-avatar>
          </div>
        </div>
      </el-col>
    </el-row>
        <el-submenu v-for="(item,index) in $router.options.routes"
                    :index="index+''" style="margin-bottom: 10px">
          <template slot="title">
            <i :class="item.icon"
               style="font-size:17px; font-weight:bolder;
               text-indent: 1em;">
            {{item.name}}
            </i></template>
          <el-menu-item v-for="(item2) in item.children" :index="item2.path"
          style="font-size:17px; text-indent:1.5em; font-weight: lighter;">
            {{item2.name}}
          </el-menu-item>
        </el-submenu>
  </el-menu>
  </el-aside>

      <el-container>
        <el-header class="setting-menu" style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item @click="logout()" id="logout"><router-link to="/login">
            退出登录</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎 </span>
    </el-header>
        <el-main class="router-view">
      <router-view></router-view>
    </el-main>
      </el-container>

    </el-container>
  </div>
</template>


<script>
export default {
  name: "Menus",
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      loading: true,
      users:[]
    }
  },
  methods: {
    logout: function() {
      this.$router.push("/Logout")
    }
  }
}
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .block {
    margin-left: 55px;
    margin-top: 10px;
  }
  #logout {
    text-decoration: none;
    color: black;
  }
</style>