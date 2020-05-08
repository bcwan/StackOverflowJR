import React from 'react';
import { Link } from 'react-router-dom';
import AllQuestionsItem from './all_questions_item';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import SideBarContainer from '../../sidebar/sidebar'

class AllQuestionsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions, fetchQuestion } = this.props;
    return (
      <div>
        <SideBarContainer />
        <section className="questions-section">
          <section className="title-button">
            <h3 className="index-title">All Questions</h3>
            <Link className="ask-question" to="/questions/ask">
              <Button variant="warning">Ask Question</Button>
            </Link>
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
      </div>
    )
  }
}

export default AllQuestionsIndex;