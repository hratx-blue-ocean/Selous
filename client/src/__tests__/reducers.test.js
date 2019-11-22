/* eslint-disable no-undef */
import { cleanup } from '@testing-library/react';
import addGoalReducer from '../redux/reducers/addGoalReducer.js';

describe('addGoalReducer', () => {
  afterEach(() => {
    cleanup();
  });

  it('should return the initial state', () => {
    expect(addGoalReducer(undefined, {})).toEqual(false);
  });
});
