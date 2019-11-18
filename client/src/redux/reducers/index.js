import { combineReducers } from 'redux';

// Reducers
import whatsNextReducer from './whatsNextReducer';
import displayedTabsReducer from './displayedTabsReducer.js';
import companyTabsReducerTEST from './companyTabsReducerTEST.js';
import addGoalReducer from './addGoalReducer.js';
import goalsHandlerReducer from './goalsHandlerReducer.js';
import userJobsReducer from './userJobsReducer.js';
import tabColorsReducer from './tabColorsReducer.js';

const rootReducer = combineReducers({
  addGoal: addGoalReducer,
  currentGoals: goalsHandlerReducer,
  whatsNextTab: whatsNextReducer,
  displayedTabs: displayedTabsReducer,
  companyTabsTEST: companyTabsReducerTEST,
  userJobs: userJobsReducer,
  tabColors: tabColorsReducer,
});

export default rootReducer;
