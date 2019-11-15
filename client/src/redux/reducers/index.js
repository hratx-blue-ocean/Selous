import { combineReducers } from 'redux';

// Reducers
import toggleTestReducer from './toggleTestReducer.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
});

export default rootReducer;
