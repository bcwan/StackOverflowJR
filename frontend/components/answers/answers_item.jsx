import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const AnswerItem = ({ answer, deleteAnswer, updateAnswer }) => {
  return (
    <ListGroupItem>
      <div>
        <p>{answer.description}</p>
      </div>
    </ListGroupItem>
  )
}

export default AnswerItem;