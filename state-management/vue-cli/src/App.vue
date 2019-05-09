<template>
  <main>
    <ResultDisplay />
    <Controls />
  </main>
</template>

<script>
import ResultDisplay from './components/ResultDisplay.vue';
import Controls from './components/Controls.vue';

export default {
  name: 'app',
  components: {
    ResultDisplay,
    Controls,
  },
};
</script>

<style>
body, #app {
  height: 100vh;
  background-color: whitesmoke;
  font-family: 'Roboto', serif;
}

#app {
  position: relative;
}

main {
  width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
