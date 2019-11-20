export default function apiLocationSearchDataReducer(state = [], action) {
  switch (action.type) {
    case 'SET_LOCATION_SEARCH':
      return action.payload;
    default:
      return state;
  }
}
