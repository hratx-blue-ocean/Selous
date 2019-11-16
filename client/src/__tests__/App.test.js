import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import App from '../App';

afterEach(cleanup);

describe("Headerbar", () => {
  it("should render without crashing", () => {
    const { container } = render(<Headerbar />);

    expect(container).toBeTruthy();
  });
});