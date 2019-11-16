export default function decrementGoalReducer(state = 0, action) {
  const newState = state - 1;
  switch (action.type) {
    case 'DECREMENT_GOAL':
      return newState;
    default:
      return state;
  }
}
