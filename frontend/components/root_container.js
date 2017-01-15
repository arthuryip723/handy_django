import { connect } from 'react-redux';
import { requestWorkers } from '../actions/worker_actions';
import Root from './root';
import { asArray } from '../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // const workers = asArray(state);
  const workers = state.workers;
  // console.log({workers});
  return {
    workers
  };
};

const mapDispatchToProps = dispatch => ({
  requestWorkers: () => dispatch(requestWorkers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Root);