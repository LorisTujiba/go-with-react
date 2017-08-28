import { combineReducers } from 'redux';
import userReducers from './users';
import { reducer  as formReducer } from 'redux-form';
import postReducers from './posts';

const rootReducers = combineReducers({
  users : userReducers,
  posts : postReducers,
  form : formReducer
})

export default rootReducers;
