//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//Components
// import Root from './components/root';
import RootContainer from './components/root_container';
//Actions
import configureStore from './store/store';


// document.addEventListener('DOMContentLoaded', () => {
//   let store;
//   if (window.currentUser) {
//     const initialState = {session: {currentUser: window.currentUser}};
//     store = configureStore(initialState);
//   } else {
//     store = configureStore();
//   }

//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store}/>, root);
// });


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // console.log(store);
  const App = () => (
    <Provider store={store}>
      <RootContainer/>
    </Provider>
    );
  ReactDOM.render(
    // <h1>Hello, world!</h1>,
    // <Root store={store}/>,
    <App/>,
    document.getElementById('root')
  );
});