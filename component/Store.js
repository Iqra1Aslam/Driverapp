// store.js
import { configureStore } from '@reduxjs/toolkit';
// geting data
import rootReducer from './rootReducer';
import sagaData from './saga';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware=createSagaMiddleware();
const store = configureStore({
  reducer:rootReducer,
  middleware:()=>[sagaMiddleware]
 
});
sagaMiddleware.run(sagaData);
export default store;
