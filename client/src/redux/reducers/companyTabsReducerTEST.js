const test1 = [];

// const test2 = [
//   {
//     whatsNextTab: false,
//     tabName: 'Title Page',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
// ];

// const test3 = [
//   {
//     whatsNextTab: false,
//     tabName: 'Title Page',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Resume',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
// ];

// const test4 = [
//   {
//     whatsNextTab: false,
//     tabName: 'Title Page',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Resume',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Phone Interview',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
// ];

// const test5 = [
//   {
//     whatsNextTab: false,
//     tabName: 'Title Page',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Resume',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Phone Interview',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Onsite Interview',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
// ];

// const test6 = [
//   {
//     whatsNextTab: false,
//     tabName: 'Title Page',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Resume',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Phone Interview',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Onsite Interview',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Round 2 Interview',
//     tabBody: '',
//     tabEditText: 'Edit',
//   },
// ];

// const test7 = [
//   {
//     whatsNextTab: false,
//     tabName: 'Title Page',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Resume',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Phone Interview',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Onsite Interview',
//     tabBody: '',
//     tabEditText: 'Edit',
//     completed: true,
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Round 2 Interview',
//     tabBody: '',
//     tabEditText: 'Edit',
//   },
//   {
//     whatsNextTab: false,
//     tabName: 'Offer',
//     tabBody: '',
//     tabEditText: 'Edit',
//   },
// ];

export default function companyTabsReducerTEST(state = test1, action) {
  switch (action.type) {
    case 'GET_COMPANY_TABS':
      return state;
    case 'SET_COMPANY_TABS':
      return action.payload;
    default:
      return state;
  }
}
