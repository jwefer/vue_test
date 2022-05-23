<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <MySchool />
    <MyStudent />
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";
export default {
  data() {
    return {
      msg: "你好啊！",
    };
  },
  components: {
    MySchool,
    MyStudent,
  },
};
</script>

<style scoped>
.demo {
  background-color: grey;
  padding: 5px;
}
</style>