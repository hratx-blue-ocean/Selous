export default function incrementGoalReducer(state = 0, action) {
  const newState = state + 1;
  switch (action.type) {
    case 'INCREMENT_GOAL':
      return newState;
    default:
      return state;
  }
}
