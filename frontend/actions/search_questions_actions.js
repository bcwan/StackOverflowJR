import * as SearchQuestionApiUtil from '../util/search_questions_api_util';

export const RECEIVE_SEARCH_QUESTIONS = 'RECEIVE_SEARCH_QUESTIONS';

const receiveSearchQuestions = questions => ({
  type: RECEIVE_SEARCH_QUESTIONS,
  questions
});

// thunk action
export const fetchSearchQuestions = () => dispatch => (
  SearchQuestionApiUtil.fetchSearchQuestions()
    .then(questions => dispatch(receiveSearchQuestions(questions)))
);