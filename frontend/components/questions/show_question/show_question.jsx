import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AnswerIndexComponent from '../../answers/answers_index/answers_index_container';
import SideBarContainer from '../../sidebar/sidebar';
import EditQuestionForm from '../../questions/edit_question/edit_question_form';
import Modal from 'react-modal';
import QuestionVotesContainer from '../../votes/question_votes_container';
import AskQuestion from '../new_question/ask_question';

class ShowQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalOpenForAsk: false,
    };

    this.changeModalStatus = this.changeModalStatus.bind(this);
    this.changeModalStatusForAsk = this.changeModalStatusForAsk.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId);
    Modal.setAppElement("#root");
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

  // give user who created the question access to edit

  editAccess(currentUser, question) {
    if (!!currentUser && currentUser.id === question.questioner_id) {
      return (
        <Button
          className="edit-question-btn"
          variant="info"
          onClick={() => this.changeModalStatus(true)}
        >
          Edit Question
        </Button>
      );
    } else {
      return (
        <p className="edit-question-btn">
          Edit access is for question creator.
        </p>
      );
    }
  }

  changeModalStatus(status) {
    this.setState({ modalIsOpen: status });
  }

  changeModalStatusForAsk(status) {
    this.setState({ modalOpenForAsk: status });
  }

  render() {
    const { question, currentUser, updateQuestion, createQuestion } = this.props;
    // if we just want to directly access the question by id instead of through the all questions component
    if (!question) {
      return null;
    }

    return (
      <div>
        <SideBarContainer />
        <section className="single-question-container">
          <div className="title-ask-button">
            <h3 className="question-title">{question.title}</h3>
              <Button variant="warning"
                      onClick={() => this.changeModalStatusForAsk(true)}
                      className="ask-question-single"
              >
                Ask Question
              </Button>
          </div>
          <div className="question-contents">
            <div className="question-vote-desc">
              <QuestionVotesContainer question={question}/>
              <p className="question-desc">{question.description}</p>
            </div>
            {this.editAccess(currentUser, question)}
          </div>
          <div className="answer-component-div">
            <AnswerIndexComponent questionId={this.props.questionId} />
          </div>
        </section>
        {/* Modal for editing questions */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.changeModalStatus(false)}
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
          <Button className="exit-edit-question" variant="info" onClick={() => this.changeModalStatus(false)}>
            Close
          </Button>
          <EditQuestionForm 
            question={question}
            updateQuestion={updateQuestion}
            changeModalStatus={this.changeModalStatus}
          />
        </Modal>
        {/* Modal for asking questions */}
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
      </div>
    );
  }
}

export default ShowQuestion;