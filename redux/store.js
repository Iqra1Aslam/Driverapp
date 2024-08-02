// store.js
import { configureStore } from '@reduxjs/toolkit';
// geting data
import reducer from './screenReducer';

const store = configureStore({
  reducer
});
export default store;
