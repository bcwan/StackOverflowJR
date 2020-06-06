import * as UpvoteApiUtil from '../util/upvote_api_util';

export const RECEIVE_UPVOTE = 'RECEIVE_UPVOTE';
export const REMOVE_UPVOTE = 'REMOVE_UPVOTE';

const receiveUpvote = questionId => ({
  type: RECEIVE_UPVOTE,
  questionId
});

const removeUpvote = questionId => ({
  type: REMOVE_UPVOTE,
  questionId
});

// thunk action creators
// the response from upvoting returns question attributes with the
// upvotes number updated ~ similar to fetchQuestion thunk action in questions_actions.js
// it's how the controllers were set
export const createUpvote = (questionId) => (dispatch) => {
  return UpvoteApiUtil.createUpvote(questionId)
    .then(updatedUpvotes => dispatch(receiveUpvote(updatedUpvotes)))
};

// delete will returns an updated upvote number if user decides not to upvote
// it returns all the question attributes, including the new upvote number ~ its how controllers are set
export const deleteUpvote = (questionId) => (dispatch) => {
  return UpvoteApiUtil.deleteUpvote(questionId)
    .then(updatedUpvotes => dispatch(removeUpvote(updatedUpvotes)))
};

