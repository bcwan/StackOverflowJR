import * as DownvoteApiUtil from '../util/downvote_api_util';

export const UPDATE_DOWNVOTE = 'UPDATE_DOWNVOTE';

const updateDownvote = question => ({
  type: UPDATE_DOWNVOTE,
  question
});


// thunk action creators
// the response from downvoting returns question attributes with the
// downvotes number updated ~ similar to fetchQuestion thunk action in questions_actions.js
// it's how the controllers were set
export const createDownvote = (questionId, answerId) => (dispatch) => {
  return DownvoteApiUtil.createDownvote(questionId, answerId)
    .then(updatedDownvotes => dispatch(updateDownvote(updatedDownvotes)))
};

// delete will returns an updated downvote number if user decides not to downvote
// it returns all the question attributes, including the new downvote number ~ its how controllers are set
export const deleteDownvote = (questionId) => (dispatch) => {
  return DownvoteApiUtil.deleteDownvote(questionId)
    .then(updatedDownvotes => dispatch(updateDownvote(updatedDownvotes)))
};
