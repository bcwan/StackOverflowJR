import React, { useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import EditAnswerForm from '../edit_answer/edit_answer_form';
import AnswerVotesContainer from '../../votes/answer_votes_container';
import ReactGA from 'react-ga';


const AnswerItem = ({ answer, deleteAnswer, updateAnswer, currentUser, questionId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false) 
  if (!currentUser) {
    return (
      <ListGroupItem className="answer-item">
        <div className="answer-votes-desc">
          <AnswerVotesContainer
            questionId={questionId}
            answer={answer} 
          />
          <p className="answer-desc">{answer.description}</p>
        </div>
      </ListGroupItem>
    )
  } else {
    return (
      <ListGroupItem className="answer-item">
          {
            (currentUser.id === answer.answerer_id && !!currentUser) ?
              (
                <div>
                 <div className="answer-votes-desc votes-desc-flex">
                    <AnswerVotesContainer className="votes-crud-btn"
                      questionId={questionId}
                      answer={answer}
                    />
                    <p className="answer-desc">{answer.description}</p>
                  </div>
                  <div className="edit-delete-btns">
                    <Button onClick={() => {
                                               ReactGA.event({
                                                 category: "Delete Answer",
                                                 action:
                                                   "Click to delete an answer",
                                               });                                             
                                              return deleteAnswer(answer.id);
                                            }
                                    }
                      className="delete-answer-btn"
                      variant="secondary">Delete Answer
                    </Button>
                    <Button className="edit-answer-btn" 
                            variant="info" 
                            onClick={() => {
                                              ReactGA.event(
                                                {
                                                  category:
                                                    "Edit Answer",
                                                  action:
                                                    "Click to edit an answer",
                                                }
                                              );
                                              return setModalIsOpen(true)
                                           }
                            }
                    >
                      Edit Answer
                    </Button>
                  </div>
                </div>
              )
              :
              (
                <div className="answer-votes-desc">
                  <AnswerVotesContainer
                    questionId={questionId}
                    answer={answer}
                  />
                  <p className="answer-desc">{answer.description}</p>
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