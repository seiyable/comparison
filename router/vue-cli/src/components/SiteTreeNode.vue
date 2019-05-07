<template>
  <div class="site-tree-node">
    <span v-if="child">├</span>
    <span v-if="lastChild">└</span>
    <RouterLink
      :class="{disabled: isCurrentPath}"
      :to="path"
    >
      {{ path }}
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '',
    },
    child: {
      type: Boolean,
      default: false,
    },
    lastChild: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isCurrentPath() {
      return this.path === this.$route.path;
    },
  },
};
</script>

<style scoped>
a.disabled {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: black;
}
</style>
