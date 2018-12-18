<template>
  <div class="todo-list-container">
    <ul id="todo-list">
      <todo-list-item
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @done="onDone"/>
    </ul>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem';

export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onDone(index) {
      this.$emit('remove-todo', index);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/stylus/variables'

.todo-list-container
  padding: $gap
  width: 100%
</style>
