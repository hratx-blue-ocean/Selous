export default function apiDataReducer(state = [], action) {
  switch (action.type) {
    case 'SET_API_DATA':
      return action.payload;
    case 'GET_API_DATA':
      return state;
    default:
      return state;
  }
}
