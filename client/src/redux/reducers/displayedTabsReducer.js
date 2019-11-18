export default function displayedTabsReducer(state = [], action) {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'MOVE_LEFT':
      return [action.payload, ...state.slice(0, -1)];
    case 'MOVE_RIGHT':
      return [...state.slice(-2), action.payload];
    default:
      return state;
  }
}
