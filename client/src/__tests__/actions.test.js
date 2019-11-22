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

  it('should create an action to increment a goal', () => {
    const id = 13;
    const expectedAction = {
      type: 'INCREMENT_GOAL',
      id,
    };
    expect(actions.incrementGoalAction(id)).toEqual(expectedAction);
  });

  it('should create an action to decrement a goal', () => {
    const id = 13;
    const expectedAction = {
      type: 'DECREMENT_GOAL',
      id,
    };
    expect(actions.decrementGoalAction(id)).toEqual(expectedAction);
  });

  it('should create an action to add a goal', () => {
    const expectedAction = {
      type: 'ADD_GOAL',
    };
    expect(actions.addGoalAction()).toEqual(expectedAction);
  });

  it('should create an action to get goals', () => {
    const expectedAction = {
      type: 'GET_GOALS',
    };
    expect(actions.getGoalsAction()).toEqual(expectedAction);
  });

  it('should create an action to display the add job modal', () => {
    const expectedAction = {
      type: 'ADD_JOB_MODAL',
    };
    expect(actions.addJobModalAction()).toEqual(expectedAction);
  });

  it('should create an action to display whats next', () => {
    const expectedAction = {
      type: 'WHATS_NEXT',
    };
    expect(actions.whatsNextAction()).toEqual(expectedAction);
  });

  it('should create an action to set API search data', () => {
    const payload = 'developer';
    const expectedAction = {
      type: 'SET_API_DATA',
      payload,
    };
    expect(actions.setApiSearchData(payload)).toEqual(expectedAction);
  });

  it('should create an action to set search input', () => {
    const payload = 'software';
    const expectedAction = {
      type: 'SET_SEARCH',
      payload,
    };
    expect(actions.setSearchInput(payload)).toEqual(expectedAction);
  });

  it('should create an action to add user to state', () => {
    const data = { user: 'Bob' };
    const expectedAction = {
      type: 'GET_USER',
      data,
    };
    expect(actions.userToState(data)).toEqual(expectedAction);
  });

  it('should create an action to display job that has been clicked on', () => {
    const job = { id: 13 };
    const expectedAction = {
      type: 'CLICKED_JOB',
      job,
    };
    expect(actions.currentJobAction(job)).toEqual(expectedAction);
  });

  it('should create an action to resize window', () => {
    const win = 400;
    const expectedAction = {
      type: 'WINDOW_SIZE',
      win,
    };
    expect(actions.sizeWindowAction(win)).toEqual(expectedAction);
  });

  it('should create an action to display about modal', () => {
    const expectedAction = {
      type: 'ABOUT',
    };
    expect(actions.showAboutAction()).toEqual(expectedAction);
  });

  it('should create an action to display landing page', () => {
    const expectedAction = {
      type: 'HAVE_LAND',
    };
    expect(actions.landingAction()).toEqual(expectedAction);
  });

  it('should create an action to display login', () => {
    const expectedAction = {
      type: 'LOG_IN',
    };
    expect(actions.loginAction()).toEqual(expectedAction);
  });

  it('should create an action to reset the user', () => {
    const expectedAction = {
      type: 'RESET_USER',
    };
    expect(actions.resetUserAction()).toEqual(expectedAction);
  });

  it('should create an action to get tab colors', () => {
    const expectedAction = {
      type: 'GET_TAB_COLORS',
    };
    expect(actions.getTabColors()).toEqual(expectedAction);
  });

  it('should create an action to allow edits', () => {
    const expectedAction = {
      type: 'EDIT',
    };
    expect(actions.editAction()).toEqual(expectedAction);
  });
});
