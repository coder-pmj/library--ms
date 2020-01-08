<template>
  <div class="wrap animated zoomIn" ref="wrap">
    <h3 align="center">图书系统</h3>
    <el-form label-position="top" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  private formLabelAlign: { username: any; password: any } = {
    username: "",
    password: ""
  };
  login() {
    this.$router.push('/index')
  }
  register() {
    alert("注册");
  }
}
</script>

<style scoped>
.wrap {
  width: 20rem;
  height: fit-content;
  margin: 180px auto;
}
</style>