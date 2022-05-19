<template>
  <div class="demo">
    <h2>{{ name | mySlice }}</h2>
    <h2>{{ address }}</h2>
    <button @click="hello">测试一下hello方法</button>
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

<style>
</style>