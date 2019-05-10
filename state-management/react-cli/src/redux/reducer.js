import {INCREMENT, DECREMENT} from './actionTypes';

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
  }
  return state;
}

export default reducer;
