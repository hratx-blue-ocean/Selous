const defaultState = {
  whatsNextTab: true,
  tabName: '',
  tabBody: 'Whats next?',
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
