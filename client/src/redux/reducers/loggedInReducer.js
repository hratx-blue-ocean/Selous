export default function loggedInReducer(state = false, action) {
  switch (action.type) {
    case 'LOG_IN':
      return !state;
    default:
      return state;
  }
}
