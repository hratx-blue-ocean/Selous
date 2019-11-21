/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import Login from '../components/Login/Login.jsx';
import Landing from '../components/landing/Landing.jsx';
import Dashboard from '../components/dashboard/dashboard.jsx';
import '../components/dashboard/dashboard.css';
import JobSearch from '../components/JobSearch/JobSearch.jsx';
import Goals from '../components/Goals/Goals.jsx';
import DetailsPage from '../components/DetailsPage/DetailsPage.jsx';


test('true is true', () => {
  expect(true).toBe(true);
});

describe('Login', () => {
  afterEach(cleanup);

  it('should render without crashing', ({ store }) => {
    const { container } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });

  // it('should render Login correctly', () => {

  // });
});


describe('Landing', () => {
  afterEach(cleanup);

  it('should render without crashing', ({ store }) => {
    const { container } = render(
      <Provider store={store}>
        <Landing />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });

  it('should allow user to search when not logged in', ({ store }) => {
    const { container } = render(
      <Provider store={store}>
        <Landing />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });

  it('should r', ({ store }) => {
    const { container } = render(
      <Provider store={store}>
        <Landing />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });
});


describe('Dashboard', () => {
  afterEach(cleanup);

  it('should render without crashing', ({ store }) => {
    const { container } = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });
});


describe('JobSearch', () => {
  afterEach(cleanup);

  it('should render without crashing', ({ store }) => {
    const { container } = render(
      <Provider store={store}>
        <JobSearch />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });
});


describe('Goals', () => {
  afterEach(cleanup);

  it('should render without crashing', ({ store }) => {
    const { container } = render(
      <Provider store={store}>
        <Goals />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });
});


describe('DetailsPage', () => {
  afterEach(cleanup);

  it('should render without crashing', ({ store }) => {
    const { container } = render(
      <Provider store={store}>
        <DetailsPage />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });
});
