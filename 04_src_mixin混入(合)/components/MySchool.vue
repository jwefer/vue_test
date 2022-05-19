<template>
  <div class="demo">
    <h2 @click="showName">{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
import { hunhe, hunhe2 } from "../mixin";
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
      x: 166, // 如果混入中设定了data也包含属性x，则以组件中设定的x为准，类似于继承
    };
  },
  mounted() {
    console.log("你好啊！！！"); // 如果都配置了mounted方法，则都会选取
  },
  mixins: [hunhe, hunhe2],
};
</script>

<style>
</style>