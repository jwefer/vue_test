<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          @delFinished="delFinished"
          @checkAllTodo="checkAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      index: 0,
    };
  },
  methods: {
    // 添加一个Todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 勾选或取消勾选一个Todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除一个Todo
    delTodo(id) {
      // 使用数组过滤操作进行删除todo对象
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 删除所有已完成的Todo
    delFinished() {
      // 数组的删除操作能使用filter方法，但是返回的是一个新数组
      this.todos.forEach((todo) => {
        if (todo.done) this.delTodo(todo.id);
      });
    },
    // 勾选所有的Todo
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        // todo.done = !done;
        todo.done = done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("delTodo", this.delTodo);
  },
  beforeDestroy() {
    this.$bus.$off(["checkTodo", "delTodo"]);
  },
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 5px;
}

/* 按钮形状设置和背景边框字体颜色最好分开设置，方便复用 */
.btn {
  padding: 4px 12px;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  cursor: pointer;
}

.btn-danger {
  color: #fff;
  background-color: rgb(218, 79, 73);
  border: 1px solid rgb(189, 54, 47);
}

.btn-danger:hover {
  background-color: rgb(189, 54, 47);
}
</style>
