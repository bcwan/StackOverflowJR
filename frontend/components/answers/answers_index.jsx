import React from 'react';
import AnswerItem from './answers_item';

class AnswerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAnswersForQuestion(this.props.questionId);
  }

  render() {
    return null;
  }
}

export default AnswerIndex;