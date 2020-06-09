import React from 'react';
import { Link } from 'react-router-dom';
import AllQuestionsItem from './all_questions_item';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import SideBarContainer from '../../sidebar/sidebar';
import AskQuestion from '../new_question/ask_question';

class AllQuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpenForAsk: false,
    }
    this.changeModalStatusForAsk = this.changeModalStatusForAsk.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  changeModalStatusForAsk(status) {
    this.setState({ modalOpenForAsk: status });
  }

  render() {
    const { currentUser, questions, fetchQuestion, createQuestion } = this.props;
    return (
      <div>
        <SideBarContainer />
        <section className="questions-section">
          <section className="title-button">
            <h3 className="index-title">All Questions</h3>
            <Button className="ask-question" 
                    variant="warning"
                    onClick={() => 
                      {
                        //make sure user is logged in in order to ask questions
                        !!currentUser ?
                          this.changeModalStatusForAsk(true) :
                          this.props.history.push('/login')
                      }
                    }
            >
              Ask Question
            </Button>
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
          <Modal
            isOpen={this.state.modalOpenForAsk}
            onRequestClose={() => this.changeModalStatusForAsk(false)}
            style={{
              content: {
                borderRadius: "7px",
              },
              overlay: {
                position: "fixed",
                zIndex: "50",
              },
            }}
          >
            <Button className="exit-ask-question" variant="info" onClick={() => this.changeModalStatusForAsk(false)}>
              Close
          </Button>
            <AskQuestion
              currentUser={currentUser}
              question={question}
              createQuestion={createQuestion}
              changeModalStatusForAsk={this.changeModalStatusForAsk}
            />
          </Modal>
        </section>
      </div>
    )
  }
}

export default AllQuestionsIndex;