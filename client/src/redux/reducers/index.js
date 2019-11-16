import { combineReducers } from 'redux';

// Reducers
import toggleTestReducer from './toggleTestReducer.js';
import testDataForDetailsPageReducer from './testDataForDetailsPageReducer.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
  testData: testDataForDetailsPageReducer,
});

export default rootReducer;
