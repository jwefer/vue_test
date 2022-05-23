<template>
  <div class="school">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    this.pid = pubsub.subscribe("hello", (msgName, data) => {
      console.log("收到了hello发布的消息：", data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pid);
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  margin-top: 10px;
  padding: 5px;
}
</style>