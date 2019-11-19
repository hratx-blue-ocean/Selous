export default function loggedInReducer(state = true, action) {
  switch (action.type) {
    case 'LOG_IN':
      return !state;
    default:
      return state;
  }
}
