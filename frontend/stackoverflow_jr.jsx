import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';

// test out thunk actions
import { login, logout, signup } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // test out store
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = login;
  window.logout = logout;
  window.signup = signup;

  ReactDOM.render(<h1>Welcome to StackOverflow JR</h1>, root);
});


// api util testing
// =================
// import { login, logout, signup } from './util/session_api_util'
// window.login = login;
// window.logout = logout;
// window.signup = signup;