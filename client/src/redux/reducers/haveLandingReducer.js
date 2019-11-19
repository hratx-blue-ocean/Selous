export default function haveLandingReducer(state = true, action) {
  switch (action.type) {
    case 'HAVE_LAND':
      return !state;
    default:
      return state;
  }
}
