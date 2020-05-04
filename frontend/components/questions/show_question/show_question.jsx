import React from 'react';
import { Link } from 'react-router-dom';

class ShowQuestion extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    //fetchAnswersForQuestion: (questionId) => dispatch(fetchAnswersForQuestion(questionId))
    this.props.fetchQuestion(this.props.match.params.questionId);
    this.props.fetchAnswersForQuestion(this.props.match.params.questionId);

  }
  
  render () {
    const { question } = this.props;
    return (
      <section>
        <h1>{question.title}</h1>
        <p>{question.description}</p>
      </section>
    )
  }
  
}

export default ShowQuestion;