import React from 'react';
import SearchQuestionsItem from './search_questions_item';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import SideBarContainer from '../../sidebar/sidebar';
import AskQuestion from '../new_question/ask_question';
import Modal from 'react-modal';
import ReactGA from "react-ga";

class SearchQuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpenForAsk: false,
    };
    this.changeModalStatusForAsk = this.changeModalStatusForAsk.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchQuestions();
    Modal.setAppElement("#root");
  }

  changeModalStatusForAsk(status) {
    this.setState({ modalOpenForAsk: status });
  }

  render() {
    const {
      currentUser,
      questions,
      fetchQuestion,
      createQuestion,
    } = this.props;
    return (
      <div>
        <SideBarContainer />
        <section className="questions-section">
          <section className="title-button">
            <h3 className="index-title">Search Results</h3>
            <Button
              className="ask-question"
              variant="warning"
              onClick={() => {
                //make sure user is logged in in order to ask questions
                ReactGA.event({
                  category: "Ask Question",
                  action: "Click to ask a question",
                });
                !!currentUser
                  ? this.changeModalStatusForAsk(true)
                  : this.props.history.push("/login");
              }}
            >
              Ask Question
            </Button>
          </section>
          <ListGroup variant="flush">
            {questions.map((question) => (
              <SearchQuestionsItem
                question={question}
                fetchQuestion={fetchQuestion}
                key={question.id}
              />
            ))}
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
            <Button
              className="exit-ask-question"
              variant="info"
              onClick={() => this.changeModalStatusForAsk(false)}
            >
              Close
            </Button>
            <AskQuestion
              currentUser={currentUser}
              createQuestion={createQuestion}
              changeModalStatusForAsk={this.changeModalStatusForAsk}
            />
          </Modal>
        </section>
      </div>
    );
  }
}

export default SearchQuestionsIndex;
