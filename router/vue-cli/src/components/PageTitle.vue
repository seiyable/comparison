<template>
  <h1 class="page-title">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
h1.page-title {
  font-size: 64px;
  padding: 20px;
}
</style>
