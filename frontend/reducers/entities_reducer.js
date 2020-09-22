import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import QuestionReducer from './questions_reducer';
import AnswerReducer from './answers_reducer';
import SearchQuestionReducer from './search_questions_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: QuestionReducer,
  answers: AnswerReducer,
  search_questions: SearchQuestionReducer
});

export default entitiesReducer;