import * as QuestionApiUtil from '../util/questions_api_util';

export const RECEIVE_SEARCH_QUESTIONS = 'RECEIVE_SEARCH_QUESTIONS';

const receiveSearchQuestions = questions => ({
  type: RECEIVE_SEARCH_QUESTIONS,
  questions
});

// thunk action
export const fetchSearchQuestions = () => dispatch => (
  QuestionApiUtil.fetchSearchQuestions()
    .then(questions => dispatch(receiveSearchQuestions(questions)))
);