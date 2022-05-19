<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>{{ sex }}</h2>
    <button @click="sendStudentName">发送学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit("hello", this.name);
    },
  },
  mounted() {
    // console.log("Student", this.x);
  },
};
</script>

<style scoped>
.student {
  background-color: orange;
  margin-top: 20px;
  padding: 5px;
}
</style>