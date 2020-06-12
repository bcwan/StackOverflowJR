import { connect } from 'react-redux';
import AnswerVotes from './answer_votes';
import { createUpvote, deleteUpvote } from '../../actions/upvote_actions';
import { createDownvote, deleteDownvote } from '../../actions/downvote_actions';

const mSTP = (state, ownProps) => {
  return {
    questionId: ownProps.questionId,
    answer: ownProps.answer
  }
};

const mDTP = (dispatch) => ({
  createUpvote: (questionId, answerId) => dispatch(createUpvote(questionId, answerId)),
  deleteUpvote: (questionId) => dispatch(deleteUpvote(questionId)),
  createDownvote: (questionId, answerId) => dispatch(createDownvote(questionId, answerId)),
  deleteDownvote: (questionId) => dispatch(deleteDownvote(questionId))
});

export default connect(mSTP, mDTP)(AnswerVotes);