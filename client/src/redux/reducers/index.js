import { combineReducers } from 'redux';
// Reducers
import toggleTestReducer from './toggleTestReducer.js';
import apiDataReducer from './apiDataReducer.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
  apiData: apiDataReducer,
});

export default rootReducer;
