import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';

import Root from './components/root';


// test out thunk actions
// import { login, logout, signup } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // test out store
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;

  ReactDOM.render(<Root store={store}/>, root);
});


// api util testing
// =================
// import { login, logout, signup } from './util/session_api_util'
// window.login = login;
// window.logout = logout;
// window.signup = signup;