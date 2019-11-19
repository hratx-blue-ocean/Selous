import { combineReducers } from 'redux';

// Reducers
import whatsNextReducer from './whatsNextReducer';
import displayedTabsReducer from './displayedTabsReducer.js';
import companyTabsReducerTEST from './companyTabsReducerTEST.js';
import addGoalReducer from './addGoalReducer.js';
import goalsHandlerReducer from './goalsHandlerReducer.js';
import userJobsReducer from './userJobsReducer.js';
import tabColorsReducer from './tabColorsReducer.js';
import loggedInReducer from './loggedInReducer.js';
import {
  jobPostingModalReducer,
  addGoalModalReducer,
  addJobModalReducer,
  whatsNextModalReducer,
  editModalReducer,
  showAboutReducer,
} from './ModalReducers.js';

const rootReducer = combineReducers({
  addGoal: addGoalReducer,
  currentGoals: goalsHandlerReducer,
  whatsNextTab: whatsNextReducer,
  displayedTabs: displayedTabsReducer,
  companyTabsTEST: companyTabsReducerTEST,
  userJobs: userJobsReducer,
  tabColors: tabColorsReducer,
  jobPostingModal: jobPostingModalReducer,
  addGoalModal: addGoalModalReducer,
  addJobModal: addJobModalReducer,
  whatsNextModal: whatsNextModalReducer,
  editModal: editModalReducer,
  isLoggedIn: loggedInReducer,
  showAbout: showAboutReducer,
});

export default rootReducer;
