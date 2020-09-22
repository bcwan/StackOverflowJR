import {
  RECEIVE_SEARCH_QUESTIONS
} from '../actions/search_questions_actions';

const SearchQuestionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_SEARCH_QUESTIONS:
      return action.questions;
    default:
      return oldState;
  }
}

export default SearchQuestionReducer;