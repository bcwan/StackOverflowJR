import { connect } from 'react-redux';
import Votes from './votes';
import { createUpvote, deleteUpvote } from '../../actions/upvote_actions';
import { createDownvote, deleteDownvote } from '../../actions/downvote_actions';
import { fetchQuestion } from '../../actions/questions_actions';

const mSTP = (state, ownProps) => {
  debugger;
  return {
    questionId: ownProps.question.id,
    upvotes: state.entities.questions[ownProps.question.id].upvotes,
    downvotes: state.entities.questions[ownProps.question.id].downvotes
  }
};

const mDTP = (dispatch) => ({
    createUpvote: (questionId) => dispatch(createUpvote(questionId)),
    deleteUpvote: (questionId) => dispatch(deleteUpvote(questionId)),
    createDownvote: (questionId) => dispatch(createDownvote(questionId)),
    deleteDownvote: (questionId) => dispatch(deleteDownvote(questionId))
});

export default connect(mSTP, mDTP)(Votes);
