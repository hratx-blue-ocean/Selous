const defaultData = [
  'border_red',
  'border_orange',
  'border_yellow',
  'border_green',
  'border_blue',
  'border_pinky',
  'border_magenta',
  'border_gray',
];

export default function tabColorsReducer(state = defaultData, action) {
  switch (action.type) {
    case 'GET_TAB_COLORS':
      return state;
    default:
      return state;
  }
}
