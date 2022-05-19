<template>
  <div>
    <MySchool></MySchool>
    <StudentInfo></StudentInfo>
  </div>
</template>

<script>
// 引入组件
import MySchool from "./components/MySchool.vue";
import StudentInfo from "./components/StudentInfo.vue";
export default {
  name: "App",
  components: {
    MySchool,
    StudentInfo,
  },
};
</script>

<style>
</style>