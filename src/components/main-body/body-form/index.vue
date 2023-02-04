<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.name" style="width: 300px"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" type="password" style="width: 300px"></el-input>
    </el-form-item>
    <div style="margin-left: 80px">
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button style="margin-left: 60px" @click="registerUser">注册</el-button>
    </div>

  </el-form>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      form: {
        name: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({
        name:'main-graph'
      })
    },
    registerUser() {
      //编程式路由进行跳转
      // this.$router.push({
      //   path:'/register'
      // })
      this.$router.push({
        name:'register'
      })
    }
  }
}
</script>

<style scoped>

</style>