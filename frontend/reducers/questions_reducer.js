import {
  RECEIVE_ALL_QUESTIONS,
  REMOVE_QUESTION,
  RECEIVE_QUESTION
} from '../actions/questions_actions';

import {
  UPDATE_UPVOTE
} from '../actions/upvote_actions';

import {
  UPDATE_DOWNVOTE
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
    case UPDATE_UPVOTE:
      nextState[action.vote.id].downvotes = action.vote.downvotes;
      nextState[action.vote.id].upvotes = action.vote.upvotes;
      nextState[action.vote.id].downvotes_user_id = action.vote.downvotes_user_id;
      nextState[action.vote.id].upvotes_user_id = action.vote.upvotes_user_id;
      return nextState;
    case UPDATE_DOWNVOTE:
      nextState[action.vote.id].downvotes = action.vote.downvotes;
      nextState[action.vote.id].upvotes = action.vote.upvotes;
      nextState[action.vote.id].downvotes_user_id = action.vote.downvotes_user_id;
      nextState[action.vote.id].upvotes_user_id = action.vote.upvotes_user_id;
      return nextState;
    default:
      return oldState;
  }
}

export default QuestionReducer;