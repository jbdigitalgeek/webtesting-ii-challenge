import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders without errors', () => {
    const queries = render(<App />);
  });
  it('displays strikes, balls, and hits', () => {
    const { getByText } = render(<App />);
    getByText(/balls/i)
    getByText(/strikes/i)
    getByText(/hits/i)

  })
  // describe('Strike Button', () => {
  //   it('adds a strike up to 2, then resets all')
  // })
});
