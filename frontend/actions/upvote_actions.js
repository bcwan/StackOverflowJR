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

