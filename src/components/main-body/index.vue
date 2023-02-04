<template>
  <div class="background-main">
    <el-row>
      <el-col :span="6">
        <div class="left-div">
          1
        </div>
      </el-col>
      <el-col :span="12">
        <div class="main-div">
          <bodyForm></bodyForm>
        </div>
      </el-col>
      <el-col :span="6">
        <div>3</div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import bodyForm from "@/components/main-body/body-form";

export default {
  name: "index",
  components: {bodyForm}
}
</script>

<style scoped>
.left-div {
  border: #00f7de solid;
}

.main-div {
  border: red solid;
  width: 400px;
  margin-top: 25%;
  margin-left: 22%;
}
.background-main{
}
</style>