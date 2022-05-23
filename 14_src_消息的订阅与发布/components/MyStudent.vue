<template>
  <div class="student">
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给Shool组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  data() {
    return {
      studentName: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      pubsub.publish("hello", this.studentName);
    },
  },
};
</script>

<style scoped>
.student {
  background-color: pink;
  margin-top: 20px;
  padding: 5px;
}
</style>