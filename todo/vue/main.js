// define and set todo-adder component to Vue
Vue.component('todo-adder', {
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    // called when ADD button is clicked
    // fire add-todo event with the new todo string for the parent component
    onAddButtonClicked() {
      if (!this.newTodo) return;
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
        class="add"
        @click="onAddButtonClicked">
        ADD
      </button>
    </div>`,
});

// define and set todo-list-item component to Vue
Vue.component('todo-list-item', {
  props: {
    todo: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    // called when DONE! button is clicked
    onDoneButtonClick() {
      this.$emit('done', this.index);
    },
  },
  template: `
    <li class="todo-list-item">
      <span>{{ todo }}</span>
      <button
        type="button"
        class="done"
        @click="onDoneButtonClick">
        DONE!
      </button>
    </li>`,
});

// define and set todo-list component to Vue
Vue.component('todo-list', {
  props: {
    todos: {
      type: Array,
      default: [],
    },
  },
  methods: {
    onDone(index) {
      this.$emit('remove-todo', index);
    },
  },
  template: `
    <div class="todo-list-container">
      <ul id="todo-list">
        <todo-list-item
          v-for="(todo, index) in todos"
          key="index"
          :todo="todo"
          :index="index"
          @done="onDone"/>
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
    // called when remove-todo event occured
    // remove the todo at the given index from the list
    removeTodo(indexToRemove) {
      this.todos.splice(indexToRemove, 1);
    },
  },
  template: `
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
    </main>`,
});
