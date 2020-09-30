import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import 'bootstrap/dist/css/bootstrap.min.css';

// Google Analytics
import ReactGA from 'react-ga';


// React Redux Containers
import LoginContainer from "./user_session/login_form_container"
import SignUpContainer from "./user_session/signup_form_container"
import NavBarContainer from './navbar/navbar_container';
import AllQuestionsIndexContainer from './questions/all_questions_index/all_questions_index_container';
import ShowQuestionContainer from './questions/show_question/show_question_container';
import HomeComponent from './home/home';
import SearchQuestionIndexContainer from './questions/search_question/search_questions_container';


const App = () => {

  useEffect(() => {
    ReactGA.initialize("UA-179101592-1");
    ReactGA.pageview(window.location.hash)
  }, [])

  return (
    <div>
      <header className="header-bar">
        <NavBarContainer />
      </header>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route
          exact
          path="/questions/:questionId"
          component={ShowQuestionContainer}
        />
        <Route exact path="/questions" component={AllQuestionsIndexContainer} />
        <Route exact path="/search/:keywords" component={SearchQuestionIndexContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignUpContainer} />
      </Switch>
    </div>
  );
};

export default App;