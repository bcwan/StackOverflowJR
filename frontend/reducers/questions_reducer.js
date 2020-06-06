import {
  RECEIVE_ALL_QUESTIONS,
  REMOVE_QUESTION,
  RECEIVE_QUESTION
} from '../actions/questions_actions';

import {
  RECEIVE_UPVOTE,
  REMOVE_UPVOTE
} from '../actions/upvote_actions';

import {
  RECEIVE_DOWNVOTE,
  REMOVE_DOWNVOTE
} from '../actions/downvote_actions';

const QuestionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_QUESTION:
      nextState[action.question.id] = action.question;
      return nextState;
    case REMOVE_QUESTION:
      delete nextState[action.questionId];
      return nextState;
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case RECEIVE_UPVOTE:
    case REMOVE_UPVOTE:
    case RECEIVE_DOWNVOTE:
    case REMOVE_DOWNVOTE:
    default:
      return oldState;
  }
}

export default QuestionReducer;