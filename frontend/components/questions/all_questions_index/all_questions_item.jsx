import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';


const AllQuestionsItem = ({ question, fetchQuestion }) => {
  return (
    <ListGroupItem>
      {question.title}
    </ListGroupItem>
  )
}

export default AllQuestionsItem;