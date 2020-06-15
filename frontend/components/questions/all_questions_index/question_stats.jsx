import React from 'react';

const QuestionStats = ({ question }) => {
  return (
    <div>
      <div>
        <p>{question.upvotes - question.downvotes}</p>
        <p>votes</p>
      </div>
      <div>
        <p>{question.answer_count}</p>
        <p>answers</p>
      </div>
    </div>
  );
}

export default QuestionStats;