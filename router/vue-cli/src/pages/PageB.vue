<template>
  <main class="page-b">
    <PageTitle :title="myName" />
    <hr>
    <SiteTree />
  </main>
</template>

<script>
import PageTitle from '../components/PageTitle';
import SiteTree from '../components/SiteTree';

export default {
  components: {
    PageTitle,
    SiteTree,
  },
  computed: {
    myName() {
      return 'This is ' + this.$route.path;
    },
  },
};
</script>

<style scoped>
main.page-b {
  background-color: lavenderblush;
}
</style>
