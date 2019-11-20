export const addGoalAction = () => ({ type: 'ADD_GOAL' });

export const incrementGoalAction = (id) => ({ type: 'INCREMENT_GOAL', id });

export const decrementGoalAction = (id) => ({ type: 'DECREMENT_GOAL', id });

export const getGoalsAction = () => ({ type: 'GET_GOALS' });

export const AddJobAction = (job) => ({ type: 'ADD_JOB', job });

export const addJobModalAction = () => ({ type: 'ADD_JOB_MODAL' });

export const editAction = () => ({ type: 'EDIT' });

export const whatsNextAction = () => ({ type: 'WHATS_NEXT' });

export const showJobAction = () => ({ type: 'SHOW_JOB_POSTING' });

export const getTabsCompanyTabsTEST = () => ({ type: 'GET_COMPANY_TABS' });

export const setTabsCompanyTabsTEST = (payload) => ({ type: 'SET_COMPANY_TABS', payload });

export const moveLeftDisplayedTabs = (payload) => ({ type: 'MOVE_LEFT', payload });

export const moveRightDisplayedTabs = (payload) => ({ type: 'MOVE_RIGHT', payload });

export const setDisplayedTabs = (payload) => ({ type: 'SET_DISPLAYED_TABS', payload });

export const whatsNextGetTab = () => ({ type: 'GET_WHATS_NEXT_TAB' });

export const getTabColors = () => ({ type: 'GET_TAB_COLORS' });

export const setSearchInput = (payload) => ({ type: 'SET_SEARCH', payload });

export const getSearchInput = () => ({ type: 'GET_SEARCH' });

export const setApiSearchData = (payload) => ({ type: 'SET_API_DATA', payload });

export const getApiSearchData = () => ({ type: 'GET_API_DATA' });

export const loginAction = () => ({ type: 'LOG_IN' });

export const showAboutAction = () => ({ type: 'ABOUT' });

export const landingAction = () => ({ type: 'HAVE_LAND' });

export const userToState = (data) => ({ type: 'GET_USER', data });

export const currentJobAction = (job) => ({ type: 'CLICKED_JOB', job });
