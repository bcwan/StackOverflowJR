import { connect } from 'react-redux';
import AllQuestionsIndex from './all_questions_index';
import {
  fetchQuestions,
  fetchQuestion,
  createQuestion
} from '../../../actions/questions_actions';

const mSTP = (state) => ({
  questions: Object.values(state.entities.questions),
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(mSTP, mDTP)(AllQuestionsIndex);