import { connect } from 'react-redux';
import EditQuestion from './edit_question';
import {
  updateQuestion,
  fetchQuestion
} from '../../../actions/questions_actions';

const mSTP = ({ session, entities: { users, questions }}, ownProps) => ({
  currentUser: users[session.id],
  question: questions[ownProps.match.params.questionId]
});

const mDTP = (dispatch) => ({
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
});

export default connect(mSTP, mDTP)(EditQuestion);