<template>
  <section class="site-tree">
    <SiteTreeNode
      path="/index"
    />
    <SiteTreeNode
      path="/page-a"
      child
    />
    <SiteTreeNode
      path="/page-b"
      last-child
    />
  </section>
</template>

<script>
import SiteTreeNode from './SiteTreeNode';

export default {
  components: {
    SiteTreeNode,
  },
};
</script>

<style scoped>
section.site-tree {
  padding: 20px;
}
</style>
