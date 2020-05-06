import React from 'react';
import Button from 'react-bootstrap/Button';

class NewAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    }
  }

  render() {
    return (
      <section className="new-answer-component">
        <h4>Your Answer</h4>
        <textarea className="new-answer-textarea" cols="30" rows="10"></textarea>
      </section>
    )
  }

}

export default NewAnswer;
