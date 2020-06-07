import { connect } from 'react-redux';
import Votes from './votes';
import { createUpvote, deleteUpvote } from '../../actions/upvote_actions';
import { createDownvote, deleteDownvote } from '../../actions/downvote_actions';

const mSTP = (state) => {
  return {

  }
};

const mDTP = (dispatch) => {
  return {
    createUpvote: (questionId) => dispatch(createUpvote(questionId)),
    deleteUpvote: (questionId) => dispatch(deleteUpvote(questionId)),
  }
};
