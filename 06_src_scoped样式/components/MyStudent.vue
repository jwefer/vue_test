<template>
  <div class="demo">
    <h2 class="font">{{ name }}</h2>
    <h2>{{ sex }}</h2>
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

<style scoped>
.demo {
  background-color: orange;
}
</style>