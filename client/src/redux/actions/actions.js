const toggleAction = () => ({ type: 'TOGGLE' });

const addGoalAction = () => ({ type: 'ADD_GOAL' });

const incrementGoalAction = () => ({ type: 'INCREMENT_GOAL' });

const decrementGoalAction = () => ({ type: 'DECREMENT_GOAL' });

const getGoalsAction = () => ({ type: 'GET_GOALS' });

export default {
  addGoalAction,
  toggleAction,
  incrementGoalAction,
  decrementGoalAction,
  getGoalsAction,
};
