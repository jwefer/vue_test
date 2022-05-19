<template>
  <ul class="todo-main">
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :checkTodo="checkTodo"
      :delTodo="delTodo"
    />
  </ul>
</template>
    
<script>
import MyItem from "./MyItem.vue";

export default {
  name: "MyList",
  components: { MyItem },
  props: ["todos", "checkTodo", "delTodo"],
};
</script>

<style scoped>
.todo-main {
  width: 575px;
  border: 1px solid rgb(221, 221, 221);
  padding: 0; /* 列表必设样式，取消缩进 */
}
</style>