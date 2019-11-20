export default function addGoalReducer(state = false, action) {
  switch (action.type) {
    case 'ADD_GOAL':
      return !state;
    default:
      return state;
  }
}
