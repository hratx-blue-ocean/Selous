export default function currentJobReducer(state = {}, action) {
  switch (action.type) {
    case 'CLICKED_JOB':
      return action.job;
    default:
      return state;
  }
}
