<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>{{ sex }}</h2>
    <h2>{{ number }}</h2>
    <button @click="add">点击number++</button>
    <button @click="sendStudentName">点击把学生名发送给APP</button>
    <button @click="unbind">点击解绑atguigu</button>
    <button @click="death">点击销毁组件实例对象</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    sendStudentName() {
      this.$emit("atguigu", this.name, 888, 999, 666);
      this.$emit("demo");
    },
    unbind() {
      this.$off("atguigu"); // 解绑单个自定义事件
      // this.$off(['atguigu', 'demo'])   // 解绑多个自定义事件
      // this.$off(); // 解绑所有自定义事件
    },
    add() {
      console.log("add被调用了");
      this.number++;
    },
    death() {
      this.$destroy();
    },
  },
};
</script>

<style scoped>
.student {
  background-color: orange;
  margin-top: 10px;
  padding: 5px;
}
</style>