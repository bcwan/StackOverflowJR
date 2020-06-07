import { connect } from 'react-redux';
import Votes from './votes';
import { createUpvote, deleteUpvote } from '../../actions/upvote_actions';
import { createDownvote, deleteDownvote } from '../../actions/downvote_actions';

const mSTP = (state, ownProps) => {
  return {
    questionId: ownProps.match.params.questionId,
    upvotes: state.entities.questions[ownProps.match.params.questionId].upvotes,
    downvotes: state.entities.questions[ownProps.match.params.questionId].downvotes
  }
};

const mDTP = (dispatch) => {
  return {
    createUpvote: (questionId) => dispatch(createUpvote(questionId)),
    deleteUpvote: (questionId) => dispatch(deleteUpvote(questionId)),
    createDownvote: (questionId) => dispatch(createDownvote(questionId)),
    deleteDownvote: (questionId) => dispatch(deleteDownvote(questionId))
  }
};

export default connect(mSTP, mDTP)(Votes);
