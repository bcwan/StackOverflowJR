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
import EditQuestionContainer from "./questions/edit_question/edit_question_container";
import EditAnswerContainer from './answers/edit_answer/edit_answer_container';


const App = () => (
  <div>
    <header className="header-bar">
      <NavBarContainer />
      {/*<SideBarContainer />*/}

      {/*<GreetingContainer />*/}
      {/*<AllQuestionsIndexContainer /> */}
    </header>
    <Switch>
      <Route exact path="/" />
      <LoggedInRoute exact path="/questions/ask" component={AskQuestionContainer} />
      <LoggedInRoute exact path="/questions/edit/:questionId" component={EditQuestionContainer} />
      <LoggedInRoute exact path="/answers/edit/:answerId" component={EditAnswerContainer} />

      <Route exact path="/questions/:questionId" component={ShowQuestionContainer} />
      <Route exact path="/questions" component={AllQuestionsIndexContainer}/>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      
    </Switch>
  </div>
);

export default App;