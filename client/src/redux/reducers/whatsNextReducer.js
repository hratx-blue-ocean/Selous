const defaultState = {
  whatsNextTab: true,
  tabName: '',
  tabBody: 'Whats up?',
  tabEditText: 'Next Step',
};

export default function whatsNextReducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_TAB':
      return state;
    default:
      return state;
  }
}
