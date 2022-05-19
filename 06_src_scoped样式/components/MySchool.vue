<template>
  <div class="demo">
    <h2 class="font">{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "北京",
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: pink;
}
</style>