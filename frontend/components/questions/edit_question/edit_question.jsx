import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
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
          <br/>
          <p>You can edit this form</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Log into correct user.</p>
          <br/>
          <p>You are user id: {this.props.currentUser.id}. User id: {this.props.question.questioner_id} made this form.</p>
        </div>
      );
    }
  }

  render() {
    const { question } = this.props;
    // if question is not loaded into state, or user directly accessed url/id
    // we would ask componentDidMount to get the data
    if (!question) {
      return null;
    } 
    return (
      <section>
        {this.usersQuestion()}
      </section>
    )
  }


}

export default EditQuestion;