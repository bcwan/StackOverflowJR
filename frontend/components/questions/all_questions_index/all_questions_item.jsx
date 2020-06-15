import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';
import QuestionStats from './question_stats';


const AllQuestionsItem = ({ question, fetchQuestion }) => {
  return (
    <ListGroupItem>
      
      <div>
        <Link to={`/questions/${question.id}`}>{question.title}</Link>
        <p className="question-desc-item">{question.description}</p>
      </div>
    </ListGroupItem>
  )
}

export default AllQuestionsItem;