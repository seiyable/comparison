import Vue from 'vue';
import Vuex from 'vuex';
import _store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuex);
const store = new Vuex.Store(_store);

new Vue({
  el: '#app',
  render: h => h(App),
  store,
});
