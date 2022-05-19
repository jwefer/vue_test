<template>
  <div class="school">
    <h2 class="font">{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="sendSchoolName">点击把学校名发送给APP</button>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  props: ["getSchoolName"],
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: pink;
  padding: 5px;
}
</style>