<template>
  <div class="app">
    <h1>{{ msg }}, 学生姓名是{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现： 子给父传递数据 -->
    <MySchool :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定自定义事件实现： 子给父传递数据（第一种写法：使用v-on或@）-->
    <!-- <MyStudent @atguigu.once="getStudentName" /> -->
    <!-- <MyStudent @atguigu="getStudentName" @demo="m1" /> -->

    <!-- 通过父组件给子组件绑定自定义事件实现： 子给父传递数据（第二种写法：使用ref）-->
    <!-- .native 告诉vue，这里的click是原生的指令，而不是自定义指令，在解析时，将click事件绑定到组件的根元素div上 -->
    <MyStudent ref="student" @click.native="show" />
  </div>
</template>

<script>
import MyStudent from "./components/MyStudent.vue";
import MySchool from "./components/MySchool.vue";

export default {
  name: "App",
  components: { MyStudent, MySchool },
  data() {
    return {
      msg: "你好啊",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("APP收到了学校名：", name);
    },
    getStudentName(name, ...params) {
      console.log("APP收到了学生名：", name, params);
      this.studentName = name;
    },
    m1() {
      console.log("demo被触发了");
    },
    show() {
      alert("222");
    },
  },
  mounted() {
    // setTimeout(() => {
    // 绑定自定义事件：当atguigu被触发，则调用getStudentName函数
    // this.$refs.student.$on("atguigu", this.getStudentName);
    // }, 3000);
    // this.$refs.student.$on("atguigu", this.getStudentName);
    this.$refs.student.$on("atguigu", (name, ...params) => {
      console.log("APP收到了学生名：", name, params);
      this.studentName = name; // 使用普通函数，this指向student组件实例对象，使用箭头函数，this指向mounted
    });

    // this.$refs.student.$once("atguigu", this.getStudentName);
  },
};
</script>

<style>
.app {
  background-color: grey;
  padding: 5px;
}
</style>
