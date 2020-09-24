<template>
  <el-container class="layout-container">
    <el-aside class="aside" width:200px>
      <AppAside class="aside-menu" />
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i class="el-icon-s-fold"> </i>
          <span> 个人发布系统</span>
        </div>
        <el-dropdown>
          <div class="avatar-warp">
            <img src="./imgtouxian.jpeg" alt="" class="avater" />
            <span>用户昵称</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AppAside from "./components/aside";
export default {
  name: "layoutIndex",
  components: {
    AppAside,
  },
};
</script>
 <style lang="less" scoped>
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.aside {
  background-color: #d3dce6;
  .aside-menu {
    height: 100%;
  }
}
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b3c0d1;
}
.main {
  background-color: #e9eef3;
}
.avatar-warp {
  display: flex;
  align-items: center;
  .avater {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>>
 
