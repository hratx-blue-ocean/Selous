export default function apiDataReducer(state = [], action) {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'GET':
      return state;
    default:
      return state;
  }
}
