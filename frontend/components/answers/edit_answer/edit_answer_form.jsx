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


  render() {
    return (
      <section className="edit-answer-wrapper">
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