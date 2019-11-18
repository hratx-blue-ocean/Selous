import { combineReducers } from 'redux';

// Reducers
import toggleTestReducer from './toggleTestReducer.js';
import addGoalReducer from './addGoalReducer.js';
import goalsHandlerReducer from './goalsHandlerReducer.js';
import userJobsReducer from './userJobsReducer.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
  addGoal: addGoalReducer,
  currentGoals: goalsHandlerReducer,
  userJobs: userJobsReducer,
});

export default rootReducer;
