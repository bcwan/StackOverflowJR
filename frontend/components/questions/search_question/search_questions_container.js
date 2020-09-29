import { connect } from 'react-redux';
import SearchQuestionsIndex from './search_questions_index';
import {
  fetchSearchQuestions
} from '../../../actions/search_questions_actions';
import {
  fetchQuestion,
  createQuestion,
} from "../../../actions/questions_actions";

const mSTP = (state) => {
  return ({
    questions: Object.values(state.entities.search_questions),
    currentUser: state.entities.users[state.session.id]
  });
};

const mDTP = (dispatch) => ({
  fetchSearchQuestions: () => dispatch(fetchSearchQuestions()),
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  createQuestion: (question) => dispatch(createQuestion(question)),
});

export default connect(mSTP, mDTP)(SearchQuestionsIndex);