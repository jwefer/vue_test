<template>
  <div>
    <!-- 直接使用sex="18"传过去的数据皆为String，而使用v-bind指令，则传过去的数据为引号内的表达式执行结果 -->
    <MyStudent name="张三" :age="18" sex="女" />
  </div>
</template>

<script>
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  components: { MyStudent },
};
</script>
