import {INCREMENT, DECREMENT, START_PROCESSING, END_PROCESSING} from './actionTypes';

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

export default actionCreators;
