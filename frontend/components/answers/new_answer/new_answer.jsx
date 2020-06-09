import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class NewAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit() {
    this.props.createAnswer(this.props.questionId, this.state)
      .then(() => {
        return this.resetAnswerTextbox();
      });
  }

  resetAnswerTextbox() {
    this.setState({ description: "" });
  }

  loggedIn() {
    return (
      <div>
        <h4 className="your-answer-title">Your Answer</h4>
        <form onSubmit={this.handleSubmit}>
          <textarea className="new-answer-textarea"
            cols="30"
            rows="8"
            onChange={this.update("description")} />
          <Button variant="success" type="submit">Post Your Answer</Button>
        </form>
      </div>
    );
  }

  notLoggedIn() {
    return (
      <div>
        <h4 className="your-answer-title">Your Answer</h4>
        <Link to="/login">
          <Button variant="primary">Please Log In to Answer</Button>
        </Link>
      </div>
    );
  }


  render() {
    const { currentUser } = this.props; 

    return (
      <section className="new-answer-component">
       {
         currentUser ? this.loggedIn() : this.notLoggedIn()
       }
      </section>
    )
  }

}

export default NewAnswer;
