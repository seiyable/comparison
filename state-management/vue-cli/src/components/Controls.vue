<template>
  <section class="controls">
    <div class="top">
      <button @click="increment">
        INCREMENT
      </button>
      <button @click="decrement">
        DECREMENT
      </button>
    </div>
    <div class="bottom">
      <label>
        <input
          v-model="checked"
          type="checkbox"
        >
        DELAYED ACTION
      </label>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    increment() {
      this.checked
        ? this.$store.dispatch('delayedIncrement')
        : this.$store.commit('increment');
    },
    decrement() {
      this.checked
        ? this.$store.dispatch('delayedDecrement')
        : this.$store.commit('decrement');
    },
  },
};
</script>

<style scoped>
section.controls {
  height: 120px;
  background-color: lightseagreen;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section.controls .top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

section.controls .bottom {
  font-size: 14px;
}

button {
  margin: 0 20px;
}
</style>
