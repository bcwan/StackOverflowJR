import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';


const AnswerItem = ({ answer, deleteAnswer, currentUser }) => {

  if (!currentUser) {
    return (
      <ListGroupItem>
        <div>
          <p>{answer.description}</p>
        </div>
      </ListGroupItem>
    )
  } else {
    return (
      <ListGroupItem>
          {
            (currentUser.id === answer.answerer_id && !!currentUser) ?
              (
                <div>
                  <p>{answer.description}</p>
                  <Button onClick={() => deleteAnswer(answer.id)}
                    className="delete-answer-btn"
                    variant="secondary">Delete Answer
                  </Button>
                  <Link className="edit-answer-btn"
                    to={`/answers/edit/${answer.id}`}>
                    <Button variant="info">Edit Answer</Button>
                  </Link>
                </div>
              )
              :
              (
                <div>
                  <p>{answer.description}</p>
                </div>
              )
          }
          <Modal isOpen={true}>
            <h1>Answer Modal</h1>
          </Modal>
      </ListGroupItem>
    )
  }


}

export default AnswerItem;