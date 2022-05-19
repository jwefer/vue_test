<template>
  <div class="school">
    <h2 class="font">{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    // console.log("School", this.x);
    this.$bus.$on("hello", (data) => {
      console.log("我是School组件，我收到了数据：", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: pink;
  padding: 5px;
}
</style>