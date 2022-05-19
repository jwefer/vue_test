<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我输出学校名字</button>
  </div>
</template>

<script>
/* ES6模块化——暴露
  export const school = Vue.extend({    // 分别暴露，引用时需要写在{}里面
  export { school };    // 统一暴露
  export default school;     // 默认暴露，推荐

  默认暴露精简写法，Vue.extent()可以省略 
*/
export default {
  name: "MySchool", // 跟文件名保持一致，要使用多单词驼峰命名法，否则报错
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
/* css样式 */
.demo {
  background-color: orange;
}
</style>