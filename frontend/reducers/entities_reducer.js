import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import QuestionReducer from './questions_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: QuestionReducer
});

export default entitiesReducer;