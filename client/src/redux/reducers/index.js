import { combineReducers } from 'redux';

// Reducers
import whatsNextReducer from './whatsNextReducer';
import displayedTabsReducer from './displayedTabsReducer.js';
import companyTabsReducerTEST from './companyTabsReducerTEST.js';
import addGoalReducer from './addGoalReducer.js';
import goalsHandlerReducer from './goalsHandlerReducer.js';
import userJobsReducer from './userJobsReducer.js';
import tabColorsReducer from './tabColorsReducer.js';
<<<<<<< HEAD
import loginReducer from './loginReducer.js';
=======
import loggedInReducer from './loggedInReducer.js';
import haveLandingReducer from './haveLandingReducer.js';
>>>>>>> dev
import {
  jobPostingModalReducer,
  addGoalModalReducer,
  addJobModalReducer,
  whatsNextModalReducer,
  editModalReducer,
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
<<<<<<< HEAD
  userData: loginReducer,
=======
  isLoggedIn: loggedInReducer,
  haveLanding: haveLandingReducer,
>>>>>>> dev
});

export default rootReducer;
