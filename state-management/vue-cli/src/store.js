export default {
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
};
