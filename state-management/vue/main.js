const store = new Vuex.Store({
  state: {
    number: 0,
  },
  mutations: {
    increment(state) {
      state.number++;
    },
    decrement(state) {
      state.number--;
    },
  },
  actions: {
    delayedIncrement({commit}) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    delayedDecrement({commit}) {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    },
  },
});

Vue.component('ResultDisplay', {
  computed: {
    number() {
      return store.state.number;
    },
  },
  template: `
    <section class="result-display">
      <div class="number">
        {{ number }}
      </div>
    </section>
  `,
});

Vue.component('Controls', {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    increment() {
      this.checked
        ? store.dispatch('delayedIncrement')
        : store.commit('increment');
    },
    decrement() {
      this.checked
        ? store.dispatch('delayedDecrement')
        : store.commit('decrement');
    },
  },
  template: `
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
  `,
});

Vue.component('App', {
  template: `
    <main>
      <ResultDisplay />
      <Controls />
    </main>
  `,
});

const app = new Vue({
  el: '#app',
  template: '<App/>',
});
