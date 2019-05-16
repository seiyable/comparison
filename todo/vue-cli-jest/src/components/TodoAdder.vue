<template>
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
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="stylus" scoped>
@import '~@/stylus/variables'

.add-todo-container
  height: 40px
  padding: ($gap / 2)
  margin-bottom: $gap
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center

  input[type="text"]
    font-size: 24px
    height: 100%
    width: 100%

  button.add
    height: 100%
    width: 80px
    margin-left: $gap
    font-size: 24px
    outline: none
</style>
