import React from 'react';
import { connect } from 'react-redux';
import EditAnswerForm from './edit_answer_form';
import {
  updateAnswer,
  fetchAnswer
} from '../../../actions/answers_actions';

class EditAnswer extends React.Component {
  componentDidMount() {
    this.props.fetchAnswer(this.props.match.params.answerId);
  }

  fetchData(newId) {
    this.props.fetchAnswer(newId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.answerId !== this.props.answerId) {
      this.fetchData(this.props.answerId);
    }
  }

  render() {
    const { answer, currentUser, updateAnswer, fetchAnswer } = this.props;
    if (!answer) {
      return null;
    }
    return (
      <EditAnswerForm answer={answer}
                      currentUser={currentUser}
                      updateAnswer={updateAnswer}
                      fetchAnswer={fetchAnswer}
      />
    );
  }

}

const mSTP = ({ session, entities: { users, answers }}, ownProps) => ({
  currentUser: users[session.id],
  answer: answers[ownProps.match.params.answerId],
  answerId: ownProps.match.params.answerId
});

const mDTP = (dispatch) => ({
  updateAnswer: (answer) => dispatch(updateAnswer(answer)),
  fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId))
});

export default connect(mSTP, mDTP)(EditAnswer);