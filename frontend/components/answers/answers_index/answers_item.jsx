import React, { useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import EditAnswerForm from '../edit_answer/edit_answer_form';
import AnswerVotesContainer from '../../votes/answer_votes_container';


const AnswerItem = ({ answer, deleteAnswer, updateAnswer, currentUser, questionId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false) 
  if (!currentUser) {
    return (
      <ListGroupItem>
        <div className="answer-votes-desc">
          <AnswerVotesContainer
            questionId={questionId}
            answer={answer} 
          />
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
                <div className="answer-votes-desc">
                  <AnswerVotesContainer
                    questionId={questionId}
                    answer={answer}
                  />
                  <p>{answer.description}</p>
                </div>
              )
          }
          <Modal isOpen={modalIsOpen} 
                 onRequestClose={() => setModalIsOpen(false)}
                 style={{
                    content: {
                      borderRadius: "7px",
                    },
                    overlay: {
                      position: "fixed",
                      zIndex: "50",
                    },
                }}
          >
            <Button className="exit-answer-edit"
                    onClick={() => setModalIsOpen(false)}
                    variant="secondary">
                    Close
            </Button>
            <EditAnswerForm answer={answer} 
                            updateAnswer={updateAnswer}
                            setModalIsOpen={setModalIsOpen}
            />
          </Modal>
      </ListGroupItem>
    )
  }


}

export default AnswerItem;