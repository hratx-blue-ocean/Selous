export const addGoalAction = () => ({ type: 'ADD_GOAL' });

export const incrementGoalAction = (id) => ({ type: 'INCREMENT_GOAL', id });

export const decrementGoalAction = (id) => ({ type: 'DECREMENT_GOAL', id });

export const getGoalsAction = () => ({ type: 'GET_GOALS' });

export const AddJobAction = (job) => ({ type: 'ADD_JOB', job });

export const addJobModalAction = () => ({ type: 'ADD_JOB' });

export const editAction = () => ({ type: 'EDIT' });

export const whatsNextAction = () => ({ type: 'WHATS_NEXT' });

export const showJobAction = () => ({ type: 'SHOW_JOB_POSTING' });

export const getTabsCompanyTabsTEST = () => ({ type: 'GET_TABS' });

export const moveLeftDisplayedTabs = (payload) => ({ type: 'MOVE_LEFT', payload });

export const moveRightDisplayedTabs = (payload) => ({ type: 'MOVE_RIGHT', payload });

export const setDisplayedTabs = (payload) => ({ type: 'SET', payload });

export const whatsNextGetTab = () => ({ type: 'GET_TAB' });
