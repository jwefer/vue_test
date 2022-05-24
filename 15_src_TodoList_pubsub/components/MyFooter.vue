<template>
  <div class="todo-footer" v-show="all">
    <label for="">
      <input type="checkbox" :checked="isChecked" @click="checkAll" />
    </label>
    <span>
      <span>已完成{{ finished }}</span> / 全部{{ all }}
    </span>
    <button class="btn btn-danger" @click="delAll">清除已完成任务</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyFooter",
  props: ["todos", "allChecked"],
  methods: {
    checkAll() {
      this.allChecked(this.isChecked);
    },
    delAll() {
      // this.finishedDel();
      // 发布消息
      pubsub.publish("finishedDel");
    },
  },
  computed: {
    finished() {
      let count = 0;
      this.todos.forEach((todo) => {
        if (todo.done) count++;
      });
      return count;
    },
    all() {
      return this.todos.length;
    },
    isChecked() {
      return this.finished === this.all;
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  margin-left: 5px;
}
.todo-footer label {
  margin-right: 30px;
}
.todo-footer label input {
  position: relative;
  top: 1px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>