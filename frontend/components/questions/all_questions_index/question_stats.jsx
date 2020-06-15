import React from 'react';

const QuestionStats = ({ question }) => {
  return (
    <div>
      <p>{question.upvotes - question.downvotes} votes</p>
    </div>
  );
}

export default QuestionStats;