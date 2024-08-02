// src/reducers/index.js
import { combineReducers } from 'redux';
import cityReducer from './screenReducer';
import roleReducer from './screenReducer';
// import contactReducer from './screenReducer';

const rootReducer = combineReducers({
  cityReducer,
   roleReducer,
  // contact: contactReducer,
});

export default rootReducer;
