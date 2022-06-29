<template>
  <li>
    <label for="">
      <input type="checkbox" :checked="todo.done" @click="handleCheck" />
      <span v-show="!todo.isEdit">{{ todo.item }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.item"
        @blur="handleBlur(todo, $event)"
        ref="inputItem"
      />
    </label>
    <button class="btn btn-danger" @click="handleDel">删除</button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
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
    handleEdit(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        // console.log("@");
        this.$set(todo, "isEdit", true);
      }
      // isEdit为真时，input框还没有show就已经执行下面这行代码了，因此不生效
      // this.$refs.inputItem.focus();
      // 使用nextTick在回调中写DOM更新后要执行的操作即可
      this.$nextTick(function () {
        this.$refs.inputItem.focus();
      });
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空！");
      this.$bus.$emit("editTodo", todo.id, e.target.value);
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