import React from "react";
import { Route, Redirect, HashRouter, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, LoggedInRoute } from '../util/route_utils'


// React Redux Containers
import LoginContainer from "./user_session/login_form_container"
import SignUpContainer from "./user_session/signup_form_container"
import NavBarContainer from './navbar/navbar_container';
import SideBarContainer from './sidebar/sidebar_container';
import AllQuestionsIndexContainer from './questions/all_questions_index/all_questions_index_container'
import AskQuestionContainer from './questions/new_question/ask_question_container';
import ShowQuestionContainer from './questions/show_question/show_question_container';
import HomeComponent from './home/home';


const App = () => (
  <div>
    <header className="header-bar">
      <NavBarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={HomeComponent}/>
      <LoggedInRoute exact path="/questions/ask" component={AskQuestionContainer} />

      <Route exact path="/questions/:questionId" component={ShowQuestionContainer} />
      <Route exact path="/questions" component={AllQuestionsIndexContainer}/>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      
    </Switch>
  </div>
);

export default App;