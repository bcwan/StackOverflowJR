import * as QuestionApiUtil from '../util/questions_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';


const receiveQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

const removeQuestion = questionId => ({
  type: REMOVE_QUESTION,
  questionId
});

// thunk action creators
export const fetchQuestions = () => dispatch => (
  QuestionApiUtil.fetchQuestions()
    .then(questions => dispatch(receiveQuestions(questions)))
);

export const fetchQuestion = (questionId) => dispatch => (
  QuestionApiUtil.fetchQuestion(questionId)
    .then(question => dispatch(receiveQuestion(question)))
);

export const createQuestion = (question) => (dispatch) => {
  return QuestionApiUtil.createQuestion(question)
    .then(createdQuestion => dispatch(receiveQuestion(createdQuestion)))
};

export const updateQuestion = (question) => (dispatch) => (
  QuestionApiUtil.updateQuestion(question)
    .then(updatedQuestion => dispatch(receiveQuestion(updatedQuestion)))
);

export const deleteQuestion = (questionId) => (dispatch) => (
  QuestionApiUtil.deleteQuestion(questionId)
    .then(() => dispatch(removeQuestion(questionId)))
);