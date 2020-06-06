import * as DownvoteApiUtil from '../util/downvote_api_util';

export const RECEIVE_DOWNVOTE = 'RECEIVE_DOWNVOTE';
export const REMOVE_DOWNVOTE = 'REMOVE_DOWNVOTE';

const receiveDownvote = questionId => ({
  type: RECEIVE_DOWNVOTE,
  questionId
});

const removeDownvote = questionId => ({
  type: REMOVE_DOWNVOTE,
  questionId
});

// thunk action creators
// the response from downvoting returns question attributes with the
// downvotes number updated ~ similar to fetchQuestion thunk action in questions_actions.js
// it's how the controllers were set
export const createDownvote = (questionId) => (dispatch) => {
  return DownvoteApiUtil.createDownvote(questionId)
    .then(updatedDownvotes => dispatch(receiveDownvote(updatedDownvotes)))
};

// delete will returns an updated downvote number if user decides not to downvote
// it returns all the question attributes, including the new downvote number ~ its how controllers are set
export const deleteDownvote = (questionId) => (dispatch) => {
  return DownvoteApiUtil.deleteDownvote(questionId)
    .then(updatedDownvotes => dispatch(removeDownvote(updatedDownvotes)))
};
