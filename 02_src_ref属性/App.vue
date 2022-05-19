<template>
  <div>
    <MySchool ref="sch" />
    <h1 v-text="msg"></h1>
    <button @click="show" ref="btn">点我输出上方DOM元素</button>
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
export default {
  name: "App",
  components: { MySchool },
  data() {
    return {
      msg: "你好啊",
    };
  },
  methods: {
    show() {
      console.log(this.$refs.btn);
      console.log(this.$refs.sch);
    },
  },
};
</script>
