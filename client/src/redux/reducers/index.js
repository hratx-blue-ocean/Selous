import { combineReducers } from 'redux';

// Reducers
import toggleTestReducer from './toggleTestReducer.js';
<<<<<<< HEAD
import addGoalReducer from './addGoalReducer.js';
import goalsHandlerReducer from './goalsHandlerReducer.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
  addGoal: addGoalReducer,
  currentGoals: goalsHandlerReducer,
=======
import userJobsReducer from './userJobsReducer.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
  userJobs: userJobsReducer,
>>>>>>> dashboard
});

export default rootReducer;
