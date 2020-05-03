import * as AnswerApiUtil from '../util/answers_api_util';

export const RECEIVE_QUESTION_ANSWERS = 'RECEIVE_QUESTION_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

const receiveAnswers = (answers) => ({
  type: RECEIVE_QUESTION_ANSWERS,
  answers
});

const receiveAnswer = (answer) => ({
  type: RECEIVE_ANSWER,
  answer
});

const removeAnswer = (answerId) => ({
  type: REMOVE_ANSWER,
  answerId
});

// thunk action creators
export const fetchAnswersForQuestion = (questionId) => dispatch => (
  AnswerApiUtil.fetchAnswersForQuestion(questionId)
    .then(answers => dispatch(receiveAnswers(answers)))
);

export const fetchAnswer = (answerId) => dispatch => (
  AnswerApiUtil.fetchAnswer(answerId)
    .then(answer => dispatch(receiveAnswer(answer)))
);

export const createAnswer = (questionId, answer) => dispatch => (
  AnswerApiUtil.createAnswer(questionId, answer)
    .then(createdAnswer => dispatch(receiveAnswer(createdAnswer)))
);

export const updateAnswer = (answer) => (dispatch) => (
  AnswerApiUtil.updateAnswer(answer)
    .then(updatedAnswer => dispatch(receiveAnswer(updatedAnswer)))
);

export const deleteQuestion = (answerId) => (dispatch) =>  (
  AnswerApiUtil.deleteAnswer(answerId)
    .then(() => dispatch(removeAnswer(answerId)))
);