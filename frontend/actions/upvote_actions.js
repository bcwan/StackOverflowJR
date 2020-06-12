import * as UpvoteApiUtil from '../util/upvote_api_util';

export const UPDATE_UPVOTE = 'UPDATE_UPVOTE';

const updateUpvote = question => {
  return {
    type: UPDATE_UPVOTE,
    question
  }
};


// thunk action creators
// the response from upvoting returns question attributes with the
// upvotes number updated ~ similar to fetchQuestion thunk action in questions_actions.js
// it's how the controllers were set
export const createUpvote = (questionId, answerId = 0) => (dispatch) => {
  return UpvoteApiUtil.createUpvote(questionId, answerId)
    .then(updatedUpvotes => dispatch(updateUpvote(updatedUpvotes)))
};

// delete will returns an updated upvote number if user decides not to upvote
// it returns all the question attributes, including the new upvote number ~ its how controllers are set
export const deleteUpvote = (questionId) => (dispatch) => {
  return UpvoteApiUtil.deleteUpvote(questionId)
    .then(updatedUpvotes => dispatch(updateUpvote(updatedUpvotes)))
};

