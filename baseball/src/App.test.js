import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders without errors', () => {
    const queries = render(<App />);
  });
  describe('Strike Button', () => {
    it('adds a strike up to 2, then resets all')
  })
});
