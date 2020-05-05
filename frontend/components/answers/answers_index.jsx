import React from 'react';
import AnswerItem from './answers_item';
import ListGroup from 'react-bootstrap/ListGroup';

class AnswerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAnswersForQuestion(this.props.questionId);
  }

  render() {
    const { answers, 
            fetchAnswer, 
            createAnswer, 
            deleteAnswer, 
            updateAnswer } = this.props;

    return (
      <section>
        <h4>Answers</h4>
        <ListGroup variant="flush">
          {answers.map((answer) => (
            <AnswerItem answer={answer}
                        deleteAnswer={deleteAnswer}
                        updateAnswer={updateAnswer}
            />
          ))}
        </ListGroup>
      </section>
    );
  }
}

export default AnswerIndex;