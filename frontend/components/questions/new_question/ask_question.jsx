import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


class AskQuestion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  //go back to parent, which is the all questions page
  handleSubmit() {
    this.props.createQuestion(this.state)
      .then(() =>  this.props.history.push('./') );
     
  }

  render() {

    return (
      <section className="wrapper-ask-question">
        <Jumbotron className="ask-question-container">
          <h3 className="ask-question-title">Ask a public question</h3>
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
            <Button variant="primary" className="button-submit-question" type="submit">Submit your question</Button>
          </form>
        </Jumbotron>
      </section>
    )
  }


}

export default AskQuestion;