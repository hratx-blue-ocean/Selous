export function jobPostingModalReducer(state = false, action) {
  switch (action.type) {
    case 'SHOW_JOB_POSTING':
      return !state;
    default:
      return state;
  }
}
export function addGoalModalReducer(state = true, action) {
  switch (action.type) {
    case 'ADD_GOAL':
      return !state;
    default:
      return state;
  }
}
export function addJobModalReducer(state = false, action) {
  switch (action.type) {
    case 'ADD_JOB':
      return !state;
    default:
      return state;
  }
}
export function whatsNextModalReducer(state = false, action) {
  switch (action.type) {
    case 'WHATS_NEXT':
      return !state;
    default:
      return state;
  }
}
export function editModalReducer(state = false, action) {
  switch (action.type) {
    case 'EDIT':
      return !state;
    default:
      return state;
  }
}
export function showAboutReducer(state = false, action) {
  switch (action.type) {
    case 'ABOUT':
      return !state;
    default:
      return state;
  }
}
