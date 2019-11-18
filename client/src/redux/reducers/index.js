import { combineReducers } from 'redux';

// Reducers
import toggleTestReducer from './toggleTestReducer.js';
import {
  jobPostingModalReducer,
  addGoalModalReducer,
  addJobModalReducer,
  whatsNextModalReducer,
  editModalReducer,
} from './ModalReducers.js';

const rootReducer = combineReducers({
  toggle: toggleTestReducer,
  jobPostingModal: jobPostingModalReducer,
  addGoalModal: addGoalModalReducer,
  addJobModal: addJobModalReducer,
  whatsNextModal: whatsNextModalReducer,
  editModal: editModalReducer,
});

export default rootReducer;
