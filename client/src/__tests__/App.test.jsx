/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import Login from '../components/Login/Login.jsx';

test('true is true', () => {
  expect(true).toBe(true);
});

describe('Login', ({ store }) => {
  it('should render without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });
});

// more tests here
