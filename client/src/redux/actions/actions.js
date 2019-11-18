export const toggleAction = () => ({ type: 'TOGGLE' });

export const addGoalAction = () => ({ type: 'ADD_GOAL' });

export const incrementGoalAction = (id) => ({ type: 'INCREMENT_GOAL', id });

export const decrementGoalAction = (id) => ({ type: 'DECREMENT_GOAL', id });

export const getGoalsAction = () => ({ type: 'GET_GOALS' });

export const AddJobAction = (job) => ({ type: 'ADD_JOB', job });

export const addJobAction = () => ({ type: 'ADD_JOB' });

export const editAction = () => ({ type: 'EDIT' });

export const whatsNextAction = () => ({ type: 'WHATS_NEXT' });

export const showJobAction = () => ({ type: 'SHOW_JOB_POSTING' });
