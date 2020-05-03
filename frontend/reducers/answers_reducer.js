import {
  RECEIVE_QUESTION_ANSWERS,
  RECEIVE_ANSWER,
  REMOVE_ANSWER
} from '../actions/answers_actions';

const AnswerReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_QUESTION_ANSWERS:
      return action.answers;
    case RECEIVE_ANSWER:
      nextState[action.answer.id] = action.answer;
      return nextState;
    case REMOVE_ANSWER:
      delete nextState[action.answerId];
      return nextState;
    default:
      return oldState;
  }

}

export default AnswerReducer;