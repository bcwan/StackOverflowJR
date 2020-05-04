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

  handleSubmit() {
    this.props.createQuestion(this.state);
  }

  render() {
    return (
      <section className="wrapper-ask-question">
        <h3 className="ask-question-title">Ask a public question</h3>
        <Jumbotron className="ask-question-container">
          <form className="ask-question-form" onSubmit={this.handleSubmit}>
            <label>Title: 
              <input type="text"
                className="input-bar"
                value={this.state.title}
                onChange={this.update("title")}
              />
            </label>
            <br />
            <label>Body:
              <textarea type="text"
                value={this.state.description}
                onChange={this.update("description")}
              />
            </label>
            <br />
            <Button variant="primary" type="submit">Submit your question</Button>
          </form>
        </Jumbotron>
      </section>
    )
  }


}

export default AskQuestion;