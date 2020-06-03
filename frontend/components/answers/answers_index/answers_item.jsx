import React, { useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';


const AnswerItem = ({ answer, deleteAnswer, currentUser }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false) 
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
                  {/* <Link className="edit-answer-btn"
                    to={`/answers/edit/${answer.id}`}>
                    <Button variant="info">Edit Answer</Button>
                  </Link> */}
                  <Button className="edit-answer-btn" 
                          variant="info" 
                          onClick={() => setModalIsOpen(true)}
                  >
                    Edit Answer
                  </Button>
                </div>
              )
              :
              (
                <div>
                  <p>{answer.description}</p>
                </div>
              )
          }
          <Modal isOpen={modalIsOpen}>
            <h1>Answer Modal</h1>
            <Button onClick={() => setModalIsOpen(false)}
                    variant="secondary">
                    Close
            </Button>
          </Modal>
      </ListGroupItem>
    )
  }


}

export default AnswerItem;