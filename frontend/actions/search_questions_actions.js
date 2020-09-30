import * as SearchQuestionApiUtil from '../util/search_questions_api_util';

export const RECEIVE_SEARCH_QUESTIONS = 'RECEIVE_SEARCH_QUESTIONS';

const receiveSearchQuestions = questions => ({
  type: RECEIVE_SEARCH_QUESTIONS,
  questions
});

export const fetchSearchQuestions = (keywords) => dispatch => (
  SearchQuestionApiUtil.fetchSearchQuestions(keywords)
    .then(questions => dispatch(receiveSearchQuestions(questions)))
);