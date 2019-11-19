import React from 'react';
import { render } from 'react-testing-library';
import Login from '../components/Login/Login.jsx';

test('true is true', () => {
  expect(true).toBe(true);
});

describe('Login', () => {
  it('should render without crashing', () => {
    const { container } = render(<Login />);
    expect(container).toBeTruthy();
  });
});

// more tests here
