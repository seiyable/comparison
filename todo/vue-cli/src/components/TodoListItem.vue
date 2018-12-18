<template>
  <li class="todo-list-item">
    <span>{{ todo }}</span>
    <button
      type="button"
      class="done"
      @click="onDoneButtonClick">
      DONE!
    </button>
  </li>
</template>

<script>
export default {
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
};
</script>

<style lang="stylus" scoped>
@import '~@/stylus/variables'

li.todo-list-item
  display: flex
  align-items: center
  margin-bottom: ($gap / 2)

  button.done
    margin-left: ($gap * 3 / 4)
</style>
