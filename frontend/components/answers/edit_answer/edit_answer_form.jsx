import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class EditAnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.answer;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit() {
    this.props.updateAnswer(this.state);
  }

  usersAnswer() {
    if (this.props.currentUser.id === this.props.answer.answerer_id) {
      return (
        <div>
          <p>You are user id: {this.props.currentUser.id}. User id: {this.props.answer.answerer_id} made this answer.</p>
          <p>You can edit this form</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Log into correct user.</p>
          <p>You are user id: {this.props.currentUser.id}. User id: {this.props.answer.answerer_id} made this answer.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <section className="edit-answer-wrapper">
        {this.usersAnswer()}
        <Jumbotron className="edit-answer-container">
          <h3 className="edit-answer-title">Update Answer</h3>
          <form className="edit-answer-form" onSubmit={this.handleSubmit}>
            <label className="body-tag-edit-answer">Body</label>
            <textarea className="desc-edit-answer"
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
            />
            <br />
            <Button variant="primary" className="button-submit-edit-answer" type="submit">Update answer</Button>
          </form>
        </Jumbotron>
      </section>
    )
  }

}

export default EditAnswerForm;