<template>
  <li>
    <label for="">
      <input type="checkbox" :checked="todo.done" @click="handleCheck" />
      <span>{{ todo.item }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDel">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleCheck() {
      // this.checkTodo(this.todo.id);
      this.$bus.$emit("checkTodo", this.todo.id);
    },
    handleDel() {
      // this.delTodo(this.todo.id);
      // this.$bus.$emit("delTodo", this.todo.id);
      // 发布消息
      pubsub.publish("delTodo", this.todo.id);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid rgb(221, 221, 221);
}
/* li label {
  float: left;
  cursor: pointer;
} */
li label input {
  vertical-align: middle;
  margin-right: 6px;
  /* 可让复选框的位置和文字对齐 */
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
/* 设置最后一个列表没有下边框 */
li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}
li:hover button {
  display: block;
}
</style>