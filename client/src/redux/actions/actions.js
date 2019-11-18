import whatsNextGetTab from './whatsNextGetTabAction.js';
import setDisplayedTabs from './setDisplayedTabsAction.js';
import moveLeftDisplayedTabs from './moveLeftDisplayedTabsAction.js';
import moveRightDisplayedTabs from './moveRightDisplayedTabsAction.js';
import getTabsCompanyTabsTEST from './getTabsCompanyTabsTESTAction.js';

const Actions = {
  whatsNextGetTab,
  setDisplayedTabs,
  moveLeftDisplayedTabs,
  moveRightDisplayedTabs,
  getTabsCompanyTabsTEST,
};

export default Actions;
export const toggleAction = () => ({ type: 'TOGGLE' });

export const addGoalAction = () => ({ type: 'ADD_GOAL' });

export const incrementGoalAction = (id) => ({ type: 'INCREMENT_GOAL', id });

export const decrementGoalAction = (id) => ({ type: 'DECREMENT_GOAL', id });

export const getGoalsAction = () => ({ type: 'GET_GOALS' });
