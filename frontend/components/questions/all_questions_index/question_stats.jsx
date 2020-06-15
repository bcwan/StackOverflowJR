import React from 'react';

const QuestionStats = ({ question }) => {
  return (
    <div className="stats">
      <div className="stats-votes">
        <p className="stats-votes-number">{question.upvotes - question.downvotes}</p>
        <p className="stats-votes-desc">votes</p>
      </div>
      <div className="stats-answer-count">
        <p className="stats-answer-number">{question.answer_count}</p>
        <p className="stats-answer-desc">answers</p>
      </div>
    </div>
  );
}

export default QuestionStats;