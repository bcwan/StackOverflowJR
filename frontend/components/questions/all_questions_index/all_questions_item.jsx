import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';
import QuestionStats from './question_stats';


const AllQuestionsItem = ({ question }) => {
  return (
    <ListGroupItem className="single-question">
      <QuestionStats question={question}/>
      <div className="question">
        <Link to={`/questions/${question.id}`}>{question.title}</Link>
        <p className="question-desc-item">{question.description}</p>
      </div>
    </ListGroupItem>
  )
}

export default AllQuestionsItem;