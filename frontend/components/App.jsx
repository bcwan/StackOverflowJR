import React from "react";
import GreetingContainer from "./greeting/greeting_container"
import LoginContainer from "./user_session/login_form_container"
import SignUpContainer from "./user_session/signup_form_container"
import { Route, Redirect, HashRouter, Link, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <header className="header-bar">
      <h1>StackOverflow Jr</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
    </Switch>
  </div>
);

export default App;