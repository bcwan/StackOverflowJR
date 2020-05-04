import React from 'react';
import { Link } from 'react-router-dom';
import AllQuestionsItem from './all_questions_item';

class AllQuestionsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    
  }
}

export default AllQuestionsIndex;