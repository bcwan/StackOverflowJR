import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AnswerIndexComponent from '../../answers/answers_index/answers_index_container';
import SideBarContainer from '../../sidebar/sidebar';
import Modal from 'react-modal';

class ShowQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.changeModalStatus = this.changeModalStatus.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId);
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
        // <Link className="edit-question-btn" to={`/questions/edit/${this.props.questionId}`}>
        //   <Button variant="info">Edit Question</Button>
        // </Link>
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

  render() {
    const { question, currentUser } = this.props;
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
            <Link className="ask-question-single" to="/questions/ask">
              <Button variant="warning">Ask Question</Button>
            </Link>
          </div>
          <div>
            <p className="question-desc">{question.description}</p>
            {this.editAccess(currentUser, question)}
          </div>
          <div className="answer-component-div">
            <AnswerIndexComponent questionId={this.props.questionId} />
          </div>
        </section>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={() => this.changeModalStatus(false)}>
          <p>Modal title</p>
          <Button
            variant="info"
            onClick={() => this.changeModalStatus(false)}>
              Submit Changes
          </Button>
        </Modal>
      </div>
    );
  }
}

export default ShowQuestion;