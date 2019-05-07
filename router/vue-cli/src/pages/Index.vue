<template>
  <main class="index">
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
      return 'Hi, I\'m at ' + this.$route.path;
    },
  },
};
</script>

<style scoped>
main.index {
  background-color: wheat;
}
</style>
