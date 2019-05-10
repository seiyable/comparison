const {createStore, applyMiddleware} = window.Redux;
const ReduxThunk = window.ReduxThunk.default;

// action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const START_PROCESSING = 'START_PROCESSING';
const END_PROCESSING = 'END_PROCESSING';

// action creators
const actionCreators = {
  increment: () => ({type: INCREMENT}),
  decrement: () => ({type: DECREMENT}),
  startProcessing: () => ({type: START_PROCESSING}),
  endProcessing: () => ({type: END_PROCESSING}),
  delayedIncrement: () => {
    return (dispatch) => {
      const self = actionCreators;
      dispatch(self.startProcessing());
      return setTimeout(() => {
        dispatch(self.endProcessing());
        dispatch(self.increment());
      }, 1000);
    };
  },
  delayedDecrement: () => {
    return (dispatch) => {
      const self = actionCreators;
      dispatch(self.startProcessing());
      return setTimeout(() => {
        dispatch(self.endProcessing());
        dispatch(self.decrement());
      }, 1000);
    };
  },
};

// reducer
const initialState = {
  number: 0,
  asyncActionsInProcess: 0,
};
const reducer = (state, action) => {
  console.log('action', action);
  if (typeof state === 'undefined') return initialState;
  switch (action.type) {
    case INCREMENT: {
      return Object.assign({}, state, {
        number: state.number + 1,
      });
    }
    case DECREMENT: {
      return Object.assign({}, state, {
        number: state.number - 1,
      });
    }
    case START_PROCESSING: {
      return Object.assign({}, state, {
        asyncActionsInProcess: state.asyncActionsInProcess + 1,
      });
    }
    case END_PROCESSING: {
      return Object.assign({}, state, {
        asyncActionsInProcess: state.asyncActionsInProcess - 1,
      });
    }
  }
  return state;
}

// store
const store = createStore(reducer, applyMiddleware(ReduxThunk));
