<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyTest2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: yellow;
  /* transition: 1s linear; */
}
/* 进入的起点, 离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/* 离开的起点 进入的终点 */
.hello-leave,
.hello-enter-to {
  transform: translateX(0);
}
.hello-enter-active,
.hello-leave-active {
  transition: 1s linear;
}
</style>