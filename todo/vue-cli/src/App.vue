<template>
  <main id="todo-app">
    <section class="top">
      <h1 class="title">TODOS</h1>
      <todo-adder @add-todo="addTodo"/>
    </section>
    <section class="bottom">
      <todo-list
        :todos="todos"
        @remove-todo="removeTodo"/>
    </section>
  </main>
</template>

<script>
import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';

export default {
  components: {
    TodoAdder,
    TodoList,
  },
  data: {
    todos: [],
  },
  methods: {
    // called when add-todo event occured
    // add the new todo to the list
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    // called when remove-todo event occured
    // remove the todo at the given index from the list
    removeTodo(indexToRemove) {
      this.todos.splice(indexToRemove, 1);
    },
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

main#todo-app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

section {
  width: 50%;
}

section.top {
  padding-top: 100px;
}

h1.title {
  font-size: 64px;
  margin: 20px 0;
}
</style>
