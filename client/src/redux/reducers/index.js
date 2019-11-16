import { combineReducers } from 'redux';

// Reducers
import toggleTestReducer from './toggleTestReducer.js';
import addGoalReducer from './addGoalReducer.js';
import goalsHandlerReducer from './goalsHandlerReducer.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
  addGoal: addGoalReducer,
  currentGoals: goalsHandlerReducer,
});

export default rootReducer;
