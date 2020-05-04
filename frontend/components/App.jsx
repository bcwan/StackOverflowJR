import React from "react";
import GreetingContainer from "./greeting/greeting_container"
import LoginContainer from "./user_session/login_form_container"
import SignUpContainer from "./user_session/signup_form_container"
import { Route, Redirect, HashRouter, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import NavBarContainer from './navbar/navbar_container';
import SideBarContainer from './sidebar/sidebar_container';
import AllQuestionsIndexContainer from './questions/all_questions_index/all_questions_index_container'


const App = () => (
  <div>
    <header className="header-bar">
      <NavBarContainer />
      {/*<GreetingContainer />*/}
      <SideBarContainer />
      {/*<AllQuestionsIndexContainer /> */}
    </header>
    <Switch>
      <Route exact path="/" />
      <Route exact path="/questions" component={AllQuestionsIndexContainer}/>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      
    </Switch>
  </div>
);

export default App;