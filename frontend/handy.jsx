//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
// import Root from './components/root';
//Actions
// import configureStore from './store/store';


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
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
});