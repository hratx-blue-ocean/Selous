const defaultState = [
  {
    whatsNextTab: false,
    tabName: 'Title Page',
    tabBody: '',
    tabEditText: 'Edit',
    tabColor: '',
  },
  {
    whatsNextTab: false,
    tabName: 'Resume',
    tabBody: '',
    tabEditText: 'Edit',
    tabColor: '',
  },
  {
    whatsNextTab: false,
    tabName: 'Phone Interview',
    tabBody: '',
    tabEditText: 'Edit',
    tabColor: '',
  },
  {
    whatsNextTab: false,
    tabName: 'Onsite Interview',
    tabBody: '',
    tabEditText: 'Edit',
    tabColor: '',
  },
];

export default function companyTabsReducerTEST(state = defaultState, action) {
  switch (action.type) {
    case 'GET_TABS':
      return state;
    default:
      return state;
  }
}
