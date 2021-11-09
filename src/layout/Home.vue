<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="24"> Auto Firmware Version Control System</el-col>
        </el-row>
        <el-menu
          :default-active="activePath"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/index/info">Personal Information</el-menu-item>
          <el-menu-item
            index="/index/manufactureFwInfo"
          >
            Manufacture FW Info
          </el-menu-item>
          <el-menu-item index="/index/sign">Signed Page</el-menu-item>
          <el-menu-item index="/index/manage">Manage Page</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
  data() {
    return {
      // 路由hash
      activePath: '/index/info'
    }
  }
}
</script>
