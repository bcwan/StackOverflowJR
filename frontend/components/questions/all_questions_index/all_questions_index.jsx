import React from 'react';
import { Link } from 'react-router-dom';
import AllQuestionsItem from './all_questions_item';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'


class AllQuestionsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions, fetchQuestion } = this.props;
    return (
      <section className="questions-section">
        <section className="title-button">
          <h3 className="index-title">All Questions</h3>
          <Button className="ask-question" variant="warning">Ask Question</Button>
        </section>
        <ListGroup variant="flush">
        {
          questions.map((question) => (
            <AllQuestionsItem question={question}
                              fetchQuestion={fetchQuestion}
                              key={question.id}
            
            />
          ))
        }
        </ListGroup>
      </section>
    )
  }
}

export default AllQuestionsIndex;