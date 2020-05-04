import React from 'react';
import { Link } from 'react-router-dom';
import AllQuestionsItem from './all_questions_item';
import Button from 'react-bootstrap/Button';


class AllQuestionsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions, fetchQuestions, fetchQuestion } = this.props;
    return (
      <section className="questions-section">
        <h3 className="index-title">All Questions</h3>
      </section>
    )
  }
}

export default AllQuestionsIndex;