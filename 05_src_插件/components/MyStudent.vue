<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ sex }}</h2>
    <input type="text" v-fbind:value="name" />
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
};
</script>

<style>
</style>