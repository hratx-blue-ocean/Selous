/* eslint-disable no-undef */
import { cleanup } from '@testing-library/react';
import * as actions from '../redux/actions/actions.js';

test('true is true', () => {
  expect(true).toBe(true);
});

describe('actions', () => {
  afterEach(() => {
    cleanup();
  });

  it('should create an action to add a job', () => {
    const job = 'Cloud Developer';
    const expectedAction = {
      type: 'ADD_JOB',
      job,
    };
    expect(actions.AddJobAction(job)).toEqual(expectedAction);
  });
});
