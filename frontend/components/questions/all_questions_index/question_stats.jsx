import React from 'react';

const QuestionStats = ({ question }) => {
  return (
    <div>
      <p>{question.upvotes - question.downvotes} votes</p>
      <p>{question.answer_count} answers</p>
    </div>
  );
}

export default QuestionStats;