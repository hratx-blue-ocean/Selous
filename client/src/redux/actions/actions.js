export const toggleAction = () => ({ type: 'TOGGLE' });

export const addGoalAction = () => ({ type: 'ADD_GOAL' });

export const incrementGoalAction = (id) => ({ type: 'INCREMENT_GOAL', id });

export const decrementGoalAction = (id) => ({ type: 'DECREMENT_GOAL', id });

export const getGoalsAction = () => ({ type: 'GET_GOALS' });
