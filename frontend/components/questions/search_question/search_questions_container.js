import { connect } from 'react-redux';
import SearchQuestionsIndex from './search_questions_index';
import {
  fetchQuestions,
  fetchQuestion,
  createQuestion
} from '../../../actions/questions_actions';

const mSTP = (state) => {
  let questionsResult = Object.values(state.entities.questions);

  return ({
    questions: questionsResult,
    currentUser: state.entities.users[state.session.id]
  });
};

const mDTP = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(mSTP, mDTP)(SearchQuestionsIndex);