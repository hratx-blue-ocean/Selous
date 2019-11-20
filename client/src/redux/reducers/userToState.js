export default function userToState(state = {}, action) {
  switch (action.type) {
    case 'GET_USER':
      return action.data;
    case 'RESET_USER':
      return {};
    default:
      return state;
  }
}
