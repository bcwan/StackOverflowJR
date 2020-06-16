import {
  RECEIVE_QUESTION_ANSWERS,
  RECEIVE_ANSWER,
  REMOVE_ANSWER
} from '../actions/answers_actions';

import {
 UPDATE_ANSWER_UPVOTE
} from '../actions/upvote_actions';

import {
  UPDATE_ANSWER_DOWNVOTE
} from '../actions/downvote_actions';


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
    case UPDATE_ANSWER_UPVOTE:
      nextState[action.vote.id].downvotes = action.vote.downvotes;
      nextState[action.vote.id].upvotes = action.vote.upvotes;
      nextState[action.vote.id].downvotes_user_id = action.vote.downvotes_user_id;
      nextState[action.vote.id].upvotes_user_id = action.vote.upvotes_user_id;
      return nextState;
    case UPDATE_ANSWER_DOWNVOTE:
      nextState[action.vote.id].downvotes = action.vote.downvotes;
      nextState[action.vote.id].upvotes = action.vote.upvotes;
      nextState[action.vote.id].downvotes_user_id = action.vote.downvotes_user_id;
      nextState[action.vote.id].upvotes_user_id = action.vote.upvotes_user_id;
      return nextState;
    default:
      return oldState;
  }

}

export default AnswerReducer;