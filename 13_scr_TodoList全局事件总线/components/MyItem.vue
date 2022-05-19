<template>
  <li>
    <label for="">
      <!-- 使用v-model虽然也能实现，但是会对props进行修改，违反了Vue的原则 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />
      <span>{{ todo.item }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 删除todo对象
    handleDel(id) {
      // this.delTodo(id);
      this.$bus.$emit("delTodo", id);
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