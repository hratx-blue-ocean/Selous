/* eslint-disable no-case-declarations */
import { cloneDeep } from 'lodash';

const jobs = [
  {
    companyName: 'IBM',
    id: 1,
    position: 'Full Stack Engineer',
    tiles: ['send resume', 'applied', 'got phone call', 'got phone screen'],
  },
  {
    companyName: 'Googke',
    id: 2,
    position: 'Engineer',
    tiles: ['send resume', 'applied'],
  },
  {
    companyName: 'Facebook',
    id: 3,
    position: 'Full Stack Engineer',
    tiles: ['send resume', 'applied', 'got phone call'],
  },
];

export default function userJobsReducer(state = jobs, action) {
  switch (action.type) {
    case 'ADD_JOB':
      const newJobs = cloneDeep(state);
      newJobs.push(action.job);
      return newJobs;
    default:
      return state;
  }
}
