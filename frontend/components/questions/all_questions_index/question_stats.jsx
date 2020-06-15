import React from 'react';


const QuestionStats = ({ question }) => {
  let votesCount = question.upvotes - question.downvotes;
  let answerCount = question.answer_count;
  if (answerCount > 0) {
    return (
      <div className="stats">
        <div className="stats-votes">
          <p className="stats-votes-number">{votesCount}</p>
          <p className="stats-votes-desc">votes</p>
        </div>
        <div className="stats-answer-count answers-exist">
          <p className="stats-answer-number green-text">{answerCount}</p>
          <p className="stats-answer-desc green-text">answers</p>
        </div>
      </div>
    );
  } else {
      return (
        <div className="stats">
          <div className="stats-votes">
            <p className="stats-votes-number">{votesCount}</p>
            <p className="stats-votes-desc">votes</p>
          </div>
          <div className="stats-answer-count">
            <p className="stats-answer-number">{question.answer_count}</p>
            <p className="stats-answer-desc">answers</p>
          </div>
        </div>
      );
  }
}

export default QuestionStats;