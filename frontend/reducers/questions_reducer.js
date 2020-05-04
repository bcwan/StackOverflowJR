import {
  RECEIVE_ALL_QUESTIONS,
  REMOVE_QUESTION,
  RECEIVE_QUESTION
} from '../actions/questions_actions';

const QuestionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_QUESTION:
      debugger;
      nextState[action.question.id] = action.question;
      return nextState;
    case REMOVE_QUESTION:
      delete nextState[action.questionId];
      return nextState;
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    default:
      return oldState;
  }
}

export default QuestionReducer;