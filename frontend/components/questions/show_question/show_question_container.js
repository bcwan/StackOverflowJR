import { connect } from 'react-redux';
import ShowQuestion from './show_question';
import { fetchQuestion, updateQuestion, deleteQuestion } from '../../../actions/questions_actions';
//import { fetchAnswersForQuestion, deleteAnswer, createAnswer, updateAnswer } from '../../../actions/answers_actions';

const mSTP = (state, ownProps) => {

  return {
    question: state.entities.questions[ownProps.match.params.questionId]
  }
};

const mDTP = (dispatch) => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  // fetchAnswersForQuestion: (questionId) => dispatch(fetchAnswersForQuestion(questionId))
});

export default connect(mSTP, mDTP)(ShowQuestion);
