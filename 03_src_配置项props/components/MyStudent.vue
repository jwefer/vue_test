<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <h2>{{ sex }}</h2>
    <h2>{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改age</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    console.log(this);
    return {
      msg: "我是一名尚硅谷的学生",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  // 简单声明接收
  // props: ["name", "age", "sex"],

  // 接收的同时对数据进行类型限制
  /* props:{
    name: String,
    sex: String,
    age: Number
  } */

  // 接收数据的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>