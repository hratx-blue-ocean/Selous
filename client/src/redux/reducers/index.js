import { combineReducers } from 'redux';

// Reducers
import toggleTestReducer from './toggleTestReducer.js';
import userJobsReducer from './userJobsReducer.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
  userJobs: userJobsReducer,
});

export default rootReducer;
