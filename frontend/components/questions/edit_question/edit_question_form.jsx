import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class EditQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit() {
    this.props.updateQuestion(this.state);
  }

  usersQuestion () {
    if(this.props.currentUser.id === this.props.question.questioner_id) {
      return (
        <div>          
          <p>You are user id: {this.props.currentUser.id}. User id: {this.props.question.questioner_id} made this form.</p>
          <p>You can edit this form</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Log into correct user.</p>
          <p>You are user id: {this.props.currentUser.id}. User id: {this.props.question.questioner_id} made this form.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <section className = "wrapper-ask-question" >
        {this.usersQuestion()}
        <Jumbotron className="ask-question-container">
          <h3 className="ask-question-title">Update Question</h3>
          <form className="ask-question-form" onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text"
              className="title-input-bar"
              value={this.state.title}
              onChange={this.update("title")}
            />
            <br />
            <label className="body-tag-question">Body</label>
            <textarea className="desc-question"
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
            />
            <br />
            <Button variant="primary" className="button-submit-question" type="submit">Update question</Button>
          </form>
        </Jumbotron>
      </section >
    )
  }


}

export default EditQuestionForm;