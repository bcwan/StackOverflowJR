import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { 
//   fetchQuestion, 
//   fetchQuestions, 
//   createQuestion,
//   updateQuestion,
//   deleteQuestion
// } from './actions/questions_actions'

import {
  fetchAnswersForQuestion,
  fetchAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer
} from './actions/answers_actions'

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


  // test question actions
  // window.fetchQuestion = fetchQuestion;
  // window.fetchQuestions = fetchQuestions;
  // window.createQuestion = createQuestion;
  // window.updateQuestion = updateQuestion;
  // window.deleteQuestion = deleteQuestion;

  // test answer actions
  window.fetchAnswersForQuestion = fetchAnswersForQuestion;
  window.fetchAnswer = fetchAnswer;
  window.createAnswer = createAnswer;
  window.updateAnswer = updateAnswer;
  window.deleteAnswer = deleteAnswer;

  ReactDOM.render(<Root store={store}/>, root);
});


