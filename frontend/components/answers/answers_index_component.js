import { connect } from 'react-redux';
import AnswerIndex from './answers_index';
import { 
  fetchAnswersForQuestion, 
  fetchAnswer, 
  createAnswer, 
  deleteAnswer, 
  updateAnswer } 
from '../../actions/answers_actions';

const mSTP = (state, ownProps) => ({
  answers: Object.values(state.entities.answers),
  questionId: ownProps.questionId
});

const mDTP = (dispatch) => ({
  fetchAnswersForQuestion: (questionId) => dispatch(fetchAnswersForQuestion(questionId)),
  fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId)),
  createAnswer: (questionId, answer) => dispatch(createAnswer(questionId, answer)),
  deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
  updateAnswer: (answer) => dispatch(updateAnswer(answer))
});


export default connect(mSTP, mDTP)(AnswerIndex);