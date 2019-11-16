import { combineReducers } from 'redux';

// Reducers
import toggleTestReducer from './toggleTestReducer.js';
import addGoalReducer from './addGoalReducer.js';
import getGoalsReducer from './getGoalsReducer.js';
// import incrementGoalReducer from './incrementGoalReducer.js';
// import decrementGoalReducer from './decrementGoalReducer.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
  addGoal: addGoalReducer,
  currentGoals: getGoalsReducer,
});

export default rootReducer;
