import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middlewares/root_middleware';

const configureStore = (preloadedState = { workers: [] }) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(RootMiddleware)
  )
);

export default configureStore;