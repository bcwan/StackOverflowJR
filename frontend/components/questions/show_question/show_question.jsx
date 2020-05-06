import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AnswerIndexComponent from '../../answers/answers_index/answers_index_container';

class ShowQuestion extends React.Component {

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId);
    //this.props.fetchAnswersForQuestion(this.props.match.params.questionId);

  }

  fetchData(newId) {
    this.props.fetchQuestion(newId);
  }

  //if DOM is already here, and user changes the url question id
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.questionId !== this.props.questionId) {
      this.fetchData(this.props.questionId);
    }
  }
  
  render () {
    const { question } = this.props;
    // if we just want to directly access the question by id instead of through the all questions component
    if (!question) {
      return null;
    }
    debugger;
    return (
      <section className="single-question-container">
        <div className="title-ask-button">
          <h3 className="question-title">{question.title}</h3>
          <Link className="ask-question-single" to="/questions/ask">
            <Button variant="warning">Ask Question</Button>
          </Link> 
        </div>
        <p className="question-desc">{question.description}</p>
        <div className="answer-component-div">
          <AnswerIndexComponent questionId={this.props.questionId}/>
        </div>
      </section>
    )
  }
  
}

export default ShowQuestion;