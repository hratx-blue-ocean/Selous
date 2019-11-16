export function toggleAction() {
  return {
    type: 'TOGGLE',
  };
}

export function AddJobAction(job) {
  return {
    type: 'ADD_JOB',
    job,
  };
}
