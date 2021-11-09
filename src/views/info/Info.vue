<template>
  <div class="info">
    <h1>这里是Personal Information页面</h1>
    <strong>user:</strong>
    <p>{{ userdata.username }}</p>
    <strong>email:</strong>
    <p>{{ userdata.email }}</p>
    <strong>mobile:</strong>
    <p>{{ userdata.mobile }}</p>
    <el-button @click="logout">退出登录</el-button>
  </div>
</template>
<script lang="ts" >
import { defineComponent } from '@vue/runtime-core'
import { useUserInfo } from '@/hooks/login'
export default defineComponent({
  setup(){
    const { getUserInfo,logout } = useUserInfo()
    const userdata = getUserInfo()
    return{
      userdata,
      logout
    }
  }
})
</script>
