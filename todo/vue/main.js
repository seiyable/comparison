// define and set todo-adder component to Vue
Vue.component('todo-adder', {
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    // called when button is pressed
    // fire add-todo event with the new todo string for the parent component
    onButtonClicked() {
      this.$emit('add-todo', this.newTodo);
      this.newTodo = '';
    },
  },
  template: `
    <div class="add-todo-container">
      <input
        type="text"
        id="add-todo-textinput"
        v-model="newTodo"/>
      <button
        type="button"
        @click="onButtonClicked">
        ADD
      </button>
    </div>`,
});

// define and set todo-list component to Vue
Vue.component('todo-list', {
  props: {
    todos: {
      type: Array,
      default: '',
    },
  },
  template: `
    <div class="todo-list-container">
      <ul id="todo-list">
        <li
          v-for="(todo, index) in todos"
          v-key="index">
          {{ todo }}
        </li>
      </ul>
    </div>`,
});

// create a vue instance to render the app
var app = new Vue({
  el: '#todo-app',
  data: {
    todos: [],
  },
  methods: {
    // called when add-todo event occured
    // add the new todo to the list
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
  template: `
    <main id="todo-app">
      <section class="top">
        <h1 class="title">TODOS</h1>
        <todo-adder @add-todo="addTodo"/>
      </section>
      <section class="bottom">
        <todo-list :todos="todos" />
      </section>
    </main>`,
});
