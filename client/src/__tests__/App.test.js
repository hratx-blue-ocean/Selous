import React from 'react';
import { render } from 'react-testing-library';
import Headerbar from '../components/headerbar/Headerbar.jsx';

test('true is true', () => {
  expect(true).toBe(true);
});

describe('Headerbar', () => {
  it('should render without crashing', () => {
    const { container } = render(<Headerbar />);
    expect(container).toBeTruthy();
  });
});
