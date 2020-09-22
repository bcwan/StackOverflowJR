import { connect } from 'react-redux';
import SearchQuestionsIndex from './search_questions_index';
import {
  fetchSearchQuestions
} from '../../../actions/search_questions_actions';

const mSTP = (state) => {
  return ({
    questions: Object.values(state.entities.search_questions),
    currentUser: state.entities.users[state.session.id]
  });
};

const mDTP = (dispatch) => ({
  fetchSearchQuestions: () => dispatch(fetchSearchQuestions())
});

export default connect(mSTP, mDTP)(SearchQuestionsIndex);