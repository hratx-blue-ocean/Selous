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
import haveLandingReducer from './haveLandingReducer.js';
import apiLocationSearchDataReducer from './locationSearchDataReducer.js';
import {
  jobPostingModalReducer,
  addGoalModalReducer,
  addJobModalReducer,
  whatsNextModalReducer,
  editModalReducer,
  showAboutReducer,
} from './ModalReducers.js';
import searchInputReducer from './searchInputReducer.js';
import apiDataReducer from './apiDataReducer.js';

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
  searchInput: searchInputReducer,
  apiData: apiDataReducer,
  isLoggedIn: loggedInReducer,
  showAbout: showAboutReducer,
  haveLanding: haveLandingReducer,
  locationSearchInput: apiLocationSearchDataReducer,
});

export default rootReducer;
