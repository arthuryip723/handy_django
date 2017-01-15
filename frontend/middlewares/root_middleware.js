import {
  fetchWorkers
} from '../util/worker_api_util';

import { requestWorkers,
  receiveWorkers,
  REQUEST_WORKERS
} from '../actions/worker_actions';

export default ({ getState, dispatch }) => next => action => {
  // const workersSuccess = data => dispatch(receiveWorkers(data));
  const workersSuccess = data => dispatch(receiveWorkers(data.results));
  const result = next(action);
  switch (action.type) {
    case REQUEST_WORKERS:
      fetchWorkers(workersSuccess);
      break;
    default:
      break;
  }
  return result;
}