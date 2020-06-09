import { connect } from 'react-redux';
import ShowQuestion from './show_question';
import { fetchQuestion, updateQuestion, createQuestion } from '../../../actions/questions_actions';

const mSTP = (state, ownProps) => {

  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    questionId: ownProps.match.params.questionId,
    currentUser: state.entities.users[state.session.id]
  }
};

const mDTP = (dispatch) => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  createQuestion: (question) => dispatch(createQuestion(question))

});

export default connect(mSTP, mDTP)(ShowQuestion);
