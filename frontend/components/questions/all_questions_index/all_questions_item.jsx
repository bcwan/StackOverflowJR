import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';


const AllQuestionsItem = ({ question, fetchQuestion }) => {
  return (
    <ListGroupItem>
      <div>
        <Link>{question.title}</Link>
        <p className="question-desc">{question.description}</p>
      </div>
    </ListGroupItem>
  )
}

export default AllQuestionsItem;