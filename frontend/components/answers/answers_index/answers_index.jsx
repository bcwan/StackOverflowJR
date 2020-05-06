import React from 'react';
import AnswerItem from './answers_item';
import ListGroup from 'react-bootstrap/ListGroup';
import NewAnswerContainer from '../new_answer/new_answer_container';


class AnswerIndex extends React.Component {
  componentDidMount() {
    debugger;
    this.props.fetchAnswersForQuestion(this.props.questionId);
  }

  fetchData(newId) {
    debugger;
    this.props.fetchAnswersForQuestion(newId);
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (prevProps.questionId !== this.props.questionId) {
      debugger;
      this.fetchData(this.props.questionId);
    }
  }

  render() {
    const { answers, 
            fetchAnswer, 
            createAnswer, 
            deleteAnswer, 
            updateAnswer } = this.props;
    debugger;
    return (
      <section>
        <h4>Answers</h4>
        <ListGroup variant="flush">
          {answers.map((answer) => (
            <AnswerItem id={answer.id}
                        answer={answer}
                        deleteAnswer={deleteAnswer}
                        updateAnswer={updateAnswer}
            />
          ))}
        </ListGroup>
        <NewAnswerContainer questionId={this.props.questionId}/>
      </section>
    );
  }
}

export default AnswerIndex;