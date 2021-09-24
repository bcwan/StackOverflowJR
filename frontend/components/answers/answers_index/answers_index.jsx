import React from 'react';
import AnswerItem from './answers_item';
import ListGroup from 'react-bootstrap/ListGroup';
import NewAnswerContainer from '../new_answer/new_answer_container';

class AnswerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAnswersForQuestion(this.props.questionId);
  }

  fetchData(newId) {
    this.props.fetchAnswersForQuestion(newId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.questionId !== this.props.questionId) {
      this.fetchData(this.props.questionId);
    }
  }

  render() {
    const { answers,
            deleteAnswer, 
            updateAnswer,
            currentUser,
            questionId
          } = this.props;

    return (
      <section>
        <h4 className="answer-title">Answers</h4>
        <ListGroup variant="flush">
          {answers.map((answer) => (
            <AnswerItem key={answer.id}
                        answer={answer}
                        currentUser={currentUser}
                        deleteAnswer={deleteAnswer}
                        updateAnswer={updateAnswer}
                        questionId={questionId}
            />
          ))}
        </ListGroup>
        <NewAnswerContainer questionId={this.props.questionId}/>
      </section>
    );
  }
}

export default AnswerIndex;