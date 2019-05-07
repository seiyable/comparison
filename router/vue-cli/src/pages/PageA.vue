<template>
  <main class="page-a">
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
      return 'Now at ' + this.$route.path;
    },
  },
};
</script>

<style scoped>
main.page-a {
  background-color: aliceblue;
}
</style>
