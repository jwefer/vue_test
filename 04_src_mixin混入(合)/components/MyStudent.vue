<template>
  <div class="demo">
    <h2 @click="showName">{{ name }}</h2>
    <h2>{{ sex }}</h2>
  </div>
</template>

<script>
import { hunhe, hunhe2 } from "../mixin";
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  mixins: [hunhe, hunhe2],
};
</script>

<style>
</style>