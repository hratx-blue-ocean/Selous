<<<<<<< HEAD
export const toggleAction = () => ({ type: 'TOGGLE' });

export const addGoalAction = () => ({ type: 'ADD_GOAL' });

export const incrementGoalAction = (id) => ({ type: 'INCREMENT_GOAL', id });

export const decrementGoalAction = (id) => ({ type: 'DECREMENT_GOAL', id });

export const getGoalsAction = () => ({ type: 'GET_GOALS' });
=======
export function toggleAction() {
  return {
    type: 'TOGGLE',
  };
}

export function AddJobAction(job) {
  return {
    type: 'ADD_JOB',
    job,
  };
}
>>>>>>> dashboard
