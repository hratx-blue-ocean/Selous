export default function searchInputReducer(state = '', action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.payload;
    case 'GET_SEARCH':
      return state;
    default:
      return state;
  }
}
