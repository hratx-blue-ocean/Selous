export const addGoalAction = () => ({ type: 'ADD_GOAL' });

export const incrementGoalAction = (id) => ({ type: 'INCREMENT_GOAL', id });

export const decrementGoalAction = (id) => ({ type: 'DECREMENT_GOAL', id });

export const getGoalsAction = () => ({ type: 'GET_GOALS' });

export const AddJobAction = (job) => ({ type: 'ADD_JOB', job });

export const addJobModalAction = () => ({ type: 'ADD_JOB_MODAL' });

export const editAction = () => ({ type: 'EDIT' });

export const whatsNextAction = () => ({ type: 'WHATS_NEXT' });

export const showJobAction = () => ({ type: 'SHOW_JOB_POSTING' });

export const getTabsCompanyTabsTEST = () => ({ type: 'GET_TABS' });

export const moveLeftDisplayedTabs = (payload) => ({ type: 'MOVE_LEFT', payload });

export const moveRightDisplayedTabs = (payload) => ({ type: 'MOVE_RIGHT', payload });

export const setDisplayedTabs = (payload) => ({ type: 'SET', payload });

export const whatsNextGetTab = () => ({ type: 'GET_TAB' });

export const getTabColors = () => ({ type: 'GET' });

export const setSearchInput = (payload) => ({ type: 'SET', payload });

export const getSearchInput = () => ({ type: 'GET' });

export const setApiSearchData = (payload) => ({ type: 'GET', payload });

export const getApiSearchData = () => ({ type: 'SET' });

export const loginAction = () => ({ type: 'LOG_IN' });

export const showAboutAction = () => ({ type: 'ABOUT' });

export const landingAction = () => ({ type: 'HAVE_LAND' });
