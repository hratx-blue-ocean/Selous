export default function windowSizeReducer(state = 500, action) {
  switch (action.type) {
    case 'WINDOW_SIZE':
      return action.win;
    default:
      return state;
  }
}
