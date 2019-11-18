import { combineReducers } from 'redux';

// Reducers
import whatsNextReducer from './whatsNextReducer';
import displayedTabsReducer from './displayedTabsReducer.js';
import companyTabsReducerTEST from './companyTabsReducerTEST.js';

const rootReducer = combineReducers({
  whatsNextTab: whatsNextReducer,
  displayedTabs: displayedTabsReducer,
  companyTabsTEST: companyTabsReducerTEST,
});

export default rootReducer;
