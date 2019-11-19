const defaultData = [
  'tab_red',
  'tab_orange',
  'tab_yellow',
  'tab_green',
  'tab_blue',
  'tab_pinky',
  'tab_magenta',
  'tab_gray',
];

export default function tabColorsReducer(state = defaultData, action) {
  switch (action.type) {
    case 'GET':
      return state;
    default:
      return state;
  }
}
