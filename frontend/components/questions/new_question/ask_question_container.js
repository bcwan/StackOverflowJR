import { connect } from 'react-redux';
import AskQuestion from './ask_question';
import {
  createQuestion
} from '../../../actions/questions_actions';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mDTP = (dispatch) => ({
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(mSTP, mDTP)(AskQuestion);