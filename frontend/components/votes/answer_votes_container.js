import { connect } from 'react-redux';
import AnswerVotes from './answer_votes';
import { createAnswerUpvote, deleteUpvote } from '../../actions/upvote_actions';
import { createAnswerDownvote, deleteDownvote } from '../../actions/downvote_actions';

const mSTP = (state, ownProps) => {
  return {
    questionId: ownProps.questionId,
    answer: ownProps.answer,
    currentUser: state.entities.users[state.session.id]
  }
};

const mDTP = (dispatch) => ({
  createAnswerUpvote: (questionId, answerId) => dispatch(createAnswerUpvote(questionId, answerId)),
  deleteUpvote: (questionId) => dispatch(deleteUpvote(questionId)),
  createAnswerDownvote: (questionId, answerId) => dispatch(createAnswerDownvote(questionId, answerId)),
  deleteDownvote: (questionId) => dispatch(deleteDownvote(questionId))
});

export default connect(mSTP, mDTP)(AnswerVotes);