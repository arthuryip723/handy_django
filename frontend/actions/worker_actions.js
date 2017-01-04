export const REQUEST_WORKERS = "REQUEST_WORKERS";
export const RECEIVE_WORKERS = "RECEIVE_WORKERS";

export const requestWorkers = () => ({
  type: REQUEST_WORKERS,
});

export const receiveWorkers = workers => ({
  type: RECEIVE_WORKERS,
  workers
});