<template>
  <div class="login-main">
    <div class="login-modal">
      <h1 class="login-title">后台管理系统</h1>
      <el-form
        ref="ruleForm"
        :model="formData"
        :rules="rules"
        status-icon
      >
        <el-form-item prop="username">
          <el-input v-model="formData.username" prefix-icon="el-icon-user" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-view"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="loginUser">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { useUserInfo } from '@/hooks/login'
import { defineComponent, ref } from '@vue/runtime-core'
export default defineComponent({
  name:'Login',
  setup(){
    const { setUserInfo }=useUserInfo()
    const formData=ref({
      username: 'test',
      password: '123456'
    })
    const rules={
      username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }
    const loginUser=()=>{
      setUserInfo(formData.value)
    }
    return {
      formData,
      rules,
      loginUser
    }
  }
})
</script>
<style lang="scss" scoped>
    .login-main{
        background-color: #f8fcff;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-modal{
            width: 500px;
            padding: 50px;
            background-color: #fff;
            box-shadow: 0 0 14px 7px #c7c9cb4d;
            .login-title{
                text-align: center;
                font-size: 26px;
                font-weight: 400;
                margin-bottom: 30px;
            }
            .login-btn{
                width: 100%;
            }
        }
    }
</style>
