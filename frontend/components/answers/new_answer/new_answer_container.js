import { connect } from 'react-redux';
import NewAnswer from './new_answer';
import { createAnswer } from '../../../actions/answers_actions';

const mSTP = (state, ownProps) => ({
  questionId: ownProps.questionId
});

const mDTP = (dispatch) => ({
  createAnswer: (questionId, answer) => dispatch(createAnswer(questionId, answer))
});

export default connect(mSTP, mDTP)(NewAnswer);