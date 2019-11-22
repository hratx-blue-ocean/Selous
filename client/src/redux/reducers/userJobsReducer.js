/* eslint-disable no-case-declarations */
import { cloneDeep } from 'lodash';

export default function userJobsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_JOB':
      const newJobs = cloneDeep(state);
      newJobs.push(action.job);
      return newJobs;
    default:
      return state;
  }
}
