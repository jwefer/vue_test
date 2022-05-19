<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="item"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      item: "",
    };
  },
  props: ["addTodo"],
  methods: {
    // 也可以通过数据绑定获取输入框中的value
    add() {
      const todoObj = { id: nanoid(), item: this.item, done: false };
      this.addTodo(todoObj);
      this.item = "";
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  padding: 10px 7px;
  font-size: 14px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
}
.todo-header input:focus {
  outline: none; /* 取消input默认获取焦点后边框变色 */
  border-color: rgb(127, 180, 240);
  box-shadow: 0 0 8px 1px rgba(127, 180, 240, 0.6);
}
</style>