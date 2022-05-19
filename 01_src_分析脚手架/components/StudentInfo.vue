<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "StudentInfo", // 跟文件名保持一致
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
};
</script>
