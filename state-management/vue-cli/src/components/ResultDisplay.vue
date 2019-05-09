<template>
  <section class="result-display">
    <div class="number">
      {{ number }}
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    number() {
      return this.$store.state.number;
    },
  },
};
</script>

<style scoped>
section.result-display {
  height: 400px;
  background-color: midnightblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

section.result-display .number {
  font-size: 100px;
}
</style>
