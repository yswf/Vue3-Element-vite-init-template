<template>
    <div class="login-main">
        <div class="login-modal">
            <h1 class="login-title">后台管理系统</h1>
            <el-form :model="formData" :rules="rules" ref="ruleForm" status-icon>
                <el-form-item prop="username">
                    <el-input v-model="formData.username" prefix-icon="el-icon-user" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="formData.password"  placeholder="请输入密码" prefix-icon="el-icon-view" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="login-btn" @click="loginHandler">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { ACTION_TYPE } from '../../store/userInfo/types';

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        username: 'test',
        password: '123456',
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    loginHandler() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          this.$store.dispatch(ACTION_TYPE.LOAD_REQUEST, this.formData);
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
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
