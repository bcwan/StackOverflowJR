import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const AnswerItem = ({ answer, deleteAnswer, updateAnswer }) => {
  return (
    <ListGroupItem>
      <div>
        <p>{answer.description}</p>
        <Button className="delete-answer-btn" variant="secondary">Delete Answer</Button>
        <Link className="edit-answer-btn" to={`/answers/edit/${answer.id}`}>
          <Button variant="info">Edit Answer</Button>
        </Link>
      </div>
    </ListGroupItem>
  )
}

export default AnswerItem;