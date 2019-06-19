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
    getByText(/Balls/i)
    getByText(/Strikes/i)
    getByText(/hits/i)
  });
  // describe('Strike button', () => {
  //   it('adds a strike to the counter', () => {
  //     const { getByText, queryByText } = render(<App />);
  //     const button = getByText(/strikes/i);
  //     fireEvent.click(button);
  //     expect(queryByText(/strikes/i)).toBe(<h2>Strikes: 1</h2>);
  //   })
   
  // })
  describe('Ball button', () => {
    it('adds a ball to the counter', () => {
      const { getByText, queryByText } = render(<App />);
      const button = getByText(/Add Ball/i);
      fireEvent.click(button);
      expect(queryByText(/Balls/i).textContent).toBe('Balls: 1');
      fireEvent.click(button);
      expect(queryByText(/Balls/i).textContent).toBe('Balls: 2');
      fireEvent.click(button);
      expect(queryByText(/Balls/i).textContent).toBe('Balls: 3');
      // fireEvent.click(button);
      // expect(queryByText(/Balls/i).textContent).toBe('Balls: 0');

    });
   
  });
  // describe('Strike button', () => {

  // })

  
});
