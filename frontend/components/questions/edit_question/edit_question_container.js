import React from 'react';
import { connect } from 'react-redux';
import EditQuestionForm from './edit_question_form';
import {
  updateQuestion,
  fetchQuestion
} from '../../../actions/questions_actions';


class EditQuestion extends React.Component {

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  render() {
    const { question, currentUser, updateQuestion, fetchQuestion } = this.props;
    if (!question) {
      return null;
    }
    return (
      <EditQuestionForm question={question}
                    currentUser={currentUser}
                    updateQuestion={updateQuestion}
                    fetchQuestion={fetchQuestion} />
    );
  }
}

const mSTP = ({ session, entities: { users, questions }}, ownProps) => ({
  currentUser: users[session.id],
  question: questions[ownProps.match.params.questionId]
});

const mDTP = (dispatch) => ({
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
});

export default connect(mSTP, mDTP)(EditQuestion);