const defaultState = [
  {
    whatsNextTab: false,
    tabName: 'Title Page',
    tabBody: '',
    tabEditText: 'Edit',
    completed: true,
  },
  {
    whatsNextTab: false,
    tabName: 'Resume',
    tabBody: '',
    tabEditText: 'Edit',
    completed: true,
  },
  {
    whatsNextTab: false,
    tabName: 'Phone Interview',
    tabBody: '',
    tabEditText: 'Edit',
    completed: true,
  },
  {
    whatsNextTab: false,
    tabName: 'Onsite Interview',
    tabBody: '',
    tabEditText: 'Edit',
    completed: true,
  },
  {
    whatsNextTab: false,
    tabName: 'Round 2 Interview',
    tabBody: '',
    tabEditText: 'Edit',
  },
];

export default function companyTabsReducerTEST(state = defaultState, action) {
  switch (action.type) {
    case 'GET_TABS':
      return state;
    case 'SET':
      return action.payload;
    default:
      return state;
  }
}
