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




