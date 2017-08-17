import { combineReducers } from 'redux';
import userReducers from './users';
import postReducers from './posts';

const rootReducers = combineReducers({
  users : userReducers,
  posts : postReducers
})

export default rootReducers;
