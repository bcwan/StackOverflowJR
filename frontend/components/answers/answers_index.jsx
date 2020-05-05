import React from 'react';
//import AnswerItem from './answers_item';

class AnswerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAnswersForQuestion(this.props.questionId);
  }

  render() {
    const { answers, 
            fetchAnswersForQuestion, 
            fetchAnswer, 
            createAnswer, 
            deleteAnswer, 
            updateAnswer } = this.props;

    return (
      <section>
        <ul>
          {answers.map((answer) => (
            <li>
              <p>
                {answer.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default AnswerIndex;