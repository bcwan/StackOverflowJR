import * as UpvoteApiUtil from '../util/upvote_api_util';

export const UPDATE_UPVOTE = 'UPDATE_UPVOTE';
export const UPDATE_ANSWER_UPVOTE = 'UPDATE_ANSWER_UPVOTE';

const updateUpvote = vote => {
  return {
    type: UPDATE_UPVOTE,
    vote
  }
};

const updateAnswerUpvote = vote => {
  return {
    type: UPDATE_ANSWER_UPVOTE,
    vote
  }
}


// thunk action creators
export const createUpvote = (questionId, answerId = 0) => (dispatch) => {
  return UpvoteApiUtil.createUpvote(questionId, answerId)
    .then(updatedUpvotes => dispatch(updateUpvote(updatedUpvotes)))
};

export const createAnswerUpvote = (questionId, answerId) => (dispatch) => {
  debugger;
  return UpvoteApiUtil.createUpvote(questionId, answerId)
    .then(updatedUpvotes => dispatch(updateAnswerUpvote(updatedUpvotes)))
};

// delete will returns an updated upvote number if user decides not to upvote
// it returns all the question attributes, including the new upvote number ~ its how controllers are set
export const deleteUpvote = (questionId) => (dispatch) => {
  return UpvoteApiUtil.deleteUpvote(questionId)
    .then(updatedUpvotes => dispatch(updateUpvote(updatedUpvotes)))
};


