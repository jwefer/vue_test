<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 自定义事件：子 ==> 父 -->
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter :todos="todos" :allChecked="allChecked" />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  components: { MyHeader, MyList, MyFooter },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.push(todoObj);
    },
    // 勾选或者取消勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除一个todo,消息订阅接收两个参数，第一个是消息名
    delTodo(_, id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 选中所有todo或取消
    allChecked(status) {
      this.todos.forEach((todo) => {
        todo.done = !status;
      });
    },
    finishedDel() {
      this.todos = this.todos.filter((todo) => !todo.done);
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
    // this.$bus.$on("delTodo", this.delTodo);
    this.pubId = pubsub.subscribe("delTodo", this.delTodo);
    pubsub.subscribe("finishedDel", this.finishedDel);
  },
  beforeDestroy() {
    this.$bus.$off(["checkTodo", "delTodo"]);
    pubsub.unsubscribe(this.pubId);
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