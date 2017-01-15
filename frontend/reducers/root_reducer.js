import { RECEIVE_WORKERS } from '../actions/worker_actions';

// const RootReducer = (state = {}, action) => {
const RootReducer = (state = { workers: [] }, action) => {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case RECEIVE_WORKERS:
      return { workers: action.workers };
    default:
      return state;
  }
};

export default RootReducer;