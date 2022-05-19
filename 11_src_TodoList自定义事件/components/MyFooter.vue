<template>
  <div class="todo-footer" v-show="all">
    <label for="">
      <!-- <input type="checkbox" :checked="isChecked" @click="checkAll" /> -->
      <!-- <input type="checkbox" :checked="isChecked" @change="checkAll" /> -->
      <input type="checkbox" v-model="isChecked" />
    </label>
    <span>
      <span>已完成{{ finished }}</span> / 全部{{ all }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    all() {
      return this.todos.length;
    },
    finished() {
      /* // 使用forEach遍历
      let count = 0;
      this.todos.forEach((todo) => {
        if (todo.done) count++;
      });
      return count; */
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0);
      }, 0);
    },
    isChecked: {
      get() {
        return this.all === this.finished && this.all > 0;
      },
      set(value) {
        this.$emit("checkAllTodo", value);
      },
    },
  },
  methods: {
    checkAll(e) {
      console.log(this.isChecked);
      // this.checkAllTodo(this.isChecked)
      // this.checkAllTodo(e.target.checked);
      this.$emit("checkAllTodo", e.target.checked);
    },
    clearAll() {
      this.$emit("delFinished");
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